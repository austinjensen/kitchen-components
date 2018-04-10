import {KitchenDto, OvenDto, FridgeDto}from '../dtos'

 
it('kitchen should contain Oven and a Fridge', () => {
    const expectedOven = new OvenDto(false)
    const expectedFridge = new FridgeDto (false)
    const kitcheninstance = new KitchenDto(expectedOven ,expectedFridge)
    expect(kitcheninstance).toBeDefined()
    expect(kitcheninstance.oven).toEqual(expectedOven)
    expect(kitcheninstance.fridge).toEqual(expectedFridge)
    expect(kitcheninstance.oven.switchpower()).toBeTruthy()
    expect(kitcheninstance.fridge.switchpower()).toBeTruthy()
})
it('switchpower', () => {
    const sp_oven = new OvenDto(false)
    expect(sp_oven.switchpower())
})
it('has color', () => {
    const c_oven = new OvenDto('blue')
    expect(c_oven.color())
})
it('switchpower', () => {
    const sp_fridge = new FridgeDto(false)
    expect(sp_fridge.switchpower())
})

it('has color', () => {
    const c_fridge = new FridgeDto('red')
    expect(c_fridge.color())
})
