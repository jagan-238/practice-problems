// import {useState, useEffect} from "react"; 

// function Products () {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetch("https://fakestoreapi.com/products")
//     .then((res) => res.json())
//     .then((data) => setProducts(data));
//   }, []);

//   return (
//     <div>
//       <h2>products</h2>

//       {products.map((products) => (
//         <div key={products.id}>
//           <p>{products.title}</p>
//         </div>
//       ))}
//     </div>
//   )
// }

// export default Products;


// import {useState} from "react";

// function App() {
//   const [rating, setRating] = useState(0);
//   const [hover, setHover] = useState(0);
//   const totalStars = 5;

//   return(
//     <div>
//       <h2>Rating : {rating}</h2>

//       {Array.from({length: totalStars}, (_, index) => {
//         const starValue = index + 1;

//         return (
//           <span
//           key={index}
//           onClick={() => setRating(starValue)}
//           onMouseEnter={() => setHover(starValue)}
//           onMouseLeave={() => setHover(0)}
//           > {starValue <= (hover || rating) ? "★" : "☆"}</span>
//         )
//       })}
//     </div>
//   )
// }

// export default App;


// import { useEffect, useState } from "react";

// function App() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         // 1. Parallel API calls
//         const [usersRes, postsRes] = await Promise.all([
//           fetch("https://jsonplaceholder.typicode.com/users"),
//           fetch("https://jsonplaceholder.typicode.com/posts"),
//         ]);

//         const users = await usersRes.json();
//         const posts = await postsRes.json();

//         // 2. Build map (O(n))
//         const userMap = {};
//         users.forEach((user) => {
//           userMap[user.id] = user;
//         });

//         // 3. Join (O(n))
//         const joinedData = posts.map((post) => ({
//           ...post,
//           user: userMap[post.userId],
//         }));

//         setData(joinedData);
//       } catch (err) {
//         console.error("Error:", err);
//       }
//     }

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h2>Posts with User Info</h2>

//       {data.slice(0, 10).map((item) => (
//         <div key={item.id}>
//           <p><strong>{item.title}</strong></p>
//           <p>User: {item.user?.name}</p>
//           <hr />
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;


// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import { useState } from "react";

// function App() {
//   const [isAuth, setIsAuth] = useState(false);

//   return (
//     <BrowserRouter>
//       <button onClick={() => setIsAuth(!isAuth)}>
//         {isAuth ? "Logout" : "Login"}
//       </button>

//       <Routes>
//         <Route path="/" element={<Home />} />

//         <Route path="/login" element={<Login />} />

//         {/* Protected Route */}
//         <Route
//           path="/dashboard"
//           element={
//             <ProtectedRoute isAuth={isAuth}>
//               <Dashboard />
//             </ProtectedRoute>
//           }
//         />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// function ProtectedRoute({ isAuth, children }) {
//   if (!isAuth) {
//     return <Navigate to="/login" replace />;
//   }
//   return children;
// }

// function Home() {
//   return <h2>Home Page</h2>;
// }

// function Login() {
//   return <h2>Login Page</h2>;
// }

// function Dashboard() {
//   return <h2>Dashboard (Protected)</h2>;
// }

// export default App;


// import { useEffect, useState } from "react";

// export default function App() {
//   const [products, setProducts] = useState([]);
//   const [page, setPage] = useState(1);
//   const [cart, setCart] = useState([]);

//   const LIMIT = 6;

//   // ✅ Fetch Products
//   useEffect(() => {
//     fetch("https://fakestoreapi.com/products")
//       .then((res) => res.json())
//       .then((data) => setProducts(data));
//   }, []);

//   // ✅ Load Cart from localStorage
//   useEffect(() => {
//     const stored = JSON.parse(localStorage.getItem("cart")) || [];
//     setCart(stored);
//   }, []);

//   // ✅ Save Cart to localStorage
//   useEffect(() => {
//     localStorage.setItem("cart", JSON.stringify(cart));
//   }, [cart]);

//   // ✅ Pagination Logic
//   const start = (page - 1) * LIMIT;
//   const paginatedData = products.slice(start, start + LIMIT);
//   const totalPages = Math.ceil(products.length / LIMIT);

//   // ✅ Add to Cart
//   function handleAdd(product) {
//     setCart([...cart, product]);
//   }

//   return (
//     <div style={{ padding: "20px" }}>
//       {/* Header */}
//       <h2> Fake Store</h2>
//       <h3>Cart Count: {cart.length}</h3>

//       {/* Grid */}
//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(3, 1fr)",
//           gap: "20px",
//         }}
//       >
//         {paginatedData.map((item) => (
//           <div
//             key={item.id}
//             style={{ border: "1px solid gray", padding: "10px" }}
//           >
//             <img src={item.image} width="100" height="100" />
//             <h4>{item.title.slice(0, 20)}</h4>
//             <p>₹ {item.price}</p>
//             <button onClick={() => handleAdd(item)}>Add</button>
//           </div>
//         ))}
//       </div>

//       {/* Pagination */}
//       <div style={{ marginTop: "20px" }}>
//         <button disabled={page === 1} onClick={() => setPage(page - 1)}>
//           Prev
//         </button>

//         <span style={{ margin: "0 10px" }}>
//           Page {page} / {totalPages}
//         </span>

//         <button
//           disabled={page === totalPages}
//           onClick={() => setPage(page + 1)}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }


// import { useState, useEffect } from "react";

// function Products() {
//   const [products, setProducts] = useState([]);
//   const [search, setSearch] = useState("");
//   const [page, setPage] = useState(1);
//   const limit = 6;

//   useEffect(() => {
//     fetch("https://fakestoreapi.com/products")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data); 
//         setProducts(data);
//       });
//   }, []);


//   const filtered  = products.filter((products) => 
//   products.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()));

//   const start = (page-1) * limit;
//   const paginatedProducts = filtered.slice(start, start + limit);
//   const totalPages = Math.ceil(filtered.length/ limit)
  

//   return (
//     <div>
//       <h2>Products</h2>

//       <input type="text"
//       placeholder="Search By products"
//       value={search}
//       onChange={(e) => {
//         setSearch(e.target.value)
//         setPage(1)
//       }
//       } />

//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(3, 1fr)",
//           gap: "20px",
//         }}
//       >
//         {paginatedProducts.map((products) => (
//           <div key={products.id} 
//           style={{
//               border: "2px solid green",
//               padding: "10px",
//               textAlign: "center",
//             }}
//             >
//             <img src={products.image} width="100" height="100" />
//             <p>{products.title}</p>
//             <p>$ {products.price}</p>
//           </div>
//         ))}

//         <div style={{ marginTop : "20px"}}>

//           <button disabled={page === 1} onClick={() => setPage(page-1)}> Prev</button>
//           <span style={{margin: " 0 10 px"}}>{page}</span>
//           <button disabled={page === totalPages} onClick={() => setPage(page + 1)}> Next</button>
          
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Products;


// import {useState, useEffect} from "react";

// function Products () {
//   const [products, setProducts] = useState([]);
//   const [page, setPage] = useState(1);
//   const limit = 6;

//   useEffect(() => {
//     fetch("https://fakestoreapi.com/products")
//     .then((res) => res.json())
//     .then((data) =>  {
//       setProducts(data)
//       setPage(1)
//     })
//   }, [])


//   const start = (page-1) * limit
//   const paginatedProducts = products.slice(start, start + limit)
//   const totalPages = Math.ceil(products.length/ limit);

//   return (
//     <div>
//       <h2>Products</h2>
//       <div style={{
//         display: "grid",
//         gridTemplateColumns: "repeat(3, 1fr)",
//         gap : "20px"
//       }}>
//       {paginatedProducts.map((product) => (
//         <div key={product.id} 
//         style={{
//           border : " 2px solid green",
//           padding: "20px",
//           textAlign: "center"
//         }}>
//           <img src={product.image} width="100" height="100" />
//           <p>{product.title}</p>
//           <p> $ {product.price}</p>
          
//         </div>
//       ))}
//       </div>

//       <div style={{ marginTop : "20px"}}>
//         <button disabled={page === 1} onClick={() => setPage(page -1)}> Prev</button>
//         <span> Page {page}</span>
//         <button disabled={page === totalPages} onClick={() => setPage(page+1)}>Next</button>
//       </div>
//     </div>
//   )
// }
// export default Products;

// import { createContext, useContext, useState } from "react";

// const ThemeContext = createContext();

// function ThemeProvider({ children }) {
//   const [theme, setTheme] = useState("light");

//   const toggleTheme = () => {
//     setTheme(prev => (prev === "light" ? "dark" : "light"));
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// }

// function Home() {
//   const { theme, toggleTheme } = useContext(ThemeContext);

//   const styles = {
//     backgroundColor: theme === "light" ? "#ffffff" : "#222222",
//     color: theme === "light" ? "#000000" : "#ffffff",
//     height: "100vh",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//   };

//   return (
//     <div style={styles}>
//       <h1>{theme.toUpperCase()} MODE</h1>
//       <button onClick={toggleTheme}>Toggle Theme</button>
//     </div>
//   );
// }

// export default function App() {
//   return (
//     <ThemeProvider>
//       <Home />
//     </ThemeProvider>
//   );
// }



// import { useState, useEffect } from "react";

// // 🔹 Debounce Hook
// function useDebounce(value, delay = 300) {
//   const [debouncedValue, setDebouncedValue] = useState(value);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setDebouncedValue(value);
//     }, delay);

//     return () => clearTimeout(timer);
//   }, [value, delay]);

//   return debouncedValue;
// }

// // 🔹 Results Component
// function SearchResults({ query }) {
//   const [results, setResults] = useState([]);

//   useEffect(() => {
//     if (query.trim().length < 2) return;

//     const controller = new AbortController();

//     fetch(
//       `https://jsonplaceholder.typicode.com/posts?title_like=${query}`,
//       { signal: controller.signal }
//     )
//       .then((res) => res.json())
//       .then((data) => setResults(data))
//       .catch((err) => {
//         if (err.name !== "AbortError") console.error(err);
//       });

//     return () => controller.abort();
//   }, [query]);

//   return (
//     <ul>
//       {results.map((post) => (
//         <li key={post.id}>{post.title}</li>
//       ))}
//     </ul>
//   );
// }

// // 🔹 MAIN COMPONENT (IMPORTANT)
// export default function App() {
//   const [input, setInput] = useState("");
//   const debouncedQuery = useDebounce(input, 300);

//   return (
//     <div style={{ maxWidth: "500px", margin: "2rem auto" }}>
//       <input
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//         placeholder="Search..."
//       />

//       <SearchResults query={debouncedQuery} />
//     </div>
//   );
// }
