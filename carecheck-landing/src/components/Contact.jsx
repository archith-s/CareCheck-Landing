// src/components/Contact.jsx
import { FaLinkedin, FaInstagram } from "react-icons/fa";

function Contact() {
  const formUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLScJZSS69K7fOzUPuqKSw2EkAgxq9bGi4kbKLAzxTUi6wD54xQ/viewform?usp=publish-editor";
  const linkedinUrl = "https://www.linkedin.com/company/carecheckhealth";
  const instagramUrl = "https://www.instagram.com/carecheckhealth/";

  return (
    <section id="contact">
      <h2>Stay in the loop</h2>
      <p>
        Ready to hear from us when we launch? Fill out the quick form and we’ll
        keep you updated.
      </p>

      <a
        className="btn-primary"
        href={formUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        Go to Google Form
      </a>

      <div className="contact-actions">
        <a
          className="social-link linkedin"
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="social-icon" />
          <span>LinkedIn</span>
        </a>

        <a
          className="social-link instagram"
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="social-icon" />
          <span>Instagram</span>
        </a>
      </div>
    </section>
  );
}

export default Contact;
