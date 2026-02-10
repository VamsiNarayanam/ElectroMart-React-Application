import { Link } from "react-router-dom";
import "../../styles/Home.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const Home = () => {

  const heroImages = [
  "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
  "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
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

        {heroImages.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`slide-${index}`} />
          </SwiperSlide>
        ))}

      </Swiper>

    </div>

      </section>

      <section className="categories">
        <h2>Shop by Category</h2>

        <div className="category-grid">
          {[
            { name: "Mobiles", img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9" },
            { name: "Headphones", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBiJa15lV0JtoLwXyC5SebQXE1dpFy1x8RFw&s" },
            { name: "Smartwatches", img: "https://m.media-amazon.com/images/I/61y2VVWcGBL._SL1500_.jpg" },
            { name: "Televisions", img: "https://www.lg.com/content/dam/channel/wcms/in/images/tvs/c4-gallery/oled48c46la/gallery/OLED48C46LA-TV-Soundbars-right-facing-side-view-DZ-03.jpg/jcr:content/renditions/thum-1600x1062.jpeg" },
            { name: "Speakers", img: "https://5.imimg.com/data5/SELLER/Default/2022/2/UW/SK/ZC/10164444/81tvcv9n1tl-sl1500-.jpg" },
          ].map((item, index) => (

            <div className="category-card" key={index}>

              <div className="card-img">
                <img src={item.img} alt={item.name} />
              </div>

              <h3>{item.name}</h3>

            </div>
          ))}

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
              img: "https://images.unsplash.com/photo-1598327105666-5b89351aff97",
            },
            {
              name: "Sony WH-1000XM5",
              price: "₹29,999",
              img: "https://in.static.webuy.com/product_images/Electronics/Headphones/4548736132580B_l.jpg",
            },
            {
              name: "Noise ColorFit Ultra 3",
              price: "₹5,999",
              img: "https://assets.myntassets.com/w_360,q_50,,dpr_2,fl_progressive,f_webp/assets/images/28411118/2024/3/21/0f4dc3fd-23a7-4580-b093-b81fe3accf3e1711014804865NoiseColorFitUltra3Smartwatch-TealBlue1.jpg",
            },
            {
              name: "JBL Charge 5",
              price: "₹15,999",
              img: "https://dukaan.b-cdn.net/700x700/webp/media/3f531e3f-3229-45af-9343-91cbff596f43.jpg",
            },
            {
              name: "ASUS Zenbook 14",
              price: "₹76999",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDemWqn38YyY5RcoIR9FfrrymrDI6ygOwTAA&s",
            }
          ].map((product, index) => (

            <SwiperSlide key={index}>

              <div className="slider-card">

                <div className="card-img">
                  <img src={product.img} alt={product.name} />
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
