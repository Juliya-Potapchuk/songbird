import React from 'react';
import ReactDOM from 'react-dom';
import {Header} from './header/header';
import {Task} from './block-with-task/task';
import {Options} from './block-options/options';
import {InformationBird} from './block-with-information/iformation-bird';
import {NextLevel} from './button-next-level/btn-next-level';
import {birdsData} from './components/birds-data';

import './index.css';
import './media.css';

  class Page extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        sectionNumber: 0,
        choise: '',
      };
    }

    handleClick(e) {
      const clickOptions = e.target.getAttribute('my_key');
      this.setState({choise: clickOptions});
    }

    render() {
      return <div className="wrapper">
        <Header />  
        <Task /> 
        <div className="bottom-wrapper">
        <Options 
        birdsData={birdsData[this.state.sectionNumber]}
         onClick={(e) => this.handleClick(e)}
         /> 
        <InformationBird birdsData={birdsData[this.state.sectionNumber]} choise={this.state.choise}/> 
        </div>
        <NextLevel />
      </div>
    }

  }

  ReactDOM.render(
    <Page />,
    document.getElementById('root')
  ) 




  // 0000
  // const sectionNumber = 0;

  // class Page extends React.Component {
 
  //   render() {
  //     return <div className="wrapper">
  //       <Header />  
  //       <Task /> 
  //       <div className="bottom-wrapper">
  //       <Options birdsData={birdsData[sectionNumber]}/> 
  //       <InformationBird /> 
  //       </div>
  //       <NextLevel />
  //     </div>
  //   }

  // }

  // ReactDOM.render(
  //   <Page />,
  //   document.getElementById('root')
  // ) 
  // 0000
// ReactDOM.render(
//     <div className="header">
//         <div className="logo"></div>
//         <p className="score">Score: <span className="score-span"></span></p>
//     </div>,
//     document.getElementById('root')
//   ) 

//   class Page extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       squares: Array(9).fill(null),
//       xIsNext: true,
//     };
//   }

//   handleClick(i) {
//     const squares = this.state.squares.slice();
//     squares[i] = this.state.xIsNext ? 'X' : 'O';
//     this.setState({
//       squares: squares,
//       xIsNext: !this.state.xIsNext,
//     });
//   }

//   renderSquare(i) {
//     return (
//       <Square
//         value={this.state.squares[i]}
//         onClick={() => this.handleClick(i)}
//       />
//     );
//   }

//   render() {
    // const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');

//     return (
//       <ul>
//           <li>Разминка</li>
//           <li>Воробьиные</li>
//           <li>Лесные птицы</li>
//           <li>Певчие птицы</li>
//           <li>Хищные птицы</li>
//           <li>Морские птицы</li>
//         </ul>
//     );
//   }
// }