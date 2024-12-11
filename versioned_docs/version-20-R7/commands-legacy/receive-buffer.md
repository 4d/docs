---
id: receive-buffer
title: RECEIVE BUFFER
slug: /commands/receive-buffer
displayed_sidebar: docs
---

<!--REF #_command_.RECEIVE BUFFER.Syntax-->**RECEIVE BUFFER** ( *receiveVar* )<!-- END REF-->
<!--REF #_command_.RECEIVE BUFFER.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| receiveVar | Text | &#8592; | Variable to receive data |

<!-- END REF-->

#### Description 

<!--REF #_command_.RECEIVE BUFFER.Summary-->RECEIVE BUFFER reads the serial port that was previously opened with [SET CHANNEL](set-channel.md).<!-- END REF--> The serial port has a buffer that fills with characters until a command reads from the buffer. RECEIVE BUFFER gets the characters from the serial buffer, put them into *receiveVar* then clears the buffer. If there are no characters in the buffer, then *receiveVar* will contain nothing.

**On Windows**  
The Windows serial port buffer is limited in size to 10 Kbytes. This means that the buffer can overflow. When it is full and new characters are received, the new characters replace the oldest characters. The old characters are lost; therefore, it is essential that the buffer is read quickly when new characters are received.

**On Mac OS**  
The Mac OS X serial port buffer capacity is, in theory, unlimited (depending on the available memory). If the buffer is full and new characters are received, the new characters replace the oldest characters. The old characters are lost; therefore, it is essential that the buffer is read quickly when new characters are received.

RECEIVE BUFFER is different from [RECEIVE PACKET](receive-packet.md) in that it takes whatever is in the buffer and then immediately returns. [RECEIVE PACKET](receive-packet.md) waits until it finds a specific character or until a given number of characters are in the buffer.

During the execution of RECEIVE BUFFER, the user can interrupt the reception by pressing **Ctrl-Alt-Shift** (Windows) or **Command-Option-Shift** (Macintosh). This interruption generates an error -9994 that you can catch with an error-handling method installed using [ON ERR CALL](on-err-call.md). 

#### Example 

The project method LISTEN TO SERIAL PORT uses **RECEIVE BUFFER** to get text from the serial port and accumulate it into a an interprocess variable:

```4d
  // LISTEN TO SERIAL PORT
  // Opening the serial port
 SET CHANNEL(201;Speed 9600+Data bits 8+Stop bits one+Parity none)
 <>IP_Listen_Serial_Port:=True
 While(<>IP_Listen_Serial_Port)
    RECEIVE BUFFER($vtBuffer)
    If((Length($vtBuffer)+Length(<>vtBuffer))>MAXTEXTLEN)
       <>vtBuffer:=""
    End if
    <>vtBuffer:=<>vtBuffer+$Buffer
 End while
```

At this point, any other process can read the interprocess *◊vtBuffer* to work with the data coming from the serial port.

To stop listening to the serial port, just execute:

```4d
  // Stop listening to the serial port
 ◊IP_Listen_Serial_Port:=False
```

Note that access to the interprocess *◊vtBuffer* variable should be protected by a semaphore, so that processes will not conflict. See the command [Semaphore](semaphore.md) for more information.

#### See also 

[ON ERR CALL](on-err-call.md)  
[RECEIVE PACKET](receive-packet.md)  
[Semaphore](semaphore.md)  
[SET CHANNEL](set-channel.md)  
[USE CHARACTER SET](use-character-set.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 172 |
| Thread safe | &check; |
| Modifies variables | error |
| Forbidden on the server ||


