import Link from "next/link";
import routes from "@/Router/router";

export default function Home() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
      <div className="container">
        <div className="collapse navbar-collapse" id="ftco-nav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active"><Link href={routes.about} className="nav-link">Giới thiệu</Link></li>
            <li className="nav-item"><Link href={routes.mission} className="nav-link">Sứ mệnh</Link></li>
            <li className="nav-item"><Link href={routes.vision} className="nav-link">Tầm nhìn</Link></li>
            <li className="nav-item"><Link href={routes.strategy} className="nav-link">chiến lược</Link></li>
            <li className="nav-item"><Link href={routes.profession} className="nav-link">Nghành nghề</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
