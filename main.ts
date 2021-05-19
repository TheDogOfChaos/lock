let var1 = 0
while (var1 == 0) {
    basic.showLeds(`
        . # # # .
        . # . # .
        . # . # .
        # # # # #
        # # # # #
        `)
    if (input.buttonIsPressed(Button.A) && input.buttonIsPressed(Button.B)) {
        basic.showLeds(`
            . # # # .
            . # . # .
            . . . # .
            # # # # #
            # # # # #
            `)
        var1 = 1
    }
}
