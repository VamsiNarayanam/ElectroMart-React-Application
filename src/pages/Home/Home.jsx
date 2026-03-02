import { Link } from "react-router-dom";
import "../../styles/Home.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import phoneslider from "../../assets/homeImages/Phoneslider.webp";
import laptopslider from "../../assets/homeImages/laptopslider.avif";
import watchslider from "../../assets/homeImages/watchslider.avif";
import headphoneslider from "../../assets/homeImages/headphoneslider.webp";
import iphone15 from "../../assets/images/iphone15.webp";
import sonyWH from "../../assets/images/sonyWH.webp";
import noiseultra3 from "../../assets/images/noiseultra3.webp";
import jbl5 from "../../assets/images/jbl5.webp";
import zenbook14 from "../../assets/images/Zenbook14.webp";
import lgOLED from "../../assets/images/lgOLED.avif";
import imageMetadata from "../../assets/imageMetadata";

const Home = () => {

  const heroImages = [
    phoneslider,
    laptopslider,
    watchslider,
    headphoneslider,
  ];

  return (

    <div className="home">

      <section className="hero">

        <div className="hero-text">

          <h1>Power Your Life with Smart Electronics ⚡</h1>

          <p>Shop the latest mobiles, headphones, laptops, and accessories at
             unbeatable prices.</p>

          <Link to="/products" className="hero-btn">Shop Now</Link>

        </div>

 <div className="hero-image">

      <Swiper modules={[Autoplay]} slidesPerView={1} loop={true} allowTouchMove={false}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}>

        {heroImages.map((img, index) => {
          const dims = imageMetadata[img.split('/').pop()] || {};
          return (
            <SwiperSlide key={index}>
              <img src={img} alt={`slide-${index}`} loading="lazy" {...dims} />
            </SwiperSlide>
          );
        })} 

      </Swiper>

    </div>

      </section>

      <section className="categories">
        <h2>Shop by Category</h2>

        <div className="category-grid">
{[
            { name: "Mobiles", img: phoneslider },
            { name: "Headphones", img: headphoneslider },
            { name: "Smartwatches", img: watchslider },
            { name: "Televisions", img: lgOLED },
            { name: "Speakers", img: jbl5 },
          ].map((item, index) => {
            const dims = imageMetadata[item.img.split('/').pop()] || {};
            return (
              <div className="category-card" key={index}>
                <div className="card-img">
                  <img src={item.img} alt={item.name} loading="lazy" {...dims} />
                </div>
                <h3>{item.name}</h3>
              </div>
            );
          })}

        </div>

      </section>

      <section className="featured">
        <h2>Featured Products</h2>

        <Swiper modules={[Autoplay]} spaceBetween={20} slidesPerView={3} loop={true}
          autoplay={{ delay: 2000 }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}

          className="product-swiper"
        >
          {[
            {
              name: "iPhone 15",
              price: "₹79,999",
              img: iphone15,
            },
            {
              name: "Sony WH-1000XM5",
              price: "₹29,999",
              img: sonyWH,
            },
            {
              name: "Noise ColorFit Ultra 3",
              price: "₹5,999",
              img: noiseultra3,
            },
            {
              name: "JBL Charge 5",
              price: "₹15,999",
              img: jbl5,
            },
            {
              name: "ASUS Zenbook 14",
              price: "₹76999",
              img: zenbook14 ,
            }
          ].map((product, index) => (

            <SwiperSlide key={index}>

              <div className="slider-card">

                <div className="card-img">
                  <img
                    src={product.img}
                    alt={product.name}
                    loading="lazy"
                    {...(imageMetadata[product.img.split('/').pop()] || {})}
                  />
                </div>

                <h4>{product.name}</h4>
                <p>{product.price}</p>
                <Link to="/products">View</Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className="why-us">

        <h2>Why Choose ElectroMart?</h2>

        <div className="why-grid">

          <div>🚚 Fast Delivery</div>
          <div>💳 Secure Payments</div>
          <div>⭐ Top Rated Products</div>
          <div>📞 24/7 Support</div>

        </div>

      </section>

      <section className="cta">

        <h2>Ready to Upgrade Your Gadgets?</h2>
        <Link to="/products" className="cta-btn">Explore Products</Link>

      </section>

    </div>
  );
};

export default Home;
