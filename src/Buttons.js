import React, {Component} from 'react';
import './App.css';
import {Row, Col, CardPanel} from 'react-materialize'


class Button extends Component {

    constructor(props) {
        super(props);
        this.test = this.test.bind(this);
        this.buttonLabel = this.props.buttonLabel;
        this.props = {numerical: false};
    };

    test() {
        this.props.onClick(this.buttonLabel);
    }

    render() {
        const numerical = this.props.numerical;
        let button = null;
        if (numerical) {
            button = <CardPanel className=' hoverable grey lighten-1 ' onClick={this.test}
                                id={this.buttonLabel}>{this.buttonLabel}</CardPanel>;
        } else {
            button = <CardPanel className=' hoverable orange' onClick={this.test}
                                id={this.buttonLabel}>{this.buttonLabel}</CardPanel>;
        }
        return <h1 numerical={numerical}>{button} </h1>;
    }
}

export default Button;