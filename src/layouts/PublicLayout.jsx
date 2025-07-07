import { Link, Outlet } from "react-router-dom";
import icon from "../assets/icon.png";

const PublicLayout = () => {
  return (
    <>
      <header className="navbar">
        <div className="logo">
           <img  src={icon} alt="Logo de AlojApp" className="menu-icon" />
          AlojApp</div>
        <nav>
          <Link to="/">Inicio</Link>
          <Link to="/login">Iniciar Sesión</Link>
        </nav>
      </header>
      <main className="main-container">
        <Outlet />
      </main>
    </>
  );
};

export default PublicLayout;


