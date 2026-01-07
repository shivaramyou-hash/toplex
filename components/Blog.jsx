import Link from "next/link";

export default function Blog() {
  return (
    <div className="our-blog">
      <div className="container">
        <div className="row section-row align-items-center">
          <div className="col-lg-5">
            {/* Section Title Start */}
            <div className="section-title">
              <h3 className="wow fadeInUp">latest blog</h3>
              <h2 className="text-anime-style-2" data-cursor="-opaque">Insights from our <span>latest blogs</span></h2>
            </div>
            {/* Section Title End */}
          </div>

          <div className="col-lg-7">
            {/* Section Title Content Start */}
            <div className="section-title-content wow fadeInUp" data-wow-delay="0.25s">
              <p>Stay updated with the latest trends, innovations, and expert insights in the manufacturing and industrial sectors</p>
            </div>
            {/* Section Title Content End */}
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            {/* Post Item Start */}
            <div className="post-item wow fadeInUp">
              {/* Post Featured Image Start*/}
              <div className="post-featured-image">
                <figure>
                  <Link href="/blog-single" className="image-anime" data-cursor-text="View">
                    <img src="/images/blog-1.jpg" alt="" />
                  </Link>
                </figure>
              </div>
              {/* Post Featured Image End */}

              {/* Post Item Body Start */}
              <div className="post-item-body">
                {/* Post Item Content Start */}
                <div className="post-item-content">
                  <h2><Link href="/blog-single">Sustainable Practices Reducing Waste in Industrial Production</Link></h2>
                </div>
                {/* Post Item Content End */}

                {/* Post Item Button Start */}
                <div className="post-item-btn">
                  <Link href="/blog-single"><img src="/images/arrow-white.svg" alt="" /></Link>
                </div>
                {/* Post Item Button End */}
              </div>
              {/* Post Item Body End */}
            </div>
            {/* Post Item End */}
          </div>

          <div className="col-md-6">
            {/* Post Item Start */}
            <div className="post-item wow fadeInUp">
              {/* Post Featured Image Start*/}
              <div className="post-featured-image">
                <figure>
                  <Link href="/blog-single" className="image-anime" data-cursor-text="View">
                    <img src="/images/blog-2.jpg" alt="" />
                  </Link>
                </figure>
              </div>
              {/* Post Featured Image End */}

              {/* Post Item Body Start */}
              <div className="post-item-body">
                {/* Post Item Content Start */}
                <div className="post-item-content">
                  <h2><Link href="/blog-single">Advance Robotics Revolutionizing Industrial Workflow</Link></h2>
                </div>
                {/* Post Item Content End */}

                {/* Post Item Button Start */}
                <div className="post-item-btn">
                  <Link href="/blog-single"><img src="/images/arrow-white.svg" alt="" /></Link>
                </div>
                {/* Post Item Button End */}
              </div>
              {/* Post Item Body End */}
            </div>
            {/* Post Item End */}
          </div>
        </div>
      </div>
    </div>
  );
}
