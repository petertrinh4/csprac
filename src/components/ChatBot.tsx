import React, { useState } from 'react';

const ChatBot: React.FC = () => {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = { role: 'user', content: input };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setLoading(true);
    setInput('');
    try {
      const endpoint =
        process.env.NODE_ENV === 'development'
          ? 'http://localhost:3001/openai-chat'
          : '/api/openai-chat';
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages: newMessages }),
      });
      const data = await res.json();
      if (data.reply) {
        setMessages((prev) => [...prev, { role: 'assistant', content: data.reply }]);
      } else {
        setMessages((prev) => [...prev, { role: 'assistant', content: 'Sorry, there was an error.' }]);
      }
    } catch (err) {
      setMessages((prev) => [...prev, { role: 'assistant', content: 'Error connecting to AI.' }]);
    }
    setLoading(false);
  };

  return (
    <div className="chatbot card bg-base-100 shadow-none max-w-md w-full mx-auto">
      <div className="card-body p-4">
        <h2 className="text-lg font-bold mb-2">Ask the AI Chatbot</h2>
        <div className="chat-messages mb-2" style={{ maxHeight: 200, overflowY: 'auto' }}>
          {messages.map((msg, idx) => (
            <div key={idx} className={`mb-1 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
              <span className={`inline-block px-2 py-1 rounded ${msg.role === 'user' ? 'bg-blue-100' : 'bg-gray-100'}`}>{msg.content}</span>
            </div>
          ))}
          {loading && <div className="text-left"><span className="inline-block px-2 py-1 rounded bg-gray-100">Thinking...</span></div>}
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            className="input input-bordered flex-1"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            placeholder="Type your question..."
            disabled={loading}
          />
          <button className="btn btn-primary" onClick={sendMessage} disabled={loading || !input.trim()}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};
export default ChatBot;