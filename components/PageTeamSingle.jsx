"use client";
import Link from "next/link";
import { useState } from 'react';

export default function PageTeamSingle() {
  const [formStatus, setFormStatus] = useState(null); // null, 'success', 'error'
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      // Reusing the same API route as contact form, or create a new one if needed
      // Ideally should be a different route or handled differently, but for now assuming same behavior
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
    <div className="page-team-single">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            {/* Team Member Sidebar Start */}
            <div className="team-member-sidebar">
              {/* Team Member Box Start */}
              <div className="team-member-box wow fadeInUp">
                {/* Team Image Start */}
                <div className="team-member-image">
                  <figure className="image-anime">
                    <img src="/images/team-1.jpg" alt="" />
                  </figure>
                </div>
                {/* Team Image End */}
        
                {/* Team Content Start */}
                <div className="team-member-name">
                  <h3>brooklyn simmons</h3>
                  <p>industrial engineer</p>
                </div>
                {/* Team Content End */}

                {/* Team Social Icon Start */}
                <div className="team-member-social-list">
                  <ul>
                    <li><Link href="#"><i className="fa-brands fa-x-twitter"></i></Link></li>
                    <li><Link href="#"><i className="fa-brands fa-facebook-f"></i></Link></li>
                    <li><Link href="#"><i className="fa-brands fa-instagram"></i></Link></li>
                    <li><Link href="#"><i className="fa-brands fa-pinterest-p"></i></Link></li>
                  </ul>
                </div>
                {/* Team Social Icon End */}
              </div>
              {/* Team Member Box End */}

              {/* Team detail Box Start */}
              <div className="team-detail-box">
                {/* Team Detail Title Start */}
                <div className="team-detail-title">
                  <h3>Get touch with us</h3>
                </div>
                {/* Team Detail Title End */}

                {/* Team Detail List Start */}
                <div className="team-detail-list">
                  {/* Team Detail Item Start */}
                  <div className="team-detail-item">
                    <div className="icon-box">
                      <img src="/images/sidebar-team-detail-1.svg" alt="" />
                    </div>
                    <div className="team-detail-content">
                      <h3>department:</h3>
                      <p>industrial engineering</p>
                    </div>
                  </div>
                  {/* Team Detail Item End */}

                  {/* Team Detail Item Start */}
                  <div className="team-detail-item">
                    <div className="icon-box">
                      <img src="/images/sidebar-team-detail-2.svg" alt="" />
                    </div>
                    <div className="team-detail-content">
                      <h3>experience:</h3>
                      <p>15 Year</p>
                    </div>
                  </div>
                  {/* Team Detail Item End */}

                  {/* Team Detail Item Start */}
                  <div className="team-detail-item">
                    <div className="icon-box">
                      <img src="/images/icon-mail.svg" alt="" />
                    </div>
                    <div className="team-detail-content">
                      <h3>email:</h3>
                      <p>brooklynsimmons58@gmail.com</p>
                    </div>
                  </div>
                  {/* Team Detail Item End */}

                  {/* Team Detail Item Start */}
                  <div className="team-detail-item">
                    <div className="icon-box">
                      <img src="/images/icon-phone.svg" alt="" />
                    </div>
                    <div className="team-detail-content">
                      <h3>phone:</h3>
                      <p>+91 - 123 544 789</p>
                    </div>
                  </div>
                  {/* Team Detail Item End */}
                </div>
                {/* Team Detail List End */}
              </div>
              {/* Team detail Box End */}
            </div>
            {/* Team Member Sidebar End */}
          </div>

          <div className="col-lg-8">
            {/* Team Member Content Start */}
            <div className="team-member-content">
              {/* Team Member Info Start */}
              <div className="team-member-info">
                <h2 className="text-anime-style-2" data-cursor="-opaque">Personal <span>info</span></h2>
                <p>Hello there, my name is Brooklyn Simmons . I am a Engineer of industry. Collaborative administrate empowered markets via plug-and-play networks. Proactively envisioned multimedia based expertise and cross-media growth strategies seamlessly visualize quality intellectual capital without superior.</p>
                <p>Having worked in various capacities, [Name] possesses extensive experience in both residential and commercial roofing projects. [He/She/They] began [his/her/their] career as a [initial position, e.g., roofing laborer], where [he/she/they] honed essential skills in roof installation and repair. Over the years, [Name] advanced to [current position, e.g., Lead Roofer], where [he/she/they] now oversees a team of skilled professionals, ensuring that each project is completed efficiently and to the highest standards.</p>
              </div>
              {/* Team Member Info End */}

              {/* Team Member Skills Feature Start */}
              <div className="team-member-skills-feature">
                {/* Team Member Skills Start */}
                <div className="team-member-skills">
                  <h2 className="text-anime-style-2" data-cursor="-opaque">Expertise & <span>skills</span></h2>
                  <p>Our team brings extensive expertise and skills in industrial automation, robotics.</p>

                  {/* Skills Progress Bar Start */}
                  <div className="skills-progress-bar">
                    {/* Skill Item Start */}
                    <div className="skillbar" data-percent="56%">
                      <div className="skill-data">
                        <div className="skill-title">engineering</div>
                        <div className="skill-no">56%</div>
                      </div>
                      <div className="skill-progress">
                        <div className="count-bar" style={{width: '56%'}}></div>
                      </div>
                    </div>
                    {/* Skill Item End */}
                  </div>
                  {/* Skills Progress Bar End */}

                  {/* Skills Progress Bar Start */}
                  <div className="skills-progress-bar">
                    {/* Skill Item Start */}
                    <div className="skillbar" data-percent="89%">
                      <div className="skill-data">
                        <div className="skill-title">quality control</div>
                        <div className="skill-no">89%</div>
                      </div>
                      <div className="skill-progress">
                        <div className="count-bar" style={{width: '89%'}}></div>
                      </div>
                    </div>
                    {/* Skill Item End */}
                  </div>
                  {/* Skills Progress Bar End */}

                  {/* Skills Progress Bar Start */}
                  <div className="skills-progress-bar">
                    {/* Skill Item Start */}
                    <div className="skillbar" data-percent="85%">
                      <div className="skill-data">
                        <div className="skill-title">data analytics</div>
                        <div className="skill-no">85%</div>
                      </div>
                      <div className="skill-progress">
                        <div className="count-bar" style={{width: '85%'}}></div>
                      </div>
                    </div>
                    {/* Skill Item End */}
                  </div>
                  {/* Skills Progress Bar End */}
                </div>
                {/* Team Member Skills End */}
                
                {/* Team Member Feature Start */}
                <div className="team-member-feature">
                  <h2 className="text-anime-style-2" data-cursor="-opaque">Brooklyn <span>feature</span></h2>
                  <p>Our Factory & Industry team comprises skilled professionals in robotics, engineering.</p>

                  <ul>
                    <li>project manager for industrial systems</li>
                    <li>sustainability and efficiency consultant</li>
                    <li>training and development coordinator</li>
                    <li>maintenance and reliability engineer</li>
                  </ul>
                </div>
                {/* Team Member Feature End */}
              </div>
              {/* Team Member Skills Feature End */}

              {/* Page Contact Form Start */}
              <div className="contact-us-form">
                <div className="section-title">
                  <h2 className="text-anime-style-2" data-cursor="-opaque">Contact <span>me</span></h2>
                </div>

                <div className="contact-form">
                  {/* Contact Form Start */}
                  <form id="contactFormTeam" onSubmit={handleSubmit} className="wow fadeInUp" data-wow-delay="0.5s">
                    <div className="row">
                      <div className="form-group col-md-6 mb-4">
                        <input type="text" name="fname" className="form-control" id="fname" placeholder="Enter first name" required />
                        <div className="help-block with-errors"></div>
                      </div>

                      <div className="form-group col-md-6 mb-4">
                        <input type="text" name="lname" className="form-control" id="lname" placeholder="Enter last name" required />
                        <div className="help-block with-errors"></div>
                      </div>

                      <div className="form-group col-md-6 mb-4">
                        <input type="email" name ="email" className="form-control" id="email" placeholder="Enter your e-mail" required />
                        <div className="help-block with-errors"></div>
                      </div>

                      <div className="form-group col-md-6 mb-4">
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
            {/* Team Member Content End */}
          </div>
        </div>
      </div>
    </div>
  );
}
