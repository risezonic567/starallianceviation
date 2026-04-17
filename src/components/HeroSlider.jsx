// src/components/HeroSlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Pagination,
  Navigation,
  EffectCreative,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-creative";

const slides = [
  { id: 1, image: "/banner/homepagebanneronpilot1sliderfinal.jpg.jpeg" },
  { id: 2, image: "/banner/slider2.jpg" },
  { id: 3, image: "/banner/home-page-banner-on-pilot-3-sliderfinal.jpg.jpeg" },
];

export default function HeroSlider() {
  return (
    /* Desktop par h-screen (Full) 
       Mobile par height aspect-ratio ke hisaab se (h-auto ya specific height)
    */
    <div className="w-full lg:h-screen md:h-[60vh] sm:h-[40vh] h-[24vh] mt-12 md:mt-0 md:top-0 top-5 relative overflow-hidden ">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectCreative]}
        effect="creative"
        creativeEffect={{
          prev: { shadow: true, translate: ["-20%", 0, -200], rotate: [0, 0, -15] },
          next: { shadow: true, translate: ["100%", 0, 0] },
        }}
        loop
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        speed={1000}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
  className="w-full h-full bg-center bg-cover bg-no-repeat relative"
  style={{ backgroundImage: `url(${slide.image})` }}
>
  <div className="absolute inset-0 bg-black/5" />
</div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Responsive Arrows & Dots CSS */}
      <style jsx global>{`
        .swiper-button-next, .swiper-button-prev {
          color: white !important;
          transform: scale(0.7);
        }

        @media (max-width: 640px) {
          /* Mobile par arrows ko thoda aur adjust kiya */
          .swiper-button-next, .swiper-button-prev {
            transform: scale(0.35);
          }
          .swiper-button-next { right: -5px !important; }
          .swiper-button-prev { left: -5px !important; }
          
          /* Pagination dots ko chhota kiya taaki image ke upar na aayein */
          .swiper-pagination-bullet {
            width: 6px;
            height: 6px;
          }
        }

        .swiper-pagination-bullet-active {
          background: white !important;
        }
      `}</style>
    </div>
  );
}