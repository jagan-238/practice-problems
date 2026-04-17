import { useState } from "react";

function PasswordValidator() {
  const [password, setPassword] = useState("");

  // validations
  const validations = {
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    number: /[0-9]/.test(password),
    special: /[!@#$%^&*]/.test(password),
  };

  const validCount = Object.values(validations).filter(Boolean).length;

  // dynamic border color
  const borderColor =
    validCount === 4
      ? "green"
      : validCount >= 2
      ? "orange"
      : "red";

  return (
    <div style={{ padding: "20px" }}>
      <h2>Password Strength Validator</h2>

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{
          padding: "10px",
          border: `2px solid ${borderColor}`,
          outline: "none",
          width: "250px",
        }}
        placeholder="Enter password"
      />

      <ul>
        <li>{validations.length ? "✔" : "✖"} Min 8 characters</li>
        <li>{validations.uppercase ? "✔" : "✖"} One uppercase</li>
        <li>{validations.number ? "✔" : "✖"} One number</li>
        <li>{validations.special ? "✔" : "✖"} One special char</li>
      </ul>
    </div>
  );
}

export default PasswordValidator;