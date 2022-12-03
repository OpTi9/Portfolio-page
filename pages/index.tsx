import Head from 'next/head'
import type { NextPage } from 'next'
import Header from '../components/Header';
import Hero from "../components/Hero";

/// TODO: https://youtu.be/urgi2iz9P6U?t=2558
const Home: NextPage = () => {
return (
  <div className="bg-gray-900 h-screen text-white snap-y snap-mandatory overflow-scroll z-0">
    <Head>
      <title>Azamat EZHAEV</title>
      <meta name="description" content="My portfolio page" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    
    <Header />

    {/* Hero */}
    <section id='hero' className='snap-center'>
      <Hero />
    </section>

    {/* About */}

    {/* Experience */}

    {/* Skills */}

    {/* Projects */}

    {/* Contact */}

  </div>
)
}

export default Home;