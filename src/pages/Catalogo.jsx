import { useObtenerVinos } from '../hooks/useObtenerVinos';
import { TarjetaVino } from '../components/TarjetaVino';

export const Catalogo = () => {
  const { datos: vinos, cargando, error } = useObtenerVinos('https://api.sampleapis.com/wines/reds');

  if (cargando) return <h3 style={{ textAlign: 'center', margin: '3rem' }}>Cargando vinos de An Vinos...</h3>;
  if (error) return <h3 style={{ textAlign: 'center', color: 'red', margin: '3rem' }}>Error: {error}</h3>;

  const vinosConPrecio = vinos.slice(0, 12).map((vino) => ({
    ...vino,
    precio: 8500 + (vino.id * 1250)
  }));

  return (
    <main style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h2>Catálogo de Vinos Tintos</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1.5rem', marginTop: '1.5rem' }}>
        {vinosConPrecio.map((vino) => (
          <TarjetaVino key={vino.id} vino={vino} />
        ))}
      </div>
    </main>
  );
};