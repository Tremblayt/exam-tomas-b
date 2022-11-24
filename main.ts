let infrarouge = 0
servos.P0.setRange(10, 170)
basic.forever(function () {
    infrarouge = pins.digitalReadPin(DigitalPin.P1)
    servos.P0.setAngle(150)
    if (infrarouge != 0) {
        servos.P0.setAngle(60)
    }
})
