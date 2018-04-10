import Oven from '../oven'
import ShallowRenderer from 'react-test-renderer/shallow'
import Renderer from 'react-test-renderer'
import React from 'react';

it('Oven shallow renders correctly', () => {
    const renderer = new ShallowRenderer()
    renderer.render(<Oven />)
    const result = renderer.getRenderOutput()

    // console.log(result)

    expect(result.type).toBe('div')
    expect(result.props.children).toEqual(
        'here is oven'
    )
})