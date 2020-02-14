import React from 'react';

export class NextLevel extends React.Component {
    render() {
      const hasCorrectChoise = this.props.hasCorrectChoise;
      const isEndGame = this.props.isEndGame;
      const score = this.props.score

      if(isEndGame === 'false'){
        if (hasCorrectChoise === 'true') {
          return <button className="btn-active" onClick={() => this.props.onClick()}>
          Next level  
        </button>     
        }
        if (hasCorrectChoise === 'false') {
          return <button className="btn-next-level">
          Next level  
        </button>     
        }
      }

      if((isEndGame === 'true') && (score < 30)){
        return <button className="btn-active" onClick={() => this.props.onClick()}>
          Попробовать еще раз! 
        </button>  
      }
      if((isEndGame === 'true') && (score === 30)){
        return <div>
            <div className="photo-man"></div>
            <p className="congratulation-text3">Игра окончена</p>
          </div>
      }
  }
}