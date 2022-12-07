import {Experience} from '../typings';

export const fetchExperiences = async () => {
    // make a call to the backend
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`);
    // get the data from the response
    const data = await res.json();
    const experiences: Experience[] = data.experiences;
    return experiences;
}