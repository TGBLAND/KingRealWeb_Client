'use client';

import { useEffect, useState } from 'react';

const images = [
  'https://smartland.vn/wp-content/uploads/2021/10/bat-dong-san-ven-song-sai-gon-01-e1620704384316.jpg',
  'https://th.bing.com/th/id/R.0475f777e615ae043a50a18931e67242?rik=Qwz0Yh8WXeSB%2bw&riu=http%3a%2f%2fcdn.luxuo.com%2f2014%2f12%2fLandmark81.jpg&ehk=iSTKvRgENM%2be97W19RnlclnL7W5W8Y31SPLyLjamYZY%3d&risl=&pid=ImgRaw&r=0',
  'https://file4.batdongsan.com.vn/2020/05/14/JGcIp0rf/20200514135522-5d92.jpg',
];

const BackgroundSlide = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Thay đổi hình ảnh mỗi 3 giây

    return () => clearInterval(interval); // Dọn dẹp khi component bị tháo gỡ
  }, []);

  return (
    <div className="slideshow-container">
      <div
        className="slideshow"
        style={{
          backgroundImage: `url(${images[currentIndex]})`,
        }}
      />
      <style jsx>{`
        .slideshow-container {
          position: relative; /* Đặt thành fixed */
          height: 90vh; /* Chiều cao của slideshow */
          overflow: hidden; /* Ẩn bất kỳ phần nào tràn ra ngoài */
          z-index: -1; /* Đặt z-index thấp hơn để không che nội dung khác */
        }
        .slideshow {
          position: absolute;
          top: 0;
          left: 0;
          width: 100vw; /* Chiều rộng toàn bộ màn hình */
          height: 90vh; /* Chiều cao toàn bộ màn hình */
          background-size: cover;
          background-position: center;
          transition: background-image 3s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default BackgroundSlide;
