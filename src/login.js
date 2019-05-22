import Button from './components/button/button';
import Header from './components/heading/heading';
import _ from 'lodash';

const header = new Header();
const button = new Button();

header.render(_.upperFirst('Home'));
button.render();

if (process.env.NODE_ENV === 'production') {
	console.log('production');
} else {
	console.log('dev mode');
}
