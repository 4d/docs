---
id: receive-packet
title: RECEIVE PACKET
slug: /commands/receive-packet
displayed_sidebar: docs
---

<!--REF #_command_.RECEIVE PACKET.Syntax-->**RECEIVE PACKET** ( {*docRef* ;} *receiveVar* ; stopChar | numBytes )<!-- END REF-->
<!--REF #_command_.RECEIVE PACKET.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| docRef | Time | &#8594;  | Document reference number, or Current channel (serial port or document) |
| receiveVar | Text, Blob | &#8592; | Variable to receive data |
| stopChar &#124; numBytes | String, Longint | &#8594;  | Character(s) at which to stop receiving, or Number of bytes to receive |

<!-- END REF-->

#### Description 

<!--REF #_command_.RECEIVE PACKET.Summary-->**RECEIVE PACKET** reads characters from a serial port or from a document.<!-- END REF-->

If *docRef* is specified, this command retrieves data from a document opened using [Open document](open-document.md), [Create document](create-document.md) or [Append document](append-document.md). If *docRef* is omitted, this command retrieves data from the serial port or the document opened using [SET CHANNEL](set-channel.md).

Whatever the source, the characters read are returned in *receiveVar*, which must be a Text, String or BLOB variable. If the characters have been sent by the [SEND PACKET](send-packet.md) command, the type must correspond to that of the packet sent. 

**Notes:**

* When the package received is of the BLOB type, the command does not take into account any character set defined by the [USE CHARACTER SET](use-character-set.md) command. The BLOB is returned without any modification.
* When the package received is of the Text type, the RECEIVE PACKET command supports Byte Order Marks (BOMs). In this case, if the current character set is of the Unicode type (UTF-8, UTF-16 or UTF-32), 4D attempts to identify a BOM among the first bytes received. If one is detected, it is filtered out of the *receiveVar* variable and 4D uses the character set that it defines instead of the current character set.

To read a particular number of characters, pass this number in *numBytes*. If the *receiveVar* variable is of the Text type, in a single call you can read up to 2 GB of text (theoretical value).

To receive data until a particular string (composed of one or more characters) is encountered, pass this string in *stopChar* (the string is not returned in *receiveVar*).

In this case, if the character string specified by *stopChar* is not found:

* When RECEIVE PACKET is reading a document, it will stop reading at the end of the document.
* When RECEIVE PACKET is reading from a serial port, it will attempt to wait indefinitely until the timeout (if any) has elapsed (see [SET TIMEOUT](set-timeout.md)) or until the user interrupts the reception (see below).

During execution of RECEIVE PACKET, the user can interrupt the reception by pressing **Ctrl-Alt-Shift** (Windows) or **Command-Option-Shift** (Macintosh). This interruption generates an error -9994 that you can catch with an error-handling method installed using [ON ERR CALL](on-err-call.md). Usually, you will only have to handle interruption of a reception when communicating over a serial port.

When reading a document, the first RECEIVE PACKET begins reading at the beginning of the document. The reading of each subsequent packet begins at the character following the last byte read.

**Note:** This command is useful for document opened with [SET CHANNEL](set-channel.md). On the other hand, for a document opened with [Open document](open-document.md), [Create document](create-document.md) or [Append document](append-document.md), you can use the [Get document position](get-document-position.md) and [SET DOCUMENT POSITION](set-document-position.md) commands to get and change the location in the document where the next writing ([SEND PACKET](send-packet.md)) or reading (RECEIVE PACKET) will occur.

When attempting to read past the end of a file, RECEIVE PACKET will return with the data read up to that point and the variable OK will be set to 1\. Then, the next RECEIVE PACKET will return an empty string and set the OK variable to zero.

#### Example 1 

The following example reads 20 characters from a serial port into the variable *getTwenty*:

```4d
 RECEIVE PACKET(getTwenty;20)
```

#### Example 2 

The following example reads data from the document referenced by the variable *myDoc* into the variable *vData*. It reads until it encounters a carriage return:

```4d
 RECEIVE PACKET(myDoc;vData;Char(Carriage return))
```

#### Example 3 

The following example reads data from the document referenced by the variable *myDoc* into the variable *vData*. It reads until it encounters the *</TD>* (end of table cell) HTML tag:

```4d
 RECEIVE PACKET(myDoc;vData;"")
```

#### Example 4 

The following example reads data from a document into fields. The data is stored as fixed-length fields. The method calls a subroutine to strip any trailing spaces (spaces at the end of the string). The subroutine follows the method: 

```4d
 $vhDocRef :=Open document("";"TEXT") // Open a TEXT document
 If(OK=1) // If the document was opened
    Repeat // Loop until no more data
       RECEIVE PACKET($vhDocRef;$Var1;15) // Read 15 characters
       RECEIVE PACKET($vhDocRef;$Var2;15) // Do same as above for second field
       If(($Var1#"")|($Var2#"")) // If at least one of the fields is not empty
          CREATE RECORD([People]) // Create a new record
          [People]First :=Strip($Var1) // Save the first name
          [People]Last :=Strip($Var2) // Save the last name
          SAVE RECORD([People]) // Save the record
       End if
    Until(OK=0)
    CLOSE DOCUMENT($vhDocRef) // Close the document
 End if
```

The spaces at the end of the data are stripped by the following method, called Strip:

```4d
 For($i;Length($1);1;-1) // Loop from end of string to start
    If($1[[$i]]#" ") // If it is not a space…
       $i :=-$i  // Force the loop to end
    End if
 End for
 $0:=Delete string($1;-$i;Length($1)) // Delete the spaces
```

#### System variables and sets 

After a call to **RECEIVE PACKET**, the OK system variable is set to 1 if the packet is received without error. Otherwise, the OK system variable is set to 0.

#### See also 

[Get document position](get-document-position.md)  
[RECEIVE BUFFER](receive-buffer.md)  
[SEND PACKET](send-packet.md)  
[SET DOCUMENT POSITION](set-document-position.md)  
[SET TIMEOUT](set-timeout.md)  
[USE CHARACTER SET](use-character-set.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 104 |
| Thread safe | &check; |
| Modifies variables | OK |


