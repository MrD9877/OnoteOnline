import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="bg-fuchsia-300">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm ">© 2023 <a href="https://flowbite.com/" className="hover:underline">ONOTES™</a>. All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-mediumsm:mt-0">
                    <li>
                        <a href="/" className="hover:underline me-4 md:me-6">About</a>
                    </li>
                    <li>
                        <a href="/" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="/" className="hover:underline me-4 md:me-6">Licensing</a>
                    </li>
                    <li>
                        <Link to="/auth/contact" className="hover:underline">Contact</Link>
                    </li>
                </ul>
            </div>
        </footer>

    )
}
