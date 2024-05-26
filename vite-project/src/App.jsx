import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../src/credenciales'; // Importa la configuración de Firebase
import Login from '../src/components/Login';
import Home from '../src/components/Home';
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
        <div>
            {usuario ? <Home correoUsuario={usuario.email} /> : <Login />}
        </div>
    );
}

export default App;
