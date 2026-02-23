import iphone15 from "../assets/images/iphone15.webp";
import samsungS24 from "../assets/images/samsungS24.jfif";
import oneplus12 from "../assets/images/oneplus12.webp";
import redmi13 from "../assets/images/redmi13.webp";
import macbookM2 from "../assets/images/macbookM2.jpg";
import dell13 from "../assets/images/dell13.jfif";
import pavillion15 from "../assets/images/pavillion15.jfif";
import zenbook14 from "../assets/images/Zenbook14.jfif";
import samsung4K from "../assets/images/samsung4K.webp";
import lgOLED from "../assets/images/lgOLED.avif";
import samsungQLED from "../assets/images/samsungQLED.webp";
import phillips55 from "../assets/images/phillips55.jfif";
import sonyWH from "../assets/images/sonyWH.webp";
import boseComfort45 from "../assets/images/boseComfort45.png";
import senhesier4 from "../assets/images/senhesier4.jfif";
import jblM2 from "../assets/images/jblM2.jfif";
import applePods from "../assets/images/applePods.webp";
import boat192 from "../assets/images/boat192.png";
import samsungbud2 from "../assets/images/samsungbud2.jpeg";
import nothing2 from "../assets/images/nothing2.jpg";
import jbl5 from "../assets/images/jbl5.webp";
import sonySRS from "../assets/images/sonySRS.jpg";
import marshall2 from "../assets/images/marshall2.webp";
import boat1200 from "../assets/images/boat1200.jpg";
import galaxy6 from "../assets/images/galaxy6.jfif";
import apple9 from "../assets/images/apple9.jfif";
import oneplus2 from "../assets/images/oneplus2.jpg";
import noiseultra3 from "../assets/images/noiseultra3.webp";

const electronicsData = [

  {
    id: 1,
    name: "iPhone 15",
    price: 79999,
    category: "Mobile",
    brand: "Apple",
    rating: 4.8,
    image: iphone15,
    description: "Premium smartphone with A16 Bionic chip, advanced camera system, and smooth iOS experience.",
  },
  {
    id: 2,
    name: "Samsung Galaxy S24",
    price: 69999,
    category: "Mobile",
    brand: "Samsung",
    rating: 4.6,
    image: samsungS24,
    description: "Flagship Android phone with powerful performance, AI features, and stunning AMOLED display."
  },
  {
    id: 3,
    name: "OnePlus 12",
    price: 64999,
    category: "Mobile",
    brand: "OnePlus",
    rating: 4.5,
    image: oneplus12,
    description: "High-performance smartphone with fast charging, smooth OxygenOS, and flagship-level specs.",
  },
  {
    id: 4,
    name: "Redmi Note 13 Pro",
    price: 24999,
    category: "Mobile",
    brand: "Xiaomi",
    rating: 4.4,
    image: redmi13,
    description: "Value-for-money phone offering strong camera performance and AMOLED display.",
  },
  {
    id: 5,
    name: "MacBook Air M2",
    price: 114999,
    category: "Laptop",
    brand: "Apple",
    rating: 4.8,
    image: macbookM2,
    description: "Ultra-thin laptop powered by Apple M2 chip with excellent battery life and performance.",
  },
  {
    id: 6,
    name: "Dell XPS 13",
    price: 99999,
    category: "Laptop",
    brand: "Dell",
    rating: 4.6,
    image: dell13,
    description: "Premium Windows ultrabook with compact design and high-resolution display.",
  },
  {
    id: 7,
    name: "HP Pavilion 15",
    price: 68999,
    category: "Laptop",
    brand: "HP",
    rating: 4.3,
    image: pavillion15,
    description: "Reliable everyday laptop suitable for work, study, and entertainment.",
  },
  {
    id: 8,
    name: "ASUS Zenbook 14",
    price: 76999,
    category: "Laptop",
    brand: "ASUS",
    rating: 4.5,
    image: zenbook14,
    description: "Sleek and lightweight laptop with premium build quality and vibrant display.",
  },
  {
    id: 9,
    name: "Samsung 55\" 4K Smart TV",
    price: 52999,
    category: "Television",
    brand: "Samsung",
    rating: 4.4,
    image:samsung4K,
    description: "4K UHD Smart TV delivering sharp visuals and immersive entertainment experience.",
  },
  {
    id: 10,
    name: "LG OLED 48\"",
    price: 89999,
    category: "Television",
    brand: "LG",
    rating: 4.7,
    image: lgOLED,
    description: "OLED TV with perfect blacks, vivid colors, and cinematic viewing quality.",
  },
  {
    id: 11,
    name: "Samsung 55\" QLED Smart TV",
    price: 61999,
    category: "Television",
    brand: "Samsung",
    rating: 4.5,
    image: samsungQLED,
    description: "QLED Smart TV with bright display, smart features, and powerful sound.",
  },
  {
    id: 12,
    name: "Philips 55\" 4K UHD Smart TV",
    price: 48999,
    category: "Television",
    brand: "Philips",
    rating: 4.3,
    image: phillips55,
    description: "Affordable 4K Smart TV with clear picture quality and smart connectivity.",
  },
  {
    id: 13,
    name: "Sony WH-1000XM5",
    price: 29999,
    category: "Headphones",
    brand: "Sony",
    rating: 4.7,
    image: sonyWH,
    description: "Industry-leading noise cancelling headphones with premium sound quality.",
  },
  {
    id: 14,
    name: "Bose QuietComfort 45",
    price: 32999,
    category: "Headphones",
    brand: "Bose",
    rating: 4.7,
    image: boseComfort45,
    description: "Comfort-focused noise cancelling headphones with balanced sound.",
  },
  {
    id: 15,
    name: "Sennheiser Momentum 4",
    price: 34999,
    category: "Headphones",
    brand: "Sennheiser",
    rating: 4.6,
    image: senhesier4,
    description: "High-end wireless headphones offering rich audio and long battery life.",
  },
  {
    id: 16,
    name: "JBL Tour One M2",
    price: 27999,
    category: "Headphones",
    brand: "JBL",
    rating: 4.5,
    image: jblM2,
    description: "Premium headphones with adaptive noise cancelling and JBL signature sound.",
  },
  {
    id: 17,
    name: "Apple AirPods Pro (2nd Gen)",
    price: 24999,
    category: "Earbuds",
    brand: "Apple",
    rating: 4.6,
    image: applePods,
    description: "True wireless earbuds with active noise cancellation and spatial audio.",
  },
  {
    id: 18,
    name: "boAt Airdopes 192",
    price: 2499,
    category: "Earbuds",
    brand: "boAt",
    rating: 4.4,
    image: boat192,
    description: "Budget-friendly wireless earbuds with long playback and deep bass.",
  },
  {
    id: 19,
    name: "Samsung Galaxy Buds 2 Pro",
    price: 17999,
    category: "Earbuds",
    brand: "Samsung",
    rating: 4.6,
    image: samsungbud2,
    description: "Premium earbuds with immersive sound, ANC, and seamless Samsung integration.",
  },
  {
    id: 20,
    name: "Nothing Ear (2)",
    price: 9999,
    category: "Earbuds",
    brand: "Nothing",
    rating: 4.4,
    image: nothing2,
    description: "Stylish transparent earbuds with balanced sound and ANC support.",
  },
  {
    id: 21,
    name: "JBL Charge 5",
    price: 15999,
    category: "Speaker",
    brand: "JBL",
    rating: 4.5,
    image: jbl5,
    description: "Portable Bluetooth speaker with powerful bass and long battery life.",
  },
  {
    id: 22,
    name: "Sony SRS-XB43 Portable Speaker",
    price: 24999,
    category: "Speaker",
    brand: "Sony",
    rating: 4.6,
    image: sonySRS,
    description: "Extra bass portable speaker with punchy sound and durable build.",
  },
  {
    id: 23,
    name: "Marshall Emberton II",
    price: 16999,
    category: "Speaker",
    brand: "Marshall",
    rating: 4.6,
    image: marshall2,
    description: "Compact premium speaker with iconic Marshall sound and design.",
  },
  {
    id: 24,
    name: "boAt Stone 1200",
    price: 3999,
    category: "Speaker",
    brand: "boAt",
    rating: 4.3,
    image: boat1200,
    description: "Affordable portable speaker with loud sound and rugged design.",
  },
  {
    id: 25,
    name: "Samsung Galaxy Watch 6",
    price: 29999,
    category: "Smartwatch",
    brand: "Samsung",
    rating: 4.5,
    image: galaxy6,
    description: "Advanced smartwatch with health tracking and AMOLED display.",
  },
  {
    id: 26,
    name: "Apple Watch Series 9",
    price: 36999,
    category: "Smartwatch",
    brand: "Apple",
    rating: 4.7,
    image: apple9,
    description: "Premium smartwatch with powerful health features and seamless iOS sync.",
  },
  {
    id: 27,
    name: "OnePlus Watch 2",
    price: 24999,
    category: "Smartwatch",
    brand: "OnePlus",
    rating: 4.4,
    image: oneplus2,
    description: "Stylish smartwatch with long battery life and smooth performance.",
  },
  {
    id: 28,
    name: "Noise ColorFit Ultra 3",
    price: 5999,
    category: "Smartwatch",
    brand: "Noise",
    rating: 4.2,
    image: noiseultra3,
    description: "Budget smartwatch with AMOLED display and essential fitness tracking.",
  },
];

export default electronicsData;
