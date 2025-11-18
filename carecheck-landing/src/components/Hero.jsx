// src/components/Hero.jsx
import heroBg from "../assets/bg2.jpeg"; 


function Hero() {
  const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLScJZSS69K7fOzUPuqKSw2EkAgxq9bGi4kbKLAzxTUi6wD54xQ/viewform?usp=publish-editor";

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

          <h1>
            <span className="highlight">CareCheck Health</span>
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
        
      </div>
    </section>
  );
}

export default Hero;
