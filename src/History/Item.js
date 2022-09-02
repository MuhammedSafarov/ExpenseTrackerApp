import React from 'react'
import './history.css'

const Item = ({t,onDeleteHandler}) => {

  const className = `${t.amount < 0 ? "minus" : "plus"}`
    return (
        <li key={t.id} className={className}>
          {t.name} <span>{t.amount}$</span>
          <button onClick={()=>onDeleteHandler(t.id)} className="delete-btn">x</button>
        </li>
    )
}

export default Item


