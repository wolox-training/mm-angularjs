import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './scss/index.scss';
import registerServiceWorker from './registerServiceWorker';
import store from './redux/store';
import routes from './constants/routes';

ReactDOM.render(<Provider store={store}>{routes}</Provider>, document.getElementById('root'));
registerServiceWorker();
