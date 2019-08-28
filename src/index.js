import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import App from './Components/App'
import reducers from './reducers';
import { create } from 'domain';


ReactDom.render(<Provider store={createStore(reducers)}> <App /></Provider>,document.getElementById('root'));


