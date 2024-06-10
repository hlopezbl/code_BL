# Take a role in Cyberville
To complete this activity "Take a role in Cyberville", you need to belong to Cyberville to protect it from cyber attacks adquiring a role.

## Description
Let's start 
1) Fill out your Cyberville ID Card with names, MAC addresses, and IP addresses.
2) Acquire an identity by choosing a role within Cyberville.
3) Develop a code where your icon is always displayed on the micro:bit screen to indicate that you are connected to Wi-Fi in Cyberville.
4) Program the micro:bit to play sound or  start melody (You can find it in music blocks) if you are not connected in Cyberville.

Remember, your role in Cyberville could be one of those important entities. 
![Rol]("docs/static/mb/projects/bboard-tutorials-cyberville/Networking/Rol.png?raw=true "Rol")

It should look like this for someone who chooses WATER, and it is connected..

![Step6]("docs/static/mb/projects/bboard-tutorials-cyberville/Networking/Step6.png?raw=true "Step6")

This activity concludes when each b.Board in the classroom is successfully linked to Cyberville and assigned a role. At this point, the teacher should simulate a cyber attack!!!  by disabling the M5 module, a WiFi provider for Cyberville. This action will result in the disconnection of all devices in Cyberville.

## Code Example

You can download the code for this activity here:
https://alpha.brilliantlabs.ca/documents/cybersec/Cyber-Security-Activity-7C.hex

Or use this example is to conenect the b.Board to M5core

```blocks
input.onButtonPressed(Button.A, function () {
    basic.showString(Cybersec.getMACaddressbBoard())
})
input.onButtonPressed(Button.B, function () {
    basic.showString(Cybersec.getIPaddressbBoard())
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    Cybersec.Disconnect()
    basic.showIcon(IconNames.Sad)
})
Cybersec.WifiConnect("Cyberville", "")
basic.forever(function () {
    if (Cybersec.WiFi_Connected()) {
        basic.showIcon(IconNames.Square)
    } else {
        soundExpression.sad.play()
        basic.showIcon(IconNames.Sad)
    }
})
```