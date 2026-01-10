"use client";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
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
			<div id="loading-icon"><img src="images/logo-tki.svg" alt="" /></div>
		</div>
	</div>
	{/* Preloader End */}

    {/* Topbar Section Start */}
    <div className="topbar">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-3">
                    <div className="site-logo">
                        <a href="index.html">
                            <img src="images/tki_logo.png" alt="Logo" />
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
                                        <img src="images/icon-phone.svg" alt="" />
                                    </div>
                                    <p>+(230) 59424281</p>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div className="icon-box">
                                        <img src="images/icon-mail.svg" alt="" />
                                    </div>
                                     <p>info@tkisafety.com</p>
                                </a>
                            </li>
                        </ul>
                        {/* Topbar Qoute Button Start */}
                        <div className="topbar-qoute-btn">
                            <a href="contact.html" className="btn-default"><span>Get a quote</span></a>
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
					<a className="navbar-brand" href="index.html">
						<img src="images/tki_logo.png" alt="Logo" />
					</a>
					{/* Logo End */}

					{/* Main Menu Start */}
					<div className="collapse navbar-collapse main-menu">
                        <div className="nav-menu-wrapper">
                            <ul className="navbar-nav mr-auto" id="menu">
                                <li className="nav-item submenu"><a className="nav-link" href="index.html">Home</a>
                                    <ul>
                                        {/* <li className="nav-item"><a className="nav-link" href="index-2.html">Home - Image</a></li>
                                        <li className="nav-item"><a className="nav-link" href="index-video.html">Home - Video</a></li> */}
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

    {/* Hero Section Start */}
    <div className="hero hero-slider-layout">
        <div className="swiper">
            <div className="swiper-wrapper">
                {/* Hero Slide Start */}
                <div className="swiper-slide">
                    <div className="hero-slide">
                        {/* Slider Image Start */}
                        <div className="hero-slider-image">
                            <img src="images/hero-bg.jpg" alt="" />
                        </div>
                        {/* Slider Image End */}

                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7">
                                    {/* Hero Content Start */}
                                    <div className="hero-content">
                                        {/* Section Title Start */}
                                        <div className="section-title dark-section">
                                            <h3 className="wow fadeInUp">TKI Fire and Health Safety Co. Ltd</h3>
                                            <h1 className="text-anime-style-2" data-cursor="-opaque">Serious Safety … <span>Where You Need It.</span></h1>
                                            <p className="wow fadeInUp" data-wow-delay="0.25s">Supply, install and commission Fire Detectors, Fire Alarms, Fire Fighting Equipment, Health Equipment, Enforcement Equipment, Specialised Vehicles and Machinery.</p>
                                        </div>
                                        {/* Section Title End */}
                
                                        {/* Hero Button Start */}
                                        <div className="hero-btn wow fadeInUp" data-wow-delay="0.4s">
                                            <a href="/contact" className="btn-default"><span>explore more</span></a>
                                        </div>
                                        {/* Hero Button End */}
                                    </div>
                                    {/* Hero Content End */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Hero Slide End */}

                {/* Hero Slide Start */}
                <div className="swiper-slide">
                    <div className="hero-slide">
                        {/* Slider Image Start */}
                        <div className="hero-slider-image">
                            <img src="images/hero-bg-2.jpg" alt="" />
                        </div>
                        {/* Slider Image End */}

                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7">
                                    {/* Hero Content Start */}
                                    <div className="hero-content">
                                        {/* Section Title Start */}
                                        <div className="section-title dark-section">
                                            <h3 className="wow fadeInUp">welcome our industry</h3>
                                            <h1 className="text-anime-style-2" data-cursor="-opaque">Excellence innovating <span>industry for today</span></h1>
                                            <p className="wow fadeInUp" data-wow-delay="0.25s">At the heart of our operations is a commitment to delivering superior products through cutting-edge technology and innovative processes. </p>
                                        </div>
                                        {/* Section Title End */}
                
                                        {/* Hero Button Start */}
                                        <div className="hero-btn wow fadeInUp" data-wow-delay="0.4s">
                                            <a href="/contact" className="btn-default"><span>explore more</span></a>
                                        </div>
                                        {/* Hero Button End */}
                                    </div>
                                    {/* Hero Content End */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Hero Slide End */}
            </div>
            <div className="hero-pagination"></div>
        </div>        
    </div>
    {/* Hero Section End */}

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
                                <img src="images/about-img-1.jpg" alt="" />
                            </figure>
                        </div>
                        {/* About Image End */}

                        {/* About Image Start */}
                        <div className="about-img-2">
                            <figure className="image-anime reveal">
                                <img src="images/about-img-2.jpg" alt="" />
                            </figure>
                        </div>
                        {/* About Image End */}

                        {/* Company Experience Start */}
                        <div className="company-experience">
                            <div className="company-experience-counter">
                                <h2><span className="counter">30</span>+</h2>
                            </div>
                            <div className="company-experience-content">
                                <p>Years of Experience</p>
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
                            <h3 className="wow fadeInUp">About TKI</h3>
                            <h2 className="text-anime-style-2" data-cursor="-opaque">Dedicated to <span>Protecting Life & Property</span></h2>
                            <p className="wow fadeInUp" data-wow-delay="0.25s">The TKI Fire and Health Safety Co. Ltd (TKI) is a professional supplier of quality military, safety, fire equipment and solutions in Mauritius and countries in the Indian Ocean. We are dedicated to providing one-stop solution of all consultancy services and safety equipment since 2017.</p>
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
                                                <li>Mission: Secure life, environment & property</li>
                                                <li>Vision: No. 1 Protection Solutions Provider</li>
                                                <li>Integrity & Highest Ethical Standards</li>
                                                <li>Customer Focus & Service Excellence</li>
                                            </ul>
                                        </div>
                                        {/* About Content List End */}
                
                                        {/* About Content Btn Start */}
                                        <div className="about-content-btn wow fadeInUp" data-wow-delay="0.75s">
                                            <a href="/about" className="btn-default"><span>learn more</span></a>
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
                                                <h2><span className="counter">2017</span></h2>
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
                                                <p>Established Since</p>
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

    {/* Our Service Start */}
     <div className="our-services parallaxie">
        <div className="container">
            <div className="row section-row align-items-center">
                <div className="col-lg-6">
                    {/* Section Title Start */}
                    <div className="section-title dark-section">
                        <h3 className="wow fadeInUp">services</h3>
                        <h2 className="text-anime-style-2" data-cursor="-opaque">Comprehensive solutions <span>for industrial excellence</span></h2>
                    </div>
                    {/* Section Title End */}
                </div>

                <div className="col-lg-6">
                    {/* Section Title Content Start */}
                    <div className="section-title-content dark-section wow fadeInUp" data-wow-delay="0.25s">
                        <p>We provide a wide range of services tailored to meet the unique needs of modern industries. From precision manufacturing and advanced automation to custom product design and efficient logistics.</p>
                    </div>
                    {/* Section Title Content End */}
                </div>
            </div>
        </div>
     </div>
    {/* Our Service End */}

    {/* Our Service List Start */}
    <div className="our-services-list">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    {/* Services List Box Start */}
                    <div className="services-list-box">
                        {/* Service Item Start */}
                        <div className="service-item">
                            <div className="icon-box">
                                <img src="images/icon-service-1.svg" alt="" />
                            </div>

                            <div className="service-body">
                                <h3>Health & Safety Consultancy</h3>
                            </div>

                            <div className="service-footer">
                                <a href="service-single.html" className="service-btn">
                                    <img src="images/arrow-dark.svg" alt="" />
                                </a>
                            </div>
                        </div>
                        {/* Service Item End */}

                        {/* Service Item Start */}
                        <div className="service-item">
                            <div className="icon-box">
                                <img src="images/icon-service-2.svg" alt="" />
                            </div>

                            <div className="service-body">
                                <h3>Fire Safety Equipment & Audits</h3>
                            </div>

                            <div className="service-footer">
                                <a href="service-single.html" className="service-btn">
                                    <img src="images/arrow-dark.svg" alt="" />
                                </a>
                            </div>
                        </div>
                        {/* Service Item End */}

                        {/* Service Item Start */}
                        <div className="service-item">
                            <div className="icon-box">
                                <img src="images/icon-service-3.svg" alt="" />
                            </div>

                            <div className="service-body">
                                <h3>Professional Training Services</h3>
                            </div>

                            <div className="service-footer">
                                <a href="service-single.html" className="service-btn">
                                    <img src="images/arrow-dark.svg" alt="" />
                                </a>
                            </div>
                        </div>
                        {/* Service Item End */}

                        {/* Service Item Start */}
                        <div className="service-item">
                            <div className="icon-box">
                                <img src="images/icon-service-4.svg" alt="" />
                            </div>

                            <div className="service-body">
                                <h3>Specialised Vehicles & Machinery</h3>
                            </div>

                            <div className="service-footer">
                                <a href="service-single.html" className="service-btn">
                                    <img src="images/arrow-dark.svg" alt="" />
                                </a>
                            </div>
                        </div>
                        {/* Service Item End */}
                    </div>
                    {/* Services List Box End */}
                </div>
            </div>
        </div>
    </div>
    {/* Our Service List End */}

    {/* Our Story Start */}
     <div className="our-story">
        <div className="container">
            <div className="row section-row align-items-center">
                <div className="col-lg-6">
                    {/* Section Title Start */}
                    <div className="section-title">
                        <h3 className="wow fadeInUp">our story</h3>
                        <h2 className="text-anime-style-2" data-cursor="-opaque">Transforming industries <span>with innovative efficient solutions</span></h2>
                    </div>
                    {/* Section Title End */}
                </div>

                <div className="col-lg-6">
                    {/* Our Story Header Image Start */}
                    <div className="our-story-header-img">
                        <figure className="reveal image-anime">
                            <img src="images/our-story-header-img-1.jpg" alt="" />
                        </figure>

                        <figure className="reveal image-anime">
                            <img src="images/our-story-header-img-2.jpg" alt="" />
                        </figure>
                    </div>
                    {/* Our Story Header Image End */}
                </div>
            </div>

            <div className="row align-items-center">
                <div className="col-lg-6">
                    {/* Our Story Image Start */}
                    <div className="our-story-img">
                        <figure className="reveal image-anime">
                            <img src="images/our-story-img.jpg" alt="" />
                        </figure>
                    </div>
                    {/* Our Story Image End */}
                </div>

                <div className="col-lg-6">
                    <div className="our-story-content">
                        <div className="our-story-content-body">
                            <p>We specialize in revolutionizing industries by delivering innovative, efficient solutions that enhance productivity and streamline processes. Through advanced technologies, precision engineering, and sustainable practices.</p>
                        </div>

                        <div className="our-story-counters">
                            {/* Our Story Counter Start */}
                            <div className="our-story-counter">
                                <h3><span className="counter">10</span>k+</h3>
                                <p>completed project</p>
                            </div>
                            {/* Our Story Counter End */}

                            {/* Our Story Counter Start */}
                            <div className="our-story-counter">
                                <h3><span className="counter">15</span>+</h3>
                                <p>satisfied customer</p>
                            </div>
                            {/* Our Story Counter End */}

                            {/* Our Story Counter Start */}
                            <div className="our-story-counter">
                                <h3><span className="counter">10</span>k+</h3>
                                <p>years of mastery</p>
                            </div>
                            {/* Our Story Counter End */}
                        </div>

                        {/* Our Story Intro Video Start */}
                        <div className="our-story-intro-video">
                            {/* Our Story Client Image Start */}
                            <div className="our-story-client-img">
                                {/* Client Image Start */}
                                <div className="client-image">
                                    <figure className="image-anime reveal">
                                        <img src="images/story-client-img-1.jpg" alt="" />
                                    </figure>
                                </div>
                                {/* Client Image End */}

                                {/* Client Image Start */}
                                <div className="client-image">
                                    <figure className="image-anime reveal">
                                        <img src="images/story-client-img-2.jpg" alt="" />
                                    </figure>
                                </div>
                                {/* Client Image End */}

                                {/* Client Image Start */}
                                <div className="client-image">
                                    <figure className="image-anime reveal">
                                        <img src="images/story-client-img-3.jpg" alt="" />
                                    </figure>
                                </div>
                                {/* Client Image End */}
                            </div>
                            {/* Our Story Client Image End */}

                            {/* Intro Video Box Start */}
                            <div className="intro-video-box">
                                {/* Video Play Button Start */}
                                <div className="video-play-button">
                                    <a href="https://www.youtube.com/watch?v=Y-x0efG1seA" className="popup-video" data-cursor-text="Play">
                                        <i className="fa-solid fa-play"></i>
                                    </a>
                                    <p>watch intro</p>
                                </div>
                                {/* Video Play Button End */}
                            </div>
                            {/* Intro Video Box End */}
                        </div>
                        {/* Our Story Intro Video End */}
                    </div>
                </div>
            </div>
        </div>
     </div>
    {/* Our Story End */}

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
                                        <img src="images/icon-who-we-do-1.svg" alt="" />
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
                                        <img src="images/icon-who-we-do-2.svg" alt="" />
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
                                        <img src="images/icon-who-we-do-3.svg" alt="" />
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
                                        <img src="images/icon-who-we-do-4.svg" alt="" />
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
                            <img src="images/what-we-do-image.jpg" alt="" />
                        </figure>

                        {/* Contact Now Circle Start */}
                        <div className="contact-now-circle">
                            <img src="images/contact-now-circle.svg" alt="" />
                        </div>
                        {/* Contact Now Circle End */}
                    </div>      
                    {/* What We Do Image End */}              
                </div>
            </div>
        </div>
     </div>
    {/* What We Do End */}

    {/* Our Expertise Section Start */}
    <div className="our-work">
        <div className="container">
            <div className="row section-row align-items-center">
                <div className="col-lg-6">
                    {/* Section Title Start */}
                    <div className="section-title">
                        <h3 className="wow fadeInUp">Our Expertise</h3>
                        <h2 className="text-anime-style-2" data-cursor="-opaque">World-class safety <span>solutions</span></h2>
                    </div>
                    {/* Section Title End */}
                </div>

                <div className="col-lg-6">
                    {/* Section Title Content Start */}
                    <div className="section-title-content wow fadeInUp" data-wow-delay="0.25s">
                        <p>Our success is driven by our passion to protect. We provide innovative solutions in protecting life, environment, and property.</p>
                    </div>
                    {/* Section Title Content End */}
                </div>
            </div>

            <div className="row">
                <div className="col-lg-12">
                    {/* Choose Our Project Nav start */}
                    <div className="our-Project-nav wow fadeInUp" data-wow-delay="0.4s">
                        <ul>
                            <li><a href="#" className="active-btn" data-filter="*">all</a></li>
                            <li><a href="#" data-filter=".ppe">PPE</a></li>
                            <li><a href="#" data-filter=".fire">Firefighting</a></li>
                            <li><a href="#" data-filter=".vehicles">Vehicles</a></li>
                            <li><a href="#" data-filter=".police">Police/Military</a></li>
                        </ul>
                    </div>
                    {/* Choose Our Project Nav End */}
                </div>

                <div className="col-lg-12">
                    {/* Project Item Boxes start */}
                    <div className="row project-item-boxes align-items-center">
                        <div className="col-md-6 project-item-box ppe fire">
                            {/* Project Item Start */}
                            <div className="project-item wow fadeInUp">
                                <div className="project-image">
                                    <figure className="image-anime">
                                        <img src="images/project-1.jpg" alt="" />
                                    </figure>
                                </div>                                
                                
                                <div className="project-tag">
                                    <a href="#">Safety Gear</a>
                                </div>
                                
                                <div className="project-content">
                                    <h3><a href="#">Personal Protective Equipment (PPE)</a></h3>
                                </div>
                            </div>
                            {/* Project Item End */}
                        </div>

                        <div className="col-md-6 project-item-box fire police">
                            {/* Project Item Start */}
                            <div className="project-item wow fadeInUp" data-wow-delay="0.2s">
                                <div className="project-image">
                                    <figure className="image-anime">
                                        <img src="images/project-2.jpg" alt="" />
                                    </figure>
                                </div>                                
                                
                                <div className="project-tag">
                                    <a href="#">Fire Safety</a>
                                </div>
                                
                                <div className="project-content">
                                    <h3><a href="#">Firefighting Systems & Alarms</a></h3>
                                </div>
                            </div>
                            {/* Project Item End */}
                        </div>

                        <div className="col-md-6 project-item-box vehicles ppe">
                            {/* Project Item Start */}
                            <div className="project-item wow fadeInUp" data-wow-delay="0.4s">
                                <div className="project-image">
                                    <figure className="image-anime">
                                        <img src="images/project-3.jpg" alt="" />
                                    </figure>
                                </div>                                
                                
                                <div className="project-tag">
                                    <a href="#">Vehicles</a>
                                </div>
                                
                                <div className="project-content">
                                    <h3><a href="#">Specialised Vehicles & Machinery</a></h3>
                                </div>
                            </div>
                            {/* Project Item End */}
                        </div>

                        <div className="col-md-6 project-item-box police vehicles">
                            {/* Project Item Start */}
                            <div className="project-item wow fadeInUp" data-wow-delay="0.6s">
                                <div className="project-image">
                                    <figure className="image-anime">
                                        <img src="images/project-4.jpg" alt="" />
                                    </figure>
                                </div>                                
                                
                                <div className="project-tag">
                                    <a href="#">Enforcement</a>
                                </div>
                                
                                <div className="project-content">
                                    <h3><a href="#">Police & Military Equipment</a></h3>
                                </div>
                            </div>
                            {/* Project Item End */}
                        </div>
                    </div>
                    {/* Project Item Boxes End */}
                </div>
            </div>
        </div>
    </div>
    {/* Our Expertise Section End */}

    {/* Our Process Section Start */}
    <div className="our-process">
        <div className="container">
            <div className="row section-row align-items-center">
                <div className="col-lg-6">
                    {/* Section Title Start */}
                    <div className="section-title">
                        <h3 className="wow fadeInUp">our process</h3>
                        <h2 className="text-anime-style-2" data-cursor="-opaque">Streamlined processes <span>for optimal efficiency</span></h2>
                    </div>
                    {/* Section Title End */}
                </div>

                <div className="col-lg-6">
                    {/* Section Title Content Start */}
                    <div className="section-title-content wow fadeInUp" data-wow-delay="0.25s">
                        <p>Our process is designed to maximize efficiency and quality at every stage of production. By integrating advanced technologies and best practices, we ensure seamless workflows.</p>
                    </div>
                    {/* Section Title Content End */}
                </div>
            </div>

            <div className="row align-items-center">
                <div className="col-lg-6">
                    {/* Our Process Image Start */}
                    <div className="our-process-image">
                        <figure className="image-anime reveal">
                            <img src="images/our-process-image.jpg" alt="" />
                        </figure>
                    </div>
                    {/* Our Process Image End */}
                </div>

                <div className="col-lg-6">
                    {/* Process Step Box Start */}
                    <div className="process-steps-box">
                        {/* Process Step Item Start */}
                        <div className="process-step-item wow fadeInUp">
                            <div className="process-step-no">
                                <h2>01</h2>
                            </div>
                            <div className="process-step-content">
                                <h3>understanding your needs</h3>
                                <p>We begin by thoroughly assessing your requirements and objectives to develop a tailored approach.</p>
                            </div>
                        </div>
                        {/* Process Step Item End */}

                        {/* Process Step Item Start */}
                        <div className="process-step-item active wow fadeInUp" data-wow-delay="0.25s">
                            <div className="process-step-no">
                                <h2>02</h2>
                            </div>
                            <div className="process-step-content">
                                <h3>design and planning</h3>
                                <p>Our team collaborates to create detailed project plans, ensuring all aspects of the process.</p>
                            </div>
                        </div>
                        {/* Process Step Item End */}

                        {/* Process Step Item Start */}
                        <div className="process-step-item wow fadeInUp" data-wow-delay="0.5s">
                            <div className="process-step-no">
                                <h2>03</h2>
                            </div>
                            <div className="process-step-content">
                                <h3>implementation</h3>
                                <p>Utilizing advanced technologies and skilled personnel, we execute the project</p>
                            </div>
                        </div>
                        {/* Process Step Item End */}
                    </div>
                    {/* Process Step Box End */}
                </div>
            </div>
        </div>
    </div>
    {/* Our Process Section End */}

    {/* Certifications Section Start */}
    <div className="our-pricing">
        <div className="container">
             <div className="row section-row align-items-center">
                <div className="col-lg-6">
                    <div className="section-title">
                        <h3 className="wow fadeInUp">Certifications</h3>
                        <h2 className="text-anime-style-2" data-cursor="-opaque">Approved International <span>Standards</span></h2>
                    </div>
                </div>
                 <div className="col-lg-6">
                    <div className="section-title-content wow fadeInUp" data-wow-delay="0.25s">
                        <p>Our products meet rigorous international standards including CE, FDA, ISO, NFPA, UL, and more.</p>
                    </div>
                </div>
            </div>
            {/* Certifications Grid Start */}
            <div className="row">
                {[
                    "CE", "FDA", "ISO", "AAMI-SD09: 2002", "BS", 
                    "NFPA", "ANSI", "UL", "FM", "KITMARK", 
                    "EN", "UKAS", "IS", "BSI"
                ].map((std, index) => (
                    <div className="col-lg-3 col-md-4 col-6" key={index}>
                        <div className="certification-card wow fadeInUp" data-wow-delay={`${0.1 * index}s`}>
                            <div className="cert-icon">
                                <i className="fa-solid fa-certificate"></i>
                            </div>
                            <h3>{std}</h3>
                        </div>
                    </div>
                ))}
            </div>
            {/* Certifications Grid End */}
        </div>
    </div>
    {/* Certifications Section End */}

    {/* Our Testimonial Section Start */}
    <div className="our-testimonial">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    {/* Our Testimonial Image Start */}
                    <div className="our-testimonial-image">
                        <figure className="image-anime reveal">
                            <img src="images/testimonial-image.jpg" alt="" />
                        </figure>
                    </div>
                    {/* Our Testimonial Image End */}
                </div>

                <div className="col-lg-6">
                    {/* Our Testimonial Content Start */}
                    <div className="our-testimonial-content">
                        {/* Section Title Start */}
                        <div className="section-title">
                            <h3 className="wow fadeInUp">Our client say</h3>
                            <h2 className="text-anime-style-3" data-cursor="-opaque">What our satisfied clients <span>are saying</span></h2>
                        </div>
                        {/* Section Title End */}

                        {/* Testimonial Slider Start */}
                        <div className="testimonial-slider">
                            <div className="swiper">
                                <div className="swiper-wrapper" data-cursor-text="Drag">
                                    {/* Testimonial Slide Start */}
                                    <div className="swiper-slide">
                                        <div className="testimonial-item">
                                            <div className="testimonial-rating">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>

                                            <div className="testimonial-content">
                                                <p>"The team's attention to detail and commitment to quality exceeded our expectations. They delivered on time, and their innovative solutions improved our production efficiency by 30%. Highly recommended!"</p>
                                            </div>

                                            <div className="testimonial-body">
                                                <div className="author-image">
                                                    <figure className="image-anime">
                                                        <img src="images/author-1.jpg" alt="" />
                                                    </figure>
                                                </div>            
                                                <div className="author-content">
                                                    <h3>Brooklyn Simmons</h3>
                                                    <p>Homeowner</p>
                                                </div>
                                            </div>                                    
                                        </div>
                                    </div>
                                    {/* Testimonial Slide End */}

                                    {/* Testimonial Slide Start */}
                                    <div className="swiper-slide">
                                        <div className="testimonial-item">
                                            <div className="testimonial-rating">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>

                                            <div className="testimonial-content">
                                                <p>"The team's attention to detail and commitment to quality exceeded our expectations. They delivered on time, and their innovative solutions improved our production efficiency by 30%. Highly recommended!"</p>
                                            </div>

                                            <div className="testimonial-body">
                                                <div className="author-image">
                                                    <figure className="image-anime">
                                                        <img src="images/author-2.jpg" alt="" />
                                                    </figure>
                                                </div>            
                                                <div className="author-content">
                                                    <h3>albert flores</h3>
                                                    <p>senior engineer</p>
                                                </div>
                                            </div>                                    
                                        </div>
                                    </div>
                                    {/* Testimonial Slide End */}
                                </div>
                                <div className="testimonial-btn">
                                    <div className="testimonial-button-prev"></div>
                                    <div className="testimonial-button-next"></div>
                                </div>
                            </div>
                        </div>
                        {/* Testimonial Slider End */}
                    </div>
                    {/* Our Testimonial Content End */}
                </div>

                <div className="col-lg-12">
                    {/* Agency Support Slider Start */}
                    <div className="testimonial-company-slider">
                        <div className="swiper">
                            <div className="swiper-wrapper">
                                {/* Agency Support Logo Start */}
                                <div className="swiper-slide">
                                    <div className="company-logo">
                                        <img src="images/company-logo-1.svg" alt="" />
                                    </div>
                                </div>
                                {/* Agency Support Logo End */}

                                {/* Agency Support Logo Start */}
                                <div className="swiper-slide">
                                    <div className="company-logo">
                                        <img src="images/company-logo-2.svg" alt="" />
                                    </div>
                                </div>
                                {/* Agency Support Logo End */}

                                {/* Agency Support Logo Start */}
                                <div className="swiper-slide">
                                    <div className="company-logo">
                                        <img src="images/company-logo-3.svg" alt="" />
                                    </div>
                                </div>
                                {/* Agency Support Logo End */}
                                
                                {/* Agency Support Logo Start */}
                                <div className="swiper-slide">
                                    <div className="company-logo">
                                        <img src="images/company-logo-4.svg" alt="" />
                                    </div>
                                </div>
                                {/* Agency Support Logo End */}
                                
                                {/* Agency Support Logo Start */}
                                <div className="swiper-slide">
                                    <div className="company-logo">
                                        <img src="images/company-logo-5.svg" alt="" />
                                    </div>
                                </div>
                                {/* Agency Support Logo End */}
                                
                                {/* Agency Support Logo Start */}
                                <div className="swiper-slide">
                                    <div className="company-logo">
                                        <img src="images/company-logo-1.svg" alt="" />
                                    </div>
                                </div>
                                {/* Agency Support Logo End */}
                            </div>
                        </div>
                    </div>
                    {/* Agency Support Slider End */}
                </div>
            </div>
        </div>
    </div>
    {/* Our Testimonial Section End */}

    {/* Our Blog Section Start */}
    <div className="our-blog">
        <div className="container">
            <div className="row section-row align-items-center">
                <div className="col-lg-5">
                    {/* Section Title Start */}
                    <div className="section-title">
                        <h3 className="wow fadeInUp">latest blog</h3>
                        <h2 className="text-anime-style-2" data-cursor="-opaque">Insights from our <span>latest blogs</span></h2>
                    </div>
                    {/* Section Title End */}
                </div>

                <div className="col-lg-7">
                    {/* Section Title Content Start */}
                    <div className="section-title-content wow fadeInUp" data-wow-delay="0.25s">
                        <p>Stay updated with the latest trends, innovations, and expert insights in the manufacturing and industrial sectors</p>
                    </div>
                    {/* Section Title Content End */}
                </div>
            </div>

            <div className="row">
                <div className="col-md-6">
                    {/* Post Item Start */}
                    <div className="post-item wow fadeInUp">
                        {/* Post Featured Image Start*/}
                        <div className="post-featured-image">
                            <figure>
                                <a href="blog-single.html" className="image-anime" data-cursor-text="View">
                                    <img src="images/blog-1.jpg" alt="" />
                                </a>
                            </figure>
                        </div>
                        {/* Post Featured Image End */}

                        {/* Post Item Body Start */}
                        <div className="post-item-body">
                            {/* Post Item Content Start */}
                            <div className="post-item-content">
                                <h2><a href="blog-single.html">Sustainable Practices Reducing Waste in Industrial Production</a></h2>
                            </div>
                            {/* Post Item Content End */}

                            {/* Post Item Button Start */}
                            <div className="post-item-btn">
                                <a href="blog-single.html"><img src="images/arrow-white.svg" alt="" /></a>
                            </div>
                            {/* Post Item Button End */}
                        </div>
                        {/* Post Item Body End */}
                    </div>
                    {/* Post Item End */}
                </div>

                <div className="col-md-6">
                    {/* Post Item Start */}
                    <div className="post-item wow fadeInUp">
                        {/* Post Featured Image Start*/}
                        <div className="post-featured-image">
                            <figure>
                                <a href="blog-single.html" className="image-anime" data-cursor-text="View">
                                    <img src="images/blog-2.jpg" alt="" />
                                </a>
                            </figure>
                        </div>
                        {/* Post Featured Image End */}

                        {/* Post Item Body Start */}
                        <div className="post-item-body">
                            {/* Post Item Content Start */}
                            <div className="post-item-content">
                                <h2><a href="blog-single.html">Advance Robotics Revolutionizing Industrial Workflow</a></h2>
                            </div>
                            {/* Post Item Content End */}

                            {/* Post Item Button Start */}
                            <div className="post-item-btn">
                                <a href="blog-single.html"><img src="images/arrow-white.svg" alt="" /></a>
                            </div>
                            {/* Post Item Button End */}
                        </div>
                        {/* Post Item Body End */}
                    </div>
                    {/* Post Item End */}
                </div>
            </div>
        </div>
    </div>
    {/* Our Blog Section End */}

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
                            <img src="images/contact-now-circle.svg" alt="" />
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
                            <img src="images/tki_logo.png" alt="" />
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
                            <li>+(230) 59424281</li>
                            <li>info@tkisafety.com</li>
                            <li>SSR Street, Trois Boutiques 52011, Mauritius</li>
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
