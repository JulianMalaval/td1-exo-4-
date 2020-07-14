input.onButtonPressed(Button.A, function () {
    if (0 < posX) {
        led.unplot(posX, posY)
        posX += -1
        led.plot(posX, posY)
    } else if (posX == 0 && posY == 0) {
        led.unplot(posX, posY)
        posX = 4
        posY = 4
        led.plot(posX, posY)
    } else if (posX == 0) {
        led.unplot(posX, posY)
        posX += 4
        posY += -1
        led.plot(posX, posY)
    }
})
input.onButtonPressed(Button.B, function () {
    if (posX < 4) {
        led.unplot(posX, posY)
        posX += 1
        led.plot(posX, posY)
    } else if (posX == 4 && posY == 4) {
        led.unplot(posX, posY)
        posX = 0
        posY = 0
        led.plot(posX, posY)
    } else if (posX == 4) {
        led.unplot(4, posY)
        posX += -4
        posY += 1
        led.plot(posX, posY)
    }
})
let posY = 0
let posX = 0
posX = 2
posY = 0
led.plot(posX, 0)
basic.forever(function () {
	
})
