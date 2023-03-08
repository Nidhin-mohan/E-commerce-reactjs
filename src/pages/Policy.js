import Layout from "../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div class="text-gray-700 container mt-6 mx-auto my-auto h-[700px] ">
        <h2 class="text-2xl font-bold mb-4">
          How We Collect Your Personal Information
        </h2>
        <p class="mb-4">
          We may have collected personal information about you from a variety of
          sources in the past 12 months:
        </p>
        <ul class="list-disc pl-6 mb-4">
          <li>
            From You: When you set up your account or interact with us regarding
            your account, for billing and payment, or when you start, receive,
            or discontinue energy services or products, or when determining
            eligibility and your participation in utility programs, or when you
            otherwise interact with PG&amp;E and/or its representatives. Your
            personal information may be collected by phone with a customer
            service representative, by mail, by text, by email, through our
            website at pge.com, our mobile apps, or through service providers
            who provide or deliver services on our behalf.
          </li>
          <li>
            From Our Utility Meters and Other Equipment: When you use
            electricity and gas, energy usage data is collected by our metering
            systems. For some applications, such as rate analysis, we link usage
            information with your personal information.
          </li>
          <li>
            From Providers: We work with and receive personal information from
            third parties such as service providers, vendors, contractors,
            credit agencies, and market researchers who provide utility products
            and services on our behalf.
          </li>
          <li>
            From Your Use of Our Website or Mobile Apps: We collect information
            about your visits and use of our website and mobile apps, including
            information through cookies and other logging technologies.
          </li>
          <li>
            From Other Sources: We may supplement the information described
            above with information we obtain from other sources, including
            Community Choice Aggregators and state and local government
            agencies.
          </li>
        </ul>
        <p>
          We value your privacy and are committed to protecting your personal
          information. Please read our full{" "}
          <a href="#" class="text-indigo-500 font-medium">
            Privacy Policy
          </a>{" "}
          to learn more about how we collect, use, and protect your information.
        </p>
      </div>
    </Layout>
  );
};

export default Policy;
