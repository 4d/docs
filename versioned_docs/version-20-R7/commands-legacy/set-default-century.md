---
id: set-default-century
title: SET DEFAULT CENTURY
slug: /commands/set-default-century
displayed_sidebar: docs
---

<!--REF #_command_.SET DEFAULT CENTURY.Syntax-->**SET DEFAULT CENTURY** ( *century* {; *pivotYear*} )<!-- END REF-->
<!--REF #_command_.SET DEFAULT CENTURY.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| century | Integer | &#8594;  | Default century (minus one) for entry of date with two-digit year |
| pivotYear | Integer | &#8594;  | Pivot year for entry of date with two-digit year |

<!-- END REF-->

#### Description 

<!--REF #_command_.SET DEFAULT CENTURY.Summary-->The SET DEFAULT CENTURY command specifies the default century and the pivot year used by 4D when you enter a date with only two digits for the year.<!-- END REF-->

The pivot year value defines the way 4D will interpret data entry of a date with a two-digit year:

* If the year is greater than or equal to the pivot year, 4D uses the current default century.
* If the year is less than the pivot year, 4D uses the next century (relative to the current default).

By default, 4D sets the century to be the 20th century and uses 30 as pivot year. For example:

* 01/25/97 means January 25, 1997.
* 01/25/30 means January 25, 1930.
* 01/25/29 means January 25, 2029.
* 01/25/07 means January 25, 2007.

To change this default, execute the command. The effect of the command is immediate. You can pass a new default century only, or a new default century and a pivot year.

If you pass only a new default century minus one in *century*, 4D will interpret data entry of a date with a two-digit year as belonging to this century.  
For example, after the call:

```4d
 SET DEFAULT CENTURY(20) // Switch to 21st century for default century
```

* 01/25/97 means January 25, 2097
* 01/25/07 means January 25, 2007

In addition, you can specify the optional *pivotYear* parameter.  
For example, after this call, in which the pivot year is 1995:

```4d
 SET DEFAULT CENTURY(19;95) // Switch to 21st century for default century if year is less than 95
```

* 01/25/97 means January 25, 1997
* 01/25/07 means January 25, 2007

**Note:** This command only affects how 4D interprets dates entered with a two-digit year.   
In all cases:

* 01/25/1997 means January 25, 1997
* 01/25/2097 means January 25, 2097
* 01/25/1907 means January 25, 1907
* 01/25/2007 means January 25, 2007

This command only affects data entry. It has no effect on date storage, computation, and so on.
