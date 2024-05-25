import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Menu from "./Components/Menu"
import About from "./Components/About";
import Product from "./Components/Product"



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

        <div id="products">
          <Product />
        </div>
      </main>
    </div>
    
  );
}



export default App;
