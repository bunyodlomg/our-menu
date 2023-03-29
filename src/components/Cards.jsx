import './Cards.css'

import React from 'react'

function Cards({ data }) {
    return (
        <div className='section-center'>
            {data && data.map((card) => {
                return (
                    <article key={card.id} className="menu-item">
                        <img src={card.img} alt={card.title} className="img" />
                        <div className="item-info">
                            <header>
                                <h5>{card.title}</h5>
                                <span className="item-price">${card.price}</span>
                            </header>
                            <p className="item-text">{card.desc}</p>
                        </div>
                    </article>
                )
            })}
        </div>
    )
}

export default Cards