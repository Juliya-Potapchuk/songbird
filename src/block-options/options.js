import React from 'react';

 export class Options extends React.Component {
  render() {
    const birdsData = this.props.birdsData
    const arrAnswers = this.props.arrAnswers

    const listItems = birdsData.map((bird) =>
      <li className={arrAnswers[bird.id]} key={bird.id} my_key={bird.id}
        onClick={(e) => this.props.onClick(e)} >
      {bird.name}
      </li>
    );
  
    return <ul className="options-block" >{listItems}</ul>
  }
  }

  