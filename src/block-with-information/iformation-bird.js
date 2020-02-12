import React from 'react';
import {Photo} from '../components/bird-photo';
import {Name} from '../components/bird-name';
import {Audio} from '../components/bird-audio';
import {DecriptionBird} from './decription-bird';

export class InformationBird extends React.Component {
    render() {
      const objListBird = this.props.birdsData;
      const choiseBirdId = +(this.props.choise);
      const findIndexObjById = objListBird.findIndex((element) => (element.id === choiseBirdId))
      const currentBirdObj = objListBird[findIndexObjById];

      if (currentBirdObj) {    
      return <div className="information-block">
          <div className="display-flex">
          
            <Photo image={currentBirdObj.image}/>  
              <ul className="name-text-ul">
                <li className="name-text-item"><Name name={currentBirdObj.name}/></li>  
                <li className="name-text-item species">{currentBirdObj.species}</li>  
                <li className="name-text-item"><Audio audio={currentBirdObj.audio}/></li>
              </ul>
          </div> 
          <DecriptionBird description={currentBirdObj.description}/> 
      </div>
    } 
    if (!currentBirdObj) {  
         return <div className="information-block">
          <p>
            <span className="task-description">Послушайте плеер.</span>
            <span className="task-description">Выберите птицу из списка.</span>
          </p>
        </div>
    }
  }
  }