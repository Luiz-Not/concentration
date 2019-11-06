import React from 'react'
import { connect } from "react-redux";
import './Card.css'
import Suits from './Suits'
import { flipCard } from "../../redux/actions";

class Card extends React.Component {
  render() {
    const { card, index, flipCard } = this.props
    const cardClass = card.flipped ? 'card flipped' : 'card'

    return (
      <div className={cardClass} onClick={() => flipCard(index)}>
        <div className="card-back"></div>
        <div className="card-front">
          <div className={`card-name ${card.color}`}>{card.name}</div>
          <div className="card-suit"><Suits suit={card.suit} /></div>
          <div className={`card-name ${card.color}`}>{card.name}</div>
        </div>
      </div>
    )
  }
}

export default connect(
  null,
  { flipCard }
)(Card);