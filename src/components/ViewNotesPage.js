import React from 'react'
import { useNavigate } from 'react-router-dom';
import ButtonBar from './ButtonBar.js';
import toast, { Toaster } from 'react-hot-toast';


export default function ViewNotesPage({ topic, content }) {
    const popTost = (msg, success) => {
        let emote = "❌";
        if (success) emote = "✅"
        toast(`${msg}`,
            {
                icon: `${emote}`,
                style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                },
            }
        );
    }
    const navigate = useNavigate()
    const handleBtn = (action) => {
        if (action === "copy") {
            navigator.clipboard.writeText(content)
            popTost("Copied ✔", true)
        }
        if (action === "delete") {
            console.log("save")
        }
        if (action === "save") {
            console.log("save")
        }
    }

    if (topic === undefined) {
        navigate("/auth/mynotes")
    }
    return (
        <>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <div className='flex justify-center align-middle flex-col' style={{ minWidth: "90vw", minHeight: "80.7vh" }}>
                <div className='flex flex-col items-center m-auto border-solid border-2 border-black rounded-lg' style={{ width: "50vw", minHeight: "50vh", background: "#F8F8F8", marginTop: "15px", marginBottom: "15px" }}>
                    <div className='mt-6'>{topic}</div>
                    <hr class="w-48 h-px mx-auto my-4  border-0 rounded md:my-10 bg-gray-700"></hr>
                    <div className='p-3'>{content}</div>
                </div>
                <div className='items-center mx-auto'>
                    <ButtonBar handleBtn={handleBtn} />
                </div>
            </div>
        </>
    )
}
