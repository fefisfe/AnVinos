import { create } from 'zustand';

export const useCarritoStore = create((set) => ({
  carrito: [],
  tema: 'light', 

  alternarTema: () =>
    set((estado) => {
      const nuevoTema = estado.tema === 'light' ? 'dark' : 'light';
    
      document.documentElement.setAttribute('data-theme', nuevoTema);
      
      return { tema: nuevoTema };
    }),

  agregarAlCarrito: (vino) =>
    set((estado) => {
      const existe = estado.carrito.find((item) => item.id === vino.id);
      if (existe) {
        return {
          carrito: estado.carrito.map((item) =>
            item.id === vino.id ? { ...item, cantidad: item.cantidad + 1 } : item
          ),
        };
      }
      return { carrito: [...estado.carrito, { ...vino, cantidad: 1 }] };
    }),

  cambiarCantidad: (id, cambio) =>
    set((estado) => ({
      carrito: estado.carrito
        .map((item) => {
          if (item.id === id) {
            const nuevaCantidad = item.cantidad + cambio;
            return nuevaCantidad > 0 ? { ...item, cantidad: nuevaCantidad } : null;
          }
          return item;
        })
        .filter(Boolean),
    })),

  eliminarDelCarrito: (id) =>
    set((estado) => ({
      carrito: estado.carrito.filter((item) => item.id !== id),
    })),

  vaciarCarrito: () => set({ carrito: [] }),
}));