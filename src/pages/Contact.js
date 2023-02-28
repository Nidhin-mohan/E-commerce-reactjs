import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";

const Contact = () => {
  return (
    <Layout title={"Contact us"}>
      <div className="flex flex-col md:flex-row justify-between items-center contactus">
        <div className="md:w-1/2">
          <img
            src="https://media.istockphoto.com/id/1311934969/photo/contact-us.jpg?s=612x612&w=0&k=20&c=_vmYyAX0aFi-sHH8eYS-tLLNfs1ZWXnNB8M7_KWwhgg="
            alt="contactus"
            className="w-full"
          />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h1 className="bg-gray-800 text-white text-center py-2">
            CONTACT US
          </h1>
          <p className="text-justify mt-2">
            For any query or information about our products, feel free to call
            us anytime. We are available 24x7.
          </p>
          <p className="mt-3 flex items-center">
            <BiMailSend className="mr-2" /> : www.help@ecommerceapp.com
          </p>
          <p className="mt-3 flex items-center">
            <BiPhoneCall className="mr-2" /> : 012-3456789
          </p>
          <p className="mt-3 flex items-center">
            <BiSupport className="mr-2" /> : 1800-0000-0000 (toll free)
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
