import React, {Component, Button} from 'react';
import './App.css';

class Buttons extends Component {

    constructor(props) {
        super(props);
        this.test = this.test.bind(this);
        this.buttonLabel = this.props.buttonLabel;
        this.NumericalOrNot = this.NumericalOrNot.bind(this);
    };

    static defaultProps = {
        numerical: false
    };

    test() {
        this.props.onClick(this.buttonLabel);
    }

    NumericalOrNot() {
        const numerical = this.props.numerical;
        let numericalStyle = {
            padding: '0.5rem',
            width: '11rem',
            height: '5rem',
            margin: '0.5rem',
            background: 'transparent',
            color: 'white',
            border: '2px solid white'
        };
        let nonNumericalStyle = {
            padding: '1rem',
            width: '11rem',
            height: '5rem',
            margin: '0.5rem',
            background: 'orange',
            color: 'white',
            border: '2px solid white'
        };
        if (numerical) {
            return (<button style={numericalStyle}
                            onClick={this.test}
                            id={this.buttonLabel}>{this.buttonLabel}</button>)
        } else {
            return (<button style={nonNumericalStyle} onClick={this.test}
                            id={this.buttonLabel}>{this.buttonLabel}</button>)
        }
    }

    render() {

        return this.NumericalOrNot();
    }
}

export default Buttons;