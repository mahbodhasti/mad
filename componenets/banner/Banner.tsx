"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

interface BannerProps {
  height?: string; // می‌تونی ارتفاع دلخواه بدی، مثل "h-40"
}

export default function Banner({ height = "h-48" }: BannerProps) {
  const slides = [
    "https://res.cloudinary.com/dhff7ulyr/image/upload/v1733127264/samples/landscapes/beach-boat.jpg",
    "https://res.cloudinary.com/dhff7ulyr/image/upload/v1733127264/samples/animals/three-dogs.jpg",
    "https://res.cloudinary.com/dhff7ulyr/image/upload/v1733127262/samples/animals/reindeer.jpg",
  ];

  return (
    <div className={`w-full ${height} mt-2`}>
      <Swiper
        rewind={true}
        navigation={true}
        loop={true}
        autoplay={{ delay: 2000 }}
        modules={[Navigation, Autoplay]}
        className="w-full h-full"
      >
        {slides.map((src, index) => (
          <SwiperSlide key={index} className="w-full h-full">
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover rounded-xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
