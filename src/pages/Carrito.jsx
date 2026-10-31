import { Link } from 'react-router-dom';
import { useCarrito } from '../hooks/useCarrito';

export const Carrito = () => {
  const { carrito, cambiarCantidad, eliminarDelCarrito, vaciarCarrito, totalPrecio, tema } = useCarrito();

  if (carrito.length === 0) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h2>Tu carrito está vacío 🍷</h2>
        <p style={{ margin: '1rem 0 1.5rem', opacity: 0.85 }}>
          Aún no agregaste ningún vino a tu selección.
        </p>
        <Link 
          to="/catalogo"
          style={{
            display: 'inline-block',
            backgroundColor: '#5c061c',
            color: '#fff',
            padding: '0.8rem 1.5rem',
            borderRadius: '6px',
            textDecoration: 'none',
            fontWeight: 'bold',
            boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
            transition: 'background-color 0.2s'
          }}
        >
          Volver a comprar
        </Link>
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h2>Tu Carrito de Compras</h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', margin: '1.5rem 0' }}>
        {carrito.map((item) => {
          const precioItem = item.precioCalculado || item.precio || 15500;
          return (
            <div 
              key={item.id} 
              style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                backgroundColor: tema === 'dark' ? '#1e293b' : '#ffffff',
                padding: '1rem', 
                borderRadius: '8px',
                border: `1px solid ${tema === 'dark' ? '#334155' : '#e0e0e0'}`,
                boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <img 
                  src={item.image} 
                  alt={item.wine} 
                  style={{ width: '50px', height: '50px', objectFit: 'contain' }}
                  onError={(e) => { e.target.src = 'https://via.placeholder.com/50?text=Vino'; }}
                />
                <div>
                  <h4 style={{ margin: '0 0 0.3rem 0' }}>{item.wine}</h4>
                  <p style={{ margin: 0, opacity: 0.8, fontSize: '0.9rem' }}>${precioItem.toLocaleString('es-AR')} c/u</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <button 
                    onClick={() => cambiarCantidad(item.id, -1)}
                    style={{ padding: '0.2rem 0.6rem', cursor: 'pointer', fontWeight: 'bold' }}
                  >
                    -
                  </button>
                  <span>{item.cantidad}</span>
                  <button 
                    onClick={() => cambiarCantidad(item.id, 1)}
                    style={{ padding: '0.2rem 0.6rem', cursor: 'pointer', fontWeight: 'bold' }}
                  >
                    +
                  </button>
                </div>

                <p style={{ fontWeight: 'bold', minWidth: '80px', textAlign: 'right', margin: 0 }}>
                  ${(precioItem * item.cantidad).toLocaleString('es-AR')}
                </p>

                <button 
                  onClick={() => eliminarDelCarrito(item.id)}
                  style={{ backgroundColor: '#ef4444', color: '#fff', border: 'none', padding: '0.4rem 0.8rem', borderRadius: '4px', cursor: 'pointer' }}
                >
                  Eliminar
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2rem', borderTop: `2px solid ${tema === 'dark' ? '#334155' : '#e0e0e0'}`, paddingTop: '1.5rem' }}>
        <div>
          <Link 
            to="/catalogo"
            style={{
              display: 'inline-block',
              backgroundColor: 'transparent',
              color: tema === 'dark' ? '#f1f5f9' : '#5c061c',
              border: `2px solid ${tema === 'dark' ? '#f1f5f9' : '#5c061c'}`,
              padding: '0.6rem 1.2rem',
              borderRadius: '6px',
              textDecoration: 'none',
              fontWeight: 'bold',
              marginRight: '1rem'
            }}
          >
            ← Seguir comprando
          </Link>

          <button 
            onClick={vaciarCarrito}
            style={{ background: '#64748b', color: '#fff', border: 'none', padding: '0.6rem 1.2rem', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}
          >
            Vaciar Carrito
          </button>
        </div>

        <div style={{ textAlign: 'right' }}>
          <h3 style={{ margin: '0 0 1rem 0' }}>Total: ${totalPrecio.toLocaleString('es-AR')}</h3>
          <button 
            onClick={() => alert('¡Compra realizada con éxito! 🍷')}
            style={{ backgroundColor: '#10b981', color: '#fff', border: 'none', padding: '0.8rem 1.5rem', borderRadius: '6px', fontSize: '1rem', cursor: 'pointer', fontWeight: 'bold' }}
          >
            Finalizar Compra
          </button>
        </div>
      </div>
    </div>
  );
};