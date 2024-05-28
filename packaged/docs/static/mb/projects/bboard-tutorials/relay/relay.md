# INTRO TO THE RELAY Clickboard

![Relay](https://github.com/Brilliant-Labs/bboard-tutorials-v3/blob/master/relay/relay.png?raw=true "Relay")

## Description

Controls a wide range of higher
powered devices. Have a battery
powered toy that you want to turn
into a smart device? This board
will allow that to happen.

PLEASE EXERCISE CAUTION
WHEN DEALING WITH HIGH
VOLTAGES. THIS SHOULD BE
USED UNDER STRICT ADULT
SUPERVISION.

![Relay](https://github.com/Brilliant-Labs/bboard-tutorials-v3/blob/master/relay/relay-click.jpg?raw=true "Relay Click")

## Code Example

This example has the Relay Click plugged into to MikroBus #1 on the b.Board.

Locate the ``|| Relay ||`` blocks


```blocks
input.onButtonPressed(Button.A, function () {
    Relay2.relayOnOff(Relay.onOff.On, Relay.relay.Relay1)
})
input.onButtonPressed(Button.B, function () {
    Relay2.relayOnOff(Relay.onOff.Off, Relay.relay.Relay1)
})
let Relay2: Relay.Relay = null
Relay2 = Relay.createRelay(BoardID.zero, ClickID.A)
```

## Project Idea

HACK YOUR TOY

Complete or break any
circuit with the Relay Click
BoardTM. This nifty board acts
as an on/off switch for all
your circuitry needs.
Combine it with a WiFi BLE
Click BoardTM to offer remote
control wherever you have
internet access.


![Relay](https://github.com/Brilliant-Labs/bboard-tutorials-v3/blob/master/relay/relayclick-gif.gif?raw=true "Let's Keep things nifty")