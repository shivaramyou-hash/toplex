import PageHeader from "@/components/PageHeader";
import PageServices from "@/components/PageServices";
import WhatWeDo from "@/components/WhatWeDo";
import Story from "@/components/Story";
import Testimonial from "@/components/Testimonial";
import Faq from "@/components/Faq";

export default function ServicesPage() {
  return (
    <>
      <PageHeader title="Our" subtitle="Services" pageName="our services" />
      <PageServices />
      <WhatWeDo />
      <Story />
      <Testimonial />
      <Faq />
    </>
  );
}
