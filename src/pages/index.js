import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import LoginForm from "../components/LoginForm";
import ContentSection from '../components/ContentSection.jsx';
import ChatSection from '../components/ChatSection';

console.log('ContentSection check:', ContentSection);

function Home () {
  const [showLogin, setShowLogin] = useState(false);
  const [activeSection, setActiveSection] = useState('Dashboard');
  const [userSubmissions, setUserSubmissions] = useState([]);
  const [showSidebar, setShowSidebar] = useState(false);

  const handleCreateSubmission = (name, systemInstructions) => {
    const newSubmission = {
      id: Math.random().toString(36).substr(2, 9),
      name,
      systemInstructions,
      createdAt: new Date()
    };
    setUserSubmissions(prev => [...prev, newSubmission]);
  };

  const renderMainContent = () => {
    if (showLogin) {
      return (
        <div className="p-4">
          <LoginForm onClose={() => setShowLogin(false)} />
        </div>
      );
    }

    switch (activeSection) {
      case 'Dashboard':
        return (
          <div className="p-8 bg-gray-900 rounded-xl shadow-lg">
            <h1 className="text-3xl font-bold text-white mb-4">Dashboard</h1>
            <p className="text-gray-300">Welcome to your dashboard. Select Content or Chat from the sidebar to get started.</p>
          </div>
        );
      case 'Content':
        return (
          <ContentSection
            submissions={userSubmissions}
            onCreateSubmission={handleCreateSubmission}
          />
        );
      case 'Chat':
        return <ChatSection/>;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <Header onLoginClick={() => setShowLogin(true)} />
      <div className="flex flex-col md:flex-row">
        {/* Mobile sidebar toggle button */}
        <div className="md:hidden flex justify-between items-center px-4 py-2">
          <button
            className="text-white focus:outline-none"
            onClick={() => setShowSidebar((prev) => !prev)}
            aria-label="Toggle sidebar"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {/* Sidebar: mobile (drawer) and desktop */}
        <div className={`fixed inset-0 z-40 bg-black bg-opacity-60 transition-opacity duration-300 md:hidden ${showSidebar ? 'block' : 'hidden'}`}
          onClick={() => setShowSidebar(false)}
        />
        <div className={`fixed top-0 left-0 z-50 h-full w-64 bg-black border-r border-gray-800 transform transition-transform duration-300 md:static md:translate-x-0 ${showSidebar ? 'translate-x-0' : '-translate-x-full'} md:block`}>
          <Sidebar
            activeSection={activeSection}
            onSectionChange={(section) => {
              setActiveSection(section);
              setShowSidebar(false);
            }}
            disabled={showLogin}
            className="h-full"
          />
        </div>
        {/* Main content */}
        <main className="flex-1 p-2 sm:p-4 md:p-8 max-w-full">
          {renderMainContent()}
        </main>
      </div>
    </div>
  );
}

export default Home;

