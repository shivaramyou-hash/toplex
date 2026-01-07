import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Story from "@/components/Story";
import WhatWeDo from "@/components/WhatWeDo";
import Work from "@/components/Work";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import Testimonial from "@/components/Testimonial";
import Blog from "@/components/Blog";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Story />
      <WhatWeDo />
      <Work />
      <Process />
      <Pricing />
      <Testimonial />
      <Blog />
    </>
  );
}
