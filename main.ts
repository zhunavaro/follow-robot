basic.showLeds(`
    . # . # .
    . # # # .
    # . # . #
    . # . # .
    . # # # .
    `)
basic.forever(function () {
    if (mbit_小车类.Ultrasonic_Car() < 18) {
        mbit_小车类.CarCtrlSpeed2(mbit_小车类.CarState.Car_Run, 54, 50)
    } else {
        mbit_小车类.CarCtrl(mbit_小车类.CarState.Car_Stop)
    }
})
