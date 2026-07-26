export interface Project {
    id: string;
    title: string;
    githubName: string;
    description: string;
    tags: string[];
    imageUrl: string;
    projectUrl?: string;
    githubUrl: string;
}

export interface Skill {
    id: string;
    type: string;
    name: string;
    imageURL: string;
    skillURL: string;
    percentage: number;
}