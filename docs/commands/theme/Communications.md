---
id: Communications
title: Communications
---
||
|---|
|[**GET SERIAL PORT MAPPING** ( *numArray* ; *nameArray* )](../../commands-legacy/get-serial-port-mapping)<br/>The **GET SERIAL PORT MAPPING** command returns two arrays, *numArray* and *nameArray*, containing the serial port numbers and the serial port names of the current machine.|
|[**RECEIVE BUFFER** ( *receiveVar* )](../../commands-legacy/receive-buffer)<br/>RECEIVE BUFFER reads the serial port that was previously opened with [SET CHANNEL](set-channel.md).|
|[**RECEIVE PACKET** ( {*docRef* ;} *receiveVar* ; stopChar | numBytes )](../../commands-legacy/receive-packet)<br/>**RECEIVE PACKET** reads characters from a serial port or from a document.|
|[**RECEIVE RECORD** {( *aTable* )}](../../commands-legacy/receive-record)<br/>RECEIVE RECORD receives a record into *table* from the serial port or document opened by the [SET CHANNEL](set-channel.md) command.|
|[**RECEIVE VARIABLE** ( *variable* )](../../commands-legacy/receive-variable)<br/>**RECEIVE VARIABLE** receives *variable*, which was previously sent by [SEND VARIABLE](send-variable.md) from the document or serial port previously opened by [SET CHANNEL](set-channel.md).|
|[**SEND PACKET** ( {*docRef* ;} *packet* )](../../commands-legacy/send-packet)<br/>**SEND PACKET** sends a packet to a serial port or to a document.|
|[**SEND RECORD** {( *aTable* )}](../../commands-legacy/send-record)<br/>**SEND RECORD** sends the current record of *aTable* to the serial port or document opened by the [SET CHANNEL](set-channel.md) command.|
|[**SEND VARIABLE** ( *variable* )](../../commands-legacy/send-variable)<br/>SEND VARIABLE sends *variable* to the document or serial port previously opened by [SET CHANNEL](set-channel.md).|
|[**SET CHANNEL** ( *port* ; *settings* ) <br/>
**SET CHANNEL** ( *operation* ; *document* )](../../commands-legacy/set-channel)<br/>The **SET CHANNEL** command opens a serial port or a document.|
|[**SET TIMEOUT** ( *seconds* )](../../commands-legacy/set-timeout)<br/>**SET TIMEOUT** specifies how much time a serial port command has to complete.|
|[**USE CHARACTER SET** ( *map* {; *mapInOut*} )](../../commands-legacy/use-character-set)<br/>**USE CHARACTER SET** modifies the character set used by 4D during data transfer between the database and a document or a serial port for the current process.|
