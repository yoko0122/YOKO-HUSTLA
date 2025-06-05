import React from 'react';
import { HiOutlineViewGrid, HiOutlineDocumentText, HiOutlineChatAlt2 } from 'react-icons/hi';


function Sidebar({ activeSection, onSectionChange }) {
  const navigationSections = [
    {
      title: "GET STARTED",
      items: [
        { name: "Dashboard", key: "Dashboard", icon: <HiOutlineViewGrid className="inline mr-2 text-lg" /> },
        { name: "Content", key: "Content", icon: <HiOutlineDocumentText className="inline mr-2 text-lg" /> },
        { name: "Chat", key: "Chat", icon: <HiOutlineChatAlt2 className="inline mr-2 text-lg" /> },
      ]
    },
  ];

  return (
    <aside className="w-64 bg-black border-r border-gray-800 h-screen overflow-y-auto">
      <div className="p-4">
        <nav className="space-y-6">
          {navigationSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-xs font-semibold text-gray-300 uppercase tracking-wide mb-3">
                {section.title}
              </h3>
              <ul className="space-y-1">
                {section.items.map((item) => (
                  <li key={item.key}>
                    <button
                      onClick={() => onSectionChange(item.key)}
                      className={`w-full text-left block px-3 py-2 rounded-md text-sm transition-colors ${
                        activeSection === item.name
                          ? 'bg-gray-800 text-white font-medium'
                          : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                      }`}
                    >
                      {item.icon}{item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;
