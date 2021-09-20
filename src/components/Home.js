import React from 'react'
// import image from '../moon.jpg'

export default function Home() {
    return (
        <main className="absolute object-cover bg-blue-200 w-full h-full">
            {/* // <img src={image} alt="moon" className="absolute object-cover w-full h-full" /> */}
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-6xl text-black-100 font-bold cursive leading-none lg:leading-snug home-name">Hello. I'm Billy.</h1>
            </section>
        </main>
    )
}