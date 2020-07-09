input.onButtonPressed(Button.A, function () {
    if (0 < posX) {
        led.unplot(posX, 0)
        posX += -1
        led.plot(posX, 0)
    }
})
input.onButtonPressed(Button.B, function () {
    if (posX < 4) {
        led.unplot(posX, 0)
        posX += 1
        led.plot(posX, 0)
    }
})
let posX = 0
posX = 2
led.plot(posX, 0)
basic.forever(function () {
	
})
