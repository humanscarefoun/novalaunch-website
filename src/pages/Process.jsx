import { useState } from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { type: "spring", damping: 15 } }
};

export default function Process() {
  const [spin, setSpin] = useState(false);

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20, rotate: 0 }}
      animate={{ opacity: 1, y: 0, rotate: spin ? 360 : 0 }} 
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: spin ? 1 : 0.3, ease: "easeInOut" }}
      className="section" 
      style={{ minHeight: '80vh', paddingTop: '160px', overflow: 'hidden' }}
    >
      <div className="container">
        <motion.div initial="hidden" animate="visible" variants={containerVariants}>
          <motion.h1 variants={itemVariants} style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)' }}>
            The <span className="text-gradient">Blueprint</span>
          </motion.h1>
          <motion.p variants={itemVariants} style={{ maxWidth: '800px', marginTop: '2rem', fontSize: '1.25rem' }}>
            From concept to launch in exactly 14 days. Our milestone-driven development cycle guarantees precision.
          </motion.p>

          <motion.div variants={containerVariants} style={{ marginTop: '4rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* Step 1 */}
            <motion.div variants={itemVariants} whileHover={{ scale: 1.02 }} className="feature-card" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
              <div style={{ fontSize: '4rem', fontWeight: 900, color: 'var(--color-accent)', opacity: 0.5 }}>01</div>
              <div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Architecture & Design</h3>
                <p>Days 1-3: We map your brand identity, set up the design tokens, and wireframe the entire user experience. You approve the direction before we write a single line of code.</p>
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div variants={itemVariants} whileHover={{ scale: 1.02 }} className="feature-card" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
              <div style={{ fontSize: '4rem', fontWeight: 900, color: 'var(--color-accent)', opacity: 0.5 }}>02</div>
              <div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Full-Stack Engineering</h3>
                <p>Days 4-10: We build the front-end interfaces, set up the React components, and integrate the headless CMS so you can manage your content dynamically.</p>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div variants={itemVariants} whileHover={{ scale: 1.02 }} className="feature-card" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
              <div style={{ fontSize: '4rem', fontWeight: 900, color: 'var(--color-accent)', opacity: 0.5 }}>03</div>
              <div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>QA & Launch</h3>
                <p>Days 11-14: We conduct rigorous cross-browser testing, SEO optimization, and performance audits. Once perfect, we deploy it to our global CDN.</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} style={{ marginTop: '4rem', textAlign: 'center' }}>
            <button 
              className="btn" 
              style={{ background: 'transparent', color: 'var(--color-text-muted)', border: 'none', cursor: 'pointer' }}
              onClick={() => setSpin(true)}
              onAnimationEnd={() => setSpin(false)}
            >
              Don't click this button 👀
            </button>
          </motion.div>

        </motion.div>
      </div>
    </motion.section>
  );
}
