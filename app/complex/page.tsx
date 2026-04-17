'use client';

import { useState, useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';

const legendItems = [
  { color: '#FF6B6B', text: '59m²A · 472세대' },
  { color: '#4ECDC4', text: '59m²B · 97세대' },
  { color: '#FFE66D', text: '77m²A · 322세대' },
  { color: '#95E1D3', text: '77m²B · 92세대' },
  { color: '#A8D8EA', text: '111m²A · 23세대' },
  { color: '#AA96DA', text: '111m²B · 23세대' },
  { color: '#FCBAD3', text: '148m² · 6세대' },
  { color: '#333', text: '총 1,035세대' },
];

function LegendCard() {
  return (
    <div className="legend-card fade-in">
      <h3 className="legend-title">세대 유형별 현황</h3>
      <div className="legend-grid">
        {legendItems.map((item, i) => (
          <div key={i} className="legend-item">
            <div className="legend-dot" style={{ background: item.color }}></div>
            <span className="legend-item-text">{item.text}</span>
          </div>
        ))}
        <div className="legend-item total">
          <span className="legend-item-text">총 1,035세대의 프리미엄 대단지</span>
        </div>
      </div>
    </div>
  );
}

export default function ComplexPage() {
  const [activeTab, setActiveTab] = useState<'layout' | 'units'>('layout');
  const isInitialMount = useRef(true);
  const tabNavRef = useRef<HTMLDivElement>(null);

  // Scroll to tab nav when tab changes (except initial load)
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    if (tabNavRef.current) {
      tabNavRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [activeTab]);

  // Re-trigger scroll animations when activeTab changes
  useEffect(() => {
    const timeout = setTimeout(() => {
      const fadeElements = document.querySelectorAll('.fade-in, .fade-in-scale');
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );

      fadeElements.forEach((el) => {
        el.classList.remove('visible');
        observer.observe(el);
      });

      return () => observer.disconnect();
    }, 100);

    return () => clearTimeout(timeout);
  }, [activeTab]);

  return (
    <>
      <Navbar activePage="complex" />

      <Hero
        label="Complex Guide"
        title="단지 안내"
        subtitle={`" 캠프하우즈 도시개발사업 첫 수혜단지! 자연과 도시가 공존하는 5,299세대의 미니신도시 "`}
        backgroundImage="/images/gwangyeok.jpg"
      />

      <div className="tab-nav-wrapper" ref={tabNavRef}>
        <div className="tab-nav">
          <button
            className={`tab-nav-item ${activeTab === 'layout' ? 'active' : ''}`}
            onClick={() => setActiveTab('layout')}
          >
            단지배치도
          </button>
          <button
            className={`tab-nav-item ${activeTab === 'units' ? 'active' : ''}`}
            onClick={() => setActiveTab('units')}
          >
            동호수배치도
          </button>
        </div>
      </div>

      {activeTab === 'layout' && (
        <section className="content-section">
          <div className="content-container">
            <div className="section-header fade-in">
              <span className="content-label">Complex Layout</span>
              <h2 className="content-heading">단지배치도</h2>
              <p className="content-heading-sub">파주 원더풀파크의 단지 배치를 한눈에 확인하세요</p>
            </div>
            <div className="image-card fade-in-scale">
              <img src="/images/danji-layout.png" alt="단지배치도" />
            </div>
            <LegendCard />
            <div className="image-card fade-in-scale">
              <div className="image-card-caption">
                <img src="/images/toji-plan.png" alt="도시개발사업 계획도" />
                <div className="caption-overlay">
                  <span className="caption-badge">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 256 256" fill="currentColor"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm-4,48a12,12,0,1,1-12,12A12,12,0,0,1,124,72Zm12,112a16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40a8,8,0,0,1,0,16Z"/></svg>
                    계획도
                  </span>
                  <span>파주시 캠프하우즈 도시개발사업 계획도</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {activeTab === 'units' && (
        <section className="content-section">
          <div className="content-container">
            <div className="section-header fade-in">
              <span className="content-label">Unit Layout</span>
              <h2 className="content-heading">동호수배치도</h2>
              <p className="content-heading-sub">동별 호수 배치를 상세하게 확인하세요</p>
            </div>
            <div className="image-card fade-in-scale">
              <img src="https://framerusercontent.com/images/aYD4ehlww2bSdogTdjK1kQGq6Y.png" alt="동호수배치도" />
            </div>
            <div className="haustory-card fade-in">
              <div className="haustory-logo-wrap">
                <img src="https://framerusercontent.com/images/gP6Q0AW7mz5EYaK2fjRfu9s.png" alt="Haustory Logo" />
              </div>
              <div className="haustory-content">
                <p className="haustory-text"><span>친환경단지</span>, 혁신공간으로 완성하는<br/><span>원더풀</span> 대단지</p>
                <div className="haustory-divider"></div>
              </div>
            </div>
            <LegendCard />
            <div className="image-card fade-in-scale">
              <div className="image-card-caption">
                <img src="https://framerusercontent.com/images/aYD4ehlww2bSdogTdjK1kQGq6Y.png" alt="동호수 배치표" />
                <div className="caption-overlay">
                  <span className="caption-badge">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 256 256" fill="currentColor"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm-4,48a12,12,0,1,1-12,12A12,12,0,0,1,124,72Zm12,112a16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40a8,8,0,0,1,0,16Z"/></svg>
                    배치표
                  </span>
                  <span>동호수 배치표 (101동~108동)</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="disclaimer-section">
        <div className="disclaimer-wrapper fade-in">
          <h3 className="disclaimer-title">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="18" height="18" fill="var(--accent, #C9A96E)"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm-4,48a12,12,0,1,1-12,12A12,12,0,0,1,124,72Zm12,112a16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40a8,8,0,0,1,0,16Z"/></svg>
            유의사항
          </h3>
          <p className="disclaimer-text">{`본 홈페이지의 사진, 영상, CG일러스트 및 문구는 소비자의 이해를 돕기 위해 제작된 것으로 실제와 차이가 있을 수 있습니다.
본 홈페이지의 내용은 사업홍보를 위한 사이트로, 법적 효력을 갖는 계약서나 공고가 아니므로 민형사상 소송자료로 사용할 수 없습니다.
개발계획, 교통망, 주변 인프라 등은 관계기관 및 사업주체의 사정, 인허가 및 설계 변동 등에 따라 변경되거나 지연될 수 있으며, 계약에 앞서 반드시 사업주체를 통해 최신 정보를 재확인하시기 바랍니다.`}</p>
        </div>
      </section>

      <Footer />
    </>
  );
}
