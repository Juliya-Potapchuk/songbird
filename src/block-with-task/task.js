import React from 'react';
import {Photo} from '../components/bird-photo';
import {Name} from '../components/bird-name';
import {Audio} from '../components/bird-audio';

export class Task extends React.Component {
    render() {
      const objListBird = this.props.birdsData; 
      const correctChoise = this.props.correctChoise
      const findIndexObjById = objListBird.findIndex((element) => (element.id === correctChoise))
      const currentBirdObj = objListBird[findIndexObjById];
      const hasCorrectChoise = this.props.hasCorrectChoise;

      if (hasCorrectChoise === 'true') {   
      return <div className="task-block">
            <Photo image={currentBirdObj.image}/>  
              <ul className="name-text-ul">
                <li className="name-text-item"><Name name={currentBirdObj.name}/></li>  
                <li className="name-text-item"><Audio audio={currentBirdObj.audio}/></li>
              </ul>  
      </div>
      } 
      if (hasCorrectChoise === 'false') {
        return <div className="task-block">
        <Photo image={'https://birds-quiz.netlify.com/static/media/bird.06a46938.jpg'}/>  
          <ul className="name-text-ul">
            <li className="name-text-item">******</li>  
            <li className="name-text-item"><Audio audio={currentBirdObj.audio}/></li>
          </ul>  
        </div>
        }
    }
  }