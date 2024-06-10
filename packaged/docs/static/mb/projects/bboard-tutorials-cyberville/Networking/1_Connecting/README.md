# Connecting to the WiFi Cyberville

Cyberville is a representation of a futuristic ville developed by Brilliant Labs. In this Cyberville all citizens or b.Boards are connected to the WiFi Cyberville network. The Wifi service on Cyberville is provided by the M5 module which will create the Wifi access point called Cyberville.

## Description
Let's start 
1) Go to https://code-alpha.brilliantlabs.ca/ and create a new project using micro:bit V2,  naming it Cyber_Network.

![Step1]("docs/static/mb/projects/bboard-tutorials-cyberville/Networking/Step1.png?raw=true "Step1")

2) Within the project, use the On Start block and place it inside the Connect to WiFi: ( ) with Password ( ) block.
3) Set up the right WiFi name. For example: Cyberville. Don't use a password for this activity.
4) Create another block to disconnect from the network. You can use On logo Presed

![Step2]("docs/static/mb/projects/bboard-tutorials-cyberville/Networking/Step2.png?raw=true "Step2")

5) Turn on the b.Board and establish communication between the PC, micro:bit and b.Board.
6) Download the code and check the connection and disconnection code with the M5 module WiFi access point.

Students will see smile face if they are connected.
![Connected]("docs/static/mb/projects/bboard-tutorials-cyberville/Networking/Connected.png?raw=true "Connected")

or a sad face if they are not.
Students will see smile face if they are connected.
![Disconnected]("docs/static/mb/projects/bboard-tutorials-cyberville/Networking/Disconnected.png?raw=true "Disconnected")

## Code Example

This example is to conenect the b.Board to M5core

```blocks
let IR_Distance2 = IR_Distance.createIR_Distance(BoardID.zero, ClickID.A)
basic.forever(function () {
    if (IR_Distance2.getDistance() < 30) {
        basic.showString("Near")
    } else {
        basic.showString("Far")
    }
    basic.pause(1000)
})
```