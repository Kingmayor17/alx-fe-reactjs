import { useState } from "react";

function RegistrationForm() {
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      setError("All fields are required!");
      return;
    }
    setError("");
    console.log("Submitted Data:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input name="username" placeholder="Username" onChange={handleChange} value={formData.username} />
      <input name="email" type="email" placeholder="Email" onChange={handleChange} value={formData.email} />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} value={formData.password} />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button type="submit">Register</button>
    </form>
  );
}

export default RegistrationForm;
