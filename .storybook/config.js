import { configure } from '@kadira/storybook';
import '../app/global-styles';

const req = require.context('../stories', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
