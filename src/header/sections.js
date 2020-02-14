import React from 'react';

const arrNameSections = ['Разминка', 'Воробьиные', 'Лесные птицы', 'Певчие птицы', 'Хищные птицы', 'Морские птицы']

export class Sections extends React.Component {
    render() {
      const sectionNumber = this.props.sectionNumber
      const classesSections = Array(6).fill('section-item')
      classesSections[sectionNumber] = 'section-item-active'

      const listItems = arrNameSections.map((sectionName, index) => {
        if(sectionNumber === index){
          return <li className='section-item-active' key={index} >
          {sectionName}
          </li>
        }
          return <li className={classesSections[index]} key={index} >
          {sectionName}
          </li>
      });
    return <ul className="sections">{listItems}</ul>
    }
  }