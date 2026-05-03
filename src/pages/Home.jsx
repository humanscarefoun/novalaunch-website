import { 
  MonitorSmartphone, 
  LayoutDashboard, 
  Mail, 
  Rocket, 
  ArrowRight,
  ChevronRight,
  Globe
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

// Reusable motion variants for consistent Framer Motion animations
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 20, stiffness: 100 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const MagneticWrapper = ({ children }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    // Pull the button towards the cursor by 20%
    x.set(middleX * 0.2);
    y.set(middleY * 0.2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: mouseXSpring, y: mouseYSpring, display: 'inline-block' }}
    >
      {children}
    </motion.div>
  );
};

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      {/* 1. Hero Section */}
      <section className="hero section">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="badge animate-float" 
            style={{ marginBottom: '1.5rem', color: 'var(--color-accent)' }}
          >
            ✨ New: Premium Animated Themes Included
          </motion.div>
          <motion.h1 
            initial="hidden" animate="visible" variants={fadeInUp}
            className="hero-title"
          >
            Launch Your Digital Presence in 14 Days. <span className="text-gradient">Fully Equipped.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}
            className="hero-subtitle"
          >
            We build premium websites paired with an all-in-one business management dashboard, custom domain, and professional email. Stop waiting months for a website. Start doing business.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }}
            className="hero-actions"
            style={{ display: 'flex', gap: '1rem' }}
          >
            <MagneticWrapper>
              <Link to="/process" className="btn btn-primary">
                Start Your Project Today <ArrowRight size={18} />
              </Link>
            </MagneticWrapper>
            <MagneticWrapper>
              <Link to="/services" className="btn btn-secondary">
                View Our Process
              </Link>
            </MagneticWrapper>
          </motion.div>
        </div>
      </section>

      {/* 2. The Problem / Solution Section */}
      <section className="solution section">
        <div className="container">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            className="solution-content"
          >
            <motion.h2 variants={fadeInUp}>The Old Way of Building Websites is Broken.</motion.h2>
            <motion.p variants={fadeInUp} style={{ marginTop: '1rem' }}>
              Traditional agencies take months, charge hidden fees, and leave you to figure out hosting, domains, and business emails on your own.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="solution-box">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <Globe size={32} color="var(--color-accent)" />
                <h3 style={{ margin: 0 }}>The NovaLaunch Solution</h3>
              </div>
              <p style={{ margin: 0, color: 'var(--color-text)', fontSize: '1.125rem' }}>
                We engineer a complete digital infrastructure. In two weeks, you receive a high-converting website, a professional communication suite, and a command-center dashboard to run your business operations efficiently.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. Core Deliverables (Features Section) */}
      <section className="features section">
        <div className="container">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            className="section-header"
          >
            <motion.h2 variants={fadeInUp}>Everything You Need to Scale,<br/>Delivered in Two Weeks.</motion.h2>
          </motion.div>
          
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            className="grid-4"
          >
            <motion.div variants={fadeInUp} className="feature-card">
              <div className="feature-icon"><MonitorSmartphone size={28} /></div>
              <h3>Premium Custom Website</h3>
              <p>Responsive, SEO-optimized, and engineered to convert visitors into clients. Built for speed and global accessibility.</p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="feature-card">
              <div className="feature-icon"><LayoutDashboard size={28} /></div>
              <h3>The Command Dashboard</h3>
              <p>A secure, centralized portal to manage your leads, track website analytics, and update content without needing to write a single line of code.</p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="feature-card">
              <div className="feature-icon"><Mail size={28} /></div>
              <h3>Professional Infrastructure</h3>
              <p>Your custom .com (or global equivalent) domain and verified business email (name@yourbusiness.com) configured and ready to use.</p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="feature-card">
              <div className="feature-icon"><Rocket size={28} /></div>
              <h3>14-Day Delivery Guarantee</h3>
              <p>A streamlined, milestone-driven development cycle that ensures your business goes live precisely on schedule.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Products Showcase Section */}
      <section className="products section">
        <div className="container">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            className="section-header"
          >
            <motion.div variants={fadeInUp} className="badge" style={{ marginBottom: '1rem', color: 'var(--color-accent)' }}>Premium Themes</motion.div>
            <motion.h2 variants={fadeInUp}>Showcase of Excellence</motion.h2>
            <motion.p variants={fadeInUp} style={{ marginTop: '1rem' }}>Explore our hand-crafted, high-converting digital products designed for modern businesses.</motion.p>
          </motion.div>
          
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            className="products-grid"
          >
            <motion.div variants={fadeInUp} whileHover={{ y: -10, scale: 1.02 }} className="product-card">
              <div className="product-image-container">
                <div className="product-image-placeholder" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop")' }}></div>
                <div className="product-overlay">
                  <button className="btn btn-accent">Live Preview <ArrowRight size={16} style={{marginLeft: '4px'}} /></button>
                </div>
              </div>
              <div className="product-details">
                <h3>SaaS Analytics Dashboard</h3>
                <p>A comprehensive admin panel theme with built-in dark mode and data visualization widgets.</p>
                <div className="product-tags">
                  <span className="tag">Dashboard</span><span className="tag">React</span><span className="tag">Dark Mode</span>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ y: -10, scale: 1.02 }} className="product-card">
              <div className="product-image-container">
                <div className="product-image-placeholder" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop")' }}></div>
                <div className="product-overlay">
                  <button className="btn btn-accent">Live Preview <ArrowRight size={16} style={{marginLeft: '4px'}} /></button>
                </div>
              </div>
              <div className="product-details">
                <h3>Fintech Marketing Site</h3>
                <p>A high-converting landing page optimized for financial services and modern banking startups.</p>
                <div className="product-tags">
                  <span className="tag">Landing Page</span><span className="tag">Fintech</span><span className="tag">Animations</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={fadeInUp} whileHover={{ y: -10, scale: 1.02 }} className="product-card">
              <div className="product-image-container">
                <div className="product-image-placeholder" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=2070&auto=format&fit=crop")' }}></div>
                <div className="product-overlay">
                  <button className="btn btn-accent">Live Preview <ArrowRight size={16} style={{marginLeft: '4px'}} /></button>
                </div>
              </div>
              <div className="product-details">
                <h3>E-Commerce Storefront</h3>
                <p>A premium shopping experience with seamless checkout flows and dynamic product filtering.</p>
                <div className="product-tags">
                  <span className="tag">E-Commerce</span><span className="tag">Stripe</span><span className="tag">Fast</span>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ y: -10, scale: 1.02 }} className="product-card">
              <div className="product-image-container">
                <div className="product-image-placeholder" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1555421689-d68471e189f2?q=80&w=2070&auto=format&fit=crop")' }}></div>
                <div className="product-overlay">
                  <button className="btn btn-accent">Live Preview <ArrowRight size={16} style={{marginLeft: '4px'}} /></button>
                </div>
              </div>
              <div className="product-details">
                <h3>Agency Portfolio Pro</h3>
                <p>A stunning portfolio template with scroll-driven animations and interactive project cases.</p>
                <div className="product-tags">
                  <span className="tag">Portfolio</span><span className="tag">Creative</span><span className="tag">WebGL</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 4. How It Works (Process Section) */}
      <section className="process">
        <div className="container">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            className="section-header"
          >
            <motion.h2 variants={fadeInUp}>From Concept to Launch in 3 Simple Steps</motion.h2>
          </motion.div>
          
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            className="grid-3"
          >
            <motion.div variants={fadeInUp} className="process-step">
              <div className="step-number">1</div>
              <h3>The Blueprint</h3>
              <div style={{ color: 'var(--color-accent)', fontSize: '0.95rem', fontWeight: 600, marginBottom: '0.75rem' }}>Days 1-3</div>
              <p>We lock in your brand identity, secure your custom domain, and map out the site architecture based on your business goals.</p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="process-step">
              <div className="step-number">2</div>
              <h3>The Build</h3>
              <div style={{ color: 'var(--color-accent)', fontSize: '0.95rem', fontWeight: 600, marginBottom: '0.75rem' }}>Days 4-10</div>
              <p>Our developers build your front-end website while configuring your backend management dashboard and professional email systems.</p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="process-step">
              <div className="step-number">3</div>
              <h3>The Handover</h3>
              <div style={{ color: 'var(--color-accent)', fontSize: '0.95rem', fontWeight: 600, marginBottom: '0.75rem' }}>Days 11-14</div>
              <p>Rigorous quality assurance, mobile responsiveness testing, and a final walkthrough. You get the keys to your new digital headquarters.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 5. Call to Action */}
      <section className="cta section">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
          className="container"
        >
          <motion.h2 variants={fadeInUp}>Ready to Deploy Your Business Globally?</motion.h2>
          <motion.p variants={fadeInUp}>Secure your spot in our development queue and have your complete digital infrastructure live in 14 days.</motion.p>
          <motion.div variants={fadeInUp} style={{ marginTop: '2rem' }}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ display: 'inline-block' }}>
              <Link to="/contact" className="btn btn-primary" style={{ padding: '1.25rem 2.5rem', fontSize: '1.125rem' }}>
                Book Your Kickoff Call <ChevronRight size={24} />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </motion.div>
  );
}
