import { useState, useRef } from "react";

import emailjs from "@emailjs/browser";

function Contact({ isActive }) {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Sai Sumanth",
          from_email: form.email,
          to_email: "saisumanthss.97@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className={`section ${isActive ? "active" : ""}`} data-aos="zoom-in">
      <div className="contact-section container">
        <div className="contact-div-1">
          <h2>Let's connect for any queries!</h2>
        </div>
        <div className="contact-div-2 ">
          <div className="card">
          <h3 className="headings-h3">Message Me</h3>
          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="cform-1">
              <ul className="cform-list-1">
                <li>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={handleChange}
                  />
                </li>
                <li>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={form.email}
                    onChange={handleChange}
                  />
                </li>
              </ul>
            </div>
            <div className="cform-2">
              <ul className="cform-list-2">
                <li>
                  <input
                    type="text"
                    name="message"
                    placeholder="Your Message"
                    value={form.message}
                    onChange={handleChange}
                  />
                </li>
              </ul>
            </div>
            <div className="submit-div">
              <button type="submit" className="submit-button">
                Submit
              </button>
            </div>
          </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
