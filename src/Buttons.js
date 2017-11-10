import React, {Component} from 'react';
import './App.css';

class Button extends Component {

    constructor(props) {
        super(props);
        this.sendPropToParent = this.sendPropToParent.bind(this);
        this.buttonLabel = this.props.buttonLabel;
        this.NumericalOrNot = this.NumericalOrNot.bind(this);
    };

    static defaultProps = {
        numerical: false
    };

    sendPropToParent() {
        this.props.onClick(this.buttonLabel);
    }

    NumericalOrNot() {
        const numerical = this.props.numerical;
        let numericalStyle = {
            padding: '2rem',
            width: '100%',
            height: '5rem',
            background: 'transparent',
            color: 'white',
            border: '1px solid white',
            borderRadius: '0px'
        };
        let nonNumericalStyle = {
            padding: '2rem',
            width: '100%',
            height: '5rem',
            background: 'orange',
            color: 'white',
            border: '1px solid white',
            borderRadius: '0px'
        };
        if (numerical) {
            return (<button style={numericalStyle}
                            onClick={this.sendPropToParent}
                            id={this.buttonLabel}>{this.buttonLabel}</button>)
        } else {
            return (<button style={nonNumericalStyle} onClick={this.sendPropToParent}
                            id={this.buttonLabel}>{this.buttonLabel}</button>)
        }
    }

    render() {

        return this.NumericalOrNot();
    }
}

export default Button;