const JewelryCard = ({ id, image, name, price, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden group transform transition-transform duration-300 ease-in-out hover:scale-105 flex flex-col">
      <img src={image} alt={name} className="w-full h-48 object-cover group-hover:opacity-80" />
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-[#D4AF37]">{name}</h3>
        <p className="text-sm text-gray-600 mb-2 flex-grow">{description}</p>
        <div className="flex justify-between items-center mt-auto">
          <span className="text-lg font-bold text-[#B97D2B]">₹{price}</span>
          <button className="bg-[#D4AF37] text-white font-semibold py-2 px-4 rounded-full transform transition-all duration-300 hover:bg-[#B97D2B] focus:outline-none focus:ring-4 focus:ring-[#D4AF37]">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default JewelryCard;
