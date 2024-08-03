import {useState} from "react";
import menuImg from "../../assets/menu.svg";
import {Container} from "./style";
export function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Container
      className="flex items-center justify-center bg-gray h-20 "
      isMenuOpen={menuOpen}
    >
      <nav className="bg-gray w-7/12 items-center justify-between flex">
        <div>
          <ul className="text-white flex">
            <li className="logo">Buildei</li>
          </ul>
        </div>
        <ul className="flex gap-10 text-white items-center ">
          <li className="hidden xl:flex">Inicío</li>
          <li className="hidden xl:flex">Soluções</li>
          <li className="hidden xl:flex">Cases</li>
          <li className="hidden xl:flex">Sobre nós</li>
          <li className="hidden xl:flex">Blog</li>
          <li className="hidden xl:flex">Contato</li>
          <button type="button" onClick={handleToggleMenu}>
            <img src={menuImg} alt="Abrir e fechar o menu" className="menu" />
          </button>
        </ul>
      </nav>
    </Container>
  );
}
