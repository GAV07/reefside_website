// app/page.js (Server Component)
import { Button } from '@/components/button'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import { Pump } from "basehub/react-pump"
import { draftMode } from "next/headers"
import { RichText } from "basehub/react-rich-text"
import StoryLayout from '@/components/Story'
import erickChris from 'public/about/erick-chris.jpg'
import Image from 'next/image'

export const metadata = {
  title: 'Reefside Ventures',
  description: '',
}

export default function Home() {
  return (
    <div className="py-10 bg-[#013b47]">
      <StoryLayout>
        <Image
          src={erickChris}
          alt="Erick and Chris"
          className="h-70 w-full rounded-3xl object-cover object-top my-12 md:h-[30rem]"
          height={720}
          width={1024}
        />
        <Heading className="text-white" as="h1">Reefside Venture Story</Heading>
        <Lead className="text-[#C8D2D3] my-6 max-w-3xl">
          We have been in Miami for over a decade and we know what potential exists in this ecosystem
        </Lead>
        <StoryContent />
      </StoryLayout>
    </div>
  )
}

// This is another server component that will be passed as children
function StoryContent() {
  return (
    <Pump
      draft={draftMode().isEnabled}
      next={{ revalidate: 60 }}
      queries={[
        {
          about: {
            part1: {
              json: {
                content: true,
              }
            },
            part2: {
              json: {
                content: true,
              }
            },
            part3: {
              json: {
                content: true,
              }
            },
          },
        },
      ]}
    >
      {async ([{ about }]) => {
        "use server"
        return(
          <div className="prose text-white max-w-4xl">
            <div id="introduction">
              <RichText>{about.part1.json.content}</RichText>
            </div>
            <div id="built-in-miami">
              <RichText>{about.part2.json.content}</RichText>
            </div>
            <div id="future">
              <RichText>{about.part3.json.content}</RichText>
            </div>
          </div>
        )
      }}
    </Pump>
  )
}