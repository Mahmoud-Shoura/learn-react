import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
// import { MdOutlineMessage } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "emailjs-com";
import { useRef as UseRef } from "react";

const contact = () => {
  const inputRef = UseRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_ytsea2e", "template_ekl01s7", inputRef.current, {
      publicKey: "Va5QDOyN55T5dIagq",
    });
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact-container">
        <div className="contact-options">
          <article className="contact-option">
            <MdOutlineEmail className="contact-option-icon" />
            <h4>Email</h4>
            <h5>mahmoudhameidshoura@gmail.com</h5>
            <a href="mailto:mahmoudhameidshoura@gmail.com" target="__blank">
              Send a message
            </a>
          </article>
          {/* <article className="contact-option">
            <MdOutlineMessage className="contact-option-icon" />
            <h4>Messenger</h4>
            <h5>محممود حامد</h5>
            <a
              href="https://m.me/www.facebook.com/profile.php?id=100030941004176"
              target="__blank"
            >
              Send a message
            </a>
          </article> */}
          <article className="contact-option">
            <BsWhatsapp className="contact-option-icon" />
            <h4>WhatsApp</h4>
            <h5>+201121779947</h5>
            <a
              href="https://api.whatsapp.com/send/?phone=%2B201121779947&text&type=phone_number&app_absent=0"
              target="__blank"
            >
              Send a message
            </a>
          </article>
        </div>

        {/* END OF CONTACT OPTIONS */}

        <form ref={inputRef} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="Message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default contact;
