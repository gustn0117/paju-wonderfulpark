'use client';

import { useState, useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';

type TabType = '59a' | '59b' | '77a' | '77b' | '111a' | '111b';

const unitData = [
  {
    id: '59a',
    title: '59A 타입 안내',
    badge: '59A',
    hasVideo: true,
    videoUrl: 'https://www.youtube.com/embed/wZW_-8UbTO8',
    videoTitle: '59A type - 파우더룸',
    videoDesc: '파주 원더풀 파크 남광 하우스토리',
    specs: [
      { label: '유형', value: '59m²A' },
      { label: '세대수', value: '472세대' },
      { label: '전용면적', value: '59.95m²' },
      { label: '공용면적', value: '21.30m²' },
      { label: '공급면적', value: '81.25m²' },
      { label: '기타공용면적', value: '27.35m²' },
      { label: '계약면적', value: '108.60m²' },
    ],
    images: [
      '/images/59A_1.png',
      '/images/59A_2.png',
    ],
  },
  {
    id: '59b',
    title: '59B 타입 안내',
    badge: '59B',
    hasVideo: false,
    videoUrl: undefined,
    videoTitle: undefined,
    videoDesc: undefined,
    specs: [
      { label: '유형', value: '59m²B' },
      { label: '세대수', value: '97세대' },
      { label: '전용면적', value: '59.68m²' },
      { label: '공용면적', value: '21.06m²' },
      { label: '공급면적', value: '80.74m²' },
      { label: '기타공용면적', value: '27.22m²' },
      { label: '계약면적', value: '107.96m²' },
    ],
    images: [
      '/images/59B_1.png',
      '/images/59B_2.png',
    ],
  },
  {
    id: '77a',
    title: '77A 타입 안내',
    badge: '77A',
    hasVideo: false,
    videoUrl: undefined,
    videoTitle: undefined,
    videoDesc: undefined,
    specs: [
      { label: '유형', value: '77m²A' },
      { label: '세대수', value: '322세대' },
      { label: '전용면적', value: '77.94m²' },
      { label: '공용면적', value: '26.61m²' },
      { label: '공급면적', value: '104.55m²' },
      { label: '기타공용면적', value: '35.55m²' },
      { label: '계약면적', value: '140.10m²' },
    ],
    images: [
      '/images/77A_1.png',
      '/images/77A_2.png',
    ],
  },
  {
    id: '77b',
    title: '77B 타입 안내',
    badge: '77B',
    hasVideo: false,
    videoUrl: undefined,
    videoTitle: undefined,
    videoDesc: undefined,
    specs: [
      { label: '유형', value: '77m²B' },
      { label: '세대수', value: '92세대' },
      { label: '전용면적', value: '77.92m²' },
      { label: '공용면적', value: '26.87m²' },
      { label: '공급면적', value: '104.79m²' },
      { label: '기타공용면적', value: '35.54m²' },
      { label: '계약면적', value: '140.33m²' },
    ],
    images: [
      '/images/77B_1.png',
      '/images/77B_2.png',
    ],
  },
  {
    id: '111a',
    title: '111A 타입 안내',
    badge: '111A',
    hasVideo: false,
    videoUrl: undefined,
    videoTitle: undefined,
    videoDesc: undefined,
    specs: [
      { label: '유형', value: '111m²A' },
      { label: '세대수', value: '23세대' },
      { label: '전용면적', value: '111.88m²' },
      { label: '공용면적', value: '35.53m²' },
      { label: '공급면적', value: '147.41m²' },
      { label: '기타공용면적', value: '51.02m²' },
      { label: '계약면적', value: '198.44m²' },
    ],
    images: [
      '/images/111A.png',
      'https://framerusercontent.com/images/lZAvPywGKfPyuzQfgSfBMWH4L4.png',
    ],
  },
  {
    id: '111b',
    title: '111B 타입 안내',
    badge: '111B',
    hasVideo: false,
    videoUrl: undefined,
    videoTitle: undefined,
    videoDesc: undefined,
    specs: [
      { label: '유형', value: '111m²B' },
      { label: '세대수', value: '23세대' },
      { label: '전용면적', value: '111.88m²' },
      { label: '공용면적', value: '35.53m²' },
      { label: '공급면적', value: '147.41m²' },
      { label: '기타공용면적', value: '51.02m²' },
      { label: '계약면적', value: '198.44m²' },
    ],
    images: [
      'https://framerusercontent.com/images/TVvZx8FGfAW2jH8p9Zy2GNIFk.png',
      'https://framerusercontent.com/images/OzNUw7CqB2OmuHsrJ94Tv21Un1I.png',
    ],
  },
];

export default function UnitsPage() {
  const [activeTab, setActiveTab] = useState<TabType>('59a');
  const tabNavRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const fadeEls = document.querySelectorAll('.fade-in');
      fadeEls.forEach((el) => el.classList.remove('visible'));

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

      fadeEls.forEach((el) => observer.observe(el));

      return () => observer.disconnect();
    }, 100);

    if (tabNavRef.current) {
      tabNavRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    return () => clearTimeout(timeout);
  }, [activeTab]);

  const unit = unitData.find((u) => u.id === activeTab)!;

  return (
    <>
      <Navbar activePage="units" />

      <Hero
        label="Unit Guide"
        title="세대 안내"
        subtitle="캠프하우즈 도시개발사업 첫 수혜단지! 자연과 도시가 공존하는 5,299세대의 미니신도시"
        backgroundImage="https://framerusercontent.com/images/TdyYPhXcDB1l3sJzdTlRgGtgeUc.png"
      />

      <div
        ref={tabNavRef}
        className="tab-nav-wrapper"
        style={{
          position: 'sticky',
          top: 'var(--nav-height)',
          zIndex: 100,
          boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
        }}
      >
        <div className="tab-nav">
          {(['59a', '59b', '77a', '77b', '111a', '111b'] as TabType[]).map((tab) => (
            <button
              key={tab}
              className={`tab-nav-item ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      <section className="content-section">
        <div className="content-container">
          <div className="section-header fade-in">
            <span className="content-label">Overview</span>
            <h2 className="content-heading">{unit.title}</h2>
          </div>

          {unit.hasVideo ? (
            <div className="video-specs-row">
              <div className="fade-in">
                <div className="video-embed-wrapper">
                  <iframe
                    src={unit.videoUrl}
                    title={unit.videoTitle}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                  <div className="video-meta">
                    <h3>{unit.videoTitle}</h3>
                    <p>{unit.videoDesc}</p>
                  </div>
                </div>
              </div>
              <div className="fade-in">
                <div className="specs-card">
                  <div className="specs-card-header">
                    <span className="type-badge">{unit.badge}</span>
                    <span className="specs-card-title">Area Information</span>
                  </div>
                  <div className="specs-grid">
                    {unit.specs.map((spec, i) => (
                      <div key={i} className="spec-item">
                        <span className="spec-label">{spec.label}</span>
                        <span className="spec-value">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="fade-in">
              <div
                className="specs-card"
                style={{ maxWidth: '800px', margin: '0 auto', width: '100%' }}
              >
                <div className="specs-card-header">
                  <span className="type-badge">{unit.badge}</span>
                  <span className="specs-card-title">Area Information</span>
                </div>
                <div className="specs-grid">
                  {unit.specs.map((spec, i) => (
                    <div key={i} className="spec-item">
                      <span className="spec-label">{spec.label}</span>
                      <span className="spec-value">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          <div className="images-section">
            {unit.images.map((src, i) => (
              <div key={i} className="image-card fade-in">
                <img
                  src={src}
                  alt={`${unit.badge} ${i === 0 ? '면적정보' : '평면도'}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="disclaimer-section">
        <div className="disclaimer-wrapper">
          <h3 className="disclaimer-title">유의사항</h3>
          <p className="disclaimer-text">{`본 홈페이지의 사진, 영상, CG일러스트 및 문구는 소비자의 이해를 돕기 위해 제작된 것으로 실제와 차이가 있을 수 있습니다.
본 홈페이지의 내용은 사업홍보를 위한 사이트로, 법적 효력을 갖는 계약서나 공고가 아니므로 민형사상 소송자료로 사용할 수 없습니다.
개발계획, 교통망, 주변 인프라 등은 관계기관 및 사업주체의 사정, 인허가 및 설계 변동 등에 따라 변경되거나 지연될 수 있으며, 계약에 앞서 반드시 사업주체를 통해 최신 정보를 재확인하시기 바랍니다.`}</p>
        </div>
      </section>

      <Footer />
    </>
  );
}
