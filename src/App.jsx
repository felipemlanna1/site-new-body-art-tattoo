import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  WhatsappLogo, Phone, MapPin, Clock, Star, InstagramLogo,
  ArrowRight, Palette, Shield, Syringe, PencilLine,
  EnvelopeSimple, Shapes
} from '@phosphor-icons/react'
import './index.css'

const WHATSAPP = 'https://wa.me/5548991918338?text=Ola! Gostaria de agendar uma tatuagem no New Body Art.'
const PHONE = '(48) 99191-8338'
const ADDRESS = 'R. Henrique Veras do Nascimento, 240 — Lagoa da Conceicao, Florianopolis/SC'
const EMAIL = 'newbodyart@hotmail.com'

function Reveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }} className={className}>
      {children}
    </motion.div>
  )
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  useEffect(() => { const h = () => setScrolled(window.scrollY > 50); window.addEventListener('scroll', h); return () => window.removeEventListener('scroll', h) }, [])
  useEffect(() => { document.body.style.overflow = menuOpen ? 'hidden' : ''; return () => { document.body.style.overflow = '' } }, [menuOpen])

  const links = [
    { label: 'Sobre', href: '#sobre' }, { label: 'Estilos', href: '#estilos' },
    { label: 'Processo', href: '#processo' }, { label: 'Galeria', href: '#galeria' },
    { label: 'Piercing', href: '#piercing' }, { label: 'Avaliacoes', href: '#avaliacoes' },
    { label: 'Horarios', href: '#horarios' }, { label: 'Contato', href: '#contato' },
  ]
  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <a href="#" className="navbar-brand"><img src="./images/logo-oficial.png" alt="New Body Art" /></a>
        <div className="navbar-links">
          {links.map(l => <a key={l.href} href={l.href} className="navbar-link">{l.label}</a>)}
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="navbar-cta"><WhatsappLogo size={14} weight="fill" />Agendar</a>
        </div>
        <button className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu"><span /><span /><span /></button>
      </nav>
      <div className={`mobile-nav ${menuOpen ? 'open' : ''}`}>
        {links.map(l => <a key={l.href} href={l.href} className="mobile-nav-link" onClick={() => setMenuOpen(false)}>{l.label}</a>)}
        <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ marginTop: 20 }}><WhatsappLogo size={18} weight="fill" />Agendar Sessao</a>
      </div>
    </>
  )
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg"><img src="./images/hero-tattoo.jpg" alt="Tatuagem no New Body Art" /></div>
      <div className="hero-content">
        <Reveal><div className="hero-badge"><span className="hero-badge-dot" />20+ Anos de Arte na Pele</div></Reveal>
        <Reveal delay={0.1}><h1>Sua historia,<br />nossa <em>arte</em></h1></Reveal>
        <Reveal delay={0.2}><p className="hero-subtitle">Mais de 20 anos transformando ideias em arte permanente. Tatuagem autoral, piercing profissional e body art na Lagoa da Conceicao.</p></Reveal>
        <Reveal delay={0.3}>
          <div className="hero-actions">
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-primary"><WhatsappLogo size={18} weight="fill" />Agendar Sessao</a>
            <a href="#estilos" className="btn-outline">Ver Estilos<ArrowRight size={16} /></a>
          </div>
        </Reveal>
        <Reveal delay={0.4}>
          <div className="hero-info">
            <div className="hero-info-item"><MapPin size={16} weight="duotone" /><span>Lagoa da Conceicao</span></div>
            <div className="hero-info-item"><Star size={16} weight="fill" /><span>5.0 — 144 avaliacoes</span></div>
            <div className="hero-info-item"><Shield size={16} weight="duotone" /><span>20+ anos experiencia</span></div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="history" id="sobre">
      <div className="container">
        <div className="history-grid">
          <Reveal><div className="history-image"><img src="./images/estudio.jpg" alt="Estudio New Body Art" /></div></Reveal>
          <div>
            <Reveal><div className="section-label">Sobre o Estudio</div><h2 className="section-title">Mais de duas decadas<br />de <em>body art</em></h2></Reveal>
            <Reveal delay={0.15}><p className="history-text">O New Body Art e um estudio de tatuagem e piercing com mais de 20 anos de experiencia na arte da tatuagem e body art. Localizado na Lagoa da Conceicao, um dos pontos mais emblematicos de Florianopolis, o estudio e referencia em qualidade e seguranca.</p></Reveal>
            <Reveal delay={0.25}><p className="history-text" style={{ marginTop: 16 }}>Trabalhamos com diversos estilos — do realismo ao fine line, do old school ao blackwork. Cada projeto e unico e desenvolvido em parceria com o cliente para garantir uma tatuagem que conte a sua historia.</p></Reveal>
            <Reveal delay={0.35}><a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ marginTop: 32 }}><WhatsappLogo size={18} weight="fill" />Solicitar Orcamento</a></Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

function Styles() {
  const estilos = [
    { title: 'Realismo', desc: 'Retratos e cenas hiperrealistas em preto e cinza ou colorido. Riqueza de detalhes que impressiona.', image: './images/hero-tattoo.jpg' },
    { title: 'Fine Line', desc: 'Tracos finos e delicados, perfeitos para tatuagens minimalistas e elegantes. Precisao milimetrica.', image: './images/fineline.jpg' },
    { title: 'Colorido & New School', desc: 'Cores vibrantes e design ousado. Do tradicional ao contemporaneo com paleta rica e saturada.', image: './images/colorido.jpg' },
    { title: 'Blackwork & Geometrico', desc: 'Trabalhos em preto solido, geometrias complexas e pontilhismo. Arte grafica na pele.', image: './images/fineline.jpg' },
    { title: 'Cover-up & Reforma', desc: 'Transformacao de tatuagens antigas em novas obras de arte. Cobertura profissional com resultado surpreendente.', image: './images/hero-tattoo.jpg' },
    { title: 'Piercing Profissional', desc: 'Body piercers qualificados com materiais esterilizados de alta qualidade. Seguranca total no procedimento.', image: './images/estudio.jpg' },
  ]
  return (
    <section className="cardapio" id="estilos">
      <div className="container">
        <Reveal><div className="section-label">Estilos</div><h2 className="section-title">Encontre o estilo<br />perfeito para <em>voce</em></h2></Reveal>
        <div className="cardapio-grid">
          {estilos.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="cardapio-card">
                <div className="cardapio-card-image"><img src={s.image} alt={s.title} /></div>
                <div className="cardapio-card-content">
                  <div className="cardapio-card-category">{s.title}</div>
                  <p className="cardapio-card-desc">{s.desc}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Process() {
  const features = [
    { icon: PencilLine, title: 'Projeto Personalizado', desc: 'Cada tatuagem comeca com uma conversa. Desenvolvemos o projeto junto com voce ate ficar perfeito.' },
    { icon: Shield, title: 'Biosseguranca Total', desc: 'Materiais descartaveis, autoclaves, ambiente esterilizado. Seguimos todos os protocolos de seguranca.' },
    { icon: Palette, title: '20+ Anos de Tecnica', desc: 'Duas decadas aperfeicoando cada traco. Experiencia que se traduz em qualidade e confianca.' },
    { icon: Syringe, title: 'Tintas Premium', desc: 'Trabalhamos com as melhores tintas do mercado internacional. Cores vivas e duradouras.' },
  ]
  return (
    <section className="experience" id="processo">
      <div className="container">
        <div className="experience-grid">
          <div>
            <Reveal><div className="section-label">Nosso Processo</div><h2 className="section-title">Da ideia a arte<br /><em>permanente</em></h2></Reveal>
            <div className="experience-features">
              {features.map((f, i) => (
                <Reveal key={f.title} delay={i * 0.1}>
                  <div className="experience-feature">
                    <div className="experience-feature-icon"><f.icon size={22} weight="duotone" /></div>
                    <div><h4>{f.title}</h4><p>{f.desc}</p></div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal delay={0.2}>
            <div className="experience-image">
              <img src="./images/fineline.jpg" alt="Fine line tattoo" />
              <div className="experience-image-badge"><span className="number">5.0</span><span className="label">Nota no Google</span></div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Gallery() {
  const images = [
    { src: './images/hero-tattoo.jpg', alt: 'Realismo' },
    { src: './images/fineline.jpg', alt: 'Fine line' },
    { src: './images/colorido.jpg', alt: 'Colorido' },
    { src: './images/estudio.jpg', alt: 'Estudio' },
    { src: './images/hero-tattoo.jpg', alt: 'Processo' },
  ]
  return (
    <section className="gallery" id="galeria">
      <div className="container">
        <Reveal><div className="section-label">Portfolio</div><h2 className="section-title">Nossos <em>trabalhos</em></h2></Reveal>
        <div className="gallery-grid">
          {images.map((img, i) => <Reveal key={i} delay={i * 0.08}><div className="gallery-item"><img src={img.src} alt={img.alt} /></div></Reveal>)}
        </div>
      </div>
    </section>
  )
}

function Piercing() {
  return (
    <section className="experience" id="piercing" style={{ background: 'var(--ink)' }}>
      <div className="container">
        <div className="experience-grid">
          <Reveal delay={0.1}>
            <div className="experience-image">
              <img src="./images/estudio.jpg" alt="Piercing profissional" />
              <div className="experience-image-badge" style={{ background: 'var(--neon)' }}><span className="number" style={{ color: '#0a0a0a' }}>PRO</span><span className="label" style={{ color: 'rgba(10,10,10,0.7)' }}>Piercing certificado</span></div>
            </div>
          </Reveal>
          <div>
            <Reveal><div className="section-label">Piercing</div><h2 className="section-title">Piercing profissional com<br /><em>seguranca total</em></h2></Reveal>
            <Reveal delay={0.1}><p className="history-text">Nossos body piercers sao qualificados e equipados para atender todas as necessidades, desde piercings classicos ate os mais ousados. Utilizamos materiais de alta qualidade e procedimentos rigorosos de esterilizacao.</p></Reveal>
            <Reveal delay={0.2}>
              <div style={{ display: 'flex', gap: 12, marginTop: 32, flexWrap: 'wrap' }}>
                {['Orelha', 'Nariz', 'Lingua', 'Umbigo', 'Sobrancelha', 'Labial'].map(v => (
                  <span key={v} style={{ padding: '8px 16px', border: '1px solid rgba(0, 255, 136, 0.2)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--neon)', fontWeight: 500, fontFamily: 'var(--font-mono)' }}>{v}</span>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.3}><a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ marginTop: 32 }}><WhatsappLogo size={18} weight="fill" />Agendar Piercing</a></Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

function Reviews() {
  const reviews = [
    { text: 'Profissionais incriveis com mais de 20 anos de experiencia. Minha tatuagem ficou perfeita, exatamente como eu queria. Ambiente limpo e seguro. Nota 10!', author: 'Marcos R.', rating: 5 },
    { text: 'Melhor estudio da Lagoa. Fiz minha primeira tatuagem aqui e a experiencia foi maravilhosa. O artista ouviu tudo que eu queria e o resultado superou minhas expectativas.', author: 'Juliana P.', rating: 5 },
    { text: 'Voltei para fazer mais uma. O trabalho de fine line ficou impecavel, tracos perfeitos e delicados. Confianca total na equipe do New Body Art. Super recomendo.', author: 'Lucas F.', rating: 5 },
  ]
  return (
    <section className="reviews" id="avaliacoes">
      <div className="container">
        <div className="reviews-header">
          <div><Reveal><div className="section-label">Avaliacoes</div><h2 className="section-title">O que dizem nossos <em>clientes</em></h2></Reveal></div>
          <Reveal delay={0.1}>
            <div className="reviews-score">
              <div className="reviews-score-number">5.0</div>
              <div className="reviews-score-meta">
                <div className="reviews-stars">{[...Array(5)].map((_, i) => <Star key={i} size={18} weight="fill" />)}</div>
                <div className="reviews-count">144 avaliacoes no Google</div>
              </div>
            </div>
          </Reveal>
        </div>
        <div className="reviews-grid">
          {reviews.map((r, i) => (
            <Reveal key={i} delay={i * 0.12}>
              <div className="review-card">
                <div className="review-card-quote">&ldquo;</div>
                <div className="review-card-stars">{[...Array(r.rating)].map((_, j) => <Star key={j} size={14} weight="fill" />)}</div>
                <p className="review-card-text">{r.text}</p>
                <div className="review-card-author">{r.author}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Schedule() {
  const days = [
    { day: 'Segunda a Sexta', hours: '10h as 20h', note: 'Com agendamento' },
    { day: 'Sabado', hours: '10h as 18h', note: 'Com agendamento' },
    { day: 'Domingo', hours: 'Fechado', note: '' },
  ]
  return (
    <section className="experience" id="horarios" style={{ background: 'var(--ink-light)' }}>
      <div className="container">
        <div className="experience-grid">
          <div>
            <Reveal><div className="section-label">Horarios</div><h2 className="section-title">Agende sua<br /><em>sessao</em></h2></Reveal>
            <Reveal delay={0.1}><p className="history-text">Trabalhamos com hora marcada para dedicar toda a atencao ao seu projeto. Entre em contato pelo WhatsApp ou e-mail para agendar sua sessao ou solicitar um orcamento.</p></Reveal>
            <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 12 }}>
              {days.map((d, i) => (
                <Reveal key={d.day} delay={0.1 + i * 0.08}>
                  <div className="schedule-row"><div><div className="schedule-day">{d.day}</div>{d.note && <div className="schedule-note">{d.note}</div>}</div><div className="schedule-hours">{d.hours}</div></div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.5}>
              <div style={{ display: 'flex', gap: 12, marginTop: 24, flexWrap: 'wrap' }}>
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-primary"><WhatsappLogo size={18} weight="fill" />Agendar Sessao</a>
                <a href={`tel:${PHONE.replace(/\D/g, '')}`} className="btn-outline"><Phone size={18} weight="duotone" />{PHONE}</a>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <div className="experience-image">
              <img src="./images/colorido.jpg" alt="Tatuagem colorida" />
              <div className="experience-image-badge"><span className="number">144</span><span className="label">Avaliacoes 5 estrelas</span></div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function CtaSection() {
  return (
    <section className="cta-section">
      <div className="container">
        <Reveal>
          <h2>Pronto para eternizar<br />sua <em>historia</em>?</h2>
          <p>Entre em contato e transforme sua ideia em arte permanente. Orcamento sem compromisso.</p>
          <div className="cta-actions">
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-primary"><WhatsappLogo size={18} weight="fill" />WhatsApp</a>
            <a href={`mailto:${EMAIL}`} className="btn-outline"><EnvelopeSimple size={18} weight="duotone" />{EMAIL}</a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Contact() {
  const items = [
    { icon: MapPin, title: 'Endereco', text: ADDRESS },
    { icon: Clock, title: 'Horario', text: 'Seg-Sex 10h-20h | Sab 10h-18h' },
    { icon: Phone, title: 'Telefone', text: PHONE },
    { icon: EnvelopeSimple, title: 'E-mail', text: EMAIL },
  ]
  return (
    <section className="contact" id="contato">
      <div className="container">
        <Reveal><div className="section-label">Localizacao</div><h2 className="section-title">Venha nos <em>visitar</em></h2></Reveal>
        <div className="contact-grid">
          <div className="contact-info">
            {items.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.1}>
                <div className="contact-item"><div className="contact-item-icon"><item.icon size={20} weight="duotone" /></div><div><h4>{item.title}</h4><p>{item.text}</p></div></div>
              </Reveal>
            ))}
            <Reveal delay={0.4}><a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ marginTop: 16 }}><WhatsappLogo size={18} weight="fill" />Agendar Sessao</a></Reveal>
          </div>
          <Reveal delay={0.2}><div className="contact-map"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3536.0!2d-48.4650!3d-27.5980!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDM1JzUyLjgiUyA0OMKwMjcnNTQuMCJX!5e0!3m2!1spt-BR!2sbr!4v1" title="New Body Art" loading="lazy" /></div></Reveal>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div><div className="footer-brand-text">New Body Art</div><p className="footer-brand-desc">Estudio de tatuagem e piercing com 20+ anos de experiencia. Lagoa da Conceicao, Florianopolis/SC.</p></div>
          <div><div className="footer-title">Navegacao</div><ul className="footer-links"><li><a href="#sobre">Sobre</a></li><li><a href="#estilos">Estilos</a></li><li><a href="#galeria">Portfolio</a></li><li><a href="#avaliacoes">Avaliacoes</a></li><li><a href="#contato">Contato</a></li></ul></div>
          <div><div className="footer-title">Contato</div><ul className="footer-links"><li><a href={`tel:${PHONE.replace(/\D/g, '')}`}>{PHONE}</a></li><li><a href={WHATSAPP} target="_blank" rel="noopener noreferrer">WhatsApp</a></li><li><a href={`mailto:${EMAIL}`}>{EMAIL}</a></li><li><a>{ADDRESS}</a></li></ul></div>
        </div>
        <div className="footer-bottom"><span>&copy; 2026 New Body Art Tattoo</span><div className="footer-social"><a href={WHATSAPP} target="_blank" rel="noopener noreferrer"><WhatsappLogo size={20} weight="regular" /></a></div></div>
      </div>
    </footer>
  )
}

function WhatsAppFloat() { return <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="whatsapp-float"><WhatsappLogo size={28} weight="fill" /></a> }

export default function App() {
  return (<><Navbar /><main><Hero /><About /><Styles /><Process /><Gallery /><Piercing /><Reviews /><Schedule /><CtaSection /><Contact /></main><Footer /><WhatsAppFloat /></>)
}
