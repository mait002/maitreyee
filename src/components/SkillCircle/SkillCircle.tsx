import React from "react";
import type { Skill } from "../../type";
import './SkillCircle.scss';

interface SkillCircleProps {
    skill: Skill;
}

export const SkillCircle: React.FC<SkillCircleProps> = ({skill}) => {
    const radius = 52;
    const circumference = 2* Math.PI * radius;
    const offset = circumference - (skill.percentage/100) * circumference;

    return (
        <div className="skillItem">
            <div className="skillCircle">

                <svg className="progressRing" viewBox="0 0 120 120">
                    <circle 
                        className="progressBackground"
                        cx="60"
                        cy="60"
                        r={radius}/>
                    <circle
                        className="progress"
                        cx="60"
                        cy="60"
                        r={radius}
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                    />
                </svg>
                
                    <div className="skillInner">
                        <img src={skill.imageURL} alt={skill.name} />
                    </div>

            </div>
            <span className="skillName">
                 {skill.name}
            </span>

        </div>
    );
};