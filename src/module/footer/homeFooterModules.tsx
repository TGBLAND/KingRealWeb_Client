import "./homeFooterModules.css";
import styles from "@/styles/Footer.module.css";

const HomeFooterModules = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Cột 1: Logo và thông tin công ty */}
        <div className="footer-column">
          <h3>KING REAL GROUP</h3>
          <p>Tập đoàn Bất Động Sản King Real</p>
          <p>Theo dõi chúng tôi qua:</p>
          <div className="social-icons">
            <a href="#">🌐</a>
            <a href="#">📘</a>
            <a href="#">▶️</a>
          </div>
        </div>

        {/* Cột 2: Thông tin liên hệ */}
        <div className="footer-column">
          <h3>THÔNG TIN LIÊN HỆ</h3>
          <p>Tổng đài CSKH: 1800 6555</p>
          <p>Điện thoại: (028) 6294 6548</p>
          <p>Fax: (028) 6294 6549</p>
          <p>Email: info@kingreal.com.vn</p>
          <p>King Real Tower, 617 - 621 Điện Biên Phủ, P.25, Q.Bình Thạnh, TP.HCM</p>
        </div>

        {/* Cột 3: Giới thiệu, tin tức, dự án */}
        <div className="footer-column">
          <h3>GIỚI THIỆU</h3>
          <a href="#">Tầm nhìn - Sứ mệnh - Giá trị</a>
          <a href="#">Thành tựu</a>

          <h3> TIN TỨC</h3>
          <a href="#">Tin King Real</a>
          <a href="#">Tin dự án</a>
          <a href="#">Tin thị trường</a>

          <h3> DỰ ÁN</h3>
          <a href="#">Dự án đang triển khai</a>
          <a href="#">Dự án sắp triển khai</a>
          <a href="#">Dự án đã hoàn thành</a>
        </div>

        {/* Cột 4: Đăng ký nhận tin */}
        <div className="footer-column">
          <h3>ĐĂNG KÝ NHẬN TIN</h3>
          <p>Nhập email của bạn để nhận tin mới nhất:</p>
          <input type="email" placeholder="Email" className="footer-input" />
          <button className="footer-button">Đăng ký</button>
        </div>

      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        Copyright 2025 Cemdz. All rights reserved.
      </div>
    </footer>
  );
};

export default HomeFooterModules;
