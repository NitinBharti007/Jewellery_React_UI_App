const About = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Title Section */}
      <h1 className="text-4xl font-bold text-center text-[#2C3E50] mb-6">About Us</h1>

      {/* Introduction Section */}
      <div className="text-center mb-10">
        <p className="text-xl font-serif text-[#34495E]">
          Welcome to <span className="font-extrabold text-[#F39C12]">Pahadi Sunar</span>, where tradition meets elegance.
          We offer a stunning collection of high-quality handcrafted jewelry that celebrates the rich heritage of the hills and mountains.
        </p>
      </div>

      {/* Our Story Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-[#2C3E50] mb-4">Our Story</h2>
        <p className="text-lg leading-relaxed text-[#34495E]">
          Inspired by the majestic mountains of the Himalayas, Pahadi Sunar brings you a unique collection of jewelry that combines
          the timeless beauty of nature with the skillful artistry of local craftsmen. Each piece is handcrafted with love and precision,
          using sustainable materials and techniques that have been passed down through generations.
        </p>
        <p className="text-lg leading-relaxed text-[#34495E] mt-4">
          We believe in preserving the traditions of our ancestors while offering modern designs that suit the taste of today’s
          fashion-conscious individuals. Our pieces range from elegant gold necklaces to intricate silver rings, all imbued with
          the spirit of the hills.
        </p>
      </div>

      {/* Our Values Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-[#2C3E50] mb-4">Our Values</h2>
        <ul className="list-disc pl-6 space-y-4 text-lg text-[#34495E]">
          <li><strong>Sustainability:</strong> We prioritize eco-friendly materials and ethical practices to ensure our jewelry is as
            kind to the earth as it is beautiful.</li>
          <li><strong>Craftsmanship:</strong> Each piece is crafted by hand, ensuring that every detail is perfect and reflects the
            dedication of our artisans.</li>
          <li><strong>Authenticity:</strong> We stay true to our roots, honoring the traditional craftsmanship of the Pahadi
            (mountain) culture while creating timeless designs for the modern world.</li>
          <li><strong>Elegance:</strong> Our jewelry is not just a piece to wear, but a statement of elegance, style, and confidence.</li>
        </ul>
      </div>

      {/* Our Craftsmanship Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-[#2C3E50] mb-4">Our Craftsmanship</h2>
        <p className="text-lg leading-relaxed text-[#34495E]">
          At Pahadi Sunar, our jewelry is more than just an accessory; it’s a work of art. We collaborate with master artisans
          who are deeply connected with the land and its culture. These craftsmen and craftswomen have honed their skills over
          decades, creating pieces that are both exquisite and meaningful.
        </p>
        <p className="text-lg leading-relaxed text-[#34495E] mt-4">
          From selecting the finest stones to molding them into delicate designs, every step is carried out with the utmost care
          and precision. Whether it’s a necklace, bracelet, ring, or earrings, each piece tells a story – a story of heritage,
          passion, and dedication.
        </p>
      </div>

      {/* Why Choose Us Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-[#2C3E50] mb-4">Why Choose Us</h2>
        <p className="text-lg leading-relaxed text-[#34495E]">
          Choosing Pahadi Sunar means choosing quality, authenticity, and a piece of the Himalayan heritage. Our commitment to
          using only the finest materials ensures that every item in our collection is a lasting treasure. Our designs are
          carefully curated to suit a wide range of tastes, making them perfect for any occasion – be it a wedding, anniversary,
          or a special gift for a loved one.
        </p>
        <p className="text-lg leading-relaxed text-[#34495E] mt-4">
          We pride ourselves on delivering the highest standards of craftsmanship and customer satisfaction. When you choose
          Pahadi Sunar, you are not just buying jewelry – you are investing in a piece of art, culture, and tradition.
        </p>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <h2 className="text-2xl font-bold text-[#2C3E50] mb-4">Ready to Discover Timeless Beauty?</h2>
        <p className="text-lg text-[#34495E] mb-4">
          Browse our exclusive collection and find the perfect piece that speaks to your heart.
        </p>
        <button className="bg-[#F39C12] text-white py-3 px-8 rounded-full shadow-lg hover:bg-[#D35400] transition-all duration-300">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default About;
