import Link from "next/link";

export default function PageProjects() {
  return (
    <div className="page-projects">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* Choose Our Project Nav start */}
            <div className="our-Project-nav wow fadeInUp" data-wow-delay="0.4s">
              <ul>
                <li><a href="#" className="active-btn" data-filter="*">all</a></li>
                <li><a href="#" data-filter=".manufacturing">manufacturing</a></li>
                <li><a href="#" data-filter=".automation">automation</a></li>
                <li><a href="#" data-filter=".sustainability">sustainability</a></li>
                <li><a href="#" data-filter=".development">development</a></li>
                <li><a href="#" data-filter=".infrastructure">infrastructure</a></li>
              </ul>
            </div>
            {/* Choose Our Project Nav End */}
          </div>

          <div className="col-lg-12">
            {/* Project Item Boxes start */}
            <div className="row project-item-boxes align-items-center">
              <div className="col-md-6 project-item-box manufacturing automation">
                {/* Project Item Start */}
                <div className="project-item wow fadeInUp">
                  <div className="project-image">
                    <figure className="image-anime">
                      <img src="/images/project-1.jpg" alt="" />
                    </figure>
                  </div>                                
                  
                  <div className="project-tag">
                    <Link href="/project-single">manufacturing</Link>
                  </div>
                  
                  <div className="project-content">
                    <h3><Link href="/project-single">Total Quality Management Implementation</Link></h3>
                  </div>
                </div>
                {/* Project Item End */}
              </div>

              <div className="col-md-6 project-item-box automation sustainability development">
                {/* Project Item Start */}
                <div className="project-item wow fadeInUp" data-wow-delay="0.2s">
                  <div className="project-image">
                    <figure className="image-anime">
                      <img src="/images/project-2.jpg" alt="" />
                    </figure>
                  </div>                                
                  
                  <div className="project-tag">
                    <Link href="/project-single">automation</Link>
                  </div>
                  
                  <div className="project-content">
                    <h3><Link href="/project-single">Advanced Research in Material Science</Link></h3>
                  </div>
                </div>
                {/* Project Item End */}
              </div>

              <div className="col-md-6 project-item-box sustainability infrastructure">
                {/* Project Item Start */}
                <div className="project-item wow fadeInUp" data-wow-delay="0.4s">
                  <div className="project-image">
                    <figure className="image-anime">
                      <img src="/images/project-3.jpg" alt="" />
                    </figure>
                  </div>                                
                  
                  <div className="project-tag">
                    <Link href="/project-single">automation</Link>
                  </div>
                  
                  <div className="project-content">
                    <h3><Link href="/project-single">Workplace Safety Enhancement Initiative</Link></h3>
                  </div>
                </div>
                {/* Project Item End */}
              </div>

              <div className="col-md-6 project-item-box manufacturing development">
                {/* Project Item Start */}
                <div className="project-item wow fadeInUp" data-wow-delay="0.6s">
                  <div className="project-image">
                    <figure className="image-anime">
                      <img src="/images/project-4.jpg" alt="" />
                    </figure>
                  </div>                                
                  
                  <div className="project-tag">
                    <Link href="/project-single">development</Link>
                  </div>
                  
                  <div className="project-content">
                    <h3><Link href="/project-single">Robotic Process Automation Deployment</Link></h3>
                  </div>
                </div>
                {/* Project Item End */}
              </div>

              <div className="col-md-6 project-item-box automation manufacturing">
                {/* Project Item Start */}
                <div className="project-item wow fadeInUp" data-wow-delay="0.8s">
                  <div className="project-image">
                    <figure className="image-anime">
                      <img src="/images/project-5.jpg" alt="" />
                    </figure>
                  </div>                                
                  
                  <div className="project-tag">
                    <Link href="/project-single">sustainability</Link>
                  </div>
                  
                  <div className="project-content">
                    <h3><Link href="/project-single">Energy-Efficient Manufacturing Systems</Link></h3>
                  </div>
                </div>
                {/* Project Item End */}
              </div>

              <div className="col-md-6 project-item-box sustainability infrastructure">
                {/* Project Item Start */}
                <div className="project-item wow fadeInUp" data-wow-delay="1s">
                  <div className="project-image">
                    <figure className="image-anime">
                      <img src="/images/project-6.jpg" alt="" />
                    </figure>
                  </div>                                
                  
                  <div className="project-tag">
                    <Link href="/project-single">infrastructure</Link>
                  </div>
                  
                  <div className="project-content">
                    <h3><Link href="/project-single">Redesigning Factory Layouts for Efficiency</Link></h3>
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
  );
}
