"use client";
import { useState } from 'react';

export default function ContactContent() {
  const [formStatus, setFormStatus] = useState(null); // null, 'success', 'error'
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        setFormStatus('success');
        setMessage('Message Sent Successfully!');
        e.target.reset();
      } else {
        setFormStatus('error');
        setMessage('Failed to send message. Please try again.');
      }
    } catch (error) {
       setFormStatus('error');
       setMessage('An error occurred. Please try again.');
    }
  };

  return (
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
                <form id="contactFormReact" onSubmit={handleSubmit} className="wow fadeInUp" data-wow-delay="0.5s">
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
                      <button type="submit" className="btn-default"><span>submit message</span></button>
                      <div id="msgSubmit" className={`h3 ${formStatus ? (formStatus === 'success' ? 'text-success' : 'text-danger') : 'hidden'}`}>
                        {message}
                      </div>
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
  );
}
