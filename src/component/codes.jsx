import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { getProjects } from '../../services/apiService';

// --- 1. Styled Components for Layout and Aesthetics ---
const ProjectsSection = styled.section`
  padding: 80px 20px;
  background: #f8f8f8;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 32px;
  }
`;

const ProjectCard = styled(motion.div)`
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 24px;
  margin-bottom: 24px;
  cursor: pointer;
  
  &:hover {
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }
`;

const SkillTag = styled.span`
  display: inline-block;
  background: #0070f3;
  color: white;
  padding: 4px 12px;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;
  margin-bottom: 10px;
`;


// --- 2. Framer Motion Variants for Animation ---
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 100 }
  },
};

const listVariants = {
  visible: {
    transition: {
      staggerChildren: 0.1, // Delay between each child item
    },
  },
};


// --- 3. React Component with Axios Fetching ---
const ProjectsList = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      // *** AXIOS Call to Node.js Backend API ***
      const data = await getProjects();
      setProjects(data);
      setLoading(false);
    };

    fetchProjects();
  }, []);

  if (loading) {
    return <p>Loading portfolio items...</p>;
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={listVariants}
    >
      <ProjectsSection>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            variants={cardVariants}
            whileHover={{ scale: 1.05 }} // Framer Motion interaction
            onClick={() => {/* Handle navigation to project/[id] */}}
          >
            <SkillTag>{project.skill}</SkillTag>
            <h3 style={{ marginBottom: '8px', fontSize: '1.5rem' }}>{project.title}</h3>
            <p style={{ color: '#555' }}>Key Metric: {project.metric}</p>
          </ProjectCard>
        ))}
        
      </ProjectsSection>
    </motion.div>
  );
};

export default ProjectsList;



import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Mock Data for the portfolio projects (simulating the Node.js backend response)
const mockProjects = [
  { id: 1, title: "E-Commerce Platform Rebuild", skill: "Web Development", metric: "30% faster load time" },
  { id: 2, title: "Residential 6.5kW System", skill: "Solar Installation", metric: "98% energy offset" },
  { id: 3, title: "Mobile App UI/UX Redesign", skill: "Figma Design", metric: "25% increase in usability score" },
  { id: 4, title: "Corporate Brand Identity Package", skill: "Graphics Design", metric: "Improved brand recognition" },
  { id: 5, title: "Internal Dashboard Optimization", skill: "Web Development", metric: "Reduced task completion time by 15%" },
];

/**
 * Mock function to simulate the Axios call to the Node.js backend.
 * This introduces a slight delay to simulate network latency.
 */
const getProjects = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      // Return a deep copy to simulate a fresh fetch operation
      resolve(JSON.parse(JSON.stringify(mockProjects))); 
    }, 500); // Simulate 0.5 second network delay
  });
};

// --- Framer Motion Variants for Animation ---
const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { 
      type: "spring", 
      stiffness: 120, 
      damping: 15 
    }
  },
};

const listVariants = {
  visible: {
    transition: {
      staggerChildren: 0.1, // Delay between each child item
    },
  },
  hidden: { opacity: 0 }
};

// Main Application Component
const App = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      // *** Simulated AXIOS Call to Node.js Backend API ***
      const data = await getProjects();
      setProjects(data);
      setLoading(false);
    };

    fetchProjects();
  }, []);

  // Tailwind classes replace Styled Components for styling
  const skillColors = {
    "Web Development": "bg-indigo-500",
    "Solar Installation": "bg-green-600",
    "Figma Design": "bg-pink-500",
    "Graphics Design": "bg-orange-500",
  };

  const getSkillColor = (skill) => {
    return skillColors[skill] || "bg-gray-500";
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans p-4 md:p-8">
      <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-10 text-center">
        Recent Projects Showcase
      </h1>

      {loading ? (
        <div className="text-center py-20">
          {/* Custom SVG Spinner for loading */}
          <svg className="animate-spin h-8 w-8 text-indigo-600 mx-auto mb-4" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <p className="text-gray-600">Fetching project data...</p>
        </div>
      ) : (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={listVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              // Framer Motion interaction
              whileHover={{ scale: 1.03, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.15)" }} 
              className="bg-white rounded-xl shadow-md p-6 border-t-4 border-indigo-500 cursor-pointer transition-all"
              onClick={() => { console.log(`Navigating to project ${project.id}: ${project.title}`); }}
            >
              <span className={`inline-block text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-3 ${getSkillColor(project.skill)}`}>
                {project.skill}
              </span>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
              <p className="text-gray-600 text-sm">{project.metric}</p>
              <a 
                href="#" 
                className="mt-4 inline-block text-indigo-600 hover:text-indigo-800 font-medium text-sm transition duration-150"
                onClick={(e) => { e.stopPropagation(); console.log(`Viewing details for ${project.title}`); }}
              >
                View Case Study &rarr;
              </a>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default App;