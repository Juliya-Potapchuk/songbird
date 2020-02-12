import React from 'react';

export class Photo extends React.Component {
    render() {
      const image = this.props.image;

      return <img alt="bird-img" src={image} className="photo-bird"/>
    }
  }
