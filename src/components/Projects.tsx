import React from 'react'
import {
  PageTitle,
  PageTitleBadge,
  PageTitleBg,
  PageTitleDivider,
  PageTitleHeading,
  PageTitleSubtitle,
} from './PageTitle'

const Projects = () => {
  return (
    <section className="px-container my-section relative">
      <div className="container mx-auto">
        <PageTitle className="py-20">
          <PageTitleBadge className="text-body bg-linear-to-r from-accent-2/10 to-accent/20 backdrop-blur-xs">
            lorem
          </PageTitleBadge>
          <PageTitleHeading as="h2">My real projects</PageTitleHeading>
          <PageTitleSubtitle>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
            ipsum?
          </PageTitleSubtitle>
          <PageTitleDivider />
          <PageTitleBg className="text-transparent bg-clip-text bg-linear-to-b from-accent/15 via-accent-2/15 to-70% to-transparent  blur-[1px]">
            PROJECTS
          </PageTitleBg>
        </PageTitle>
        {/* //TODO create todo card */}
        <div>TODO create project cards</div>
      </div>
    </section>
  )
}

export default Projects
