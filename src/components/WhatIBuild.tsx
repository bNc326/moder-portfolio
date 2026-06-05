import React from 'react'
import Section from './Section'
import {
  PageTitle,
  PageTitleBadge,
  PageTitleHeading,
  PageTitleSubtitle,
  PageTitleDivider,
  PageTitleBg,
} from './PageTitle'

const WhatIBuild = () => {
  return (
    <Section>
      <PageTitle className="py-20">
        <PageTitleBadge className="text-body bg-linear-to-r from-accent-2/10 to-accent/20 backdrop-blur-xs">
          lorem
        </PageTitleBadge>
        <PageTitleHeading as="h2">What I Build</PageTitleHeading>
        <PageTitleSubtitle>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
          ipsum?
        </PageTitleSubtitle>
        <PageTitleDivider />
        <PageTitleBg className="text-transparent bg-clip-text bg-linear-to-b from-accent/15 via-accent-2/15 to-70% to-transparent  blur-[1px]">
          I BUILD
        </PageTitleBg>
      </PageTitle>
    </Section>
  )
}

export default WhatIBuild
