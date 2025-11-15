// src/components/Hero.jsx
import heroBg from "../assets/bg2.jpeg"; 
function Hero() {
  const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSddhsSIufm9edLbLbFqXSOKQVbJdx9b4CPUR5y_tTKrYKPlaA/viewform?usp=preview";

  return (
    <section 
        className="hero" 
        id="top" 
        style={{ 
            backgroundImage: `url(${heroBg})` ,
            backgroundSize: "cover",         
            backgroundPosition: "center",    
            backgroundRepeat: "no-repeat",   
        }}>
      <div className="hero-content">
        <div className="hero-copy">
          <div className="badge">
            • Early access <span>Join the first wave</span>
          </div>
          <h1>
            <span className="highlight">CareCheck</span>
            <br />
            Billing Clarity. Financial Confidence.
          </h1>
          <p>
            Take Control of Your Medical Bills with Data Driven and AI-Powered Error Detection.
          </p>
          <div className="cta-row">
            <a
              className="btn-primary"
              href={formUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Join the waitlist
            </a>
            <a href="#what-we-do" className="btn-secondary">
              Learn more ↓
            </a>
          </div>
        </div>
        <aside className="hero-aside">
          <h2>Why join now?</h2>
          <ul>
            <li>• Get early access and help shape the product.</li>
            <li>• Priority support and direct contact with the team.</li>
            <li>• Exclusive updates and launch discounts.</li>
          </ul>
        </aside>
        



      </div>
    </section>
  );
}

export default Hero;
