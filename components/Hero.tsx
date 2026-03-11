interface HeroProps {
  label: string;
  title: string;
  subtitle: string;
  backgroundImage: string;
}

export default function Hero({ label, title, subtitle, backgroundImage }: HeroProps) {
  return (
    <section className="hero">
      <div className="hero-bg">
        <img src={backgroundImage} alt={title} />
      </div>
      <div className="hero-overlay" />
      <div className="hero-content">
        <span className="hero-label fade-in">{label}</span>
        <div className="hero-divider fade-in delay-1" />
        <h1 className="hero-title fade-in delay-1">{title}</h1>
        <p className="hero-subtitle fade-in delay-2">{subtitle}</p>
      </div>
    </section>
  );
}
