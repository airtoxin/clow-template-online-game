export function start(tree) {
  tree.set(['game', 'started'], true);
  tree.commit();
}
