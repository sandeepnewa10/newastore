import "./App.scss";
import About from "./components/About";
import Banner from "./components/Banner";
import BestSale from "./components/BestSale";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Newsletter from "./components/Newsletter";
import Offer from "./components/Offer";
import Product from "./components/Product";
import YearSale from "./components/YearSale";

function App() {
  return (
    <>
     <Header/>
     <Banner/>     
     <Product/>
     <About/>
     <BestSale/>
     <Offer/>
     <Blog/>
     <YearSale/>     
     <Newsletter/>
     <Footer/>
    </>
  );
}

export default App;
