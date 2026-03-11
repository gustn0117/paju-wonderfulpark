import Link from 'next/link';

export default function Footer() {
  const phonePath = 'M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46ZM176,208A128.14,128.14,0,0,1,48,80,40.2,40.2,0,0,1,82.87,40a.61.61,0,0,0,0,.12l21,47L83.2,111.86a6.13,6.13,0,0,0-.57.77,16,16,0,0,0-1,15.7c9.06,18.53,27.73,37.06,46.46,46.11a16,16,0,0,0,15.75-1.14,8.44,8.44,0,0,0,.74-.56L168.89,152l47,21.05h0s.08,0,.11,0A40.21,40.21,0,0,1,176,208Z';

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-logo">
            <img src="https://framerusercontent.com/images/1fvI0brPAK9CSUNpz0L7SFm5eC4.png" alt="Wonderful Park Logo" />
          </div>
          <nav className="footer-nav">
            <Link href="/business">사업안내</Link>
            <Link href="/complex">단지안내</Link>
            <Link href="/units">세대안내</Link>
            <Link href="/#form">방문예약</Link>
          </nav>
          <a href="tel:1811-0088" className="footer-contact">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path d={phonePath} /></svg>
            <span>1811-0088</span>
          </a>
        </div>
        <div className="footer-bottom">
          <p className="footer-copyright">&copy; 2026 파주 원더풀파크. All rights reserved.</p>
          <p className="footer-disclaimer">본 사이트는 사업 홍보를 위해 제작되었으며, 법적 효력이 없습니다. 개발계획, 교통망, 주변 인프라 등은 관계기관의 사정에 따라 변경될 수 있습니다.</p>
        </div>
      </div>
    </footer>
  );
}
