import { useState } from 'react'
import { useFetch } from '../hooks/useFetch'

function Shakes() {
    const [url, setUrl] = useState('https://bunyodlomg.github.io/api-menu/db.json')
    const { data, error, isPanding } = useFetch(url, 'shakes')

    return (
        <div className='section-center'>
            {data && data.map((card) => {
                return (
                    <article key={card.id} className="menu-item" data-aos="flip-right">
                        <img src={card.img} alt={card.title} className="img" data-aos="fade-down" />
                        <div className="item-info" data-aos="flip-left">
                            <header data-aos="flip-up">
                                <h5>{card.title}</h5>
                                <span className="item-price" data-aos="zoom-in">${card.price}</span>
                            </header>
                            <p className="item-text" data-aos="zoom-in-right">{card.desc}</p>
                        </div>
                    </article>
                )
            })}
        </div>
    )
}

export default Shakes