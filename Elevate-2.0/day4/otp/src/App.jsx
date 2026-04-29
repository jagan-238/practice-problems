import { useRef } from "react";

export default function OTPInput() {
  const inputsRef = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;

    // Allow only single digit
    if (!/^[0-9]?$/.test(value)) return;

    // Move to next input
    if (value && index < 5) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    // Move to previous on backspace
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  const handleClear = () => {
    inputsRef.current.forEach((input) => {
      input.value = "";
    });
    inputsRef.current[0].focus();
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h3>Enter OTP</h3>

      {Array.from({ length: 6 }).map((_, index) => (
        <input
          key={index}
          type="text"
          maxLength="1"
          ref={(el) => (inputsRef.current[index] = el)}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          style={{
            width: "40px",
            height: "40px",
            margin: "5px",
            textAlign: "center",
            fontSize: "18px"
          }}
        />
      ))}

      <br /><br />

      <button onClick={handleClear}>Clear</button>
    </div>
  );
}