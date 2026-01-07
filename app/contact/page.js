import PageHeader from "@/components/PageHeader";
import ContactContent from "@/components/ContactContent";
import GoogleMap from "@/components/GoogleMap";

export default function ContactPage() {
  return (
    <>
      <PageHeader title="Contact" subtitle="Us" pageName="contact us" />
      <ContactContent />
      <GoogleMap />
    </>
  );
}
