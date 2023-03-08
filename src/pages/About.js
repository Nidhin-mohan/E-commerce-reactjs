import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <section class="text-gray-600 body-font mb-24">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Elevating E-Commerce Growth
              <br class="hidden lg:inline-block" />
              Revolutionizing the Way You Shop Online
            </h1>
            <p class="mb-8 leading-relaxed">
              At FlipZone E-commerce, we strive to provide our customers with an
              exceptional online shopping experience. Our user-friendly platform
              makes it easy to find and purchase the products you need, and our
              efficient delivery system ensures your order arrives on time. We
              offer a wide selection of high-quality products at competitive
              prices, and our knowledgeable customer service team is always
              ready to assist with any questions or concerns. Shop with
              confidence at XYZ E-commerce and enjoy the convenience of online
              shopping at its best.
            </p>
            <div class="flex justify-center">
              <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Button
              </button>
              <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Button
              </button>
            </div>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src="https://dummyimage.com/720x600"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
