import { useState } from "react";
import "../../styles/contact.css";

const Contact = () => {

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState(""); 

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setStatus("success"); 
    setForm({ name: "", email: "", subject: "", message: "" });

    setTimeout(() => setStatus(""), 5000); 
  };

  return (

    <div className="contact-page">

      <div className="contact-card">
        <h2>Contact Us</h2>
        <p className="contact-subtitle">
          Have any problem? We’d love to hear from you!
        </p>

        {status === "success" && (
          <p className="contact-success">✅ Message sent successfully</p>
        )}

        <form onSubmit={handleSubmit}>

          <input type="text" name="name" placeholder="Your Name" value={form.name} 
          onChange={handleChange} required/>

          <input type="email" name="email" placeholder="Your Email" value={form.email}
            onChange={handleChange} required/>

          <input type="text" name="subject" placeholder="Subject" value={form.subject}
            onChange={handleChange} required/>

          <textarea name="message" placeholder="Your Message" value={form.message}
           onChange={handleChange} rows="5" required/>

          <button type="submit">Send Message</button>

        </form>

        <div className="contact-info">

          <h3>Other Ways To Reach Us</h3>
          <p>📍 Address: Electro Street, Hulimavu, Bangalore</p>
          <p>📞 Phone: +91 9582908655</p>
          <p>✉️ Email: support@electromart.com</p>

        </div>

      </div>
      
    </div>
  );
};

export default Contact;
