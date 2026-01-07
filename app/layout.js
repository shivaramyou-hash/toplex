import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScriptController from "@/components/ScriptController";

export const metadata = {
  title: "Toplax - Factory & Industry HTML Template",
  description: "Toplax Factory & Industry Template",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1" />
        <meta name="author" content="Awaiken" />
        {/* Favicon Icon */}
        <link rel="shortcut icon" type="image/x-icon" href="/images/favicon.png" />
        {/* Google Fonts Css */}
        <link rel="preconnect" href="https://fonts.googleapis.com/" />
        <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap" rel="stylesheet" />
        {/* Bootstrap Css */}
        <link href="/css/bootstrap.min.css" rel="stylesheet" media="screen" />
        {/* SlickNav Css */}
        <link href="/css/slicknav.min.css" rel="stylesheet" />
        {/* Swiper Css */}
        <link rel="stylesheet" href="/css/swiper-bundle.min.css" />
        {/* Font Awesome Icon Css */}
        <link href="/css/all.css" rel="stylesheet" media="screen" />
        {/* Animated Css */}
        <link href="/css/animate.css" rel="stylesheet" />
        {/* Magnific Popup Core Css File */}
        <link rel="stylesheet" href="/css/magnific-popup.css" />
        {/* Mouse Cursor Css File */}
        <link rel="stylesheet" href="/css/mousecursor.css" />
        {/* Main Custom Css */}
        <link href="/css/custom.css" rel="stylesheet" media="screen" />
      </head>
      <body>
        <div className="preloader">
            <div className="loading-container">
                <div className="loading"></div>
                <div id="loading-icon"><img src="/images/loader.svg" alt="" /></div>
            </div>
        </div>
        
        <Header />
        
        <ScriptController />

        {children}

        <Footer />

        {/* Scripts */}
        <Script src="/js/jquery-3.7.1.min.js" strategy="beforeInteractive" />
        <Script src="/js/bootstrap.min.js" strategy="lazyOnload" />
        <Script src="/js/validator.min.js" strategy="lazyOnload" />
        <Script src="/js/jquery.slicknav.js" strategy="lazyOnload" />
        <Script src="/js/swiper-bundle.min.js" strategy="lazyOnload" />
        <Script src="/js/jquery.waypoints.min.js" strategy="lazyOnload" />
        <Script src="/js/jquery.counterup.min.js" strategy="lazyOnload" />
        <Script src="/js/isotope.min.js" strategy="lazyOnload" />
        <Script src="/js/jquery.magnific-popup.min.js" strategy="lazyOnload" />
        <Script src="/js/SmoothScroll.js" strategy="lazyOnload" />
        <Script src="/js/parallaxie.js" strategy="lazyOnload" />
        <Script src="/js/gsap.min.js" strategy="lazyOnload" />
        <Script src="/js/magiccursor.js" strategy="lazyOnload" />
        <Script src="/js/SplitText.js" strategy="lazyOnload" />
        <Script src="/js/ScrollTrigger.min.js" strategy="lazyOnload" />
        <Script src="/js/jquery.mb.YTPlayer.min.js" strategy="lazyOnload" />
        <Script src="/js/wow.js" strategy="lazyOnload" />
        <Script src="/js/function.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
