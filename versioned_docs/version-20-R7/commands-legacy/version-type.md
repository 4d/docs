---
id: version-type
title: Version type
slug: /commands/version-type
displayed_sidebar: docs
---

<!--REF #_command_.Version type.Syntax-->**Version type**  : Integer<!-- END REF-->
<!--REF #_command_.Version type.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| Function result | Integer | &#8592; | Information about the version type (bitfield) |

<!-- END REF-->

#### Description 

<!--REF #_command_.Version type.Summary-->The Version type command returns a numeric value that denotes the type of 4D or 4D Server version that you are running.<!-- END REF--> 4D provides the following predefined constants, found in the *4D Environment* theme:

| Constant           | Type    | Value | Comment                                                 |
| ------------------ | ------- | ----- | ------------------------------------------------------- |
| 64 bit version     | Integer | 1     |                                                         |
| Demo version       | Integer | 0     |                                                         |
| Merged application | Integer | 2     | Version is an application merged with 4D Volume Desktop |

**Note:** In current versions of 4D, the demo mode is not available.

Version type returns a value in the form of a *bit field*; it is necessary to use bitwise operators to interpret it (see the example).

#### Example 

This test lets you run different code depending on whether the version is a merged application or a database opened by 4D / 4D Server:

```4d
 If(Version type?? Merged application)
  // We are in a merged application
 Else
  // We are in a database executed by 4D
 End if
```

#### See also 

[Application type](application-type.md)  
[Application version](application-version.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 495 |
| Thread safe | &check; |
| Forbidden on the server ||


