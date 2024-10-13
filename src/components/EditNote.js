import React, { useEffect, useRef, useState } from 'react';

export default function EditNote(props) {

    const contentarea = useRef()
    const topicArea = useRef()
    const warningAlart = useRef()
    const sucessAlart = useRef()
    const [alart, setAlart] = useState()
    const [sucess, setSucess] = useState()


    const clearEditor = () => {
        topicArea.current.value = ""
        contentarea.current.value = ""
    }

    const spreadData = (id) => {
        const note = props.userNotes[id]
        topicArea.current.value = note.topic
        contentarea.current.value = note.content
    }
    const popWarning = () => {
        warningAlart.current.classList.remove('hidden')
        setTimeout(() => {
            warningAlart.current.classList.add('hidden')
        }, 800)
    }
    const popSucess = () => {
        const cls = sucessAlart.current
        cls.classList.contains("hidden") ? cls.classList.remove('hidden') : console.log('err')
        setTimeout(() => {
            sucessAlart.current.classList.add('hidden')
        }, 800)
    }

    useEffect(() => {
        const id = props.notesId
        if (id === "new") return
        spreadData(id)
    }, [])

    const savetoDB = async (data) => {
        await fetch(`http://localhost:3000/editnotes?username=${props.userInfo.username}`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(data)
        })
        setSucess(" Article saved ✔")
        popSucess()
    }

    const handleBtn = (action) => {
        if (action === "copy") {
            const textToPutOnClipboard = contentarea.current.value
            navigator.clipboard.writeText(textToPutOnClipboard)
            setSucess("Copied ✔")
            popSucess()
        }
        if (action === "delete") {
            contentarea.current.value = ""
        }
        if (action === "save") {
            const topic = topicArea.current.value
            const content = contentarea.current.value
            if (topic === "" || content === "") {
                if (content === "") {
                    setAlart("Content is empty")
                }
                if (topic === "") {
                    setAlart("Topic is empty")
                }
                popWarning()
                return -1
            }
            const data = { "topic": topic, "content": content };
            savetoDB(data)
            clearEditor()
        }
    }

    return (
        <>

            <div className='flex mx-auto flex-col my-10 items-center' >
                <div className="mb-6 flex justify-center items-center" style={{ width: "70vh" }}>
                    <label htmlFor="default-input" className="mx-4 font-bold text-xl block mb-2 text-gray-900 dark:text-white">Topic</label>
                    <input ref={topicArea} type="text" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <div className="mb-6" >
                    <textarea data-gramm="false" data-gramm_editor="false" data-enable-grammarly="false" ref={contentarea} id="message" rows="4" style={{ height: "70vh", width: "1000px" }} className=" block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
                </div>
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
            </div>
            <div style={{ height: "50px" }}>
                <div ref={warningAlart} className="hidden p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300" role="alert">
                    <span className="font-medium">Warning alert!</span>  {alart}
                </div>
                <div ref={sucessAlart} className="hidden p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
                    <span className="font-medium">Success alert!</span> {sucess}
                </div>
            </div>
        </>
    )
}
