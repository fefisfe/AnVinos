import { useCarrito } from '../hooks/useCarrito';

export const TarjetaVino = ({ vino }) => {
  const { agregarAlCarrito } = useCarrito();

  const precioFormateado = vino.precio 
    ? `$${vino.precio.toLocaleString('es-AR')}` 
    : '$15.500';

  return (
    <div style={{ border: '1px solid #e0e0e0', borderRadius: '8px', padding: '1rem', backgroundColor: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', textAlign: 'center', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
      <img
        src={vino.image}
        alt={vino.wine}
        style={{ height: '180px', objectFit: 'contain', margin: '0 auto 1rem' }}
        onError={(e) => { e.target.src = 'https://via.placeholder.com/150?text=An+Vinos'; }}
      />
      <h3 style={{ color: '#2c2c2c' }}>{vino.wine}</h3>
      <p style={{ margin: '0.2rem 0', color: '#555' }}><strong>Bodega:</strong> {vino.winery}</p>
      <p style={{ margin: '0.2rem 0', color: '#555' }}><strong>Origen:</strong> {vino.location}</p>
      
      <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#5c061c', margin: '0.8rem 0' }}>
        {precioFormateado}
      </p>

      <button 
        onClick={() => agregarAlCarrito({ ...vino, precioCalculado: vino.precio || 15500 })}
        style={{ backgroundColor: '#5c061c', color: 'white', border: 'none', padding: '0.6rem 1rem', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
      >
        Agregar al Carrito
      </button>
    </div>
  );
};