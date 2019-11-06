import React from 'react'
import './GameMode.css'
import { connect } from "react-redux";
import { setGameMode } from "../redux/actions"

class GameMode extends React.Component {
  render() {
    const { setGameMode } = this.props
    return (
      <section className="game-mode">
        <h1>Select difficulty:</h1>
        <div>
          <button onClick={() => setGameMode('easy')}>Easy</button>
          <button onClick={() => setGameMode('hard')}>Hard</button>
        </div>
      </section>
    )
  }
}


export default connect(
  null,
  { setGameMode }
)(GameMode);