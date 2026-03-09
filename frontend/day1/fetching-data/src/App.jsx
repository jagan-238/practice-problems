// import {useState, useEffect} from "react";


// function ProductsTable() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetch("https://fakestoreapi.com/products")
//       .then((res) => res.json())
//       .then((data) => setProducts(data))
    
//   },[]);


//   return (
//     <div>
//       <h2>Products Table</h2>
//       <table style={{ borderCollapse: "collapse", width: "100%" }} border="1">
//         <thead>
//           <tr>
//             <th>Title</th>
//             <th>Price ($)</th>
//             <th>Category</th>
//             <th>Rating</th>
//           </tr>
//         </thead>
//         <tbody>
//           {products.map((p) => (
//             <tr key={p.id}>
//               <td>{p.title}</td>
//               <td>{p.price}</td>
//               <td>{p.category}</td>
//               <td>{p.rating.rate}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   )
// }

// export default ProductsTable;


// import { useState, useEffect } from "react";

// function ProductsTable() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetch("https://fakestoreapi.com/products")
//       .then(res => res.json())
//       .then(data => setProducts(data))
//       .catch(err => console.log("Error fetching products:", err));
//   }, []);

//   return (
//     <div>
//       <h2>Products Table</h2>

//       <table border="1">
//         <thead>
//           <tr>
//             <th>Title</th>
//             <th>Price</th>
//             <th>Description</th>
//             <th>Image</th>
//           </tr>
//         </thead>

//         <tbody>
//           {products.map(p => (
//             <tr key={p.id}>
//               <td>{p.title}</td>
//               <td>${p.price}</td>
//               <td>{p.description}</td>
//               <td>
//                 <img src={p.image} width="50" alt={p.title} />
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default ProductsTable;


// import {useState, useEffect} from "react";

// function UserList() {
//   const[users, setUsers] = useState([]);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then((res) => res.json())
//     .then((data) => setUsers(data));
//   }, [])

//   return(
// <div>
//   <h2>Users List</h2>
//   {users.map((user) => (
//     <div key={user.id}>
//       <p> ID: {user.id}</p>
//       <p> NAME: {user.name}</p>
//       <p> EMAIL: {user.email}</p>
//       <p> CITY: {user.address.city}</p>
//     </div>
//   ))}
// </div>
//   )
// }

// export default UserList;



// import {useState, useEffect} from "react";

// function productsLists() {
//   const [products, setProducts] = useState([]);
//   const [search, setSearch] = useState("");
//   const [filtered, setFiltered] = useState([]);

//   useEffect(() => {
//     fetch("https://fakestoreapi.com/products")
//     .then((res) => res.json())
//     .then((data) => {
//       setProducts(data)
//       setFiltered(data)
//     })
//   }, []);


//   const handleSearch = () => {
//     const result = products.filter((p) => p.title.toLowerCase().includes(search.toLowerCase()));
//     setFiltered(result);
//   };


//   return(
//     <div>
//       <h2>Users List</h2>

//       <input
//        type="text"
//       placeholder="Search Products"
//       value={search}
//       onChange={(e) => setSearch(e.target.value)}
//        />

//        <button onClick={handleSearch}> search</button>
//        {filtered.map((p) => (
//         <div key={p.id}>
//           <h4>{p.title}</h4>
//           <p>Price : ${p.price}</p>
//           <p>Category: {p.category}</p>
//         </div>
//        ))}
//     </div>
//   )
// }

// export default productsLists;