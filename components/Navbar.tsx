'use client';

import { useEffect } from 'react';
import Link from 'next/link';

interface NavbarProps {
  activePage?: 'business' | 'complex' | 'units' | 'reservation';
}

export default function Navbar({ activePage }: NavbarProps) {
  useEffect(() => {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');

    const handleScroll = () => {
      navbar?.classList.toggle('scrolled', window.scrollY > 10);
    };

    const handleHamburgerClick = () => {
      if (hamburger && mobileMenu) {
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('open');
        document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
      }
    };

    const handleMobileLinkClick = () => {
      if (hamburger && mobileMenu) {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      }
    };

    window.addEventListener('scroll', handleScroll);
    hamburger?.addEventListener('click', handleHamburgerClick);
    const mobileLinks = mobileMenu?.querySelectorAll('a');
    mobileLinks?.forEach((link) => link.addEventListener('click', handleMobileLinkClick));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      hamburger?.removeEventListener('click', handleHamburgerClick);
      mobileLinks?.forEach((link) => link.removeEventListener('click', handleMobileLinkClick));
    };
  }, []);

  const phonePath = 'M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46ZM176,208A128.14,128.14,0,0,1,48,80,40.2,40.2,0,0,1,82.87,40a.61.61,0,0,0,0,.12l21,47L83.2,111.86a6.13,6.13,0,0,0-.57.77,16,16,0,0,0-1,15.7c9.06,18.53,27.73,37.06,46.46,46.11a16,16,0,0,0,15.75-1.14,8.44,8.44,0,0,0,.74-.56L168.89,152l47,21.05h0s.08,0,.11,0A40.21,40.21,0,0,1,176,208Z';

  return (
    <>
      <header className="navbar" id="navbar">
        <div className="navbar-inner">
          <div className="logo-wrapper">
            <Link href="/">
              <img src="https://framerusercontent.com/images/1fvI0brPAK9CSUNpz0L7SFm5eC4.png" alt="Wonderful Park Logo" />
            </Link>
          </div>
          <div className="nav-center">
            <nav className="nav-links">
              <Link href="/business" className={`nav-link${activePage === 'business' ? ' active' : ''}`}>사업안내</Link>
              <Link href="/complex" className={`nav-link${activePage === 'complex' ? ' active' : ''}`}>단지안내</Link>
              <Link href="/units" className={`nav-link${activePage === 'units' ? ' active' : ''}`}>세대안내</Link>
              <Link href="/#form" className={`nav-link${activePage === 'reservation' ? ' active' : ''}`}>방문예약</Link>
            </nav>
          </div>
          <div className="contact-area">
            <a href="tel:1811-0088" className="contact-phone">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path d={phonePath} /></svg>
              <span>1811-0088</span>
            </a>
            <button className="hamburger" id="hamburger" aria-label="메뉴 열기">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      <div className="mobile-menu" id="mobileMenu">
        <Link href="/business">사업안내</Link>
        <Link href="/complex">단지안내</Link>
        <Link href="/units">세대안내</Link>
        <Link href="/#form">방문예약</Link>
        <a href="tel:1811-0088" className="mobile-phone">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="22" height="22" fill="#C9A96E"><path d={phonePath} /></svg>
          1811-0088
        </a>
      </div>
    </>
  );
}
