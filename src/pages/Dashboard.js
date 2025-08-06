import React, { useState } from 'react';
import './Dashboard.css';
import TemplateForm from './TemplateForm';

function Dashboard() {
  // Dummy user data for display
  const user = {
    name: 'John Doe',
    avatar: 'https://i.pravatar.cc/40?img=3'
  };

  // Example templates array (replace with real data as needed)
  const [templates, setTemplates] = useState([
    // Example:
    // { id: 1, name: 'Survey Form', description: 'A simple survey template.' },
    // { id: 2, name: 'Contact Form', description: 'Collect contact info.' }
  ]);

  // Modal state for new template
  const [showForm, setShowForm] = useState(false);

  // Handlers
  const handleNewTemplate = () => {
    setShowForm(true);
  };

  const handleFormClose = () => {
    setShowForm(false);
  };

  const handleFormSubmit = (templateName, features) => {
    // Here you would add the new template to your templates list or backend
    alert(`Template "${templateName}" created with ${features.length} features.`);
    setShowForm(false);
    // Optionally update templates state here
  };

  return (
    <div className="App app-bg dashboard-root">
      {/* Navbar */}
      <nav className="dashboard-navbar">
        <div className="dashboard-navbar-left">
          <span className="dashboard-logo">
            easy-input
          </span>
          <span className="dashboard-projects-link" style={{ marginLeft: '16px' }}>
            Projects
          </span>
          <span className="dashboard-templates-link" style={{ marginLeft: '16px' }}>
            Templates
          </span>
        </div>
        <div className="dashboard-navbar-right">
          <button className="dashboard-new-template-btn" onClick={handleNewTemplate}>
            + New Template
          </button>
          <div className="dashboard-user">
            <img
              src={user.avatar}
              alt="avatar"
              className="dashboard-avatar"
            />
            <span className="dashboard-username">{user.name}</span>
          </div>
        </div>
      </nav>
      {/* Main Content */}
      <div className="dashboard-main">
        <div className="dashboard-content">
          <header className="dashboard-header">
            <h1 className="app-title dashboard-title">Dashboard</h1>
          </header>
          <div className="dashboard-templates-title">
            {templates.length === 0
              ? "You don't have any templates yet."
              : "Your Templates"}
          </div>
          <div className="dashboard-templates-grid">
            {/* Show templates if any */}
            {templates.map(template => (
              <div
                key={template.id}
                className="dashboard-template-card"
              >
                <div className="dashboard-template-name">
                  {template.name}
                </div>
                <div className="dashboard-template-desc">
                  {template.description}
                </div>
                <button className="dashboard-template-open-btn">
                  Open
                </button>
              </div>
            ))}
            {/* Always show the blank template card */}
            <div
              onClick={handleNewTemplate}
              className="dashboard-template-card-blank"
            >
              <div className="dashboard-template-blank-icon">
                <span>+</span>
              </div>
              <div className="dashboard-template-blank-title">
                Blank Template
              </div>
              <div className="dashboard-template-blank-desc">
                Start from scratch
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modal for new template */}
      {showForm && (
        <div className="dashboard-modal-overlay">
          <div className="dashboard-modal">
            <TemplateForm
              onClose={handleFormClose}
              onSubmit={handleFormSubmit}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
