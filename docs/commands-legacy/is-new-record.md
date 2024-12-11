---
id: is-new-record
title: Is new record
slug: /commands/is-new-record
displayed_sidebar: docs
---

<!--REF #_command_.Is new record.Syntax-->**Is new record** {( *aTable* )} : Boolean<!-- END REF-->
<!--REF #_command_.Is new record.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | Table of the record to examine or Default table if this parameter is omitted |
| Function result | Boolean | &#8592; | True if the record is being created, False otherwise |

<!-- END REF-->

#### Description 

<!--REF #_command_.Is new record.Summary-->The **Is new record** command returns True when *aTable*’s current record is being created and has not yet been saved in the current process.<!-- END REF-->You can obtain the same information by using the existing [Record number](record-number.md) command, and by testing if it returns -3\.   
However, we strongly advise you to use **Is new record** instead of [Record number](record-number.md) in this case. In fact, the **Is new record** command ensures compatibility with future versions of 4D.

**4D Server:** This command returns a different result for the On Validate form event depending on whether it is executed on 4D in local mode or 4D in remote mode. In local mode, the command returns False (the record is considered as already created). In remote mode, the command returns True because, in this case, the record is already created on the server but the information has not yet been sent to the client.

#### Example 

The following two statements are identical. The second one is strongly advised so that the code will be compatible with future versions of 4D:

```4d
 If(Record number([Table])=-3) //Not advised
  // ...
 End if
 
 If(Is new record([Table])) //Strongly advised
  // ...
 End if
```

#### See also 

[Modified record](modified-record.md)  
[Record number](record-number.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 668 |
| Thread safe | &check; |


