import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import required modules
import { Navigation, Pagination } from "swiper/modules";

// Import components
import { NewsCard, ProductCard } from "../card";
import CertificateCard from "../card/CertificateCard";

// Carousel component
const Carousel = ({ data, page = "news", navigation = false }) => {
  return (
    <Swiper
      slidesPerView={1} // Default to 1 slide per view
      spaceBetween={10} // Default space between slides
      loop={true} // Infinite loop
      autoplay // Autoplay enabled
      pagination={false} // Pagination disabled (can be toggled if needed)
      navigation={navigation} // Navigation is conditionally enabled
      breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        340: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1280: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      }}
      modules={[Pagination, Navigation]} // Required modules for the carousel
      className="mySwiper my-10"
    >
      {data.map((item, index) => (
        <SwiperSlide key={index}>
          {/* Render content based on the 'page' prop */}
          {page === "news" && <NewsCard data={item} />}
          {page === "toconsumer" && <CertificateCard data={item} />}
          {page === "product" && <ProductCard data={item} />}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
