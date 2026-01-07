export default function PageFaq() {
  return (
    <div className="page-faqs">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            {/* Faqs Sidebar Start */}
            <div className="faq-sidebar">
              {/* Faqs Catagery List Start */}
              <div className="faq-catagery-list wow fadeInUp">
                <ul>
                  <li><a href="#general_information">general information</a></li>
                  <li><a href="#implementation_integration">implementation and integration</a></li>
                  <li><a href="#cost_and_ROI">cost and ROI</a></li>
                  <li><a href="#technology_innovation">technology and innovation</a></li>
                </ul>
              </div>
              {/* Faqs Catagery List End */}

              {/* Sidebar CTA Box Start */}
              <div className="sidebar-cta-box wow fadeInUp" data-wow-delay="0.25s">
                {/* Sidebar Image Start */}
                <div className="sidebar-cta-logo">
                  <img src="/images/footer-logo.svg" alt="" />
                </div>
                {/* Sidebar Image End */}

                {/* Sidebar CTA Body Start */}
                <div className="sidebar-cta-Body">
                  {/* Sidebar CTA Content Start */}
                  <div className="sidebar-cta-content">
                    <h3>Need <span>help!</span></h3>
                    <p>Got questions or need assistance with your Industry needs?</p>
                  </div>
                  {/* Sidebar CTA Content End */}

                  {/* Sidebar CTA Contact List Start */}
                  <div className="sidebar-cta-contact-list">
                    {/* Sidebar CTA Contact Item Start */}
                    <div className="sidebar-cta-contact-item">
                      <div className="icon-box">
                        <img src="/images/icon-phone-accent.svg" alt="" />
                      </div>

                      <div className="cta-contact-item-title">
                        <h3>+1 840 841 256</h3>
                      </div>
                    </div>
                    {/* Sidebar CTA Contact Item End */}

                    {/* Sidebar CTA Contact Item Start */}
                    <div className="sidebar-cta-contact-item">
                      <div className="icon-box">
                        <img src="/images/icon-mail-accent.svg" alt="" />
                      </div>

                      <div className="cta-contact-item-title">
                        <h3>info@domain.com</h3>
                      </div>
                    </div>
                    {/* Sidebar CTA Contact Item End */}
                  </div>
                  {/* Sidebar CTA Contact List End */}
                </div>
                {/* Sidebar CTA Body End */}
              </div>
              {/* Sidebar CTA Box End */}
            </div>
            {/* Faqs Sidebar End */}
          </div>

          <div className="col-lg-8">
            <div className="page-faqs-catagery">
              {/* FAQs section start */}
              <div className="our-faq-section page-faq-accordion" id="general_information">
                <div className="section-title">
                  <h2 className="text-anime-style-2" data-cursor="-opaque">General<span> information</span></h2>
                </div>
                {/* FAQ Accordion Start */}
                <div className="faq-accordion" id="accordion">
                  {/* FAQ Item Start */}
                  <div className="accordion-item wow fadeInUp">
                    <h2 className="accordion-header" id="heading1">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                        What industries do you serve?
                      </button>
                    </h2>
                    <div id="collapse1" class="accordion-collapse collapse show" aria-labelledby="heading1" data-bs-parent="#accordion">
                      <div className="accordion-body">
                        <p>We implement rigorous quality control measures at every stage of production, ensuring consistency and high standards.</p>
                      </div>
                    </div>
                  </div>
                  {/* FAQ Item End */}

                  {/* FAQ Item Start */}
                  <div className="accordion-item wow fadeInUp" data-wow-delay="0.2s">
                    <h2 className="accordion-header" id="heading2">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                        How do you ensure product quality?
                      </button>
                    </h2>
                    <div id="collapse2" class="accordion-collapse collapse" aria-labelledby="heading2" data-bs-parent="#accordion">
                      <div className="accordion-body">
                        <p>We implement rigorous quality control measures at every stage of production, ensuring consistency and high standards.</p>
                      </div>
                    </div>
                  </div>
                  {/* FAQ Item End */}

                  {/* FAQ Item Start */}
                  <div className="accordion-item wow fadeInUp" data-wow-delay="0.4s">
                    <h2 className="accordion-header" id="heading3">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                        What sustainability practices do you follow?
                      </button>
                    </h2>
                    <div id="collapse3" class="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#accordion">
                      <div className="accordion-body">
                        <p>We implement rigorous quality control measures at every stage of production, ensuring consistency and high standards.</p>
                      </div>
                    </div>
                  </div>
                  {/* FAQ Item End */}

                  {/* FAQ Item Start */}
                  <div className="accordion-item wow fadeInUp" data-wow-delay="0.6s">
                    <h2 className="accordion-header" id="heading4">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                        Do you offer customized solutions?
                      </button>
                    </h2>
                    <div id="collapse4" class="accordion-collapse collapse" aria-labelledby="heading4" data-bs-parent="#accordion">
                      <div className="accordion-body">
                        <p>We implement rigorous quality control measures at every stage of production, ensuring consistency and high standards.</p>
                      </div>
                    </div>
                  </div>
                  {/* FAQ Item End */}

                  {/* FAQ Item Start */}
                  <div className="accordion-item wow fadeInUp" data-wow-delay="0.8s">
                    <h2 className="accordion-header" id="heading5">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                        How do you handle safety in the workplace?
                      </button>
                    </h2>
                    <div id="collapse5" class="accordion-collapse collapse" aria-labelledby="heading5" data-bs-parent="#accordion">
                      <div className="accordion-body">
                        <p>We implement rigorous quality control measures at every stage of production, ensuring consistency and high standards.</p>
                      </div>
                    </div>
                  </div>
                  {/* FAQ Item End */}
                </div>
                {/* FAQ Accordion End */}
              </div>
              {/* FAQs section End */}

              {/* FAQs section start */}
              <div className="our-faq-section page-faq-accordion" id="implementation_integration">
                <div className="section-title">
                  <h2 className="text-anime-style-2" data-cursor="-opaque">Implementation and<span> integration</span></h2>
                </div>
                {/* FAQ Accordion Start */}
                <div className="faq-accordion" id="accordion1">
                  {/* FAQ Item Start */}
                  <div className="accordion-item wow fadeInUp">
                    <h2 className="accordion-header" id="heading6">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="true" aria-controls="collapse6">
                        What industries do you serve?
                      </button>
                    </h2>
                    <div id="collapse6" class="accordion-collapse collapse show" aria-labelledby="heading6" data-bs-parent="#accordion1">
                      <div className="accordion-body">
                        <p>We implement rigorous quality control measures at every stage of production, ensuring consistency and high standards.</p>
                      </div>
                    </div>
                  </div>
                  {/* FAQ Item End */}

                  {/* FAQ Item Start */}
                  <div className="accordion-item wow fadeInUp" data-wow-delay="0.2s">
                    <h2 className="accordion-header" id="heading7">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse7" aria-expanded="false" aria-controls="collapse7">
                        How do you ensure product quality?
                      </button>
                    </h2>
                    <div id="collapse7" class="accordion-collapse collapse" aria-labelledby="heading7" data-bs-parent="#accordion1">
                      <div className="accordion-body">
                        <p>We implement rigorous quality control measures at every stage of production, ensuring consistency and high standards.</p>
                      </div>
                    </div>
                  </div>
                  {/* FAQ Item End */}

                  {/* FAQ Item Start */}
                  <div className="accordion-item wow fadeInUp" data-wow-delay="0.4s">
                    <h2 className="accordion-header" id="heading8">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse8" aria-expanded="false" aria-controls="collapse8">
                        What sustainability practices do you follow?
                      </button>
                    </h2>
                    <div id="collapse8" class="accordion-collapse collapse" aria-labelledby="heading8" data-bs-parent="#accordion1">
                      <div className="accordion-body">
                        <p>We implement rigorous quality control measures at every stage of production, ensuring consistency and high standards.</p>
                      </div>
                    </div>
                  </div>
                  {/* FAQ Item End */}
                </div>
                {/* FAQ Accordion End */}
              </div>
              {/* FAQs section End */}

              {/* FAQs section start */}
              <div className="our-faq-section page-faq-accordion" id="cost_and_ROI">
                <div className="section-title">
                  <h2 className="text-anime-style-2" data-cursor="-opaque">Cost and<span> ROI</span></h2>
                </div>
                {/* FAQ Accordion Start */}
                <div className="faq-accordion" id="accordion2">
                  {/* FAQ Item Start */}
                  <div className="accordion-item wow fadeInUp">
                    <h2 className="accordion-header" id="heading9">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse9" aria-expanded="true" aria-controls="collapse9">
                        What industries do you serve?
                      </button>
                    </h2>
                    <div id="collapse9" class="accordion-collapse collapse show" aria-labelledby="heading9" data-bs-parent="#accordion2">
                      <div className="accordion-body">
                        <p>We implement rigorous quality control measures at every stage of production, ensuring consistency and high standards.</p>
                      </div>
                    </div>
                  </div>
                  {/* FAQ Item End */}

                  {/* FAQ Item Start */}
                  <div className="accordion-item wow fadeInUp" data-wow-delay="0.2s">
                    <h2 className="accordion-header" id="heading10">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse10" aria-expanded="false" aria-controls="collapse10">
                        How do you ensure product quality?
                      </button>
                    </h2>
                    <div id="collapse10" class="accordion-collapse collapse" aria-labelledby="heading10" data-bs-parent="#accordion2">
                      <div className="accordion-body">
                        <p>We implement rigorous quality control measures at every stage of production, ensuring consistency and high standards.</p>
                      </div>
                    </div>
                  </div>
                  {/* FAQ Item End */}

                  {/* FAQ Item Start */}
                  <div className="accordion-item wow fadeInUp" data-wow-delay="0.4s">
                    <h2 className="accordion-header" id="heading11">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse11" aria-expanded="false" aria-controls="collapse11">
                        What sustainability practices do you follow?
                      </button>
                    </h2>
                    <div id="collapse11" class="accordion-collapse collapse" aria-labelledby="heading11" data-bs-parent="#accordion2">
                      <div className="accordion-body">
                        <p>We implement rigorous quality control measures at every stage of production, ensuring consistency and high standards.</p>
                      </div>
                    </div>
                  </div>
                  {/* FAQ Item End */}

                  {/* FAQ Item Start */}
                  <div className="accordion-item wow fadeInUp" data-wow-delay="0.6s">
                    <h2 className="accordion-header" id="heading12">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse12" aria-expanded="true" aria-controls="collapse12">
                        Do you offer customized solutions?
                      </button>
                    </h2>
                    <div id="collapse12" class="accordion-collapse collapse show" aria-labelledby="heading12" data-bs-parent="#accordion2">
                      <div className="accordion-body">
                        <p>We implement rigorous quality control measures at every stage of production, ensuring consistency and high standards.</p>
                      </div>
                    </div>
                  </div>
                  {/* FAQ Item End */}
                </div>
                {/* FAQ Accordion End */}
              </div>
              {/* FAQs section End */}

              {/* FAQs section start */}
              <div className="our-faq-section page-faq-accordion" id="technology_innovation">
                <div className="section-title">
                  <h2 className="text-anime-style-2" data-cursor="-opaque">Technology and<span> innovation</span></h2>
                </div>
                {/* FAQ Accordion Start */}
                <div className="faq-accordion" id="accordion3">
                  {/* FAQ Item Start */}
                  <div className="accordion-item wow fadeInUp">
                    <h2 className="accordion-header" id="heading13">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse13" aria-expanded="false" aria-controls="collapse13">
                        What industries do you serve?
                      </button>
                    </h2>
                    <div id="collapse13" class="accordion-collapse collapse" aria-labelledby="heading13" data-bs-parent="#accordion3">
                      <div className="accordion-body">
                        <p>We implement rigorous quality control measures at every stage of production, ensuring consistency and high standards.</p>
                      </div>
                    </div>
                  </div>
                  {/* FAQ Item End */}

                  {/* FAQ Item Start */}
                  <div className="accordion-item wow fadeInUp" data-wow-delay="0.2s">
                    <h2 className="accordion-header" id="heading14">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse14" aria-expanded="true" aria-controls="collapse14">
                        How do you ensure product quality?
                      </button>
                    </h2>
                    <div id="collapse14" class="accordion-collapse collapse show" aria-labelledby="heading14" data-bs-parent="#accordion3">
                      <div className="accordion-body">
                        <p>We implement rigorous quality control measures at every stage of production, ensuring consistency and high standards.</p>
                      </div>
                    </div>
                  </div>
                  {/* FAQ Item End */}

                  {/* FAQ Item Start */}
                  <div className="accordion-item wow fadeInUp" data-wow-delay="0.4s">
                    <h2 className="accordion-header" id="heading15">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse15" aria-expanded="false" aria-controls="collapse15">
                        What sustainability practices do you follow?
                      </button>
                    </h2>
                    <div id="collapse15" class="accordion-collapse collapse" aria-labelledby="heading15" data-bs-parent="#accordion3">
                      <div className="accordion-body">
                        <p>We implement rigorous quality control measures at every stage of production, ensuring consistency and high standards.</p>
                      </div>
                    </div>
                  </div>
                  {/* FAQ Item End */}

                  {/* FAQ Item Start */}
                  <div className="accordion-item wow fadeInUp" data-wow-delay="0.6s">
                    <h2 className="accordion-header" id="heading16">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse16" aria-expanded="false" aria-controls="collapse16">
                        Do you offer customized solutions?
                      </button>
                    </h2>
                    <div id="collapse16" class="accordion-collapse collapse" aria-labelledby="heading16" data-bs-parent="#accordion3">
                      <div className="accordion-body">
                        <p>We implement rigorous quality control measures at every stage of production, ensuring consistency and high standards.</p>
                      </div>
                    </div>
                  </div>
                  {/* FAQ Item End */}

                  {/* FAQ Item Start */}
                  <div className="accordion-item wow fadeInUp" data-wow-delay="0.8s">
                    <h2 className="accordion-header" id="heading17">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse17" aria-expanded="false" aria-controls="collapse17">
                        How do you handle safety in the workplace?
                      </button>
                    </h2>
                    <div id="collapse17" class="accordion-collapse collapse" aria-labelledby="heading17" data-bs-parent="#accordion3">
                      <div className="accordion-body">
                        <p>We implement rigorous quality control measures at every stage of production, ensuring consistency and high standards.</p>
                      </div>
                    </div>
                  </div>
                  {/* FAQ Item End */}
                </div>
                {/* FAQ Accordion End */}
              </div>
              {/* FAQs section End */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
