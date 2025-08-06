import React, { useState } from 'react';
import './TemplateForm.css';

function TemplateForm({ onClose, onSubmit }) {
  const [templateName, setTemplateName] = useState('');
  const [features, setFeatures] = useState([]);
  const featureTypes = ['Text', 'Number', 'Date', 'Checkbox'];

  const handleAddFeature = () => {
    setFeatures([...features, { name: '', type: 'Text' }]);
  };

  const handleFeatureChange = (idx, field, value) => {
    const updated = features.map((f, i) =>
      i === idx ? { ...f, [field]: value } : f
    );
    setFeatures(updated);
  };

  const handleRemoveFeature = (idx) => {
    setFeatures(features.filter((_, i) => i !== idx));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(templateName, features);
  };

  return (
    <form onSubmit={handleSubmit} className="dashboard-template-form template-form-centered">
      <div className="dashboard-modal-header template-form-header">
        <span className="template-form-title">Create New Template</span>
        <button
          type="button"
          className="dashboard-modal-close template-form-close"
          onClick={onClose}
          aria-label="Close"
        >×</button>
      </div>

      <div className="dashboard-form-group template-form-group">
        <label className="template-form-label">Template Name</label>
        <input
          type="text"
          value={templateName}
          onChange={e => setTemplateName(e.target.value)}
          required
          className="dashboard-form-input template-form-input"
          placeholder="Enter template name"
        />
      </div>

      <div className="dashboard-form-group template-form-group">
        <label className="template-form-label">Features</label>
        <div
          className="dashboard-features-table-wrapper template-features-table-wrapper"
          style={{
            maxHeight: '250px',
            overflowY: 'auto',
            border: '1px solid #ddd',
            borderRadius: '4px',
            marginBottom: '10px'
          }}
        >
          <table
            className="dashboard-features-table template-features-table"
            style={{ width: '100%', borderCollapse: 'collapse', tableLayout: 'fixed' }}
          >
            <colgroup>
              <col style={{ width: '33.33%' }} />
              <col style={{ width: '33.33%' }} />
              <col style={{ width: '33.33%' }} />
            </colgroup>
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, idx) => (
                <tr key={idx} className="">
                  <td>
                    <input
                      type="text"
                      value={feature.name}
                      onChange={e => handleFeatureChange(idx, 'name', e.target.value)}
                      placeholder=""
                      className=""
                      required
                      style={{ width: '100%' }}
                    />
                  </td>
                  <td>
                    <select
                      value={feature.type}
                      onChange={e => handleFeatureChange(idx, 'type', e.target.value)}
                      className=""
                      style={{ width: '100%' }}
                    >
                      {featureTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </td>
                  <td>
                    <button
                      type="button"
                      className=""
                      onClick={() => handleRemoveFeature(idx)}
                      title="Remove feature"
                      style={{ width: '100%' }}
                    >×</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button
          type="button"
          className="dashboard-feature-add template-feature-add"
          onClick={handleAddFeature}
        >+ Add Feature</button>
      </div>

      <div className="dashboard-form-actions template-form-actions">
        <button
          type="submit"
          className="dashboard-form-submit template-form-submit"
        >
          Create Template
        </button>
      </div>
    </form>
  );
}

export default TemplateForm;