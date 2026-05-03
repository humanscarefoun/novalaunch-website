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

export default function Home() {
  return (
    <>
      {/* 1. Hero Section */}
      <section className="hero section">
        <div className="container">
          <div className="badge animate-in animate-float" style={{ marginBottom: '1.5rem', color: 'var(--color-accent)' }}>
            ✨ New: Premium Animated Themes Included
          </div>
          <h1 className="hero-title animate-in delay-100">
            Launch Your Digital Presence in 14 Days. <span className="text-gradient">Fully Equipped.</span>
          </h1>
          <p className="hero-subtitle animate-in delay-200">
            We build premium websites paired with an all-in-one business management dashboard, custom domain, and professional email. Stop waiting months for a website. Start doing business.
          </p>
          <div className="hero-actions animate-in delay-300">
            <Link to="/process" className="btn btn-primary">
              Start Your Project Today <ArrowRight size={18} />
            </Link>
            <Link to="/services" className="btn btn-secondary">
              View Our Process
            </Link>
          </div>
        </div>
      </section>

      {/* 2. The Problem / Solution Section */}
      <section className="solution section">
        <div className="container">
          <div className="solution-content">
            <h2 className="animate-in">The Old Way of Building Websites is Broken.</h2>
            <p className="animate-in delay-100" style={{ marginTop: '1rem' }}>
              Traditional agencies take months, charge hidden fees, and leave you to figure out hosting, domains, and business emails on your own.
            </p>
            
            <div className="solution-box animate-in delay-200">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <Globe size={32} color="var(--color-accent)" />
                <h3 style={{ margin: 0 }}>The NovaLaunch Solution</h3>
              </div>
              <p style={{ margin: 0, color: 'var(--color-text)', fontSize: '1.125rem' }}>
                We engineer a complete digital infrastructure. In two weeks, you receive a high-converting website, a professional communication suite, and a command-center dashboard to run your business operations efficiently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Deliverables (Features Section) */}
      <section className="features section">
        <div className="container">
          <div className="section-header">
            <h2 className="animate-in">Everything You Need to Scale,<br/>Delivered in Two Weeks.</h2>
          </div>
          
          <div className="grid-4">
            <div className="feature-card animate-in">
              <div className="feature-icon"><MonitorSmartphone size={28} /></div>
              <h3>Premium Custom Website</h3>
              <p>Responsive, SEO-optimized, and engineered to convert visitors into clients. Built for speed and global accessibility.</p>
            </div>
            
            <div className="feature-card animate-in delay-100">
              <div className="feature-icon"><LayoutDashboard size={28} /></div>
              <h3>The Command Dashboard</h3>
              <p>A secure, centralized portal to manage your leads, track website analytics, and update content without needing to write a single line of code.</p>
            </div>
            
            <div className="feature-card animate-in delay-200">
              <div className="feature-icon"><Mail size={28} /></div>
              <h3>Professional Infrastructure</h3>
              <p>Your custom .com (or global equivalent) domain and verified business email (name@yourbusiness.com) configured and ready to use.</p>
            </div>
            
            <div className="feature-card animate-in delay-300">
              <div className="feature-icon"><Rocket size={28} /></div>
              <h3>14-Day Delivery Guarantee</h3>
              <p>A streamlined, milestone-driven development cycle that ensures your business goes live precisely on schedule.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Showcase Section */}
      <section className="products section">
        <div className="container">
          <div className="section-header">
            <div className="badge animate-in" style={{ marginBottom: '1rem', color: 'var(--color-accent)' }}>Premium Themes</div>
            <h2 className="animate-in delay-100">Showcase of Excellence</h2>
            <p className="animate-in delay-200" style={{ marginTop: '1rem' }}>Explore our hand-crafted, high-converting digital products designed for modern businesses.</p>
          </div>
          
          <div className="products-grid">
            {/* Product 1 */}
            <div className="product-card animate-in">
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
            </div>

            {/* Product 2 */}
            <div className="product-card animate-in delay-100">
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
            </div>
            
            {/* Product 3 */}
            <div className="product-card animate-in delay-200">
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
            </div>

            {/* Product 4 */}
            <div className="product-card animate-in delay-300">
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
            </div>
          </div>
        </div>
      </section>

      {/* 4. How It Works (Process Section) */}
      <section className="process">
        <div className="container">
          <div className="section-header">
            <h2 className="animate-in">From Concept to Launch in 3 Simple Steps</h2>
          </div>
          
          <div className="grid-3">
            <div className="process-step animate-in">
              <div className="step-number">1</div>
              <h3>The Blueprint</h3>
              <div style={{ color: 'var(--color-accent)', fontSize: '0.95rem', fontWeight: 600, marginBottom: '0.75rem' }}>Days 1-3</div>
              <p>We lock in your brand identity, secure your custom domain, and map out the site architecture based on your business goals.</p>
            </div>
            
            <div className="process-step animate-in delay-100">
              <div className="step-number">2</div>
              <h3>The Build</h3>
              <div style={{ color: 'var(--color-accent)', fontSize: '0.95rem', fontWeight: 600, marginBottom: '0.75rem' }}>Days 4-10</div>
              <p>Our developers build your front-end website while configuring your backend management dashboard and professional email systems.</p>
            </div>
            
            <div className="process-step animate-in delay-200">
              <div className="step-number">3</div>
              <h3>The Handover</h3>
              <div style={{ color: 'var(--color-accent)', fontSize: '0.95rem', fontWeight: 600, marginBottom: '0.75rem' }}>Days 11-14</div>
              <p>Rigorous quality assurance, mobile responsiveness testing, and a final walkthrough. You get the keys to your new digital headquarters.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Call to Action */}
      <section className="cta section">
        <div className="container">
          <h2 className="animate-in">Ready to Deploy Your Business Globally?</h2>
          <p className="animate-in delay-100">Secure your spot in our development queue and have your complete digital infrastructure live in 14 days.</p>
          <div className="animate-in delay-200" style={{ marginTop: '2rem' }}>
            <Link to="/contact" className="btn btn-primary" style={{ padding: '1.25rem 2.5rem', fontSize: '1.125rem' }}>
              Book Your Kickoff Call <ChevronRight size={24} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
