---
id: generate-uuid
title: Generate UUID
displayed_sidebar: docs
---

<!--REF #_command_.Generate UUID.Syntax-->**Generate UUID** -> Function result<!-- END REF-->
<!--REF #_command_.Generate UUID.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| Function result | String | <- | New UUID as non-canonical text (32 characters) |

<!-- END REF-->

#### Description 

<!--REF #_command_.Generate UUID.Summary-->The Generate UUID returns a new 32-character UUID identifier in non-canonical form.<!-- END REF-->

An UUID is a 16-byte number (128 bits). It contains 32 hexadecimal characters. It can be expressed either in non-canonical form (series of 32 letters \[A-F, a-f\] and/or numbers \[0-9\], for example 550e8400e29b41d4a716446655440000) or in canonical form (groups of 8,4,4,4,12, for example 550e8400-e29b-41d4-a716-446655440000). 

In 4D, UUID numbers can be stored in fields. For more information, please refer to the [UUID format](/4Dv20R6/4D/20-R6/Field-properties.300-7003391.en.html#106190) section of the Design Reference manual.

#### Example 

Generation of a UUID in a variable: 

```4d
 C_TEXT(MyUUID)

 MyUUID:=Generate UUID
```
