import './add-image.css';
import sean from './sean.jpg';

class Image {
	render() {
		const img = document.createElement('img');
		img.classList.add('image');
		img.alt = 'Sean';
		img.src = sean;

		const body = document.querySelector('body');
		body.appendChild(img);
	}
};

export default Image;