import { Button } from '@/components/button'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import { Pump } from "basehub/react-pump"
import { draftMode } from "next/headers"
import { RichText } from "basehub/react-rich-text"

export const metadata = {
  title: 'Reefside Story',
  description:
    '',
}

export default function Home() {
  return (
    <div className="mx-auto mt-16">
      <Heading className="text-white" as="h1">Reefside Venture Story</Heading>
      <Lead className="text-[#C8D2D3] my-6 max-w-3xl">
        We have been in Miami for over a decade and we know what potential exists in this ecosystem
      </Lead>
      <Pump
              draft={draftMode().isEnabled}
              next={{ revalidate: 60 }}
              queries={[
                {
                  about: {
                    storyBlock: { 
                      json: { 
                        content: true,
                      },
                    },
                  },
                },
              ]}
            >
              {async ([{ about }]) => {
                "use server"
                return(
                  <div className="prose text-white max-w-4xl ">
                    <RichText>{about.storyBlock.json.content}</RichText>
                  </div>
                ) 
              }}
      </Pump>
      <section className="mt-16 grid grid-cols-1 lg:grid-cols-2 lg:gap-12">        
      </section>
    </div>
  )
}


