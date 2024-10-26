import React from 'react'

export default function ButtonBar({ handleBtn }) {
    return (
        <>
            <div className='flex justify-around' style={{ width: "50vw" }}>
                <button onClick={() => handleBtn("save")} className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-1 py-1 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
                    <lord-icon
                        src="https://cdn.lordicon.com/jgnvfzqg.json"
                        trigger="hover"
                        style={{ width: "30px", height: "25px" }}
                    ></lord-icon>
                </button>
                <button onClick={() => handleBtn("delete")} className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-1 py-1 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
                    <lord-icon
                        src="https://cdn.lordicon.com/skkahier.json"
                        trigger="hover"
                        style={{ width: "30px", height: "25px" }}
                    ></lord-icon>
                </button>
                <button onClick={() => handleBtn("copy")} className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-1 py-1 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
                    <lord-icon
                        src="https://cdn.lordicon.com/iykgtsbt.json"
                        trigger="hover"
                        style={{ width: "30px", height: "25px" }}
                    ></lord-icon>
                </button>
            </div>
        </>
    )
}
