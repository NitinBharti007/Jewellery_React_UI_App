import React from "react";

const Contact = () => {
  return (
    <div className="bg-gray-100 py-6 px-4 sm:px-6 md:px-8">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-primary">
          Contact Us
        </h1>
        <p className="text-lg text-gray-600 mt-4">
          We would love to hear from you! Please fill out the form below or
          reach out to us through the provided details.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Form Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-primary mb-6">Get in Touch</h2>
          <form action="#" method="POST">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="form-group">
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                />
              </div>

              <div className="form-group">
                <label
                  className="block text-sm font-medium text-gray-700"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                />
              </div>
            </div>

            <div className="form-group mt-6">
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              ></textarea>
            </div>

            <button
              type="submit"
              className="mt-6 w-full py-3 px-4 bg-[#D4AF37] text-white font-semibold rounded-md hover:bg-[#B97D2B] focus:outline-none focus:ring-4 focus:ring-[#D4AF37]"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Company Information Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-primary mb-6">Our Location</h2>
          <p className="text-lg text-gray-600 mb-4">
            If you'd like to visit us, here’s our address:
          </p>
          <p className="text-lg text-gray-800 font-semibold mb-4">
            1A, Shop, 31, Block X, Sector 12, Noida, Uttar Pradesh 201301
          </p>

          <div className="text-lg text-gray-600 mb-4">
            <p>
              <strong>Email:</strong> contact@pahadisunar.com
            </p>
            <p>
              <strong>Phone:</strong> +91 8865099999
            </p>
          </div>

          <div className="w-full h-64 bg-gray-300 rounded-md">
            <iframe
              title="Map Location"
              className="w-full h-full rounded-md"
              src={`https://www.google.com/maps/embed/v1/place?q=Uttarakhand&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`}
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
