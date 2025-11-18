// src/components/Header.jsx
import logoIcon from "../assets/cchIcon.png"; 
import logoTxt from "../assets/cchLogoText.png"; 


function Header() {
  return (
    <header>
      <div className="nav-inner">
        <div className="logo">
          <img src={logoIcon} className="logo-icon small" alt="Icon" />
          <img src={logoTxt} className="logo-icon large" alt="Logo" />
        </div>
        <nav>
          <a href="#what-we-do">What we do</a>
          <a href="#about-us">About us</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
