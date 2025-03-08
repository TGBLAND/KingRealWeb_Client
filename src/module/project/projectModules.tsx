import "./projectModules.css";

const ProjectModules = () => {
  return (
    <div className="featured-projects">
      <div className="header">
        <h1>DỰ ÁN NỔI BẬT</h1>
        <p>KING REAL GROUP</p>
        <div className="tabs">
          <span className="active">DỰ ÁN ĐANG TRIỂN KHAI</span>
          <span>DỰ ÁN SẮP TRIỂN KHAI</span>
          <span>DỰ ÁN ĐÃ HOÀN THÀNH</span>
        </div>
      </div>

      <div className="project-image">
        <img src="https://daiphuc.com.vn/uploads/TongTheNgay01_R4_Vuong-1920-030.jpg" alt="Khu đô thị Vạn Phúc" />
      </div>

      <div className="project-info">
        <h2>KHU ĐÔ THỊ VẠN PHÚC</h2>
        <p className="subtitle">ĐẢO NGỌC GIỮA LÒNG SÀI GÒN</p>
        <p>
          Khu đô thị Vạn Phúc là 1 trong 3 bán đảo bên sông Sài Gòn, với tổng
          mức đầu tư 3 tỷ USD. Khu đô thị đáp ứng đầy đủ những tiện ích sống
          đẳng cấp, hiện đại được ví như một kiệt tác VÀNG soi bóng bên dòng
          sông Sài Gòn thơ mộng.
        </p>
        <p className="location">
          Quốc lộ 13, Q. Thủ Đức, TP.HCM. &nbsp; | &nbsp;  Quy mô: 198 ha.
        </p>
        <button>
          Chi tiết dự án
        </button>
      </div>
    </div>
  );
};
export default ProjectModules;
