import React, {Component} from "react";

class KeyPadComponent extends Component {

    render() {
        return (
            <div className="numbers">
                <button className="btn" name="7" onClick={e => this.props.onClick(e.target.name)}>7</button>
                <button className="btn" name="8" onClick={e => this.props.onClick(e.target.name)}>8</button>
                <button className="btn" name="9" onClick={e => this.props.onClick(e.target.name)}>9</button>
                <button className="btn" name="/" onClick={e => this.props.onClick(e.target.name)}>÷</button><br/>

                <button className="btn" name="4" onClick={e => this.props.onClick(e.target.name)}>4</button>
                <button className="btn" name="5" onClick={e => this.props.onClick(e.target.name)}>5</button>
                <button className="btn" name="6" onClick={e => this.props.onClick(e.target.name)}>6</button>
                <button className="btn" name="*" onClick={e => this.props.onClick(e.target.name)}>x</button><br/>

                <button className="btn" name="1" onClick={e => this.props.onClick(e.target.name)}>1</button>
                <button className="btn" name="2" onClick={e => this.props.onClick(e.target.name)}>2</button>
                <button className="btn" name="3" onClick={e => this.props.onClick(e.target.name)}>3</button>
                <button className="btn" name="-" onClick={e => this.props.onClick(e.target.name)}>-</button><br/>

                <button className="btn" name="0" onClick={e => this.props.onClick(e.target.name)}>0</button>
                <button className="btn" name="C" onClick={e => this.props.onClick(e.target.name)}>C</button>
                <button className="btn" name="=" onClick={e => this.props.onClick(e.target.name)}>=</button>
                <button className="btn" name="+" onClick={e => this.props.onClick(e.target.name)}>+</button>
                <br/>
            </div>
        );
    }
}


export default KeyPadComponent;