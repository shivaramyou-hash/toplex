import PageHeader from "@/components/PageHeader";
import About from "@/components/About";
import MissionVision from "@/components/MissionVision";
import History from "@/components/History";
import WhatWeDo from "@/components/WhatWeDo";
import Features from "@/components/Features";
import Process from "@/components/Process";
import Team from "@/components/Team";
import Testimonial from "@/components/Testimonial";
import Faq from "@/components/Faq";

export default function AboutPage() {
  return (
    <>
      <PageHeader title="About" subtitle="Us" pageName="about us" />
      <About />
      <MissionVision />
      <History />
      <WhatWeDo />
      <Features />
      <Process />
      <Team />
      <Testimonial />
      <Faq />
    </>
  );
}
