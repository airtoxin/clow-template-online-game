import React from 'react';
import firebase from 'firebase';
import { render } from 'react-dom';
import { root } from 'baobab-react/higher-order';
import tree from './tree';
import ErrorView from './views/ErrorView';
import App from './views/pages/App';

const firebaseApp = firebase.initializeApp({
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  databaseURL: process.env.databaseURL,
  storageBucket: process.env.storageBucket,
});
const db = firebase.database();

const sync = (refPath, selector, defaultValue) => {
  const ref = db.ref(refPath);
  const cursor = tree.select(selector);

  ref.on('value', snapshot => {
    cursor.set(snapshot.val() || defaultValue);
    tree.commit();
  });
  cursor.on('update', updatee => ref.set(updatee.target.get() || defaultValue));
};

sync('rooms', ['rooms'], {});

const Rooted = root(tree, App);

render(<ErrorView><Rooted /></ErrorView>, document.getElementById('app'));
