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