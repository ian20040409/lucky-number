let max = 0
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
    basic.showNumber(randint(0, max))
})
input.onButtonPressed(Button.B, function () {
    max = max + 10
    basic.showNumber(max)
    basic.clearScreen()
})
