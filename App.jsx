import React, { useEffect, useMemo, useState } from 'react';


function IconArrowUpRight({ size = 17 }) { return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7"/><path d="M8 7h9v9"/></svg>; }
function IconArrowRight({ size = 18 }) { return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>; }
function IconMail({ size = 26 }) { return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>; }
function IconInstagram({ size = 25 }) { return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>; }
function IconLinkedin({ size = 25 }) { return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-13h4v2"/><rect x="2" y="8" width="4" height="13"/><circle cx="4" cy="4" r="2"/></svg>; }
function IconSun({ size = 18 }) { return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>; }
function IconMoon({ size = 17 }) { return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>; }

import profileImage from './profile.png';
import logoStrip from './logo-strip.png';
import imoneyImage from './imoney.png';
import ramadanImage from './unicef-ramadan.png';
import phillipImage from './phillip-nova.png';
import shortcutImage from './sales-shortcut.png';
import systemsImage from './unicef-systems.png';
import otherCasesImage from './other-cases.png';

const links = {
  email: 'mailto:muhammetgeldig@gmail.com',
  instagram: 'https://www.instagram.com/m.gshv/',
  linkedin: 'https://www.linkedin.com/in/muhammetgeldi-goshayev/',
  externalCases: 'https://app.notion.com/p/gysgacha/115b6c063e29440aae418a6dc8ba7ffe?v=93662e02564440d498f6ae370df595c24',
};

const caseStudies = {
  imoney: {
    label: 'Case Study',
    title: "iMoney’s Full-Funnel Creative Strategy",
    image: imoneyImage,
    className: 'case-imoney',
  },
  ramadan: {
    label: 'Case Study',
    title: '59% Cheaper Ramadan Donations For UNICEF',
    image: ramadanImage,
    className: 'case-ramadan',
  },
  phillip: {
    label: 'Case Study',
    title: 'Phillip Nova. Cutting CPA by 42%.',
    image: phillipImage,
    className: 'case-phillip',
  },
  shortcut: {
    label: 'Case Study',
    title: 'Zero to Brand Identity. Sales Shortcut.',
    image: shortcutImage,
    className: 'case-shortcut',
  },
  systems: {
    label: 'Case Study',
    title: 'Creative Systems for UNICEF',
    image: systemsImage,
    className: 'case-systems',
  },
};

const testimonials = [
  {
    quote:
      'Muhammetgeldi brought strategic clarity and creative vision to our campaign. Our conversion rates noticeably improved within weeks.',
    name: 'David Chen',
    role: 'CMO at FinTech Plus',
  },
  {
    quote:
      'He understands how performance and design work together. The work looked better, but more importantly, it made the offer easier to understand.',
    name: 'Alyssa Tan',
    role: 'Growth Lead',
  },
  {
    quote:
      'The strongest part was how quickly he translated scattered business inputs into a clear campaign system we could actually execute.',
    name: 'Marcus Lee',
    role: 'Founder',
  },
];

function useHashRoute() {
  const [hash, setHash] = useState(window.location.hash || '#/');

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash || '#/');
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return hash.replace(/^#/, '') || '/';
}

function ThemeSwitch({ theme, setTheme }) {
  return (
    <div className="theme-switch" aria-label="Theme switcher">
      <button
        className={theme === 'light' ? 'active' : ''}
        onClick={() => setTheme('light')}
        aria-label="Switch to light mode"
      >
        <IconSun size={18} />
      </button>
      <button
        className={theme === 'dark' ? 'active' : ''}
        onClick={() => setTheme('dark')}
        aria-label="Switch to dark mode"
      >
        <IconMoon size={17} />
      </button>
    </div>
  );
}

function Label({ children }) {
  return <span className="label">{children}</span>;
}

function Header() {
  return (
    <header className="site-header">
      <a href="#/" className="brand-name">Muhammetgeldi Goshayev</a>
    </header>
  );
}

function AboutCard() {
  return (
    <section className="card about-card reveal" style={{ '--delay': '0ms' }}>
      <Label>About</Label>
      <p>
        Art Director and Creative Lead based in Kuala Lumpur, driven by a relentless obsession with turning consumer psychology into performance. <span>2x ROAS on Meta, 14,000+ leads in under six months, and over $500K in measurable revenue across virtually every industry.</span>
      </p>
    </section>
  );
}

function ProfileCard() {
  return (
    <section className="card profile-card reveal" style={{ '--delay': '70ms' }}>
      <div className="profile-frame">
        <img src={profileImage} alt="Muhammetgeldi Goshayev" />
      </div>
    </section>
  );
}

function ClientsCard() {
  return (
    <section className="card clients-card reveal" style={{ '--delay': '100ms' }}>
      <Label>Clients</Label>
      <div className="logo-mask">
        <div className="logo-track">
          <img src={logoStrip} alt="Client logos" />
          <img src={logoStrip} alt="" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}

function TestimonialCard() {
  const [index, setIndex] = useState(0);
  const current = testimonials[index];

  return (
    <section className="card testimonial-card reveal" style={{ '--delay': '150ms' }}>
      <Label>Testimonials</Label>
      <div className="testimonial-copy" key={index}>
        <p>{current.quote}</p>
        <div>
          <strong>{current.name}</strong>
          <span>{current.role}</span>
        </div>
      </div>
      <button
        className="round-next"
        onClick={() => setIndex((index + 1) % testimonials.length)}
        aria-label="Show next testimonial"
      >
        <IconArrowRight size={18} />
      </button>
    </section>
  );
}

function ExperienceCard() {
  const jobs = [
    ['Senior Art Director', 'Gravitas', '2026 – Present'],
    ['Regional Creative Lead', 'Creme Digital', '2023 – 2026'],
    ['Creative Lead', 'Yolbelet LLC', '2021 – 2022'],
    ['Full-Stack Graphic Designer', 'Freelance', '2018 – Present'],
  ];

  return (
    <section className="card experience-card reveal" style={{ '--delay': '120ms' }}>
      <Label>Experience</Label>
      <div className="job-list">
        {jobs.map(([role, company, year]) => (
          <div className="job-row" key={role}>
            <div>
              <h3>{role}</h3>
              <p>{company}</p>
            </div>
            <span>{year}</span>
          </div>
        ))}
      </div>
      <a className="pill-button" href={links.linkedin} target="_blank" rel="noreferrer">
        View resume <IconArrowUpRight size={16} />
      </a>
    </section>
  );
}

function CaseCard({ id, wide = false, delay = '0ms' }) {
  const item = caseStudies[id];
  return (
    <a href={`#/case-study/${id}`} className={`card case-card ${item.className} ${wide ? 'wide' : ''} reveal`} style={{ '--delay': delay }}>
      <Label>{item.label}</Label>
      <img className="case-visual" src={item.image} alt={item.title} />
      <h2>{item.title} <IconArrowUpRight size={17} /></h2>
    </a>
  );
}

function ExternalCasesCard() {
  return (
    <a href={links.externalCases} target="_blank" rel="noreferrer" className="card other-cases-card reveal" style={{ '--delay': '260ms' }}>
      <img src={otherCasesImage} alt="Other case studies preview" />
      <h2>Check out my other case studies <IconArrowUpRight size={17} /></h2>
    </a>
  );
}

function SocialStack() {
  return (
    <section className="social-stack reveal" style={{ '--delay': '220ms' }}>
      <a className="card social-card" href={links.email}>
        <IconMail size={26} />
        <strong>Say Hello</strong>
      </a>
      <a className="card social-card" href={links.instagram} target="_blank" rel="noreferrer">
        <IconInstagram size={25} />
        <strong>Instagram</strong>
      </a>
      <a className="card social-card" href={links.linkedin} target="_blank" rel="noreferrer">
        <IconLinkedin size={25} />
        <strong>LinkedIn</strong>
      </a>
    </section>
  );
}

function Home() {
  useEffect(() => {
    const items = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: '0px 0px -8% 0px' }
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main className="home-grid">
        <AboutCard />
        <ProfileCard />
        <ClientsCard />
        <TestimonialCard />
        <ExperienceCard />
        <CaseCard id="imoney" delay="160ms" />
        <CaseCard id="ramadan" delay="220ms" />
        <CaseCard id="phillip" wide delay="180ms" />
        <CaseCard id="shortcut" delay="240ms" />
        <CaseCard id="systems" wide delay="280ms" />
        <SocialStack />
        <ExternalCasesCard />
      </main>
    </>
  );
}

function CaseStudyPage({ slug }) {
  const item = caseStudies[slug];

  if (!item) {
    return (
      <main className="case-page">
        <a className="back-link" href="#/">← Back home</a>
        <h1>Case study not found.</h1>
      </main>
    );
  }

  return (
    <main className="case-page">
      <a className="back-link" href="#/">← Back home</a>
      <section className="card case-hero">
        <Label>Coming Soon</Label>
        <h1>{item.title}</h1>
        <p>We’ll design this full case study page together next. For now, this route is connected and ready.</p>
        <img src={item.image} alt={item.title} />
      </section>
    </main>
  );
}

export default function App() {
  const route = useHashRoute();
  const slug = useMemo(() => route.replace('/case-study/', ''), [route]);
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className="app-shell">
      {route.startsWith('/case-study/') ? <CaseStudyPage slug={slug} /> : <Home />}
      <ThemeSwitch theme={theme} setTheme={setTheme} />
    </div>
  );
}
