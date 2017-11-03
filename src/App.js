import React, {Component} from 'react';
import './App.css';
import Button from './Buttons';
import {Row, Col, CardPanel, Card, Navbar} from 'react-materialize'

class App extends Component {

    constructor(props) {
        super(props);
        this.showLabel = this.showLabel.bind(this);
        this.add = this.add.bind(this);
        this.substract = this.substract.bind(this);
        this.calculate = this.calculate.bind(this);
        this.clear = this.clear.bind(this);
        this.changeSign = this.changeSign.bind(this);
        this.divide = this.divide.bind(this);
        this.multiply = this.multiply.bind(this);
        this.state = {
            currentValue: '',
            previousValue: 0,
            operation: ''
        }

    }

    showLabel(label) {
        let newString = this.state.currentValue.concat(label);
        this.setState({currentValue: newString});
    }

    calculate() {
        let currentNumber = parseFloat(this.state.currentValue);
        if (this.state.currentValue !== '') {
            if (this.state.operation.length === 0) {
                this.setState({
                    previousValue: currentNumber,
                    currentValue: ''
                })
            } else if (this.state.operation === '+') {
                let total = currentNumber + this.state.previousValue;
                this.setState({
                    previousValue: total,
                    currentValue: ''
                })
            }
            else if (this.state.operation === '-') {
                let total = this.state.previousValue - currentNumber;
                this.setState({
                    previousValue: total,
                    currentValue: ''
                })
            }
            else if (this.state.operation === '÷') {
                let total = this.state.previousValue / currentNumber;
                this.setState({
                    previousValue: total.toFixed(2),
                    currentValue: ''
                })
            }
            else if (this.state.operation === 'X') {
                let total = this.state.previousValue * currentNumber;
                this.setState({
                    previousValue: total.toFixed(2),
                    currentValue: ''
                })
            }
        }
    }


    add() {
        this.calculate();
        this.setState({
            operation: '+'
        })
    }

    substract() {
        this.calculate();
        this.setState({
            operation: '-'
        })
    }

    clear() {
        this.setState({
            currentValue: '',
            previousValue: 0,
            operation: ''
        })
    }

    changeSign() {
        let current = this.state.currentValue;
        if (current > 0) {
            this.setState({
                currentValue: -current
            })
        } else if (current < 0) {
            this.setState({
                currentValue: Math.abs(current)
            })
        }
    }

    divide() {
        this.calculate();
        this.setState({
            operation: '÷'
        })
    }

    multiply() {
        this.calculate();
        this.setState(({
            operation: 'X'
        }))
    }


    render() {
        let text = null;
        if (this.state.currentValue === '') {
            text = <h1><CardPanel className='grey white-text  z-depth-5 right-align'>{this.state.previousValue}</CardPanel></h1>
        } else {
            text = <h1><CardPanel className='grey white-text  z-depth-5 right-align'>{this.state.currentValue}</CardPanel></h1>
        }
        return (
            <div className="App">

                {/*Result row*/}
                <Row>
                        {text}
                </Row>

                {/*First row of buttons*/}
                <Row>
                    <Col s={3}>
                        < Button onClick={this.clear} buttonLabel='AC'/>
                    </Col>
                    <Col s={3}>
                        < Button onClick={this.changeSign} buttonLabel='+/-'/>
                    </Col>
                    <Col s={3}>
                        < Button onClick={this.divide} buttonLabel='÷'/>
                    </Col>
                    <Col s={3}>
                        < Button onClick={this.multiply} buttonLabel='x'/>
                    </Col>
                </Row>

                {/*Second row of buttons*/}
                <Row>
                    <Col s={3}>
                        < Button onClick={this.showLabel} numerical={true} buttonLabel='7'/>
                    </Col>
                    <Col s={3}>
                        < Button onClick={this.showLabel} numerical={true} buttonLabel='8'/>
                    </Col>
                    <Col s={3}>
                        < Button onClick={this.showLabel} numerical={true} buttonLabel='9'/>
                    </Col>
                    <Col s={3}>
                        < Button onClick={this.substract} buttonLabel='-'/>
                    </Col>
                </Row>

                {/*Third row of buttons*/}
                <Row>
                    <Col s={3}>
                        < Button onClick={this.showLabel} numerical={true} buttonLabel='4'/>
                    </Col>
                    <Col s={3}>
                        < Button onClick={this.showLabel} numerical={true} buttonLabel='5'/>
                    </Col>
                    <Col s={3}>
                        < Button onClick={this.showLabel} numerical={true} buttonLabel='6'/>
                    </Col>
                    <Col s={3}>
                        < Button onClick={this.add}  buttonLabel='+'/>
                    </Col>
                </Row>

                {/*Fourth row of buttons*/}
                <Row>
                    <Col s={3}>
                        < Button onClick={this.showLabel} numerical={true} buttonLabel='1'/>
                    </Col>
                    <Col s={3}>
                        < Button onClick={this.showLabel} numerical={true} buttonLabel='2'/>
                    </Col>
                    <Col s={3}>
                        < Button onClick={this.showLabel} numerical={true} buttonLabel='3'/>
                    </Col>
                    <Col s={3}>
                        < Button onClick={this.calculate} buttonLabel='='/>
                    </Col>
                </Row>

                {/*Fifth row of buttons*/}
                <Row>
                    <Col s={6}>
                        < Button onClick={this.showLabel} numerical={true} buttonLabel='0'/>
                    </Col>
                    <Col s={6}>
                        < Button onClick={this.showLabel} numerical={true} buttonLabel='.'/>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default App;

