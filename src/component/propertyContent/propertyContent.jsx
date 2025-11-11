import React from 'react'
import { Link } from 'react-router-dom'
import './propertyContent.css'
import { ProjectData } from '../../data/projectData'




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
      staggerChildren: 0.1, 
    },
  },
};


const PropertyContent = () => {



    return (
        <>
            {/* <div className="project-wrapper">
                <h1> All My Project Prev Live Demo And View Codes</h1>

                <div className="project-details">
                    <div className="project-content">

                        {ProjectData.map((data) => {
                            console.log(data?.tools)
                            return (
                                <div key={data.id} className="project-content-wrapper">
                                    <div className="project-col">
                                        <h2>{data.title}</h2>
                                        <p>{data.desc}</p>

                                        <div className="project-content-details">

                                            <div className="project-content-period">
                                                <div className="project-category">
                                                    <h2>Duration:</h2>
                                                    <strong>{data.catTime.duration}</strong>
                                                </div>

                                                <div className="project-category">
                                                    <h2>Category:</h2>
                                                    <strong>{data.catTime.category}</strong>
                                                </div>

                                            </div>

                                            <div className="project-content-tools">
                                                <span className="project-tools">{data?.tools.tool}</span>
                                            </div>
                                        </div>

                                        <div className="demo-prev">
                                            <Link to={data.links.demo} target='_blank'> <span>{data.feeds.demo} </span> </Link>
                                            <Link to={data.links.prev} target='_blank'> <span>{data.feeds.prev}</span> </Link>
                                        </div>

                                    </div>

                                    <div className="project-col">
                                        <img src={data.imgUrl} alt="" />
                                    </div>
                                </div>
                            )
                        })}


                    </div>
                </div>

            </div> */}


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
        </>
    )
}

export default PropertyContent