import {useState} from "react";

function UndoRedo() {
  const[text, setText] = useState("");
  const[history, setHistory] = useState([]);
  const[historyIndex, setHistoryIndex] = useState(-1);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setText(newValue);
    setHistory((prev) => {
      const newHistory = [...prev];
      newHistory.splice(historyIndex + 1);
      newHistory.push(newValue);
      setHistoryIndex(newHistory.length - 1);
      return newHistory;
    });
  };

  const handleUndo = () => {
    if (historyIndex > 0) {
      setHistoryIndex(historyIndex - 1);
      setText(history[historyIndex - 1]);
    }
  };

  const handleRedo = () => {
    if (historyIndex < history.length - 1) {
      setHistoryIndex(historyIndex + 1);
      setText(history[historyIndex + 1]);
    }
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
      <button onClick={handleUndo} disabled={historyIndex <= 0}>
        Undo
      </button>
      <button onClick={handleRedo} disabled={historyIndex >= history.length - 1}>
        Redo
      </button>
    </div>
  );
}

export default UndoRedo;