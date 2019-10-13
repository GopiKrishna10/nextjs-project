import React from 'react';
import './home.component.css';
import { connect } from 'react-redux';
import * as actionCreator from '../../actions/startAction';
class HomeComponent extends React.Component {
    constructor(match) {
        super(match);
        this.navigateTo = this.navigateTo.bind(this);
    }
    navigateTo() {
        this.props.history.push('/about')
    }
    // onAgeUp(){
    //     this.setState({
    //         ...this.state,
    //         age:++this.state.age
    //     })
    // }
    // onAgeDOwn(){
    //     this.setState({
    //         ...this.state,
    //         age:--this.state.age
    //     })
    // }
    render() {
        return (
            <div>
                <div >This is tha Home screen</div>
                {/* <button onClick={this.navigateTo}>Navigate to About screen</button> */}
                <div>
                    <div>Age : <span>{this.props.age}</span></div>
                    <button onClick={this.props.onAgeUp}>AgeUp</button>
                    <button onClick={this.props.onAgeDown}>AgeDown</button>
                    {this.props.loading && <div>Loading...</div>}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        age: state.age,
        loading:state.loading
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onAgeUp: () => dispatch(actionCreator.ageUp(1)),
        onAgeDown: () => dispatch(actionCreator.ageDown(1)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);