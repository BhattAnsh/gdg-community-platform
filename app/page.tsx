'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
Accordion,
AccordionContent,
AccordionItem,
AccordionTrigger,
} from '@/components/ui/accordion'
import { ChevronRight, ArrowRight } from 'lucide-react'
import { useEffect, useRef } from 'react'

export default function GoogleInspiredCollegeCommunityLandingPage() {
const heroLottieRef = useRef<HTMLDivElement>(null)
const footerLottieRef = useRef<HTMLDivElement>(null)

useEffect(() => {
import('@dotlottie/player-component').then(() => {
if (heroLottieRef.current && !heroLottieRef.current.hasChildNodes()) {
const playerElement = document.createElement('dotlottie-player')
playerElement.setAttribute('src', '/college-animation.json')
playerElement.setAttribute('background', 'transparent')
playerElement.setAttribute('speed', '1')
playerElement.setAttribute('loop', '')
playerElement.setAttribute('autoplay', '')
playerElement.style.width = '100%'
playerElement.style.height = '100%'
heroLottieRef.current.appendChild(playerElement)
}

if (footerLottieRef.current && !footerLottieRef.current.hasChildNodes()) {
const playerElement = document.createElement('dotlottie-player')
playerElement.setAttribute('src', '/lottie.json')
playerElement.setAttribute('background', 'transparent')
playerElement.setAttribute('speed', '1')
playerElement.setAttribute('loop', '')
playerElement.setAttribute('autoplay', '')
playerElement.style.width = '200px'
playerElement.style.height = '200px'
footerLottieRef.current.appendChild(playerElement)
}
})
}, []) // <-- Corrected useEffect closing properly

return (
<div className='flex flex-col min-h-screen bg-white font-sans'>
<div className='bg-[#FBEBE9] text-[#C5221F] py-2 px-4 text-center'>
<p className='text-sm font-medium'>
New event announced! Join us for the Summer Fest on June 15th.{' '}
<Link href='#' className='underline hover:text-[#ea4335]'>
Learn more
</Link>
</p>
</div>
<header className='sticky top-0 z-50 bg-white border-b border-[#dadce0]'>
<div className='container mx-auto px-4 h-16 flex items-center justify-between'>
<Link className='text-2xl font-medium text-[#202124]' href='#'>
College Community
</Link>
<nav className='hidden md:flex space-x-8'>
{['Events', 'Gallery', 'Team', 'FAQ'].map((item) => (
<Link
key={item}
className='text-sm text-[#5f6368] hover:text-[#202124] transition-colors'
href={`#${item.toLowerCase()}`}
>
{item}
</Link>
))}
</nav>
<Button
variant='outline'
className='hidden md:inline-flex border-[#dadce0] text-[#1a73e8] hover:bg-[#f1f3f4] hover:border-[#d2e3fc]'
>
Join Now
</Button>
</div>
</header>
<main className='flex-1'>
<section className='py-20 md:py-32 bg-[#f8f9fa]'>
<div className='container mx-auto px-4'>
<div className='flex flex-col md:flex-row items-center'>
<div className='md:w-1/2 text-center md:text-left mb-8 md:mb-0'>
<h1 className='text-4xl md:text-6xl font-medium tracking-tight text-[#202124] mb-6'>
Welcome to Our <span className='text-[#1a73e8]'>College Community</span>
</h1>
<p className='text-xl md:text-2xl text-[#5f6368] mb-8'>
Join us in creating unforgettable memories and building lasting connections.
</p>
<div className='space-x-4'>
<Button size='lg' className='bg-[#1a73e8] text-white hover:bg-[#174ea6]'>
Join Now
</Button>
<Button
size='lg'
variant='outline'
className='text-[#1a73e8] border-[#dadce0] hover:bg-[#f1f3f4] hover:border-[#d2e3fc]'
>
Learn More
</Button>
</div>
</div>
<div className='md:w-1/2 h-[300px]' ref={heroLottieRef}></div>
</div>
</div>
</section>

<section id='events' className='py-20 md:py-32 bg-white'>
<div className='container mx-auto px-4'>
<h2 className='text-3xl md:text-4xl font-medium text-center mb-12 text-[#202124]'>
Upcoming Events
</h2>
<div className='grid gap-8 md:grid-cols-3'>
{[
{ color: '#4285f4', name: 'Tech Talk' },
{ color: '#34a853', name: 'Eco Fair' },
{ color: '#fbbc04', name: 'Career Expo' },
].map((event, i) => (
<Card
key={i}
className='border border-[#dadce0] shadow-sm rounded-lg overflow-hidden transition-shadow hover:shadow-md'
>
<CardContent className='p-6'>
<div className='flex items-center space-x-4 mb-4'>
<div
style={{ backgroundColor: event.color }}
className='w-12 h-12 rounded-full flex items-center justify-center text-white font-medium text-xl'
>
{i + 11}
</div>
<div>
<p className='text-sm text-[#5f6368]'>May 2024</p>
<h3 className='text-xl font-medium text-[#202124]'>{event.name}</h3>
</div>
</div>
<p className='text-[#5f6368] mb-4'>Join us for an exciting community gathering!</p>
<div className='flex items-center justify-between'>
<span className='text-sm text-[#5f6368]'>Student Center</span>
<Button variant='ghost' size='sm' className='text-[#1a73e8] hover:bg-[#e8f0fe]'>
Learn More <ChevronRight className='ml-1 h-4 w-4' />
</Button>
</div>
</CardContent>
</Card>
))}
</div>
</div>
</section>

<section id="gallery" className="py-20 md:py-32 bg-white">
<div className="container mx-auto px-4">
<h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#ea4335]">Community Gallery</h2>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
{[...Array(8)].map((_, i) => (
<div key={i} className="aspect-square bg-gray-200 rounded-lg overflow-hidden transition-transform hover:scale-105">
<Image
src={`/placeholder.svg?height=300&width=300&text=Gallery+Image+${i + 1}`}
alt={`Gallery image ${i + 1}`}
width={300}
height={300}
className="object-cover w-full h-full"
/>
</div>
))}
</div>
</div>
</section>

<section id="team" className="py-20 md:py-32 bg-gray-50">
<div className="container mx-auto px-4">
<h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#fbbc05]">Our Team</h2>
<div className="grid gap-8 md:grid-cols-4">
{[...Array(8)].map((_, i) => (
<div key={i} className="text-center">
<div className="mb-4 relative">
<div className="aspect-square rounded-full overflow-hidden border-4 border-white shadow-lg">
<Image
src={`/team-member-${i + 1}.jpg`}
alt={`Team member ${i + 1}`}
width={200}
height={200}
className="object-cover"
/>
</div>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-1">Team Member {i + 1}</h3>
<p className="text-[#4285f4] mb-2">Position {i + 1}</p>
<p className="text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</div>
))}
</div>
</div>
</section>

<section id="faq" className="py-20 md:py-32 bg-white">
<div className="container mx-auto px-4">
<h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#484848]"><u>Frequently Asked Questions 🤔</u></h2>
<Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
{[1, 2, 3, 4].map((i) => (
<AccordionItem key={i} value={`item-${i}`} className="border-b border-gray-200">
<AccordionTrigger className="text-left text-gray-900 hover:text-[#4285f4] py-4">
Question {i}?
</AccordionTrigger>
<AccordionContent className="text-gray-600 pb-4">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</AccordionContent>
</AccordionItem>
))}
</Accordion>
</div>
</section>

<section className='py-20 md:py-32 bg-[#e8f0fe]'>
<div className='container mx-auto px-4'>
<div className='flex flex-col md:flex-row items-center justify-between'>
<div ref={footerLottieRef} className='mb-8 md:mb-0'></div>
<div className='text-center md:text-left md:ml-8'>
<h2 className='text-3xl md:text-4xl font-bold mb-4 text-[#202124]'>
Ready to Join Our Community?
</h2>
<p className='text-xl mb-6 text-[#5f6368]'>
Become a part of something extraordinary. Join us today!
</p>
<Button size='lg' className='bg-[#34a853] text-white hover:bg-[#2d9248]'>
Connect with us <ArrowRight className='ml-2 h-5 w-4' />
</Button>
</div>
</div>
</div>
</section>
</main>
<footer className='bg-[#202124] py-4'>{/* Empty black footer */}</footer>
</div>
)
}