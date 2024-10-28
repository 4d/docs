---
id: send-packet
title: SEND PACKET
slug: /commands/send-packet
displayed_sidebar: docs
---

<!--REF #_command_.SEND PACKET.Syntax-->**SEND PACKET** ( {*docRef* ;} *packet* )<!-- END REF-->
<!--REF #_command_.SEND PACKET.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| docRef | Time | &#8594;  | Document reference number, or Current channel (serial port or document) |
| packet | Text, Blob | &#8594;  | String or BLOB to be sent |

<!-- END REF-->

#### Description 

<!--REF #_command_.SEND PACKET.Summary-->**SEND PACKET** sends a packet to a serial port or to a document.<!-- END REF--> If *docRef* is specified, the packet is written to the document referenced by *docRef*. If *docRef* is not specified, the packet is written to the serial port or document previously opened by the [SET CHANNEL](set-channel.md) command. 

A *packet* is just a piece of data, generally a string of characters.  
You can also pass a BLOB in *packet*. This allows you to bypass the constraints related to encoding for characters sent in text mode (see example 2).

**Note:** When you pass a BLOB in *packet*, the command does not take into account any character set defined by the [USE CHARACTER SET](use-character-set.md) command. The BLOB is sent without any modification.

Before you use SEND PACKET, you must open a serial port or a document with [SET CHANNEL](set-channel.md), or open a document with one of the document commands.

When writing to a document, the first SEND PACKET begins writing at the beginning of the document unless the document was opened with [USE CHARACTER SET](use-character-set.md). Until the document is closed, each subsequent packet is appended to any previously sent packets.

**Note:** This command is useful for a document opened with [SET CHANNEL](set-channel.md). On the other hand, for a document opened with [Open document](open-document.md), [Create document](create-document.md) or [Append document](append-document.md), you can use the commands [Get document position](get-document-position.md) and [SET DOCUMENT POSITION](set-document-position.md) to get and change the location in the document where the next writing (SEND PACKET) or reading ([RECEIVE PACKET](receive-packet.md)) will occur.

#### Example 1 

The following example writes data from fields to a document. It writes the fields as fixed-length fields. Fixed-length fields are always of a specific length. If a field is shorter than the specified length, the field is padded with spaces. (That is, spaces are added to make up the specified length.) Although the use of fixed-length fields is an inefficient method of storing data, some computer systems and applications still use them:

```4d
 $vhDocRef :=Create document("") // Create a document
 If(OK=1) // Was the document created?
    For($vlRecord;1;Records in selection([People])) // Loop once for each record
  // Send a packet. Create the packet from a string of 15 spaces containing the first name field
       SEND PACKET($vhDocRef;Change string(15*Char(SPACE);[People]First;1))
  // Send a second packet. Create the packet from a string of 15 spaces containing the last name field
  // This could be in the first SEND PACKET, but is separated for clarity
       SEND PACKET($vhDocRef;Change string(15*Char(SPACE);[People]Last;1))
       NEXT RECORD([People])
    End for
  // Send a Char(26), which is used as an end-of-file marker for some computers
    SEND PACKET($vhDocRef;Char(SUB ASCII code))
    CLOSE DOCUMENT($vhDocRef) // Close the document
 End if
```

#### Example 2 

This example illustrates the sending and retrieval of extended characters via a BLOB in a document:

```4d
 var $send_blob : Blob
 var $receive_blob : Blob
 TEXT TO BLOB("âzértÿ";$send_blob;UTF8 text without length)
 SET BLOB SIZE($send_blob;16;255)
 $send_blob{6}:=0
 $send_blob{7}:=1
 $send_blob{8}:=2
 $send_blob{9}:=3
 $send_blob{10}:=0
 $vlDocRef:=Create document("blob.test")
 If(OK=1)
    SEND PACKET($vlDocRef;$send_blob)
    CLOSE DOCUMENT($vlDocRef)
 End if
 $vlDocRef:=Open document(document)
 If(OK=1)
    RECEIVE PACKET($vlDocRef;$receive_blob;65536)
    CLOSE DOCUMENT($vlDocRef)
 End if
```

#### See also 

[Get document position](get-document-position.md)  
[RECEIVE PACKET](receive-packet.md)  
[SET DOCUMENT POSITION](set-document-position.md)  