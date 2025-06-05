import React from 'react';


function Sidebar({ activeSection, onSectionChange }) {
  const navigationSections = [
    {
      title: "GET STARTED",
      items: [
        { name: "Dashboard", key: "Dashboard" },
        { name: "Content", key: "Content" },
        { name: "Chat", key: "Chat" },
      ]
    },
  ];

  return (
    <aside className="w-64 bg-gray-50 border-r border-gray-200 h-screen overflow-y-auto">
      <div className="p-4">
        <nav className="space-y-6">
          {navigationSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
                {section.title}
              </h3>
              <ul className="space-y-1">
                {section.items.map((item) => (
                  <li key={item.key}>
                    <button
                      onClick={() => onSectionChange(item.key)}
                      className={`w-full text-left block px-3 py-2 rounded-md text-sm transition-colors ${
                        activeSection === item.name
                          ? 'bg-gray-200 text-gray-900 font-medium'
                          : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                      }`}
                    >
                      {item.name}
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
