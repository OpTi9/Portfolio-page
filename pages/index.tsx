import Head from 'next/head';
import type {GetStaticProps} from 'next';
import Header from '../components/Header';
import Hero from "../components/Hero";
import About from "../components/About";
import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";
import Link from "next/link";
import { RocketLaunchIcon } from "@heroicons/react/24/solid";
import {PageInfo, Experience, Skill, Project, Social} from "../typings";
import {fetchPageInfo} from "../utils/fetchPageInfo";
import {fetchExperiences} from "../utils/fetchExperiences";
import {fetchSkills} from "../utils/fetchSkills";
import {fetchProjects} from "../utils/fetchProjects";
import {fetchSocials} from "../utils/fetchSocials";

/// TODO: change font to something slicker

type Props = {
    experiences: Experience[];
    pageInfo: PageInfo;
    projects: Project[];
    skills: Skill[];
    socials: Social[];
}

const Home = ({pageInfo, experiences, skills, socials, projects}: Props) => {
return (
  <div className="bg-[#0B0F19] h-screen text-white snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/60 scrollbar-thin">
      <p>test</p>
      {/*<Head>*/}
      {/*    <title>Azamat EZHAEV</title>*/}
      {/*    <meta name="description" content="My portfolio page" />*/}
      {/*    <link rel="icon" href="/favicon.ico" />*/}
      {/*</Head>*/}

      {/*<Header socials={socials} />*/}

      {/*<section id='hero' className='snap-start'>*/}
      {/*    <Hero pageInfo={pageInfo} />*/}
      {/*</section>*/}

      {/*<section id='about' className='snap-center'>*/}
      {/*    <About pageInfo={pageInfo} />*/}
      {/*</section>*/}

      {/*<section id='experience' className='snap-center'>*/}
      {/*    <WorkExperience experiences={experiences} />*/}
      {/*</section>*/}

      {/*<section id='skills' className='snap-start'>*/}
      {/*    <Skills skills={skills} />*/}
      {/*</section>*/}

      {/*<section id='projects' className='snap-start'>*/}
      {/*    <Projects projects={projects}/>*/}
      {/*</section>*/}

      {/*<section id='contact' className='snap-start'>*/}
      {/*    <ContactMe/>*/}
      {/*</section>*/}
      {/*<Link href="#hero">*/}
      {/*    <footer draggable={false} className="sticky bottom-5 w-full cursor-pointer">*/}
      {/*        <div draggable={false} className="flex items-center justify-center">*/}
      {/*            <RocketLaunchIcon className="text-[#F7AB0A] h-6 w-6 filter grayscale hover:grayscale-0 cursor-pointer" />*/}
      {/*        </div>*/}
      {/*    </footer>*/}
      {/*</Link>*/}
  </div>
)
}

export default Home;

// export const getStaticProps: GetStaticProps<Props> = async () => {
//     console.log(process.env);
//     const pageInfo: PageInfo = await fetchPageInfo();
//     const experiences: Experience[] = await fetchExperiences();
//     const skills: Skill[] = await fetchSkills();
//     const projects: Project[] = await fetchProjects();
//     const socials: Social[] = await fetchSocials();
//
//     // when we deploy we first fetch the data from the CMS and then we pass it to the page as props
//     return {
//         props: {
//             pageInfo,
//             experiences,
//             skills,
//             projects,
//             socials,
//         },
//         // revalidate every hour
//         revalidate: 30,
//     }
// }