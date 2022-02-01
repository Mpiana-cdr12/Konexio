import React, { Component } from 'react'

class Add extends Component {

    constructor() {
        super();
        this.state = { // 04 - Formulaire - Dans le composant Add.js créez le state avec les clés suivantes :
            productName: "", // productName : contiendra une string vide par défaut
            price: 1 // price : valeur 1 par défaut
        }
        this.updateProductName = this.updateProductName.bind(this)
        this.updatePrice = this.updatePrice.bind(this)
    } // Placez un input texte, avec l'attribut onChange qui appelle une méthode updateProductName et un input range (min 1, max 10) avec l'attribut onChange qui appelle une méthode updatePrice, et un bouton "Add" avec un attribut 

    updateProductName(event) {
        this.setState({
            productName: event.target.value
        })
    }

    updatePrice(event) {
        this.setState({
            price: event.target.value
        })
    }

    click = () => {
        this.props.addItem(this.state.productName, this.state.price)
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <input type="text" className="col-10" onChange={this.updateProductName}></input>
                    <button type="button" className="btn btn-primary col-2" onClick={this.click}>Add</button>
                </div>
                <div className="row">
                    <input type="range" value={this.state.price} onChange={this.updatePrice} min="1" max="10"></input>
                    <span>{this.state.price}</span>
                </div>
            </div>
        )
    }
}
export default Add