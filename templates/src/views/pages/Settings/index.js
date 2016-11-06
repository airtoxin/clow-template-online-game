import React from 'react';
import { branch } from 'baobab-react/higher-order';
import Button from '../../atoms/Button';

export default function Settings({ dispatch }) {
  return <Button onClick={() => dispatch(gameActions.start)}>start</Button>;
}
