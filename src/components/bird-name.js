import React from 'react';

export class Name extends React.Component {
    render() {
      const name = this.props.name;

      return <p className="name-bird">{name}</p>
    }
  }

