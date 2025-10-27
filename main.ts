namespace SpriteKind {
    export const clothes = SpriteKind.create()
    export const stuff2 = SpriteKind.create()
    export const stuff3 = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLadder, function (sprite, location) {
    if (info.score() == 3) {
        game.splash("Ahead is the garden", "The dog is on the loose")
        game.splash("Collect the your stuff", "And the hedgetrimmer")
        game.splash("This is the last zone", "Escape while you can!")
        tiles.setCurrentTilemap(tilemap`level2`)
        theGuy.setPosition(133, 16)
        Mom.setPosition(138, 96)
        Grandma = sprites.create(img`
            bbbb........bbbb.................
            c99bb......bb99b.................
            c999bb....bb999c.................
            c9b99bccccb99b9c.................
            c9bb99bccb99bb9c.................
            c93b99999999b39c.................
            c93399999999339c.................
            c99399999999399c.................
            c99999991199999c.................
            c999ff91119ff99c........bbbbbb...
            c999ff91111ff99c.......c999999bb.
            c99991111111999c......c99999999b.
            c9991111fff1199c.....c9991119999b
            c999c11fff1199bc.....c9911111999b
            c999cc111111c9bc.....c911dd11199b
            c99999bb33cc99bcc....cbddbbd1199c
            c999999b33c99999bbccccbbdbbb1199c
            c9999999bb9999999999999999bb1999c
            c999911119999999999999999999b999c
            c999111111999999999999999999999c.
            c99911111119999999999999999999cc.
            c99111111119999999999999999999c..
            c99111111111999999999999999999c..
            cb9111111111999999999999999999c..
            .f9111111111999999999999999999c..
            .ff111111111999999999999999999c..
            ..fb11111111999999999999999999c..
            ...fb1111119999999111111999999c..
            ...fbbb11119999991111111199999c..
            ....fbbfffb9999ccccccccccb9999c..
            ....fbbf..f999c.....fbbf.c9999c..
            ....fbbf..f999c.....fbbf.cc9999c.
            ....fbbf..f99c.......fbf..cc999c.
            ....fbbf..f99c.......fbbf..cc99c.
            ....fbbf..f99c.......fbbf...c99c.
            ....fbbf..f99c......fbbbf...c99c.
            ...fbbbf..f99c......ffff....cb9c.
            ...fbbf..f999c.............c999c.
            ...ffff..f99cc.............c999c.
            .........fffc..............cccc..
            `, SpriteKind.Enemy)
        Grandma.setScale(0.5, ScaleAnchor.Middle)
        Grandma.setPosition(7, 100)
        Grandma.follow(Britney, 45)
        shoes = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . f e . e f . . . . . . . 
            . . e e e e . e e e e . . . . . 
            . . e e e e . e e e e . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.clothes)
        shoes.setPosition(120, 250)
        shoes.setScale(2, ScaleAnchor.Middle)
        Wallet = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . e e 5 5 5 e e . . . . . 
            . . . e e e e 5 e e e e . . . . 
            . . . e e e e e e e e e . . . . 
            . . . e e e e e e e e e . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.stuff2)
        Wallet.setPosition(20, 100)
        Wallet.setScale(2, ScaleAnchor.Middle)
        Hedgetrimmer = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . b b b . . . . . 
            . . e . . . . b b b . . . . . . 
            . . . e . . b b b . . . . . . . 
            . . . . e . b . . . . . . . . . 
            . . . . . e . . . . . . . . . . 
            . . . . e . b . . . . . . . . . 
            . . . e . . b b b . . . . . . . 
            . . e . . . . b b b b . . . . . 
            . . . . . . . . . b b . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.stuff3)
        Hedgetrimmer.setPosition(50, 10)
        Hedgetrimmer.setScale(2, ScaleAnchor.Middle)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.stuff3, function (sprite, otherSprite) {
    music.baDing.play()
    info.changeScoreBy(1)
    sprites.destroy(Hedgetrimmer)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.stuff2, function (sprite, otherSprite) {
    music.baDing.play()
    info.changeScoreBy(1)
    sprites.destroy(phone)
    sprites.destroy(Wallet)
})
scene.onHitWall(SpriteKind.Enemy, function (sprite, location) {
    tiles.setWallAt(tiles.getTileLocation(160, 160), true)
    theGuy.setBounceOnWall(true)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairEast, function (sprite, location) {
    if (info.score() == 6) {
        tiles.setCurrentTilemap(tilemap`level`)
        game.splash("YOU HAVE ESCAPED!", "Britney survived ! ")
        game.gameOver(true)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.clothes, function (sprite, otherSprite) {
    music.baDing.play()
    info.changeScoreBy(1)
    sprites.destroy(pants)
    sprites.destroy(shirt)
    sprites.destroy(shoes)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairSouth, function (sprite, location) {
    if (info.score() == 1) {
        game.splash("Good job ahead is the", "first floor. Beware...")
        game.splash("His mom is awake and angry", "You disturbed her sleep")
        game.splash("RUNNNNNNNNN", "GET YOUR STUFF AND LEAVE!")
        tiles.setCurrentTilemap(tilemap`level0`)
        theGuy.setPosition(133, 16)
        Mom = sprites.create(img`
            . . . . . f f f f . . . . . 
            . . . f f 5 5 5 5 f f . . . 
            . . f 5 5 5 5 5 5 5 5 f . . 
            . f 5 5 5 5 5 5 5 5 5 5 f . 
            . f 5 5 5 d b b d 5 5 5 f . 
            f 5 5 5 b 4 4 4 4 b 5 5 5 f 
            f 5 5 c c 4 4 4 4 c c 5 5 f 
            f b b f b f 4 4 f b f b b f 
            f b b 4 1 f d d f 1 4 b b f 
            . f b f d d d d d d f b f . 
            . f e f e 4 4 4 4 e f e f . 
            . e 4 f 6 9 9 9 9 6 f 4 e . 
            . 4 d c 9 9 9 9 9 9 c d 4 . 
            . 4 f b 3 b 3 b 3 b b f 4 . 
            . . f f 3 b 3 b 3 3 f f . . 
            . . . . f f b b f f . . . . 
            `, SpriteKind.Enemy)
        Mom.setPosition(138, 96)
        Mom.follow(Britney, 35)
        shirt = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 3 3 . . 3 3 . . . . . . . 
            . . . 3 3 3 3 3 3 . . . . . . . 
            . . . 3 . 3 3 . 3 . . . . . . . 
            . . . 3 . 3 3 . 3 . . . . . . . 
            . . . 3 . 3 3 . 3 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.clothes)
        shirt.setPosition(89, 105)
        shirt.setScale(2, ScaleAnchor.Middle)
        phone = sprites.create(img`
            . . . f . . . . . . . f . . . . 
            . . . . f . . . . . f . . . . . 
            . . . . f f f f f f f . . . . . 
            . . . . f 9 9 9 9 9 f . . . . . 
            . . . . f 9 2 9 5 9 f . . . . . 
            . . . . f 9 9 9 9 9 f . . . . . 
            . . . . f 9 8 9 5 9 f . . . . . 
            . . . . f 9 9 9 9 9 f . . . . . 
            . . . . f 9 6 9 6 9 f . . . . . 
            . . . . f 9 9 d 9 9 f . . . . . 
            . . . . f d 9 f 9 8 f . . . . . 
            . . . . f 9 f f f 9 f . . . . . 
            . . . . f f f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.stuff2)
        phone.setPosition(200, 30)
        phone.setScale(1, ScaleAnchor.Middle)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    game.gameOver(false)
    music.play(music.melodyPlayable(music.zapped), music.PlaybackMode.UntilDone)
})
let distance = 0
let shirt: Sprite = null
let phone: Sprite = null
let Hedgetrimmer: Sprite = null
let Wallet: Sprite = null
let shoes: Sprite = null
let Grandma: Sprite = null
let Mom: Sprite = null
let theGuy: Sprite = null
let Britney: Sprite = null
let pants: Sprite = null
game.splash("Britney wakes up in...")
game.splash("A strangers basement!!!!")
game.splash("All she remembers...")
game.splash("Was drinking a funky drink")
game.splash("AT THE BAR!!!")
game.splash("She now has a mission", "She must collect her stuff")
game.splash("AND ESCAPE!!! RUNNN!!!!! ", "OR BRITNEY WILL DIE!!!")
info.setScore(0)
tiles.setCurrentTilemap(tilemap`level1`)
pants = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . f f 5 f f . . . . . . . . 
    . . . 8 8 8 8 8 . . . . . . . . 
    . . . 8 8 . 8 8 . . . . . . . . 
    . . . 8 8 . 8 8 . . . . . . . . 
    . . . 8 8 . 8 8 . . . . . . . . 
    . . . 8 8 . 8 8 . . . . . . . . 
    . . . 8 8 . 8 8 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.clothes)
pants.setPosition(134, 96)
pants.setScale(2, ScaleAnchor.Middle)
Britney = sprites.create(img`
    . . . . . . 5 . 5 . . . . . . . 
    . . . . . f 5 5 5 f f . . . . . 
    . . . . f 1 5 2 5 1 6 f . . . . 
    . . . f 1 6 6 6 6 6 1 6 f . . . 
    . . . f 6 6 f f f f 6 1 f . . . 
    . . . f 6 f f d d f f 6 f . . . 
    . . f 6 f d f d d f d f 6 f . . 
    . . f 6 f d 3 d d 3 d f 6 f . . 
    . . f 6 6 f d d d d f 6 6 f . . 
    . f 6 6 f 3 f f f f 3 f 6 6 f . 
    . . f f d 3 5 3 3 5 3 d f f . . 
    . . f d d f 3 5 5 3 f d d f . . 
    . . . f f 3 3 3 3 3 3 f f . . . 
    . . . f 3 3 5 3 3 5 3 3 f . . . 
    . . . f f f f f f f f f f . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
Britney.setPosition(138, 11)
controller.moveSprite(Britney)
Britney.setBounceOnWall(true)
theGuy = sprites.create(img`
    . . . . f f f f . . . . 
    . . f f e e e e f f . . 
    . f f e e e e e e f f . 
    f f f f 4 e e e f f f f 
    f f f 4 4 4 e e f f f f 
    f f f 4 4 4 4 e e f f f 
    f 4 e 4 4 4 4 4 4 e 4 f 
    f 4 4 f f 4 4 f f 4 4 f 
    f e 4 d d d d d d 4 e f 
    . f e d d b b d d e f . 
    . f f e 4 4 4 4 e f f . 
    e 4 f b 1 1 1 1 b f 4 e 
    4 d f 1 1 1 1 1 1 f d 4 
    4 4 f 6 6 6 6 6 6 f 4 4 
    . . . f f f f f f . . . 
    . . . f f . . f f . . . 
    `, SpriteKind.Enemy)
theGuy.setPosition(12, 98)
scene.cameraFollowSprite(Britney)
theGuy.follow(Britney, 25)
game.onUpdate(function () {
    for (let mob of sprites.allOfKind(SpriteKind.Enemy)) {
        distance = Math.sqrt((Britney.x - mob.x) * (Britney.x - mob.x) + (Britney.y - mob.y) * (Britney.y - mob.y))
        if (distance < 30) {
            music.bigCrash.play()
        }
    }
})
forever(function () {
    music.spooky.play()
})
