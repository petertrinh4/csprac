import React, { useState } from 'react';

const ChatBot: React.FC = () => {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
        setMessages(prev => [...prev, { role: 'assistant', content: data.reply }]);
      } else {
        setMessages(prev => [
          ...prev,
          { role: 'assistant', content: 'Sorry, there was an error.' },
        ]);
      }
    } catch (err) {
      setMessages(prev => [...prev, { role: 'assistant', content: 'Error connecting to AI.' }]);
    }
    setLoading(false);
  };

  return (
    <div>
      <div
        className={`chatbot card bg-base-100 shadow-lg w-80 fixed bottom-4 right-4 transition-transform ${
          isOpen ? 'translate-y-0' : 'translate-y-[calc(100%+1rem)]'
        }`}
        style={{
          fontFamily: 'Arial Black, sans-serif',
          color: '#000000',
          minHeight: isOpen ? 400 : 0,
          display: isOpen ? 'flex' : 'none',
          flexDirection: 'column',
        }}
      >
        <div
          className="card-body p-4"
          style={{ flex: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
        >
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-bold">🤖 Need Help? Ask Your AI Friend! 💬</h2>
            <span
              className="text-sm text-gray-600 cursor-pointer hover:text-gray-800"
              title="Click to close"
              onClick={() => setIsOpen(false)}
              style={{ marginTop: '-8px' }}
            >
              ▼
            </span>
          </div>
          <div
            className="chat-messages mb-2"
            style={{ flex: 1, maxHeight: 'calc(100% - 50px)', overflowY: 'auto' }}
          >
            {messages.map((msg, idx) => (
              <div key={idx} className={`mb-2 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
                <span
                  className={`inline-block px-3 py-2 rounded-full text-sm border ${
                    msg.role === 'user'
                      ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-black border-yellow-300'
                      : 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-black border-yellow-300'
                  }`}
                >
                  {msg.content}
                </span>
              </div>
            ))}
            {loading && (
              <div className="text-left">
                <span className="inline-block px-3 py-2 rounded-full bg-gray-300 text-sm text-black">
                  Thinking...
                </span>
              </div>
            )}
          </div>
        </div>
        <div className="p-4 flex gap-2 border-t border-gray-200">
          <input
            type="text"
            className="input input-bordered flex-1 rounded-full px-4 py-2 border border-[#f5f6f7] bg-gradient-to-r from-yellow-200 to-yellow-300 text-black"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && sendMessage()}
            placeholder="Type your question..."
            disabled={loading}
          />
          <button
            className="btn btn-primary rounded-full px-4 py-2 border border-[#f5f6f7] bg-gradient-to-r from-yellow-400 to-yellow-500 text-white"
            onClick={sendMessage}
            disabled={loading || !input.trim()}
          >
            Send
          </button>
        </div>
      </div>
      {!isOpen && (
        <button
          className="fixed bottom-4 right-4 text-white rounded-full p-4 shadow-lg"
          style={{
            backgroundColor: '#bc9904',
            fontFamily: 'Arial Black, sans-serif',
          }}
          onClick={() => setIsOpen(true)}
        >
          Chat
        </button>
      )}
    </div>
  );
};

export default ChatBot;
