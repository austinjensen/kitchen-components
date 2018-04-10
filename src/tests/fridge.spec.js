import ShallowRenderer from 'react-test-renderer/shallow'
import Renderer from 'react-test-renderer'
import React from 'react';
import Fridge from '../fridge';

it('shallow renders Fridge correctly', () => {
    const renderer = new ShallowRenderer()
    renderer.render(<Fridge />)
    const result = renderer.getRenderOutput()

    // console.log(result)

    expect(result.type).toBe('div')
    expect(result.props.children).toEqual(
        'here is fridge'
    )
})