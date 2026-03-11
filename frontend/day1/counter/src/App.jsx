
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Counter: {count}</h2>

      <button onClick={() => setCount(count + 1)}>Increment</button>

      <button onClick={() => setCount(count - 1)}>Decrement</button>

      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;

// import { useReducer } from "react";

// function reducer(state, action) {
//   switch (action.type) {
//     case "increment":
//       return state + 1;

//     case "decrement":
//       return state - 1;

//     case "reset":
//       return 0;

//     default:
//       return state;
//   }
// }

// function Counter() {
//   const [count, dispatch] = useReducer(reducer, 0);

//   return (
//     <div>
//       <h2>Counter: {count}</h2>

//       <button onClick={() => dispatch({ type: "increment" })}>
//         Increment
//       </button>

//       <button onClick={() => dispatch({ type: "decrement" })}>
//         Decrement
//       </button>

//       <button onClick={() => dispatch({ type: "reset" })}>
//         Reset
//       </button>
//     </div>
//   );
// }

// export default Counter;