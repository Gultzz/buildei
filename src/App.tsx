import {BrowserRouter, Outlet} from "react-router-dom";
import {NavBar} from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Outlet />
    </BrowserRouter>
  );
}

export default App;
