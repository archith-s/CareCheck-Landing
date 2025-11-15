// src/components/Contact.jsx
function Contact() {
  const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSddhsSIufm9edLbLbFqXSOKQVbJdx9b4CPUR5y_tTKrYKPlaA/viewform?usp=preview";

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
    </section>
  );
}

export default Contact;
