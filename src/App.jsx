import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { BarraNavegacion } from './components/BarraNavegacion';
import { Inicio } from './pages/Inicio';
import { Catalogo } from './pages/Catalogo';
import { Carrito } from './pages/Carrito';
import { useCarrito } from './hooks/useCarrito';

export function App() {
  const { tema } = useCarrito();

  return (
    <BrowserRouter>
      <div 
        style={{ 
          minHeight: '100vh', 
          backgroundColor: tema === 'dark' ? '#0f172a' : '#f5e6e8', 
          color: tema === 'dark' ? '#f1f5f9' : '#2c2c2c',
          transition: 'background-color 0.3s ease, color 0.3s ease'
        }}
      >
        <BarraNavegacion />
        <main style={{ padding: '1rem' }}>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/catalogo" element={<Catalogo />} />
            <Route path="/carrito" element={<Carrito />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
