import React, {Component} from 'react';
import './App.css';
import Button from './Buttons';
import {Row, Col, CardPanel} from 'react-materialize'

class App extends Component {

    constructor(props) {
        super(props);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.add = this.add.bind(this);
        this.substract = this.substract.bind(this);
        this.calculate = this.calculate.bind(this);
        this.clear = this.clear.bind(this);
        this.changeSign = this.changeSign.bind(this);
        this.divide = this.divide.bind(this);
        this.multiply = this.multiply.bind(this);
        this.deleteLastInput = this.deleteLastInput.bind(this);
        this.state = {
            currentValue: '',
            operation: '',
            previousValue: 0
        }

    }

    handleButtonClick(label) {
        let newString = this.state.currentValue.concat(label);
        this.setState({currentValue: newString});
    }

    deleteLastInput(label) {
        let newString = this.state.currentValue.substring(0, this.state.currentValue.length - 1);
        this.setState({currentValue: newString});
    }

    calculate() {
        let currentNumber = parseFloat(this.state.currentValue);
        let computedPreviousValue;
        if (this.state.currentValue !== '') {
            if (this.state.operation.length === 0) {
                computedPreviousValue = currentNumber;
            } else if (this.state.operation === '+') {
                let total1 = currentNumber + this.state.previousValue;
                computedPreviousValue = total1;
            }
            else if (this.state.operation === '-') {
                let total2 = this.state.previousValue - currentNumber;
                computedPreviousValue = total2;
            }
            else if (this.state.operation === '÷') {
                let total3 = this.state.previousValue / currentNumber;

                computedPreviousValue = total3.toFixed(2);

            }
            else if (this.state.operation === 'X') {
                let total4 = this.state.previousValue * currentNumber;
                computedPreviousValue = total4.toFixed(2);

            }

            this.setState({
                previousValue: computedPreviousValue,
                currentValue: ''
            })
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
        this.setState({
            currentValue: -current
        })
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
        const {currentValue, previousValue} = this.state;
        let text = <CardPanel className='grey white-text  z-depth-5 right-align'>
            <h2>{currentValue === '' ? previousValue : currentValue}</h2></CardPanel>;
        let flexing = {display: 'flex'};
        return (
            <div className="App">

                {/*Result row*/}
                <Row>
                    {text}
                    <div className='container center'>

                        {/*First row of buttons*/}

                        <Col s={12} style={flexing}>
                            < Button onClick={this.clear} buttonLabel='AC'/>
                            < Button onClick={this.changeSign} buttonLabel='+/-'/>
                            < Button onClick={this.divide} buttonLabel='÷'/>
                            < Button onClick={this.multiply} buttonLabel='x'/>
                        </Col>

                        {/*Second row of buttons*/}
                        <Col s={12} style={flexing}>
                            < Button onClick={this.handleButtonClick} numerical={true} buttonLabel='7'/>
                            < Button onClick={this.handleButtonClick} numerical={true} buttonLabel='8'/>
                            < Button onClick={this.handleButtonClick} numerical={true} buttonLabel='9'/>

                            < Button onClick={this.substract} buttonLabel='-'/>
                        </Col>

                        {/*Third row of buttons*/}

                        <Col s={12} style={flexing}>
                            < Button onClick={this.handleButtonClick} numerical={true} buttonLabel='4'/>
                            < Button onClick={this.handleButtonClick} numerical={true} buttonLabel='5'/>
                            < Button onClick={this.handleButtonClick} numerical={true} buttonLabel='6'/>
                            < Button onClick={this.add} buttonLabel='+'/>
                        </Col>

                        {/*Fourth row of buttons*/}

                        <Col s={12} style={flexing}>
                            < Button onClick={this.handleButtonClick} numerical={true} buttonLabel='1'/>

                            < Button onClick={this.handleButtonClick} numerical={true} buttonLabel='2'/>

                            < Button onClick={this.handleButtonClick} numerical={true} buttonLabel='3'/>

                            < Button onClick={this.deleteLastInput} buttonLabel='DEL'/>

                        </Col>

                        {/*Fifth row of buttons*/}

                        <Col s={12} style={flexing}>
                            < Button onClick={this.handleButtonClick} numerical={true} buttonLabel='0'/>
                            < Button onClick={this.handleButtonClick} numerical={true} buttonLabel='00'/>
                            < Button onClick={this.handleButtonClick} numerical={true} buttonLabel='.'/>
                            < Button onClick={this.calculate} buttonLabel='='/>
                        </Col>
                    </div>

                </Row>
            </div>
        );
    }
}

export default App;

