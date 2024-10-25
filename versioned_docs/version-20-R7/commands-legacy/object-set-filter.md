---
id: object-set-filter
title: OBJECT SET FILTER
slug: /commands/object-set-filter
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET FILTER.Syntax-->**OBJECT SET FILTER** ( {* ;} *object* ; *entryFilter* )<!-- END REF-->
<!--REF #_command_.OBJECT SET FILTER.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, Object is an Object Name (String) If omitted, Object is a Field or a Variable |
| object | any | &#8594;  | Object Name (if * is specified), or Field or Variable (if * is omitted) |
| entryFilter | Text | &#8594;  | New data entry filter for the enterable area |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.OBJECT SET FILTER.Summary-->**OBJECT SET FILTER** sets the entry filter for the objects specified by *object* to the filter you pass in *entryFilter*.<!-- END REF-->

If you specify the optional *\** parameter, you indicate an object name (a string) in *object*. If you omit the optional \* parameter, you indicate a field or a variable in *object*. In this case, you specify a field or variable reference (field or variable objects only) instead of a string. For more information about object names, see the *Object Properties* section.

**OBJECT SET FILTER** can be used for input and dialog forms and can be applied to fields and enterable variables that accept an entry filter in the Design environment.

Passing an empty string in *entryFilter* removes the current entry filter for the objects.

**Note:** This command cannot be used with fields located in a subform’s list form.

**Note:** In *entryFilter*, to use entry filters you may have predefined using the Tool Box, prefix the name of the filter with a vertical bar (|). 

#### Example 1 

The following example sets the entry filter for a postal code field. If the address is in the U.S., the filter is set to ZIP codes. Otherwise, it is set to allow any entry: 

```4d
 If([Companies]Country="US") // Set the filter to a ZIP code format
    OBJECT SET FILTER([Companies]ZIP Code;"&9#####")
 Else // Set the filter to accept alpha and numeric and uppercase the alpha
    OBJECT SET FILTER([Companies]ZIP Code;"~@")
 End if
```

#### Example 2 

The following example allows only the letters “a,” “b,” “c,” or “g” to be entered in two places in the field Field: 

```4d
 OBJECT SET FILTER([Table]Field ;"&"+Char(Double quote)+"a;b;c;g"+Char(Double quote)+"##")
```

**Note:** This example sets the entry filter to *&"a;b;c;g"##*.

#### See also 

[OBJECT Get filter](object-get-filter.md)  
[OBJECT SET FORMAT](object-set-format.md)  