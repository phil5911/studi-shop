import React from 'react'

const TestComponent = (props) => {
        return (
    <div>
        <h5>Voici votre coompte avec une variable let: {props.points}</h5>
        <button onClick={props.functionClick}>Appuyez ICI</button>
    </div>
    )
}

export default TestComponent



