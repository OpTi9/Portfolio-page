import {Social} from '../typings';

export const fetchSocials = async () => {
    // make a call to the backend
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`);
    // get the data from the response
    const data = await res.json();
    const socials: Social[] = data.socials;
    return socials;
}