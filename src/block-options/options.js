import React from 'react';

 export class Options extends React.Component {

  render() {
  const objBird1 = this.props.birdsData;

  const listItems = objBird1.map((bird) =>
    <li 
    className="options-item"
     key={bird.id}
      my_key={bird.id}
    onClick={(e) => { this.props.onClick(e) }} 
    >
      {bird.name}
    </li>
  );
  
  return (
    <ul className="options-block" >{listItems}</ul>
  );
  }
  }
