import React from 'react';

const ErrorMessage = ({ message }) => {
  return <p style={{ color: '#cf6679', textAlign: 'center', fontWeight: 'bold' }}>{message}</p>;
};

export default ErrorMessage;