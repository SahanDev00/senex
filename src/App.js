import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import ProductsPage from './Components/ProductsPage';
import SearchResults from './Components/SearchResults';
import { SearchProvider } from './SearchContext';
import SliderComponent from './Components/SliderComponent';
import Cards from './Components/Cards';


function App() {

  return (
    <SearchProvider>
      <div className="App">
        <Router>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}>
            <Route index element={<>
              <SliderComponent />
              <Cards />
              </>} />
              <Route path="products/:subCategoryName" element={<ProductsPage />} />
              <Route path="/search" element={<SearchResults />} />
            </Route>
            <Route path="/about-us" element={<About/>} />
            <Route path="/contact-us" element={<Contact/>} />
          </Routes>
        </Router>
      </div>
    </SearchProvider>
  );
}

export default App;
