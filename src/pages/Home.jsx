import Products from "../components/products"
import Header from "../components/header"
import Ads from "../components/ads";
import img1 from "../assets/banner_box1.jpg";
import img2 from "../assets/banner_box2.jpg";
import img3 from "../assets/banner_box3.jpg";
import img4 from "../assets/banner_box4.jpg";
import img5 from "../assets/banner_box5.jpg";

export default function Home() {
  return (
    <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 overflow-x-hidden">
      <Header />
      <Products label="Featured" />
      <Ads img1={img1} img2={img2} img3={img3} />
      <Products label="Electronics" category="electronics" />
      <Ads img1={img4} img2={img5} />
      <Products label="Men's Fashion" category="men's clothing" />
      <Products label="Women's Fashion" category="women's clothing" />
    </div>
  );
}
