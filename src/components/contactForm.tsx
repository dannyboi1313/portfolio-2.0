import React, { useState } from "react";
interface SkillsProps {
  darkMode: boolean;
}
const ContactForm: React.FC<SkillsProps> = ({ darkMode }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Here you can perform actions like sending the form data to a server or performing any necessary logic.
    // For this example, we'll just log the form data.
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    // Clear the form fields after submission
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div className="flex-col form-input mt-2">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          placeholder="John Doe"
          className={darkMode ? "dark-mode-card-bg" : "light-mode-card-bg"}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="flex-col form-input">
        <label htmlFor="email">Email:</label>
        <input
          className={darkMode ? "dark-mode-card-bg" : "light-mode-card-bg"}
          type="email"
          id="email"
          placeholder="JohnDoe@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="flex-col form-input">
        <label htmlFor="message">Message:</label>
        <textarea
          className={darkMode ? "dark-mode-card-bg" : "light-mode-card-bg"}
          id="message"
          value={message}
          placeholder="Write your message here.."
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>
      <div className="submit w-100 flex-row flex-end mb-1">
        <button type="submit">Send</button>
      </div>
    </form>
  );
};

export default ContactForm;
