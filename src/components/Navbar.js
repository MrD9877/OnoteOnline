import React from 'react'
import logo from "../images/github.svg"
import { Link } from 'react-router-dom'

export default function Navbar(props) {
    return (
        <div className="bg-fuchsia-300" style={{ height: "10vh", background: "#EE82EE" }}>
            <nav className="flex justify-between items-center px-3 py-2">
                <Link className="font-bold text-xl" to="/login">
                    <span className='text-green-600'>&lt;</span><span>Onot</span><span className='text-green-600'>es/&gt;</span>
                </Link>
                <div className=" basis-1/4 flex justify-around">
                    <div>
                        <Link to="/home">
                            <lord-icon
                                src="https://cdn.lordicon.com/wmwqvixz.json"
                                trigger="hover"
                                style={{ width: "50px", height: "50px" }}
                            ></lord-icon>
                        </Link>
                    </div>
                    <Link to="/mynotes" >
                        <lord-icon
                            src="https://cdn.lordicon.com/xljvqlng.json"
                            trigger="hover"
                            style={{ width: "50px", height: "50px" }}
                        ></lord-icon>
                    </Link>
                    <Link to="/contact">
                        <lord-icon
                            src="https://cdn.lordicon.com/srsgifqc.json"
                            trigger="hover"
                            style={{ width: "50px", height: "50px" }}
                        ></lord-icon>
                    </Link>
                </div>
                <div style={{ width: "50px", height: "50px" }} >
                    <a href="/github">
                        <img style={{ height: "fit" }} src={logo} alt="not found" />
                    </a>
                </div>
            </nav>

        </div>
    )
}



