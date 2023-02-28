import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="  flex flex-wrap justify-center items-center h-2/3">
        <div className="flex w-full md:w-6/12 lg:w-6/12 xl:w-6/12">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            className="object-cover object-center rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full md:w-6/12 lg:w-6/12 xl:w-6/12 px-4">
          <p className="text-base text-justify mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            officiis obcaecati esse tempore unde ratione, eveniet mollitia,
            perferendis eius temporibus dicta blanditiis doloremque explicabo
            quasi sunt vero optio cum aperiam vel consectetur! Laborum enim
            accusantium atque, excepturi sapiente amet! Tenetur ducimus aut
            commodi illum quidem neque tempora nam.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
