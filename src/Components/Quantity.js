import React from 'react'

export class Quantity extends React.Component {
    constructor(props) {
        super(props)
        this.state={quantity: 1}
    }

    add = () => {
        this.setState({quantity: this.state.quantity + 1 })

        this.props.onUpdateQuantity(this.state.quantity + 1)
    }

    subtract = () => {
        if(this.state.quantity > 1) {
            this.setState({quantity: this.state.quantity - 1 })

            this.props.onUpdateQuantity(this.state.quantity - 1)
        }    
    }

    render () {
        return (
            <div className="button-group">
                <button onClick={this.subtract} type="button">-</button>

                <input type={`text`} disabled min="1" value={this.state.quantity} id="Quantity"/>

                <button onClick={this.add} type="button">+</button>
            </div>   
        )
    }
}