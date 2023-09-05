import React, { useState } from "react";
import emailjs from "@emailjs/browser";

interface SkillsProps {
  darkMode: boolean;
}
const ContactForm: React.FC<SkillsProps> = ({ darkMode }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    // Replace with your actual service ID, template ID, and public key
    const serviceID = "service_7t8gryi";
    const templateID = "template_oce65hl";
    const publicKey = "KmBW9hQ4n9G2KK9js";

    const templateParams = {
      from_name: name,
      user_email: email,
      message: message,
    };

    try {
      const response = await emailjs.send(
        serviceID,
        templateID,
        templateParams,
        publicKey
      );

      // Handle success or do something with the response
      console.log("Email sent successfully!", response);
      alert("Email Sent.");
      // Clear the form inputs after successful submission
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      // Handle error
      console.error("Error sending email:", error);
      alert(
        "Oops.. Something went wrong on our end. Try manually sending an email."
      );
    }
    setIsLoading(false);
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
        {isLoading ? (
          <button className="loading">Sending..</button>
        ) : (
          <button className="submit-button" type="submit">
            Send
          </button>
        )}
      </div>
    </form>
  );
};

export default ContactForm;
