/* eslint-disable react/no-string-refs */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import VariantsList from '../VariantChoose/assets/variantsList';
import Keyboard from './keyboard';

import audioStore, {
  AUDIO_DOWN,
  AUDIO_LEFT,
  AUDIO_RIGHT,
  AUDIO_UP,
  AUDIO_ERROR,
} from '../../audioStore';
import './style.css';

const KEY_DOWN = 40;
const KEY_UP = 38;
const KEY_RIGHT = 39;
const KEY_LEFT = 37;
const ERROR_STRING = 'mistake';


const getWidth = () => Math.min(1140, window.innerWidth);

class Game extends Component {
  constructor(props) {
    super(props);
    this.myCanvas = React.createRef();
    // eslint-disable-next-line react/destructuring-assignment
    this.objForGame = VariantsList[this.props.match.params.level].find(
      (item) => item.id == this.props.match.params.id,
    );
    this.currentX = 0;
    this.currentY = 0;
    this.widthToHeightDifference = this.objForGame.fieldSize[0] - this.objForGame.fieldSize[1];
    this.widthToHeightRatio = this.findRatio(this.widthToHeightDifference);

    if (this.objForGame != null) {
      this.fiendSize = this.objForGame.fieldSize;

      this.stepColor = this.objForGame.colorLine;
      this.levelTitle = this.objForGame.title;
    }
    this.arrSteps = [];
    this.currentNumberStep = 0;
    this.isGameStarted = false;

    this.state = {
      deviceWidth: getWidth(),
      playersErrorsCount: 0,
      isGameOnplaying: false,
    };
  }

  get ceilSize() {
    return (this.state.deviceWidth
      - (this.state.deviceWidth / 100) * this.widthToHeightRatio)
      / this.fiendSize[0];
  }

  get canvasWidth() {
    return this.ceilSize * this.fiendSize[0];
  }

  get canvasHeight() {
    return this.ceilSize * this.fiendSize[1];
  }


  componentDidMount() {
    // eslint-disable-next-line no-unused-expressions
    !isMobile && document.addEventListener('keydown', this.rememberStep);

    if (this.objForGame != null) {
      this.initCanvas();
      this.currentX = this.objForGame.starterCoordinate[0] * this.ceilSize;
      this.currentY = this.objForGame.starterCoordinate[1] * this.ceilSize;
      this.arrSteps = this.objForGame.gameSteps;
    }

    window.addEventListener('resize', this.setWidth);
  }

  setWidth = () => {
    this.setState({
      deviceWidth: getWidth()
    });
    this.initCanvas();
  };

  componentWillUnmount() {
    document.removeEventListener('keydown', this.rememberStep);
  }

  // eslint-disable-next-line consistent-return
  findRatio = (num) => {
    if (num <= 6 && num >= 5) {
      this.widthToHeightRatio = 9;
      return this.widthToHeightRatio;
    }
    if (num === 4) {
      this.widthToHeightRatio = 18;
      return this.widthToHeightRatio;
    }
    if (num <= 3 && num >= 0) {
      this.widthToHeightRatio = 30;
      return this.widthToHeightRatio;
    }
    if (num <= -1 && num >= -2) {
      this.widthToHeightRatio = 39;
      return this.widthToHeightRatio;
    }
    if (num <= -3 && num >= -6) {
      this.widthToHeightRatio = 51;
      return this.widthToHeightRatio;
    }
    if (num === -7) {
      this.widthToHeightRatio = 57;
      return this.widthToHeightRatio;
    }
  };

  drawStep = (nextX, nextY) => {
    const ctx = this.refs.myCanvas.getContext('2d');
    ctx.moveTo(this.currentX, this.currentY);
    this.currentY = nextY;
    this.currentX = nextX;
    ctx.lineTo(nextX, nextY);
    ctx.stroke();
  };

  rememberStep = (e) => {
    if (this.isGameStarted) {
      if (e.keyCode !== this.arrSteps[this.currentNumberStep]) {
        this.playStep(ERROR_STRING);
        this.isGameStarted = false;
        this.setState({
          playersErrorsCount: this.state.playersErrorsCount + 1,
        });
        setTimeout(() => {
          this.startGame();
        }, 250);
        return null;
      }
      // eslint-disable-next-line no-plusplus
      this.currentNumberStep++;

      const ctx = this.refs.myCanvas.getContext('2d');
      ctx.beginPath();
      ctx.strokeStyle = this.stepColor;
      ctx.lineWidth = 5;
      ctx.lineCap = 'round';
      ctx.stroke();

      switch (e.keyCode) {
        case KEY_DOWN:
          this.drawStep(this.currentX, this.currentY + this.ceilSize);
          break;
        case KEY_UP:
          this.drawStep(this.currentX, this.currentY - this.ceilSize);
          break;
        case KEY_LEFT:
          this.drawStep(this.currentX - this.ceilSize, this.currentY);
          break;
        case KEY_RIGHT:
          this.drawStep(this.currentX + this.ceilSize, this.currentY);
          break;
        default:
          break;
      }

      if (this.currentNumberStep >= this.arrSteps.length) {
        this.playStep('triumph');
        this.setState({ isGameEnd: true });
        this.setState({ isGameOnplaying: false });
        this.isGameStarted = false;

        this.arrSteps = [];
        this.currentNumberStep = 0;
        this.isGameStarted = false;
        this.currentX = this.objForGame.starterCoordinate[0] * this.ceilSize;
        this.currentY = this.objForGame.starterCoordinate[1] * this.ceilSize;
        this.arrSteps = this.objForGame.gameSteps;
      } else {
        this.startGame();
      }
    }
  };

  playStep = (code) => {
    const keyAudioMap = {
      [KEY_RIGHT]: AUDIO_RIGHT,
      [KEY_LEFT]: AUDIO_LEFT,
      [KEY_DOWN]: AUDIO_DOWN,
      [KEY_UP]: AUDIO_UP,
      [ERROR_STRING]: AUDIO_ERROR,
      'triumph':'triumph',
    };

    const audioKey = keyAudioMap[code];

    audioStore.play(audioKey);
  };

  startGame = () => {
    this.isGameStarted = true;
    this.playStep(this.arrSteps[this.currentNumberStep]);
  };

  initCanvas() {
    // eslint-disable-next-line react/no-string-refs
    const ctx = this.refs.myCanvas.getContext('2d');
    ctx.beginPath();
    ctx.stroke();
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 1;
    for (let x = 0.5; x <= this.canvasWidth + 1; x += this.ceilSize) {
      ctx.moveTo(x, 0);
      ctx.lineTo(x, this.canvasHeight);
      ctx.stroke();
    }

    for (let y = 0.5; y <= this.canvasHeight + 1; y += this.ceilSize) {
      ctx.moveTo(0, y);
      ctx.lineTo(this.canvasWidth, y);
      ctx.stroke();
    }
  }

  clearCanvas() {
    const ctx = this.refs.myCanvas.getContext('2d');
    ctx.beginPath();
    ctx.stroke();
    ctx.strokeStyle = '#FFFFFF';
    ctx.lineWidth = this.ceilSize;
    for (let x = 0.5; x <= this.canvasWidth + 1; x += this.ceilSize) {
      ctx.moveTo(x, 0);
      ctx.lineTo(x, this.canvasHeight);
      ctx.stroke();
    }

    for (let y = 0.5; y <= this.canvasHeight + 1; y += this.ceilSize) {
      ctx.moveTo(0, y);
      ctx.lineTo(this.canvasWidth, y);
      ctx.stroke();
    }
  }

  render() {
    return (
      <>
        <div className="game-menu">
          <Link to={`/choose-variant/${this.props.match.params.level}`}>
            <img
              src="/img/buttons/back.png"
              alt="play"
              className="home-button"
            />
          </Link>
          {!this.state.isGameOnplaying && (
            <img
              onClick={() => {
                this.clearCanvas();
                this.initCanvas();
                this.setState({ playersErrorsCount: 0, isGameEnd: false });
                this.setState({ isGameOnplaying: true });
                this.startGame();
              }}
              src="/img/buttons/play.png"
              alt="play"
              className="play-button"
            />
          )}

          <Link to="/">
            <img
              src="/img/buttons/home.png"
              alt="play"
              className="home-button"
            />
          </Link>
        </div>

        <div className="game-field">
          <canvas
            ref="myCanvas"
            width={this.canvasWidth + 3}
            height={this.canvasHeight + 3}
            className="game-canvas"
          />
        </div>

        {isMobile && (
          <Keyboard rememberStep={this.rememberStep} stepSize={this.ceilSize} />
        )}
        {/* {this.state.isGameEnd && (
          <p style={{ margin: 'auto' }}>
            Игра окончена вы допустили
            {this.state.playersErrorsCount}
            {' '}
            ошибок.
          </p>
        )} */}
      </>
    );
  }
}

export default Game;
