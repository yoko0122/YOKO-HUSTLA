import React from 'react';
import { User, Menu } from 'lucide-react';

function Header({ onLoginClick }) {
  return (
    <header className="bg-black text-white shadow-md">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-4">
          <Menu className="w-6 h-6 text-white lg:hidden" />
          <h1 className="text-xl font-semibold bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">OpenAI</h1>
        </div>

        <div className="flex items-center space-x-4">
          <button
            onClick={onLoginClick}
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 text-white text-sm font-medium rounded-md hover:from-blue-800 hover:via-indigo-800 hover:to-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors shadow-lg"
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
