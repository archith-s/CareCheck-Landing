// src/components/Footer.jsx
function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      © <span>{year}</span> CareCheck. All rights reserved.
    </footer>
  );
}

export default Footer;
