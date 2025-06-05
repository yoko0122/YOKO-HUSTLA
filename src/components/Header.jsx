import React from 'react';
import { User, Menu } from 'lucide-react';

function Header({ onLoginClick }) {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Menu className="w-6 h-6 text-gray-600 lg:hidden" />
          <h1 className="text-xl font-semibold text-gray-900">OpenAI</h1>
        </div>

        <div className="flex items-center space-x-4">
          <button
            onClick={onLoginClick}
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          >
            <User className="w-4 h-4 mr-2" />
            Login
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
