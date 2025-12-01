# 📂 شرح ملفات المشروع بالتفصيل

## 🎯 نظرة عامة

هذا الملف يشرح **كل ملف** في المشروع، **سطر بسطر**، عشان تفهم بالظبط إيه اللي بيحصل.

---

## 📁 بنية المشروع الكاملة

```
ecommerce-react/
├── public/                  # ملفات ثابتة
├── src/
│   ├── assets/             # صور ولوجوهات
│   │   ├── logo.png
│   │   └── dark-logo.png
│   ├── components/         # مكونات قابلة لإعادة الاستخدام
│   │   ├── nav.jsx         # شريط التنقل
│   │   ├── card.jsx        # بطاقة المنتج
│   │   ├── footer.jsx      # تذييل الصفحة
│   │   ├── header.jsx      # رأس الصفحة
│   │   ├── headerCard.jsx  # بطاقة في الهيدر
│   │   ├── products.jsx    # قائمة المنتجات
│   │   └── ads.jsx         # إعلانات
│   ├── pages/              # صفحات التطبيق
│   │   ├── Home.jsx        # الصفحة الرئيسية
│   │   ├── cart.jsx        # صفحة السلة
│   │   ├── wishlist.jsx    # صفحة المفضلة
│   │   ├── checkout.jsx    # صفحة الدفع
│   │   ├── login.jsx       # صفحة تسجيل الدخول
│   │   ├── signup.jsx      # صفحة التسجيل
│   │   ├── about.jsx       # صفحة من نحن
│   │   └── contact.jsx     # صفحة اتصل بنا
│   ├── context/            # إدارة الحالة
│   │   └── AppContext.jsx  # Context للتطبيق
│   ├── App.jsx             # المكون الرئيسي
│   ├── main.jsx            # نقطة الدخول
│   └── index.css           # التنسيقات
├── package.json            # معلومات المشروع
├── vite.config.js          # إعدادات Vite
└── index.html              # HTML الرئيسي
```

---

## 🔥 الملفات الأساسية

### 1. `main.jsx` - نقطة الدخول

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
```

**الشرح سطر بسطر:**

1. **`import { StrictMode } from 'react'`**
   - StrictMode هو wrapper بيساعدك تكتشف مشاكل محتملة في التطبيق
   - بيشتغل في development mode بس
   - بيعمل warnings لو فيه حاجة deprecated أو unsafe

2. **`import { createRoot } from 'react-dom/client'`**
   - createRoot هي الطريقة الجديدة في React 18 لعرض التطبيق
   - بتستبدل الطريقة القديمة ReactDOM.render()

3. **`import { BrowserRouter } from 'react-router-dom'`**
   - BrowserRouter بيخلي التطبيق يقدر يعمل routing (التنقل بين الصفحات)
   - بيستخدم HTML5 history API

4. **`createRoot(document.getElementById('root'))`**
   - بيجيب العنصر اللي id="root" من HTML
   - بيحوله لـ React root

5. **`.render(...)`**
   - بيعرض التطبيق داخل الـ root

**ليه عملناها كده؟**
- StrictMode: عشان نكتشف المشاكل بدري
- BrowserRouter: عشان نقدر نعمل navigation بين الصفحات
- createRoot: الطريقة الحديثة والأسرع

---

### 2. `App.jsx` - المكون الرئيسي

```jsx
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
      <main className="mx-auto overflow-x-hidden pt-30 dark:bg-gray-900">
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
```

**الشرح:**

1. **Imports**: بنستورد كل الصفحات والمكونات اللي هنستخدمها

2. **`<AppProvider>`**: 
   - بيغلف التطبيق كله
   - بيخلي كل المكونات تقدر توصل للـ Context (cart, wishlist, products)

3. **`<Nav />`**: 
   - شريط التنقل
   - موجود برة الـ Routes عشان يظهر في كل الصفحات

4. **`<main>`**:
   - Container للمحتوى الرئيسي
   - `pt-30`: padding-top عشان المحتوى ميتخبّاش تحت الـ Nav (اللي fixed)
   - `dark:bg-gray-900`: خلفية داكنة في Dark Mode

5. **`<Routes>`**:
   - Container لكل الـ routes

6. **`<Route>`**:
   - كل route بيربط path معين بمكون معين
   - مثلاً: لما المستخدم يروح `/cart`، يعرض مكون `<Cart />`

7. **`<Footer />`**:
   - التذييل
   - برة الـ Routes عشان يظهر في كل الصفحات

**ليه عملناها كده؟**
- عشان نعمل Single Page Application (SPA)
- المستخدم يقدر ينتقل بين الصفحات بدون reload
- الـ Nav والـ Footer ثابتين، المحتوى بس اللي بيتغير

---

## 🧩 المكونات (Components)

### 1. `card.jsx` - بطاقة المنتج

```jsx
import { Star, Heart, ShoppingCart } from "lucide-react";
import { useAppContext } from "../context/AppContext";
import { useState } from "react";

export default function Card({ product }) {
  const { addToCart, addToWishlist, removeFromWishlist, isInWishlist, isInCart } = useAppContext();
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const handleToggleWishlist = () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const inWishlist = isInWishlist(product.id);
  const inCart = isInCart(product.id);

  const renderStars = () => {
    const rating = product.rating?.rate || 0;
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star
          key={i}
          className={`w-4 h-4 ${i <= Math.round(rating)
            ? "fill-yellow-400 text-yellow-400"
            : "text-gray-300"
            }`}
        />
      );
    }
    return stars;
  };

  return (
    <div className="card ...">
      {/* Image Container */}
      <div className="relative h-48 ...">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-contain p-4 group-hover/card:scale-110 transition-transform duration-300"
        />

        {/* Wishlist Button */}
        <button
          onClick={handleToggleWishlist}
          className={`absolute top-3 right-3 ... ${inWishlist
            ? "bg-red-500 text-white"
            : "bg-white/90 ... hover:bg-red-500 hover:text-white"
            }`}
        >
          <Heart className={`w-5 h-5 ${inWishlist ? "fill-current" : ""}`} />
        </button>

        {/* Badge if in cart */}
        {inCart && (
          <div className="absolute top-3 left-3 bg-green-500 text-white ...">
            In Cart
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-2 flex-1">
        <h3 className="font-semibold text-sm line-clamp-2 ...">
          {product.title}
        </h3>

        <span className="text-xs text-gray-500 uppercase">
          {product.category}
        </span>

        {/* Rating */}
        <div className="flex items-center gap-1">
          {renderStars()}
          <span className="text-xs ...">
            ({product.rating?.count || 0})
          </span>
        </div>

        {/* Price */}
        <p className="text-2xl font-bold text-primary mt-auto">
          ${product.price.toFixed(2)}
        </p>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          className={`... ${addedToCart
            ? "bg-green-500 text-white"
            : "bg-primary hover:bg-dark-primary text-white"
            }`}
        >
          <ShoppingCart className="w-4 h-4" />
          {addedToCart ? "Added!" : inCart ? "Add More" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}
```

**الشرح التفصيلي:**

#### 1. **Props**
```jsx
export default function Card({ product })
```
- المكون بياخد `product` كـ prop
- الـ product فيه: id, title, price, image, category, rating

#### 2. **Context**
```jsx
const { addToCart, addToWishlist, removeFromWishlist, isInWishlist, isInCart } = useAppContext();
```
- بنجيب الدوال اللي محتاجينها من Context
- **Destructuring**: بدل ما نكتب `context.addToCart`، بنكتب `addToCart` مباشرة

#### 3. **Local State**
```jsx
const [addedToCart, setAddedToCart] = useState(false);
```
- state محلي للمكون
- بيتغير لـ `true` لما المستخدم يضيف المنتج للسلة
- بيرجع `false` بعد ثانيتين (عشان نعرض رسالة "Added!")

#### 4. **Event Handlers**

##### handleAddToCart
```jsx
const handleAddToCart = () => {
  addToCart(product);              // 1. ضيف المنتج للسلة
  setAddedToCart(true);            // 2. غير الحالة لـ true
  setTimeout(() => setAddedToCart(false), 2000);  // 3. بعد 2 ثانية، رجعها false
};
```

**ليه setTimeout؟**
- عشان نعرض رسالة "Added!" لمدة ثانيتين
- بعدين نرجع الزرار لحالته الطبيعية

##### handleToggleWishlist
```jsx
const handleToggleWishlist = () => {
  if (isInWishlist(product.id)) {
    removeFromWishlist(product.id);  // لو موجود، شيله
  } else {
    addToWishlist(product);          // لو مش موجود، ضيفه
  }
};
```

**Toggle** معناها: لو موجود شيله، لو مش موجود ضيفه.

#### 5. **Computed Values**
```jsx
const inWishlist = isInWishlist(product.id);
const inCart = isInCart(product.id);
```
- بنحسب القيم دي مرة واحدة بس
- بدل ما نستدعي الدالة كل مرة في الـ JSX

#### 6. **renderStars Function**
```jsx
const renderStars = () => {
  const rating = product.rating?.rate || 0;  // لو مفيش rating، استخدم 0
  const stars = [];
  
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <Star
        key={i}  // مهم جداً في loops
        className={`w-4 h-4 ${
          i <= Math.round(rating)
            ? "fill-yellow-400 text-yellow-400"  // نجمة ملونة
            : "text-gray-300"                     // نجمة فاضية
        }`}
      />
    );
  }
  
  return stars;
};
```

**الشرح:**
- **Optional Chaining (`?.`)**: لو `product.rating` مش موجود، مش هيحصل error
- **`|| 0`**: لو القيمة null أو undefined، استخدم 0
- **`Math.round(rating)`**: بنقرب الـ rating لأقرب رقم صحيح
- **Loop**: بنعمل 5 نجوم
- **Conditional Class**: لو `i <= rating`، النجمة تكون ملونة

#### 7. **Conditional Rendering**

##### Badge "In Cart"
```jsx
{inCart && (
  <div className="...">In Cart</div>
)}
```
- **`&&` Operator**: لو `inCart` true، اعرض الـ div
- لو `inCart` false، ماتعرضش حاجة

##### Button Text
```jsx
{addedToCart ? "Added!" : inCart ? "Add More" : "Add to Cart"}
```
- **Nested Ternary**:
  - لو `addedToCart` true → "Added!"
  - لو `inCart` true → "Add More"
  - غير كده → "Add to Cart"

#### 8. **Styling**

##### Hover Effect
```jsx
className="group-hover/card:scale-110 transition-transform duration-300"
```
- **`group-hover/card`**: لما المستخدم يعمل hover على الـ card
- **`scale-110`**: كبّر الصورة 110%
- **`transition-transform duration-300`**: الحركة تاخد 300ms

##### Conditional Styling
```jsx
className={`... ${inWishlist ? "bg-red-500 text-white" : "bg-white/90 ..."}`}
```
- **Template Literals**: نقدر نحط JavaScript expressions جوه الـ string
- لو `inWishlist` true، استخدم classes معينة
- لو false، استخدم classes تانية

**ليه عملناها كده؟**
- **Reusable**: نقدر نستخدم الـ Card في أي مكان
- **Interactive**: المستخدم يقدر يضيف للسلة والمفضلة
- **Visual Feedback**: المستخدم يشوف رسائل واضحة (Added!, In Cart)
- **Responsive**: بتشتغل على كل الشاشات

---

### 2. `nav.jsx` - شريط التنقل

```jsx
import logo from "../assets/logo.png";
import darkLogo from "../assets/dark-logo.png";
import { Menu, XIcon, Search, ShoppingCart, Heart, Moon } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const { getCartCount, wishlistItems } = useAppContext();

  // Dark Mode Effect
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <nav className="w-full fixed z-[999] top-0 ...">
      {/* Desktop Nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/">
            <img src={darkMode ? darkLogo : logo} alt="Logo" />
          </Link>

          {/* Search Bar (Desktop) */}
          <div className="hidden md:flex ...">
            <input type="text" placeholder="Search products..." />
          </div>

          {/* Icons (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            {/* Dark Mode Toggle */}
            <button onClick={() => setDarkMode(!darkMode)}>
              <Moon />
            </button>

            {/* Wishlist */}
            <Link to="/wishlist" className="relative">
              <Heart />
              {wishlistItems.length > 0 && (
                <span className="absolute ... bg-red-500 ...">
                  {wishlistItems.length}
                </span>
              )}
            </Link>

            {/* Cart */}
            <Link to="/cart" className="relative">
              <ShoppingCart />
              {getCartCount() > 0 && (
                <span className="absolute ... bg-primary ...">
                  {getCartCount()}
                </span>
              )}
            </Link>

            {/* Auth Buttons */}
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <XIcon /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Categories Bar (Desktop) */}
      <div className="hidden md:block ...">
        {['Electronics', 'Toys', 'Decor', ...].map((category) => (
          <Link key={category} to={`/category/${category}`}>
            {category}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50" onClick={() => setIsOpen(false)} />
      )}

      {/* Mobile Menu Drawer */}
      <div className={`fixed ... ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        {/* Menu Content */}
      </div>
    </nav>
  );
}
```

**الشرح التفصيلي:**

#### 1. **State Management**
```jsx
const [isOpen, setIsOpen] = useState(false);  // Mobile menu
const [darkMode, setDarkMode] = useState(false);  // Dark mode
```

#### 2. **Dark Mode Effect**
```jsx
useEffect(() => {
  if (darkMode) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}, [darkMode]);
```

**الشرح:**
- **`document.documentElement`**: هو الـ `<html>` tag
- بنضيف class `dark` للـ HTML
- Tailwind بيستخدم الـ class ده عشان يطبق الـ dark mode styles
- **Dependency Array `[darkMode]`**: الـ effect يشتغل لما `darkMode` يتغير

#### 3. **Prevent Scroll Effect**
```jsx
useEffect(() => {
  if (isOpen) {
    document.body.style.overflow = 'hidden';  // امنع الـ scroll
  } else {
    document.body.style.overflow = 'unset';   // اسمح بالـ scroll
  }
}, [isOpen]);
```

**ليه؟**
- لما الـ mobile menu يكون مفتوح، نمنع المستخدم من الـ scroll
- عشان ميقدرش يعمل scroll للصفحة اللي ورا الـ menu

#### 4. **Badge Counter**
```jsx
{getCartCount() > 0 && (
  <span className="absolute top-0 right-0 ... bg-primary rounded-full">
    {getCartCount()}
  </span>
)}
```

**الشرح:**
- **Conditional Rendering**: لو فيه حاجة في السلة، اعرض الـ badge
- **`absolute`**: الـ badge يكون فوق الأيقونة
- **`rounded-full`**: دائري

#### 5. **Responsive Design**
```jsx
className="hidden md:flex"  // اخفي على mobile، اعرض على desktop
className="md:hidden"        // اعرض على mobile، اخفي على desktop
```

**Tailwind Breakpoints:**
- **`md:`**: من 768px وفوق (tablets وdesktops)
- **`lg:`**: من 1024px وفوق (desktops)
- **`sm:`**: من 640px وفوق (large phones)

#### 6. **Mobile Menu Animation**
```jsx
className={`fixed ... transition-transform duration-300 ${
  isOpen ? 'translate-x-0' : '-translate-x-full'
}`}
```

**الشرح:**
- **`translate-x-0`**: في المكان الطبيعي (ظاهر)
- **`-translate-x-full`**: متحرك للشمال 100% (مخفي)
- **`transition-transform duration-300`**: الحركة تاخد 300ms

**ليه عملناها كده؟**
- **Fixed**: الـ Nav يفضل ثابت فوق لما المستخدم يعمل scroll
- **Responsive**: بيشتغل على mobile وdesktop
- **Dark Mode**: المستخدم يقدر يغير الثيم
- **Badges**: المستخدم يشوف عدد المنتجات في السلة والمفضلة

---

## 📄 الصفحات (Pages)

### 1. `cart.jsx` - صفحة السلة

```jsx
import { ShoppingCart, Trash2, Plus, Minus, ArrowRight, Tag } from "lucide-react";
import { useAppContext } from "../context/AppContext";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Cart() {
  const { cartItems, removeFromCart, updateCartQuantity, getCartTotal, getCartCount } = useAppContext();
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);

  const applyPromoCode = () => {
    if (promoCode.toUpperCase() === "SAVE10") {
      setDiscount(0.1);  // 10% discount
      alert("Promo code applied! 10% discount");
    } else if (promoCode.toUpperCase() === "SAVE20") {
      setDiscount(0.2);  // 20% discount
      alert("Promo code applied! 20% discount");
    } else if (promoCode) {
      alert("Invalid promo code");
    }
  };

  // Calculations
  const subtotal = getCartTotal();
  const discountAmount = subtotal * discount;
  const shipping = subtotal > 100 ? 0 : 10;  // Free shipping over $100
  const tax = (subtotal - discountAmount) * 0.08;  // 8% tax
  const total = subtotal - discountAmount + shipping + tax;

  return (
    <div className="min-h-screen ...">
      {/* Header */}
      <div className="mb-8">
        <h1>Shopping Cart</h1>
        <p>{getCartCount()} items in your cart</p>
      </div>

      {cartItems.length === 0 ? (
        // Empty Cart
        <div className="text-center py-16">
          <ShoppingCart className="w-24 h-24 mx-auto ..." />
          <h2>Your cart is empty</h2>
          <Link to="/">Continue Shopping</Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-white ... p-6">
                <div className="flex gap-4">
                  {/* Image */}
                  <img src={item.image} alt={item.title} />

                  {/* Details */}
                  <div className="flex-1">
                    <h3>{item.title}</h3>
                    <p>${item.price.toFixed(2)}</p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2">
                      <button onClick={() => updateCartQuantity(item.id, item.quantity - 1)}>
                        <Minus />
                      </button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateCartQuantity(item.id, item.quantity + 1)}>
                        <Plus />
                      </button>
                    </div>

                    {/* Subtotal */}
                    <p>${(item.price * item.quantity).toFixed(2)}</p>
                  </div>

                  {/* Remove Button */}
                  <button onClick={() => removeFromCart(item.id)}>
                    <Trash2 />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white ... p-6 sticky top-24">
              <h2>Order Summary</h2>

              {/* Promo Code */}
              <div>
                <input
                  type="text"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  placeholder="SAVE10 / SAVE20"
                />
                <button onClick={applyPromoCode}>Apply</button>
              </div>

              {/* Price Breakdown */}
              <div>
                <div>Subtotal: ${subtotal.toFixed(2)}</div>
                {discount > 0 && (
                  <div>Discount ({(discount * 100).toFixed(0)}%): -${discountAmount.toFixed(2)}</div>
                )}
                <div>
                  Shipping: {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                </div>
                <div>Tax (8%): ${tax.toFixed(2)}</div>
              </div>

              {/* Total */}
              <div>
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>

              {/* Checkout Button */}
              <Link to="/checkout">
                Proceed to Checkout
                <ArrowRight />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
```

**الشرح التفصيلي:**

#### 1. **Promo Code Logic**
```jsx
const applyPromoCode = () => {
  if (promoCode.toUpperCase() === "SAVE10") {
    setDiscount(0.1);
  } else if (promoCode.toUpperCase() === "SAVE20") {
    setDiscount(0.2);
  } else if (promoCode) {
    alert("Invalid promo code");
  }
};
```

**الشرح:**
- **`toUpperCase()`**: بنحول الكود لحروف كبيرة عشان المقارنة تكون case-insensitive
- **`0.1`** = 10%, **`0.2`** = 20%
- لو الكود غلط، نعرض رسالة خطأ

#### 2. **Calculations**
```jsx
const subtotal = getCartTotal();
const discountAmount = subtotal * discount;
const shipping = subtotal > 100 ? 0 : 10;
const tax = (subtotal - discountAmount) * 0.08;
const total = subtotal - discountAmount + shipping + tax;
```

**الشرح:**
- **subtotal**: مجموع أسعار كل المنتجات
- **discountAmount**: قيمة الخصم
- **shipping**: لو الـ subtotal أكتر من 100، الشحن مجاني
- **tax**: 8% من السعر بعد الخصم
- **total**: السعر النهائي

#### 3. **Quantity Controls**
```jsx
<button onClick={() => updateCartQuantity(item.id, item.quantity - 1)}>
  <Minus />
</button>
<span>{item.quantity}</span>
<button onClick={() => updateCartQuantity(item.id, item.quantity + 1)}>
  <Plus />
</button>
```

**الشرح:**
- **Minus**: بينقص الكمية بـ 1
- **Plus**: بيزود الكمية بـ 1
- لو الكمية وصلت 0، المنتج بيتشال من السلة (في AppContext)

#### 4. **Empty Cart**
```jsx
{cartItems.length === 0 ? (
  <div>Your cart is empty</div>
) : (
  <div>Cart Items...</div>
)}
```

**الشرح:**
- **Ternary Operator**: لو السلة فاضية، اعرض رسالة
- لو فيها منتجات، اعرض المنتجات

#### 5. **Sticky Summary**
```jsx
className="sticky top-24"
```

**الشرح:**
- **`sticky`**: الـ summary يفضل ظاهر لما المستخدم يعمل scroll
- **`top-24`**: يبعد 24 (6rem) من فوق

**ليه عملناها كده؟**
- **Calculations**: المستخدم يشوف السعر النهائي بوضوح
- **Promo Codes**: تشجيع المستخدم على الشراء
- **Quantity Controls**: المستخدم يقدر يعدل الكمية بسهولة
- **Empty State**: رسالة واضحة لما السلة فاضية

---

## 🌐 Context API

### `AppContext.jsx` - إدارة الحالة العامة

هذا الملف هو **أهم ملف** في المشروع!

```jsx
import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within AppProvider");
  }
  return context;
};

export const AppProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // ... (باقي الكود)
};
```

**الشرح التفصيلي:**

#### 1. **Create Context**
```jsx
const AppContext = createContext();
```
- بننشئ Context جديد
- الـ Context ده هيحمل كل البيانات المشتركة

#### 2. **Custom Hook**
```jsx
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within AppProvider");
  }
  return context;
};
```

**ليه عملنا Custom Hook؟**
- عشان نسهل استخدام الـ Context
- بدل ما نكتب `useContext(AppContext)` في كل مكون
- نكتب `useAppContext()` بس

**Error Handling:**
- لو حد استخدم الـ hook برة الـ Provider، هيحصل error واضح

#### 3. **Load from localStorage**
```jsx
useEffect(() => {
  const savedCart = localStorage.getItem("cart");
  const savedWishlist = localStorage.getItem("wishlist");

  if (savedCart) {
    setCartItems(JSON.parse(savedCart));
  }
  if (savedWishlist) {
    setWishlistItems(JSON.parse(savedWishlist));
  }
}, []);
```

**الشرح:**
- **`useEffect(() => {...}, [])`**: يشتغل مرة واحدة بس لما المكون يحمل
- **`localStorage.getItem()`**: بنجيب البيانات من localStorage
- **`JSON.parse()`**: بنحول الـ string لـ object/array
- لو فيه بيانات محفوظة، نحطها في الـ state

#### 4. **Save to localStorage**
```jsx
useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(cartItems));
}, [cartItems]);
```

**الشرح:**
- **Dependency `[cartItems]`**: الـ effect يشتغل كل ما `cartItems` يتغير
- **`JSON.stringify()`**: بنحول الـ array لـ string
- **`localStorage.setItem()`**: بنحفظ البيانات

**ليه؟**
- عشان البيانات تفضل موجودة حتى لو المستخدم قفل الصفحة

#### 5. **Fetch Products**
```jsx
useEffect(() => {
  fetchProducts();
}, []);

const fetchProducts = async () => {
  try {
    setLoading(true);
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setProducts(data);
  } catch (error) {
    console.error("Error fetching products:", error);
  } finally {
    setLoading(false);
  }
};
```

**الشرح:**
- **`async/await`**: للتعامل مع Promises
- **`try/catch/finally`**:
  - **try**: جرب تنفذ الكود
  - **catch**: لو حصل error، اعمل حاجة
  - **finally**: في كل الحالات، نفذ الكود ده
- **`setLoading(true)`**: قبل ما نبدأ الـ fetch
- **`setLoading(false)`**: بعد ما نخلص (في finally)

#### 6. **addToCart Function**
```jsx
const addToCart = (product) => {
  const existingItem = cartItems.find((item) => item.id === product.id);

  if (existingItem) {
    // المنتج موجود، زود الكمية
    setCartItems(
      cartItems.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  } else {
    // المنتج مش موجود، ضيفه
    setCartItems([...cartItems, { ...product, quantity: 1 }]);
  }
};
```

**الشرح:**

##### find()
```jsx
const existingItem = cartItems.find((item) => item.id === product.id);
```
- بيدور على المنتج في السلة
- لو لقاه، بيرجع المنتج
- لو ملقاهوش، بيرجع `undefined`

##### map()
```jsx
cartItems.map((item) =>
  item.id === product.id
    ? { ...item, quantity: item.quantity + 1 }
    : item
)
```
- بيعمل loop على كل المنتجات
- لو الـ id بتاع المنتج يساوي الـ id اللي بندور عليه:
  - **`{ ...item }`**: نسخ كل properties المنتج
  - **`quantity: item.quantity + 1`**: زود الكمية بـ 1
- لو مش نفس الـ id، سيب المنتج زي ما هو

##### Spread Operator
```jsx
[...cartItems, { ...product, quantity: 1 }]
```
- **`...cartItems`**: نسخ كل المنتجات الموجودة
- **`{ ...product, quantity: 1 }`**: ضيف المنتج الجديد مع كمية 1

**ليه مش بنعدل على الـ array مباشرة؟**
- React بيعتمد على **Immutability**
- لازم ننشئ array جديد عشان React يعرف إن فيه تغيير حصل
- لو عدلنا على الـ array القديم، React مش هيعمل re-render

#### 7. **updateCartQuantity Function**
```jsx
const updateCartQuantity = (productId, quantity) => {
  if (quantity <= 0) {
    removeFromCart(productId);
    return;
  }

  setCartItems(
    cartItems.map((item) =>
      item.id === productId ? { ...item, quantity } : item
    )
  );
};
```

**الشرح:**
- لو الكمية 0 أو أقل، شيل المنتج من السلة
- غير كده، حدث الكمية

#### 8. **getCartTotal Function**
```jsx
const getCartTotal = () => {
  return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
};
```

**الشرح:**
- **`reduce()`**: بيجمع كل القيم في قيمة واحدة
- **`total`**: المجموع الحالي (بيبدأ بـ 0)
- **`item`**: المنتج الحالي
- **`total + item.price * item.quantity`**: المجموع الجديد

**مثال:**
```javascript
cartItems = [
  { price: 10, quantity: 2 },  // 20
  { price: 5, quantity: 3 },   // 15
]
// Total = 20 + 15 = 35
```

#### 9. **Provider**
```jsx
const value = {
  products,
  loading,
  fetchProducts,
  cartItems,
  addToCart,
  removeFromCart,
  // ... باقي الدوال
};

return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
```

**الشرح:**
- **`value`**: كل حاجة عايزين نشاركها مع المكونات
- **`{children}`**: كل المكونات اللي جوه الـ Provider

**ليه عملناها كده؟**
- **Centralized State**: كل البيانات في مكان واحد
- **No Props Drilling**: مش محتاجين نمرر props من مكون لمكون
- **Persistence**: البيانات بتتحفظ في localStorage
- **Reusability**: أي مكون يقدر يستخدم الدوال دي

---

## 🎨 Styling

### Tailwind CSS

المشروع بيستخدم **Tailwind CSS** للتنسيقات.

#### أمثلة:

##### Spacing
```jsx
className="p-4"      // padding: 1rem (16px)
className="m-2"      // margin: 0.5rem (8px)
className="px-6"     // padding-left & padding-right: 1.5rem
className="mt-4"     // margin-top: 1rem
```

##### Colors
```jsx
className="bg-primary"           // خلفية primary color
className="text-white"           // نص أبيض
className="dark:bg-gray-900"     // خلفية رمادية في Dark Mode
```

##### Flexbox
```jsx
className="flex"                 // display: flex
className="flex-col"             // flex-direction: column
className="justify-between"      // justify-content: space-between
className="items-center"         // align-items: center
className="gap-4"                // gap: 1rem
```

##### Grid
```jsx
className="grid grid-cols-3"     // 3 columns
className="lg:grid-cols-4"       // 4 columns على large screens
className="gap-6"                // gap: 1.5rem
```

##### Responsive
```jsx
className="hidden md:block"      // مخفي على mobile، ظاهر على desktop
className="w-full md:w-1/2"      // عرض 100% على mobile، 50% على desktop
```

##### Hover & Transitions
```jsx
className="hover:bg-blue-600"    // لون مختلف على hover
className="transition-colors"    // حركة سلسة للألوان
className="duration-300"         // الحركة تاخد 300ms
```

---

## 📦 package.json

```json
{
  "dependencies": {
    "react": "^19.1.1",
    "react-dom": "^19.1.1",
    "react-router-dom": "^7.9.5",
    "tailwindcss": "^4.1.16",
    "lucide-react": "^0.553.0",
    "formik": "^2.4.6",
    "axios": "^1.13.1"
  }
}
```

**الشرح:**
- **react**: المكتبة الأساسية
- **react-dom**: للتعامل مع DOM
- **react-router-dom**: للـ routing
- **tailwindcss**: للتنسيقات
- **lucide-react**: أيقونات
- **formik**: للتعامل مع Forms
- **axios**: للـ HTTP requests (بديل لـ fetch)

---

## 🎯 الخلاصة

### المفاهيم الأساسية المستخدمة:

1. **Components**: كل حاجة مكون قابل لإعادة الاستخدام
2. **Props**: تمرير البيانات من مكون لمكون
3. **State**: البيانات اللي بتتغير
4. **Hooks**: useState, useEffect, useContext
5. **Context API**: مشاركة البيانات بين المكونات
6. **React Router**: التنقل بين الصفحات
7. **localStorage**: حفظ البيانات
8. **API Integration**: جلب البيانات من API
9. **Conditional Rendering**: عرض محتوى بناءً على شروط
10. **Event Handling**: التعامل مع أحداث المستخدم

### أفضل الممارسات:

1. ✅ **Immutability**: مش بنعدل على الـ state مباشرة
2. ✅ **Destructuring**: بنستخدم destructuring للـ props والـ state
3. ✅ **Key Prop**: بنستخدم key في lists
4. ✅ **Error Handling**: بنتعامل مع الأخطاء
5. ✅ **Loading States**: بنعرض رسائل loading
6. ✅ **Responsive Design**: بيشتغل على كل الشاشات
7. ✅ **Accessibility**: بنستخدم semantic HTML
8. ✅ **Code Organization**: الكود منظم في مجلدات

---

**الآن أنت جاهز لتبدأ رحلتك في React! 🚀**

ابدأ بمشاريع صغيرة، واعمل تجارب، ومتخافش من الأخطاء - كلنا بنتعلم منها! 💪
