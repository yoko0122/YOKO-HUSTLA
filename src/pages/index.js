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
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Dashboard</h1>
            <p className="text-gray-600">Welcome to your dashboard. Select Content or Chat from the sidebar to get started.</p>
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
    <div className="min-h-screen bg-white">
      <Header onLoginClick={() => setShowLogin(true)} />
      <div className="flex">
        <Sidebar
          activeSection={activeSection}
          onSectionChange={setActiveSection}
          disabled={showLogin}
        />
        <main className="flex-1">
          {renderMainContent()}
        </main>
      </div>
    </div>
  );
}

export default Home;

