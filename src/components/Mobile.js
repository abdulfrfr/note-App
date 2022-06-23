import React from 'react';

function Mobile(props){

    
    
    return(
    <div className='mobile'>
    <h1 onClick={props.handleIsDone} className='title-head' id='title-head'>{props.title}</h1>
    </div>
    );
}

export default Mobile;