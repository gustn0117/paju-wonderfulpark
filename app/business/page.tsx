'use client';

import { useState, useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';

export default function BusinessPage() {
  const [activeTab, setActiveTab] = useState('overview');
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
      const fadeElements = document.querySelectorAll('.fade-in');
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
      <Navbar activePage="business" />

      <Hero
        label="Business Overview"
        title="사업안내"
        subtitle="캠프하우즈 도시개발사업 첫 수혜단지, 파주 원더풀파크"
        backgroundImage="https://framerusercontent.com/images/Gqczx2zDWJSKOkqgAR1AzZDLhGA.png"
      />

      <div className="tab-nav-wrapper" ref={tabNavRef}>
        <div className="tab-nav">
          <button
            className={`tab-nav-item ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            사업개요
          </button>
          <button
            className={`tab-nav-item ${activeTab === 'location' ? 'active' : ''}`}
            onClick={() => setActiveTab('location')}
          >
            입지환경
          </button>
          <button
            className={`tab-nav-item ${activeTab === 'premium' ? 'active' : ''}`}
            onClick={() => setActiveTab('premium')}
          >
            프리미엄
          </button>
        </div>
      </div>

      {activeTab === 'overview' && (
        <section className="content-section">
          <div className="content-container">
            <div className="section-header fade-in">
              <span className="section-label">Business Overview</span>
              <h2 className="section-heading">사업개요</h2>
              <p className="section-desc">파주 원더풀 파크의 핵심 사업 정보를 확인하세요.</p>
            </div>
            <div className="overview-grid">
              <div className="data-card fade-in">
                <div className="data-card-header">
                  <h3><span className="gold-icon">◆</span> 사업 정보</h3>
                </div>
                <table className="data-table">
                  <tbody>
                    <tr><th>사업명</th><td>파주 원더풀 파크</td></tr>
                    <tr><th>위치</th><td>경기도 파주시 조리읍</td></tr>
                    <tr><th>규모</th><td>1,035세대</td></tr>
                    <tr><th>면적</th><td>610,808㎡ (185,000평)</td></tr>
                    <tr><th>사업비</th><td>1,753억원</td></tr>
                    <tr><th>준공 예정</th><td>2026년 이후</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="info-card fade-in">
                <h3><span className="gold-dot"></span> 사업 개요</h3>
                <p>파주 원더풀 파크는 경기도 파주시의 중심부에 위치한 대규모 단지입니다. 최신 건축 기술과 친환경 설계로 새로운 주거 문화를 제시합니다.</p>
                <br />
                <p><span className="highlight">캠프하우즈 도시개발사업</span> 안에서 완성되는 특별한 주거 프리미엄. 일반 조합이 아닙니다! 공공 도시개발사업의 신뢰 위에 세워지는 새로운 주택조합의 기준, 파주 원더풀파크.</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {activeTab === 'location' && (
        <section className="content-section">
          <div className="content-container">
            <div className="section-header fade-in">
              <span className="section-label">Location</span>
              <h2 className="section-heading">입지환경</h2>
              <p className="section-desc">탁월한 교통 인프라와 자연환경이 어우러진 최적의 입지.</p>
            </div>
            <div className="location-images-grid">
              <div className="location-image-card fade-in">
                <img src="https://framerusercontent.com/images/J7rCbeeI7DrXpmahhVO6hLnD7Q.png" alt="교통 지도" />
                <div className="image-label"><span className="label-dot"></span> 교통 환경 안내도</div>
              </div>
              <div className="location-image-card fade-in">
                <img src="https://framerusercontent.com/images/OuTNe9hQYljRoy9mTFZuUhAmDs.png" alt="항공사진" />
                <div className="image-label"><span className="label-dot"></span> 사업지 항공사진</div>
              </div>
              <div className="location-image-card fade-in">
                <img src="https://framerusercontent.com/images/mdA52eo8fe327S6nYrIIcWUdhk.png" alt="캠프하우즈 근린공원 계획도" />
                <div className="image-label"><span className="label-dot"></span> 캠프하우즈 근린공원 계획도</div>
              </div>
            </div>
            <div className="location-info-card fade-in">
              <div className="location-info-header">
                <h3>사업개요 정보</h3>
                <div className="gold-line"></div>
              </div>
              <div className="location-info-grid">
                <div className="location-info-group">
                  <div className="group-label">대지위치</div>
                  <div className="group-value">조리읍 봉일천리 79-173번지 일원</div>
                </div>
                <div className="location-info-group">
                  <div className="group-label">사업기간</div>
                  <div className="group-value">2010~향후 확정예정</div>
                </div>
                <div className="location-info-group">
                  <div className="group-label">대지면적</div>
                  <div className="group-value">610,808㎡ (185천평)</div>
                </div>
                <div className="location-info-group">
                  <div className="group-label">사업비</div>
                  <div className="group-value">1,753억원 (국 721, 시 882)</div>
                </div>
              </div>
              <div className="location-plan-section">
                <div className="group-label">향후계획</div>
                <div className="plan-timeline">
                  <div className="plan-item">
                    <span className="plan-year">2023</span>
                    <span className="plan-desc">공원1단계(평명한마을) 기반시설 공사 및 리모델링(2차) 준공</span>
                  </div>
                  <div className="plan-item">
                    <span className="plan-year">2024</span>
                    <span className="plan-desc">공원1단계(평명한마을) 준공</span>
                  </div>
                  <div className="plan-item">
                    <span className="plan-year">2026</span>
                    <span className="plan-desc">공원2단계(평명한마을) 준공</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {activeTab === 'premium' && (
        <section className="content-section">
          <div className="content-container">
            <div className="section-header fade-in">
              <span className="section-label">Premium</span>
              <h2 className="section-heading">프리미엄</h2>
              <p className="section-desc">파주 원더풀 파크만의 특별한 8가지 프리미엄.</p>
            </div>
            <div className="premium-hero-image fade-in">
              <img src="https://framerusercontent.com/images/Gqczx2zDWJSKOkqgAR1AzZDLhGA.png" alt="아파트 렌더링" />
            </div>
            <div className="premium-list-card fade-in">
              <div className="premium-list-header">
                <div className="premium-list-title">Wonderful <span className="gold">PREMIUM</span> 8</div>
              </div>
              <ul className="premium-items">
                <li className="premium-item"><span className="premium-num">01</span><span className="premium-item-text">1,035세대 브랜드 대단지 프리미엄</span></li>
                <li className="premium-item"><span className="premium-num">02</span><span className="premium-item-text">전동 필로티로</span></li>
                <li className="premium-item"><span className="premium-num">03</span><span className="premium-item-text">최신 보안 시스템</span></li>
                <li className="premium-item"><span className="premium-num">04</span><span className="premium-item-text">4Bay 설계로 채광, 통풍 극대화 (일부세대)</span></li>
                <li className="premium-item"><span className="premium-num">05</span><span className="premium-item-text">팬트리 / 드레스룸 수납공간특화</span></li>
                <li className="premium-item"><span className="premium-num">06</span><span className="premium-item-text">59㎡, 77㎡ 중소형</span></li>
                <li className="premium-item"><span className="premium-num">07</span><span className="premium-item-text">스마트 홈 시스템</span></li>
                <li className="premium-item"><span className="premium-num">08</span><span className="premium-item-text">수변공원, 삼릉 조망특권 (일부세대)</span></li>
              </ul>
            </div>
            <div className="education-section fade-in">
              <div className="education-image">
                <img src="https://framerusercontent.com/images/qI0ddUPnZhIFpyqwtwS9BSXYg.png" alt="교육환경" />
              </div>
              <div className="education-text">
                <span className="edu-label">Education</span>
                <h3>안전 통학, 학습 편의성 확보</h3>
                <p>자녀의 안전한 통학과 학습적 편의성을 동시에 확보했습니다.</p>
                <p className="edu-highlight">다양한 명문고 위치</p>
                <p>파주 지역의 주요 교육 기관들이 주변에 위치하여 우수한 교육 환경을 제공합니다. 초 / 중 / 고등학교가 도보거리 내에 있어 학생들의 안전한 통학을 보장하며, 최적의 학습 환경을 조성합니다.</p>
              </div>
            </div>
            <div className="additional-images-grid fade-in">
              <div className="additional-image-card">
                <img src="https://framerusercontent.com/images/QmIgB0EqTqGpNzehvUiNLMqY4Q.png" alt="프리미엄 시설 1" />
              </div>
              <div className="additional-image-card">
                <img src="https://framerusercontent.com/images/Swcdtvw8HGKMuNjCOwBuOeZpJ8.png" alt="프리미엄 시설 2" />
              </div>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </>
  );
}
