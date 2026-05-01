// import {useState} from "react";

// function Counter() {
//   const [count, setCount] = useState(0)

//   return(
//     <div>
//       <h2>{count}</h2>
//       <button onClick={() => setCount(count+ 1)}>Increment</button>
//       <button onClick={() => setCount(count - 1)}>Decrement</button>
//       <button onClick={() => setCount(0)}>Reset</button>
//     </div>
//   )
// }
// export default Counter;
// import {useState} from "react";

// function Toggle() {
//   const [show, setShow] = useState(false)

//   return(
//     <div>
//       <h2>Toggle</h2>

//       <button onClick={() => setShow(!false)}>Toggle</button>
//             {show && <p>This is a paragraph</p>}

//     </div>
//   )
// }
// export default Toggle;

// import {useState} from "react";

// function ConterlledInput() {
//   const [name, setName] = useState("")
//   return (
//     <div>
//       <input type="text"
//       value={name}
//       onChange={(e) => setName(e.target.value)} />
//       <p>type :{name}</p>
//     </div>
//   )
// }
// export default ConterlledInput;


// import {useRef} from "react";

// function UncontrolledInput() {
//   const inputRef = useRef(null);
//   const handleClick = ()  => {
//     alert(inputRef.current.value);
//   };

//   return (
//     <div>
//      <input ref={inputRef}/>
//      <button onClick={handleClick}>GetValue</button>
//     </div>
//   )
// }
// export default UncontrolledInput;


//node.js
// const express = require("express");
// const app = express();

// app.use(express.json()); // middleware to parse JSON body

// app.post("/users", (req, res) => {
//   const { name, email } = req.body;

//   // validation
//   if (!name || !email) {
//     return res.status(400).json({
//       message: "Name and email are required"
//     });
//   }

//   // success response
//   res.status(201).json({
//     message: "User created successfully",
//     user: { name, email }
//   });
// });

// app.listen(3000, () => {
//   console.log("Server running on port 3000");
// });

// const express = require(express);
// const app = express()

// function logger(req,res, next) {
//   console.log(`${req.methode} ${req.url}`);
//   next();
//   app.use(logger);

//   app.get("/", (req,res) => {
//     res.send("Home Page")
//   });
//   app.get("/", (res, res) => {
//     res.send("About Pag");
//   })


//   app.listen(3000, () => {
//     console.log("server running on port 3000")
//   })

// }