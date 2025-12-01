# 💪 تمارين React العملية

## 🎯 الهدف
هذه التمارين مصممة عشان تتدرب على المفاهيم اللي اتعلمتها. ابدأ بالسهل وتدرج للصعب!

---

## 📚 المستوى الأول: الأساسيات

### تمرين 1: Counter بسيط
**الهدف**: تعلم useState

```jsx
// المطلوب: اعمل counter بزرارين (+ و -)
function Counter() {
  // اكتب الكود هنا
  
  return (
    <div>
      <h1>Count: {/* اعرض العدد هنا */}</h1>
      <button>+</button>
      <button>-</button>
    </div>
  );
}
```

**الحل:**
<details>
<summary>اضغط لعرض الحل</summary>

```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}
```
</details>

---

### تمرين 2: Input Controlled
**الهدف**: تعلم Controlled Components

```jsx
// المطلوب: اعمل input يعرض قيمته تحته مباشرة
function NameInput() {
  // اكتب الكود هنا
  
  return (
    <div>
      <input type="text" placeholder="اكتب اسمك" />
      <p>اسمك: {/* اعرض الاسم هنا */}</p>
    </div>
  );
}
```

**الحل:**
<details>
<summary>اضغط لعرض الحل</summary>

```jsx
import { useState } from 'react';

function NameInput() {
  const [name, setName] = useState('');
  
  return (
    <div>
      <input 
        type="text" 
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="اكتب اسمك" 
      />
      <p>اسمك: {name}</p>
    </div>
  );
}
```
</details>

---

### تمرين 3: Toggle Button
**الهدف**: تعلم Boolean State

```jsx
// المطلوب: اعمل زرار يغير بين "ON" و "OFF"
function ToggleButton() {
  // اكتب الكود هنا
  
  return (
    <button>
      {/* اعرض ON أو OFF */}
    </button>
  );
}
```

**الحل:**
<details>
<summary>اضغط لعرض الحل</summary>

```jsx
import { useState } from 'react';

function ToggleButton() {
  const [isOn, setIsOn] = useState(false);
  
  return (
    <button onClick={() => setIsOn(!isOn)}>
      {isOn ? 'ON' : 'OFF'}
    </button>
  );
}
```
</details>

---

### تمرين 4: List من Array
**الهدف**: تعلم map() و key

```jsx
// المطلوب: اعرض قائمة من الأسماء
function NamesList() {
  const names = ['أحمد', 'محمد', 'علي', 'فاطمة'];
  
  return (
    <ul>
      {/* اعرض الأسماء هنا */}
    </ul>
  );
}
```

**الحل:**
<details>
<summary>اضغط لعرض الحل</summary>

```jsx
function NamesList() {
  const names = ['أحمد', 'محمد', 'علي', 'فاطمة'];
  
  return (
    <ul>
      {names.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </ul>
  );
}
```
</details>

---

## 📚 المستوى الثاني: متوسط

### تمرين 5: Todo List
**الهدف**: تعلم Array State Management

```jsx
// المطلوب: اعمل todo list بسيط
function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  
  const addTodo = () => {
    // اكتب الكود هنا
  };
  
  const deleteTodo = (index) => {
    // اكتب الكود هنا
  };
  
  return (
    <div>
      <input 
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="أضف مهمة"
      />
      <button onClick={addTodo}>إضافة</button>
      
      <ul>
        {/* اعرض المهام هنا */}
      </ul>
    </div>
  );
}
```

**الحل:**
<details>
<summary>اضغط لعرض الحل</summary>

```jsx
import { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  
  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, input]);
      setInput('');
    }
  };
  
  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };
  
  return (
    <div>
      <input 
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && addTodo()}
        placeholder="أضف مهمة"
      />
      <button onClick={addTodo}>إضافة</button>
      
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => deleteTodo(index)}>حذف</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
```
</details>

---

### تمرين 6: Form مع Validation
**الهدف**: تعلم Form Handling

```jsx
// المطلوب: اعمل form تسجيل دخول مع validation
function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  
  const validate = () => {
    // اكتب كود الـ validation هنا
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // اكتب الكود هنا
  };
  
  return (
    <form onSubmit={handleSubmit}>
      {/* اكتب الـ form هنا */}
    </form>
  );
}
```

**الحل:**
<details>
<summary>اضغط لعرض الحل</summary>

```jsx
import { useState } from 'react';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  
  const validate = () => {
    const newErrors = {};
    
    if (!email) {
      newErrors.email = 'البريد الإلكتروني مطلوب';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'البريد الإلكتروني غير صحيح';
    }
    
    if (!password) {
      newErrors.password = 'كلمة المرور مطلوبة';
    } else if (password.length < 6) {
      newErrors.password = 'كلمة المرور يجب أن تكون 6 أحرف على الأقل';
    }
    
    return newErrors;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    
    if (Object.keys(newErrors).length === 0) {
      console.log('تم الإرسال:', { email, password });
      alert('تم تسجيل الدخول بنجاح!');
    } else {
      setErrors(newErrors);
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="البريد الإلكتروني"
        />
        {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
      </div>
      
      <div>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="كلمة المرور"
        />
        {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
      </div>
      
      <button type="submit">تسجيل الدخول</button>
    </form>
  );
}
```
</details>

---

### تمرين 7: Fetch Data من API
**الهدف**: تعلم useEffect و async/await

```jsx
// المطلوب: اجلب قائمة users من API واعرضها
function UsersList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // اكتب كود الـ fetch هنا
  }, []);
  
  if (loading) return <div>جاري التحميل...</div>;
  
  return (
    <ul>
      {/* اعرض الـ users هنا */}
    </ul>
  );
}
```

**API**: https://jsonplaceholder.typicode.com/users

**الحل:**
<details>
<summary>اضغط لعرض الحل</summary>

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
    <ul>
      {users.map(user => (
        <li key={user.id}>
          {user.name} - {user.email}
        </li>
      ))}
    </ul>
  );
}
```
</details>

---

### تمرين 8: Search Filter
**الهدف**: تعلم Filtering

```jsx
// المطلوب: اعمل search box يفلتر قائمة من المنتجات
function ProductSearch() {
  const products = [
    { id: 1, name: 'لابتوب', price: 1000 },
    { id: 2, name: 'موبايل', price: 500 },
    { id: 3, name: 'تابلت', price: 300 },
    { id: 4, name: 'سماعات', price: 100 },
  ];
  
  const [search, setSearch] = useState('');
  
  // اكتب كود الـ filter هنا
  
  return (
    <div>
      <input 
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="ابحث عن منتج..."
      />
      
      <ul>
        {/* اعرض المنتجات المفلترة هنا */}
      </ul>
    </div>
  );
}
```

**الحل:**
<details>
<summary>اضغط لعرض الحل</summary>

```jsx
import { useState } from 'react';

function ProductSearch() {
  const products = [
    { id: 1, name: 'لابتوب', price: 1000 },
    { id: 2, name: 'موبايل', price: 500 },
    { id: 3, name: 'تابلت', price: 300 },
    { id: 4, name: 'سماعات', price: 100 },
  ];
  
  const [search, setSearch] = useState('');
  
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );
  
  return (
    <div>
      <input 
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="ابحث عن منتج..."
      />
      
      <ul>
        {filteredProducts.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
      
      {filteredProducts.length === 0 && (
        <p>لا توجد منتجات مطابقة</p>
      )}
    </div>
  );
}
```
</details>

---

## 📚 المستوى الثالث: متقدم

### تمرين 9: Shopping Cart
**الهدف**: تعلم Complex State Management

```jsx
// المطلوب: اعمل shopping cart كامل
function ShoppingCart() {
  const products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 },
  ];
  
  const [cart, setCart] = useState([]);
  
  const addToCart = (product) => {
    // اكتب الكود هنا
  };
  
  const removeFromCart = (productId) => {
    // اكتب الكود هنا
  };
  
  const updateQuantity = (productId, quantity) => {
    // اكتب الكود هنا
  };
  
  const getTotal = () => {
    // اكتب الكود هنا
  };
  
  return (
    <div>
      {/* Products List */}
      <div>
        <h2>المنتجات</h2>
        {/* اعرض المنتجات هنا */}
      </div>
      
      {/* Cart */}
      <div>
        <h2>السلة</h2>
        {/* اعرض السلة هنا */}
        <p>المجموع: ${getTotal()}</p>
      </div>
    </div>
  );
}
```

**الحل:**
<details>
<summary>اضغط لعرض الحل</summary>

```jsx
import { useState } from 'react';

function ShoppingCart() {
  const products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 },
  ];
  
  const [cart, setCart] = useState([]);
  
  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };
  
  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };
  
  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    
    setCart(cart.map(item =>
      item.id === productId ? { ...item, quantity } : item
    ));
  };
  
  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  
  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      {/* Products List */}
      <div>
        <h2>المنتجات</h2>
        {products.map(product => (
          <div key={product.id} style={{ marginBottom: '10px' }}>
            <span>{product.name} - ${product.price}</span>
            <button onClick={() => addToCart(product)}>إضافة للسلة</button>
          </div>
        ))}
      </div>
      
      {/* Cart */}
      <div>
        <h2>السلة</h2>
        {cart.length === 0 ? (
          <p>السلة فارغة</p>
        ) : (
          <>
            {cart.map(item => (
              <div key={item.id} style={{ marginBottom: '10px' }}>
                <span>{item.name}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                <button onClick={() => removeFromCart(item.id)}>حذف</button>
                <span>${item.price * item.quantity}</span>
              </div>
            ))}
            <p><strong>المجموع: ${getTotal()}</strong></p>
          </>
        )}
      </div>
    </div>
  );
}
```
</details>

---

### تمرين 10: Custom Hook
**الهدف**: تعلم Custom Hooks

```jsx
// المطلوب: اعمل custom hook للـ localStorage
function useLocalStorage(key, initialValue) {
  // اكتب الكود هنا
}

// الاستخدام:
function App() {
  const [name, setName] = useLocalStorage('name', '');
  
  return (
    <div>
      <input 
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>الاسم المحفوظ: {name}</p>
    </div>
  );
}
```

**الحل:**
<details>
<summary>اضغط لعرض الحل</summary>

```jsx
import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
  // Initialize state with value from localStorage or initialValue
  const [value, setValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });
  
  // Update localStorage when value changes
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  }, [key, value]);
  
  return [value, setValue];
}

// الاستخدام:
function App() {
  const [name, setName] = useLocalStorage('name', '');
  
  return (
    <div>
      <input 
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="اكتب اسمك"
      />
      <p>الاسم المحفوظ: {name}</p>
      <p style={{ fontSize: '12px', color: 'gray' }}>
        جرب تحديث الصفحة - الاسم هيفضل موجود!
      </p>
    </div>
  );
}
```
</details>

---

### تمرين 11: Context API
**الهدف**: تعلم Context API

```jsx
// المطلوب: اعمل theme context (light/dark mode)

// 1. إنشاء Context
const ThemeContext = createContext();

// 2. Provider Component
function ThemeProvider({ children }) {
  // اكتب الكود هنا
}

// 3. Custom Hook
function useTheme() {
  // اكتب الكود هنا
}

// 4. الاستخدام
function App() {
  return (
    <ThemeProvider>
      <Header />
      <Content />
    </ThemeProvider>
  );
}

function Header() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <header style={{ background: theme === 'dark' ? '#333' : '#fff' }}>
      <button onClick={toggleTheme}>
        {theme === 'dark' ? '🌞' : '🌙'}
      </button>
    </header>
  );
}
```

**الحل:**
<details>
<summary>اضغط لعرض الحل</summary>

```jsx
import { createContext, useContext, useState } from 'react';

// 1. إنشاء Context
const ThemeContext = createContext();

// 2. Provider Component
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  
  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };
  
  const value = {
    theme,
    toggleTheme
  };
  
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

// 3. Custom Hook
function useTheme() {
  const context = useContext(ThemeContext);
  
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  
  return context;
}

// 4. الاستخدام
function App() {
  return (
    <ThemeProvider>
      <div style={{ minHeight: '100vh' }}>
        <Header />
        <Content />
      </div>
    </ThemeProvider>
  );
}

function Header() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <header style={{ 
      background: theme === 'dark' ? '#333' : '#fff',
      color: theme === 'dark' ? '#fff' : '#333',
      padding: '20px'
    }}>
      <h1>My App</h1>
      <button onClick={toggleTheme}>
        {theme === 'dark' ? '🌞 Light Mode' : '🌙 Dark Mode'}
      </button>
    </header>
  );
}

function Content() {
  const { theme } = useTheme();
  
  return (
    <main style={{ 
      background: theme === 'dark' ? '#222' : '#f5f5f5',
      color: theme === 'dark' ? '#fff' : '#333',
      padding: '20px',
      minHeight: 'calc(100vh - 80px)'
    }}>
      <p>This is the content area</p>
    </main>
  );
}
```
</details>

---

## 🎯 تحديات إضافية

### تحدي 1: Weather App
اعمل تطبيق طقس باستخدام API:
- استخدم API: https://openweathermap.org/api
- اعرض درجة الحرارة والوصف
- أضف search للمدن
- أضف loading state

### تحدي 2: Notes App
اعمل تطبيق ملاحظات:
- إضافة ملاحظة جديدة
- تعديل ملاحظة
- حذف ملاحظة
- حفظ في localStorage
- بحث في الملاحظات

### تحدي 3: Quiz App
اعمل تطبيق اختبارات:
- أسئلة متعددة الاختيارات
- عداد للوقت
- حساب النتيجة
- عرض الإجابات الصحيحة

### تحدي 4: E-commerce Mini
اعمل نسخة مصغرة من المشروع:
- قائمة منتجات
- إضافة للسلة
- صفحة السلة
- حساب المجموع
- localStorage

---

## 📝 نصائح للحل

1. **ابدأ صغير**: حل تمرين واحد في المرة
2. **اكتب الكود بنفسك**: مش بس copy/paste
3. **جرب تعدل**: غير الكود وشوف إيه اللي هيحصل
4. **اقرأ الأخطاء**: الـ error messages مفيدة جداً
5. **استخدم console.log**: عشان تفهم إيه اللي بيحصل
6. **راجع الحل**: بعد ما تحاول، شوف الحل وقارن

---

## 🚀 الخطوة التالية

بعد ما تخلص التمارين دي:
1. ✅ اعمل مشروع خاص بيك
2. ✅ اقرأ React Docs الرسمية
3. ✅ اتعلم TypeScript
4. ✅ اتعلم Next.js
5. ✅ شارك مشاريعك على GitHub

---

**Good Luck! 💪**

تذكر: الممارسة هي المفتاح! كل ما تكتب كود أكتر، كل ما هتتحسن أسرع.
