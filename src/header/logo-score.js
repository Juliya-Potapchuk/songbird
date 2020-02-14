import React from 'react';

export class LogoScore extends React.Component {
    render() {
      const score = this.props.score;
  
      return (
        <div className="top-panel">
            <div className="logo"></div>
    <p className="score">Score: <span className="score-span">{score}</span></p>
        </div>)
    }
}