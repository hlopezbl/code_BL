# Find bBoard MAC and IP Address.
The Media Access Control Address or MAC Address is a 12-digit hexadecimal number assigned to each device connected to the network. The MAC Address is unique. Each b.Board and M5 module in Cyber Security Kit has one.

The IP address is an Internet Protocol number used in networks for devices to share their locations, it is 32 bits long. It can be private or public.
The M5 module will assign an IP address to each b.board on Cyberville because it will be our access point.

As well as the MAC and IP addresses working together in the network, one is identifying while the other is locating.

## Description
This activity consists of finding the MAC and IP address in each bBoard connected to Cyberville. Students will publish it on a label or Cyberville ID card. Therefore, students can identify these addresses as unique and owned in Cyberville when they make comparisons with each other, and it is useful to recognize them in the network.

Additionally, the teachers and students should publish the MAC and IP addresses on the Cyberville ID  card:

Teacher ID card
https://drive.google.com/file/d/1Z4jSVrQQ4GE0WAjxjNaPhLPh601Iy6dM/view?usp=drive_link

Student ID card
https://drive.google.com/file/d/1A03JHkK8quWrVk7ve4wsLASVxFN5EdCK/view?usp=drive_link

Example:
![ID]("docs/static/mb/projects/bboard-tutorials-cyberville/Networking/2_MAC_IP/ID.png?raw=true "ID")

Let's start
1) Go to https://code-alpha.brilliantlabs.ca/ and create a new project or use the Cyber_Network project created in activity A).
2) Within the project, use the on button A pressed block.
3) Replace the "Hello!" text in the show string block with the Get the b.Board´s MAC Address block. it is located under b.Board blocks in CyberSecurity 

![Step3]("docs/static/mb/projects/bboard-tutorials-cyberville/Networking/2_MAC_IP/Step3.png?raw=true "Step3")

4) Add a new block on button A pressed, but this time select on button B pressed.
5) Replace the "Hello!" text in the show string block with the Get the b.Board´s IP Address block. It is located under b.Board blocks in CyberSecurity.

![Step4]("docs/static/mb/projects/bboard-tutorials-cyberville/Networking/2_MAC_IP/Step4.png?raw=true "Step4")

6) Turn on the b.Board and establish communication between the PC, micro:bit and b.Board.
7) Download the code to micro:bit.
8) The student's will now display their unique MAC Address on micro:bit screen pressing button A, and the IP Address pressing button B.

The MAC address will be displayed on Micro:bit display, similar to this:
My MAC: 34:ab:95:98:d1:f8
And the IP address will be displayed on Micro:bit display, similar to this:
My IP: “192.168.4.2”
Students can also see the MAC and IP address on the Consola Device

![Step5]("docs/static/mb/projects/bboard-tutorials-cyberville/Networking/2_MAC_IP/Step5.png?raw=true "Step5")


## Code Example

You can download the code for this activity here:
https://alpha.brilliantlabs.ca/documents/cybersec/Cyber-Security-Activity-7B.hex

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
})
```