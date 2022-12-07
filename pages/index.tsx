import Head from 'next/head'
import type { NextPage } from 'next'
import Header from '../components/Header';
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";
import Link from "next/link";
import { RocketLaunchIcon } from "@heroicons/react/24/solid";

/// TODO: https://youtu.be/urgi2iz9P6U?t=2558 1:34:00
/// TODO: change font to something slicker
const Home: NextPage = () => {
return (
  <div className="bg-[#0B0F19] h-screen text-white snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/60 scrollbar-thin">
      <Head>
          <title>Azamat EZHAEV</title>
          <meta name="description" content="My portfolio page" />
          <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <section id='hero' className='snap-start'>
          <Hero />
      </section>

      <section id='about' className='snap-center'>
          <About/>
      </section>

      <section id='experience' className='snap-center'>
          <Experience/>
      </section>

      <section id='skills' className='snap-start'>
          <Skills/>
      </section>

      <section id='projects' className='snap-start'>
          <Projects/>
      </section>

      <section id='contact' className='snap-start'>
          <ContactMe/>
      </section>
      <Link href="#hero">
          <footer draggable={false} className="sticky bottom-5 w-full cursor-pointer">
              <div draggable={false} className="flex items-center justify-center">
                  <RocketLaunchIcon className="text-[#F7AB0A] h-6 w-6 filter grayscale hover:grayscale-0 cursor-pointer" />
              </div>
          </footer>
      </Link>
  </div>
)
}

export default Home;