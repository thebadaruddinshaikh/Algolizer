import { modifier } from 'ember-modifier';

export default modifier(function setHeight(
  element,
  args /*, positional, named*/
) {
  element.style.height = args[0] + 'px';
  element.style.widht = args[1] + 'px';
});
