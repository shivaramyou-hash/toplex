"use client";
import Link from "next/link";
import { useEffect } from "react";

export default function Header() {
  // SlickNav logic is handled by jquery.slicknav.js in global scripts.
  // Ideally we should reimplement it in React, but for "same to same" migration with existing JS,
  // we rely on the global script being loaded.

  return (
    <>
      <div className="topbar">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3">
              <div className="site-logo">
                <Link href="/">
                  <img src="/images/tki-logo.png" alt="Toplax" />
                </Link>
              </div>
            </div>

            <div className="col-lg-9 col-md-12">
              <div className="topbar-contact-info">
                <ul>
                  <li>
                    <a href="#">
                      <div className="icon-box">
                        <img src="/images/icon-phone.svg" alt="" />
                      </div>
                      <p>+(123) 698-5245</p>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="icon-box">
                        <img src="/images/icon-mail.svg" alt="" />
                      </div>
                      <p>info@domain.com</p>
                    </a>
                  </li>
                </ul>
                <div className="topbar-qoute-btn">
                  <Link href="/contact" className="btn-default">
                    <span>Get a quote</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <header className="main-header">
        <div className="header-sticky">
          <nav className="navbar navbar-expand-lg">
            <div className="container">
              <Link className="navbar-brand" href="/">
                <img src="/images/tki-logo.png" alt="Toplax" />
              </Link>

              <div className="collapse navbar-collapse main-menu">
                <div className="nav-menu-wrapper">
                  <ul className="navbar-nav mr-auto" id="menu">
                    <li className="nav-item submenu">
                      <Link className="nav-link" href="/">Home</Link>
                      <ul>
                        <li className="nav-item">
                          <Link className="nav-link" href="/index-2">Home - Image</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" href="/index-video">Home - Video</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" href="/index-slider">Home - Slider</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="/about">About Us</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="/services">Services</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="/blog">Blog</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="/projects">Projects</Link>
                    </li>
                    <li className="nav-item submenu">
                      <Link className="nav-link" href="#">Pages</Link>
                      <ul>
                        <li className="nav-item">
                          <Link className="nav-link" href="/service-single">Service Details</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" href="/blog-single">Blog Details</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" href="/project-single">Project Details</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" href="/team">Team</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" href="/team-single">Team Details</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" href="/pricing">Pricing Plan</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" href="/testimonial">Testimonials</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" href="/image-gallery">Image Gallery</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" href="/video-gallery">Video Gallery</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" href="/faqs">FAQs</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" href="/404">404</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="/contact">Contact Us</Link>
                    </li>
                  </ul>
                </div>

                <div className="header-social-box d-inline-flex">
                  <div className="header-social-links">
                    <ul>
                      <li>
                        <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
                      </li>
                      <li>
                        <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                      </li>
                      <li>
                        <a href="#"><i className="fa-brands fa-instagram"></i></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="navbar-toggle"></div>
            </div>
          </nav>
          <div className="responsive-menu"></div>
        </div>
      </header>
    </>
  );
}
