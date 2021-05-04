import React from 'react'
import { Quantity } from './Quantity'

export class Product extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            Price: this.props.data.Price,
            Quantity: 1
        }
    }

    getUpdatedQuantity = (newQuantity) => {
        this.setState({Quantity: newQuantity})
        this.setState({Price: this.props.data.Price * newQuantity})
    }

    onSubmit (event) {
        event.preventDefault()
        
        alert(`item was added to the cart`)
    }

    render() {
        return (
            <div className="product">
                <span style={{display: "none"}}>{this.props.data.Id}</span>
    
                <h2>{this.props.data.Name}</h2>
                <p>R {this.state.Price}</p>
    
                <form onSubmit={this.onSubmit} id="productData">
                    <input type="hidden" value={this.props.data.Id} name="Id"/>
                    <Quantity onUpdateQuantity={this.getUpdatedQuantity}/>

                    <button type="submit">Add to Cart</button>
                </form>
                
            </div>
        )
    }
    
}

export const ListProducts =  (props) => {
    const productList = props.products

    const list = productList.map((product) => 
        <Product data={product} key={product.Id} />
    )

    return (
        <div className="products-container">
            {list}
        </div>
    )
}

export const DisplayProducts = () => {
    const products = [
        {Id: 0, Name: "iPhone 11", Price: 10000},
        {Id: 1, Name: "Huawei P40", Price: 9500},
        {Id: 2, Name: "Samsung Galaxy S20", Price: 8500}
    ] 


    return (
        <ListProducts products={products}/>
    )
}


