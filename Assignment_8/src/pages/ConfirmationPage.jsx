import React from 'react';

const ConfirmationPage = () => {
  const data = JSON.parse(localStorage.getItem('bookingData')) || {};
  const bookingId = Math.floor(Math.random() * 1000000);

  return (
    <div className="text-center p-6">
      <h2 className="text-2xl font-bold mb-4 text-green-600">Booking Confirmed!</h2>
      <p className="mb-2">Booking ID: <strong>{bookingId}</strong></p>
      <p>Name: {data.name}</p>
      <p>Email: {data.email}</p>
      <p>Mobile: {data.mobile}</p>
    </div>
  );
};

export default ConfirmationPage;
