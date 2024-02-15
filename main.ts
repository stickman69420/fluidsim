namespace SpriteKind {
    export const Liquid = SpriteKind.create()
    export const hidbox = SpriteKind.create()
    export const hidboxleft = SpriteKind.create()
    export const hidbogsrite = SpriteKind.create()
    export const pin = SpriteKind.create()
    export const box = SpriteKind.create()
}
/**
 * Pick some fruit and peel it.
 */
//% weight=70 icon="\uf185" color=#EC7505
namespace Fluids {
    /**
     * Pick a fruit
     */
    //% blockId=tropic_pick block="pick a %fruit"
    export function CreateDrop (myImage: Image) {
        let mySprite3 = sprites.create(myImage, SpriteKind.Liquid)
    }
}
let mySprite2: Sprite = null
let mySprite: Sprite = null
let i = 0
let i2 = false
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite2.setFlag(SpriteFlag.Invisible, true)
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    mySprite2.setFlag(SpriteFlag.Invisible, false)
})
sprites.onCreated(SpriteKind.Liquid, function (sprite) {
    mySprite = sprites.create(img`
        1 1 1 1 1 
        . . . . . 
        . . . . . 
        . . . . . 
        . . . . . 
        `, SpriteKind.hidbox)
    mySprite.setFlag(SpriteFlag.Invisible, true)
    if (true) {
        mySprite = sprites.create(img`
            . . . . 1 
            . . . . 1 
            . . . . 1 
            . . . . 1 
            . . . . 1 
            `, SpriteKind.hidboxleft)
        mySprite.setFlag(SpriteFlag.Invisible, true)
    }
    if (true) {
        mySprite = sprites.create(img`
            1 . . . . 
            1 . . . . 
            1 . . . . 
            1 . . . . 
            1 . . . . 
            `, SpriteKind.hidbogsrite)
        mySprite.setFlag(SpriteFlag.Invisible, true)
    }
})
forever(function () {
    i = 0
    for (let value of sprites.allOfKind(SpriteKind.Liquid)) {
        sprites.allOfKind(SpriteKind.hidbox)[i].setPosition(value.x, value.y + 5)
        sprites.allOfKind(SpriteKind.hidboxleft)[i].setPosition(value.x - 5, value.y)
        sprites.allOfKind(SpriteKind.hidbogsrite)[i].setPosition(value.x + 5, value.y)
        i += 1
    }
    for (let value of sprites.allOfKind(SpriteKind.hidbox)) {
        i2 = false
        for (let value2 of sprites.allOfKind(SpriteKind.pin)) {
            if (value.overlapsWith(value2)) {
                i2 = true
            }
        }
        for (let value2 of sprites.allOfKind(SpriteKind.box)) {
            if (value.overlapsWith(value2)) {
                i2 = true
            }
        }
        for (let value2 of sprites.allOfKind(SpriteKind.Liquid)) {
            if (value.overlapsWith(value2)) {
                i2 = true
            }
        }
        if (i2) {
            value.setImage(img`
                f f f f f 
                . . . . . 
                . . . . . 
                . . . . . 
                . . . . . 
                `)
        } else {
            value.setImage(img`
                1 1 1 1 1 
                . . . . . 
                . . . . . 
                . . . . . 
                . . . . . 
                `)
        }
    }
    for (let value of sprites.allOfKind(SpriteKind.hidboxleft)) {
        i2 = false
        for (let value2 of sprites.allOfKind(SpriteKind.pin)) {
            if (value.overlapsWith(value2)) {
                i2 = true
            }
        }
        for (let value2 of sprites.allOfKind(SpriteKind.box)) {
            if (value.overlapsWith(value2)) {
                i2 = true
            }
        }
        for (let value2 of sprites.allOfKind(SpriteKind.Liquid)) {
            if (value.overlapsWith(value2)) {
                i2 = true
            }
        }
        if (i2) {
            value.setImage(img`
                . . . . f 
                . . . . f 
                . . . . f 
                . . . . f 
                . . . . f 
                `)
        } else {
            value.setImage(img`
                . . . . 1 
                . . . . 1 
                . . . . 1 
                . . . . 1 
                . . . . 1 
                `)
        }
    }
    for (let value of sprites.allOfKind(SpriteKind.hidbogsrite)) {
        i2 = false
        for (let value2 of sprites.allOfKind(SpriteKind.pin)) {
            if (value.overlapsWith(value2)) {
                i2 = true
            }
        }
        for (let value2 of sprites.allOfKind(SpriteKind.box)) {
            if (value.overlapsWith(value2)) {
                i2 = true
            }
        }
        for (let value2 of sprites.allOfKind(SpriteKind.Liquid)) {
            if (value.overlapsWith(value2)) {
                i2 = true
            }
        }
        if (i2) {
            value.setImage(img`
                f . . . . 
                f . . . . 
                f . . . . 
                f . . . . 
                f . . . . 
                `)
        } else {
            value.setImage(img`
                1 . . . . 
                1 . . . . 
                1 . . . . 
                1 . . . . 
                1 . . . . 
                `)
        }
    }
    i = 0
    for (let value of sprites.allOfKind(SpriteKind.Liquid)) {
        if (sprites.allOfKind(SpriteKind.hidbox)[i].image.equals(img`
            1 1 1 1 1 
            . . . . . 
            . . . . . 
            . . . . . 
            . . . . . 
            `)) {
            value.y += 1
        }
        if (Math.percentChance(50)) {
            if (sprites.allOfKind(SpriteKind.hidboxleft)[i].image.equals(img`
                . . . . 1 
                . . . . 1 
                . . . . 1 
                . . . . 1 
                . . . . 1 
                `)) {
                value.x += -1
            }
        } else {
            if (sprites.allOfKind(SpriteKind.hidbogsrite)[i].image.equals(img`
                1 . . . . 
                1 . . . . 
                1 . . . . 
                1 . . . . 
                1 . . . . 
                `)) {
                value.x += 1
            }
        }
        i += 1
    }
})
