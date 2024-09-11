import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    username: "paciente1",
    password: "1234",
    role: "paciente",
    citas: [
      {
        with: "medico1",
        date: "2023-10-01",
        time: "10:00 AM"
      }
    ]},
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
  );

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
