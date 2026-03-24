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

            {/* 조감도/투시도 이미지 */}
            <div className="overview-hero-images fade-in">
              <div className="overview-hero-card">
                <img src="https://framerusercontent.com/images/Gqczx2zDWJSKOkqgAR1AzZDLhGA.png" alt="파주 원더풀파크 투시도" />
                <div className="overview-hero-label">투시도</div>
              </div>
              <div className="overview-hero-card">
                <img src="https://framerusercontent.com/images/w9nbaKPOVfUjeIDBW4xTz7o3Q.png" alt="파주 원더풀파크 광역조감도" />
                <div className="overview-hero-label">광역조감도</div>
              </div>
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
                    <tr><th>입주예정</th><td>2030년</td></tr>
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

            {/* 카탈로그 참조 핵심 가치 */}
            <div className="catalog-highlights fade-in">
              <div className="catalog-highlight-card">
                <div className="catalog-highlight-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256" fill="currentColor"><path d="M240,208H224V96a16,16,0,0,0-16-16H160a16,16,0,0,0-16,16v24H112V48a16,16,0,0,0-16-16H48A16,16,0,0,0,32,48V208H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM208,96V208H160V96ZM48,48H96V208H48Z"/></svg>
                </div>
                <h4>1,035세대 브랜드 대단지</h4>
                <p>다양한 편의시설과 부대시설로 살기 좋은 대단지 아파트</p>
              </div>
              <div className="catalog-highlight-card">
                <div className="catalog-highlight-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256" fill="currentColor"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm-8-80V80a8,8,0,0,1,16,0v56a8,8,0,0,1-16,0Zm20,36a12,12,0,1,1-12-12A12,12,0,0,1,140,172Z"/></svg>
                </div>
                <h4>전세대 남향위주 단지배치</h4>
                <p>일조량이 우수한 남향 배치로 쾌적한 단지환경 조성</p>
              </div>
              <div className="catalog-highlight-card">
                <div className="catalog-highlight-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256" fill="currentColor"><path d="M232,200a8,8,0,0,1-8,8H32a8,8,0,0,1,0-16h8V104A8,8,0,0,1,48,96h40a8,8,0,0,1,8,8v88h16V56a8,8,0,0,1,8-8h40a8,8,0,0,1,8,8V192h16V136a8,8,0,0,1,8-8h32a8,8,0,0,1,8,8v56h8A8,8,0,0,1,232,200Z"/></svg>
                </div>
                <h4>탁트인 힐링조망특권</h4>
                <p>자연으로 열린 단지설계로 수변공원 삼릉 조망 가능</p>
              </div>
              <div className="catalog-highlight-card">
                <div className="catalog-highlight-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256" fill="currentColor"><path d="M224,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48ZM32,64H224V80H32ZM224,192H32V96H224Z"/></svg>
                </div>
                <h4>공원형 단지설계</h4>
                <p>단지 내 녹지공간과 단지 앞 수변공원이 연계된 친환경단지</p>
              </div>
            </div>

            {/* 파주시 지정 도시개발사업 안내 */}
            <div className="city-dev-section fade-in">
              <div className="city-dev-header">
                <h3>파주시 지정 도시개발사업</h3>
                <p className="city-dev-subtitle">약 5,299세대 대단지 · 일산호수공원 약 1.5배 · 7개 테마월드로 완성되는 놀라운 도시</p>
              </div>
              <div className="city-dev-features">
                <div className="city-dev-feature">
                  <span className="city-dev-feature-label">Wonderful TRAFFIC</span>
                  <h4>서울까지 빠른 길이 열리다</h4>
                  <p>지하철 3호선 연장선 금천-조리선 신설역 추진<br/>서울-문산간 고속도로로 서울 20분대<br/>GTX파주 연장 예정</p>
                </div>
                <div className="city-dev-feature">
                  <span className="city-dev-feature-label">Wonderful INFRA</span>
                  <h4>문만 나서면 마트, 학교와 만나다</h4>
                  <p>단지 옆 대형마트, 유럽형 중심상업지구 예정<br/>도보권 내에 유치원, 초등학교 신설 예정<br/>스타필드 고양, 파주 롯데 프리미엄 아울렛 인접</p>
                </div>
                <div className="city-dev-feature">
                  <span className="city-dev-feature-label">Wonderful NATURE</span>
                  <h4>대규모 공원이 우리집 앞마당이다</h4>
                  <p>단지 바로 앞 축구장 약 58배 규모 수변공원 예정<br/>축구장 약 84배 규모의 테마파크를 내집처럼 이용<br/>파주 삼릉과 공릉천 조망 가능</p>
                </div>
                <div className="city-dev-feature">
                  <span className="city-dev-feature-label">Wonderful VISION</span>
                  <h4>다양한 개발호재로 가치가 자란다</h4>
                  <p>파주 LG디스플레이단지 3배 규모 확장<br/>경기북부지역 최초 폴리텍 대학유치<br/>파주 통일로 일반산단, 법원2산단 배후수혜 단지</p>
                </div>
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
