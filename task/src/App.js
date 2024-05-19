import "./App.css";
import Navbar from "./Navbar";
import Routers from "./pages/Routers";

function App() {
  return (
    <>
      <div className="d-flex">
        <div className="nav_scn">
          <Navbar />
        </div>
        <div className="w-100">
          <Routers />
        </div>
      </div>
    </>
  );
}

export default App;
