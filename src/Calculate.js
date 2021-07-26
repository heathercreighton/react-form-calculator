import { useState } from 'react';


function Calculate() {
    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
    
    function onKeyPress(e) {
        if (e.keyCode === 13) {     // 13 is the `Enter` key
            e.preventDefault()      // prevents the form from posting to the server and reloading the page
        }
    }

    function handleSetNum1(e) {
        setNum1(Number(e.target.value))     //makes the target value a number and sets num1
    }

    function handleSetNum2(e) {
        setNum2(Number(e.target.value))     //makes the target value a number and sets num2
    }

    function handleAdd(e) {
        e.preventDefault()
        console.log(num1 + num2)
    }

    function handleSubtract(e) {
        e.preventDefault()
        console.log(num1 - num2)
    }


    return (
        <div style={{margin: "50px", textAlign: "center"}}>
            <h1>Calculate</h1>
            <form>
                <input 
                    type="number"
                    placeholder="Enter a number"
                    onKeyDown={onKeyPress}
                    value={num1}
                    onChange={handleSetNum1}
                />

                <input
                    type="number"
                    placeholder="Enter a number"
                    onKeyDown={onKeyPress}
                    value={num2}
                    onChange={handleSetNum2}
                />
                
                <input type="submit" value="Add" onClick={handleAdd} />
                <input type="submit" value="Subtract" onClick={handleSubtract} />
                <input type="submit" value="Reset" /> {/*no need to add a handler here since the default behavior of a "submit" type input is reloading the whole page*/}
            </form>
            
            
        </div>
    )
}

export default Calculate;