"use client";
import { useEffect } from "react";

export default function About() {
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
                          {/* Topbar Qoute Button Start */}
                          <div className="topbar-qoute-btn">
                              <a href="/contact" className="btn-default"><span>Get a quote</span></a>
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
                          <h1 className="text-anime-style-2" data-cursor="-opaque">About <span>Us</span></h1>
                          <nav className="wow fadeInUp">
                              <ol className="breadcrumb">
                                  <li className="breadcrumb-item"><a href="/">home</a></li>
                                  <li className="breadcrumb-item active" aria-current="page">about us</li>
                              </ol>
                          </nav>
                      </div>
                      {/* Page Header Box End */}
                  </div>
              </div>
          </div>
      </div>
      {/* Page Header End */}

      {/* About Us Start */}
       <div className="about-us">
          <div className="container">
              <div className="row align-items-center">
                  <div className="col-lg-6">
                      {/* About Us Image Start */}
                      <div className="about-image">
                          {/* About Image Start */}
                          <div className="about-img-1">
                              <figure className="image-anime reveal">
                                  <img src="/images/about-img-1.jpg" alt="" />
                              </figure>
                          </div>
                          {/* About Image End */}

                          {/* About Image Start */}
                          <div className="about-img-2">
                              <figure className="image-anime reveal">
                                  <img src="/images/about-img-2.jpg" alt="" />
                              </figure>
                          </div>
                          {/* About Image End */}

                          {/* Company Experience Start */}
                          <div className="company-experience">
                              <div className="company-experience-counter">
                                  <h2><span className="counter">25</span>+</h2>
                              </div>
                              <div className="company-experience-content">
                                  <p>years of experience</p>
                              </div>
                          </div>
                          {/* Company Experience End */}
                      </div>
                      {/* About Us Image End */}
                  </div>

                  <div className="col-lg-6">
                      {/* About Content Start */}
                      <div className="about-content">
                          {/* Section Title Start */}
                          <div className="section-title">
                              <h3 className="wow fadeInUp">about us</h3>
                              <h2 className="text-anime-style-2" data-cursor="-opaque">Building quality through <span>industrial innovation</span></h2>
                              <p className="wow fadeInUp" data-wow-delay="0.25s">At the heart of our operations is a commitment to delivering superior products through cutting-edge technology and innovative processes.</p>
                          </div>
                          {/* Section Title End */}
                  
                          <div className="about-content-body">
                              <div className="row align-items-center">
                                  <div className="col-md-6">
                                      {/* About List Btn Box Start */}
                                      <div className="about-list-btn">
                                          {/* About Content List Start */}
                                          <div className="about-content-list wow fadeInUp" data-wow-delay="0.5s">
                                              <ul>
                                                  <li>sustainable manufacturing</li>
                                                  <li>advanced automation</li>
                                                  <li>efficient production processes</li>
                                                  <li>reliable delivery services</li>
                                              </ul>
                                          </div>
                                          {/* About Content List End */}
                  
                                          {/* About Content Btn Start */}
                                          <div className="about-content-btn wow fadeInUp" data-wow-delay="0.75s">
                                              <a href="/contact" className="btn-default"><span>contact us</span></a>
                                          </div>
                                          {/* About Content Btn End */}
                                      </div>
                                      {/* About List Btn Box End */}                                 
                                  </div>
                  
                                  <div className="col-md-6">
                                      {/* About Content Counter Start */}
                                      <div className="genuine-rating-counter">
                                          {/* About Counter Item Start */}
                                          <div className="about-counter-item">
                                              <div className="about-counter">
                                                  <h2><span className="counter">4.9</span></h2>
                                              </div>
                                              <div className="genuine-rating">
                                                  <ul>
                                                      <li>
                                                          <i className="fa-solid fa-star"></i>
                                                          <i className="fa-solid fa-star"></i>
                                                          <i className="fa-solid fa-star"></i>
                                                          <i className="fa-solid fa-star"></i>
                                                          <i className="fa-solid fa-star"></i>
                                                      </li>
                                                  </ul>
                                              </div>

                                              <div className="genuine-rating-counter-content">
                                                  <p>15.5K genuine rating</p>
                                              </div>
                                          </div>
                                          {/* About Counter Item End */}
                                      </div>
                                      {/* About Content Counter End */}
                                  </div>
                              </div>
                          </div>
                      </div>
                      {/* About Content End */}
                  </div>
              </div>
          </div>
       </div>
      {/* About Us End */}

      {/* Our Mission Vision Section Start */}
      <div className="our-mission-vision">
          <div className="mission-vision-bg parallaxie">
              <div className="container">
                  <div className="row section-row align-items-center">
                      <div className="col-lg-6">
                          {/* Section Title Start */}
                          <div className="section-title dark-section">
                              <h3 className="wow fadeInUp">our approach</h3>
                              <h2 className="text-anime-style-2" data-cursor="-opaque">Empowering sustainable <span>growth in industry</span></h2>
                          </div>
                          {/* Section Title End */}
                      </div>
      
                      <div className="col-lg-6">
                          {/* Section Title Content Start */}
                          <div className="section-title-content dark-section wow fadeInUp" data-wow-delay="0.25s">
                              <p>We drive sustainable solutions in factory and industrial settings, focusing on efficiency, innovation, and environmental responsibility to support long-term growth.</p>
                          </div>
                          {/* Section Title Content End */}
                      </div>
                  </div>
              </div>
          </div>

          <div className="container">
              <div className="row">
                  <div className="col-lg-12">
                      {/* Mission Vision Box Start */}
                      <div className="mission-vision-box tab-content wow fadeInUp" data-wow-delay="0.25s" id="missionvision">
                          {/* Sidebar Mission Vision Nav start */}
                          <div className="mission-vision-nav">
                              <ul className="nav nav-tabs" id="mvTab" role="tablist">
                                  <li className="nav-item" role="presentation">
                                      <button className="nav-link active" id="remodeling-tab" data-bs-toggle="tab" data-bs-target="#mission" type="button" role="tab" aria-selected="true"><img src="/images/icon-mission-nav.svg" alt="" /> our mission</button>
                                  </li>
                                  <li className="nav-item" role="presentation">
                                      <button className="nav-link" id="installation-tab" data-bs-toggle="tab" data-bs-target="#vision" type="button" role="tab" aria-selected="false"><img src="/images/icon-vision-nav.svg" alt="" /> our vision</button>
                                  </li>
                                  <li className="nav-item" role="presentation">
                                      <button className="nav-link" id="value-tab" data-bs-toggle="tab" data-bs-target="#value" type="button" role="tab" aria-selected="false"><img src="/images/icon-value-nav.svg" alt="" /> our value</button>
                                  </li>
                              </ul>
                          </div>
                          {/* Sidebar Mission Vision Nav End */}
                           
                          {/* Mission Vision Item Start */}
                          <div className="mission-vision-item tab-pane fade show active" id="mission" role="tabpanel">
                              <div className="row align-items-center">
                                  <div className="col-lg-6">
                                      {/* Mission Vision Content Start */}
                                      <div className="mission-vision-content">
                                          <div className="mission-vision-content-header">
                                              <p>Our mission is to transform the factory and industry sectors through sustainable practices, innovation, and advanced technology, fostering growth that benefits both business and the environment.</p>
                                          </div>
      
                                          <div className="mission-vision-content-list">
                                              <ul>
                                                  <li>Sustainable Manufacturing Practices</li>
                                                  <li>Advanced Technology Integration</li>
                                                  <li>Community Environmental Responsibility</li>
                                                  <li>Innovation-Driven Growth</li>
                                              </ul>
                                          </div>                                     
                                      </div>
                                      {/* Mission Vision Content End */}
                                  </div>
      
                                  <div className="col-lg-6">
                                      {/* Mission Vision Image Start */}
                                      <div className="mission-vision-image">
                                          <figure  className="image-anime">
                                              <img src="/images/mission-image.jpg" alt="" />
                                          </figure>
                                      </div>
                                      {/* Mission Vision Image End */}
                                  </div>
                              </div>
                          </div>
                          {/* Mission Vision Item End */}
      
                          {/* Mission Vision Item Start */}
                          <div className="mission-vision-item tab-pane fade" id="vision" role="tabpanel">
                              <div className="row align-items-center">
                                  <div className="col-lg-6">
                                      {/* Mission Vision Content Start */}
                                      <div className="mission-vision-content">
                                          <div className="mission-vision-content-header">
                                              <p>Our vision is to transform the factory and industry sectors through sustainable practices, innovation, and advanced technology, fostering growth that benefits both business and the environment.</p>
                                          </div>
      
                                          <div className="mission-vision-content-list">
                                              <ul>
                                                  <li>Sustainable Manufacturing Practices</li>
                                                  <li>Advanced Technology Integration</li>
                                                  <li>Community Environmental Responsibility</li>
                                                  <li>Innovation-Driven Growth</li>
                                              </ul>
                                          </div>                                    
                                      </div>
                                      {/* Mission Vision Content End */}
                                  </div>
      
                                  <div className="col-lg-6">
                                      {/* Mission Vision Image Start */}
                                      <div className="mission-vision-image">
                                          <figure  className="image-anime">
                                              <img src="/images/vision-image.jpg" alt="" />
                                          </figure>
                                      </div>
                                      {/* Mission Vision Image End */}
                                  </div>
                              </div>
                          </div>
                          {/* Mission Vision Item End */}
      
                          {/* Mission Vision Item Start */}
                          <div className="mission-vision-item tab-pane fade" id="value" role="tabpanel">
                              <div className="row align-items-center">
                                  <div className="col-lg-6">
                                      {/* Mission Vision Content Start */}
                                      <div className="mission-vision-content">
                                          <div className="mission-vision-content-header">
                                              <p>Our value is to transform the factory and industry sectors through sustainable practices, innovation, and advanced technology, fostering growth that benefits both business and the environment.</p>
                                          </div>
      
                                          <div className="mission-vision-content-list">
                                              <ul>
                                                  <li>Sustainable Manufacturing Practices</li>
                                                  <li>Advanced Technology Integration</li>
                                                  <li>Community Environmental Responsibility</li>
                                                  <li>Innovation-Driven Growth</li>
                                              </ul>
                                          </div>                                     
                                      </div>
                                      {/* Mission Vision Content End */}
                                  </div>
      
                                  <div className="col-lg-6">
                                      {/* Mission Vision Image Start */}
                                      <div className="mission-vision-image">
                                          <figure  className="image-anime">
                                              <img src="/images/value-image.jpg" alt="" />
                                          </figure>
                                      </div>
                                      {/* Mission Vision Image End */}
                                  </div>
                              </div>
                          </div>
                          {/* Mission Vision Item End */}
                      </div>
                      {/* Mission Vision Box End */}
                  </div>
              </div>
          </div>
      </div>
      {/* Our Mission Vision Section End */}

      {/* Our History Section Start */}
      <div className="our-history">
          <div className="container">
              <div className="row section-row align-items-center">
                  <div className="col-lg-6">
                      {/* Section Title Start */}
                      <div className="section-title">
                          <h3 className="wow fadeInUp">our history</h3>
                          <h2 className="text-anime-style-2" data-cursor="-opaque">Foundation of excellences <span>in industry</span></h2>
                      </div>
                      {/* Section Title End */}
                  </div>

                  <div className="col-lg-6">
                      {/* Section Title Content Start */}
                      <div className="section-title-content wow fadeInUp" data-wow-delay="0.25s">
                          <p>Built on a legacy of quality and innovation, we have established a strong foundation in the industrial sector, consistently delivering reliable solutions that drive progress and set industry standards.</p>
                      </div>
                      {/* Section Title Content End */}
                  </div>
              </div>

              <div className="row">
                  <div className="col-lg-12">
                      {/* Our History Box Start */}
                      <div className="our-history-box tab-content wow fadeInUp" data-wow-delay="0.25s" id="historybox">
                          {/* Sidebar Our History Nav start */}
                          <div className="our-history-nav">
                              <ul className="nav nav-tabs" id="historyTab" role="tablist">
                                  <li className="nav-item" role="presentation">
                                      <button className="nav-link active" id="1920-tab" data-bs-toggle="tab" data-bs-target="#1920" type="button" role="tab" aria-selected="true">In 1920 - Planning</button>
                                  </li>
                                  <li className="nav-item" role="presentation">
                                      <button className="nav-link" id="1922-tab" data-bs-toggle="tab" data-bs-target="#1922" type="button" role="tab" aria-selected="false">In 1922 -  Journey Started</button>
                                  </li>
                                  <li className="nav-item" role="presentation">
                                      <button className="nav-link" id="1925-tab" data-bs-toggle="tab" data-bs-target="#1925" type="button" role="tab" aria-selected="false">In 1925 - Journey Progress</button>
                                  </li>
                                  <li className="nav-item" role="presentation">
                                      <button className="nav-link" id="1930-tab" data-bs-toggle="tab" data-bs-target="#1930" type="button" role="tab" aria-selected="false">In 1930 - Global Reach</button>
                                  </li>
                                  <li className="nav-item" role="presentation">
                                      <button className="nav-link" id="1940-tab" data-bs-toggle="tab" data-bs-target="#1940" type="button" role="tab" aria-selected="false">In 1940 - Industry Leadership</button>
                                  </li>
                              </ul>
                          </div>
                          {/* Sidebar Our History Nav End */}
                           
                          {/* Our History Item Start */}
                          <div className="our-history-item tab-pane fade show active" id="1920" role="tabpanel">
                              <div className="row align-items-center">
                                  <div className="col-lg-6">
                                      {/* Our History Content Start */}
                                      <div className="our-history-content">
                                          {/* Section Title Start */}
                                          <div className="section-title">
                                              <h2 className="text-anime-style-2" data-cursor="-opaque">Company <span>started</span></h2>
                                              <p>Welcome to Industry, a leading industry innovator with a rich history of excellence. With a passion for precision and a commitment to quality, we have been empowering industries and driving progress.</p>
                                          </div>
                                          {/* Section Title End */}
      
                                          <div className="our-history-list">
                                              <ul>
                                                  <li>Quality Control System</li>
                                                  <li>Building Quality Industrial</li>
                                                  <li>Environmental Responsibility</li>
                                                  <li>Building Quality Industrial</li>
                                              </ul>
                                          </div>                                     
                                      </div>
                                      {/* Our History Content End */}
                                  </div>
      
                                  <div className="col-lg-6">
                                      {/* Our History Image Start */}
                                      <div className="our-history-image">
                                          <figure  className="image-anime">
                                              <img src="/images/history-image-1.jpg" alt="" />
                                          </figure>
                                      </div>
                                      {/* Our History Image End */}
                                  </div>
                              </div>
                          </div>
                          {/* Our History Item End */}
      
                          {/* Our History Item Start */}
                          <div className="our-history-item tab-pane fade" id="1922" role="tabpanel">
                              <div className="row align-items-center">
                                  <div className="col-lg-6">
                                      {/* Our History Content Start */}
                                      <div className="our-history-content">
                                          {/* Section Title Start */}
                                          <div className="section-title">
                                              <h2 className="text-anime-style-2" data-cursor="-opaque">Journey <span>started</span></h2>
                                              <p>Welcome to Industry, a leading industry innovator with a rich history of excellence. With a passion for precision and a commitment to quality, we have been empowering industries and driving progress.</p>
                                          </div>
                                          {/* Section Title End */}
      
                                          <div className="our-history-list">
                                              <ul>
                                                  <li>Quality Control System</li>
                                                  <li>Building Quality Industrial</li>
                                                  <li>Environmental Responsibility</li>
                                                  <li>Building Quality Industrial</li>
                                              </ul>
                                          </div>                                     
                                      </div>
                                      {/* Our History Content End */}
                                  </div>
      
                                  <div className="col-lg-6">
                                      {/* Our History Image Start */}
                                      <div className="our-history-image">
                                          <figure  className="image-anime">
                                              <img src="/images/history-image-1.jpg" alt="" />
                                          </figure>
                                      </div>
                                      {/* Our History Image End */}
                                  </div>
                              </div>
                          </div>
                          {/* Our History Item End */}
      
                          {/* Our History Item Start */}
                          <div className="our-history-item tab-pane fade" id="1925" role="tabpanel">
                              <div className="row align-items-center">
                                  <div className="col-lg-6">
                                      {/* Our History Content Start */}
                                      <div className="our-history-content">
                                          {/* Section Title Start */}
                                          <div className="section-title">
                                              <h2 className="text-anime-style-2" data-cursor="-opaque">Journey <span>progress</span></h2>
                                              <p>Welcome to Industry, a leading industry innovator with a rich history of excellence. With a passion for precision and a commitment to quality, we have been empowering industries and driving progress.</p>
                                          </div>
                                          {/* Section Title End */}
      
                                          <div className="our-history-list">
                                              <ul>
                                                  <li>Quality Control System</li>
                                                  <li>Building Quality Industrial</li>
                                                  <li>Environmental Responsibility</li>
                                                  <li>Building Quality Industrial</li>
                                              </ul>
                                          </div>                                     
                                      </div>
                                      {/* Our History Content End */}
                                  </div>
      
                                  <div className="col-lg-6">
                                      {/* Our History Image Start */}
                                      <div className="our-history-image">
                                          <figure  className="image-anime">
                                              <img src="/images/history-image-1.jpg" alt="" />
                                          </figure>
                                      </div>
                                      {/* Our History Image End */}
                                  </div>
                              </div>
                          </div>
                          {/* Our History Item End */}
  
                          {/* Our History Item Start */}
                          <div className="our-history-item tab-pane fade" id="1930" role="tabpanel">
                              <div className="row align-items-center">
                                  <div className="col-lg-6">
                                      {/* Our History Content Start */}
                                      <div className="our-history-content">
                                          {/* Section Title Start */}
                                          <div className="section-title">
                                              <h2 className="text-anime-style-2" data-cursor="-opaque">Global <span>reach</span></h2>
                                              <p>Welcome to Industry, a leading industry innovator with a rich history of excellence. With a passion for precision and a commitment to quality, we have been empowering industries and driving progress.</p>
                                          </div>
                                          {/* Section Title End */}
      
                                          <div className="our-history-list">
                                              <ul>
                                                  <li>Quality Control System</li>
                                                  <li>Building Quality Industrial</li>
                                                  <li>Environmental Responsibility</li>
                                                  <li>Building Quality Industrial</li>
                                              </ul>
                                          </div>                                     
                                      </div>
                                      {/* Our History Content End */}
                                  </div>
      
                                  <div className="col-lg-6">
                                      {/* Our History Image Start */}
                                      <div className="our-history-image">
                                          <figure  className="image-anime">
                                              <img src="/images/history-image-1.jpg" alt="" />
                                          </figure>
                                      </div>
                                      {/* Our History Image End */}
                                  </div>
                              </div>
                          </div>
                          {/* Our History Item End */}
  
                          {/* Our History Item Start */}
                          <div className="our-history-item tab-pane fade" id="1940" role="tabpanel">
                              <div className="row align-items-center">
                                  <div className="col-lg-6">
                                      {/* Our History Content Start */}
                                      <div className="our-history-content">
                                          {/* Section Title Start */}
                                          <div className="section-title">
                                              <h2 className="text-anime-style-2" data-cursor="-opaque">Industry <span>leader</span></h2>
                                              <p>Welcome to Industry, a leading industry innovator with a rich history of excellence. With a passion for precision and a commitment to quality, we have been empowering industries and driving progress.</p>
                                          </div>
                                          {/* Section Title End */}
      
                                          <div className="our-history-list">
                                              <ul>
                                                  <li>Quality Control System</li>
                                                  <li>Building Quality Industrial</li>
                                                  <li>Environmental Responsibility</li>
                                                  <li>Building Quality Industrial</li>
                                              </ul>
                                          </div>                                     
                                      </div>
                                      {/* Our History Content End */}
                                  </div>
      
                                  <div className="col-lg-6">
                                      {/* Our History Image Start */}
                                      <div className="our-history-image">
                                          <figure  className="image-anime">
                                              <img src="/images/history-image-1.jpg" alt="" />
                                          </figure>
                                      </div>
                                      {/* Our History Image End */}
                                  </div>
                              </div>
                          </div>
                          {/* Our History Item End */}
                      </div>
                      {/* Our History Box End */}
                  </div>
              </div>
          </div>
      </div>
      {/* Our History Section End */}

      {/* What We Do Start */}
      <div className="what-we-do">
          <div className="container-fluid">
              <div className="row no-gutters">
                  <div className="col-lg-6">
                      {/* What We Do Content Start */}
                      <div className="what-we-do-content">
                          {/* Section Title Start */}
                          <div className="section-title dark-section">
                              <h3 className="wow fadeInUp">what we do</h3>
                              <h2 className="text-anime-style-2" data-cursor="-opaque">Innovative factory and industry <span>solutions today</span></h2>
                          </div>
                          {/* Section Title End */}
  
                          {/* What We Do List Start */}
                          <div className="what-we-do-list">
                              <div className="what-we-do-list-box-1">
                                  {/* What We Do Item Start */}
                                  <div className="what-we-do-item">
                                      <div className="icon-box">
                                          <img src="/images/icon-who-we-do-1.svg" alt="" />
                                      </div>
                                      <div className="what-we-item-content">
                                          <h3>automation solutions</h3>
                                          <p>Streamlining processes through cutting-edge technology.</p>
                                      </div>
                                  </div>
                                  {/* What We Do Item End */}
  
                                  {/* What We Do Item Start */}
                                  <div className="what-we-do-item">
                                      <div className="icon-box">
                                          <img src="/images/icon-who-we-do-2.svg" alt="" />
                                      </div>
                                      <div className="what-we-item-content">
                                          <h3>quality control</h3>
                                          <p>Ensuring product excellence through rigorous testing.</p>
                                      </div>
                                  </div>
                                  {/* What We Do Item End */}
                              </div> 
                              
                              <div className="what-we-do-list-box-2">
                                  {/* What We Do Item Start */}
                                  <div className="what-we-do-item">
                                      <div className="icon-box">
                                          <img src="/images/icon-who-we-do-3.svg" alt="" />
                                      </div>
                                      <div className="what-we-item-content">
                                          <h3>process engineering</h3>
                                          <p>Ensuring product excellence through rigorous testing.</p>
                                      </div>
                                  </div>
                                  {/* What We Do Item End */}
  
                                  {/* What We Do Item Start */}
                                  <div className="what-we-do-item">
                                      <div className="icon-box">
                                          <img src="/images/icon-who-we-do-4.svg" alt="" />
                                      </div>
                                      <div className="what-we-item-content">
                                          <h3>product development</h3>
                                          <p>Streamlining processes through cutting-edge technology.</p>
                                      </div>
                                  </div>
                                  {/* What We Do Item End */}
                              </div>                                         
                          </div>
                          {/* What We Do List Start */}
  
                          {/* What We Do Footer Start */}
                          <div className="what-we-do-footer">
                              <p>Lorem ipsum is a placeholder text commonly used <span>to demonstrate</span></p>
                          </div>
                          {/* What We Do Footer End */}
                      </div>
                      {/* What We Do Content End */}
                  </div>
  
                  <div className="col-lg-6">
                      {/* What We Do Image Start */}
                      <div className="what-we-do-image">
                          <figure className="image-anime">
                              <img src="/images/what-we-do-image.jpg" alt="" />
                          </figure>
  
                          {/* Contact Now Circle Start */}
                          <div className="contact-now-circle">
                              <img src="/images/contact-now-circle.svg" alt="" />
                          </div>
                          {/* Contact Now Circle End */}
                      </div>      
                      {/* What We Do Image End */}              
                  </div>
              </div>
          </div>
       </div>
      {/* What We Do End */}

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
