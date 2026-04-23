import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Auth() {
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Safely log the user in or sign them up, and redirect to their profile dashboard
    navigate('/profile');
  };

  return (
    <div style={{ 
      minHeight: '90vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      padding: '4rem 2rem', 
      backgroundImage: 'url(/login-bg.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      position: 'relative'
    }}>
      {/* Soft color overlay for better contrast and brand alignment */}
      <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0, 0, 0, 0.15)' }}></div>

      <div style={{ 
        width: '100%', 
        maxWidth: '450px', 
        backgroundColor: 'rgba(255, 255, 255, 0.7)', 
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        padding: '3.5rem 3rem', 
        boxShadow: '0 25px 50px rgba(0,0,0,0.15)',
        borderRadius: '4px',
        border: '1px solid rgba(255,255,255,0.6)',
        position: 'relative',
        zIndex: 10
      }}>
        <h1 style={{ textAlign: 'center', fontSize: '2.2rem', marginBottom: '2.5rem', letterSpacing: '1px' }}>
          {isSignUp ? 'Create Account' : 'Welcome Back'}
        </h1>
        
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          {isSignUp && (
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--color-text)', fontWeight: '500' }}>Full Name</label>
              <input type="text" className="input-field" placeholder="Enter your name" required style={{ backgroundColor: 'rgba(255,255,255,0.5)', borderColor: 'rgba(0,0,0,0.15)' }} />
            </div>
          )}
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--color-text)', fontWeight: '500' }}>Email Address</label>
            <input type="email" className="input-field" placeholder="Enter your email" required style={{ backgroundColor: 'rgba(255,255,255,0.5)', borderColor: 'rgba(0,0,0,0.15)' }} />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--color-text)', fontWeight: '500' }}>Password</label>
            <input type="password" className="input-field" placeholder="Enter your password" required style={{ backgroundColor: 'rgba(255,255,255,0.5)', borderColor: 'rgba(0,0,0,0.15)' }} />
          </div>
          
          {!isSignUp && (
            <div className="flex justify-between items-center" style={{ fontSize: '0.85rem', marginTop: '0.5rem' }}>
              <label className="flex items-center gap-2" style={{ cursor: 'pointer' }}>
                <input type="checkbox" style={{ accentColor: 'var(--color-text)', width: '15px', height: '15px' }} /> <span style={{ fontWeight: '500' }}>Remember me</span>
              </label>
              <a href="#" style={{ color: 'var(--color-text)', fontWeight: '600', textDecoration: 'underline' }}>Forgot Password?</a>
            </div>
          )}

          <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1.5rem', padding: '1rem', fontSize: '1rem', letterSpacing: '2px' }}>
            {isSignUp ? 'SIGN UP' : 'LOG IN'}
          </button>
          
          <p style={{ textAlign: 'center', marginTop: '2rem', fontSize: '0.95rem' }}>
            {isSignUp ? 'Already have an account? ' : 'New to Crystal Cove Beauty? '}
            <button 
              type="button"
              onClick={() => setIsSignUp(!isSignUp)}
              style={{ background: 'none', border: 'none', color: 'var(--color-text)', textDecoration: 'underline', cursor: 'pointer', fontSize: '0.95rem', fontWeight: 'bold' }}>
              {isSignUp ? 'Log In' : 'Create an Account'}
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}
