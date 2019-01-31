import React, { Component } from 'react'
import axios from 'axios'
import { Picture, Stats } from './pokemon'

class Pokedex extends Component {
    constructor () {
        super()
        this.state = {
            pokemonId: 25,
            url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
            description: {
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
        }, this.setPokemon())
    }

    drawPikachu = () => {
        this.setState({
            pokemonId: 25
        }, this.setPokemon())
    }

    setPokemon = () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${this.state.pokemonId}`)
            .then(response => {
                this.setState({
                    url: response.data.sprites.front_default,
                    description: {
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
            <button onClick={this.drawPokemon}>
                Mudar Pokemon
            </button>
                <Picture
                    url={this.state.url}
                    description={this.state.description.name} />
                <Stats
                    data={this.state.description}/>
            </main>
        )
    }

}

export default Pokedex