export default function Features() {
  return (
    <div className="our-features">
      <div className="container">
        <div className="row section-row align-items-center">
          <div className="col-lg-6">
            {/* Section Title Start */}
            <div className="section-title">
              <h3 className="wow fadeInUp">our key feature</h3>
              <h2 className="text-anime-style-2" data-cursor="-opaque">Core strengths in <span>industrial innovation</span></h2>
            </div>
            {/* Section Title End */}
          </div>

          <div className="col-lg-6">
            {/* Section Title Content Start */}
            <div className="section-title-content wow fadeInUp" data-wow-delay="0.25s">
              <p>Our expertise in industrial innovation combines advanced technology, sustainable practices, and a skilled workforce to deliver efficient, future-ready solutions that drive industry progress.</p>
            </div>
            {/* Section Title Content End */}
          </div>
        </div>

        <div className="row no-gutters">
          {/* Our Features Boxes Start */}
          <div className="our-features-boxes">
            {/* Our Features Item Start */}
            <div className="our-features-item">
              <div className="icon-box">
                <img src="/images/icon-features-1.svg" alt="" />
              </div>
              <div className="features-item-content">
                <h3>Advanced Technology Integration</h3>
                <p>We integrate cutting-edge technologies into every aspect of our operations, enhancing efficiency, precision, and innovation to deliver superior industrial solutions.</p>
              </div>
            </div>
            {/* Our Features Item End */}

            {/* Our Features Item Start */}
            <div className="our-features-item">
              <div className="icon-box">
                <img src="/images/icon-features-2.svg" alt="" />
              </div>
              <div className="features-item-content">
                <h3>Uncompromising Quality Standards</h3>
                <p>We uphold the highest quality standards across all processes, ensuring consistency, reliability, and excellence in every product and service we deliver.</p>
              </div>
            </div>
            {/* Our Features Item End */}

            {/* Our Features Item Start */}
            <div className="our-features-item">
              <div className="icon-box">
                <img src="/images/icon-features-3.svg" alt="" />
              </div>
              <div className="features-item-content">
                <h3>Continuous Innovation and R&D</h3>
                <p>We prioritize ongoing research and development to drive continuous innovation, staying ahead of industry trends and creating advanced solutions that meet evolving market demands.</p>
              </div>
            </div>
            {/* Our Features Item End */}

            {/* Our Features Item Start */}
            <div className="our-features-item features-image-box">
               <figure className="image-anime">
                  <img src="/images/features-box-image.jpg" alt="" />
               </figure>
            </div>
            {/* Our Features Item End */}
          </div>
          {/* Our Features Boxes End */}
        </div>
      </div>
    </div>
  );
}
