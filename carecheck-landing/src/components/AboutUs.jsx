// src/components/AboutUs.jsx
function AboutUs() {
  return (
    <section id="about-us">
      <h2>About us</h2>
      <p>
        Your trusted partner in medical bill error analysis. We help individuals, families, and providers navigate medical billing faults to ensure accuracy and fairness in healthcare. Every dollar matters, let’s find yours.
      </p>
      <div className="card-grid">
        <div className="card">
          <h3>Our mission</h3>
          <p>We combine advanced data analysis and medical coding expertise
            to identify errors, eliminate overcharges, and ensure that every person
            pays only what they truly owe. Our mission is to bring clarity,
            fairness, and trust back into the healthcare billing process.</p>
        </div>
        <div className="card">
          <h3>Our story</h3>
          <p>CareCheck Health began with a simple observation: medical bills are too
            complex, too error-prone, and too overwhelming for the average patient to
            navigate alone. By blending machine learning, medical coding expertise, and patient-first
            design, we created a platform that makes understanding your bill simple
            and protects you from unnecessary costs.</p>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
