const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

app.use('/static', express.static(path.resolve(__dirname, '../dist')));

app.get('/login/', (req, res) => {
	const pathToHtml = path.resolve(__dirname, '../dist/login.html');
	const contentFromHtml = fs.readFileSync(pathToHtml, 'utf-8');
	res.send(contentFromHtml);
});

app.get('/image.html/', (req, res) => {
	const pathToHtml = path.resolve(__dirname, '../dist/image.html');
	const contentFromHtml = fs.readFileSync(pathToHtml, 'utf-8');
	res.send(contentFromHtml);
});

app.listen(3000, () => {
	console.log('running...');
});