import {NavLink} from "react-router-dom";
import {Brand, Container} from "./style";
export function NavBar() {
  return (
    <Container className="navbar">
      <div className="navigation">
        <Brand />
        <div className="nav-container">
          <NavLink className="nav" to="/contacts">
            Inicío
          </NavLink>
          <NavLink className="nav" to="/soluctions">
            Soluções
          </NavLink>
          <NavLink className="nav" to="/cases">
            Cases
          </NavLink>
          <NavLink className="nav" to="/about">
            Sobre nós
          </NavLink>
          <NavLink className="nav" to="/blog">
            Blog
          </NavLink>
          <NavLink className="nav" to="/">
            Contatos
          </NavLink>
        </div>
        <button type="button" className="menu">
          <div className="hamburguer-line"></div>
        </button>
      </div>
    </Container>
  );
}
