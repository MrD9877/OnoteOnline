import React, { useEffect, useState } from 'react'
import Tennisgame from '../minigames/Tennisgame.js'


export default function Home(props) {
    const [record, setRecord] = useState(0)

    return (
        <>
            {record}
            <div className='maintainHeight'>
                <Tennisgame playerX={10} playerWidth={10} playerHeight={90} ballRaidus={20} canvasHeight={"300px"} canvasWidth={"500px"} setRecord={setRecord} />
                {/* <Tennisgame /> */}
            </div>
        </>
    )
}
