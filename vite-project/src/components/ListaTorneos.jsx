import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../credenciales'; // Importa la instancia de Firestore

const Torneo = () => {
    const [torneos, setTorneos] = useState([]);

    useEffect(() => {
        const obtenerTorneos = async () => {
            const querySnapshot = await getDocs(collection(db, 'torneo'));
            const datosTorneos = [];
            querySnapshot.forEach(doc => {
                datosTorneos.push({ id: doc.id, ...doc.data() });
            });
            setTorneos(datosTorneos);
        };

        obtenerTorneos();
    }, []);

    return (
        <div>
            <h1>Lista de Torneos</h1>
            <ul>
                {torneos.map(torneo => (
                    <li key={torneo.id}>
                        <h2>{torneo.nombre}</h2>
                        <p>Cantidad Máxima de Participantes: {torneo.cantidad_max_participantes}</p>
                        <p>Fecha Límite de Inscripción: {torneo.fecha_limite_inscripcion}</p>
                        {/* Agrega más propiedades de torneo aquí si es necesario */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListaTorneos;
