import dynamic from 'next/dynamic'
import Hero from './components/Hero'
import About from './components/About'
import Abilities from './components/Abilities'
import { useEffect } from 'react'

const DynamicHeadWithNoSSR = dynamic(
  () => import('next/head'),
  { ssr: false }
)

function Home() {
  return (
    <div>
        <DynamicHeadWithNoSSR>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico"/>
        <meta name="description" content="Free Web tutorials"/>
        <meta name="keywords" content="HTML, CSS, JavaScript"/>
        <meta name="author" content="John Doe"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@500&display=swap" rel="stylesheet"></link>
        </DynamicHeadWithNoSSR>
        <Hero />
        <About />
        <Abilities />
    </div>
  )
}




export default Home