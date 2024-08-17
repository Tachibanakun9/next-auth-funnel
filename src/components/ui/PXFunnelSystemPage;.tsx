import React from 'react';

const PXFunnelSystemPage = () => {
  return (
    <div style={{
      backgroundColor: '#121212',
      color: 'white',
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif',
      padding: '20px',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center'
    }}>
      <header style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '20px'
      }}>
        <h1 style={{ fontSize: '18px', fontWeight: 'bold' }}>PERSUASION EXPERIENCE</h1>
        <nav>
          <a href="#" style={linkStyle}>home</a>
          <a href="#" style={linkStyle}>Products</a>
          <a href="#" style={linkStyle}>Blog</a>
          <a href="#" style={linkStyle}>Contact-us</a>
        </nav>
      </header>

      <main style={{ maxWidth: '600px', width: '100%', flex: 1 }}>
        {/* Main content remains the same */}
        {/* ... */}
      </main>
        <h2>
          <span style={{ color: '#4299e1', display: 'block', fontSize: '18px' }}>VS</span>
          THE PX FUNNEL SYSTEM
        </h2>

        <div style={{
          background: 'linear-gradient(90deg, #121212, #4299e1, #121212)',
          height: '2px',
          width: '100%',
          margin: '20px 0'
        }}></div>

        <h3 style={{
          fontSize: '20px',
          marginBottom: '20px'
        }}>OUR STORY</h3>

        <p style={{ marginBottom: '15px', lineHeight: '1.5' }}>
          Once upon a time in late 2021, two ambitious marketers (aka Alisha & Matt) shook hands over breakfast to 'rage quit' their day jobs. They were done working in the confines of a 9-5, were getting awesome results for their side hustle clients... and wanted to take it to the next level.
        </p>

        <ul style={{ 
          listStyleType: 'none', 
          padding: 0,
          marginBottom: '15px',
          lineHeight: '1.5'
        }}>
          <li>• Signed x2 unicorn billion dollar brands</li>
          <li>• Hit multiple six-figures</li>
          <li>• Invited to speak at industry events</li>
          <li>• Dozens of podcast interviews</li>
          <li>• Buying ergonomic office chairs</li>
        </ul>

        <p style={{ 
          color: '#4299e1', 
          fontStyle: 'italic',
          marginTop: '20px'
        }}>
          "If you don't create a purposeful Persuasion..."
        </p>
      
    




























      <footer style={{
        width: '100%',
        borderTop: '1px solid #333',
        marginTop: '40px',
        paddingTop: '20px',
        textAlign: 'center'
      }}>
        <div style={{ marginBottom: '20px' }}>
          <a href="#" style={footerLinkStyle}>Home</a>
          <a href="#" style={footerLinkStyle}>Products</a>
          <a href="#" style={footerLinkStyle}>Blog</a>
          <a href="#" style={footerLinkStyle}>Contact Us</a>
          <a href="#" style={footerLinkStyle}>Sign In</a>
          <a href="#" style={footerLinkStyle}>Sign Up</a>
        </div>
        <div style={{ marginBottom: '20px' }}>
          <a href="#" style={footerLinkStyle}>Admin Page</a>
          <a href="#" style={footerLinkStyle}>Terms and Conditions</a>
          <a href="#" style={footerLinkStyle}>Privacy Policy</a>
        </div>
        <div style={{ fontSize: '14px', color: '#888' }}>
          © 2024 Persuasion Experience. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  marginLeft: '15px',
  fontSize: '14px'
};

const footerLinkStyle = {
  color: '#4299e1',
  textDecoration: 'none',
  margin: '0 10px',
  fontSize: '14px'
};

export default PXFunnelSystemPage;