export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, subject, message, rating } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({
      error: 'Missing required fields: name, email, subject, and message are required',
    });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }

  try {
    const feedbackData = {
      timestamp: new Date().toISOString(),
      name,
      email,
      subject,
      message,
      rating: rating || 'Not provided',
      userAgent: req.headers['user-agent'] || 'Unknown',
      ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress || 'Unknown',
    };

    console.log('=== FEEDBACK RECEIVED ===');
    console.log('Timestamp:', feedbackData.timestamp);
    console.log('Name:', feedbackData.name);
    console.log('Email:', feedbackData.email);
    console.log('Subject:', feedbackData.subject);
    console.log('Rating:', feedbackData.rating);
    console.log('Message:', feedbackData.message);
    console.log('User Agent:', feedbackData.userAgent);
    console.log('IP:', feedbackData.ip);
    console.log('========================');

    // EMAIL CODE - Uncomment and configure to send emails
    /*
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    
    const msg = {
      to: process.env.FEEDBACK_EMAIL,
      from: process.env.SENDGRID_FROM_EMAIL,
      subject: `Website Feedback: ${subject}`,
      text: `
        New feedback received from your website:
        
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Rating: ${rating || 'Not provided'}
        
        Message:
        ${message}
        
        ---
        Sent from: ${req.headers['user-agent']}
        IP: ${req.headers['x-forwarded-for'] || req.connection.remoteAddress}
        Timestamp: ${new Date().toISOString()}
      `,
      html: `
        <h2>New Feedback Received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Rating:</strong> ${rating || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><small>
          Sent from: ${req.headers['user-agent']}<br>
          IP: ${req.headers['x-forwarded-for'] || req.connection.remoteAddress}<br>
          Timestamp: ${new Date().toISOString()}
        </small></p>
      `
    };
    
    await sgMail.send(msg);
    */

    res.status(200).json({
      success: true,
      message: 'Feedback received successfully',
      ...(process.env.NODE_ENV === 'development' && {
        debug: 'Email sending not implemented yet. Check server logs for feedback data.',
      }),
    });
  } catch (error) {
    console.error('Error processing feedback:', error);
    res.status(500).json({
      error: 'Failed to process feedback',
      ...(process.env.NODE_ENV === 'development' && {
        details: error.message,
      }),
    });
  }
}
