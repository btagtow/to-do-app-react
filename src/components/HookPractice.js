import React, { useState } from 'react'
function HookPractice() {

    const [count, setCount] = useState(0)
    const [theme, setTheme] = useState('blue')

    function decrementCount(){
        // setState(prevState => {
        //     return { ...prevState, count: prevState.count -1}
        // })
        setCount(prevCount =>  prevCount - 1 )
    }

    function incrementCount(){
        setCount(prevCount => prevCount + 1)
        setTheme('red')
    }

    return (
        
        <>
            <button onClick={decrementCount}>-</button>
            <span>{count}</span>
            <span>{theme}</span>
            <button onClick={incrementCount}>+</button>
        </>
    )

}

export default HookPractice