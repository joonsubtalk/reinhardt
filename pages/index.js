import dynamic from 'next/dynamic'
import Hero from './components/Hero'
import Challenge from './components/Challenge'
import Climb from './components/Climb'
import OldAndNew from './components/OldAndNew'
import Finding from './components/Finding'
import Giveaway from './components/Giveaway'

const DynamicHeadWithNoSSR = dynamic(
  () => import('next/head'),
  { ssr: false }
)

function Home() {
  return (
    <div>
        <DynamicHeadWithNoSSR>
        <title>Inktober</title>
        <link rel="icon" href="/favicon.ico"/>
        <meta name="description" content="Inktober "/>
        <meta name="keywords" content="HTML, CSS, JavaScript"/>
        <meta name="author" content="Ryan Chung"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@500&display=swap" rel="stylesheet"></link>
        </DynamicHeadWithNoSSR>
        <Hero />
        <Challenge />
        <OldAndNew />
        <Finding />
        <Climb />
        <Giveaway />
    </div>
  )
}




export default Home