import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import ReactDom from 'react-dom';
import {Provider} from 'react-redux'
import { Store } from './store/store';
import Root from './Root';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={Store}>
      <Root />
    </Provider>
  </React.StrictMode>,
)



