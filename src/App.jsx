import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Menu from "./Components/Menu"

function App() {
  return (
    <div>
      <NavBar />

      <main>
        <div id="home">
          <Home />
        </div>

        <div id="menu">
          <Menu />
        </div>
      </main>
    </div>
    
  );
}



export default App;
