export default function Pricing() {
  return (
    <div className="our-pricing">
      <div className="container">
        <div className="row section-row align-items-center">
          <div className="col-lg-6">
            {/* Section Title Start */}
            <div className="section-title">
              <h3 className="wow fadeInUp">pricing plan</h3>
              <h2 className="text-anime-style-2" data-cursor="-opaque">Transparent pricing for <span>every solution</span></h2>
            </div>
            {/* Section Title End */}
          </div>

          <div className="col-lg-6">
            {/* Section Title Content Start */}
            <div className="section-title-content wow fadeInUp" data-wow-delay="0.25s">
              <p>We believe in providing clear and upfront pricing to ensure that you understand the value of our services.</p>
            </div>
            {/* Section Title Content End */}
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6">
            {/* Pricing Box Start */}
            <div className="pricing-box box-1 wow fadeInUp">
              {/* Pricing Title Start */}
              <div className="pricing-title">
                <h2><sup>$</sup>29<sub>/month</sub></h2>
                <h3>basic plan</h3>
              </div>
              {/* Pricing Title End */}

              {/* Pricing List Start */}
              <div className="pricing-list">
                <ul>
                  <li>Standard Manufacturing Services</li>
                  <li>Quality Control Checks</li>
                  <li>Technical Support</li>
                  <li>Monthly Progress Reports</li>
                </ul>
              </div>
              {/* Pricing List End */}

              {/* Pricing Button Start */}
              <div className="pricing-btn">
                <a href="#" className="btn-default"><span>purchase now</span></a>
              </div>
              {/* Pricing Button End */}
            </div>
            {/* Pricing Box End */}
          </div>

          <div className="col-lg-4 col-md-6">
            {/* Pricing Box Start */}
            <div className="pricing-box highlighted-box box-2 wow fadeInUp" data-wow-delay="0.2s">
              {/* Pricing Title Start */}
              <div className="pricing-title">
                <h2><sup>$</sup>39<sub>/month</sub></h2>
                <h3>advanced plan</h3>
              </div>
              {/* Pricing Title End */}

              {/* Pricing List Start */}
              <div className="pricing-list">
                <ul>
                  <li>Standard Manufacturing Services</li>
                  <li>Quality Control Checks</li>
                  <li>Technical Support</li>
                  <li>Monthly Progress Reports</li>
                </ul>
              </div>
              {/* Pricing List End */}

              {/* Pricing Button Start */}
              <div className="pricing-btn">
                <a href="#" className="btn-default btn-highlighted"><span>purchase now</span></a>
              </div>
              {/* Pricing Button End */}
            </div>
            {/* Pricing Box End */}
          </div>

          <div className="col-lg-4 col-md-6">
            {/* Pricing Box Start */}
            <div className="pricing-box box-3 wow fadeInUp" data-wow-delay="0.4s">
              {/* Pricing Title Start */}
              <div className="pricing-title">
                <h2><sup>$</sup>49<sub>/month</sub></h2>
                <h3>premium plan</h3>
              </div>
              {/* Pricing Title End */}

              {/* Pricing List Start */}
              <div className="pricing-list">
                <ul>
                  <li>Standard Manufacturing Services</li>
                  <li>Quality Control Checks</li>
                  <li>Technical Support</li>
                  <li>Monthly Progress Reports</li>
                </ul>
              </div>
              {/* Pricing List End */}

              {/* Pricing Button Start */}
              <div className="pricing-btn">
                <a href="#" className="btn-default"><span>purchase now</span></a>
              </div>
              {/* Pricing Button End */}
            </div>
            {/* Pricing Box End */}
          </div>

          <div className="col-lg-12">
            {/* Pricing Benifit List Start */}
            <div className="pricing-benefit-list wow fadeInUp" data-wow-delay="0.6s">
              <ul>
                <li><img src="/images/icon-pricing-benefit-1.svg" alt="" />Get 30 day free trial</li>
                <li><img src="/images/icon-pricing-benefit-2.svg" alt="" />No any hidden fees pay</li>
                <li><img src="/images/icon-pricing-benefit-3.svg" alt="" />You can  cancel anytime </li>
              </ul>
            </div>
            {/* Pricing Benifit List End */}
          </div>
        </div>
      </div>
    </div>
  );
}
