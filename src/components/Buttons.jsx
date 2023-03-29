import React from 'react'
import './Button.css'
function Buttons({ setUrl }) {

    return (
        <div className="btn-container">
            <button type="button" className="btn"
                onClick={() => setUrl('http://localhost:3000/menu')}>
                all
            </button>
            <button type="button" className="btn"
                onClick={() => setUrl('http://localhost:3000/menu?category=breakfast')}>
                breakfast
            </button >
            <button type="button" className="btn"
                onClick={() => setUrl('http://localhost:3000/menu?category=lunch')}>
                lunch
            </button>
            <button type="button" className="btn"
                onClick={() => setUrl('http://localhost:3000/menu?category=shakes')}>
                shakes
            </button>
        </div >
    )
}

export default Buttons