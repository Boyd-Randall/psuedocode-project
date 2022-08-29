input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . # . # .
        # . . . #
        # # # # #
        # . . . #
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
})
basic.forever(function () {
    if (input.isGesture(Gesture.Shake)) {
        basic.showIcon(IconNames.Sad)
        music.playMelody("B A G F E D C - ", 1000)
    }
})
