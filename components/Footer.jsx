import Link from "next/link";

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-12">
            {/* About Footer Start */}
            <div className="about-footer">
              {/* Footer Logo Start */}
              <div className="footer-logo">
                <img src="/images/tki-logo.png" alt="Toplax" />
              </div>
              {/* Footer Logo End */}

              {/* About Footer Content Start */}
              <div className="about-footer-content">
                <p>We specialize in revolutionizing industries by delivering innovative, efficient solutions that enhance productivity and streamline processes.</p>
              </div>
              {/* About Footer Content End */}
            </div>
            {/* About Footer End */}
          </div>

          <div className="col-lg-3 col-md-4 col-12">
            {/* Footer Links Start */}
            <div className="footer-links">
              <h3>Quick Links</h3>
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/services">Services</Link></li>
                <li><Link href="/projects">Projects</Link></li>
                <li><Link href="/contact">Contact Us</Link></li>
              </ul>
            </div>
            {/* Footer Links End */}
          </div>

          <div className="col-lg-3 col-md-4 col-12">
            {/* Footer Links Start */}
            <div className="footer-links">
              <h3>Security</h3>
              <ul>
                <li><a href="#">term & condition</a></li>
                <li><a href="#">privacy policy</a></li>
                <li><a href="#">help</a></li>
                <li><Link href="/contact">contact us</Link></li>
              </ul>
            </div>
            {/* Footer Links End */}
          </div>

          <div className="col-lg-2 col-md-4 col-12">
            {/* Footer Links Start */}
            <div className="footer-links">
              <h3>Contact</h3>
              <ul>
                <li>+91 123654789</li>
                <li>info@domainname.com</li>
                <li>520, West Valley, Amin and minim</li>
              </ul>
            </div>
            {/* Footer Links End */}
          </div>
        </div>

        {/* Footer Copyright Section Start */}
        <div className="footer-copyright">
          <div className="row align-items-center">
            <div className="col-lg-12">
              {/* Footer Copyright Start */}
              <div className="footer-copyright-text">
                <p>Copyright © 2024 All Rights Reserved.</p>
              </div>
              {/* Footer Copyright End */}
            </div>
          </div>
        </div>
        {/* Footer Copyright Section End */}
      </div>
    </footer>
  );
}
