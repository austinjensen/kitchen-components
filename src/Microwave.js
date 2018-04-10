import React, { Component } from 'react'

class Microwave extends Component {
    render(){
        console.log('Microwave.render()')
        return (
            <div>
                here is microwave
            </div>
        )
    }
    constructor() {
        super()
        console.log('Microwave.constructor()')
        
      }
      componentWillMount() {
        console.log('Microwave.componentWillMount()')
      }
      
      componentDidMount() {
        console.log('Microwave.componentDidMount()')
      }
}

export default Microwave