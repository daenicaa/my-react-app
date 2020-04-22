import React from 'react';

import KeyPadComponent from "./KeyPadComponent";

class Calculator extends React.Component {
    constructor(){
        super();

        this.state = {
            result: ""
        }
    }

    onClick = button => {

        if(button === "="){
            this.calculate()
        }

        else if(button === "C"){
            this.reset()
        }

        else {
            this.setState({
                result: this.state.result + button
            })
        }
    };
    
    calculate = () => {
        var checkResult = ''
        if(this.state.result.includes('--')){
            checkResult = this.state.result.replace('--','+')
        }

        else {
            checkResult = this.state.result
        }

        try {
            this.setState({
                result: (eval(checkResult) || "" ) + ""
            })
        } catch (e) {
            this.setState({
                result: "error"
            })

        }
    };

    reset = () => {
        this.setState({
            result: ""
        })
    };


    render() {
        return (
            <section className="calculatorContainer">
                <h1>Simple Calculator</h1>
                <div className="calculator">
                    <input type="text" class="form-control"
                        value={this.state.result}
                        disabled
                    />
                    <KeyPadComponent onClick={this.onClick}/>
                </div>
            </section>
        );
    }
}

export default Calculator;