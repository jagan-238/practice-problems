import { useState } from "react";

function MultiStepForm() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    theme: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Navigation
  const next = () => setStep(step + 1);
  const back = () => setStep(step - 1);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Step {step}</h2>

      {/* STEP 1 */}
      {step === 1 && (
        <div>
          <h3>Personal Info</h3>
          <input
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
          <br /><br />
          <input
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <br /><br />
          <button onClick={next}>Next</button>
        </div>
      )}

      {/* STEP 2 */}
      {step === 2 && (
        <div>
          <h3>Account Details</h3>
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <br /><br />
          <button onClick={back}>Back</button>
          <button onClick={next}>Next</button>
        </div>
      )}

      {/* STEP 3 */}
      {step === 3 && (
        <div>
          <h3>Preferences</h3>
          <select
            name="theme"
            value={formData.theme}
            onChange={handleChange}
          >
            <option value="">Select Theme</option>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
          <br /><br />
          <button onClick={back}>Back</button>
          <button onClick={next}>Submit</button>
        </div>
      )}

      {/* STEP 4 (Summary) */}
      {step === 4 && (
        <div>
          <h3>Summary</h3>
          <p>Name: {formData.name}</p>
          <p>Email: {formData.email}</p>
          <p>Password: {formData.password}</p>
          <p>Theme: {formData.theme}</p>

          <button onClick={back}>Back</button>
        </div>
      )}
    </div>
  );
}

export default MultiStepForm;



