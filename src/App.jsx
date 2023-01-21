import reactLogo from "./assets/react.svg";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";

import "./App.css";
import { MyRoutes } from "./routers/Routes";

function App() {
  
  return (
    <div className="relative bg-gradient-to-r from-indigo-900 to-indigo-500">
      <Nav></Nav>
      <MyRoutes></MyRoutes>
      <Footer></Footer>
    </div>
  );
}

export default App;
