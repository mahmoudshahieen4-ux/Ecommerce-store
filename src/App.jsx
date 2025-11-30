import Home from "./pages/Home";
import Nav from "./components/nav";
import Products from "./components/products";
import About from "./pages/about";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import Contact from "./pages/contact";
import Wishlist from "./pages/wishlist";
import Cart from "./pages/cart";
import Checkout from "./pages/checkout";
import Footer from "./components/footer";
import { Routes, Route } from "react-router-dom";
import { AppProvider } from "./context/AppContext";

function App() {
  return (
    <AppProvider>
      <Nav />
      <main className="mx-auto overflow-x-hidden mt-30 dark:bg-gray-900">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </main>
      <Footer />
    </AppProvider>
  );
}

export default App;
