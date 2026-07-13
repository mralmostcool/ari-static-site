import React from 'react'
import { PageHeader } from '@/components'

export const About: React.FC = () => {
  return (
    <div className="w-full bg-[#fafafa] min-h-screen">
      <PageHeader
        title="Defence Solutions"
        content="ARI Simulation offers a range of sophisticated simulator products suitable for armed forces and smaller response units."
        metadata="July 13, 2026"
        button1={{ text: 'Download Brochure', link: 'https://example.com/brochure.pdf' }}
        button2={{ text: 'Contact Us', link: '/contact' }}
      />
      
      <div className="max-w-6xl mx-auto px-16 py-12 text-left">
        <p className="text-lg text-zinc-600">
          Welcome to the Defence Solutions platform. ARI Simulation develops state-of-the-art training environments to support complex tactical scenarios.
        </p>
      </div>
    </div>
  )
}
