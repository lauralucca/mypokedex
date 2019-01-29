import React, { Component } from 'react'
import Button from './button'

class Menu extends Component {
    constructor () {
        super()
        this.state = {
            pokemonId: 25
        }
      }

    pikachu = () => {
      this.props.drawPikachu()
      this.props.setPokemon()
    }

    pokemon = () => {
      this.props.drawPokemon()
      this.props.setPokemon()
    }

    render() {
        return (
            <nav>
                <Button
                    handleClick={this.pokemon}
                    label="Temos que pegar! Pokémon!" />
                <Button
                    handleClick={this.pikachu}
                    label="Pikachu, eu escolho você!" />    
            </nav>
        )
    }
}

export default Menu