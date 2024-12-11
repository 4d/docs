---
id: copy-set
title: COPY SET
slug: /commands/copy-set
displayed_sidebar: docs
---

<!--REF #_command_.COPY SET.Syntax-->**COPY SET** ( *srcSet* ; *dstSet* )<!-- END REF-->
<!--REF #_command_.COPY SET.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| srcSet | Text | &#8594;  | Source set name |
| dstSet | Text | &#8594;  | Destination set name |

<!-- END REF-->

#### Description 

<!--REF #_command_.COPY SET.Summary-->The COPY SET command copies the contents of the set *srcSet* into the set *dstSet*.<!-- END REF-->

Each of these sets can be of the process, interprocess or local/client type. The two sets do not have to be the same type (as shown in the examples below), so long as they are both visible on the machine. For more information about this point, refer to "*Visibility of Sets*".

#### Example 1 

The following example, in Client/Server, copies the local set "*$SetA",* maintained on the client machine, to the process set *"SetB",* maintained on the server machine:

```4d
 COPY SET("$SetA";"SetB")
```

#### Example 2 

The following example, in Client/Server, copies the process set "*SetA*", maintained on the server machine, to the local process set *"$SetB",* maintained on the client machine: 

```4d
 COPY SET("SetA";"$SetB")
```

#### See also 

*Sets*  

#### Properties
|  |  |
| --- | --- |
| Command number | 600 |
| Thread safe | &check; |
| Forbidden on the server ||


