import Home from "./pages/Home";
import Nav from "./components/nav";
import ProductsPage from "./pages/productsPage";
import About from "./pages/about";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import Contact from "./pages/contact";
import Wishlist from "./pages/wishlist";
import Cart from "./pages/cart";
import Checkout from "./pages/checkout";
import Category from "./pages/category";
import ProductDetails from "./pages/ProductDetails";
import Footer from "./components/footer";
import { Routes, Route, useLocation } from "react-router-dom";
import { AppProvider } from "./context/AppContext";

function App() {
  const location = useLocation();
  const isAuthPage = ['/login', '/signup'].includes(location.pathname);

  return (
    <AppProvider>
      <Nav />
      <main className={`mx-auto overflow-x-hidden w-full dark:bg-gray-900 ${isAuthPage ? '' : 'pt-30'}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/category/:category" element={<Category />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </main>
      <Footer />
    </AppProvider>
  );
}

export default App;
