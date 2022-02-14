import { modifier } from 'ember-modifier';

export default modifier(function dragManager(
  element,
  args /*, positional, named*/
) {
  element.addEventListener('mousedown', () => {
    args[0].startDragging();
  });

  element.addEventListener('mouseup', () => {
    args[0].stopDragging();
  });
});
