import React from 'react'
import { Button } from './button'
import {
  Calendar,
  ChevronRight,
  Code,
  Mail,
  Server,
  Users,
  type LucideIcon,
} from 'lucide-react'
import { Badge } from './badge'
import { Separator } from './separator'

const HeroCard = (props: {
  title: React.ReactNode
  Icon: LucideIcon
  description: React.ReactNode
}) => {
  return (
    <div className="grid grid-rows-subgrid glow-border row-span-3 bg-accent-2/5 p-4 rounded-2xl backdrop-blur-md">
      <div className="relative">
        <props.Icon className="size-10 text-accent" />
      </div>
      <h2 className="text-title font-semibold">{props.title}</h2>
      <p className="text-secondary">{props.description}</p>
    </div>
  )
}

const Hero = () => {
  return (
    <section className="px-container my-section relative">
      <div className="container mx-auto flex flex-col gap-16">
        <div className="grid grid-cols-2">
          <div className="flex flex-col gap-4">
            <Badge
              variant={'outline'}
              className="px-4 py-2 text-body-lg bg-linear-to-r from-accent-2/10 to-accent/20 glow-border"
            >
              Full-Stack developer
            </Badge>
            <div className="flex flex-col gap-10">
              <h1 className="text-headline font-semibold leading-tight">
                I build and maintain real-world{' '}
                <strong className="text-transparent bg-clip-text bg-linear-to-r from-accent to-accent-2">
                  applications
                </strong>{' '}
                from idea to{' '}
                <strong className="text-transparent bg-clip-text bg-linear-to-r from-accent to-accent-2">
                  production
                </strong>
              </h1>
              <div className="text-secondary text-body-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                sunt ad amet soluta delectus totam tenetur repellendus ea unde
                maiores accusantium, laboriosam illo quam corporis cupiditate,
                aliquam omnis necessitatibus ut fuga quia? Cumque, tenetur unde.
                Fuga eveniet aliquid minus enim iure esse eligendi labore sint
                aperiam, repellendus aspernatur assumenda soluta maiores rem
                inventore nostrum aliquam debitis aut consequuntur quasi
                obcaecati voluptate nam vel voluptatibus.
              </div>
              <div className="flex gap-4">
                <Button variant={'cta'} size={'xxl'}>
                  Download CV{' '}
                  <ChevronRight className="size-6 group-hover:translate-x-1 transition-transform duration-150" />
                </Button>
                <Button size={'xxl'} variant={'outline'}>
                  Contact Me
                  <Mail className="size-6 group-hover:translate-x-1 transition-transform duration-150" />
                </Button>
              </div>
            </div>
          </div>
          <div className="place-items-center flex justify-center items-center">
            <video
              autoPlay
              muted
              className="rounded-lg h-full scale-150 -translate-x-40 -z-1"
            >
              <source src="/public/hero-video.webm" type="video/webm" />
            </video>
          </div>
        </div>
        <div className="w-full grid grid-cols-4 gap-x-8 gap-y-4 py-10">
          <HeroCard
            title="6+ Years of Experience"
            Icon={Calendar}
            description="Running production applications for over 6 years, ensuring reliability and performance."
          />
          <HeroCard
            title="2+ Systems Built"
            Icon={Code}
            description="Built and maintained 2+ full-stack applications, delivering end-to-end solutions from concept to deployment."
          />

          <HeroCard
            title="Full-Stack Expertise"
            Icon={Server}
            description="Proficient in both front-end and back-end technologies, delivering comprehensive solutions."
          />

          <HeroCard
            title="Real Users"
            Icon={Users}
            description="System used by real users"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
