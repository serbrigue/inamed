import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../UserContext';  // Import UserContext

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);  // For user-specific menu
  const { user, setUser } = useContext(UserContext);  // Access user and setUser from context
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);  // Clear user from context
    navigate('/login');  // Redirect to login page
  };

  return (
    <div className="w-auto">
      <nav className="bg-red-700 p-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img alt="Logo" className="h-8 w-8"/>
          <input 
            type="text" 
            placeholder="Search..." 
            className="px-2 py-1 rounded object-center"
          />
        </div>
        <div className="flex items-center space-x-4">
          {user ? (
            <>
              <span className="text-white">Welcome, {user.username}</span>
              {/* Hamburger Icon for User Menu */}
              <button 
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)} 
                className="text-white bg-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-800 focus:outline-none"
              >
                ☰
              </button>

              {/* Dropdown Menu for Logged-in User */}
              {isUserMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 mt-56 z-50">
                  <Link to="/perfil" className="block px-4 py-2 text-gray-700 hover:bg-red-100">
                    Perfil
                  </Link>
                  <Link to="/citas" className="block px-4 py-2 text-gray-700 hover:bg-red-100">
                    Citas
                  </Link>
                  <Link to="/Historial" className="block px-4 py-2 text-gray-700 hover:bg-red-100">
                    Historial Médico
                  </Link>
                  <button 
                    onClick={handleLogout} 
                    className="w-full text-left px-4 py-2 text-gray-700 hover:bg-red-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </>
          ) : (
            <Link to="/login" className="text-red-500 w-16 h-7 text-center bg-white rounded hover:underline">
              Login
            </Link>
          )}
          <button 
            className="text-white md:hidden" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            &#9776;
          </button>
        </div>
      </nav>

      {/* Main Navigation Links */}
      <div className={`bg-red-800 flex flex-wrap justify-between w-full text-black p-4 ${isMenuOpen ? 'block' : 'hidden'} md:flex`}>
        <button className="text-white hover:text-gray-300 p-2">Nuestra Red</button>
        <button className="text-white hover:text-gray-300 p-2">Servicios</button>
        <button className="text-white hover:text-gray-300 p-2">Seguros y Planes</button>
        <button className="text-white hover:text-gray-300 p-2">Especialidades</button>
        <button className="text-white hover:text-gray-300 p-2">Información al paciente</button>
        <button className="text-white hover:text-gray-300 p-2">Mundo Profesional</button>
        {!user && <button className="text-white hover:text-gray-300 p-2 md:hidden">Login</button>}
      </div>
    </div>
  );
}

export default Navbar;
