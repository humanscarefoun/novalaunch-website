import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Home from './pages/Home';
import Services from './pages/Services';
import Products from './pages/Products';
import Process from './pages/Process';
import Contact from './pages/Contact';
import './App.css';

const themes = [
  { id: 'light', color: '#ffffff' },
  { id: 'dark', color: '#09090b' },
  { id: 'ocean', color: '#041f33' },
  { id: 'emerald', color: '#022c22' },
  { id: 'royal', color: '#2e054e' }
];

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

const Privacy = () => (
  <motion.section 
    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
    className="section" style={{ minHeight: '80vh', paddingTop: '160px' }}
  >
    <div className="container">
      <h1 className="animate-in">Privacy Policy</h1>
      <p className="animate-in delay-100" style={{ maxWidth: '800px', marginTop: '2rem' }}>
        Your privacy is our priority. We design our systems with security at the core, ensuring your data is handled with the utmost care and compliance.
      </p>
    </div>
  </motion.section>
);

const Terms = () => (
  <motion.section 
    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
    className="section" style={{ minHeight: '80vh', paddingTop: '160px' }}
  >
    <div className="container">
      <h1 className="animate-in">Terms of Service</h1>
      <p className="animate-in delay-100" style={{ maxWidth: '800px', marginTop: '2rem' }}>
        By using our services, you agree to our comprehensive delivery guarantee and milestone terms. We believe in complete transparency and operational excellence.
      </p>
    </div>
  </motion.section>
);

// Wrapper for AnimatePresence to work with react-router
const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/process" element={<Process />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </AnimatePresence>
  );
};

// Retro Superhero Landing Intro Component
const IntroAnimation = () => {
  const [introDone, setIntroDone] = useState(false);

  useEffect(() => {
    // The total animation (drop + shake + text) takes about 1.8s
    // Fade out after 2 seconds
    const timer = setTimeout(() => {
      setIntroDone(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`intro-container screen-shake ${introDone ? 'fade-out' : ''}`}>
      <div className="impact-crater"></div>
      <div className="superhero">🦸‍♂️</div>
      <div className="crash-text">BAM!</div>
    </div>
  );
};

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [theme, setTheme] = useState('light');
  const [scrolled, setScrolled] = useState(false);

  // Apply theme to document
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Effects & Listeners
  useEffect(() => {
    // Mouse Tracking for Spotlight
    const handleMouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);

    // Header Scroll State
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="app" style={{ '--mouse-x': `${mousePosition.x}px`, '--mouse-y': `${mousePosition.y}px` }}>
        <IntroAnimation />
        <div className="noise-bg"></div>
        <div className="spotlight"></div>

        {/* Header Layout */}
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
          <Link to="/" className="logo">
            NovaLaunch<span>.</span>
          </Link>
          
          <nav className="nav">
            <Link to="/services">Services</Link>
            <Link to="/products">Products</Link>
            <Link to="/process">Process</Link>
            <Link to="/contact">Contact Us</Link>
          </nav>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            {/* Theme Switcher */}
            <div className="theme-switcher">
              {themes.map(t => (
                <div 
                  key={t.id}
                  className={`theme-btn ${theme === t.id ? 'active' : ''}`}
                  style={{ backgroundColor: t.color, border: theme === t.id ? '2px solid var(--color-primary)' : '2px solid transparent' }}
                  onClick={() => setTheme(t.id)}
                  title={`Switch to ${t.id} theme`}
                />
              ))}
            </div>
            
            <Link to="/contact" className="btn btn-primary" style={{ padding: '0.6rem 1.2rem', fontSize: '0.875rem' }}>
              Get Started
            </Link>
          </div>
        </header>

        {/* Route Definitions */}
        <main style={{ flex: 1 }}>
          <AnimatedRoutes />
        </main>

        {/* Footer Layout */}
        <footer className="footer">
          <div className="container">
            <div className="footer-content">
              <Link to="/" className="logo" style={{ fontSize: '1.25rem' }}>
                NovaLaunch<span>.</span>
              </Link>
              
              <div className="footer-links">
                <Link to="/">Home</Link>
                <Link to="/services">Services</Link>
                <Link to="/process">Process</Link>
                <Link to="/contact">Contact Us</Link>
                <Link to="/terms">Terms of Service</Link>
                <Link to="/privacy">Privacy Policy</Link>
              </div>
              
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontWeight: 500, color: 'var(--color-text)' }}>hello@novalaunch.com</div>
                <div style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>Global Contact Number</div>
              </div>
            </div>
            
            <div className="footer-bottom">
              &copy; {new Date().getFullYear()} NovaLaunch Digital. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
