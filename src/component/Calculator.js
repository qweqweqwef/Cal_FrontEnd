import React from 'react';


export default class Calculator extends React.Component{
    render(){
        return(
        <div className="calculator-background">
            <div className="calculator">
                <div className="calculator-display">0</div>
                <div className="calculator-keypad">
                   <div className="inputs">
                        <div className="functions">
                            <button className="key clear">AC</button>
                            <button className="key sign">±</button>
                            <button className="key percent">%</button>
                        </div>
                        <div className="digits">
                            <button className="key num-0">0</button>
                            <button className="key dot">•</button>
                            <button className="key num-1">1</button>
                            <button className="key num-2">2</button>
                            <button className="key num-3">3</button>
                            <button className="key num-4">4</button>
                            <button className="key num-5">5</button>
                            <button className="key num-6">6</button>
                            <button className="key num-7">7</button>
                            <button className="key num-8">8</button>
                            <button className="key num-9">9</button>
                        </div>
                    </div>

                    <div className="operators">
                        <button className="key divide">÷</button>
                        <button className="key times">x</button>
                        <button className="key plus">+</button>
                        <button className="key minus">-</button>
                        <button className="key equals">=</button>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}