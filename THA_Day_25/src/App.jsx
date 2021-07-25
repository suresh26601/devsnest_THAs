import React from 'react'
import "./App.css"
export const App = () => {
    return (
        <>
            <main className="bg-green-100 w-1/1 h-screen overflow-x-hidden">
                <nav className="w-1/1 h-14 bg-blue-700 flex" >
                <div className="container flex inline-block text-white w-1/1 justify-evenly items-center">
                    <a className="hover:text-black" href="/">HOME</a>
                    <a className="hover:text-black" href="/">ABOUT</a>
                    <a className="hover:text-black" href="/">CONTACT</a>
                    <a className="hover:text-black" href="/">FEEDBACK</a>
                    <a className="hover:text-black" href="/">LOGIN</a>
                </div>
                </nav>
                <section className="container text-center">
                <button className="bg-blue-600 p-1 text-white rounded m-4 hover:bg-blue-500" >Click Me</button>
                </section>
            </main>
        </>
    )
}
