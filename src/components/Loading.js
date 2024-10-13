import React from 'react';
import spinner from "../images/Settings.gif"

function Loading(props) {
    return (
        <>
            <div className="d-flex justify-content-around align-items-center loading" style={{ height: `${props.height}` }}>
                <img src={spinner} alt="Loading..." />
            </div>
        </>
    );
}

export default Loading;