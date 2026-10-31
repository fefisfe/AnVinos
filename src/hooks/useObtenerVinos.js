import { useState, useEffect } from 'react';

export const useObtenerVinos = (url) => {
    const [datos, setDatos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const obtenerDatos = async () => {
        try {
            setCargando(true);
            const respuesta = await fetch(url);
            if (!respuesta.ok) throw new Error('Error al obtener la lista de vinos');
            const resultado = await respuesta.json();
            setDatos(resultado);
        } catch (err) {
            setError(err.message);
        } finally {
            setCargando(false);
        }
        };

        obtenerDatos();
    }, [url]);

    return { datos, cargando, error };
    };