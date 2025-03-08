const AboutModules = () => {
  return (
    <div className="aboutWrap">
      <div className="container introduction">
        <h1 className="title">TẬP ĐOÀN BẤT ĐỘNG SẢN KING REAL</h1>
        <p className="sub-title">KING REAL GROUP</p>
        <div className="real-estate-section">
          <div className="content">
            <p>
              King Real Group là tập đoàn bất động sản hàng đầu tại Việt Nam,
              chuyên cung cấp dịch vụ môi giới, đầu tư và phát triển dự án bất
              động sản. Với đội ngũ chuyên nghiệp, năng động và sáng tạo, chúng
              tôi cam kết mang lại giá trị tốt nhất cho khách hàng, đối tác và
              cộng đồng.
            </p>
            <div className="cards">
              <div className="card card-1">
                <img
                  src="https://daiphuc.com.vn/uploads/DaiPhucGroup-BanLanhDao.jpg"
                  alt="Vươn tầm cao mới"
                />
                <div className="card-content">
                  <p className="number">28 Năm</p>
                  <p>Thành lập và phát triển</p>
                </div>
              </div>

              <div className="card card-2">
                <img
                  src="https://daiphuc.com.vn/uploads/VanPhuccity-Jardin-030.jpg"
                  alt="Khu đô thị"
                />
                <div className="card-content">
                  <p className="number">400</p>
                  <p>Quỹ đất sạch</p>
                </div>
              </div>

              <div className="card card-3">
                <img
                  src="https://daiphuc.com.vn/uploads/VanPhuccity-Royal-040.jpg"
                  alt="Dự án sử dụng"
                />
                <div className="card-content">
                  <p className="number">124 HA</p>
                  <p>Diện tích dự án đi vào sử dụng</p>
                </div>
              </div>
            </div>

            <div className="button-container">
              <button className="learn-more">Tìm hiểu thêm</button>
            </div>
          </div>
        </div>
      </div>
      <div className="background">
        <img
          src="https://daiphuc.com.vn/uploads/bg-home-about.jpg"
          alt="background"
        />
      </div>
    </div>
  );
};
export default AboutModules;
