import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BookingForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', mobile: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('bookingData', JSON.stringify(formData));
    navigate('/confirmation');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4 max-w-md mx-auto">
      <input type="text" name="name" placeholder="Name" required onChange={handleChange} className="w-full p-2 border rounded" />
      <input type="email" name="email" placeholder="Email" required onChange={handleChange} className="w-full p-2 border rounded" />
      <input type="tel" name="mobile" placeholder="Mobile" required onChange={handleChange} className="w-full p-2 border rounded" />
      <button type="submit" className="w-full bg-green-500 text-black p-2 rounded">Submit</button>
    </form>
  );
};

export default BookingForm;
