import React, { useState } from 'react';

const LoginStatus = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const toggleLogin = () => {
        setIsLoggedIn(!isLoggedIn);
    };

    const cardStyle = {
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        padding: '40px',
        borderRadius: '15px',
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
        width: '300px',
        textAlign: 'center',
        color: '#333',
        transition: 'transform 0.3s ease',
    };

    const buttonStyle = {
        padding: '12px 24px',
        fontSize: '16px',
        fontWeight: '600',
        color: 'white',
        backgroundColor: isLoggedIn ? '#e53e3e' : '#48bb78',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease, transform 0.2s ease',
        marginTop: '20px',
        width: '100%',
    };

    const statusStyle = {
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '10px',
        color: isLoggedIn ? '#2f855a' : '#718096',
    };

    return (
        <div style={cardStyle}>
            <div style={{ fontSize: '48px', marginBottom: '10px' }}>
                {isLoggedIn ? '🎉' : '🔒'}
            </div>
            <h2 style={statusStyle}>
                {isLoggedIn ? 'Welcome Back!' : 'Please Login'}
            </h2>
            <p style={{ color: '#718096', marginBottom: '20px' }}>
                {isLoggedIn ? 'You have successfully logged in.' : 'Access your dashboard by logging in.'}
            </p>
            <button
                onClick={toggleLogin}
                style={buttonStyle}
                onMouseOver={(e) => e.target.style.transform = 'scale(1.02)'}
                onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
            >
                {isLoggedIn ? 'Logout' : 'Login'}
            </button>
        </div>
    );
};

export default LoginStatus;
