import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'


const PageNotFound = () => {
    const navlink = useNavigate()
    useEffect(() => {
        navlink("auth/home")
    })
    return (
        <div>
            wrong turn go :
            <Link to='/home'>home</Link>
        </div>
    )
}

export default PageNotFound
