import React from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import audioStore from './audioStore';

audioStore.initAudio();
const App = ({ children }) => <Container>{children}</Container>;

export default App;
