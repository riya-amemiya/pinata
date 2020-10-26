import React, { useState } from 'react';
export default (props => {
    const [num, setNum] = useState(0);
    let text = null;
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            { onClick: () => {
                    setNum(num + 1);
                } },
            'Hello World'
        ),
        React.createElement(
            'p',
            null,
            text ? num : text + num
        )
    );
});