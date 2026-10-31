import { Link } from 'react-router-dom';

export const Inicio = () => (
    <main style={{ textAlign: 'center', padding: '4rem 1rem' }}>
        <h1>Bienvenido a An Vinos </h1>
        <p>Tu vinoteca de confianza. Descubrí la mejor selección de tintos de autor y bodegas exclusivas.</p>
        <Link 
        to="/catalogo" 
        style={{ display: 'inline-block', marginTop: '1.5rem', padding: '0.8rem 1.8rem', background: '#5c061c', color: '#fff', textDecoration: 'none', borderRadius: '5px', fontWeight: 'bold' }}
        >
        Explorar Catálogo
        </Link>
    </main>
    );