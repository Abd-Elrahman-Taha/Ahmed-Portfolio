import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'DevOps CI/CD Automation Pipeline',
    description:
      'End-to-end CI/CD pipeline integrating continuous integration, containerization, and infrastructure automation. Automates build, test, and deployment stages with Jenkins and Docker, drastically reducing manual effort and deployment time.',
    technologies: ['Jenkins', 'Docker', 'Ansible', 'Git', 'Linux', 'YAML'],
    icon: 'devops',
    githubUrl: 'https://github.com/AhmedTaha164',
    category: 'DevOps',
  },
  {
    id: 2,
    title: 'System Resource Monitor',
    description:
      'Lightweight Bash script that provides real-time visibility into system health — displaying CPU, memory, and disk usage along with the top 5 resource-hungry processes. Ideal for quick server health checks.',
    technologies: ['Bash', 'Linux', 'Shell Scripting'],
    icon: 'monitor',
    githubUrl: 'https://github.com/AhmedTaha164',
    category: 'System',
  },
  {
    id: 3,
    title: 'Enterprise Network Design',
    description:
      'Designed and implemented a scalable enterprise network architecture featuring full redundancy, traffic segmentation via VLANs, and layered security policies — modeled after real-world production environments.',
    technologies: ['CCNA', 'Networking', 'VLANs', 'Routing', 'Security'],
    icon: 'network',
    githubUrl: 'https://github.com/AhmedTaha164',
    category: 'Networking',
  },
  {
    id: 4,
    title: 'AWS Cloud Infrastructure with Terraform',
    description:
      'Provisioned a full AWS cloud infrastructure as code using Terraform — including EC2 instances, VPC, security groups, multiple subnets, and an Elastic Load Balancer — enabling repeatable, version-controlled deployments.',
    technologies: ['Terraform', 'AWS', 'EC2', 'VPC', 'Load Balancer', 'IaC'],
    icon: 'cloud',
    githubUrl: 'https://github.com/AhmedTaha164',
    category: 'Cloud',
  },
  {
    id: 5,
    title: 'Kubernetes Cluster with Monitoring',
    description:
      'Bootstrapped a production-grade Kubernetes cluster using kubeadm to deploy a Java application. Integrated Prometheus for metrics collection and Grafana for real-time dashboards and alerting.',
    technologies: ['Kubernetes', 'kubeadm', 'Prometheus', 'Grafana', 'Java', 'Docker'],
    icon: 'k8s',
    githubUrl: 'https://github.com/AhmedTaha164',
    category: 'Cloud',
  },
  {
    id: 6,
    title: 'Docker Compose Microservices Stack',
    description:
      'Orchestrated a multi-container application using Docker Compose with Nginx as a reverse proxy / load balancer, Spring Petclinic as the application server, and MySQL as the persistent database layer.',
    technologies: ['Docker Compose', 'Nginx', 'Spring Boot', 'MySQL', 'YAML'],
    icon: 'docker',
    githubUrl: 'https://github.com/AhmedTaha164',
    category: 'DevOps',
  },
];
