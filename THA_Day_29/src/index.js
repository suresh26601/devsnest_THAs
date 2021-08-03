import React from 'react'
import reactDom from 'react-dom'
import {App} from './App'
import store from './store'
import {Provider} from 'react-redux'
reactDom.render(
    <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
    </React.StrictMode>,
    document.getElementById("root")
)