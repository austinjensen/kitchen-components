import React, { Component } from 'react'

class Fridge extends Component {
    render(){
        console.log('Fridge.render()')
        return (
            <div>
                here is fridge
            </div>
        )
    }
    constructor() {
        super()
        console.log('Fridge.constructor()')
        
      }
      componentWillMount() {
        console.log('Fridge.componentWillMount()')
      }
      
      componentDidMount() {
        console.log('Fridge.componentDidMount()')
      }
}

export default Fridge