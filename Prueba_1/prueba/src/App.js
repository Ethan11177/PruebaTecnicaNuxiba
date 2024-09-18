import React, { useState } from "react";
import Users from "./component/Users/Users";
import UserDetails from "./component/UserDetails";
import Posts from "./component/Posts";
import Todos from "./component/Todos";
import "./App.scss"; // Importa los estilos


const App = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className="app-container">
      {/* Header */}
      <header className="app-header">
        <h1>Prueba Técnica Nuxiba</h1>
      </header>

      {/* Main Content */}
      <main className="app-main">
        <Users setSelectedUser={setSelectedUser} />
        {selectedUser && (
          <div>
            <UserDetails user={selectedUser} />
            <Posts />
            <Todos userId={selectedUser.id} />
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="app-footer">
        <p>© 2024 Nuxiba. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default App;
