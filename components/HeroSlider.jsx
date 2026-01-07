import Link from "next/link";

export default function HeroSlider() {
  return (
    <div className="hero hero-slider-layout">
        <div className="swiper">
            <div className="swiper-wrapper">
                {/* Hero Slide Start */}
                <div className="swiper-slide">
                    <div className="hero-slide">
                        {/* Slider Image Start */}
                        <div className="hero-slider-image">
                            <img src="/images/hero-bg.jpg" alt="" />
                        </div>
                        {/* Slider Image End */}

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
                                            <Link href="/contact" className="btn-default"><span>explore more</span></Link>
                                        </div>
                                        {/* Hero Button End */}
                                    </div>
                                    {/* Hero Content End */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Hero Slide End */}

                {/* Hero Slide Start */}
                <div className="swiper-slide">
                    <div className="hero-slide">
                        {/* Slider Image Start */}
                        <div className="hero-slider-image">
                            <img src="/images/hero-bg-2.jpg" alt="" />
                        </div>
                        {/* Slider Image End */}

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
                                            <Link href="/contact" className="btn-default"><span>explore more</span></Link>
                                        </div>
                                        {/* Hero Button End */}
                                    </div>
                                    {/* Hero Content End */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Hero Slide End */}
            </div>
            <div className="hero-pagination"></div>
        </div>        
    </div>
  );
}
