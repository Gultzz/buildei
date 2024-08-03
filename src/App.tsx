import {Outlet} from "react-router-dom";
import {NavBar} from "./components/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <section>
        <Outlet />
      </section>
    </div>
  );
}

export default App;
