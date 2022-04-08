import { Component, ComponentFactory } from 'src/types/cumbiaTypes';
import cumbia from '../cumbia';



const counterComponent: ComponentFactory = () => {
    return {
        name: 'counter',
        init: jest.fn() as any,
        actions: jest.fn() as any
    }
}

describe('cumbia 🎶 ', () => {

    test('Should initialise component if name is correct', () => {
        cumbia({ counter: counterComponent })
    })

})