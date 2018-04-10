class AppliancedDto {
    constructor(haspower) {
        this.haspower = haspower
    }
    switchpower() {
        this.powered = !this.powered
        return this.powered
    }

}
class KitchenDto {
    constructor(fridge, oven) {
        this.fridge = fridge
        this.oven = oven
    }
}
class OvenDto extends AppliancedDto {
    color(newcolor) {
        this.colour = newcolor
        return 'the oven is ' + this.colour
    }
    constructor(powered) {
        super(powered)
    }
}



class FridgeDto extends AppliancedDto {
    color(newcolor) {
        this.colour = newcolor
        //    return 'the fridge is '+this.colour
        return this.colour === 'red'
    }
    constructor(ispowered) {
        super(ispowered)
    }
}

export {KitchenDto, OvenDto, FridgeDto}