import React from 'react';
import {Photo} from '../components/bird-photo';
import {Name} from '../components/bird-name';
import {Audio} from '../components/bird-audio';

export class Task extends React.Component {
    render() {
      return <div className="task-block">
            <Photo />  
              <ul className="name-text-ul">
                <li className="name-text-item"><Name /></li>  
                <li className="name-text-item"><Audio /></li>
              </ul>  
      </div>
    }
  }