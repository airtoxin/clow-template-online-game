import Baobab from 'baobab';

export default new Baobab({
  game: {
    started: false,
  }
}, {
  autoCommit: false,
  asynchronous: true,
});
