import "../styles/sections.scss";

function Contact() {
  return (
    <section className="section contact-section">
      <div className="contact-content">
        <h2 className="MainColorText">Contact Me</h2>
        <form className="contact-form">
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="contact-input"
          />
          <textarea
            name="message"
            placeholder="Your message"
            className="contact-textarea"
            rows={6}
          ></textarea>
          <button type="submit" className="contact-submit MainColorHighlight">
            Send
          </button>
        </form>
        <p className="contact-email MainColorSubtext">
          Or reach me at <a href="mailto:your@email.com">your@email.com</a>
        </p>
      </div>
    </section>
  );
}

export default Contact;
