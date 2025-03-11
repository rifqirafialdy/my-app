import { FC } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Profile from "@/components/Profile";
import ContactForm from "@/components/Form";
const ContactUs: FC = () => {
    return (
      <div>
        <Header />
        
        <section className="mt-40 mb-24 mx-20 flex gap-10">
          <Profile />
          <ContactForm/>
        </section>
        
        <Footer />
      </div>
    );
  };
  
  export default ContactUs;