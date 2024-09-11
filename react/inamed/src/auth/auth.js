// auth.js

// Solo si no existe ya en el localStorage, guardamos los usuarios
if (!localStorage.getItem('users')) {
  const users = [
    {
      "username": "paciente1",
      "password": "1234",
      "role": "paciente",
      "citas": [
        {
          "with": "medico1",
          "date": "2023-10-01",
          "time": "10:00 AM"
        }
      ]
    },
    {
      "username": "medico1",
      "password": "abcd",
      "role": "medico",
      "citas": [
        {
          "with": "paciente1",
          "date": "2023-10-01",
          "time": "10:00 AM"
        }
      ]
    }
  ];

  // Guarda los usuarios en el localStorage
  localStorage.setItem('users', JSON.stringify(users));
}

// Autenticar usuario desde localStorage
export const authenticateUser = (username, password) => {
  const users = JSON.parse(localStorage.getItem('users'));  // Obtén los usuarios del localStorage
  const user = users.find(
    (u) => u.username === username && u.password === password
  );
  
  return user ? { username: user.username, role: user.role } : null;
};
