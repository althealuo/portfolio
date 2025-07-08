import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Nav from "../components/Nav";
import TextBlock from "../components/TextBlock";
import "../styles/contact.scss";

function ContactPage() {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .send(
      "service_uszszii",         // ✅ your real service ID
      "template_vhfm1tb",        // ✅ your real template ID
        {
            message: form.current.message.value,
            email: form.current.email.value,
        },
      "rFmp9X77i0_etu46_"          // ✅ your public key
    )
    .then(
      () => {
        setSent(true);
        setError(false);
      },
      () => {
        setSent(false);
        setError(true);
      }
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

            {sent && (
                <p className="success-msg">Thanks! I’ll get back to you soon.</p>
                )}
                {error && (
                <p className="error-msg">
                    Oops, something went wrong — please try again or email me directly at <strong>althealyk@gmail.com</strong>.
                </p>
            )}

        </form>
      </div>
    </>
  );
}

export default ContactPage;
