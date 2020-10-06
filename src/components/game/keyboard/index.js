/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/button-has-type */
/* eslint-disable linebreak-style */
import React from 'react';
import './style.css';

const Keyboard = ({ rememberStep }) => (
  <div className="container">
    <div
      style={{
        display: 'flex',
        paddingTop: 15,
        flexWrap: 'wrap',
        flexDirection: 'column',
      }}
    >
      <div className="arrowTopBottom">
        <img
          onClick={() => rememberStep({ keyCode: 38 })}
          src="/img/arrows/up.png"
          alt="back"
          className="arrowImg"
        />
      </div>
      <div className="blockArrowLeftRight">
        <div className="arrowLeftRight">
          {' '}
          <img
            onClick={() => rememberStep({ keyCode: 37 })}
            src="/img/arrows/left.png"
            alt="back"
            className="arrowImg"
          />
        </div>
        <div className="arrowLeftRight">
          {' '}
          <img
            onClick={() => rememberStep({ keyCode: 39 })}
            src="/img/arrows/right.png"
            alt="back"
            className="arrowImg"
          />
        </div>
      </div>
      <div className="arrowTopBottom">
        {' '}
        <img
          onClick={() => rememberStep({ keyCode: 40 })}
          src="/img/arrows/down.png"
          alt="back"
          className="arrowImg"
        />
        {' '}
      </div>
    </div>
  </div>
);

export default Keyboard;
