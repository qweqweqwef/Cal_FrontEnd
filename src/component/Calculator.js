import React from 'react';




export default class Calculator extends React.Component{
    constructor(props) {
        super(props);
        this.state = { 
            value: null,
            displayValue:"0",
            waitingOperation:false,
            operator:null,
         }
    }

    inputDigit(digit){
        const {displayValue , waitingOperation } = this.state

        if(waitingOperation){
            this.setState({
                displayValue: String(digit),
                waitingOperation:false
            })
        } else {
        this.setState({
            displayValue: displayValue === '0' ? String(digit) : displayValue + digit
        })
      }
    }

    inputDot(){
        const { displayValue , waitingOperation } = this.state

        if(waitingOperation){
            this.setState({
                displayValue:'.',
                waitingOperation:false
            })
        } else if 
         (displayValue.indexOf('.') === -1 ) {
            this.setState({
                displayValue: displayValue + '.',
                waitingOperation: false
            })
        }
    }

    Clear(){
        this.setState({
            displayValue:'0'
        })
    }

    toggleSign(){
        const {displayValue} = this.state

        this.setState({
            displayValue: displayValue.charAt(0) === "-" ? displayValue.substr(1) :'-' + displayValue
        })
    }

    percent(){
        const { displayValue } = this.state
        const value = parseFloat(displayValue)

        this.setState({
            displayValue: String(value/100)
        })
    }

    actions(nextOperator){
        const { displayValue , operator , value } = this.state
        const nextValue = parseFloat(displayValue)

        const operations = {
            '/':( prevValue, nextValue ) => prevValue / nextValue,
            '*':( prevValue, nextValue ) => prevValue * nextValue,
            '+':( prevValue, nextValue ) => prevValue + nextValue,
            '-':( prevValue, nextValue ) => prevValue - nextValue,
            '=':( prevValue, nextValue ) => nextValue
        }
        
        if (value == null) {
            // if no previous value and they press an operator key
            this.setState({
                value: nextValue
            })

        }else if (operator) {
            const currentValue = value || 0 
            const computedValue = operations[operator](currentValue , nextValue)

            this.setState({
                value: computedValue,
                displayValue: String(computedValue)
            })
        }

        
        this.setState({
            waitingOperation:true,
            operator:nextOperator
        })
    }


    render(){
        return(
        <div className="calculator-background">
            <div className="calculator">
                <div className="calculator-display">{this.state.displayValue}</div>
                <div className="calculator-keypad">
                   <div className="inputs">
                        <div className="functions">
                            <button className="key clear"   onClick={()=> this.Clear()}>AC</button>
                            <button className="key sign"    onClick={()=> this.toggleSign()}>±</button>
                            <button className="key percent" onClick={()=> this.percent()}>%</button>
                        </div>
                        <div className="digits">
                            <button className="key num-0" onClick={()=> this.inputDigit(0)}>0</button>
                            <button className="key dot"   onClick={()=> this.inputDot()} >• </button>
                            <button className="key num-1" onClick={()=> this.inputDigit(1)}>1</button>
                            <button className="key num-2" onClick={()=> this.inputDigit(2)}>2</button>
                            <button className="key num-3" onClick={()=> this.inputDigit(3)}>3</button>
                            <button className="key num-4" onClick={()=> this.inputDigit(4)}>4</button>
                            <button className="key num-5" onClick={()=> this.inputDigit(5)}>5</button>
                            <button className="key num-6" onClick={()=> this.inputDigit(6)}>6</button>
                            <button className="key num-7" onClick={()=> this.inputDigit(7)}>7</button>
                            <button className="key num-8" onClick={()=> this.inputDigit(8)}>8</button>
                            <button className="key num-9" onClick={()=> this.inputDigit(9)}>9</button>
                        </div>
                    </div>

                    <div className="operators">
                            <button className="key divide" onClick={()=> this.actions('/')}>÷</button>
                            <button className="key times"  onClick={()=> this.actions('*')}>x</button>
                            <button className="key plus"   onClick={()=> this.actions('-')}>-</button>
                            <button className="key minus"  onClick={()=> this.actions('+')}>+</button>
                            <button className="key equals" onClick={()=> this.actions('=')}>=</button>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}