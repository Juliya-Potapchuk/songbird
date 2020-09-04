import React from "react";
import ReactDOM from "react-dom";
import { Header } from "./header/header";
import { Task } from "./block-with-task/task";
import { Options } from "./block-options/options";
import { InformationBird } from "./block-with-information/information-bird";
import { NextLevel } from "./button-next-level/btn-next-level";
import { birdsData } from "./components/birds-data";

import "./index.css";
import "./media.css";

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const firstCorrecChoise = getRandomInt(1, 6);

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sectionNumber: 0,
      choise: "",
      correctChoise: firstCorrecChoise,
      score: 0,
      counter: 6,
      hasCorrectChoise: "false",
      arrAnswers: Array(7).fill("options-item"),
      isEndGame: "false",
    };
  }

  handleClick(e) {
    const clickOptions = e.target.getAttribute("my_key");
    this.setState({ choise: clickOptions });
    const newArrAnswers = this.state.arrAnswers;
    const counterTry = this.state.counter;
    if (counterTry > 0 && this.state.hasCorrectChoise === "false") {
      this.setState({ counter: counterTry - 1 });
    }
    if (counterTry < 0 && this.state.hasCorrectChoise === "false") {
      this.setState({ counter: 0 });
    }
    if (this.state.hasCorrectChoise === "true") {
      return;
    }

    if (+clickOptions === +this.state.correctChoise) {
      newArrAnswers[clickOptions] = "сorrect-choise";
      this.setState({ arrAnswers: newArrAnswers });
      this.setState({ hasCorrectChoise: "true" });
    } else {
      newArrAnswers[clickOptions] = "incorrect-choise";
      this.setState({ arrAnswers: newArrAnswers });
    }
  }

  NextLevelClick() {
    const randomCorrecrChoise = getRandomInt(1, 6);
    const currentSectionNumber = this.state.sectionNumber;
    const nextSectionNumber = currentSectionNumber + 1;

    const counter = this.state.counter;
    const score = this.state.score;
    this.setState({ score: score + counter });
    this.setState({ counter: 6 });

    this.setState({ sectionNumber: nextSectionNumber });
    this.setState({ choise: "" });
    this.setState({ correctChoise: randomCorrecrChoise });
    this.setState({ hasCorrectChoise: "false" });
    this.setState({ arrAnswers: Array(7).fill("options-item") });

    if (this.state.isEndGame === "true") {
      this.setState({ isEndGame: "false" });
      this.setState({ sectionNumber: 0 });
      this.setState({ score: 0 });
    }

    if (currentSectionNumber === 5 && this.state.isEndGame === "false") {
      this.setState({ isEndGame: "true" });
    }
  }

  render() {
    if (this.state.isEndGame === "false") {
      return (
        <div className="wrapper">
          <Header
            score={this.state.score}
            sectionNumber={this.state.sectionNumber}
          />
          <Task
            birdsData={birdsData[this.state.sectionNumber]}
            choise={this.state.choise}
            hasCorrectChoise={this.state.hasCorrectChoise}
            correctChoise={this.state.correctChoise}
          />
          <div className="bottom-wrapper">
            <Options
              arrAnswers={this.state.arrAnswers}
              birdsData={birdsData[this.state.sectionNumber]}
              onClick={(e) => this.handleClick(e)}
            />
            <InformationBird
              birdsData={birdsData[this.state.sectionNumber]}
              choise={this.state.choise}
            />
          </div>
          <NextLevel
            hasCorrectChoise={this.state.hasCorrectChoise}
            isEndGame={this.state.isEndGame}
            onClick={() => this.NextLevelClick()}
          />
        </div>
      );
    }
    if (this.state.isEndGame === "true") {
      return (
        <div className="wrapper">
          <Header
            sectionNumber={this.state.sectionNumber}
            score={this.state.score}
          />
          <p className="congratulation-block">
            <span className="congratulation-text1">Поздравляем!</span>
            <span className="congratulation-text2">
              Вы прошли викторину и набрали {this.state.score} из 30 возможных
              баллов
            </span>
          </p>
          <NextLevel
            score={this.state.score}
            isEndGame={this.state.isEndGame}
            hasCorrectChoise={this.state.hasCorrectChoise}
            onClick={() => this.NextLevelClick()}
          />
        </div>
      );
    }
  }
}

ReactDOM.render(<Page />, document.getElementById("root"));
