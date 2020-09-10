import React, { Component } from 'react'

export default class Nuevo extends Component {
    constructor(){
        super()
        this.state = {
            owner:  "Leonardo",

        }
    }

    render() {
        const numbers = [1, 2, 3, 4, 5]

        const lista = numbers.map( number => <li key={number} > {number}</li> )

        return (
            <div>
                Estoy en el componente {this.props.numero} de {this.state.owner} 
                <ul>
                    {lista}
                </ul>
            </div>
        )
    }
}
