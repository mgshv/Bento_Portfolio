import { useEffect, useState } from 'react'

const caseStudies = {
  'desserts-shop': {
    title: 'Desserts Shop',
    description: 'A refined ecommerce concept for a modern dessert brand, focused on clean presentation, strong product visuals, and a premium browsing experience.',
    role: 'Art Direction',
    client: 'Desserts Shop',
    year: '2024',
    services: 'Branding, Web Design',
  },
  'job-gate': {
    title: 'Job Gate',
    description: 'A mobile-first job search experience designed to make browsing, filtering, and applying for roles feel simple and focused.',
    role: 'Product Design',
    client: 'Job Gate',
    year: '2024',
    services: 'UX/UI, Mobile App',
  },
  cashless: {
    title: 'Cashless',
    description: 'A finance app concept built around simple card management, clear balances, and a clean everyday payment experience.',
    role: 'UX/UI Design',
    client: 'Cashless',
    year: '2024',
    services: 'App Design, Visual System',
  },
}

function Label({ children }) { return <span className="label">{children}</span> }

function ThemeSwitch({ theme, setTheme }) {
  return <div className="theme-switch">
    <button className={theme === 'light' ? 'active' : ''} onClick={() => setTheme('light')} aria-label="Light mode">☼</button>
    <button className={theme === 'dark' ? 'active' : ''} onClick={() => setTheme('dark')} aria-label="Dark mode">☾</button>
  </div>
}

function Header() { return <header className="header"><h1>Muhammetgeldi Goshayev</h1></header> }

function AboutCard() {
  return <section className="card pad about">
    <Label>About</Label>
    <p>Principal product designer based in Palestine 🇵🇸 driven by a strong desire to encourage collaboration and incorporate innovative strategies into the realms of technology, business, and art.</p>
  </section>
}

function ProfileCard() {
  return <section className="card pad profile"><div className="avatar-wrap"><img src="/profile.png" alt="Profile" /></div></section>
}

function LinkedInCard() {
  return <a className="card linkedin" href="https://linkedin.com" target="_blank"><span className="in">in</span><span className="arrow">↗</span></a>
}

function ServiceCard({ title = 'Art direction' }) {
  return <section className="card pad service"><Label>Services</Label><div><h2>{title}</h2><p>Tailored to capture brand's essence, creating functional and easy to use experiences.</p></div></section>
}

function ExperienceCard() {
  const jobs = [['Design Lead','Wanderu','2023 – Present'],['Senior Designer','Spotify','2022 – 2023'],['Digital Designer','Freelancer','2020 – 2022'],['UX/UI Designer','Shrink','2018 – 2019']]
  return <section className="card pad experience"><Label>Experience</Label><div className="jobs">{jobs.map(([role, company, year]) => <div className="job" key={role}><div><h3>{role}</h3><p>{company}</p></div><p className="year">{year}</p></div>)}</div><a className="resume" href="#">View resume ↗</a></section>
}

function CaseStudyCard({ slug, title, tall = false }) {
  return <a href={`#/case-study/${slug}`} className={`card pad case-card ${tall ? 'tall' : ''}`}><Label>Case Study</Label><img src="/profile.png" alt={title} /><h2>{title}</h2></a>
}

function TemplateCard() { return <section className="card pad template"><Label>Templates</Label><div className="template-preview" /></section> }
function SocialCard({ icon, handle }) { return <a href="#" className="card pad social"><span className="icon">{icon}</span><span className="handle">{handle}</span></a> }

function Home() {
  return <><Header /><div className="grid">
    <div className="stack col-2"><AboutCard /><LinkedInCard /><ServiceCard /></div>
    <div className="stack col-2"><ProfileCard /><ExperienceCard /><div className="two-grid"><CaseStudyCard slug="cashless" title="Cashless" /><TemplateCard /></div></div>
    <div className="stack"><CaseStudyCard slug="desserts-shop" title="Desserts Shop" tall /><CaseStudyCard slug="job-gate" title="Job Gate" tall /></div>
    <div className="social-grid col-5"><SocialCard icon="𝕏" handle="@tamermagdy07" /><SocialCard icon="◎" handle="@tamermagdy07" /><SocialCard icon="◌" handle="@tamermagdy" /><SocialCard icon="Bē" handle="@tamermagdy" /><SocialCard icon="✉" handle="Say Hello" /></div>
  </div></>
}

function CaseStudyPage({ slug }) {
  const item = caseStudies[slug] || caseStudies['desserts-shop']
  return <div className="case-page"><a className="back" href="#/">← Back home</a><section className="card hero"><Label>Case Study</Label><h1>{item.title}</h1><p>{item.description}</p><div className="meta"><div><span>Role</span>{item.role}</div><div><span>Client</span>{item.client}</div><div><span>Year</span>{item.year}</div><div><span>Services</span>{item.services}</div></div></section><div className="mockup"></div></div>
}

function App() {
  const [theme, setTheme] = useState('dark')
  const [path, setPath] = useState(window.location.hash || '#/')
  useEffect(() => { document.documentElement.classList.toggle('dark', theme === 'dark') }, [theme])
  useEffect(() => { const onHash = () => setPath(window.location.hash || '#/'); window.addEventListener('hashchange', onHash); return () => window.removeEventListener('hashchange', onHash) }, [])
  const slug = path.replace('#/case-study/', '')
  return <main className="page">{path.startsWith('#/case-study/') ? <CaseStudyPage slug={slug} /> : <Home />}<ThemeSwitch theme={theme} setTheme={setTheme} /></main>
}

export default App
