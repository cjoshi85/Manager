import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import RouterComponent from './Router';
import { config } from './config';

class App extends Component {

    componentWillMount() {
        firebase.initializeApp(config);
    }
    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <RouterComponent />
            </Provider>
        );
    }
}
export default App;
