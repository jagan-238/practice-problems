import {useState, useEffect} from "react";

function AutoSaveNotes() {
  const [text, setText] = useState("");
  const [status, setStatus] = useState("saved");

  useEffect(() => {
    if(text !== "") {
      setStatus("saving..");
    }

    const timer = setTimeout(() => {
      if(text !== "") {
        setStatus("saved");
      }
    },2000);

    return () => {
      clearTimeout(timer);
    };
  }, [text]);

  return (
    <div>
      <h2>Notes</h2>
     <textarea 
     value={text}
     onChange={(e) => setText(e.target.value)}
     />
      <p>{status}</p>
    </div>
  )
}
export default AutoSaveNotes;