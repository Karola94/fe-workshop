import initAboutMe from './about-me/index';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

initAboutMe();

ReactDOM.render(
    <h1>Hello world!</h1>,
    document.getElementById('repos')
);