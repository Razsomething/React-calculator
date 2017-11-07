import React, {Component} from 'react';
import './App.css';
import Buttons from './Buttons';
import {Row, Col, CardPanel} from 'react-materialize'

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
        this.deleteLastInput=this.deleteLastInput.bind(this);
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

    deleteLastInput(label) {
        let newString = this.state.currentValue.substring(0,this.state.currentValue.length-1);
        this.setState({currentValue: newString});
    }

    calculate() {
        let currentNumber = parseFloat(this.state.currentValue);
        let computedPreviousValue;
        if (this.state.currentValue !== '') {
            if (this.state.operation.length === 0) {
                computedPreviousValue = currentNumber;
            } else if (this.state.operation === '+') {
                let total = currentNumber + this.state.previousValue;
                computedPreviousValue = total;
            }
            else if (this.state.operation === '-') {
                let total = this.state.previousValue - currentNumber;
                computedPreviousValue = total;
            }
            else if (this.state.operation === '÷') {
                let total = this.state.previousValue / currentNumber;

                computedPreviousValue = total.toFixed(2);

            }
            else if (this.state.operation === 'X') {
                let total = this.state.previousValue * currentNumber;
                computedPreviousValue = total.toFixed(2);

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
        let colStyle = {
            width: '11rem'
        };

        return (
            <div className="App">

                {/*Result row*/}
                <Row>
                    {text}
                </Row>
                <div className='container center'>
                    {/*First row of buttons*/}
                    <Row>
                        <Col style={colStyle} s={3}>
                            < Buttons onClick={this.clear} buttonLabel='AC'/>
                        </Col>
                        <Col style={colStyle} s={3}>
                            < Buttons onClick={this.changeSign} buttonLabel='+/-'/>
                        </Col>
                        <Col style={colStyle} s={3}>
                            < Buttons onClick={this.divide} buttonLabel='÷'/>
                        </Col>
                        <Col style={colStyle} s={3}>
                            < Buttons onClick={this.multiply} buttonLabel='x'/>
                        </Col>
                    </Row>

                    {/*Second row of buttons*/}
                    <Row>
                        <Col style={colStyle} s={3}>
                            < Buttons onClick={this.showLabel} numerical={true} buttonLabel='7'/>
                        </Col>
                        <Col style={colStyle} s={3}>
                            < Buttons onClick={this.showLabel} numerical={true} buttonLabel='8'/>
                        </Col>
                        <Col style={colStyle} s={3}>
                            < Buttons onClick={this.showLabel} numerical={true} buttonLabel='9'/>
                        </Col>
                        <Col style={colStyle} s={3}>
                            < Buttons onClick={this.substract} buttonLabel='-'/>
                        </Col>
                    </Row>

                    {/*Third row of buttons*/}
                    <Row>
                        <Col style={colStyle} s={3}>
                            < Buttons onClick={this.showLabel} numerical={true} buttonLabel='4'/>
                        </Col>
                        <Col style={colStyle} s={3}>
                            < Buttons onClick={this.showLabel} numerical={true} buttonLabel='5'/>
                        </Col>
                        <Col style={colStyle} s={3}>
                            < Buttons onClick={this.showLabel} numerical={true} buttonLabel='6'/>
                        </Col>
                        <Col style={colStyle} s={3}>
                            < Buttons onClick={this.add} buttonLabel='+'/>
                        </Col>
                    </Row>

                    {/*Fourth row of buttons*/}
                    <Row>
                        <Col style={colStyle} s={3}>
                            < Buttons onClick={this.showLabel} numerical={true} buttonLabel='1'/>
                        </Col>
                        <Col style={colStyle} s={3}>
                            < Buttons onClick={this.showLabel} numerical={true} buttonLabel='2'/>
                        </Col>
                        <Col style={colStyle} s={3}>
                            < Buttons onClick={this.showLabel} numerical={true} buttonLabel='3'/>
                        </Col>
                        <Col style={colStyle} s={3}>
                            < Buttons onClick={this.deleteLastInput} buttonLabel='DEL'/>

                        </Col>
                    </Row>

                    {/*Fifth row of buttons*/}
                    <Row>
                        <Col style={colStyle} s={3}>
                            < Buttons onClick={this.showLabel} numerical={true} buttonLabel='0'/>
                        </Col>
                        <Col style={colStyle} s={3}>
                            < Buttons onClick={this.showLabel} numerical={true} buttonLabel='.'/>
                        </Col>
                        <Col style={colStyle} s={6}>
                            < Buttons onClick={this.calculate} buttonLabel='='/>

                        </Col>

                    </Row>
                </div>
            </div>
        );
    }
}

export default App;

