import {NavLink} from "react-router-dom";
import logoImg from "../../assets/logo.svg";
import menuImg from "../../assets/menu.svg";
import {Container} from "./style";
export function NavBar() {
  return (
    <Container className="navbar">
      <div className="navigation">
        <img className="logo" src={logoImg} alt="Abrir e fechar o menu"></img>
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
          <img src={menuImg} alt="Abrir e fechar o menu" className="menu" />
        </button>
      </div>
    </Container>
  );
}
