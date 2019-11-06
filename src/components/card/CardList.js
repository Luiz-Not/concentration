import React from 'react'
import Card from './Card'
import { connect } from "react-redux";

class CardList extends React.Component {
  render() {
    const { cards } = this.props

    return (
      <div className="container">
        <div className="row">
          {cards.map((card, index) => <Card key={index} index={index} card={card} handleClick={this.showCard} />)}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  cards: state.store.cards
})

export default connect(mapStateToProps)(CardList);
