import Head from 'next/head'
import type { NextPage } from 'next'
import Header from '../components/Header';
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";

/// TODO: https://youtu.be/urgi2iz9P6U?t=2558 1:34:00
/// TODO: change font to something slicker
const Home: NextPage = () => {
return (
  <div className="bg-[#0B0F19] h-screen text-white snap-y snap-mandatory overflow-scroll z-0">
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

    {/* Contact */}

  </div>
)
}

export default Home;