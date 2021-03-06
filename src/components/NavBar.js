import React from 'react'
import { NavLink } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons'

export default function NavBar() {
    return (
        <header className="bg-blue-600">
            <div className="container mx-auto flex justify-between">
                <nav className='flex'>
                    <NavLink
                        to='/'
                        activeClassName="text-white" 
                        exact className="inline-flex items-center py-6 px-3 mr-4 text-black-100 hover:text-white text-4xl font-bold cursive tracking-widest">
                        Billy
                    </NavLink>
                    <NavLink to='/post' className="inline-flex items-center py-3 px-3 my-6 rounded text-black-200 hover:text-white" activeClassName="text-blue-100 bg-blue-700">
                        Blog
                    </NavLink>
                    <NavLink to='/project' className="inline-flex items-center py-3 px-3 my-6 rounded text-black-200 hover:text-white" activeClassName="text-blue-100 bg-blue-700">
                        Projects
                    </NavLink>
                    <NavLink to='/about' className="inline-flex items-center py-3 px-3 my-6 rounded text-black-200 hover:text-white" activeClassName="text-blue-100 bg-blue-700">
                        About
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon url="https://github.com/bbaneydev" className="mr-4" target="_blank" fgColor='#fff' style={{ height: 35, width: 35}} />
                    <SocialIcon url="https://www.linkedin.com/in/billy-baney-450bb8201/" className="mr-4" target="_blank" fgColor='#fff' style={{ height: 35, width: 35}} />
                    <SocialIcon url="https://twitter.com/baney_billy" className="mr-4" target="_blank" fgColor='#fff' style={{ height: 35, width: 35}} />
                </div>
            </div>
        </header>
    )
}