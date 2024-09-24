import React, { useState } from 'react';

const NGORegistration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    region: '',
    services: '',
    focusArea: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form data to backend or API
    console.log(formData);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">NGO Registration</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="NGO Name"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="NGO Email"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          name="region"
          value={formData.region}
          onChange={handleChange}
          placeholder="Region (e.g., Maharashtra)"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          name="services"
          value={formData.services}
          onChange={handleChange}
          placeholder="Services (e.g., Financial Aid, Tutoring)"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          name="focusArea"
          value={formData.focusArea}
          onChange={handleChange}
          placeholder="Focus Area (e.g., Urban, Rural)"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">
          Register
        </button>
      </form>
    </div>
  );
};

export default NGORegistration;
