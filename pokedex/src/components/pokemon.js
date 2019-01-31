import React, { Component } from 'react'
        
export class Picture extends Component {
    render() {
        return (
            <figure>
                <img
                    alt={this.props.description}
                    src={this.props.url} />
            </figure>
        )
    }
}

export class Stats extends Component {
    render() {
        return (
            <dl>
                <dt>Name:</dt>
                <dd>{this.props.data.name}</dd>
                <dt>Type:</dt>
                <dd>{this.props.data.types}</dd>
                <dt>Height:</dt>
                <dd>{this.props.data.height}'</dd>
                <dt>Weight:</dt>
                <dd>{this.props.data.weight} lbs.</dd>
            </dl>
        )
    }
}