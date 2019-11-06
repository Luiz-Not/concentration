import React from 'react'
import CardList from './card/CardList'
import GameMode from './GameMode'
import './Container.css'
import { connect } from "react-redux";

class Container extends React.Component {
  render() {
    const { gameMode } = this.props

    return (
      <div className="container">
        <div className="row">
          {!gameMode ? (
            <GameMode />
          ) : (
            <CardList />
          )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  gameMode: state.store.gameMode
})

export default connect(mapStateToProps)(Container);
