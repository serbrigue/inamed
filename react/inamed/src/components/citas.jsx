import React, { useContext } from 'react';
import { UserContext } from '../UserContext'; // Asegúrate de que la ruta sea correcta
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Citas = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  if (!user) {
    return null;
  }

  // Función para cancelar una cita
  const handleCancelCita = (index) => {
    const updatedCitas = user.citas.filter((_, i) => i !== index); // Remueve la cita
    const updatedUser = { ...user, citas: updatedCitas }; // Actualiza el usuario con las citas restantes

    // Actualizar el localStorage con la nueva lista de citas
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const updatedUsers = users.map((u) => 
      u.username === user.username ? updatedUser : u
    );
    localStorage.setItem('users', JSON.stringify(updatedUsers));

    // Actualizar el contexto del usuario
    setUser(updatedUser);
  };

  const handleVolver = () => {
    navigate('/');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-4">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between mt-4">
            {/* Ocultamos el botón de agendar cita para los médicos */}
            {user.role !== 'medico' && (
              <button 
                onClick={() => navigate('/agendar')}
                className="bg-red-700 text-white py-2 px-4 rounded hover:bg-red-800 flex items-center"
              >
                <FontAwesomeIcon icon={faArrowRight} className="mr-2" />
                Agendar Cita
              </button>
            )}
            <button 
              onClick={handleVolver}
              className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 flex items-center"
            >
              Volver
              <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </button>
          </div>
          <h2 className="text-2xl font-bold mb-4">Citas de {user.username}</h2>
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2">Con</th>
                <th className="py-2">Fecha</th>
                <th className="py-2">Hora</th>
                <th className="py-2">Acción</th> {/* Añadimos la columna de acción */}
              </tr>
            </thead>
            <tbody>
              {Array.isArray(user.citas) && user.citas.map((cita, index) => (
                <tr key={index} className="border-t text-center">
                  <td className="py-2">{cita.with}</td>
                  <td className="py-2">{cita.date}</td>
                  <td className="py-2">{cita.time}</td>
                  <td className="py-2">
                    {/* Botón de cancelar solo si es un médico */}
                    {user.role === 'medico' && (
                      <button
                        onClick={() => handleCancelCita(index)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <FontAwesomeIcon icon={faTimes} />
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Citas;

