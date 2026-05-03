import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Target, 
  Map, 
  Handshake, 
  Code, 
  Rocket, 
  LifeBuoy, 
  TrendingUp, 
  Award,
  CheckCircle2,
  ArrowDown
} from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 15 } }
};

const processSteps = [
  {
    title: "Initial Consultation & Discovery",
    icon: <Search size={28} />,
    desc: "Every successful project begins with understanding your business. We start by connecting with you to learn about:",
    points: ["Your business goals", "Current challenges", "Target audience", "Desired website features", "Automation needs", "SEO opportunities", "Branding vision"],
    note: "This phase is focused on deeply understanding what your business truly needs—not just what you ask for, but what will create the best long-term results."
  },
  {
    title: "Strategy, Solutions & Growth Planning",
    icon: <Target size={28} />,
    desc: "Once we understand your needs, we create a tailored strategy. This includes:",
    points: ["Website development solutions", "Business automation opportunities", "SEO strategies", "Performance optimization", "Branding enhancements", "Scalable digital systems"],
    note: "We don’t simply build websites—we identify smarter systems, better workflows, and stronger digital opportunities that can elevate your business beyond expectations. Our goal is to transform your business into a recognizable, scalable brand."
  },
  {
    title: "Technical Roadmap & Project Transparency",
    icon: <Map size={28} />,
    desc: "Before development begins, we clearly explain:",
    points: ["How the technical process works", "Tools and technologies involved", "Estimated timelines", "Deliverables", "Project stages", "Communication channels", "Budget and payment structure"],
    note: "This ensures complete transparency, so you always know what’s happening, when it’s happening, and why."
  },
  {
    title: "Contract & Official Partnership",
    icon: <Handshake size={28} />,
    desc: "Once both sides align on the strategy, we move forward with:",
    points: ["Service agreement", "Project scope confirmation", "Timeline approval", "Payment terms", "Legal protections for both parties"],
    note: "This secures the partnership professionally and ensures clear expectations from day one."
  },
  {
    title: "Design, Development & Collaborative Refinement",
    icon: <Code size={28} />,
    desc: "Now the creative and technical work begins. We:",
    points: ["Design your website structure", "Build custom templates", "Develop automation systems", "Optimize SEO foundations", "Integrate necessary tools", "Test performance"],
    note: "Throughout this phase, we maintain a collaborative process where you review progress, we gather feedback, and adjustments are made until you are fully satisfied."
  },
  {
    title: "Testing, Launch & Deployment",
    icon: <Rocket size={28} />,
    desc: "Before launch, we conduct:",
    points: ["Full functionality testing", "Mobile responsiveness checks", "Speed optimization", "Security checks", "SEO audits", "Error corrections"],
    note: "Once approved, we launch your project smoothly and professionally. Your business is now ready to operate as a stronger digital brand."
  },
  {
    title: "Post-Launch Support",
    icon: <LifeBuoy size={28} />,
    desc: "Our relationship doesn’t end after launch. We provide:",
    points: ["1–2 complimentary support sessions for minor updates", "Bug resolution", "Technical assistance", "Guidance on platform management"],
    note: "This ensures your website remains functional, polished, and stress-free after deployment."
  },
  {
    title: "Ongoing Management & Growth Services",
    icon: <TrendingUp size={28} />,
    desc: "For businesses that want long-term support, we offer:",
    points: ["Full-time website management", "Regular maintenance", "SEO monitoring", "Content updates", "Automation upgrades", "Security monitoring", "Performance improvements"],
    note: "This service allows you to focus on running your business while we handle your digital growth."
  },
  {
    title: "Long-Term Brand Partnership",
    icon: <Award size={28} />,
    desc: "Our ultimate goal is not just delivering a project—but building lasting business success. We aim to continuously help you:",
    points: ["Expand online presence", "Increase efficiency", "Improve customer reach", "Strengthen brand identity", "Scale through technology"],
    note: ""
  }
];

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
      <div className="container" style={{ maxWidth: '900px' }}>
        <motion.div initial="hidden" animate="visible" variants={containerVariants}>
          
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <motion.h1 variants={itemVariants} style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1rem' }}>
              Our Process: <br />
              <span className="text-gradient">Turning Your Business Into a Brand</span>
            </motion.h1>
            <motion.p variants={itemVariants} style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)' }}>
              A proven, transparent step-by-step methodology to guarantee your success.
            </motion.p>
          </div>

          {/* Vertical Flow Chart Timeline */}
          <motion.div variants={containerVariants} style={{ position: 'relative', paddingLeft: '2rem' }}>
            {/* The vertical connecting line */}
            <div style={{ position: 'absolute', left: '2.5rem', top: '1rem', bottom: '1rem', width: '2px', background: 'linear-gradient(to bottom, var(--color-accent) 0%, transparent 100%)', opacity: 0.2, zIndex: -1 }}></div>

            {processSteps.map((step, idx) => (
              <motion.div key={idx} variants={itemVariants} style={{ position: 'relative', marginBottom: '4rem' }}>
                
                {/* Timeline Node / Icon */}
                <div style={{ position: 'absolute', left: '-2.5rem', top: '0', width: '56px', height: '56px', borderRadius: '50%', background: 'var(--color-bg)', border: '2px solid var(--color-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-accent)', boxShadow: '0 0 20px color-mix(in srgb, var(--color-accent) 20%, transparent)' }}>
                  {step.icon}
                </div>

                {/* Step Content */}
                <div className="feature-card" style={{ marginLeft: '4rem', padding: '2rem', background: 'var(--color-bg-muted)', border: '1px solid rgba(150,150,150,0.1)' }}>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ color: 'var(--color-text-muted)', fontSize: '1.25rem', fontWeight: 400 }}>{idx + 1}.</span> {step.title}
                  </h3>
                  <p style={{ marginBottom: '1rem' }}>{step.desc}</p>
                  
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem' }}>
                    {step.points.map((point, pIdx) => (
                      <li key={pIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.95rem', color: 'var(--color-text)' }}>
                        <CheckCircle2 size={16} style={{ color: 'var(--color-accent)', flexShrink: 0, marginTop: '0.2rem' }} />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {step.note && (
                    <div style={{ padding: '1rem', background: 'color-mix(in srgb, var(--color-accent) 5%, transparent)', borderLeft: '4px solid var(--color-accent)', borderRadius: '0 var(--radius-md) var(--radius-md) 0', fontSize: '0.95rem', fontStyle: 'italic', color: 'var(--color-text-muted)' }}>
                      {step.note}
                    </div>
                  )}
                </div>

                {/* Arrow connecting to next step (except last) */}
                {idx < processSteps.length - 1 && (
                  <div style={{ marginLeft: '4rem', marginTop: '2rem', display: 'flex', justifyContent: 'center', color: 'var(--color-text-subtle)' }}>
                    <ArrowDown size={24} style={{ animation: 'float 2s ease-in-out infinite' }} />
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Final Outcome Banner */}
          <motion.div variants={itemVariants} style={{ marginTop: '6rem', padding: '4rem 2rem', textAlign: 'center', background: 'linear-gradient(135deg, var(--color-bg-muted) 0%, rgba(59, 130, 246, 0.1) 100%)', borderRadius: 'var(--radius-xl)', border: '1px solid rgba(150,150,150,0.1)' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Final Outcome</h2>
            <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
              By following this process, we help businesses:
            </p>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '1rem', fontSize: '1.5rem', fontWeight: 800, marginBottom: '3rem' }}>
              <span style={{ color: 'var(--color-text)' }}>Build</span>
              <ArrowDown size={24} style={{ color: 'var(--color-accent)', transform: 'rotate(-90deg)' }} />
              <span style={{ color: 'var(--color-text)' }}>Optimize</span>
              <ArrowDown size={24} style={{ color: 'var(--color-accent)', transform: 'rotate(-90deg)' }} />
              <span style={{ color: 'var(--color-text)' }}>Automate</span>
              <ArrowDown size={24} style={{ color: 'var(--color-accent)', transform: 'rotate(-90deg)' }} />
              <span className="text-gradient">Scale</span>
            </div>

            <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem', lineHeight: '1.8' }}>
              We combine web development, automation, branding, and strategic growth into one seamless system designed to make business transformation simple, effective, and profitable.
            </p>

            <div style={{ marginTop: '3rem', fontSize: '1.5rem', fontWeight: 700 }}>
              Your Vision. <span style={{ color: 'var(--color-accent)' }}>Our Expertise.</span> One Powerful Brand.
            </div>
          </motion.div>

          {/* Easter Egg */}
          <motion.div variants={itemVariants} style={{ marginTop: '4rem', textAlign: 'center' }}>
            <button 
              className="btn" 
              style={{ background: 'transparent', color: 'var(--color-text-muted)', border: 'none', cursor: 'pointer', opacity: 0.5 }}
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
