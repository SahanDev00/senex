import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Home from './Pages/Product';
import About from './Pages/About';
import Contact from './Pages/Contact';
import ProductsPage from './Components/ProductsPage';
import SearchResults from './Components/SearchResults';
import { SearchProvider } from './SearchContext';
import SliderComponent from './Components/SliderComponent';
import Cards from './Components/Cards';
import Footer from './Components/Footer';
import HomeMain from './Pages/HomeMain';
import Product from './Pages/Product';


function App() {

  return (
    <SearchProvider>
      <div className="App ">
        <Router>
          <Navbar/>
          <Routes>
            <Route index path="/" element={<HomeMain/>}/>
            <Route path="/product" element={<Product/>}>
            <Route path='/product' element={<>
              <SliderComponent />
              <Cards />
              </>} />
              <Route path="/product/products/:subCategoryName" element={<ProductsPage />} />
              <Route path="search" element={<SearchResults />} />
            </Route>
            <Route path="/about-us" element={<About/>} />
            <Route path="/contact-us" element={<Contact/>} />
          </Routes>
          <Footer/>
        </Router>
      </div>
    </SearchProvider>
  );
}

export default App;
