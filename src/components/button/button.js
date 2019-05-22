import './button.css';

class Button {
	
	render() {
		const btn = document.createElement('button');
		btn.innerHTML = 'Click me';
		btn.classList.add('button-style');
		const body = document.querySelector('body');

		btn.onclick = () => {
			window.location = './image.html';
			// const p = document.createElement('p');
			// p.innerHTML = 'Well done, you clicked a button';
			// p.classList.add('button-response-text');
			// body.appendChild(p);
		}
		body.appendChild(btn);
	}
};

export default Button;