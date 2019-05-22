import Heading from './components/heading/heading';
import Image from './components/image/add-image';
import _ from 'lodash';

const heading = new Heading();
const image = new Image();

heading.render(_.upperFirst('image'));
image.render();