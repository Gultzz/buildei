import {useState} from "react";
import menuImg from "../../assets/menu.svg";
import {Container} from "./style";

export function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Container isMenuOpen={menuOpen}>
      <nav>
        <section>
          <ul>
            <li>Buildei</li>
          </ul>
        </section>

        <ul className="flex gap-10 text-white items-center ">
          <li>
            <a className="active" href="#">
              Inicío
            </a>
          </li>
          <li>
            <a href="#">Soluções</a>
          </li>
          <li>
            <a href="#">Cases</a>
          </li>
          <li>
            <a href="#">Sobre nós</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Contato</a>
          </li>

          <button type="button" onClick={handleToggleMenu}>
            <img src={menuImg} alt="Abrir e fechar o menu" className="menu" />
          </button>
        </ul>
      </nav>
    </Container>
  );
}
