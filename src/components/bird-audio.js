import React from 'react';

export class Audio extends React.Component {
    render() {
      const audio = this.props.audio;
      
      return <audio className="audio" src={audio} controls></audio>
    }
  }

