import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Menu from "./Components/Menu"
import About from "./Components/About";
import Product from "./Components/Product"
import Review from "./Components/Review";
import Footer from "./Components/Footer"


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

        <div id="review">
          <Review />
        </div>
      </main>

      <Footer />
    </div>
    
  );
}



export default App;
