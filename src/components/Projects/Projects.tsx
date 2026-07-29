import Lottie from 'lottie-react'

import uber from '../../assets/images/uber.json'
import ball from '../../assets/images/ball.json'
import profile from '../../assets/images/profile.png'
import bank from '../../assets/images/bank.json';
import dice from '../../assets/images/dice.json'

import './Projects.scss'

import { ProjectCard } from '../Card/Card';
import { Project } from '../../type';

import wfp from '../../assets/images/workforcemgmt.jpg'
import cosa from '../../assets/images/COSA.png'
import bookRec from '../../assets/images/book-recommendation-apps.webp'

const Projects = () => {
  const projects: Project[] = [
    {
      id: '1',
      title: 'Workforce Management Platform',
      githubName: 'wfp',
      description: 'A full-stack MVP prototype of a workforce management platform.',
      tags: ['C#', 'ASP.NET Core', 'ReactJS', 'TypeScript', 'MySQL', 'EF Core', 'xUnit'],
      imageUrl: wfp,
      githubUrl: 'https://github.com/mait002/Workforce-Management-Platform'
    },
    {
      id: '2',
      title: 'Co-op Support Application',
      githubName: 'cosa',
      description: 'Full-stack web application designed to streamline the co-op program process across three key stakeholders: students, employers, and co-op coordinators.',
      tags: ['JavaScript', 'Next.js', 'Supabase', 'NodeJS', 'PostgreSQL'],
      imageUrl: cosa,
      githubUrl: 'https://github.com/mait002/Co-op-Support-Application'
    },
    {
      id: '3',
      title: 'Book-recommender Application',
      githubName: 'book-recommender',
      description: 'An interactive book recommendation system powered by Large Language Models (LLMs).',
      tags: ['Python', 'OpenAI API', 'LangChain', 'Hugging Face', 'Gradio', 'Jupyter Notebook'],
      imageUrl: bookRec,
      githubUrl: 'https://github.com/mait002/Book-Recommender-project'
    }
  ]

  return (
    <>
      <div className="projectContainer">
        <h3>Projects</h3>

          <h4>Featured Projects: </h4>
          <div className="projectGrid">
            {projects.map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project}/>
            ))}
          </div>
          <h4>And more!</h4>
          <div className="row projectSlider">
            <div className="col-lg-3 project">
            
            <a href="https://github.com/mait002/TMUber-Application" target='_blank' rel='noreferrer'>
            <Lottie className='img rounded-circle' animationData={uber} loop={true}/>
            <h5>TMUber App</h5>
            </a>
            
            </div>
          
            <div className="col-lg-3 project">
            
            <a href="https://github.com/mait002/Sky-Hopper-Game">
            <Lottie className='img' animationData={ball} loop={true}/>
            <h5>Sky Hopper Game</h5>
            </a>
            
            </div>
          
            <div className="col-lg-3 project">
                
                <a href="/">
                <img className='img' src={profile} alt="cartoon maitreyee" />
                    <h5>Personal Website</h5>
                    
                </a>
            </div>
            <div className="col-lg-3 project">
                
                <a href="https://github.com/mait002/Retail-Banking-DBMS">
                <Lottie className='img' animationData={bank} loop={true}/>
                <h5>Retail Banking Database</h5>
                </a>
            </div>
            <div className="col-lg-3 project">
            
            <a href="https://github.com/mait002/Dice-Game">
            <Lottie className='img rounded-circle' animationData={dice} loop={true}/>
            <h5>Dice Game</h5>
            </a>
            
            </div>
          
            <div className="col-lg-3 project">
            
            <a href="https://github.com/mait002/TMUber-Application">
            <Lottie className='img rounded-circle' animationData={uber} loop={true}/>
            <h5>TMUber App</h5>
            </a>
            
            </div>
          
            <div className="col-lg-3 project">
            
            <a href="https://github.com/mait002/Sky-Hopper-Game">
            <Lottie className='img' animationData={ball} loop={true}/>
            <h5>Sky Hopper Game</h5>
            </a>
            
            </div>
          
            <div className="col-lg-3 project">
                
                <a href="/">
                <img className='img' src={profile} alt="cartoon maitreyee" />
                    <h5>Personal Website</h5>
                    
                </a>
            </div>
          </div>
      </div>
    </>
  );
};

export default Projects;
