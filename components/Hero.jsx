export default function Hero() {
  return (
    <div className="hero parallaxie">
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

          <div className="col-lg-12">
            {/* Excellence Innovating List Start */}
            <div className="excellence-innovating-list wow fadeInUp" data-wow-delay="0.6s">
              <ul>
                <li>Advanced Manufacturing Solutions</li>
                <li>Quality Assurance Systems</li>
                <li>State-of-the-Art Technology</li>
              </ul>
            </div>
            {/* Excellence Innovating List End */}
          </div>
        </div>
      </div>
    </div>
  );
}
