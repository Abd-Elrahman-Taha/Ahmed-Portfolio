import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  SiDocker, SiJenkins, SiKubernetes, SiTerraform, SiAnsible,
  SiLinux, SiGit, SiGithub, SiYaml, SiClockify
} from 'react-icons/si';
import {
  FaNetworkWired, FaCloud, FaUsers, FaBrain, FaTerminal,
  FaAws, FaTools, FaLaptopCode, FaGlobe, FaHandshake
} from 'react-icons/fa';
import { MdSpeed } from 'react-icons/md';

const skillCategories = [
  {
    name: 'DevOps',
    icon: <FaTools />,
    skills: [
      { name: 'Docker', icon: 'docker' },
      { name: 'Jenkins', icon: 'jenkins' },
      { name: 'Kubernetes', icon: 'kubernetes' },
      { name: 'Terraform', icon: 'terraform' },
      { name: 'Ansible', icon: 'ansible' },
      { name: 'CI/CD', icon: 'cicd' },
    ],
  },
  {
    name: 'Cloud',
    icon: <FaCloud />,
    skills: [
      { name: 'AWS', icon: 'aws' },
      { name: 'Cloud Computing', icon: 'cloud' },
    ],
  },
  {
    name: 'System',
    icon: <FaTerminal />,
    skills: [
      { name: 'Linux', icon: 'linux' },
      { name: 'Bash Scripting', icon: 'bash' },
      { name: 'YAML', icon: 'yaml' },
    ],
  },
  {
    name: 'Development',
    icon: <FaLaptopCode />,
    skills: [
      { name: 'Git', icon: 'git' },
      { name: 'GitHub', icon: 'github' },
    ],
  },
  {
    name: 'Networking',
    icon: <FaGlobe />,
    skills: [
      { name: 'CCNA', icon: 'ccna' },
      { name: 'Networking', icon: 'network' },
    ],
  },
  {
    name: 'Soft Skills',
    icon: <FaHandshake />,
    skills: [
      { name: 'Fast Learner', icon: 'learner' },
      { name: 'Communication', icon: 'comms' },
      { name: 'Teamwork', icon: 'team' },
    ],
  },
];

const iconMap: Record<string, React.ReactNode> = {
  docker:     <SiDocker />,
  jenkins:    <SiJenkins />,
  kubernetes: <SiKubernetes />,
  terraform:  <SiTerraform />,
  ansible:    <SiAnsible />,
  cicd:       <SiClockify />,
  aws:        <FaAws />,
  cloud:      <FaCloud />,
  linux:      <SiLinux />,
  bash:       <FaTerminal />,
  yaml:       <SiYaml />,
  git:        <SiGit />,
  github:     <SiGithub />,
  ccna:       <FaNetworkWired />,
  network:    <FaNetworkWired />,
  learner:    <MdSpeed />,
  comms:      <FaBrain />,
  team:       <FaUsers />,
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 15 },
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
    <section id="skills" className="section skills">
      <div className="container">
        <motion.div
          className="section__header"
          ref={ref}
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <p className="section__label">What I Know</p>
          <h2 className="section__title">Skills & Technologies</h2>
          <div className="section__divider" />
        </motion.div>

        <motion.div
          className="skills__grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {skillCategories.map((cat) => (
            <motion.div
              key={cat.name}
              className="glass-card skills__category"
              variants={cardVariants}
            >
              <div className="skills__cat-header">
                <span className="skills__cat-icon accent">{cat.icon}</span>
                <h3 className="skills__cat-name">{cat.name}</h3>
              </div>
              <div className="skills__badges">
                {cat.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    className="skill-badge"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  >
                    <span className="skill-badge__icon">{iconMap[skill.icon]}</span>
                    <span className="skill-badge__name">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
