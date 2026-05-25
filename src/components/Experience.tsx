import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaCertificate, FaRocket } from 'react-icons/fa';
import type { TimelineEntry } from '../types';

const timeline: TimelineEntry[] = [
  {
    id: 1,
    year: '2022 – 2026',
    title: 'B.Sc. Communications & Electronics Engineering',
    organization: 'Beni Suef University',
    description:
      'Pursuing a degree in Communications & Electronics Engineering with a cumulative GPA of 3.2/4.0. Gained solid foundations in networking, embedded systems, and software engineering.',
    type: 'education',
  },
  {
    id: 2,
    year: '2024 – 2025',
    title: 'DevOps Track Graduate',
    organization: 'Digital Egypt Pioneers Initiative (DEPI)',
    description:
      'Completed intensive DevOps training covering Docker, Jenkins CI/CD pipelines, Linux administration, cloud concepts, and infrastructure automation.',
    type: 'course',
  },
  {
    id: 3,
    year: '2024',
    title: 'DevOps Internship',
    organization: 'Orange Digital Center',
    description:
      'Gained practical industry experience working on real-world DevOps workflows, continuous integration, continuous delivery pipelines, and collaborative engineering practices.',
    type: 'internship',
  },
  {
    id: 4,
    year: '2024',
    title: 'Cloud & DevOps Architect Program',
    organization: 'DolfinED',
    description:
      'Completed an advanced training program focused on AWS/Azure cloud architecture, infrastructure as code, and DevOps engineering best practices.',
    type: 'course',
  },
  {
    id: 5,
    year: '2023',
    title: 'CCNA Routing & Switching',
    organization: 'Engineering Syndicate',
    description:
      'Achieved CCNA-level proficiency in network design, routing protocols, switching, VLANs, and enterprise network security concepts.',
    type: 'course',
  },
  {
    id: 6,
    year: '2023',
    title: 'Linux Administration',
    organization: 'Maharatech',
    description:
      'Completed a comprehensive Linux administration course covering system management, shell scripting, user permissions, and server configuration.',
    type: 'course',
  },
  {
    id: 7,
    year: '2025 – 2026',
    title: 'Digital Twin for Electric Vehicles',
    organization: 'Graduation Project · Mentored by Siemens',
    description:
      'Developing an end-to-end digital twin system for EVs integrating CARLA simulator, Battery Management System (BMS), PyBaMM, and a Qt-based cockpit dashboard. Received architectural mentorship from Siemens engineers.',
    type: 'project',
  },
];

const typeIcon: Record<TimelineEntry['type'], React.ReactNode> = {
  education: <FaGraduationCap />,
  course: <FaCertificate />,
  internship: <FaBriefcase />,
  project: <FaRocket />,
};

const typeColor: Record<TimelineEntry['type'], string> = {
  education: '#a3e635',
  course: '#38bdf8',
  internship: '#fb923c',
  project: '#c084fc',
};

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.06,
      },
    },
  };

  return (
    <section id="experience" className="section experience">
      <div className="container">
        <motion.div
          className="section__header"
          ref={ref}
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <p className="section__label">My Journey</p>
          <h2 className="section__title">Experience & Education</h2>
          <div className="section__divider" />
        </motion.div>

        <motion.div
          className="timeline"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {timeline.map((entry, index) => {
            const color = typeColor[entry.type];
            const icon = typeIcon[entry.type];
            const isLeft = index % 2 === 0;

            const itemVariants = {
              hidden: { opacity: 0, x: isLeft ? -15 : 15 },
              visible: {
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.4,
                  ease: [0.25, 0.46, 0.45, 0.94] as const,
                },
              },
            };

            return (
              <motion.div
                key={entry.id}
                className={`timeline__item ${isLeft ? 'timeline__item--left' : 'timeline__item--right'}`}
                variants={itemVariants}
              >
                {/* Node */}
                <div className="timeline__node" style={{ borderColor: color, boxShadow: `0 0 16px ${color}66` }}>
                  <span style={{ color }}>{icon}</span>
                </div>

                {/* Card */}
                <div className="glass-card timeline__card">
                  <div className="timeline__card-header">
                    <span className="timeline__year" style={{ color }}>
                      {entry.year}
                    </span>
                    <span
                      className="timeline__type-badge"
                      style={{ background: `${color}18`, color, borderColor: `${color}44` }}
                    >
                      {entry.type}
                    </span>
                  </div>
                  <h3 className="timeline__title">{entry.title}</h3>
                  <p className="timeline__org" style={{ color }}>{entry.organization}</p>
                  <p className="timeline__desc">{entry.description}</p>
                </div>
              </motion.div>
            );
          })}

          {/* Vertical line */}
          <div className="timeline__line" />
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
