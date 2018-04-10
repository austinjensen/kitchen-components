import React from 'react';
import Kitchen from '../Kitchen'
import Renderer from 'react-test-renderer'
import ShallowRenderer from 'react-test-renderer/shallow'
import Microwave from '../Microwave'
import App from '../App'
import Fridge from '../fridge'
import Oven from '../oven'

it('renders correctly', () => {
    const tree = Renderer
        .create(<Kitchen />)
        .toJSON()
    expect(tree).toMatchSnapshot()

})


it('it shallow renders correctly', () => {
    const renderer = new ShallowRenderer()
    renderer.render(<Kitchen />)
    const result = renderer.getRenderOutput()

    // console.log(result)

    expect(result.type).toBe('div')
    expect(result.props.children).toEqual([
        'Kitchen is here',
        <Microwave/>,
        <Oven />,
        <Fridge/>
    ])
})

it('shallow render app correctly', () => {
    const renderer = new ShallowRenderer()
    renderer.render(<App />)
    const result = renderer.getRenderOutput()

    // console.log(result)

    expect(result.type).toBe('div')
    expect(result.props.children).toEqual(
        <Kitchen />
    )

})
