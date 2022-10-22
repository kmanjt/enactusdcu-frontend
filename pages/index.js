import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/hero'
import Nav from '../components/nav'
import Project_Carousel from '../components/projects'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Enactus DCU</title>
        <meta name="description" content="Enactus DCU main website!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav/>
      <body class="h-screen bg-gradient-to-b from-amber-100 to-amber-300">
        
        <div className="1xl:container 1xl:mx-auto 1xl:px-0 py-3 px-10">
          <Project_Carousel/>
        </div>
      </body>
    </div>
  )
}
