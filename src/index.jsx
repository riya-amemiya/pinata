import React, { useState } from 'react';
export default props =>
{
    const [num, setNum] = useState(0)
    let text =null
    return (
        <div>
            <h1 onClick={() => { setNum(num + 1) }}>Hello World</h1>
            <p>{text ? num : text + num}</p>
        </div>
    )
}