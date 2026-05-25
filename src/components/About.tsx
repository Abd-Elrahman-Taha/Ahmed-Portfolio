import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGraduationCap, FaCode, FaAward, FaRocket, FaTrophy, FaCogs } from 'react-icons/fa';

const stats = [
  { value: '3.2', label: 'GPA / 4.0', icon: <FaGraduationCap /> },
  { value: '6+', label: 'Projects Built', icon: <FaRocket /> },
  { value: '5+', label: 'Technologies', icon: <FaCogs /> },
  { value: '2026', label: 'Graduate', icon: <FaTrophy /> },
];

const education = [
  {
    icon: <FaGraduationCap />,
    title: 'B.Sc. Communications & Electronics Engineering',
    sub: 'Beni Suef University · GPA 3.2/4.0 · Expected 2026',
  },
  {
    icon: <FaCode />,
    title: 'DEPI DevOps Track',
    sub: 'Digital Egypt Pioneers Initiative · Hands-on CI/CD, Docker & Cloud',
  },
  {
    icon: <FaAward />,
    title: 'Cloud & DevOps Architect',
    sub: 'DolfinED · AWS/Azure Solutions Architect program',
  },
  {
    icon: <FaRocket />,
    title: 'CCNA Routing & Switching',
    sub: 'Engineering Syndicate · Network design & protocols',
  },
];

const easing = [0.25, 0.46, 0.45, 0.94] as const;

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: easing, delay } },
});

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="section about">
      <div className="container">
        <motion.div
          className="section__header"
          ref={ref}
          variants={fadeUp(0)}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <p className="section__label">Who I Am</p>
          <h2 className="section__title">About Me</h2>
          <div className="section__divider" />
        </motion.div>

        {/* Stats */}
        <motion.div
          className="about__stats"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.07 } },
          }}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {stats.map((s) => (
            <motion.div
              className="glass-card about__stat"
              key={s.label}
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: easing } },
              }}
            >
              <span className="about__stat-icon accent">{s.icon}</span>
              <span className="about__stat-value accent">{s.value}</span>
              <span className="about__stat-label">{s.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Two column */}
        <div className="about__body">
          {/* Left: Bio */}
          <motion.div
            className="about__bio"
            variants={fadeUp(0.12)}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <h3 className="about__bio-title">
              Aspiring DevOps Engineer from Egypt
            </h3>
            <p className="about__bio-text">
              I'm a final-year Communications & Electronics Engineering student at Beni Suef University
              with a strong passion for building reliable, automated infrastructure. My journey into
              DevOps started through hands-on training at the Digital Egypt Pioneers Initiative (DEPI),
              where I mastered containerization, CI/CD pipelines, and cloud automation.
            </p>
            <p className="about__bio-text">
              I specialize in bridging the gap between development and operations — using tools like
              Docker, Kubernetes, Jenkins, Terraform, and Ansible to create pipelines that are fast,
              secure, and repeatable. I'm equally comfortable working in Linux environments, scripting
              in Bash, or architecting cloud infrastructure on AWS.
            </p>
            <p className="about__bio-text">
              Currently working on my graduation project — a <strong className="accent">Digital Twin for Electric Vehicles</strong>{' '}
              mentored by Siemens engineers — where I integrate simulation, embedded systems, and
              real-time analytics.
            </p>
            <div className="about__tags">
              {['Automation', 'CI/CD', 'Cloud', 'Infrastructure as Code', 'Containerization'].map((t) => (
                <span className="tag" key={t}>{t}</span>
              ))}
            </div>
          </motion.div>

          {/* Right: Education */}
          <motion.div
            className="about__edu"
            variants={fadeUp(0.2)}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <h3 className="about__edu-title">Education & Training</h3>
            <div className="about__edu-list">
              {education.map((item) => (
                <div className="glass-card about__edu-item" key={item.title}>
                  <div className="about__edu-icon accent">{item.icon}</div>
                  <div>
                    <p className="about__edu-name">{item.title}</p>
                    <p className="about__edu-sub">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
