# 🎓 دليل تعلم React الشامل - شرح مشروع E-commerce

## 📋 جدول المحتويات
1. [مقدمة عن React](#مقدمة-عن-react)
2. [بنية المشروع](#بنية-المشروع)
3. [المفاهيم الأساسية](#المفاهيم-الأساسية)
4. [شرح تفصيلي لكل ملف](#شرح-تفصيلي-لكل-ملف)
5. [أمثلة عملية](#أمثلة-عملية)
6. [نصائح وأفضل الممارسات](#نصائح-وأفضل-الممارسات)

---

## 🚀 مقدمة عن React

### ما هو React؟
React هو مكتبة JavaScript لبناء واجهات المستخدم (UI). تم تطويره بواسطة Facebook وهو يعتمد على مفهوم **المكونات (Components)**.

### ليه نستخدم React؟
1. **Component-Based**: كل حاجة عبارة عن مكون قابل لإعادة الاستخدام
2. **Virtual DOM**: أداء عالي جداً
3. **Declarative**: بتقول لـ React عايز إيه، مش إزاي تعمله
4. **مجتمع ضخم**: مكتبات وأدوات كتير جداً
5. **React Hooks**: طريقة سهلة لإدارة الـ State والـ Side Effects

---

## 📁 بنية المشروع

```
ecommerce-react/
├── public/              # ملفات ثابتة (صور، أيقونات)
├── src/                 # الكود الأساسي
│   ├── components/      # المكونات القابلة لإعادة الاستخدام
│   │   ├── nav.jsx      # شريط التنقل
│   │   ├── card.jsx     # بطاقة المنتج
│   │   ├── footer.jsx   # تذييل الصفحة
│   │   ├── header.jsx   # رأس الصفحة
│   │   └── ...
│   ├── pages/           # صفحات التطبيق
│   │   ├── Home.jsx     # الصفحة الرئيسية
│   │   ├── cart.jsx     # صفحة السلة
│   │   ├── wishlist.jsx # صفحة المفضلة
│   │   └── ...
│   ├── context/         # إدارة الحالة العامة
│   │   └── AppContext.jsx
│   ├── App.jsx          # المكون الرئيسي
│   ├── main.jsx         # نقطة الدخول
│   └── index.css        # التنسيقات
├── package.json         # معلومات المشروع والمكتبات
└── vite.config.js       # إعدادات Vite
```

---

## 🎯 المفاهيم الأساسية

### 1. Components (المكونات)

**المكون** هو قطعة من الكود تُرجع JSX (HTML-like syntax).

#### مثال بسيط:
```jsx
function Welcome() {
  return <h1>أهلاً بك!</h1>;
}
```

#### أنواع المكونات:
1. **Function Components** (الأكثر استخداماً حالياً)
2. **Class Components** (قديمة نسبياً)

---

### 2. JSX (JavaScript XML)

JSX هو syntax يسمح لك بكتابة HTML داخل JavaScript.

```jsx
// JSX
const element = <h1 className="title">مرحباً</h1>;

// يتحول إلى:
const element = React.createElement('h1', {className: 'title'}, 'مرحباً');
```

**قواعد مهمة:**
- استخدم `className` بدلاً من `class`
- استخدم `htmlFor` بدلاً من `for`
- كل tag لازم يتقفل: `<img />` مش `<img>`
- لازم يكون فيه عنصر واحد رئيسي (أو استخدم Fragment `<>...</>`)

---

### 3. Props (الخصائص)

Props هي طريقة لتمرير البيانات من مكون لمكون آخر (من الأب للابن).

```jsx
// المكون الأب
function Parent() {
  return <Child name="أحمد" age={25} />;
}

// المكون الابن
function Child(props) {
  return <p>اسمي {props.name} وعمري {props.age}</p>;
}

// أو باستخدام Destructuring
function Child({ name, age }) {
  return <p>اسمي {name} وعمري {age}</p>;
}
```

**ملحوظة مهمة:** Props هي **read-only** (مينفعش تعدل عليها).

---

### 4. State (الحالة)

State هي البيانات اللي بتتغير في المكون. لما الـ State يتغير، المكون بيعمل re-render.

```jsx
import { useState } from 'react';

function Counter() {
  // useState بيرجع array فيها عنصرين:
  // [1] القيمة الحالية
  // [2] دالة لتحديث القيمة
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>العدد: {count}</p>
      <button onClick={() => setCount(count + 1)}>زود</button>
    </div>
  );
}
```

**الفرق بين Props و State:**
- **Props**: تُمرر من الخارج، read-only
- **State**: داخلية للمكون، قابلة للتغيير

---

### 5. Hooks (الخطافات)

Hooks هي دوال خاصة تسمح لك باستخدام ميزات React في Function Components.

#### أهم الـ Hooks:

##### أ) useState
```jsx
const [state, setState] = useState(initialValue);
```

##### ب) useEffect
يُستخدم للـ Side Effects (API calls, subscriptions, timers, etc.)

```jsx
import { useEffect } from 'react';

function Example() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // هذا الكود يشتغل بعد كل render
    console.log('Component rendered!');
  });

  useEffect(() => {
    // هذا الكود يشتغل مرة واحدة فقط (عند التحميل)
    fetchData();
  }, []); // [] = dependency array فاضي

  useEffect(() => {
    // هذا الكود يشتغل لما count يتغير
    console.log('Count changed!');
  }, [count]); // يشتغل لما count يتغير

  return <div>...</div>;
}
```

**Dependency Array:**
- **بدون array**: يشتغل بعد كل render
- **[] فاضي**: يشتغل مرة واحدة فقط
- **[dep1, dep2]**: يشتغل لما dep1 أو dep2 يتغيروا

##### ج) useContext
لمشاركة البيانات بين المكونات بدون Props Drilling.

```jsx
import { createContext, useContext } from 'react';

const ThemeContext = createContext();

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Child />
    </ThemeContext.Provider>
  );
}

function Child() {
  const theme = useContext(ThemeContext);
  return <div>Theme: {theme}</div>;
}
```

---

### 6. React Router (التنقل بين الصفحات)

React Router يسمح لك بإنشاء تطبيق Single Page Application (SPA) مع صفحات متعددة.

```jsx
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
```

---

## 📝 شرح تفصيلي لكل ملف

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

**الشرح:**
1. **StrictMode**: وضع تطوير يساعد في اكتشاف المشاكل
2. **createRoot**: طريقة React 18 الجديدة لعرض التطبيق
3. **BrowserRouter**: يُغلف التطبيق لتفعيل الـ Routing
4. **document.getElementById('root')**: العنصر في HTML اللي هيتحط فيه التطبيق

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
1. **AppProvider**: يُغلف التطبيق كله عشان كل المكونات تقدر توصل للـ Context
2. **Nav**: شريط التنقل (ثابت في كل الصفحات)
3. **Routes**: يحتوي على كل الـ Routes
4. **Route**: كل route يربط path معين بمكون معين
5. **Footer**: التذييل (ثابت في كل الصفحات)

**ليه عملناها كده؟**
- عشان الـ Nav والـ Footer يظهروا في كل الصفحات
- عشان نقدر نشارك الـ State بين كل المكونات عن طريق AppProvider

---

### 3. `AppContext.jsx` - إدارة الحالة العامة

هذا الملف هو **قلب التطبيق** - بيدير كل البيانات المشتركة.

```jsx
import { createContext, useContext, useState, useEffect } from "react";

// 1. إنشاء Context
const AppContext = createContext();

// 2. Custom Hook للوصول للـ Context بسهولة
export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error("useAppContext must be used within AppProvider");
    }
    return context;
};

// 3. Provider Component
export const AppProvider = ({ children }) => {
    // States
    const [cartItems, setCartItems] = useState([]);
    const [wishlistItems, setWishlistItems] = useState([]);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    // Load من localStorage عند التحميل
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

    // Save للـ localStorage لما cartItems يتغير
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartItems));
    }, [cartItems]);

    // Save للـ localStorage لما wishlistItems يتغير
    useEffect(() => {
        localStorage.setItem("wishlist", JSON.stringify(wishlistItems));
    }, [wishlistItems]);

    // Fetch products من API
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

    // Cart functions
    const addToCart = (product) => {
        const existingItem = cartItems.find((item) => item.id === product.id);

        if (existingItem) {
            // لو المنتج موجود، زود الكمية
            setCartItems(
                cartItems.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            );
        } else {
            // لو المنتج مش موجود، ضيفه
            setCartItems([...cartItems, { ...product, quantity: 1 }]);
        }
    };

    const removeFromCart = (productId) => {
        setCartItems(cartItems.filter((item) => item.id !== productId));
    };

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

    const clearCart = () => {
        setCartItems([]);
    };

    const getCartTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const getCartCount = () => {
        return cartItems.reduce((count, item) => count + item.quantity, 0);
    };

    // Wishlist functions
    const addToWishlist = (product) => {
        const exists = wishlistItems.find((item) => item.id === product.id);
        if (!exists) {
            setWishlistItems([...wishlistItems, product]);
        }
    };

    const removeFromWishlist = (productId) => {
        setWishlistItems(wishlistItems.filter((item) => item.id !== productId));
    };

    const isInWishlist = (productId) => {
        return wishlistItems.some((item) => item.id === productId);
    };

    const isInCart = (productId) => {
        return cartItems.some((item) => item.id === productId);
    };

    // كل حاجة عايزين نشاركها
    const value = {
        products,
        loading,
        fetchProducts,
        cartItems,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        clearCart,
        getCartTotal,
        getCartCount,
        isInCart,
        wishlistItems,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
```

**الشرح التفصيلي:**

#### لماذا Context API؟
بدون Context، لو عايز تشارك بيانات بين مكونات، هتضطر تعمل **Props Drilling**:
```jsx
<App>
  <Parent cart={cart}>
    <Child cart={cart}>
      <GrandChild cart={cart} />
    </Child>
  </Parent>
</App>
```

مع Context:
```jsx
// في أي مكون
const { cart } = useAppContext();
```

#### localStorage
```jsx
// حفظ
localStorage.setItem("key", JSON.stringify(data));

// قراءة
const data = JSON.parse(localStorage.getItem("key"));
```

**ليه نستخدم localStorage؟**
- عشان البيانات تفضل موجودة حتى لو المستخدم قفل الصفحة
- مثالي للـ Cart والـ Wishlist

#### async/await
```jsx
const fetchProducts = async () => {
    try {
        const response = await fetch("URL");
        const data = await response.json();
        setProducts(data);
    } catch (error) {
        console.error(error);
    } finally {
        setLoading(false);
    }
};
```

**الشرح:**
- **async**: تخلي الدالة ترجع Promise
- **await**: تستنى Promise تخلص
- **try/catch**: للتعامل مع الأخطاء
- **finally**: يشتغل في كل الحالات

#### Array Methods المهمة

##### find()
```jsx
const item = array.find(item => item.id === 5);
// بيرجع أول عنصر يحقق الشرط
```

##### filter()
```jsx
const filtered = array.filter(item => item.price > 100);
// بيرجع array جديد فيه العناصر اللي حققت الشرط
```

##### map()
```jsx
const updated = array.map(item => 
  item.id === 5 ? { ...item, quantity: 10 } : item
);
// بيرجع array جديد بعد تطبيق دالة على كل عنصر
```

##### reduce()
```jsx
const total = array.reduce((sum, item) => sum + item.price, 0);
// بيجمع القيم في قيمة واحدة
```

##### some()
```jsx
const hasExpensive = array.some(item => item.price > 1000);
// بيرجع true لو فيه عنصر واحد على الأقل يحقق الشرط
```

---

### 4. مثال على مكون: `card.jsx`

دعنا نفترض أن card.jsx يبدو كالتالي:

```jsx
import { useAppContext } from '../context/AppContext';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';

function Card({ product }) {
  const { addToCart, addToWishlist, isInCart, isInWishlist } = useAppContext();

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleAddToWishlist = () => {
    addToWishlist(product);
  };

  return (
    <div className="card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      
      <div className="buttons">
        <button 
          onClick={handleAddToCart}
          disabled={isInCart(product.id)}
        >
          <FaShoppingCart />
          {isInCart(product.id) ? 'في السلة' : 'أضف للسلة'}
        </button>
        
        <button 
          onClick={handleAddToWishlist}
          className={isInWishlist(product.id) ? 'active' : ''}
        >
          <FaHeart />
        </button>
      </div>
    </div>
  );
}

export default Card;
```

**الشرح:**
1. **useAppContext**: نجيب الدوال اللي محتاجينها من Context
2. **Props**: المكون بياخد product كـ prop
3. **Event Handlers**: دوال تتنفذ لما المستخدم يضغط على زرار
4. **Conditional Rendering**: نغير النص بناءً على حالة المنتج
5. **Icons**: استخدام react-icons للأيقونات

---

## 🎨 أمثلة عملية

### مثال 1: عمل Todo List بسيط

```jsx
import { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { id: Date.now(), text: input, done: false }]);
      setInput('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && addTodo()}
      />
      <button onClick={addTodo}>إضافة</button>

      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.done}
              onChange={() => toggleTodo(todo.id)}
            />
            <span style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>حذف</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
```

**المفاهيم المستخدمة:**
- **Controlled Components**: الـ input قيمته من state
- **Event Handlers**: onChange, onClick, onKeyPress
- **Array Methods**: map, filter
- **Conditional Styling**: inline styles بناءً على الحالة
- **Key Prop**: مهم جداً في lists

---

### مثال 2: Fetch Data من API

```jsx
import { useState, useEffect } from 'react';

function UsersList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      
      if (!response.ok) {
        throw new Error('فشل في تحميل البيانات');
      }
      
      const data = await response.json();
      setUsers(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>جاري التحميل...</div>;
  if (error) return <div>خطأ: {error}</div>;

  return (
    <div>
      <h2>قائمة المستخدمين</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
```

**المفاهيم:**
- **Loading State**: لعرض رسالة أثناء التحميل
- **Error Handling**: للتعامل مع الأخطاء
- **Conditional Rendering**: عرض محتوى مختلف بناءً على الحالة

---

### مثال 3: Form مع Validation

```jsx
import { useState } from 'react';

function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = 'البريد الإلكتروني مطلوب';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'البريد الإلكتروني غير صحيح';
    }

    if (!formData.password) {
      newErrors.password = 'كلمة المرور مطلوبة';
    } else if (formData.password.length < 6) {
      newErrors.password = 'كلمة المرور يجب أن تكون 6 أحرف على الأقل';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = validate();
    
    if (Object.keys(newErrors).length === 0) {
      console.log('تم الإرسال:', formData);
      // هنا تقدر تعمل API call
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="البريد الإلكتروني"
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>

      <div>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="كلمة المرور"
        />
        {errors.password && <span className="error">{errors.password}</span>}
      </div>

      <button type="submit">تسجيل الدخول</button>
    </form>
  );
}
```

**المفاهيم:**
- **Form Handling**: التعامل مع النماذج
- **Validation**: التحقق من صحة البيانات
- **Dynamic Object Keys**: `[name]: value`
- **Regex**: للتحقق من البريد الإلكتروني

---

## 💡 نصائح وأفضل الممارسات

### 1. تسمية المكونات
```jsx
// ✅ صح - PascalCase
function ProductCard() {}

// ❌ غلط - camelCase
function productCard() {}
```

### 2. تنظيم الـ State
```jsx
// ❌ غلط - state منفصل لكل حاجة
const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [email, setEmail] = useState('');

// ✅ صح - state واحد للبيانات المرتبطة
const [user, setUser] = useState({
  firstName: '',
  lastName: '',
  email: ''
});
```

### 3. استخدام Key في Lists
```jsx
// ❌ غلط - استخدام index
{items.map((item, index) => <div key={index}>{item}</div>)}

// ✅ صح - استخدام unique ID
{items.map(item => <div key={item.id}>{item.name}</div>)}
```

### 4. Destructuring
```jsx
// ❌ غلط
function User(props) {
  return <div>{props.name} - {props.email}</div>;
}

// ✅ صح
function User({ name, email }) {
  return <div>{name} - {email}</div>;
}
```

### 5. Conditional Rendering
```jsx
// الطريقة 1: &&
{isLoggedIn && <Dashboard />}

// الطريقة 2: ternary
{isLoggedIn ? <Dashboard /> : <Login />}

// الطريقة 3: early return
if (!user) return <div>Loading...</div>;
return <div>{user.name}</div>;
```

### 6. Event Handlers
```jsx
// ❌ غلط - استدعاء الدالة مباشرة
<button onClick={handleClick()}>Click</button>

// ✅ صح - تمرير reference للدالة
<button onClick={handleClick}>Click</button>

// ✅ صح - لو محتاج تمرر parameters
<button onClick={() => handleClick(id)}>Click</button>
```

### 7. useEffect Dependencies
```jsx
// ❌ غلط - نسيان dependencies
useEffect(() => {
  fetchData(userId);
}, []); // userId مش في الـ array!

// ✅ صح
useEffect(() => {
  fetchData(userId);
}, [userId]);
```

### 8. Immutability
```jsx
// ❌ غلط - تعديل الـ state مباشرة
const addItem = () => {
  items.push(newItem); // لا تفعل هذا!
  setItems(items);
};

// ✅ صح - إنشاء array جديد
const addItem = () => {
  setItems([...items, newItem]);
};
```

---

## 🔥 مفاهيم متقدمة

### 1. Custom Hooks

Custom Hook هو دالة تبدأ بـ `use` وتستخدم hooks أخرى.

```jsx
// useLocalStorage.js
import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

// الاستخدام
function App() {
  const [name, setName] = useLocalStorage('name', '');
  
  return (
    <input 
      value={name} 
      onChange={(e) => setName(e.target.value)} 
    />
  );
}
```

### 2. useCallback

لحفظ reference لدالة بين renders.

```jsx
import { useCallback } from 'react';

function Parent() {
  const [count, setCount] = useState(0);

  // بدون useCallback، الدالة دي هتتعمل من جديد كل render
  const handleClick = useCallback(() => {
    console.log('Clicked!');
  }, []); // [] = الدالة مش هتتغير

  return <Child onClick={handleClick} />;
}
```

### 3. useMemo

لحفظ نتيجة حسابات معقدة.

```jsx
import { useMemo } from 'react';

function ProductList({ products }) {
  // الحساب ده مكلف، نعمله مرة واحدة بس
  const expensiveProducts = useMemo(() => {
    return products.filter(p => p.price > 1000).sort((a, b) => b.price - a.price);
  }, [products]); // يتحسب من جديد لما products يتغير بس

  return <div>{/* ... */}</div>;
}
```

### 4. useRef

للوصول لـ DOM elements أو حفظ قيمة بدون re-render.

```jsx
import { useRef, useEffect } from 'react';

function TextInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    // focus على الـ input لما الصفحة تحمل
    inputRef.current.focus();
  }, []);

  return <input ref={inputRef} />;
}
```

---

## 📚 مصادر تعليمية إضافية

### مواقع مهمة:
1. **React Docs الرسمية**: https://react.dev
2. **React Router**: https://reactrouter.com
3. **MDN Web Docs**: https://developer.mozilla.org

### قنوات يوتيوب:
1. **Traversy Media**
2. **Net Ninja**
3. **Codevolution**
4. **Web Dev Simplified**

### تمارين عملية:
1. اعمل Todo App
2. اعمل Weather App (استخدم API)
3. اعمل E-commerce (زي المشروع ده)
4. اعمل Blog مع CRUD operations

---

## 🎯 خطة التعلم المقترحة

### الأسبوع 1: الأساسيات
- [ ] فهم JSX
- [ ] Components و Props
- [ ] State و useState
- [ ] Event Handling
- [ ] Conditional Rendering
- [ ] Lists و Keys

### الأسبوع 2: Hooks
- [ ] useEffect
- [ ] useContext
- [ ] Custom Hooks
- [ ] useRef
- [ ] useCallback و useMemo

### الأسبوع 3: Routing و Forms
- [ ] React Router
- [ ] Form Handling
- [ ] Validation
- [ ] API Integration

### الأسبوع 4: State Management
- [ ] Context API
- [ ] localStorage
- [ ] مشروع عملي كامل

---

## ✅ Checklist للمراجعة

قبل ما تقول إنك فاهم React، تأكد إنك تقدر تجاوب على الأسئلة دي:

- [ ] إيه الفرق بين Props و State؟
- [ ] إزاي تعمل Component؟
- [ ] إزاي تستخدم useState؟
- [ ] إزاي تعمل API call في React؟
- [ ] إيه فايدة useEffect؟
- [ ] إزاي تشارك بيانات بين Components؟
- [ ] إيه الفرق بين map و forEach؟
- [ ] إزاي تعمل Form Validation؟
- [ ] إيه هو Virtual DOM؟
- [ ] إزاي تعمل Routing؟

---

## 🚀 الخطوات التالية

بعد ما تتقن الأساسيات:

1. **TypeScript**: اضف type safety للكود
2. **Testing**: تعلم Jest و React Testing Library
3. **State Management**: Redux أو Zustand
4. **Styling**: Styled Components أو Tailwind CSS
5. **Next.js**: Framework مبني على React
6. **Performance**: Code Splitting, Lazy Loading

---

## 💬 أسئلة شائعة

### Q: امتى استخدم useEffect؟
A: لما تحتاج تعمل side effect (API call, subscription, DOM manipulation)

### Q: إيه الفرق بين useCallback و useMemo؟
A: useCallback للدوال، useMemo للقيم

### Q: ليه useState مش بيتحدث فوراً؟
A: لأن setState asynchronous - React بيجمع التحديثات ويعملها مرة واحدة

### Q: إزاي أمنع re-render غير ضروري؟
A: استخدم React.memo, useCallback, useMemo

---

**ملحوظة أخيرة:** 
React مش صعب، بس محتاج ممارسة! اعمل مشاريع صغيرة كتير أحسن من مشروع كبير واحد في البداية.

**Good Luck! 🎉**
