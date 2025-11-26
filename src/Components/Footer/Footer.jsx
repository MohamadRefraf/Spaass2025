import './Footer.css'
function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        
        <div className="footer-section social">
          <h3>Follow Us</h3>
          {/* Add social media icons/links here */}
          <p>
            <a href="https://facebook.com" aria-label="Facebook">FB</a> | 
            <a href="https://twitter.com" aria-label="Twitter">TW</a> | 
            <a href="https://instagram.com" aria-label="Instagram">IG</a>
          </p>
        </div>
        
        <div className="footer-section contact">
          <h3>Get in Touch</h3>
          <p>Email: <a href="mailto:info@example.com">info@example.com</a></p>
          <p>Phone: (123) 456-7890</p>
        </div>
      
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
        <div className="legal-links">
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
        </div>
      </div>
      
   </footer>
  );}
  export default Footer;
