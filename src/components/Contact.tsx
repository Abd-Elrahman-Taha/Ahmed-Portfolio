import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaPaperPlane, FaCheck } from 'react-icons/fa';

const contactItems = [
  {
    icon: <FaEnvelope />,
    label: 'Email',
    value: 'ahmedtaha1642003@gmail.com',
    href: 'mailto:ahmedtaha1642003@gmail.com',
    color: '#a3e635',
  },
  {
    icon: <FaPhone />,
    label: 'Phone',
    value: '+20 103 024 6983',
    href: 'tel:+201030246983',
    color: '#4ade80',
  },
  {
    icon: <FaLinkedin />,
    label: 'LinkedIn',
    value: 'ahmed-taha-8a889424a',
    href: 'https://www.linkedin.com/in/ahmed-taha-8a889424a/',
    color: '#38bdf8',
  },
  {
    icon: <FaGithub />,
    label: 'GitHub',
    value: 'AhmedTaha164',
    href: 'https://github.com/AhmedTaha164',
    color: '#c084fc',
  },
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((s) => ({ ...s, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${formState.name}`);
    const body = encodeURIComponent(formState.message);
    window.open(`mailto:ahmedtaha1642003@gmail.com?subject=${subject}&body=${body}`);
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setFormState({ name: '', email: '', message: '' });
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as const },
    },
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <motion.div
          className="section__header"
          ref={ref}
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <p className="section__label">Get In Touch</p>
          <h2 className="section__title">Contact Me</h2>
          <div className="section__divider" />
          <p className="section__subtitle">
            Open to DevOps roles, internships, and collaborative projects. Let's build something great.
          </p>
        </motion.div>

        <motion.div
          className="contact__body"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Left: Info cards */}
          <motion.div className="contact__info" variants={cardVariants}>
            <p className="contact__info-heading">Let's connect</p>
            {contactItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="glass-card contact__card"
                style={{ '--contact-color': item.color } as React.CSSProperties}
              >
                <span className="contact__card-icon" style={{ color: item.color }}>
                  {item.icon}
                </span>
                <div>
                  <p className="contact__card-label">{item.label}</p>
                  <p className="contact__card-value">{item.value}</p>
                </div>
              </a>
            ))}
          </motion.div>

          {/* Right: Form */}
          <motion.form
            className="glass-card contact__form"
            onSubmit={handleSubmit}
            variants={cardVariants}
          >
            <h3 className="contact__form-title">Send a Message</h3>

            <div className="contact__field">
              <label className="contact__label" htmlFor="contact-name">Name</label>
              <input
                id="contact-name"
                className="contact__input"
                type="text"
                name="name"
                placeholder="Your name"
                value={formState.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact__field">
              <label className="contact__label" htmlFor="contact-email">Email</label>
              <input
                id="contact-email"
                className="contact__input"
                type="email"
                name="email"
                placeholder="your@email.com"
                value={formState.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact__field">
              <label className="contact__label" htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                className="contact__input contact__textarea"
                name="message"
                placeholder="Tell me about your project or opportunity..."
                value={formState.message}
                onChange={handleChange}
                rows={5}
                required
              />
            </div>

            <motion.button
              type="submit"
              className="btn btn--accent contact__submit"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
              {sent ? (
                <>
                  <FaCheck size={12} />
                  Sent!
                </>
              ) : (
                <>
                  <FaPaperPlane size={12} />
                  Send Message
                </>
              )}
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
