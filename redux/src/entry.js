import { Router, Route, Link,hashHistory } from 'react-router'
import { createStore, applyMiddleware,compose } from 'redux'
import {Component} from 'react'
import { Provider } from 'react-redux'
import Test from './component/test'
import TestReducer from './reducers/reducer'

const store =createStore(TestReducer);

let Main = React.createClass({
    render() {
        return (
                <Test store={store}/>
        );
    }
});

ReactDOM.render(<Main />,document.getElementById('content'));
