import React, { useEffect } from 'react'
import Tennisgame from './minigames/Tennisgame.js'


export default function Home(props) {

    return (
        <>
            <div className='maintainHeight'>
                <Tennisgame />
            </div>
        </>
    )
}
