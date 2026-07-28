---
id: use-character-set
title: USE CHARACTER SET
slug: /commands/use-character-set
displayed_sidebar: docs
---

<!--REF #_command_.USE CHARACTER SET.Syntax-->**USE CHARACTER SET** ( *map* : Text, Operator {; *mapInOut* : Integer} )<!-- END REF-->
<!--REF #_command_.USE CHARACTER SET.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| map | Text, Operator | &#8594;  | Name of character set  to use, or * to reset to default character set |
| mapInOut | Integer | &#8594;  | 0 = Output map 1 = Input map, If omitted, output map |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|11 SQL|Modified|
|<6|Created|

</details>
</div>

## Description 

<!--REF #_command_.USE CHARACTER SET.Summary-->**USE CHARACTER SET** modifies the character set used by 4D during data transfer between the database and a document or a serial port for the current process.<!-- END REF--> Transfer operations include the import and export of text, DIF, and SYLK files. A character map also works on data transferred with [SEND PACKET](../commands/send-packet), [RECEIVE PACKET](../commands/receive-packet) (for text type packets) and [RECEIVE BUFFER](../commands/receive-buffer). It has no effect on transfers of data done with [SEND RECORD](../commands/send-record), [SEND VARIABLE](../commands/send-variable), [RECEIVE RECORD](../commands/receive-record), [SEND PACKET](../commands/send-packet), [RECEIVE PACKET](../commands/receive-packet) (for BLOB type packets) and [RECEIVE VARIABLE](../commands/receive-variable). 

The *map* parameter must correspond to the “IANA” name of the character set to be used, or to one of its aliases. For example, the names “iso-8859-1” or “utf-8” are both valid names, as well as the aliases “latin1” or “l1”. For more information about these names, please refer to the following address: *http://www.iana.org/assignments/character-sets*. Examples if IANA names are also provided in the description of the [CONVERT FROM TEXT](../commands/convert-from-text) command. 

If *mapInOut* is 0, the map is set for exporting. If *mapInOut* is 1, the map is set for importing. If you do not pass the *mapInOut* parameter, the export map is used by default.

When the *\** parameter is passed, the default character set is restored (import or export map depending on the value of *mapInOut*).   
In 4D, the default character set is UTF-8\. 

## Example 

The following example (Unicode mode) uses the UTF-16 character set to export a text, then the default character set is restored:

```4d
 USE CHARACTER SET("UTF-16LE";0) // Use the UTF-16 'Little Endian' character set
 EXPORT TEXT([MyTable];"MyText") // Export data through the map
 USE CHARACTER SET(*;0) // Restore the default character set
```

## System variables and sets 

The OK system variable is set to 1 if the map is loaded correctly. Otherwise, it is set to 0.

## See also 

[EXPORT DIF](../commands/export-dif)  
[EXPORT SYLK](../commands/export-sylk)  
[EXPORT TEXT](../commands/export-text)  
[IMPORT DIF](../commands/import-dif)  
[IMPORT SYLK](../commands/import-sylk)  
[IMPORT TEXT](../commands/import-text)  
[RECEIVE BUFFER](../commands/receive-buffer)  
[RECEIVE PACKET](../commands/receive-packet)  
[SEND PACKET](../commands/send-packet)  

## Properties

|  |  |
| --- | --- |
| Command number | 205 |
| Thread safe | yes |
| Modifies variables | OK |


