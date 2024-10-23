---
id: list-of-choice-lists
title: LIST OF CHOICE LISTS
slug: /commands/list-of-choice-lists
displayed_sidebar: docs
---

<!--REF #_command_.LIST OF CHOICE LISTS.Syntax-->**LIST OF CHOICE LISTS** ( *numsArray* ; *namesArray* )<!-- END REF-->
<!--REF #_command_.LIST OF CHOICE LISTS.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| numsArray | Array integer | &#8592; | Numbers of choice lists |
| namesArray | Text array | &#8592; | Names of choice lists |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.LIST OF CHOICE LISTS.Summary-->The LIST OF CHOICE LISTS command returns, in the synchronized *numsArr* and *namesArr* arrays, the numbers and names of the choice lists defined by the list editor in Design mode.<!-- END REF-->

The numbers of choice lists correspond to their order of creation. In the list editor, choice lists are displayed in alphabetical order.
