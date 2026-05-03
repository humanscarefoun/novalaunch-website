import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
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

// Minimal Pages for Router
const Services = () => (
  <section className="section" style={{ minHeight: '80vh', paddingTop: '160px' }}>
    <div className="container">
      <h1 className="animate-in">Our Services</h1>
      <p className="animate-in delay-100" style={{ maxWidth: '800px', marginTop: '2rem' }}>
        We engineer premium digital infrastructures. Unlike traditional agencies, we provide an all-in-one ecosystem that scales seamlessly. Our core services include high-converting web applications, robust CMS dashboards, and scalable API integrations built on modern stacks.
      </p>
    </div>
  </section>
);

const Products = () => (
  <section className="section" style={{ minHeight: '80vh', paddingTop: '160px' }}>
    <div className="container">
      <h1 className="animate-in">Premium Themes</h1>
      <p className="animate-in delay-100" style={{ maxWidth: '800px', marginTop: '2rem' }}>
        Explore our showcase of excellence. From SaaS analytics dashboards to Fintech marketing sites, our themes are designed to perform, convert, and inspire. Each theme includes built-in dark modes, responsive layouts, and interactive animations.
      </p>
    </div>
  </section>
);

const Process = () => (
  <section className="section" style={{ minHeight: '80vh', paddingTop: '160px' }}>
    <div className="container">
      <h1 className="animate-in">The Blueprint</h1>
      <p className="animate-in delay-100" style={{ maxWidth: '800px', marginTop: '2rem' }}>
        From concept to launch in exactly 14 days. Our milestone-driven development cycle guarantees precision. Days 1-3: Brand mapping and architecture. Days 4-10: Frontend and backend build. Days 11-14: Quality assurance and handover.
      </p>
    </div>
  </section>
);

const Contact = () => (
  <section className="section" style={{ minHeight: '80vh', paddingTop: '160px' }}>
    <div className="container">
      <h1 className="animate-in">Get in Touch</h1>
      <p className="animate-in delay-100" style={{ maxWidth: '800px', marginTop: '2rem' }}>
        Ready to deploy your business globally? Secure your spot in our development queue.
        <br/><br/>
        <strong>Email:</strong> hello@novalaunch.com<br/>
        <strong>Phone:</strong> Global Contact Number
      </p>
    </div>
  </section>
);

const Privacy = () => (
  <section className="section" style={{ minHeight: '80vh', paddingTop: '160px' }}>
    <div className="container">
      <h1 className="animate-in">Privacy Policy</h1>
      <p className="animate-in delay-100" style={{ maxWidth: '800px', marginTop: '2rem' }}>
        Your privacy is our priority. We design our systems with security at the core, ensuring your data is handled with the utmost care and compliance.
      </p>
    </div>
  </section>
);

const Terms = () => (
  <section className="section" style={{ minHeight: '80vh', paddingTop: '160px' }}>
    <div className="container">
      <h1 className="animate-in">Terms of Service</h1>
      <p className="animate-in delay-100" style={{ maxWidth: '800px', marginTop: '2rem' }}>
        By using our services, you agree to our comprehensive delivery guarantee and milestone terms. We believe in complete transparency and operational excellence.
      </p>
    </div>
  </section>
);

// Funny Easter Egg Component
const FunnyPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState("");
  
  const jokes = [
    "Are we launching yet? My coffee is getting cold! ☕",
    "Psst... the 'Ocean' theme is my favorite. 🌊 Don't tell the others.",
    "Help! I'm trapped inside a React useEffect hook! 😱",
    "Did you know? If you toggle themes too fast, absolutely nothing bad happens. 🔄",
    "I'm just a random popup living my best life. 🎈",
    "404 Error: Motivation not found. Just kidding, let's build! 🚀",
    "Beep boop. I am definitely a human and not a randomized array of strings. 🤖",
    "You look like someone who needs more animations! ✨"
  ];

  useEffect(() => {
    // Randomly show the popup every 15-30 seconds
    const scheduleNextPopup = () => {
      const nextTime = Math.random() * 15000 + 15000; // 15 to 30 seconds
      setTimeout(() => {
        setMessage(jokes[Math.floor(Math.random() * jokes.length)]);
        setIsVisible(true);
        
        // Hide after 5 seconds
        setTimeout(() => {
          setIsVisible(false);
          scheduleNextPopup();
        }, 5000);
      }, nextTime);
    };

    scheduleNextPopup();
  }, []);

  return (
    <div style={{
      position: 'fixed',
      bottom: isVisible ? '30px' : '-150px',
      left: '30px',
      background: 'var(--color-bg)',
      border: '2px solid var(--color-accent)',
      borderRadius: 'var(--radius-lg)',
      padding: '1rem',
      boxShadow: 'var(--shadow-xl)',
      zIndex: 99999,
      maxWidth: '250px',
      transition: 'bottom 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
      display: 'flex',
      gap: '10px',
      alignItems: 'flex-start'
    }}>
      <div style={{ fontSize: '24px' }}>🤡</div>
      <div style={{ fontSize: '0.9rem', color: 'var(--color-text)', fontWeight: 500 }}>
        {message}
      </div>
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

    // Scroll Observer for Animations
    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.15 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('is-visible');
      });
    }, observerOptions);

    // Function to observe elements
    const observeElements = () => {
      const animatedElements = document.querySelectorAll('.animate-in:not(.is-visible)');
      animatedElements.forEach(el => observer.observe(el));
    };

    // Initial observe and mutation observer for dynamic pages
    observeElements();
    const mutationObserver = new MutationObserver(observeElements);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="app" style={{ '--mouse-x': `${mousePosition.x}px`, '--mouse-y': `${mousePosition.y}px` }}>
        <div className="noise-bg"></div>
        <div className="spotlight"></div>
        <FunnyPopup />

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
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} />
            <Route path="/process" element={<Process />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
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
