import React from 'react';
import './home.component.css';
export class HomeComponent extends React.Component {
    constructor(match) {
        super(match);
        this.navigateTo = this.navigateTo.bind(this)
    }
    navigateTo(){
        this.props.history.push('/about')
    }
    render() {
        return (
            <div>
                <div >This is tha Home screen</div>
                <button onClick={this.navigateTo}>Navigate to About screen</button>
            </div>
        )
    }
}
