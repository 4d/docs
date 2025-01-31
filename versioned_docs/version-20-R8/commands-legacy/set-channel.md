---
id: set-channel
title: SET CHANNEL
slug: /commands/set-channel
displayed_sidebar: docs
---

<!--REF #_command_.SET CHANNEL.Syntax-->**SET CHANNEL** ( *port* ; *settings* ) <br/>
**SET CHANNEL** ( *operation* ; *document* )<!-- END REF-->
<!--REF #_command_.SET CHANNEL.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| port | Integer | &#8594;  | Serial port number |
| settings | Integer | &#8594;  | Serial port settings |
| operation | Integer | &#8594;  | Document operation to perform |
| document | Text | &#8594;  | Document name |

<!-- END REF-->

#### Description 

<!--REF #_command_.SET CHANNEL.Summary-->The **SET CHANNEL** command opens a serial port or a document.<!-- END REF--> You can open only one serial port or one document at a time with this command. To close an opened serial port, pass SET CHANNEL (11).

**Historical Note:** This command was originally the first 4D command used for working with serial ports and documents on disks. Since that time, new commands have been added. Today, you will typically work with documents on disk using the commands [Open document](open-document.md), [Create document](create-document.md) and [Append document](append-document.md). With these commands, you can read and write characters to and from documents using [Create document](create-document.md) or [RECEIVE PACKET](receive-packet.md) (these commands work with **SET CHANNEL**, too). However, if you want to use the commands [SEND VARIABLE](send-variable.md), [RECEIVE VARIABLE](receive-variable.md), [SEND RECORD](send-record.md) and [RECEIVE RECORD](receive-record.md), you must use SET CHANNEL to access the document on disk.

The description of SET CHANNEL is composed of two sections:

* Working with Serial Ports
* Working with Documents

#### Working with Serial Ports: SET CHANNEL (port;settings) 

The first form of the **SET CHANNEL** command opens a serial port, setting the protocol and other port information. Data can be sent with [SEND PACKET](send-packet.md), [SEND RECORD](send-record.md) or [SEND VARIABLE](send-variable.md), and received with [RECEIVE BUFFER](receive-buffer.md), [RECEIVE PACKET](receive-packet.md), [RECEIVE VARIABLE](receive-variable.md) or [RECEIVE RECORD](receive-record.md).

 The first parameter, *port*, selects the port and the protocol. You can address up to 99 serial ports (one at a time).   
The following table lists the values for *port*:

| **Value for port** | **Description**                                                              |
| ------------------ | ---------------------------------------------------------------------------- |
| 0                  | Printer port (Macintosh) or COM2 (PC) with no protocol                       |
| 1                  | Modem port (Macintosh) or COM1 (PC) with no protocol                         |
| 20                 | Printer port (Macintosh) or COM2 (PC) with sofware protocol such as XON/XOFF |
| 21                 | Modem port (Macintosh) or COM1 (PC) with sofware protocol such as XON/XOFF   |
| 30                 | Printer port (Macintosh) or COM2 (PC) with hardware protocol such as RTS/CTS |
| 31                 | Modem port (Macintosh) or COM1 (PC) with hardware protocol such as RTS/CTS   |
| 101 to 199         | Serial communication with no protocol                                        |
| 201 to 299         | Serial communication with software protocol such as XON/XOFF                 |
| 301 to 399         | Serial communication with hardware protocol such as RTS/CTS                  |

**Important:** The value you pass in *port* must refer to an existing serial COM port recognized by the operating system. For example, in order to be able to use the values 101, 103 and 125, the serial ports COM1, COM3 and COM25 must have been set up correctly.

##### Note on serial ports 

In a standard configuration Mac OS and Windows support two serial ports: on Mac OS, the modem port and the printer port; on Windows, the COM1 and COM2 ports. However, additional serial ports can be added by the use of extension boards. Originally, 4D only adressed two standard serial ports and it was only later that the support of additional ports was implemented. For compatibility reasons, both addressing systems were kept.  

* If you want to address a standard serial port (printer/COM2 or modem/COM1), you can either pass in the *port* parameter one of the following values 0, 1, 20, 21, 30 and 31 (that corresponds to the old addressing method), or a value greater than 100 (please see the following explanation).
* If you want to address additional serial ports, you need to pass the value N+100 (where N is the value of the port to address). You may also consider adding 100 or 200 to the value mentioned above (N+100), if you want to select respectively a software or a hardware protocol.

##### Example 1 

If you want to use the printer/COM2 port with no protocol, you can use one of the following syntaxes:

```4d
 SET CHANNEL(0;param)
```

or

```4d
 SET CHANNEL(102;param)
```

##### Example 2 

If you want to use the modem/COM1 port with the XON/XOFF protocol, you can use one of the following syntaxes:

```4d
 SET CHANNEL(21;param)
```

or

```4d
 SET CHANNEL(201;param)
```

##### Example 3 

If you want to use the COM 25 port with the RTS/CTS protocol, you need to use the following syntax: 

```4d
 SET CHANNEL(325;param)
```
  
  
The *settings* parameter sets the speed, number of data bits, number of stop bits, and parity. You determine the value for *settings* by adding the speed, data bits, stop bits, and parity values as listed in the following table. For example, to set 1200 baud, 8 data bits, 1 stop bit, and no parity, you would add 94 + 3072 + 16384 + 0 = 19550\. You would then use 19550 as the value of the *setup* parameter.

| Control |Value to accumulate in settings parameter   | Description | 
|------------------------ | --------------- | ---- |
| Speed                     | 380             | 300  |
| (in baud)                 | 189             | 600  |
| | 94                      | 1200            |      
| | 62                      | 1800            |      
| | 46                      | 2400            |      
| | 30                      | 3600            |      
| | 22                      | 4800            |      
| | 14                      | 7200            |      
| | 10                      | 9600            |      
| | 4                       | 19200           |      
| | 2                       | 28800           |      
| | 1                       | 38400           |      
| | 0                       | 57600           |      
| | 1022                    | 115200          |      
| | 1021                    | 230400          |      
| Data bits                 | 0               | 5    |
| | 2048                    | 6               |      
| | 1024                      | 7               |      
| | 3072                      | 8               |      
| Stop bits                 | 16384           | 1    |
| | –32768                    | 1.5             |      
| | –16384                    | 2               |      
| Parity                    | 0               | None |
||  4096                      | Odd             |      
||  12288                     | Even            |      

**Tip:** The various numeric values to be accumulated and passed in *port* and *settings* (but not including the values for COM1...COM99) are available as predefined constants in the theme *Communications* within the Design environment Explorer windows. For COM1...COM99, use numeric literals.

#### Working with Documents on Disk: SET CHANNEL(operation;document) 

The second form of the **SET CHANNEL** command allows you to create, open, and close a document. Unlike the *System Documents* commands, it can open only one document at a time. The document can be read from or written to.

The *operation* parameter specifies the operation to be performed on the document specified by *document*. The following table lists the values of *operation* and the resulting operation with different values for *document*. The first column lists the allowed values for *operation*. The second column lists the allowed values for *document*. The third column lists the resulting operation. 

For example, to display an Open File dialog box to open a text file, you would use the following line:

```4d
 SET CHANNEL(13;"")
```

| **Operation**                                                      | **Document**      | **Result**                                                                            |
| ------------------------------------------------------------------ | ----------------- | ------------------------------------------------------------------------------------- |
| 10                                                                 | Text            | Opens the document specified by String. If the document doesn’t exist, the document is opened and created. |                   |                                                                                       |
| 10                                                                 | "" (empty string) | Displays the Open File dialog box to open a file. All file types are displayed.                                      |                   |                                                                                       |
| 11                                                                 | none              | Closes an open file.                                                                  |
| 12                                                                 | "" (empty string) | Displays the Save File dialog box to create a new file.                               |
| 13                                                                 | "" (empty string) | Displays the Open File dialog box to open a file. Only text file types are displayed. |

All of the operations in this table set the Document system variable if appropriate. They also set the OK system variable to 1 if the operation was successful. Otherwise, the OK system variable is set to 0.

##### Example 4 

See examples for the [RECEIVE BUFFER](receive-buffer.md), [SET TIMEOUT](set-timeout.md) and [RECEIVE RECORD](receive-record.md) commands.

#### See also 

[Append document](append-document.md)  
[Communications](/category/commands/Communications)  
[Create document](create-document.md)  
[GET SERIAL PORT MAPPING](get-serial-port-mapping.md)  
[Open document](open-document.md)  
[RECEIVE BUFFER](receive-buffer.md)  
[RECEIVE PACKET](receive-packet.md)  
[RECEIVE RECORD](receive-record.md)  
[RECEIVE VARIABLE](receive-variable.md)  
[SEND PACKET](send-packet.md)  
[SEND RECORD](send-record.md)  
[SEND VARIABLE](send-variable.md)  
[SET TIMEOUT](set-timeout.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 77 |
| Thread safe | &check; |
| Modifies variables | OK, Document |


