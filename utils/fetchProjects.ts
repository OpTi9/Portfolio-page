import {Project} from '../typings';

export const fetchProjects = async () => {
    // make a call to the backend
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`);
    // get the data from the response
    const data = await res.json();
    const projects: Project[] = data.projects;
    return projects;
}