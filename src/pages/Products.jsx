import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 15 } }
};

const products = [
  {
    title: "SaaS Analytics Dashboard",
    desc: "A comprehensive admin panel theme with built-in dark mode and data visualization widgets.",
    tags: ["Dashboard", "React", "Dark Mode"],
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
  },
  {
    title: "Fintech Marketing Site",
    desc: "A high-converting landing page optimized for financial services and modern banking startups.",
    tags: ["Landing Page", "Fintech", "Animations"],
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "E-Commerce Storefront",
    desc: "A premium shopping experience with seamless checkout flows and dynamic product filtering.",
    tags: ["E-Commerce", "Stripe", "Fast"],
    img: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Agency Portfolio Pro",
    desc: "A stunning portfolio template with scroll-driven animations and interactive project cases.",
    tags: ["Portfolio", "Creative", "WebGL"],
    img: "https://images.unsplash.com/photo-1555421689-d68471e189f2?q=80&w=2070&auto=format&fit=crop"
  }
];

export default function Products() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
      className="section" style={{ minHeight: '80vh', paddingTop: '160px' }}
    >
      <div className="container">
        <motion.div initial="hidden" animate="visible" variants={containerVariants}>
          
          <motion.div variants={itemVariants} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 12px', background: 'rgba(var(--color-accent-rgb), 0.1)', borderRadius: '20px', color: 'var(--color-accent)', fontWeight: 600, marginBottom: '1rem' }}>
            <Sparkles size={16} /> Premium Themes
          </motion.div>
          
          <motion.h1 variants={itemVariants} style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)' }}>
            Showcase of <span className="text-gradient">Excellence</span>
          </motion.h1>
          <motion.p variants={itemVariants} style={{ maxWidth: '800px', marginTop: '2rem', fontSize: '1.25rem' }}>
            Explore our hand-crafted, high-converting digital products designed for modern businesses. Each theme is fully responsive and animation-ready.
          </motion.p>

          <motion.div variants={containerVariants} className="products-grid" style={{ marginTop: '4rem' }}>
            {products.map((product, idx) => (
              <motion.div key={idx} variants={itemVariants} whileHover={{ y: -15, scale: 1.02 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className="product-card">
                <div className="product-image-container">
                  <motion.div 
                    className="product-image-placeholder" 
                    style={{ backgroundImage: `url("${product.img}")` }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  ></motion.div>
                  <div className="product-overlay">
                    <button className="btn btn-accent">Live Preview <ArrowRight size={16} style={{marginLeft: '4px'}} /></button>
                  </div>
                </div>
                <div className="product-details">
                  <h3>{product.title}</h3>
                  <p>{product.desc}</p>
                  <div className="product-tags">
                    {product.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
