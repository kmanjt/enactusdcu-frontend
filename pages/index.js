import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/hero'
import Nav from '../components/nav'
import { SliderData } from '../components/projectData'
import Slider from '../components/Slider'
import Team from '../components/Team'
import Contact from '../components/contact'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Enactus DCU</title>
        <meta name="description" content="Enactus DCU main website!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero heading='Enactus DCU' message='Enactus DCU is a student led social entrepreneurship society.'/>
      <div  className="bg-gradient-to-b from-amber-100 to-amber-300">
      <Slider slides={SliderData} />
      <Team/>
      <Contact/>
    </div>
    </div>
  )
}
