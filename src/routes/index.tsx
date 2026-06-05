import Hero from '#/components/Hero'
import Projects from '#/components/Projects'
import TechStack from '#/components/TechStack'
import WhatIBuild from '#/components/WhatIBuild'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <WhatIBuild />
      <TechStack />
      {/* CTA SECTION */}
    </>
  )
}
