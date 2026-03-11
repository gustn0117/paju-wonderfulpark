'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const checkSvg = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
    <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z" />
  </svg>
);

const phonePath =
  'M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46ZM176,208A128.14,128.14,0,0,1,48,80,40.2,40.2,0,0,1,82.87,40a.61.61,0,0,0,0,.12l21,47L83.2,111.86a6.13,6.13,0,0,0-.57.77,16,16,0,0,0-1,15.7c9.06,18.53,27.73,37.06,46.46,46.11a16,16,0,0,0,15.75-1.14,8.44,8.44,0,0,0,.74-.56L168.89,152l47,21.05h0s.08,0,.11,0A40.21,40.21,0,0,1,176,208Z';

const unitPanels = [
  {
    id: '59a',
    badge: '59A',
    img: 'https://framerusercontent.com/images/xlF1ukGNLwnne7U9SdORdv6lBY.png',
    alt: '59A 평면도',
    specs: [
      { label: '세대수', value: '472세대' },
      { label: '전용면적', value: '59.95m²' },
      { label: '공용면적', value: '21.30m²' },
      { label: '공급면적', value: '81.25m²' },
      { label: '기타공용', value: '27.35m²' },
      { label: '계약면적', value: '108.60m²' },
    ],
    desc: '59A 타입의 자세한 평면도와 영상을 확인하세요',
  },
  {
    id: '59b',
    badge: '59B',
    img: 'https://framerusercontent.com/images/khYkvO00bCq1ySEUuqlRHIrAImI.png',
    alt: '59B 평면도',
    specs: [
      { label: '세대수', value: '97세대' },
      { label: '전용면적', value: '59.68m²' },
      { label: '공용면적', value: '21.06m²' },
      { label: '공급면적', value: '80.74m²' },
      { label: '기타공용', value: '27.22m²' },
      { label: '계약면적', value: '107.96m²' },
    ],
    desc: '59B 타입의 자세한 평면도를 확인하세요',
  },
  {
    id: '77a',
    badge: '77A',
    img: 'https://framerusercontent.com/images/xFGY0kNeD6wEenOCrowE0lNdacw.png',
    alt: '77A 평면도',
    specs: [
      { label: '세대수', value: '322세대' },
      { label: '전용면적', value: '77.94m²' },
      { label: '공용면적', value: '26.61m²' },
      { label: '공급면적', value: '104.55m²' },
      { label: '기타공용', value: '35.55m²' },
      { label: '계약면적', value: '140.10m²' },
    ],
    desc: '77A 타입의 자세한 평면도를 확인하세요',
  },
  {
    id: '77b',
    badge: '77B',
    img: 'https://framerusercontent.com/images/nyRJVSa6rFnWtez0NRnckxXMxB8.png',
    alt: '77B 평면도',
    specs: [
      { label: '세대수', value: '92세대' },
      { label: '전용면적', value: '77.92m²' },
      { label: '공용면적', value: '26.87m²' },
      { label: '공급면적', value: '104.79m²' },
      { label: '기타공용', value: '35.54m²' },
      { label: '계약면적', value: '140.33m²' },
    ],
    desc: '77B 타입의 자세한 평면도를 확인하세요',
  },
  {
    id: '111a',
    badge: '111A',
    img: 'https://framerusercontent.com/images/lZAvPywGKfPyuzQfgSfBMWH4L4.png',
    alt: '111A 평면도',
    specs: [
      { label: '세대수', value: '23세대' },
      { label: '전용면적', value: '111.88m²' },
      { label: '공용면적', value: '35.53m²' },
      { label: '공급면적', value: '147.41m²' },
      { label: '기타공용', value: '51.02m²' },
      { label: '계약면적', value: '198.44m²' },
    ],
    desc: '111A 타입의 자세한 평면도를 확인하세요',
  },
  {
    id: '111b',
    badge: '111B',
    img: 'https://framerusercontent.com/images/OzNUw7CqB2OmuHsrJ94Tv21Un1I.png',
    alt: '111B 평면도',
    specs: [
      { label: '세대수', value: '23세대' },
      { label: '전용면적', value: '111.88m²' },
      { label: '공용면적', value: '35.53m²' },
      { label: '공급면적', value: '147.41m²' },
      { label: '기타공용', value: '51.02m²' },
      { label: '계약면적', value: '198.44m²' },
    ],
    desc: '111B 타입의 자세한 평면도를 확인하세요',
  },
];

export default function Home() {
  useEffect(() => {
    document.body.classList.add('home-page');
    return () => {
      document.body.classList.remove('home-page');
    };
  }, []);

  useEffect(() => {
    const tabs = document.querySelectorAll('.unit-tab');
    const panels = document.querySelectorAll('.unit-panel');

    const handleTabClick = (e: Event) => {
      const btn = e.currentTarget as HTMLElement;
      const targetId = btn.getAttribute('data-unit');
      tabs.forEach((t) => t.classList.remove('active'));
      panels.forEach((p) => p.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById(targetId || '')?.classList.add('active');
    };

    tabs.forEach((tab) => tab.addEventListener('click', handleTabClick));
    return () => {
      tabs.forEach((tab) => tab.removeEventListener('click', handleTabClick));
    };
  }, []);

  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section className="hero home-hero">
        <div className="hero-bg">
          <img
            src="https://framerusercontent.com/images/KBK2vvR3lEHTYCoKNikl3Bq5I.png"
            alt="파주 원더풀파크 전경"
          />
        </div>
        <div className="hero-overlay" />
        <div className="hero-content">
          <span className="hero-label fade-in">Paju Wonderful Park</span>
          <div className="hero-divider fade-in delay-1" />
          <h1 className="hero-title fade-in delay-1">파주 원더풀파크</h1>
          <p className="hero-subtitle fade-in delay-2">
            캠프하우즈 도시개발사업 첫 수혜단지
            <br />
            자연과 도시가 공존하는 5,299세대의 미니신도시
          </p>
          <a href="tel:1811-0088" className="hero-cta fade-in delay-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              width="20"
              height="20"
              fill="#fff"
            >
              <path d={phonePath} />
            </svg>
            <span className="hero-phone-number">1811-0088</span>
          </a>
        </div>
        <a href="#about" className="scroll-indicator fade-in delay-4">
          <span>Scroll</span>
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </a>
      </section>

      {/* ABOUT SECTION */}
      <section className="about-section" id="about">
        <div className="about-container">
          <Link href="/#form" className="about-image-wrapper fade-in-left">
            <img
              src="https://framerusercontent.com/images/ESFHfuHvVZmHWoB5HsBEWln1Tho.png"
              alt="파주 원더풀파크 조감도"
            />
            <div className="about-image-overlay">
              <span className="about-image-overlay-text">방문예약 신청하기 &rarr;</span>
            </div>
          </Link>
          <div className="about-texts fade-in-right">
            <span className="section-tag">About Project</span>
            <h2 className="section-title">
              특별한 주거
              <br />
              프리미엄의 시작
            </h2>
            <p className="about-desc">
              일반 조합이 아닙니다. 공공 도시개발사업의 신뢰 위에 세워지는 새로운 주택조합의 기준, 파주 원더풀파크.
            </p>
            <div className="key-points">
              <div className="key-point fade-in delay-1">
                <div className="key-point-icon">{checkSvg}</div>
                <h3>파주시 도시개발사업 연계</h3>
              </div>
              <div className="key-point fade-in delay-2">
                <div className="key-point-icon">{checkSvg}</div>
                <h3>투명한 행정 프로세스</h3>
              </div>
              <div className="key-point fade-in delay-3">
                <div className="key-point-icon">{checkSvg}</div>
                <h3>신뢰의 시공사 선정</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UNIT GUIDE SECTION */}
      <section className="unit-section" id="units">
        <div className="unit-wrapper">
          <div className="unit-header fade-in">
            <span className="section-tag">Unit Guide</span>
            <h2 className="section-title">세대 안내</h2>
            <p className="section-desc">
              다양한 평형의 세대 구성으로 입주자의 라이프스타일에 맞는 최적의 공간을 제공합니다.
            </p>
          </div>

          <div className="unit-tabs fade-in delay-1">
            {unitPanels.map((u, i) => (
              <button
                key={u.id}
                className={`unit-tab${i === 0 ? ' active' : ''}`}
                data-unit={`unit-${u.id}`}
              >
                {u.badge}
              </button>
            ))}
          </div>

          {unitPanels.map((u, i) => (
            <div
              key={u.id}
              className={`unit-panel${i === 0 ? ' active' : ''}`}
              id={`unit-${u.id}`}
            >
              <div className="unit-card">
                <div className="unit-card-top">
                  <div className="unit-card-image">
                    <img src={u.img} alt={u.alt} />
                  </div>
                  <div className="unit-card-info">
                    <div className="unit-type-badge">{u.badge}</div>
                    <div className="unit-specs-grid">
                      {u.specs.map((s) => (
                        <div key={s.label} className="unit-spec">
                          <span className="unit-spec-label">{s.label}</span>
                          <span className="unit-spec-value">{s.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="unit-card-bottom">
                  <span className="unit-card-bottom-text">{u.desc}</span>
                  <Link href="/units" className="unit-detail-link">
                    상세보기
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <polyline points="9 6 15 12 9 18" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="form-section" id="form">
        <div className="form-wrapper">
          <div className="form-header fade-in">
            <span className="section-tag">Reservation</span>
            <h2 className="section-title">방문예약 신청</h2>
            <p className="section-desc">전문 상담사가 빠르게 연락드립니다</p>
          </div>
          <div className="form-card fade-in delay-1">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert('제출되었습니다!');
              }}
            >
              <div className="form-grid">
                <div className="form-group">
                  <label className="form-label-text">이름 *</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="이름을 입력해주세요"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label-text">전화번호 *</label>
                  <input
                    type="tel"
                    className="form-input"
                    placeholder="010-1234-5678"
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label-text">방문 날짜 *</label>
                  <input type="date" className="form-input" required />
                </div>
                <div className="form-group">
                  <label className="form-label-text">방문 시간 *</label>
                  <input type="time" className="form-input" required />
                </div>
              </div>
              <button type="submit" className="form-submit">
                방문예약 신청하기
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
