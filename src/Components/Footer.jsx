
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Section 1: Company Links */}
        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/career">Career</a></li>
            <li><a href="/blogs">Blogs</a></li>
          </ul>
        </div>

        {/* Section 2: Engagement Links */}
        <div className="footer-section">
          <h4>Work With Us</h4>
          <ul>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/partner">Partner with us</a></li>
            <li><a href="/ride">Ride with us</a></li>
          </ul>
        </div>

        {/* Section 3: Legal Links */}
        <div className="footer-section">
          <h4>Legal</h4>
          <ul>
            <li><a href="/terms">T&C</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/refund">Refund Policy</a></li>
          </ul>
        </div>

      </div>
      
      {/* Bottom Copyright Section */}
      <div className="footer-bottom">
        <p>&copy; 2026 FoodieZone. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;