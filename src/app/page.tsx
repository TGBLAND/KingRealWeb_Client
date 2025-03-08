'use client';
import Link from 'next/link';
import routes from '@/Router/router';
import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import Home from './home';

interface NavbarProps {
  children: ReactNode;
}
export default function App({ children }: NavbarProps) {
  const pathName = usePathname();
  const isHomePage = pathName === routes.home;

  return (
    <div>
      <div className="navbar" id="ftco-nav">
        <ul className='container'>
          <li>
            <Link className="nav-item" href={routes.home}>
              {' '}
              <img
                width={100}
                src="./images/logo.png"
              />
            </Link>
          </li>
          <li>
            <Link className="nav-item is-active" href={routes.home}>
              TRANG CHỦ
            </Link>
          </li>
          <li>
            <Link className="nav-item" href={routes.about}>
              GIỚI THIỆU
            </Link>
          </li>
          <li>
            <Link className="nav-item" href={routes.mission}>
              SỨ MỆNH
            </Link>
          </li>
          <li>
            <Link className="nav-item" href={routes.strategy}>
              CHIẾN LƯỢC
            </Link>
          </li>
          <li>
            <Link className="nav-item" href={routes.profession}>
              NGÀNH NGHỀ
            </Link>
          </li>
        </ul>
      </div>
      {isHomePage && <Home />}
      {children}
    </div>
  );
}
