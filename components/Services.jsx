import Link from "next/link";

export default function Services() {
  return (
    <>
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

      <div className="our-services-list">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* Services List Box Start */}
              <div className="services-list-box">
                {/* Service Item Start */}
                <div className="service-item">
                  <div className="icon-box">
                    <img src="/images/icon-service-1.svg" alt="" />
                  </div>

                  <div className="service-body">
                    <h3>custom manufacturing solution</h3>
                  </div>

                  <div className="service-footer">
                    <Link href="/service-single" className="service-btn">
                      <img src="/images/arrow-dark.svg" alt="" />
                    </Link>
                  </div>
                </div>
                {/* Service Item End */}

                {/* Service Item Start */}
                <div className="service-item">
                  <div className="icon-box">
                    <img src="/images/icon-service-2.svg" alt="" />
                  </div>

                  <div className="service-body">
                    <h3>industrial automation and robotics</h3>
                  </div>

                  <div className="service-footer">
                    <Link href="/service-single" className="service-btn">
                      <img src="/images/arrow-dark.svg" alt="" />
                    </Link>
                  </div>
                </div>
                {/* Service Item End */}

                {/* Service Item Start */}
                <div className="service-item">
                  <div className="icon-box">
                    <img src="/images/icon-service-3.svg" alt="" />
                  </div>

                  <div className="service-body">
                    <h3>product design and prototyping</h3>
                  </div>

                  <div className="service-footer">
                    <Link href="/service-single" className="service-btn">
                      <img src="/images/arrow-dark.svg" alt="" />
                    </Link>
                  </div>
                </div>
                {/* Service Item End */}

                {/* Service Item Start */}
                <div className="service-item">
                  <div className="icon-box">
                    <img src="/images/icon-service-4.svg" alt="" />
                  </div>

                  <div className="service-body">
                    <h3>equipment maintenance support</h3>
                  </div>

                  <div className="service-footer">
                    <Link href="/service-single" className="service-btn">
                      <img src="/images/arrow-dark.svg" alt="" />
                    </Link>
                  </div>
                </div>
                {/* Service Item End */}
              </div>
              {/* Services List Box End */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
