// import './App.css';
// import Navbar from './components/Navbar.js';
// import Footer from './components/Footer.js';
// import Contact from './components/Contact.js';
// import EditNotes from './components/EditNote.js';
// import NotesTable from './components/NotesTable.js';
// import Home from './components/Home.js';
// import LoginPage from './components/LoginPage.js';
// import SigninPage from './components/SigninPage.js';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import { useEffect, useState } from 'react';



// function App() {
//   const [userNotes, setUsernotes] = useState()
//   const [notesId, setNotesId] = useState()
//   const [userInfo, setUserInfo] = useState({ username: null, email: null });


//   const fechUserNotes = async () => {
//     const data = await fetch('http://localhost:3000/usernotes');
//     const notes = await data.json()
//     setUsernotes(notes)
//   }

//   useEffect(() => {
//     fechUserNotes()
//   }, [])
//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <><LoginPage /></>
//     },
//     {
//       path: "/signin",
//       element: <><SigninPage /></>
//     },
//     {
//       path: "/home",
//       element: <><Navbar fechUserNotes={fechUserNotes} /><Home setUserInfo={setUserInfo} /><Footer /></>
//     },
//     {
//       path: "/contact",
//       element: <><Navbar fechUserNotes={fechUserNotes} /><Contact userInfo={userInfo} /><Footer /></>
//     },
//     {
//       path: "/editnotes",
//       element: <><Navbar fechUserNotes={fechUserNotes} /><EditNotes userInfo={userInfo} notesId={notesId} userNotes={userNotes} /><Footer /></>
//     },
//     {
//       path: "/mynotes",
//       element: <><Navbar fechUserNotes={fechUserNotes} /><NotesTable userInfo={userInfo} fechUserNotes={fechUserNotes} setNotesId={setNotesId} userNotes={userNotes} /><Footer /></>
//     },
//   ])
//   return (
//     <>
//       <RouterProvider router={router} />
//     </>
//   );
// }

// export default App;
