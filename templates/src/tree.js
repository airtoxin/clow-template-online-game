import Baobab from 'baobab';

export default new Baobab({
  game: {
    started: false,
  },
  rooms: {},
}, {
  autoCommit: false,
  asynchronous: true,
});
