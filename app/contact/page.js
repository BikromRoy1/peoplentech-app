import BranchOffice from '@/components/ContactUs/BranchOffice/BranchOffice';
import ContactForm from '@/components/ContactUs/ContactForm/ContactForm';
import GoogleMap from '@/components/ContactUs/GoogleMap/GoogleMap';
import GlobalLocation from '@/components/GlobalLocation/GlobalLocation';
import PageBanner from '@/components/PageBanner/PageBanner';

const Contact = () => {
  return (
    <div>
      <PageBanner
        title='Reach Out to Us for Any Inquiries'
        subtitle='Contact Us'
      />
      <ContactForm />
      <BranchOffice />
      <GlobalLocation />
      <GoogleMap />
    </div>
  );
};

export default Contact;
