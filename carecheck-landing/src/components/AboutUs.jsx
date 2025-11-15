// src/components/AboutUs.jsx
function AboutUs() {
  return (
    <section id="about-us">
      <h2>About us</h2>
      <p>
        A couple of sentences about your team, why you’re building this, and
        what makes you the right people to solve this problem.
      </p>
      <div className="card-grid">
        <div className="card">
          <h3>Our mission</h3>
          <p>Statement about the impact you want to have.</p>
        </div>
        <div className="card">
          <h3>Our story</h3>
          <p>
            How you started, the insight you discovered, or what motivated you.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
