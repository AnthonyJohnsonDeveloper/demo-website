import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Menu from "./Components/Menu"
import About from "./Components/About";
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

        <div id="about">
          <About />
        </div>
      </main>
    </div>
    
  );
}



export default App;
