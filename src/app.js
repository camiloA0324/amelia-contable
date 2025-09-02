import React from 'react';

function App() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontFamily: 'system-ui, sans-serif'
    }}>
      <div style={{textAlign: 'center'}}>
        <h1 style={{fontSize: '4rem', marginBottom: '1rem'}}>📊</h1>
        <h2 style={{fontSize: '2rem', marginBottom: '0.5rem'}}>Amelia Contable</h2>
        <p>Sistema de Gestión para Zapaterías</p>
        <button style={{
          marginTop: '2rem',
          padding: '0.75rem 2rem',
          fontSize: '1rem',
          background: 'white',
          color: '#667eea',
          border: 'none',
          borderRadius: '0.5rem',
          cursor: 'pointer',
          fontWeight: 'bold'
        }}>
          Iniciar Sistema
        </button>
      </div>
    </div>
  );
}

export default App;