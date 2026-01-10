"use client";
import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    // Hide preloader after mount
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.style.transition = 'opacity 0.5s ease';
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }
  }, []);

  return (
    <>
      {/* Preloader Start */}
      <div className="preloader">
          <div className="loading-container">
              <div className="loading"></div>
              <div id="loading-icon"><img src="/images/logo-tki.svg" alt="" /></div>
          </div>
      </div>
      {/* Preloader End */}

      {/* Topbar Section Start */}
      <div className="topbar">
          <div className="container">
              <div className="row align-items-center">
                  <div className="col-lg-3">
                      <div className="site-logo">
                          <a href="/">
                              <img src="/images/tki_logo.png" alt="Logo" />
                          </a>
                      </div>
                      {/* Logo End */}
                  </div>

                  <div className="col-lg-9 col-md-12">
                      {/* Topbar Contact Information Start */}
                      <div className="topbar-contact-info">
                          <ul>
                              <li>
                                  <a href="#">
                                      <div className="icon-box">
                                          <img src="/images/icon-phone.svg" alt="" />
                                      </div>
                                      <p>+(230) 59424281</p>
                                  </a>
                              </li>
                              <li>
                                  <a href="#">
                                      <div className="icon-box">
                                          <img src="/images/icon-mail.svg" alt="" />
                                      </div>
                                       <p>info@tkisafety.com</p>
                                  </a>
                              </li>
                          </ul>
                          <div className="topbar-qoute-btn">
                              <a href="/contact" className="btn-default btn-red"><span>Get a quote</span></a>
                          </div>
                          {/* Topbar Qoute Button End */}
                      </div>
                      {/* Topbar Contact Information End */}
                  </div>
              </div>
          </div>
      </div>
      {/* Topbar Section End */}

      {/* Header Start */}
      <header className="main-header">
          <div className="header-sticky">
              <nav className="navbar navbar-expand-lg">
                  <div className="container">
                      {/* Logo Start */}
                      <a className="navbar-brand" href="/">
                          <img src="/images/tki_logo.png" alt="Logo" />
                      </a>
                      {/* Logo End */}

                      {/* Main Menu Start */}
                      <div className="collapse navbar-collapse main-menu">
                          <div className="nav-menu-wrapper">
                              <ul className="navbar-nav mr-auto" id="menu">
                                  <li className="nav-item submenu"><a className="nav-link" href="/">Home</a>
                                      <ul>
                                          <li className="nav-item"><a className="nav-link" href="index-slider.html">Home - Slider</a></li>
                                      </ul>
                                  </li>                                
                                  <li className="nav-item"><a className="nav-link" href="/about">About Us</a></li>
                                  <li className="nav-item"><a className="nav-link" href="/services">Services</a></li>
                                  <li className="nav-item"><a className="nav-link" href="/blog">Blog</a></li>
                                  <li className="nav-item"><a className="nav-link" href="/projects">Projects</a></li>
                                  <li className="nav-item submenu"><a className="nav-link" href="#">Pages</a>
                                      <ul>                                        
                                          <li className="nav-item"><a className="nav-link" href="service-single.html">Service Details</a></li>
                                          <li className="nav-item"><a className="nav-link" href="blog-single.html">Blog Details</a></li>
                                          <li className="nav-item"><a className="nav-link" href="project-single.html">Project Details</a></li>
                                          <li className="nav-item"><a className="nav-link" href="team.html">Team</a></li>
                                          <li className="nav-item"><a className="nav-link" href="team-single.html">Team Details</a></li>
                                          <li className="nav-item"><a className="nav-link" href="pricing.html">Pricing Plan</a></li>
                                          <li className="nav-item"><a className="nav-link" href="testimonial.html">Testimonials</a></li>
                                          <li className="nav-item"><a className="nav-link" href="image-gallery.html">Image Gallery</a></li>
                                          <li className="nav-item"><a className="nav-link" href="video-gallery.html">Video Gallery</a></li>
                                          <li className="nav-item"><a className="nav-link" href="faqs.html">FAQs</a></li>
                                          <li className="nav-item"><a className="nav-link" href="404.html">404</a></li>
                                      </ul>
                                  </li>
                                  <li className="nav-item"><a className="nav-link" href="/contact">Contact Us</a></li>                             
                              </ul>
                          </div>

                          {/* Header Social Box Start */}
                          <div className="header-social-box d-inline-flex">
                              {/* Header Social Links Start */}
                              <div className="header-social-links">
                                  <ul>
                                      <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
                                      <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                                      <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                                  </ul>
                              </div>
                              {/* Header Social Links End */}
                          </div>     
                          {/* Header Social Box End */}                   
                      </div>
                      {/* Main Menu End */}
                      <div className="navbar-toggle"></div>
                  </div>
              </nav>
              <div className="responsive-menu"></div>
          </div>
      </header>
      {/* Header End */}

      {/* Page Header Start */}
      <div className="page-header parallaxie">
          <div className="container">
              <div className="row align-items-center">
                  <div className="col-lg-12">
                      {/* Page Header Box Start */}
                      <div className="page-header-box">
                          <h1 className="text-anime-style-2" data-cursor="-opaque">Contact <span>us</span></h1>
                          <nav className="wow fadeInUp">
                              <ol className="breadcrumb">
                                  <li className="breadcrumb-item"><a href="/">home</a></li>
                                  <li className="breadcrumb-item active" aria-current="page">contact us</li>
                              </ol>
                          </nav>
                      </div>
                      {/* Page Header Box End */}
                  </div>
              </div>
          </div>
      </div>
      {/* Page Header End */}

      {/* Page Contact Us Start */}
      <div className="page-contact-us">
          <div className="container">
              <div className="row align-items-center">
                  <div className="col-lg-5">
                      {/* Contact Information Start */}
                      <div className="contact-information">
                          {/* Section Title Start */}
                          <div className="section-title">
                              <h3 className="wow fadeInUp">contact us</h3>
                              <h2 className="text-anime-style-3" data-cursor="-opaque">Get in touch <span>with us</span></h2>
                              <p className="wow fadeInUp" data-wow-delay="0.2s">Reach out for any inquiries, support, or to discuss how we can meet your industrial needs.</p>
                          </div>
                          {/* Section Title End */}
  
                          {/* Contact Info Box Start */}
                          <div className="contact-info-box">
                              {/* Page Contact Item Start */}
                              <div className="contact-info-item wow fadeInUp">
                                  <div className="icon-box">
                                      <img src="/images/icon-phone.svg" alt="" />
                                  </div>
                                  <div className="contact-info-content">
                                      <h3>contact</h3>
                                      <p>+1.809.120.670</p>
                                  </div>
                              </div>
                              {/* Page Contact Item End */}
  
                              {/* Page Contact Item Start */}
                              <div className="contact-info-item wow fadeInUp" data-wow-delay="0.25s">
                                  <div className="icon-box">
                                      <img src="/images/icon-mail.svg" alt="" />
                                  </div>
                                  <div className="contact-info-content">
                                      <h3>Email</h3>
                                      <p>info@domain.com</p>
                                  </div>
                              </div>
                              {/* Page Contact Item End */}
  
                              {/* Page Contact Item Start */}
                              <div className="contact-info-item wow fadeInUp" data-wow-delay="0.5s">
                                  <div className="icon-box">
                                      <img src="/images/icon-location.svg" alt="" />
                                  </div>
                                  <div className="contact-info-content">
                                      <h3>Our Address</h3>
                                      <p>37 San Juan Lane Graaf Florisstraat 22A,3021 CH</p>
                                  </div>
                              </div>
                              {/* Page Contact Item End */}
                          </div>
                      </div>
                      {/* Contact Information End */}
                  </div>
  
                  <div className="col-lg-7">
                      {/* Page Contact Form Start */}
                      <div className="contact-us-form">
                          <div className="section-title">
                              <h2 className="text-anime-style-2" data-cursor="-opaque">Contact <span>me</span></h2>
                          </div>
  
                          <div className="contact-form">
                              {/* Contact Form Start */}
                              <form id="contactForm" action="#" method="POST" data-toggle="validator" className="wow fadeInUp" data-wow-delay="0.5s">
                                  <div className="row">
                                      <div className="form-group col-md-6 mb-4">
                                          <input type="text" name="fname" className="form-control" id="fname" placeholder="Enter first name" required />
                                          <div className="help-block with-errors"></div>
                                      </div>
  
                                      <div className="form-group col-md-6 mb-4">
                                          <input type="text" name="lname" className="form-control" id="lname" placeholder="Enter last name" required />
                                          <div className="help-block with-errors"></div>
                                      </div>
  
                                      <div className="form-group col-md-12 mb-4">
                                          <input type="email" name ="email" className="form-control" id="email" placeholder="Enter your e-mail" required />
                                          <div className="help-block with-errors"></div>
                                      </div>
  
                                      <div className="form-group col-md-12 mb-4">
                                          <input type="text" name="phone" className="form-control" id="phone" placeholder="Enter your phone no." required />
                                          <div className="help-block with-errors"></div>
                                      </div>
  
                                      <div className="form-group col-md-12 mb-5">
                                          <textarea name="message" className="form-control" id="message" rows="4" placeholder="Write Message"></textarea>
                                          <div className="help-block with-errors"></div>
                                      </div>
  
                                      <div className="col-md-12">
                                          <button type="submit" className="btn-default btn-red"><span>submit message</span></button>
                                          <div id="msgSubmit" className="h3 hidden"></div>
                                      </div>
                                  </div>
                              </form>
                              {/* Contact Form End */}
                          </div>
                      </div>
                      {/* Page Contact Form End */}
                  </div> 
              </div>
          </div>
      </div>
      {/*  Page Contact Us End */}
  
      {/* Google Map Start */}
      <div className="google-map">
          <div className="container-fluid">
              <div className="row">
                  <div className="col-lg-12">
                      {/* Google Map Start */}
                      <div className="google-map-iframe">
                          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96737.10562045308!2d-74.08535042841811!3d40.739265258395164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1703158537552!5m2!1sen!2sin" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                      </div>
                      {/* Google Map End */}
                  </div>
              </div>
          </div>
      </div>
      {/* Google Map End */}

      {/* Footer Start */}
      <footer className="main-footer">
          <div className="container">
              <div className="row">
                  <div className="col-lg-12">
                      {/* Footer Header Start */}
                      <div className="footer-header">
                          {/* Section Title Start */}
                          <div className="section-title dark-section">
                              <h2 className="text-anime-style-2" data-cursor="-opaque">Ready to work with us?</h2>
                              <p>Join us to experience cutting-edge industrial solutions that drive innovation, lasting success.</p>
                          </div>
                          {/* Section Title End */}
  
                          {/* Footer Contact Circle Start */}
                          <div className="footer-contact-circle">
                              <img src="/images/contact-now-circle.svg" alt="" />
                          </div>
                          {/* Footer Contact Circle End */}
                      </div>
                      {/* Footer Header End */}                  
                  </div>
                  
                  <div className="col-lg-6 col-md-12">
                      {/* About Footer Start */}
                      <div className="about-footer">
                          {/* Footer Logo Start */}
                          <div className="footer-logo">
                              <img src="/images/footer-logo.svg" alt="" />
                          </div>
                          {/* Footer Logo End */}
  
                          {/* About Footer Content Start */}
                          <div className="about-footer-content">
                              <p>We are committed to providing personalized industrial solutions.</p>
                          </div>           
                          {/* About Footer Content End */}
                           
                          {/* Footer Social Link Start */}
                          <div className="footer-social-links">
                              <ul>
                                  <li><a href="#"><i className="fa-brands fa-pinterest-p"></i></a></li>
                                  <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
                                  <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                                  <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                              </ul>
                          </div>
                          {/* Footer Social Link End */}
                      </div>
                      {/* About Footer End */}
                  </div>
                  
                  <div className="col-lg-2 col-md-4 col-6">
                      {/* Footer Links Start */}
                      <div className="footer-links">
                          <h3>quick links</h3>
                          <ul>
                              <li><a href="/">home</a></li>
                              <li><a href="/about">about us</a></li>
                              <li><a href="/services">services</a></li>
                              <li><a href="/blog">blog</a></li>
                          </ul>
                      </div>
                      {/* Footer Links End */}
                  </div>
  
                  <div className="col-lg-2 col-md-4 col-6">
                      {/* Footer Links Start */}
                      <div className="footer-links">
                          <h3>Security</h3>
                          <ul>
                              <li><a href="#">term & condition</a></li>
                              <li><a href="#">privacy policy</a></li>
                              <li><a href="#">help</a></li>
                              <li><a href="/contact">contact us</a></li>
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
      {/* Footer End */}
    </>
  );
}
