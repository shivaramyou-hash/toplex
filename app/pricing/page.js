import PageHeader from "@/components/PageHeader";
import PagePricing from "@/components/PagePricing";
import WhatWeDo from "@/components/WhatWeDo";
import Testimonial from "@/components/Testimonial";

export default function PricingPage() {
  return (
    <>
      <PageHeader title="Pricing" subtitle="Plan" pageName="pricing" />
      <PagePricing />
      <WhatWeDo />
      <Testimonial />
    </>
  );
}
