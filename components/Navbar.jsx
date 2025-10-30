'use client'
import { WEBSITE_ABOUT, WEBSITE_CONTACT, WEBSITE_HOME, WEBSITE_PROJECTS, WEBSITE_REVIEWS, WEBSITE_SERVICES } from '@/routes/WebsiteRoutes'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

import Button from './Button'


const Navbar = () => {
  const pathName = usePathname()
  return (
    <nav className=' px-5 h-16 w-full fixed top-0 left-0 z-50 bg-transparent  flex justify-between items-center'>
      <div><svg xmlns="http://www.w3.org/2000/svg" width="148" height="32" fill="none" viewBox="0 0 148 32" className="svelte-12apd5l"><path fill="#FFFBEB" d="M100.42 10.06c-5.49 0-9.42 3.74-9.42 9.81s3.97 9.81 9.6 9.81c4.62 0 7.75-2.53 8.47-6.19h-4.34c-.42 1.51-1.78 2.72-4.13 2.72-3.02 0-4.99-2.04-4.99-5.13v-.04h13.73v-1.17c0-6.3-3.63-9.81-8.92-9.81Zm-4.8 7.92c.22-2.79 2.11-4.45 4.72-4.45 2.6 0 4.5 1.78 4.5 4.45H95.6ZM120.06 10.06c-4.61 0-8.05 2.34-8.36 6.9h4.5c.08-2.3 1.36-3.43 3.67-3.43 2.16 0 3.48.95 3.48 3.48v.34l-6.24 1.54c-2.91.76-5.48 2.5-5.48 5.74 0 2.83 2 5.05 5.82 5.05a6.39 6.39 0 0 0 5.98-3.5v3.13h4.38V17.53c0-4.64-2.76-7.47-7.75-7.47Zm3.29 11.96c0 2.76-1.78 4.46-4.31 4.46-1.78 0-2.95-.8-2.95-2.42 0-1.36.87-2.23 2.76-2.68l4.5-1.1v1.74ZM136.46 5.16l-4.46.71v4.57h-2.38v3.77H132v10.34c0 3.17 1.28 4.76 4.8 4.76h3.21v-3.78h-1.96c-1.25 0-1.59-.3-1.59-1.58V14.2h3.55v-3.77h-3.55V5.16ZM82.7 7.3v3.14h-2.43v3.77h2.42v15.1h4.46V14.2h3.25v-3.77h-3.25V7.72c0-1.24.38-1.58 1.55-1.58h1.7V2.48h-3.02c-3.29 0-4.69 1.84-4.69 4.83ZM76.17 24.06V2.48h-4.46v22c0 2.98 1.4 4.83 4.7 4.83h3.4v-3.66h-2.08c-1.17 0-1.55-.34-1.55-1.59ZM66.55 24.06V2.48h-4.46v22c0 2.98 1.4 4.83 4.69 4.83h3.4v-3.66H68.1c-1.17 0-1.55-.34-1.55-1.59ZM48.65 2.48c-1.9 0-3.6 1.21-4.2 3.02l-7.9 23.8h4.69l2.23-7.05h10.28l2.27 7.06h4.69L52.84 5.5a4.41 4.41 0 0 0-4.2-3.03Zm-3.9 15.7 3.66-11.51c.06-.2.33-.2.4 0l3.65 11.5h-7.71ZM145.27 29.3a2.73 2.73 0 1 0 0-5.46 2.73 2.73 0 0 0 0 5.47ZM28.7 13.62a3.36 3.36 0 1 0-6.22-2.57 3.36 3.36 0 1 0 6.23 2.57ZM6.76 15.7a3.36 3.36 0 1 0 0-6.73 3.36 3.36 0 0 0 0 6.73ZM16.12 32a3.36 3.36 0 1 0 .01-6.73 3.36 3.36 0 0 0 0 6.73Z"></path><path fill="#FFFBEB" d="M29.92 20.05a5.04 5.04 0 0 0-3.3-.6c-1.12.16-2.43.99-3.91.14-1.19-.69-1.37-2.01-1.68-3.03a5.14 5.14 0 0 0-1.42-2.34c-.72-.73-1.6-1.51-1.6-2.76 0-1.7 1.38-2.42 2.08-3.31a5 5 0 1 0-7.78-.03c.63.8 2.1 1.84 2.1 3.33 0 1.4-1.24 2.22-2.08 3.3-.32.39-.57.83-.77 1.28-.46 1.04-.46 2.72-1.85 3.52-1.48.85-2.8.02-3.92-.15a5 5 0 1 0 3.88 6.74c.37-.94.55-2.74 1.84-3.48 1.04-.6 2.18-.2 3.34.05.04 0 .07.02.1.03H15l.16.04.12.02h.05c.3.06.6.09.9.09h.27l.43-.04c1.39-.17 2.76-.88 4-.17 1.29.75 1.47 2.55 1.84 3.49a5.02 5.02 0 0 0 9 .7 4.99 4.99 0 0 0-1.84-6.83Z"></path></svg></div>
      <div className='bg-black py-2 font-bold text-lg px-4 border border-slate-700 rounded-full text-white flex items-center gap-5 '>
        <Link className={`py-1 px-5 hover:text-emerald-500 transition-all duration-500  rounded-full ${pathName === WEBSITE_HOME && 'text-emerald-500 rounded-full bg-gray-900'}`} href={WEBSITE_HOME}>Home</Link>
        <Link className={`py-1 px-5 hover:text-emerald-500 transition-all duration-500  rounded-full ${pathName === WEBSITE_ABOUT && 'text-emerald-500 rounded-full bg-gray-900'}`} href={WEBSITE_ABOUT}>About</Link>
        <Link className={`py-1 px-5 hover:text-emerald-500 transition-all duration-500  rounded-full ${pathName === WEBSITE_SERVICES && 'text-emerald-500 rounded-full bg-gray-900'}`} href={WEBSITE_SERVICES}>Services</Link>
        <Link className={`py-1 px-5 hover:text-emerald-500 transition-all duration-500  rounded-full ${pathName === WEBSITE_PROJECTS && 'text-emerald-500 rounded-full bg-gray-900'}`} href={WEBSITE_PROJECTS}>Projects</Link>
        <Link className={`py-1 px-5 hover:text-emerald-500 transition-all duration-500  rounded-full ${pathName === WEBSITE_REVIEWS && 'text-emerald-500 rounded-full bg-gray-900'}`} href={WEBSITE_REVIEWS}>Reviews</Link>
        <Link className={`py-1 px-5 hover:text-emerald-500 transition-all duration-500  rounded-full ${pathName === WEBSITE_CONTACT && 'text-emerald-500 rounded-full bg-gray-900'}`} href={WEBSITE_CONTACT}>Contact</Link>


      </div>
      <Button  type='button' text='Have a Quote' />
    </nav>
  )
}

export default Navbar