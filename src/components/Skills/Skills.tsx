import { SkillCircle } from "../SkillCircle/SkillCircle";
import type { Skill } from "../../type";

import csharp from '../../assets/images/csharp1.png';
import python from '../../assets/images/python.png';
import java from '../../assets/images/java.webp';
import react from '../../assets/images/reactjs.webp';
import dotnet from '../../assets/images/aspDOTnet.png';
import html from '../../assets/images/html5.png';
import javascript from '../../assets/images/JavaScript.png'
import css from '../../assets/images/css3.png'
import nodejs from '../../assets/images/nodejs.svg'
import sql from '../../assets/images/sql.png'

import './Skills.scss'

const Skills = () => {
    const skills: Skill[] = [
        {
            id: '1',
            type: 'language',
            name: 'Python',
            imageURL: python,
            percentage: 90,
            skillURL: 'https://www.python.org/'
        },
        {
            id: '2',
            type: 'language',
            name: 'C#',
            imageURL: csharp,
            percentage: 70,
            skillURL: 'https://dotnet.microsoft.com/en-us/languages/csharp'
        },
        {
            id: '3',
            type: 'language',
            name: 'JavaScript',
            imageURL: javascript,
            percentage: 70,
            skillURL: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
        },
        {
            id: '4',
            type: 'language',
            name: 'Java',
            imageURL: java,
            percentage: 50,
            skillURL: 'https://www.java.com/en/'
        },
        {
            id: '5',
            type: 'language',
            name: 'SQL',
            imageURL: sql,
            percentage: 80,
            skillURL: 'https://learn.microsoft.com/en-us/sql/?view=sql-server-ver17'
        },
        {
            id: '6',
            type: 'language',
            name: 'HTML',
            imageURL: html,
            percentage: 80,
            skillURL: 'https://developer.mozilla.org/en-US/docs/Web/HTML'
        },
        {
            id: '7',
            type: 'language',
            name: 'CSS',
            imageURL: css,
            percentage: 80,
            skillURL: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
        },
        {
            id: '8',
            type: 'framework',
            name: 'ReactJS',
            imageURL: react,
            percentage: 80,
            skillURL: 'https://react.dev/'
        },
        {
            id: '9',
            type: 'framework',
            name: 'NodeJS',
            imageURL: nodejs,
            percentage: 80,
            skillURL: 'https://nodejs.org/en'
        },
        {
            id: '10',
            type: 'framework',
            name: 'ASP.NET Core',
            imageURL: dotnet,
            percentage: 65,
            skillURL: 'https://dotnet.microsoft.com/en-us/apps/aspnet'
        }
    ]

    return (
        <section className="skillsContainer">
            <h3>Skills</h3>

            <div className="skillsGrid">
                {skills.map((skill) => (
                    <SkillCircle
                        key={skill.id}
                        skill={skill}/>
                ))}
            </div>

        </section>
    );
};

export default Skills;