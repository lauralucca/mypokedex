import React, { Component } from 'react'
import axios from 'axios'
import { Picture, Stats } from './pokemon'

class PokedexUI extends Component {
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
        })
    }

    drawPikachu = () => {
        this.setState({
            pokemonId: 25
        })
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

    pikachu = () => {
        this.drawPikachu()
        this.setPokemon()
    }
  
    pokemon = () => {
        this.drawPokemon()
        this.setPokemon()
    }


    render() {
        return (
            <main>
                <div id="pokedex">
                    <div id="left">
                        <div id="logo"></div>
                        <div id="bg_curve1_left"></div>
                        <div id="bg_curve2_left"></div>
                        <div id="curve1_left">
                        <div id="buttonGlass">
                            <div id="reflect"> </div>
                        </div>
                        <div id="miniButtonGlass1"></div>
                        <div id="miniButtonGlass2"></div>
                        <div id="miniButtonGlass3"></div>
                        </div>
                        <div id="curve2_left">
                        <div id="junction">
                            <div id="junction1"></div>
                            <div id="junction2"></div>
                        </div>
                        </div>
                        <div id="screen">
                        <div id="topPicture">
                            <div id="buttontopPicture1"></div>
                            <div id="buttontopPicture2"></div>
                        </div>
                        <div id="picture">
                            <Picture
                                url={this.state.url}
                                description={this.state.description.name} />
                        </div>
                        <div id="buttonbottomPicture"></div>
                        <div id="speakers">
                            <div className="sp"></div>
                            <div className="sp"></div>
                            <div className="sp"></div>
                            <div className="sp"></div>
                        </div>
                        </div>
                        <div id="bigbluebutton"></div>
                        <div id="barbutton1"></div>
                        <div id="barbutton2"></div>
                        <div id="cross">
                        <div id="leftcross">
                            <div id="leftT"></div>
                        </div>
                        <div id="topcross">
                            <div id="upT"></div>
                        </div>
                        <div id="rightcross">
                            <div id="rightT"></div>
                        </div>
                        <div id="midcross">
                            <div id="midCircle"></div>
                        </div>
                        <div id="botcross">
                            <div id="downT"></div>
                        </div>
                        </div>
                    </div>
                    <div id="right">
                        <div id="stats">
                            <Stats
                                data={this.state.description}/>
                        </div>
                        <div id="blueButtons1">
                        <div className="blueButton"></div>
                        <div className="blueButton"></div>
                        <div className="blueButton"></div>
                        <div className="blueButton"></div>
                        <div className="blueButton"></div>
                        </div>
                        <div id="blueButtons2">
                        <div className="blueButton"></div>
                        <div className="blueButton"></div>
                        <div className="blueButton"></div>
                        <div className="blueButton"></div>
                        <div className="blueButton"></div>
                        </div>
                        <div id="miniButtonGlass4"></div>
                        <div id="miniButtonGlass5"></div>
                        <div id="barbutton3"></div>
                        <div id="barbutton4"></div>
                        <div>
                            <button
                                id="yellowBox1"
                                onClick={this.pokemon}
                            >
                                Temos que pegar!
                            </button>
                        </div>
                        <div>
                            <button
                                id="yellowBox2"
                                onClick={this.pikachu}
                            >
                                Pikachu, eu escolho você!                      
                            </button>
                        </div>
                        <div id="bg_curve1_right"></div>
                        <div id="bg_curve2_right"></div>
                        <div id="curve1_right"></div>
                        <div id="curve2_right"></div>
                    </div>
                </div>
            </main>
        )
    }
}

export default PokedexUI