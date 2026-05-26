import { FaGithub, FaLinkedin, FaEnvelope} from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__container">
        {/* Logo */}
        <Link to="hero" smooth duration={500} className="footer__logo" style={{ cursor: 'pointer' }}>
          <span className="footer__logo-bracket">&lt;</span>
          Ahmed Taha
          <span className="footer__logo-bracket">/&gt;</span>
        </Link>

        {/* Nav links */}
        <nav className="footer__nav" aria-label="Footer navigation">
          {['hero', 'about', 'skills', 'projects', 'experience', 'contact'].map((id) => (
            <Link
              key={id}
              to={id}
              smooth
              duration={500}
              offset={-80}
              className="footer__nav-link"
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </Link>
          ))}
        </nav>

        {/* Socials */}
        <div className="footer__socials">
          <a href="https://github.com/AhmedTaha164" target="_blank" rel="noreferrer" aria-label="GitHub" className="footer__social">
            <FaGithub size={16} />
          </a>
          <a href="https://www.linkedin.com/in/ahmed-taha-8a889424a/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="footer__social">
            <FaLinkedin size={16} />
          </a>
          <a href="mailto:ahmedtaha1642003@gmail.com" aria-label="Email" className="footer__social">
            <FaEnvelope size={16} />
          </a>
        </div>

        {/* Copyright */}
        <p className="footer__copy">
          &copy; {year} Ahmed Taha &mdash; Built by Abd El-Rahman Taha using React.js &amp; TypeScript
        </p>
      </div>
    </footer>
  );
};

export default Footer;
