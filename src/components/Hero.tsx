import { useEffect, useState } from 'react';
import { motion, type Variants, type Transition } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaChevronDown, FaCode } from 'react-icons/fa';
import { SiDocker, SiKubernetes } from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import mainImage from '../assets/main.png';

const roles = ['DevOps Engineer', 'Cloud Architect', 'CI/CD Specialist', 'Infrastructure Automator'];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (typing) {
      if (displayText.length < current.length) {
        timeout = setTimeout(() => setDisplayText(current.slice(0, displayText.length + 1)), 60);
      } else {
        timeout = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => setDisplayText(displayText.slice(0, -1)), 30);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, typing, roleIndex]);

  const itemTransition: Transition = {
    duration: 0.45,
    ease: [0.25, 0.46, 0.45, 0.94],
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: itemTransition },
  };

  return (
    <section id="hero" className="hero">
      {/* Background glow orbs */}
      <div className="hero__orb hero__orb--1" />
      <div className="hero__orb hero__orb--2" />

      <div className="container hero__container">
        {/* Left: Text */}
        <motion.div
          className="hero__text"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p className="hero__greeting" variants={itemVariants}>
            <FaCode style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle' }} />
            Hello, I'm
          </motion.p>

          <motion.h1 className="hero__name" variants={itemVariants}>
            Ahmed Taha
          </motion.h1>

          <motion.div className="hero__role-wrapper" variants={itemVariants}>
            <span className="hero__role">
              {displayText}
              <span className="hero__cursor">|</span>
            </span>
          </motion.div>

          <motion.p className="hero__tagline" variants={itemVariants}>
            Automating infrastructure, building robust CI/CD pipelines, and delivering
            scalable cloud solutions that power modern applications.
          </motion.p>

          <motion.div className="hero__actions" variants={itemVariants}>
            <Link to="projects" smooth duration={500} offset={-80}>
              <button className="btn btn--accent hero__btn">View Projects</button>
            </Link>
            <Link to="contact" smooth duration={500} offset={-80}>
              <button className="btn btn--ghost hero__btn">Contact Me</button>
            </Link>
          </motion.div>

          <motion.div className="hero__socials" variants={itemVariants}>
            <a
              href="https://github.com/AhmedTaha164"
              target="_blank"
              rel="noreferrer"
              className="hero__social-link"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/ahmed-taha-8a889424a/"
              target="_blank"
              rel="noreferrer"
              className="hero__social-link"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
          </motion.div>
        </motion.div>

        {/* Right: Avatar */}
        <motion.div
          className="hero__avatar-wrapper"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
        >
          <div className="hero__avatar-ring">
            <div className="hero__avatar">
              <img
                src={mainImage}
                alt="Ahmed Taha"
                className="hero__avatar-image"
              />
            </div>
          </div>

          {/* Floating badges */}
          <motion.div
            className="hero__badge hero__badge--top"
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 2.8, ease: 'easeInOut' }}
          >
            <SiDocker size={14} style={{ color: '#2496ED' }} /> Docker
          </motion.div>
          <motion.div
            className="hero__badge hero__badge--bottom"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 3.2, ease: 'easeInOut', delay: 0.4 }}
          >
            <FaAws size={14} style={{ color: '#FF9900' }} /> AWS
          </motion.div>
          <motion.div
            className="hero__badge hero__badge--left"
            animate={{ x: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 3.6, ease: 'easeInOut', delay: 0.8 }}
          >
            <SiKubernetes size={14} style={{ color: '#326CE5' }} /> K8s
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="hero__scroll"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.4, ease: 'easeInOut' }}
      >
        <Link to="about" smooth duration={500} offset={-80} style={{ cursor: 'pointer' }}>
          <FaChevronDown className="hero__scroll-icon" />
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
