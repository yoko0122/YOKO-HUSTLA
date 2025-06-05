import React, { useState } from 'react';
import { Plus, User, FileText } from 'lucide-react';

console.log('Plus:', Plus);
console.log('User:', User);
console.log('FileText:', FileText);


function ContentSection({ submissions, onCreateSubmission }) {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    systemInstructions: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name.trim() && formData.systemInstructions.trim()) {
      onCreateSubmission(formData.name.trim(), formData.systemInstructions.trim());
      setFormData({ name: '', systemInstructions: '' });
      setShowForm(false);
    }
  };

  const handleCancel = () => {  
    setFormData({ name: '', systemInstructions: '' });
    setShowForm(false);
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-white">Content</h1>
        <button
          onClick={() => setShowForm(true)}
          className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 text-white text-sm font-medium rounded-md hover:from-blue-800 hover:via-indigo-800 hover:to-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors shadow-lg"
        >
          <Plus className="w-4 h-4 mr-2" />
          Create
        </button>
      </div>

      {showForm && (
        <div className="mb-8 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Create New Submission</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter name"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="systemInstructions" className="block text-sm font-medium text-gray-700 mb-2">
                System Instructions
              </label>
              <textarea
                id="systemInstructions"
                value={formData.systemInstructions}
                onChange={(e) => setFormData(prev => ({ ...prev, systemInstructions: e.target.value }))}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter system instructions"
                required
              />
            </div>
            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={handleCancel}
                className="px-4 py-2 text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
              >
                Create
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="space-y-4">
        {submissions.length === 0 && (
          <div className="text-center py-12">
            <FileText className="mx-auto mb-4 w-12 h-12 text-gray-500" />
            <p className="text-lg text-white">No submissions yet</p>
            <p className="text-gray-400">Start by creating your first submission.</p>
          </div>
        )}
        {submissions.map((submission) => (
          <div key={submission.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <User className="w-6 h-6 text-gray-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-medium text-gray-900 mb-2">{submission.name}</h3>
                <p className="text-gray-600 mb-3">{submission.systemInstructions}</p>
                <p className="text-sm text-gray-500">
                  Created on {submission.createdAt.toLocaleDateString()} at {submission.createdAt.toLocaleTimeString()}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContentSection;
