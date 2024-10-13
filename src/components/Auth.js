import React from 'react'
import Footer from './Footer.js'
import Navbar from './Navbar.js'
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Contact from './Contact.js';
import EditNotes from './EditNote.js';
import NotesTable from './NotesTable.js';
import Home from './Home.js';
import { useNavigate } from 'react-router-dom';


function Auth() {
    const [userNotes, setUsernotes] = useState()
    const [notesId, setNotesId] = useState()
    const [userInfo, setUserInfo] = useState();

    const navigate = useNavigate()
    const navigateTOlogin = (url, delay) => {
        setTimeout(() => {
            navigate(url)
        }, delay)
    }
    const setInfo = (info) => {
        setUserInfo(pre => ({ ...pre, ...info }))
    }
    const checkauth = async () => {
        try {
            const data = await fetch('http://localhost:3000/home/login/check', { credentials: 'include', })
            const user = await data.json()
            if (!user.valid) {
                navigateTOlogin('/', 0)
            }
            if (user.valid) {
                setInfo(user.user)
            }
        } catch {
            navigateTOlogin("/serverdown")
        }
    }
    const deleteFech = async (index) => {
        try {
            await fetch(`http://localhost:3000/usernotes?username=${userInfo.username}`, { method: "DELETE", body: JSON.stringify({ index: index }) })
        } catch {
            console.log("nonono")
        }
    }

    const viewNote = (index) => {
        setNotesId(index)
    }

    const deleteNote = async (index) => {
        await deleteFech(index)
        fechUserNotes()
    }


    useEffect(() => {
        checkauth()
    }, [])


    const fechUserNotes = async () => {
        let data, notes
        try {
            data = await fetch(`http://localhost:3000/usernotes?username=${userInfo.username}`);
            notes = await data.json()
            setUsernotes(notes)
        } catch {
            console.log("fail to get notes from server")
        }
    }
    useEffect(() => {
        fechUserNotes()
    }, [userInfo])
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='home' element={<Home />} />
                <Route path='mynotes' element={<NotesTable viewNote={viewNote} deleteNote={deleteNote} userNotes={userNotes} />} />
                <Route path='editnotes' element={<EditNotes userInfo={userInfo} notesId={notesId} userNotes={userNotes} />} />
                <Route path='contact' element={<Contact userInfo={userInfo} />} />
            </Routes>
            <Footer />
        </>
    )
}

export default Auth
