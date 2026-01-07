export default function Process() {
  return (
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
                <img src="/images/our-process-image.jpg" alt="" />
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
  );
}
