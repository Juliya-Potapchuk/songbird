import React from 'react';
import {Sections} from './sections';
import {LogoScore} from './logo-score';

export class Header extends React.Component {
    render() {
      const sectionNumber = this.props.sectionNumber
      const score = this.props.score   

      return <div className="header">
        <LogoScore score={score}/>  
        <Sections sectionNumber={sectionNumber}
         /> 
      </div>
    }
  }