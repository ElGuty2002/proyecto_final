import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../src/credenciales'; // Importa la configuración de Firebase
import Login from '../src/components/Login';
import Home from '../src/components/Home';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

function App() {
    const [usuario, setUsuario] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (usuarioFirebase) => {
            if (usuarioFirebase) {
                setUsuario(usuarioFirebase);
            } else {
                setUsuario(null);
            }
        });
        return () => unsubscribe();
    }, []);

    return (
        <Routes>
            {/* Ruta para la página de inicio */}
            <Route path="/" element={usuario ? <Navigate to="/home" /> : <Login />} />
            {/* Ruta para la página de inicio de sesión */}
            <Route path="/login" element={<Login />} />
            {/* Ruta para la página de inicio si el usuario está autenticado */}
            <Route path="/home" element={usuario ? <Home correoUsuario={usuario.email} /> : <Navigate to="/" />} />
        </Routes>
    );
}

export default App;
