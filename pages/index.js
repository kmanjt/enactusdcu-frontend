import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/hero'
import Nav from '../components/nav'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Enactus DCU</title>
        <meta name="description" content="Enactus DCU main website!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav/>
    </div>
  )
}
