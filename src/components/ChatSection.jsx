import React from 'react';
import { Send, Bot, User } from 'lucide-react';

function ChatSection() {
  const messages = [
    {
      id: 1,
      sender: 'bot',
      text: 'Hello! How can I help you today?',
      timestamp: new Date()
    },
    {
      id: 2,
      sender: 'user',
      text: 'What is the weather like?',
      timestamp: new Date()
    }
  ];

  return (
    <div className="flex flex-col h-[80vh] bg-gray-900 rounded-xl shadow-lg">
      <div className="p-6 border-b border-gray-800 bg-gray-900 rounded-t-xl">
        <h1 className="text-3xl font-bold text-white">Chat</h1>
        <p className="text-gray-300 mt-2">Start a conversation with our AI assistant</p>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex items-start space-x-3 ${
              message.sender === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            {message.sender === 'bot' && (
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" />
                </div>
              </div>
            )}

            <div
              className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                message.sender === 'user'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-800 text-gray-100'
              }`}
            >
              <p className="text-sm">{message.text}</p>
              <p className={`text-xs mt-1 ${
                message.sender === 'user' ? 'text-blue-200' : 'text-gray-400'
              }`}>
                {message.timestamp.toLocaleTimeString()}
              </p>
            </div>

            {message.sender === 'user' && (
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="p-6 bg-gray-900 border-t border-gray-800 rounded-b-xl">
        <form className="flex space-x-3">
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-1 px-4 py-2 border border-gray-700 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
            enabled
          />
          <button
            type="button"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg opacity-50 cursor-not-allowed"
            enabled
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChatSection;
