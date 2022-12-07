import { groq } from "next-sanity";
import { sanityClient } from "../sanity";
import { Skill } from "../typings";

const query = groq`
*[_type == "skill"][0]
`;

export const fetchSkills = async () => {
    const res = await sanityClient.fetch(query);

    const skills: Skill[] = res;

    return skills;
};
