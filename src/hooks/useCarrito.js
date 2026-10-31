import { useCarritoStore } from '../store/useCarritoStore';

export const useCarrito = () => {
  const carrito = useCarritoStore((estado) => estado.carrito);
  const tema = useCarritoStore((estado) => estado.tema);
  const alternarTema = useCarritoStore((estado) => estado.alternarTema);
  const agregarAlCarrito = useCarritoStore((estado) => estado.agregarAlCarrito);
  const cambiarCantidad = useCarritoStore((estado) => estado.cambiarCantidad);
  const eliminarDelCarrito = useCarritoStore((estado) => estado.eliminarDelCarrito);
  const vaciarCarrito = useCarritoStore((estado) => estado.vaciarCarrito);

  const totalArticulos = carrito.reduce((acc, item) => acc + item.cantidad, 0);
  const totalPrecio = carrito.reduce(
    (acc, item) => acc + (item.precioCalculado || item.precio || 15500) * item.cantidad,
    0
  );

  return {
    carrito,
    tema,
    alternarTema,
    agregarAlCarrito,
    cambiarCantidad,
    eliminarDelCarrito,
    vaciarCarrito,
    totalArticulos,
    totalPrecio,
  };
};