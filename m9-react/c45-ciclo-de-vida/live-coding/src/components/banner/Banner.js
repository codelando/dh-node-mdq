import React, { Component } from 'react'

export default class Banner extends Component {
    // Ciclo de Vida
    
    constructor(props) {
        super(props)
    }
    
    
    // cuando se montó
    componentDidMount() {
        
    }

    // cuando se actualiza (cuando cambia estado/props)
    componentDidUpdate() {
        
    }

    // cuando se actualiza (cuando cambia estado/props)
    componentWillUnmount() {
        
    }

    render() {
        return <marquee>Soy un banner</marquee>
    }
}