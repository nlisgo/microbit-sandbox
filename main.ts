input.onButtonPressed(Button.A, function () {
    limit += 1
    if (limit > 6) {
        limit = 2
    }
    basic.clearScreen()
    basic.showString("New limit: " + limit)
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    basic.showString("" + (randint(1, limit)))
})
let limit = 0
limit = 6
