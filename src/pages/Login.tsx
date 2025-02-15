import React from 'react';
  import LoginForm from '@/components/auth/LoginForm';

  const Login = () => {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="p-8 bg-white shadow-md rounded-lg w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
          <LoginForm />
        </div>
      </div>
    );
  };

  export default Login;
