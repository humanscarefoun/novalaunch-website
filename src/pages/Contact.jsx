import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 15 } }
};

export default function Contact() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
      className="section" style={{ minHeight: '80vh', paddingTop: '160px' }}
    >
      <div className="container">
        <motion.div initial="hidden" animate="visible" variants={containerVariants} className="grid-2">
          
          <div>
            <motion.h1 variants={itemVariants} style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)' }}>
              Get in <span className="text-gradient">Touch</span>
            </motion.h1>
            <motion.p variants={itemVariants} style={{ maxWidth: '800px', marginTop: '2rem', fontSize: '1.25rem' }}>
              Ready to deploy your business globally? Secure your spot in our development queue. We respond to all inquiries within 24 hours.
            </motion.p>
            <motion.div variants={itemVariants} style={{ marginTop: '2rem' }}>
              <div style={{ marginBottom: '1.5rem' }}>
                <strong style={{ color: 'var(--color-accent)' }}>Email</strong><br/>
                <a href="mailto:amitabhthakur856@gmail.com" style={{ color: 'var(--color-text)', textDecoration: 'none', fontSize: '1.5rem', fontWeight: 600 }}>amitabhthakur856@gmail.com</a>
              </div>
              <div style={{ marginBottom: '1.5rem' }}>
                <strong style={{ color: 'var(--color-accent)' }}>Phone / WhatsApp</strong><br/>
                <a href="https://wa.me/919616892024" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-text)', textDecoration: 'none', fontSize: '1.5rem', fontWeight: 600 }}>
                  +91 9616892024
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="feature-card" style={{ background: 'var(--color-bg-muted)' }}>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }} onSubmit={(e) => { e.preventDefault(); alert("Thanks for reaching out! We'll be in touch soon. 🚀"); }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontWeight: 600, fontSize: '0.875rem' }}>Name</label>
                <input type="text" placeholder="Elon Musk" style={{ padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid rgba(150,150,150,0.2)', background: 'var(--color-bg)', color: 'var(--color-text)' }} required />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontWeight: 600, fontSize: '0.875rem' }}>Email</label>
                <input type="email" placeholder="elon@tesla.com" style={{ padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid rgba(150,150,150,0.2)', background: 'var(--color-bg)', color: 'var(--color-text)' }} required />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontWeight: 600, fontSize: '0.875rem' }}>Project Details</label>
                <textarea rows={4} placeholder="I want to build a rocket..." style={{ padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid rgba(150,150,150,0.2)', background: 'var(--color-bg)', color: 'var(--color-text)', resize: 'vertical' }} required></textarea>
              </div>
              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1rem', marginTop: '0.5rem' }}>
                Send Message
              </motion.button>
            </form>
          </motion.div>

        </motion.div>
      </div>
    </motion.section>
  );
}
