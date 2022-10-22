import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/hero'
import Nav from '../components/nav'
import Project_Carousel from '../components/projects'


export default function Home() {
  return (
    <div className="h-screen bg-gradient-to-b from-amber-100 to-amber-300">
      <Head>
        <title>Enactus DCU</title>
        <meta name="description" content="Enactus DCU main website!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav/>
      <Hero heading='Enactus DCU' message='Enactus DCU is a student led social entrepreneurship society.'/>
      <Project_Carousel/>
    </div>
  )
}
