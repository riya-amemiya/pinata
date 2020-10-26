import React, { Component, useState } from 'react';
export default props =>
{
    const [num, setNum] = useState(0)
    let text =null
    return (
        <div>
            <h1 onClick={() => { console.log(num) }}>Hello World</h1>
            <p>{text ? num : text + num}</p>
        </div>
    )
}