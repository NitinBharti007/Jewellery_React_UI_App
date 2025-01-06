import React from 'react';
import JewelryCard from '../components/JewelryCard';

const Collections = () => {
  const jewelryItems = [
    { id: 1, image: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/jewellery-set/u/6/s/na-na-4-premcomboset1-pahadi-hai-hum-original-imahykp4n8kybaqt.jpeg?q=20&crop=false', name: 'Diamond Ring', price: 250, description: 'Elegant diamond ring for any occasion' },
    { id: 2, image: 'https://www.hillsheaven.com/wp-content/uploads/2020/02/hillsheaven-pahadi-guloband-500x500.jpg', name: 'Gold Necklace', price: 500, description: 'Gold necklace with a timeless design' },
    { id: 3, image: 'https://www.hillsheaven.com/wp-content/uploads/2020/02/pahadi-paunji.jpg', name: 'Silver Bracelet', price: 150, description: 'Stylish silver bracelet for daily wear' },
    { id: 4, image: 'https://uttarakhandhaat.com/wp-content/uploads/2023/11/1-1-450x450.jpg', name: 'Pahadi Silver Necklace', price: 300, description: 'Handcrafted Pahadi silver necklace with intricate designs' },
    { id: 5, image: 'https://pahadistore.in/wp-content/uploads/2023/10/1.jpg', name: 'Pahadi Gold Earrings', price: 450, description: 'Traditional Pahadi gold earrings with detailed craftsmanship' },
    { id: 6, image: 'https://pahadifresh.com/wp-content/uploads/2021/01/GLO-05.jpg', name: 'Kundan Necklace', price: 600, description: 'Exquisite Kundan necklace perfect for festive occasions' },
    { id: 7, image: 'https://5.imimg.com/data5/ANDROID/Default/2024/9/450219418/RL/SL/BG/34350450/product-jpeg-500x500.jpg', name: 'Pahadi Tribal Bracelet', price: 200, description: 'Rustic Pahadi tribal bracelet made from natural elements' },
    { id: 8, image: 'https://images.meesho.com/images/products/173928075/aqqko_512.webp', name: 'Gold-Plated Bangles', price: 350, description: 'Gold-plated bangles for a royal touch' },
    { id: 9, image: 'https://via.placeholder.com/300', name: 'Pahadi Diamond Pendant', price: 700, description: 'A unique Pahadi pendant with diamonds' },
    { id: 10, image: 'https://via.placeholder.com/300', name: 'Silver Anklet', price: 180, description: 'Delicate silver anklet for a stylish look' },
    { id: 11, image: 'https://via.placeholder.com/300', name: 'Platinum Ring', price: 800, description: 'Premium platinum ring with a modern design' },
    { id: 12, image: 'https://via.placeholder.com/300', name: 'Ruby Earrings', price: 650, description: 'Beautiful ruby earrings with intricate designs' },
    { id: 13, image: 'https://via.placeholder.com/300', name: 'Sapphire Necklace', price: 550, description: 'Stunning sapphire necklace for elegant occasions' },
    { id: 14, image: 'https://via.placeholder.com/300', name: 'Emerald Ring', price: 750, description: 'Exquisite emerald ring with a unique setting' },
    { id: 15, image: 'https://via.placeholder.com/300', name: 'Gold Brooch', price: 400, description: 'A vintage gold brooch with floral designs' },
    { id: 16, image: 'https://via.placeholder.com/300', name: 'Pahadi Kundan Earrings', price: 600, description: 'Traditional Pahadi Kundan earrings for celebrations' },
    { id: 17, image: 'https://via.placeholder.com/300', name: 'Amethyst Pendant', price: 350, description: 'Elegant amethyst pendant for special occasions' },
    { id: 18, image: 'https://via.placeholder.com/300', name: 'Onyx Ring', price: 450, description: 'Stylish onyx ring with a sleek design' },
    { id: 19, image: 'https://via.placeholder.com/300', name: 'Pearl Necklace', price: 500, description: 'Classic pearl necklace for formal occasions' },
    { id: 20, image: 'https://via.placeholder.com/300', name: 'Diamond Cufflinks', price: 800, description: 'Luxurious diamond cufflinks for the elite' },
    { id: 21, image: 'https://via.placeholder.com/300', name: 'Gold Chain', price: 400, description: 'Elegant gold chain for a timeless appeal' },
    { id: 22, image: 'https://via.placeholder.com/300', name: 'Pahadi Jhumkas', price: 250, description: 'Traditional Pahadi jhumkas with a vintage look' },
    { id: 23, image: 'https://via.placeholder.com/300', name: 'Silver Hoop Earrings', price: 220, description: 'Classic silver hoop earrings for daily wear' },
    { id: 24, image: 'https://via.placeholder.com/300', name: 'Turquoise Bracelet', price: 300, description: 'Rustic turquoise bracelet with tribal accents' },
    { id: 25, image: 'https://via.placeholder.com/300', name: 'Rose Gold Ring', price: 600, description: 'Delicate rose gold ring for an elegant look' },
    { id: 26, image: 'https://via.placeholder.com/300', name: 'Kundan Bangle', price: 700, description: 'Opulent Kundan bangle for weddings and celebrations' },
    { id: 27, image: 'https://via.placeholder.com/300', name: 'Gold Nose Pin', price: 150, description: 'Elegant gold nose pin for traditional look' },
    { id: 28, image: 'https://via.placeholder.com/300', name: 'Pahadi Silver Ring', price: 400, description: 'Handcrafted Pahadi silver ring with intricate carvings' },
    { id: 29, image: 'https://via.placeholder.com/300', name: 'Platinum Earrings', price: 900, description: 'Luxury platinum earrings for special occasions' },
    { id: 30, image: 'https://via.placeholder.com/300', name: 'Gold Cuff Bracelet', price: 550, description: 'Bold gold cuff bracelet for a powerful statement' },
    { id: 31, image: 'https://via.placeholder.com/300', name: 'Pahadi Pearl Necklace', price: 650, description: 'Handcrafted pearl necklace with Pahadi designs' },
    { id: 32, image: 'https://via.placeholder.com/300', name: 'Silver Earrings', price: 200, description: 'Delicate silver earrings for every occasion' },
  ];

  return (
    <div>
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

export default Collections;
