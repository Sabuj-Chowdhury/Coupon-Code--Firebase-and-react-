const About = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <section className="py-10 bg-gradient-to-r from-gray-100 to-gray-300">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-6 text-gray-800">
            Who We Are
          </h2>
          <p className="text-gray-600 text-base md:text-lg mb-8">
            We are dedicated to connecting customers with high-quality products,
            unbeatable deals, and exceptional services. Our platform makes
            online shopping an enjoyable and seamless experience.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Trusted by Thousands
              </h3>
              <p className="text-gray-500">
                Over 10,000 happy customers shop with us every day.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Fast Delivery
              </h3>
              <p className="text-gray-500">
                Reliable delivery services that ensure your products arrive on
                time.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Secure Payments
              </h3>
              <p className="text-gray-500">
                Shop confidently with our robust and secure payment options.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
