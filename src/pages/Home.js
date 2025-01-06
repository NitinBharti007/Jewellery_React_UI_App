import HeroSection from "../components/HeroSection";
import JewelryCard from "../components/JewelryCard";

const Home = () => {
  const jewelryItems = [
    { id: 1, image: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/jewellery-set/u/6/s/na-na-4-premcomboset1-pahadi-hai-hum-original-imahykp4n8kybaqt.jpeg?q=20&crop=false', name: 'Diamond Ring', price: 250, description: 'Elegant diamond ring for any occasion' },
    { id: 2, image: 'https://www.hillsheaven.com/wp-content/uploads/2020/02/hillsheaven-pahadi-guloband-500x500.jpg', name: 'Gold Necklace', price: 500, description: 'Gold necklace with a timeless design' },
    { id: 3, image: 'https://www.hillsheaven.com/wp-content/uploads/2020/02/pahadi-paunji.jpg', name: 'Silver Bracelet', price: 150, description: 'Stylish silver bracelet for daily wear' },
    { id: 4, image: 'https://uttarakhandhaat.com/wp-content/uploads/2023/11/1-1-450x450.jpg', name: 'Pahadi Silver Necklace', price: 300, description: 'Handcrafted Pahadi silver necklace with intricate designs' },
    { id: 5, image: 'https://pahadistore.in/wp-content/uploads/2023/10/1.jpg', name: 'Pahadi Gold Earrings', price: 450, description: 'Traditional Pahadi gold earrings with detailed craftsmanship' },
    { id: 6, image: 'https://pahadifresh.com/wp-content/uploads/2021/01/GLO-05.jpg', name: 'Kundan Necklace', price: 600, description: 'Exquisite Kundan necklace perfect for festive occasions' },
    { id: 7, image: 'https://5.imimg.com/data5/ANDROID/Default/2024/9/450219418/RL/SL/BG/34350450/product-jpeg-500x500.jpg', name: 'Pahadi Tribal Bracelet', price: 200, description: 'Rustic Pahadi tribal bracelet made from natural elements' },
    { id: 8, image: 'https://images.meesho.com/images/products/173928075/aqqko_512.webp', name: 'Gold-Plated Bangles', price: 350, description: 'Gold-plated bangles for a royal touch' },
  ];

  return (
    <div>
      <HeroSection />
      <div className="p-4 sm:p-6 md:p-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-primary">Our Exclusive Jewelry Collection</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {jewelryItems.map(item => (
            <JewelryCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
