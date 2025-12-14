"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

interface BannerProps {
  height?: string;
}

const Banner: React.FC<BannerProps> = ({ height = "h-64" }) => {
  const slides = [
    "https://res.cloudinary.com/dhff7ulyr/image/upload/v1733127264/samples/landscapes/beach-boat.jpg",
    "https://res.cloudinary.com/dhff7ulyr/image/upload/v1733127264/samples/animals/three-dogs.jpg",
    "https://res.cloudinary.com/dhff7ulyr/image/upload/v1733127262/samples/animals/reindeer.jpg",
  ];

  return (
    <div className={`w-full ${height} relative`}>
      <Swiper
        rewind={true}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="h-full w-full"
      >
        {slides.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
