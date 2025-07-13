export const projects = [
  {
    id: 1,
    title: "ServiceNow Incident Automation Dashboard",
    description: "Developed an automated dashboard for ServiceNow incident management with real-time monitoring and intelligent ticket routing at Genpact.",
    longDescription: "Built a comprehensive ServiceNow automation dashboard that streamlines incident management workflows. The system integrates with SolarWinds and New Relic for real-time monitoring, automatically categorizes P1/P2 incidents, and routes them to appropriate teams (Windows, Linux, Networking, Database). Reduced manual intervention by 60% and improved incident response time.",
    image: "https://via.placeholder.com/600x400/10B981/FFFFFF?text=ServiceNow+Dashboard",
    technologies: ["ServiceNow", "JavaScript", "REST API", "SolarWinds", "New Relic", "PowerShell", "Python"],
    category: "Automation",
    featured: true,
    demoUrl: "https://portfolio-demo.example.com",
    githubUrl: "https://github.com/purnajear/servicenow-automation",
    status: "In Production",
    year: "2024",
    role: "Process Associate & Automation Developer",
    features: [
      "Automated incident classification and routing",
      "Real-time monitoring integration",
      "P1/P2 incident prioritization",
      "Cross-team collaboration workflows",
      "Performance analytics and reporting",
      "24/7 system health monitoring"
    ]
  },
  {
    id: 2,
    title: "Multi-Cloud Infrastructure Monitoring",
    description: "Real-time monitoring solution for AWS and Azure cloud infrastructure with automated alerting and performance optimization.",
    longDescription: "Designed and implemented a comprehensive cloud monitoring system that tracks infrastructure health across AWS and Azure environments. Integrated with existing monitoring tools like SolarWinds and New Relic to provide unified visibility. The system monitors 500+ cloud resources and has improved system reliability by 40%.",
    image: "https://via.placeholder.com/600x400/3B82F6/FFFFFF?text=Cloud+Monitor",
    technologies: ["AWS CloudWatch", "Azure Monitor", "Python", "PowerShell", "SolarWinds", "Grafana", "Terraform"],
    category: "Infrastructure",
    featured: true,
    demoUrl: "https://cloud-monitoring-demo.example.com",
    githubUrl: "https://github.com/purnajear/cloud-monitoring",
    status: "In Production",
    year: "2024",
    role: "Infrastructure Engineer",
    features: [
      "Multi-cloud resource monitoring",
      "Automated alerting and notifications",
      "Performance metrics visualization",
      "Cost optimization recommendations",
      "Integration with existing tools",
      "Real-time health dashboards"
    ]
  },
  {
    id: 3,
    title: "E-Commerce Platform",
    description: "Modern e-commerce platform with React frontend, Node.js backend, and integrated payment systems.",
    longDescription: "A full-featured e-commerce platform built with modern web technologies. Features include user authentication, product catalog, shopping cart, order management, and payment processing. The platform handles 1000+ concurrent users and processes payments securely through multiple gateways.",
    image: "https://via.placeholder.com/600x400/8B5CF6/FFFFFF?text=E-Commerce+Platform",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe", "JWT", "Tailwind CSS"],
    category: "Web Development",
    featured: true,
    demoUrl: "https://ecommerce-demo.netlify.app",
    githubUrl: "https://github.com/purnajear/ecommerce-platform",
    status: "Completed",
    year: "2023",
    role: "Full Stack Developer",
    features: [
      "User authentication & authorization",
      "Product catalog with search",
      "Shopping cart & wishlist",
      "Order management system",
      "Payment gateway integration",
      "Admin dashboard",
      "Responsive design"
    ]
  },
  {
    id: 4,
    title: "Automated System Health Scripts",
    description: "Collection of PowerShell and Python scripts for automated system health checks and incident response at Genpact.",
    longDescription: "Developed a comprehensive suite of automation scripts that perform routine system health checks, automate incident response procedures, and generate performance reports. These scripts integrate with ServiceNow, SolarWinds, and New Relic to provide proactive monitoring and faster incident resolution. Reduced manual monitoring tasks by 50% and improved system uptime.",
    image: "https://via.placeholder.com/600x400/8B5CF6/FFFFFF?text=Automation+Scripts",
    technologies: ["PowerShell", "Python", "ServiceNow API", "Windows Server", "Linux", "Bash", "Git"],
    category: "Automation",
    featured: false,
    demoUrl: "https://automation-scripts-demo.com",
    githubUrl: "https://github.com/purnajear/system-automation",
    status: "In Production",
    year: "2024",
    role: "Process Associate",
    features: [
      "Automated system health monitoring",
      "Incident response automation",
      "Performance report generation",
      "Multi-platform script support",
      "ServiceNow integration",
      "Error handling and logging"
    ]
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "Modern, animated portfolio website built with React and advanced animation libraries.",
    longDescription: "A showcase portfolio website featuring cutting-edge animations and modern design principles. Built with React, Framer Motion, GSAP, and Three.js to create an engaging user experience. The site is fully responsive and optimized for performance across all devices.",
    image: "https://via.placeholder.com/600x400/EC4899/FFFFFF?text=Portfolio+Website",
    technologies: ["React", "Framer Motion", "GSAP", "Three.js", "Tailwind CSS", "Vite"],
    category: "Web Development",
    featured: false,
    demoUrl: "https://purnajear.dev",
    githubUrl: "https://github.com/purnajear/portfolio",
    status: "Completed",
    year: "2024",
    role: "Frontend Developer",
    features: [
      "Advanced animations with multiple libraries",
      "3D background effects",
      "Responsive design",
      "Dark/light theme toggle",
      "Performance optimized",
      "Accessibility compliant"
    ]
  },
  {
    id: 6,
    title: "Network Monitoring Dashboard",
    description: "Real-time network monitoring and analytics dashboard using SolarWinds API and custom visualization.",
    longDescription: "A comprehensive network monitoring solution that provides real-time visibility into network performance, device health, and traffic patterns. Built with modern web technologies and integrated with SolarWinds API for data collection. The dashboard serves 50+ network administrators and monitors 1000+ devices.",
    image: "https://via.placeholder.com/600x400/06B6D4/FFFFFF?text=Network+Monitor",
    technologies: ["React", "D3.js", "SolarWinds API", "WebSocket", "Express", "MongoDB"],
    category: "Infrastructure",
    featured: false,
    demoUrl: "https://network-monitor-demo.com",
    githubUrl: "https://github.com/purnajear/network-monitor",
    status: "In Production",
    year: "2023",
    role: "Frontend Developer",
    features: [
      "Real-time network visualization",
      "Device health monitoring",
      "Traffic analysis and reporting",
      "Custom alert configuration",
      "Interactive network topology",
      "Historical data analysis"
    ]
  }
]

export const projectCategories = [
  { id: 'all', name: 'All Projects', count: projects.length },
  { id: 'infrastructure', name: 'Infrastructure', count: projects.filter(p => p.category === 'Infrastructure').length },
  { id: 'automation', name: 'Automation', count: projects.filter(p => p.category === 'Automation').length },
  { id: 'web-development', name: 'Web Development', count: projects.filter(p => p.category === 'Web Development').length },
  { id: 'devops', name: 'DevOps', count: projects.filter(p => p.category === 'DevOps').length }
]

export const featuredProjects = projects.filter(project => project.featured)

export const technologies = [
  'React', 'Node.js', 'JavaScript', 'TypeScript', 'Python', 'AWS', 'Azure', 'Docker', 
  'Kubernetes', 'MongoDB', 'PostgreSQL', 'Redis', 'Express', 'Next.js', 'Tailwind CSS',
  'Framer Motion', 'GSAP', 'Three.js', 'ServiceNow', 'Jenkins', 'Ansible', 'Terraform',
  'SolarWinds', 'New Relic', 'Grafana', 'REST API', 'GraphQL', 'WebSocket', 'JWT'
]

export const skills = [
  {
    category: 'Frontend Development',
    items: [
      { name: 'React/Next.js', level: 92, color: 'bg-blue-500' },
      { name: 'JavaScript/TypeScript', level: 90, color: 'bg-yellow-500' },
      { name: 'HTML5/CSS3', level: 95, color: 'bg-orange-500' },
      { name: 'Tailwind CSS', level: 88, color: 'bg-cyan-500' },
      { name: 'Animation Libraries', level: 85, color: 'bg-purple-500' }
    ]
  },
  {
    category: 'Backend Development',
    items: [
      { name: 'Node.js/Express', level: 88, color: 'bg-green-500' },
      { name: 'Python', level: 85, color: 'bg-blue-600' },
      { name: 'REST APIs', level: 90, color: 'bg-indigo-500' },
      { name: 'Database Design', level: 82, color: 'bg-gray-500' },
      { name: 'Microservices', level: 80, color: 'bg-red-500' }
    ]
  },
  {
    category: 'Cloud & DevOps',
    items: [
      { name: 'AWS', level: 85, color: 'bg-orange-600' },
      { name: 'Azure', level: 80, color: 'bg-blue-600' },
      { name: 'Docker/Kubernetes', level: 83, color: 'bg-blue-700' },
      { name: 'CI/CD Pipelines', level: 86, color: 'bg-green-600' },
      { name: 'Infrastructure as Code', level: 78, color: 'bg-purple-600' }
    ]
  },
  {
    category: 'Monitoring & Tools',
    items: [
      { name: 'ServiceNow', level: 90, color: 'bg-green-700' },
      { name: 'SolarWinds', level: 87, color: 'bg-yellow-600' },
      { name: 'New Relic', level: 82, color: 'bg-teal-500' },
      { name: 'Grafana', level: 80, color: 'bg-orange-500' },
      { name: 'Jenkins', level: 84, color: 'bg-blue-500' }
    ]
  }
] 