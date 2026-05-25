import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCloud, FaNetworkWired, FaServer } from 'react-icons/fa';
import { SiDocker, SiKubernetes, SiJenkins } from 'react-icons/si';
import { projects } from '../data/projects';

const categoryColors: Record<string, string> = {
  DevOps: '#a3e635',
  Cloud: '#38bdf8',
  System: '#fb923c',
  Networking: '#c084fc',
};

const projectIcons: Record<string, React.ReactNode> = {
  devops: <SiJenkins />,
  monitor: <FaServer />,
  network: <FaNetworkWired />,
  cloud: <FaCloud />,
  k8s: <SiKubernetes />,
  docker: <SiDocker />,
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.35,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <motion.div
          className="section__header"
          ref={ref}
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <p className="section__label">What I've Built</p>
          <h2 className="section__title">Projects</h2>
          <div className="section__divider" />
          <p className="section__subtitle">
            Real-world infrastructure, automation, and cloud projects from my DevOps journey.
          </p>
        </motion.div>

        <motion.div
          className="projects__grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {projects.map((project) => {
            const catColor = categoryColors[project.category] ?? '#a3e635';
            return (
              <motion.article
                key={project.id}
                className="project-card glass-card"
                variants={cardVariants}
                whileHover={{
                  y: -6,
                  transition: { duration: 0.15, ease: 'easeOut' }
                }}
                style={{ '--cat-color': catColor } as React.CSSProperties}
              >
                {/* Top bar */}
                <div className="project-card__header">
                  <span className="project-card__icon" style={{ color: catColor }}>
                    {projectIcons[project.icon] ?? <FaServer />}
                  </span>
                  <span
                    className="project-card__category"
                    style={{ color: catColor, borderColor: catColor }}
                  >
                    {project.category}
                  </span>
                </div>

                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__desc">{project.description}</p>

                {/* Tech tags */}
                <div className="project-card__tech">
                  {project.technologies.map((tech) => (
                    <span className="project-card__tech-tag" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="project-card__actions">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="project-card__btn"
                    aria-label={`GitHub – ${project.title}`}
                  >
                    <FaGithub size={14} />
                    GitHub
                  </a>
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="project-card__btn project-card__btn--accent"
                      aria-label={`Demo – ${project.title}`}
                    >
                      <FaExternalLinkAlt size={12} />
                      Demo
                    </a>
                  )}
                </div>

                {/* Hover glow accent line */}
                <div className="project-card__accent-line" style={{ background: catColor }} />
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
