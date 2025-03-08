"use client"; // Tắt SSR để tránh lỗi trên server

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./newsSlide.css";

const newsData = [
  {
    id: 1,
    date: "03/01/2025",
    title: "KHÔNG KHÍ ĐÓN NĂM MỚI 2025 TẠI THÀNH PHỐ HỒ CHÍ MINH",
    image: "https://daiphuc.com.vn/uploads/z6160550143725_8cb5d910281717f4cb07bc26345225e3.jpg",
  },
  {
    id: 2,
    date: "03/01/2025",
    title: "NGƯỜI DÂN, DU KHÁCH NÔ NỨC CHECK-IN VƯỜN HOA HƯỚNG DƯƠNG LỚN NHẤT TPHCM",
    image: "https://daiphuc.com.vn/uploads/img-3508-9883-2918.jpg",
  },
  {
    id: 3,
    date: "31/12/2024",
    title: "VƯỜN HOA HƯỚNG DƯƠNG ĐẸP MÊ GIỮA LÒNG SÀI GÒN, DU KHÁCH NÁO NỨC CHECK-IN",
    image: "https://daiphuc.com.vn/uploads/htv9.jpg",
  },
  {
    id: 4,
    date: "30/12/2024",
    title: "HÀNG NGHÌN NGƯỜI THAM GIA LỄ HỘI ĐÈN LỒNG RỰC RỠ CUỐI NĂM",
    image: "https://daiphuc.com.vn/uploads/60ff8a974dec0e3fde84a6c965f4c14e.jpg",
  },
  {
    id: 5,
    date: "29/12/2024",
    title: "SẮP KHAI TRƯƠNG TRUNG TÂM MUA SẮM MỚI TẠI TP.HCM",
    image: "https://daiphuc.com.vn/uploads/z6192428963512_010dc5cf1c1d85b20b493479658b267c.jpg",
  },
];

const NewsSlider: React.FC = () => {
  return (
    <div className="news-slider">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {newsData.map((news) => (
          <SwiperSlide key={news.id}>
            <div className="news-card">
              <img src={news.image} alt={news.title} width={400} height={250} />
              <div className="news-content">
                <span className="news-date">{news.date}</span>
                <h3>{news.title}</h3>
                <a href="#" className="news-link">Xem chi tiết +</a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default NewsSlider;
