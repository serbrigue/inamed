import React, { useState, useContext } from 'react';
import { UserContext } from '../UserContext'; // Asegúrate de que la ruta sea correcta
import { useNavigate } from 'react-router-dom';

const AgendarCita = () => {
  const { user, setUser } = useContext(UserContext); // Usuario actual (paciente)
  const [withPerson, setWithPerson] = useState(''); // Médico
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Nueva cita
    const newCita = { with: withPerson, date, time };

    // 1. Obtener la lista de usuarios desde localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // 2. Actualizar el paciente (usuario actual) con la nueva cita
    const updatedUser = {
      ...user,
      citas: [...user.citas, newCita] // Añadimos la cita al paciente
    };

    // 3. Encontrar al médico correspondiente
    const updatedUsers = users.map((u) => {
      if (u.username === user.username) {
        // Actualizamos el paciente
        return updatedUser;
      }
      if (u.username === withPerson) {
        // Si es el médico, añadimos la cita al médico
        return {
          ...u,
          citas: [...u.citas, { with: user.username, date, time }] // Añadir cita del paciente
        };
      }
      return u;
    });

    // 4. Guardar los cambios en el localStorage
    localStorage.setItem('users', JSON.stringify(updatedUsers));

    // 5. Actualizar el contexto del usuario con la nueva cita
    setUser(updatedUser);

    // 6. Redirigir a la página principal
    navigate('/');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md p-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Agendar Nueva Cita</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="withPerson">
                    Médico
                </label>
                <input
                    type="text"
                    id="withPerson"
                    value={withPerson}
                    onChange={(e) => setWithPerson(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                />
                </div>
                <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
                    Fecha
                </label>
                <input
                    type="date"
                    id="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                />
                </div>
                <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="time">
                    Hora
                </label>
                <input
                    type="time"
                    id="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                />
                </div>
                <div className="flex justify-between">
                <button
                    type="submit"
                    className="bg-red-700 text-white py-2 px-4 rounded hover:bg-red-800 flex items-center"
                >
                    Agendar
                </button>
                <button
                    type="button"
                    onClick={() => navigate('/')}
                    className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 flex items-center"
                >
                    Cancelar
                </button>
                </div>
            </form>
            </div>
        </div>
    </div>
  );
};

export default AgendarCita;
