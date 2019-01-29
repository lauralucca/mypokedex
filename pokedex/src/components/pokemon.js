import React, { Component } from 'react'
        
class Pokemon extends Component {
    render() {
        return (
            <article>
                <img alt={this.props.resource.name} src={this.props.resource.image} />
                <p>Name: {this.props.resource.name}</p>
                <p>Type: {this.props.resource.types}</p>
                <p>Height: {this.props.resource.height}'</p>
                <p>Weight: {this.props.resource.weight} lbs.</p>
            </article>
        )
    }
}

export default Pokemon