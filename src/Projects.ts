import {Project} from "./types";

const projectsData: Project[] = [];

    export const addProject = async (project: Project) => {
        await setTimeout(() => {}, 500);
        projectsData.push(project)
    }

    const queryProjects = async (): Promise<Project[]> => {
        await setTimeout(() => {}, 500);
        return Promise.resolve<Project[]>(projectsData);
    }

   export async function getProjects(): Promise<Project[]>{
        const kicsikacsa = await queryProjects();
        return kicsikacsa.reverse();
    }

