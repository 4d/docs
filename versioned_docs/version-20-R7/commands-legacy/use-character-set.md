---
id: use-character-set
title: USE CHARACTER SET
slug: /commands/use-character-set
displayed_sidebar: docs
---

<!--REF #_command_.USE CHARACTER SET.Syntax-->**USE CHARACTER SET** ( *map* {; *mapInOut*} )<!-- END REF-->
<!--REF #_command_.USE CHARACTER SET.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| map | Text, * | &#8594;  | Name of character set  to use, or * to reset to default character set |
| mapInOut | Integer | &#8594;  | 0 = Output map 1 = Input map, If omitted, output map |

<!-- END REF-->

#### Description 

<!--REF #_command_.USE CHARACTER SET.Summary-->**USE CHARACTER SET** modifies the character set used by 4D during data transfer between the database and a document or a serial port for the current process.<!-- END REF--> Transfer operations include the import and export of text, DIF, and SYLK files. A character map also works on data transferred with [SEND PACKET](send-packet.md), [RECEIVE PACKET](receive-packet.md) (for text type packets) and [RECEIVE BUFFER](receive-buffer.md). It has no effect on transfers of data done with [SEND RECORD](send-record.md), [SEND VARIABLE](send-variable.md), [RECEIVE RECORD](receive-record.md), [SEND PACKET](send-packet.md), [RECEIVE PACKET](receive-packet.md) (for BLOB type packets) and [RECEIVE VARIABLE](receive-variable.md). 

The *map* parameter must correspond to the “IANA” name of the character set to be used, or to one of its aliases. For example, the names “iso-8859-1” or “utf-8” are both valid names, as well as the aliases “latin1” or “l1”. For more information about these names, please refer to the following address: *http://www.iana.org/assignments/character-sets*. Examples if IANA names are also provided in the description of the [CONVERT FROM TEXT](convert-from-text.md) command. 

If *mapInOut* is 0, the map is set for exporting. If *mapInOut* is 1, the map is set for importing. If you do not pass the *mapInOut* parameter, the export map is used by default.

When the *\** parameter is passed, the default character set is restored (import or export map depending on the value of *mapInOut*).   
In 4D, the default character set is UTF-8\. 

#### Example 

The following example (Unicode mode) uses the UTF-16 character set to export a text, then the default character set is restored:

```4d
 USE CHARACTER SET("UTF-16LE";0) // Use the UTF-16 'Little Endian' character set
 EXPORT TEXT([MyTable];"MyText") // Export data through the map
 USE CHARACTER SET(*;0) // Restore the default character set
```

#### System variables and sets 

The OK system variable is set to 1 if the map is loaded correctly. Otherwise, it is set to 0.

#### See also 

[EXPORT DIF](export-dif.md)  
[EXPORT SYLK](export-sylk.md)  
[EXPORT TEXT](export-text.md)  
[IMPORT DIF](import-dif.md)  
[IMPORT SYLK](import-sylk.md)  
[IMPORT TEXT](import-text.md)  
[RECEIVE BUFFER](receive-buffer.md)  
[RECEIVE PACKET](receive-packet.md)  
[SEND PACKET](send-packet.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 205 |
| Thread safe | &check; |
| Modifies variables | OK |
| Forbidden on the server ||


