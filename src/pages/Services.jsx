import { motion } from 'framer-motion';
import { MonitorSmartphone, LayoutDashboard, Search, Webhook, Bot, Zap } from 'lucide-react';
import { DottedSurface } from '../components/DottedSurface';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 15 } }
};

export default function Services() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
      className="section" style={{ minHeight: '80vh', paddingTop: '160px', position: 'relative' }}
    >
      <DottedSurface />
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <motion.div initial="hidden" animate="visible" variants={containerVariants}>
          <motion.h1 variants={itemVariants} style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)' }}>
            Our <span className="text-gradient">Services</span>
          </motion.h1>
          <motion.p variants={itemVariants} style={{ maxWidth: '800px', marginTop: '2rem', fontSize: '1.25rem' }}>
            We engineer premium digital infrastructures. Unlike traditional agencies, we provide an all-in-one ecosystem that scales seamlessly.
          </motion.p>

          <motion.div variants={containerVariants} className="grid-3" style={{ marginTop: '4rem' }}>
            {/* Service 1 */}
            <motion.div variants={itemVariants} whileHover={{ scale: 1.03, y: -10 }} className="feature-card" style={{ background: 'var(--color-bg-muted)', border: '1px solid rgba(150,150,150,0.1)' }}>
              <div className="feature-icon" style={{ background: 'var(--color-bg)' }}><MonitorSmartphone size={32} /></div>
              <h3>Web Applications</h3>
              <p>High-performance, React-based web applications tailored for global B2B clients. Blazing fast, SEO-optimized, and built to convert.</p>
            </motion.div>

            {/* Service 2 */}
            <motion.div variants={itemVariants} whileHover={{ scale: 1.03, y: -10 }} className="feature-card" style={{ background: 'var(--color-bg-muted)', border: '1px solid rgba(150,150,150,0.1)' }}>
              <div className="feature-icon" style={{ background: 'var(--color-bg)' }}><LayoutDashboard size={32} /></div>
              <h3>CMS Dashboards</h3>
              <p>Custom administrative portals to manage your content, leads, and analytics. No coding required for your daily operations.</p>
            </motion.div>

            {/* Service 3 */}
            <motion.div variants={itemVariants} whileHover={{ scale: 1.03, y: -10 }} className="feature-card" style={{ background: 'var(--color-bg-muted)', border: '1px solid rgba(150,150,150,0.1)' }}>
              <div className="feature-icon" style={{ background: 'var(--color-bg)' }}><Search size={32} /></div>
              <h3>SEO & Performance</h3>
              <p>We ensure your site hits 90+ on Google PageSpeed Insights. Speed is a proxy for professionalism in the international market.</p>
            </motion.div>

            {/* Service 4 */}
            <motion.div variants={itemVariants} whileHover={{ scale: 1.03, y: -10 }} className="feature-card" style={{ background: 'var(--color-bg-muted)', border: '1px solid rgba(150,150,150,0.1)' }}>
              <div className="feature-icon" style={{ background: 'var(--color-bg)' }}><Webhook size={32} /></div>
              <h3>API Integrations</h3>
              <p>Seamlessly connect your CRM, payment gateways (Stripe), and third-party tools directly into your digital infrastructure.</p>
            </motion.div>

            {/* Service 5 */}
            <motion.div variants={itemVariants} whileHover={{ scale: 1.03, y: -10 }} className="feature-card" style={{ background: 'var(--color-bg-muted)', border: '1px solid rgba(150,150,150,0.1)' }}>
              <div className="feature-icon" style={{ background: 'var(--color-bg)' }}><Bot size={32} /></div>
              <h3>Agentic AI Integration</h3>
              <p>Deploy autonomous AI agents tailored to your business logic. From 24/7 intelligent customer support to automated complex workflow pipelines.</p>
            </motion.div>

            {/* Service 6 */}
            <motion.div variants={itemVariants} whileHover={{ scale: 1.03, y: -10 }} className="feature-card" style={{ background: 'var(--color-bg-muted)', border: '1px solid rgba(150,150,150,0.1)' }}>
              <div className="feature-icon" style={{ background: 'var(--color-bg)' }}><Zap size={32} /></div>
              <h3>Next-Gen Technologies</h3>
              <p>We build with cutting-edge tools: WebGL, Three.js 3D physics, Framer Motion, and edge computing for a truly mind-blowing user experience.</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
