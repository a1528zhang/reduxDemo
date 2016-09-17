import React, { Component } from 'react'
import { render } from 'react-dom'
import { connect } from 'react-redux'
import TestChild from './testChild'
import {testAction} from  '../action/action'

class Test extends Component {
    render() {
        const { store} = this.props
        return(
            <div>
                <TestChild act={(text)=>store.dispatch(testAction(text))} store={store}/>
            </div>
        )
    }
}

export default Test;