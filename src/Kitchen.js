import React, { Component } from 'react'
import Microwave from './Microwave';
import Fridge from './fridge';
import Oven from './oven';

class Kitchen extends Component {
    render(){
        console.log('Kitchen.render()')
        return (
            <div>
                Kitchen is here
                <Microwave />
                <Oven/>
                <Fridge/>
            </div>
        )
    }
    constructor() {
        super()
        console.log('Kitchen.constructor()')
        
      }
      componentWillMount() {
        console.log('Kitchen.componentWillMount()')
      }
      
      componentDidMount() {
        console.log('Kitchen.componentDidMount()')
      }
}

export default Kitchen