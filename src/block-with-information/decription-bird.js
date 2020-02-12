import React from 'react';

export class DecriptionBird extends React.Component {
    render() {
      const description = this.props.description;
      return <p className="decription">
        {description}
      </p>
    }
  }