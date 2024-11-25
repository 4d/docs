---
id: generate-uuid
title: Generate UUID
slug: /commands/generate-uuid
displayed_sidebar: docs
---

<!--REF #_command_.Generate UUID.Syntax-->**Generate UUID** : Text<!-- END REF-->
<!--REF #_command_.Generate UUID.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| Function result | Text | &#8592; | New UUID as non-canonical text (32 characters) |

<!-- END REF-->

#### Description 

<!--REF #_command_.Generate UUID.Summary-->The Generate UUID returns a new 32-character UUID identifier in non-canonical form.<!-- END REF-->

An UUID is a 16-byte number (128 bits). It contains 32 hexadecimal characters. It can be expressed either in non-canonical form (series of 32 letters \[A-F, a-f\] and/or numbers \[0-9\], for example 550e8400e29b41d4a716446655440000) or in canonical form (groups of 8,4,4,4,12, for example 550e8400-e29b-41d4-a716-446655440000). 

In 4D, UUID numbers can be stored in fields. For more information, please refer to the *UUID format* section of the Design Reference manual.

#### Example 

Generation of a UUID in a variable: 

```4d
 var MyUUID : Text
 MyUUID:=Generate UUID
```
