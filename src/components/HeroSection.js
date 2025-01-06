import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-[#D4AF37] to-[#B97D2B] text-white text-center py-16 sm:py-20 md:py-28 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 opacity-60 bg-black"></div>
      <div className="absolute inset-0 z-0 opacity-50">
        <img
          src="https://m.media-amazon.com/images/I/71rhCybob4L._AC_UY1100_.jpg" // Replace with an actual image
          alt="Jewelry Collection"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Heading Section */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-extrabold tracking-tight mb-4 sm:mb-6 transform transition-all duration-500 ease-in-out z-10 relative">
        Discover Timeless Elegance
      </h2>
      
      {/* Subheading Section */}
      <p className="text-sm sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed opacity-90 z-10 relative">
        Indulge in our exclusive collection of handcrafted jewelry, designed to make every moment unforgettable.
      </p>

      {/* Features List */}
      <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-12 mb-8 sm:mb-10 z-10 relative">
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#B97D2B] rounded-full flex items-center justify-center mb-4">
            <span className="text-white text-lg sm:text-2xl font-bold">🖋️</span>
          </div>
          <p className="text-sm sm:text-lg">Handcrafted</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#B97D2B] rounded-full flex items-center justify-center mb-4">
            <span className="text-white text-lg sm:text-2xl font-bold">🌿</span>
          </div>
          <p className="text-sm sm:text-lg">Sustainable Materials</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#B97D2B] rounded-full flex items-center justify-center mb-4">
            <span className="text-white text-lg sm:text-2xl font-bold">💎</span>
          </div>
          <p className="text-sm sm:text-lg">Exquisite Craftsmanship</p>
        </div>
      </div>

      {/* Call to Action Button */}
      <div className="z-10 relative flex flex-col sm:flex-row justify-center gap-6 sm:gap-8 items-center max-w-full px-4">
        <button className="bg-white text-[#B97D2B] font-bold py-4 px-8 w-full sm:w-auto md:py-5 md:px-10 rounded-full shadow-xl transition-all duration-300 ease-in-out hover:bg-[#D4AF37] hover:text-white hover:shadow-2xl transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-[#D4AF37] focus:ring-opacity-50 max-w-xs sm:max-w-md md:max-w-lg">
          Shop Now
        </button>
        
        <Link to={"/collections"} className="bg-transparent text-white border-2 border-white font-bold py-4 px-8 w-full sm:w-auto md:py-5 md:px-10 rounded-full shadow-xl transition-all duration-300 ease-in-out hover:bg-[#B97D2B] hover:text-white transform hover:scale-110 max-w-xs sm:max-w-md md:max-w-lg">
          Explore Collection
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
