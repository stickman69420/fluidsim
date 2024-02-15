namespace SpriteKind {
    export const Liquid = SpriteKind.create()
    export const hidbox = SpriteKind.create()
    export const hidboxleft = SpriteKind.create()
    export const hidbogsrite = SpriteKind.create()
    export const pin = SpriteKind.create()
    export const box = SpriteKind.create()
}
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
let i2 = false
let i = 0
let mySprite: Sprite = null
let mySprite2: Sprite = null
namespace Fluids {
    /**
     * Pick a fruit
     */
    //% blockId=tropic_pick block="pick a %fruit"
    export function CreateDrop (myImage: Image) {
        let mySprite3 = sprites.create(myImage, SpriteKind.Liquid)
    }
}
forever(function () {
    i = 0
    for (let value of sprites.allOfKind(SpriteKind.Liquid)) {
        sprites.allOfKind(SpriteKind.hidbox)[i].setPosition(value.x, value.y + 5)
        sprites.allOfKind(SpriteKind.hidboxleft)[i].setPosition(value.x - 5, value.y)
        sprites.allOfKind(SpriteKind.hidbogsrite)[i].setPosition(value.x + 5, value.y)
        i += 1
    }
    for (let value2 of sprites.allOfKind(SpriteKind.hidbox)) {
        i2 = false
        for (let value22 of sprites.allOfKind(SpriteKind.pin)) {
            if (value2.overlapsWith(value22)) {
                i2 = true
            }
        }
        for (let value23 of sprites.allOfKind(SpriteKind.box)) {
            if (value2.overlapsWith(value23)) {
                i2 = true
            }
        }
        for (let value24 of sprites.allOfKind(SpriteKind.Liquid)) {
            if (value2.overlapsWith(value24)) {
                i2 = true
            }
        }
        if (i2) {
            value2.setImage(img`
                f f f f f 
                . . . . . 
                . . . . . 
                . . . . . 
                . . . . . 
                `)
        } else {
            value2.setImage(img`
                1 1 1 1 1 
                . . . . . 
                . . . . . 
                . . . . . 
                . . . . . 
                `)
        }
    }
    for (let value3 of sprites.allOfKind(SpriteKind.hidboxleft)) {
        i2 = false
        for (let value25 of sprites.allOfKind(SpriteKind.pin)) {
            if (value3.overlapsWith(value25)) {
                i2 = true
            }
        }
        for (let value26 of sprites.allOfKind(SpriteKind.box)) {
            if (value3.overlapsWith(value26)) {
                i2 = true
            }
        }
        for (let value27 of sprites.allOfKind(SpriteKind.Liquid)) {
            if (value3.overlapsWith(value27)) {
                i2 = true
            }
        }
        if (i2) {
            value3.setImage(img`
                . . . . f 
                . . . . f 
                . . . . f 
                . . . . f 
                . . . . f 
                `)
        } else {
            value3.setImage(img`
                . . . . 1 
                . . . . 1 
                . . . . 1 
                . . . . 1 
                . . . . 1 
                `)
        }
    }
    for (let value4 of sprites.allOfKind(SpriteKind.hidbogsrite)) {
        i2 = false
        for (let value28 of sprites.allOfKind(SpriteKind.pin)) {
            if (value4.overlapsWith(value28)) {
                i2 = true
            }
        }
        for (let value29 of sprites.allOfKind(SpriteKind.box)) {
            if (value4.overlapsWith(value29)) {
                i2 = true
            }
        }
        for (let value210 of sprites.allOfKind(SpriteKind.Liquid)) {
            if (value4.overlapsWith(value210)) {
                i2 = true
            }
        }
        if (i2) {
            value4.setImage(img`
                f . . . . 
                f . . . . 
                f . . . . 
                f . . . . 
                f . . . . 
                `)
        } else {
            value4.setImage(img`
                1 . . . . 
                1 . . . . 
                1 . . . . 
                1 . . . . 
                1 . . . . 
                `)
        }
    }
    i = 0
    for (let value5 of sprites.allOfKind(SpriteKind.Liquid)) {
        if (sprites.allOfKind(SpriteKind.hidbox)[i].image.equals(img`
            1 1 1 1 1 
            . . . . . 
            . . . . . 
            . . . . . 
            . . . . . 
            `)) {
            value5.y += 1
        }
        if (Math.percentChance(50)) {
            if (sprites.allOfKind(SpriteKind.hidboxleft)[i].image.equals(img`
                . . . . 1 
                . . . . 1 
                . . . . 1 
                . . . . 1 
                . . . . 1 
                `)) {
                value5.x += -1
            }
        } else {
            if (sprites.allOfKind(SpriteKind.hidbogsrite)[i].image.equals(img`
                1 . . . . 
                1 . . . . 
                1 . . . . 
                1 . . . . 
                1 . . . . 
                `)) {
                value5.x += 1
            }
        }
        i += 1
    }
})
