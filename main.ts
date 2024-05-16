let max = 0
let random_num = 0
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    basic.showString("Reset")
    max = 0
})
input.onButtonPressed(Button.A, function () {
    max = max + 1
    basic.showNumber(max)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    random_num = randint(0, max)
    for (let index = 0; index < 2; index++) {
        basic.showNumber(random_num)
    }
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    max = max + 10
    basic.showNumber(max)
    basic.clearScreen()
})
