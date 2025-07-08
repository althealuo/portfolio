import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Nav from "../components/Nav";
import TextBlock from "../components/TextBlock";
import "../styles/contact.scss";

function ContactPage() {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "your_service_id",    // ✏️ Replace this
        "your_template_id",   // ✏️ Replace this
        form.current,
        "your_public_key"     // ✏️ Replace this
      )
      .then(
        () => setSent(true),
        (error) => console.error("Email error:", error)
      );
  };

  return (
    <>
      <Nav />
      <div className="contact-page">
        <div className="contact-left">
          <TextBlock label="chit-chat" title="Feel free to reach out">
            <p>
              I'm always open to discussing new projects, collaborations, or ideas.
              You can reach me through the form here, or my email: 
              <br /><br />
              althealyk@gmail.com
            </p>
          </TextBlock>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact-right">
          <textarea name="message" placeholder="hello ..." rows={8} required />
            <div className="form-row">
                <input type="email" name="email" placeholder="your@email.com" required />
                <button type="submit" className="MainColorHighlight outline">Send</button>
            </div>

          {sent && <p className="success-msg">Thanks! I’ll get back to you soon.</p>}
        </form>
      </div>
    </>
  );
}

export default ContactPage;
