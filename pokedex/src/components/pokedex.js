import React, { Component } from 'react'
import axios from 'axios'
import Menu from './menu'
import Pokemon from './pokemon'

class Pokedex extends Component {
    constructor () {
        super()
        this.state = {
            pokemonId: 25,
            data: {
                image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
                name: 'pikachu',
                types: 'electric',
                height: '4',
                weight: '60'
            }
        }    
    }
    
    handleTypes(array) {
        return array.map((item) => item.type.name).join(', ')
    }
    
    getPokemonId(min, max) {
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    drawPokemon = () => {
        this.setState({
            pokemonId: this.getPokemonId(1, 802)
        })
        console.log(this.state.pokemonId)
    }

    drawPikachu = () => {
        this.setState({
            pokemonId: 25
        })
        console.log(this.state.pokemonId)
    }

    setPokemon = () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${this.state.pokemonId}`)
            .then(response => {
                this.setState({
                    data: {
                        image: response.data.sprites.front_default,
                        name: response.data.name,
                        types: this.handleTypes(response.data.types),
                        height: response.data.height,
                        weight: response.data.weight
                    }
                })    
            }    
        )    
    }

    render() {
        return (
            <main>
                <Menu
                    drawPikachu={this.drawPikachu}
                    drawPokemon={this.drawPokemon}
                    setPokemon={this.setPokemon}
                />
                <Pokemon resource={this.state.data}/>
            </main>
        )
    }
}

export default Pokedex