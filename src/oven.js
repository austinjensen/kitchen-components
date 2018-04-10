import React, { Component } from 'react'

class Oven extends Component {
    render(){
        console.log('Oven.render()')
        return (
            <div>
                here is oven
            </div>
        )
    }
    constructor() {
        super()
        console.log('Oven.constructor()')
        
      }
      componentWillMount() {
        console.log('Oven.componentWillMount()')
      }
      
      componentDidMount() {
        console.log('Oven.componentDidMount()')
      }
}

export default Oven