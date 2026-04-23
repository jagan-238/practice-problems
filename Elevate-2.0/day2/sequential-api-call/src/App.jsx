// // import { useEffect, useState } from "react";

// // function UserPostData() {
// //   const [data, setData] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     async function fetchData() {
// //       try {
        
// //         const userRes = await fetch("https://jsonplaceholder.typicode.com/users/1");
// //         const user = await userRes.json();

// //         const postRes = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
// //         const posts = await postRes.json();

// //         const firstPost = posts[0];

        
// //         const commentRes = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${firstPost.id}`);
// //         const comments = await commentRes.json();

        
// //         setData({
// //           userName: user.name,
// //           firstPostTitle: firstPost.title,
// //           commentCount: comments.length,
// //           topComment: comments[0]?.body
// //         });

// //       } catch (err) {
// //         setError("Something went wrong");
// //       } finally {
// //         setLoading(false);
// //       }
// //     }

// //     fetchData();
// //   }, []);

// //   // UI
// //   if (loading) return <p>Loading...</p>;
// //   if (error) return <p>{error}</p>;

// //   return (
// //     <div>
// //       <h2>User: {data.userName}</h2>
// //       <p><strong>First Post:</strong> {data.firstPostTitle}</p>
// //       <p><strong>Comment Count:</strong> {data.commentCount}</p>
// //       <p><strong>Top Comment:</strong> {data.topComment}</p>
// //     </div>
// //   );
// // }

// // export default UserPostData;



// import { useState, useEffect, useRef } from "react";
// import axios from "axios";

// function AutoSaveNotes() {
//   const [text, setText] = useState("");
//   const [status, setStatus] = useState("");

//   const timerRef = useRef(null);
//   const controllerRef = useRef(null);

//   useEffect(() => {
//     if (!text) return;

//     setStatus("Saving...");

//     // Clear previous timer
//     if (timerRef.current) {
//       clearTimeout(timerRef.current);
//     }

//     // Cancel previous API request
//     if (controllerRef.current) {
//       controllerRef.current.abort();
//     }

//     const controller = new AbortController();
//     controllerRef.current = controller;

//     // Debounce (wait 2 sec after typing stops)
//     timerRef.current = setTimeout(() => {
//       axios
//         .post(
//           "https://jsonplaceholder.typicode.com/posts",
//           { note: text },
//           { signal: controller.signal }
//         )
//         .then(() => {
//           setStatus("Saved ✓");
//         })
//         .catch((err) => {
//           if (err.name === "CanceledError") return;
//           setStatus("Error saving");
//         });
//     }, 2000);

//     // Cleanup
//     return () => {
//       clearTimeout(timerRef.current);
//       controller.abort();
//     };
//   }, [text]);

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Auto Save Notes</h2>

//       <textarea
//         rows="6"
//         cols="40"
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         placeholder="Type something..."
//       />

//       <p>{status}</p>
//     </div>
//   );
// }

// export default AutoSaveNotes;


// import { useState, useEffect, useRef } from "react";
// import axios from "axios";
// function AutoSave() {
//   const [text, setText] = useState("");
//   const [status, setStatus] = useState("");

//   const timeRef = useRef(null);

//   useEffect(() => {
//     if (!text) return;
//     setStatus("saving...");

//     if (timeRef.current) {
//       clearTimeout(timeRef.current);
//     }
//     timeRef.current = setTimeout(() => {
//       saveData(text);
//     }, 2000);

//     return () => {
//       clearTimeout(timeRef.current);
//     };
//   }, [text]);

//   const saveData = async (value) => {
//     try {
//       await axios.post("https://jsonplaceholder.typicode.com/posts", {
//         note: value,
//       });
//       setStatus("saved");
//     } catch (error) {
//       setStatus("Error saving");
//     }
//   };
//   return (
//     <div>
//       <h2>Auto Save Notes</h2>
//       <textarea
//         rows="5"
//         cols="40"
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         placeholder="type your notes..."
//       />

//       <p>{status}</p>
//     </div>
//   );
// }
// export default AutoSave;
