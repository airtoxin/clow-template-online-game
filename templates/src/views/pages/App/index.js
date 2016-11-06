import React from 'react';
import { branch } from 'baobab-react/higher-order';
import Header from '../../molecules/Header';
import Settings from '../Settings';
import styles from './styles.css';

function App({ gameStarted }) {
  const content = gameStarted ? (
    <div>
      game started!
    </div>
  ) : (
    <Settings />
  );

  return (
    <div>
      <Header />
      <div className={styles.content}>{content}</div>
    </div>
  );
}

export default branch({
  gameStarted: ['game', 'started'],
}, App);
