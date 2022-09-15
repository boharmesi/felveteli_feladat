import {Project} from "../Components/types";

let projectsData: Project[] = [];

let worker1 = {name: "Példa Péter", position: "Adatelemző"}
let worker2 = {name: "Mézga Géza",  position: "Asszisztens"}
let worker3 = {name: "Kiss Piroska",  position: "Adminisztrátor"}
let worker4 = {name: "Nagy Nóra",  position: "Projektvezető"}

let workers1 = [];
workers1.push(worker1, worker4);
let workers2= [];
workers2.push(worker2, worker3);

let link = ["https://www.lipsum.com/"];

let project1 = {
    name: "Projekt1",
    description: "Lorem ipsum dolor sit amet, consectetur tincidunt. Lorem ipsum dolor sit amet, consectetur tincidunt.",
    workers: workers1,
    links: link
}
let project2 = {
    name: "Projekt2",
    description: "Lorem ipsum dolor sit amet, consectetur tincidunt.",
    workers: workers2,
    links: link
}

projectsData.push(project1, project2);

export const addProject = async (project: Project) => {
    await setTimeout(() => {
    }, 500);
    projectsData.push(project);
}

const queryProjects = async (): Promise<Project[]> => {
    await setTimeout(() => {
    }, 500);
    return Promise.resolve<Project[]>(projectsData);
}

export async function getProjects(): Promise<Project[]> {
    return await queryProjects();
}

