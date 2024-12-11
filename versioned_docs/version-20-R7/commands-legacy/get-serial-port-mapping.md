---
id: get-serial-port-mapping
title: GET SERIAL PORT MAPPING
slug: /commands/get-serial-port-mapping
displayed_sidebar: docs
---

<!--REF #_command_.GET SERIAL PORT MAPPING.Syntax-->**GET SERIAL PORT MAPPING** ( *numArray* ; *nameArray* )<!-- END REF-->
<!--REF #_command_.GET SERIAL PORT MAPPING.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| numArray | Array integer | &#8592; | Array of port numbers |
| nameArray | Text array | &#8592; | Array of port names |

<!-- END REF-->

#### Description 

<!--REF #_command_.GET SERIAL PORT MAPPING.Summary-->The **GET SERIAL PORT MAPPING** command returns two arrays, *numArray* and *nameArray*, containing the serial port numbers and the serial port names of the current machine.<!-- END REF--> 

This command is useful under Mac OS X, where the operating system dynamically allocates the port number when using a USB serial adapter. You can address any extended serial port using its name (static), regardless of its actual number.

**Note:** This command does not return meaningful values with standard ports. If you want to address a standard port, you must pass its value (0 or 1) directly using the [SET CHANNEL](set-channel.md) command (former operation of 4D). 

#### Example 

This project method can be used to address the same serial port (without protocol), regardless of the number that has been assigned to it: 

```4d
 ARRAY TEXT($arrPortNames;0)
 ARRAY LONGINT($arrPortNums;0)
 var $vPortNum;$vFinalPortNum : Integer
 
  //Find out the current numbers of the serial ports
 GET SERIAL PORT MAPPING($arrPortNums;$arrPortNames)
 $vPortNum:=Find in array($arrPortNames;vPortName)
  // vPortName contains the name of the port to be used; it may come from a dialog box,
  // a value stored in a field, etc.
 If(arrPortNums{$vPortNum}=0)
    $vFinalPortNum:=0 //special case under Mac OS X
 Else
    $vFinalPortNum:=arrPortNums{$vPortNum}+100
 End if
 SET CHANNEL($vFinalPortNum;params) //params contains the communication parameters
 ... //Carry out the desired operations
 SET CHANNEL(11) //Closing of port
```

#### See also 

[SET CHANNEL](set-channel.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 909 |
| Thread safe | &check; |
| Forbidden on the server ||


