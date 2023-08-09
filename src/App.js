import React from 'react'
import SidePanel from './components/sidePanel'
import Card from './components/card'

export default function App() {
  const cardData = [
    {
      imgsrc: "https://static.miraheze.org/raincodewiki/0/0a/Yuma_Kokohead_-_Splash_Illustration.jpg",
      header: "Yuma Kokohead",
      blurb: "Detective-in-training",
    },
    {
      imgsrc: "https://static.miraheze.org/raincodewiki/1/14/Master_Detective_-_Desuhiko_Thunderbolt_Illustration.png",
      header: "Desuhiko Thunderbolt",
      blurb: "Master Detective",
    },
    {
      imgsrc: "https://static.miraheze.org/raincodewiki/9/97/Master_Detective_-_Fubuki_Clockford_Illustration.jpg",
      header: "Fubuki Clockford",
      blurb: "Master Detective",
    },
    {
      imgsrc: "https://static.miraheze.org/raincodewiki/1/16/Master_Detective_-_Halara_Nightmare_Illustration.png",
      header: "Halara Nightmare",
      blurb: "Master Detective",
    },
    {
      imgsrc: "https://static.miraheze.org/raincodewiki/c/c4/Master_Detective_-_Vivia_Twilight_Illustration.png",
      header: "Vivia Twilight",
      blurb: "Master Detective",
    },
    {
      imgsrc: "https://static.miraheze.org/raincodewiki/a/ac/Nocturnal_Detective_Agency_-_Yakou_Furio_Illustration.png",
      header: "Yakou Furio",
      blurb: "Head of the Nocturnal Detective Agency",
    },
  ]

  const cards = cardData.map(item => (<Card
    imgsrc={item.imgsrc}
    header={item.header}
    blurb={item.blurb}
  />))

  return (
    <div>
      <SidePanel
        imgsrc="https://static.miraheze.org/raincodewiki/b/bf/WDO_Logo.jpg"
        name="World Detective Organization"
        content="An extra-legal, extra-privileged organization devoted to eradicating the world’s unsolved mysteries. Their branches exist throughout the world, one of which is the Nocturnal Detective Agency in Kanai Ward. The key players in their activities are Master Detectives who possess Forensic Fortes, but ordinary detectives are also enlisted."
      />
      {cards}
    </div>
  )
}