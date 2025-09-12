import React from 'react';

interface Link {
  href: string;
  text: string;
}

interface UsefulLinksProps {
  links: Link[];
}

const UsefulLinks: React.FC<UsefulLinksProps> = ({ links }) => {
  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '10px', padding: '20px', background: 'linear-gradient(to bottom, #ffe680, #fff)', margin: '20px 0' }}>
      <h3 className="page-header" style={{ textAlign: 'center', fontFamily: 'Arial Black, Gadget, sans-serif' }}>Useful Links</h3>
      <ul style={{ padding: 0, listStyleType: 'none' }}>
        {links.map((link, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'blue', textDecoration: 'underline' }}
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsefulLinks;