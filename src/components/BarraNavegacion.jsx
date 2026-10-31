import { Link } from 'react-router-dom';
import { useCarrito } from '../hooks/useCarrito';

export const BarraNavegacion = () => {
  const { totalArticulos, tema, alternarTema } = useCarrito();

  const headerBg = tema === 'dark' ? '#020617' : '#3d0211'; 
  const textColor = '#f1f5f9'; 

  return (
    <header style={{ 
      backgroundColor: headerBg, 
      padding: '1rem 2rem', 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center',
      transition: 'background-color 0.3s ease',
      boxShadow: '0 4px 6px rgba(0,0,0,0.15)',
      borderBottom: `1px solid ${tema === 'dark' ? '#1e293b' : '#5c061c'}`
    }}>
      <h2 style={{ margin: 0, color: textColor }}>An Vinos</h2>
      
      <nav style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
        <Link to="/" style={{ color: textColor, textDecoration: 'none', fontWeight: 'bold' }}>
          Inicio
        </Link>
        <Link to="/catalogo" style={{ color: textColor, textDecoration: 'none', fontWeight: 'bold' }}>
          Catálogo
        </Link>
        <Link to="/carrito" style={{ color: textColor, textDecoration: 'none', fontWeight: 'bold' }}>
          Carrito ({totalArticulos})
        </Link>
        
        <button
          onClick={alternarTema}
          style={{
            background: tema === 'dark' ? '#1e293b' : '#5c061c',
            border: '1px solid rgba(255,255,255,0.2)',
            color: '#fff',
            padding: '0.4rem 0.8rem',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 'bold',
          }}
        >
          {tema === 'dark' ? 'Modo Claro' : 'Modo Oscuro'}
        </button>
      </nav>
    </header>
  );
};