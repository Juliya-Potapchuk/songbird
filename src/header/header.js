import React from 'react';

const LogoScore = () => (
    <div className="top-panel">
        <div className="logo"></div>
        <p className="score">Score: <span className="score-span"></span></p>
    </div>
  )
  
class Sections extends React.Component {
    render() {
        return <ul className="sections">
            <li className="sections1 section-item section-item-active">Разминка</li>
            <li className="sections2 section-item">Воробьиные</li>
            <li className="sections3 section-item">Лесные птицы</li>
            <li className="sections4 section-item">Певчие птицы</li>
            <li className="sections5 section-item">Хищные птицы</li>
            <li className="sections6 section-item">Морские птицы</li> 
        </ul>
    }
  }

export class Header extends React.Component {
    render() {
      return <div className="header">
        <LogoScore />  
        <Sections /> 
      </div>
    }
  }