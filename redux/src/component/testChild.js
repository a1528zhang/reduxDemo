import React, { Component } from 'react'
import { render } from 'react-dom'

class TestChild extends Component {
    click(){
        let text =this.refs.input.value;
        this.props.act(text);
        let result = this.props.store.getState();
        this.refs.p.textContent = result.data ;
    }
    render() {
        return(
            <div>
                <input type='text' ref= "input"/>
                <button onClick={this.click.bind(this)}>点我！</button>
                <br/>
                <p>state中data的值为：</p>
                <p ref="p"></p>
            </div>
        )
    }
}

export default TestChild;