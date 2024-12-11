---
id: array-to-list
title: ARRAY TO LIST
slug: /commands/array-to-list
displayed_sidebar: docs
---

<!--REF #_command_.ARRAY TO LIST.Syntax-->**ARRAY TO LIST** ( *array* ; *list* {; *itemRefs*} )<!-- END REF-->
<!--REF #_command_.ARRAY TO LIST.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| array | Array | &#8594;  | Array from which to copy array elements |
| list | Text, Integer | &#8594;  | Name or reference of list into which to copy array elements |
| itemRefs | Array | &#8594;  | Numeric array of item reference numbers |

<!-- END REF-->

#### Description 

<!--REF #_command_.ARRAY TO LIST.Summary-->The ARRAY TO LIST command creates or replaces the hierarchical list or the choice list (created in the List editor) that is specified in *list* using the elements of the array *array.<!-- END REF-->*

In the *list* parameter, you can either pass a choice list (string) or a hierarchical list reference ([ListRef](# "A Longint reference to a hierachical list")). In the latter case, this list must have already been created previously (for example using the [New list](new-list.md) command) in order for this command to work.

The optional *itemRefs* parameter, if specified, must be a numeric array synchronized with the array *array*. Each element, then, indicates the list item reference number for the corresponding element in *array*. If you omit this parameter, 4D automatically sets the list item reference numbers to 1, 2... N.

**Compatibility Note:** The **ARRAY TO LIST** command must be used with caution because of the following limitations:

* This command only lets you set first-level items of the list.
* When you use this command with a choice list, it modifies the structure of the application (lists are saved in the structure file), so any modifications made locally are lost when the structure file is updated in production.
* This command cannot be used with a choice list in a structure loaded in **read only**, such as a .4dz project or a component.

You can use ARRAY TO LIST to build a list based on the elements of an array. However, to free yourself from these restrictions and make full use of the lists of values, we recommend using the commands of the *Hierarchical Lists* theme.

#### Example 

The following example copies the array *atRegions* to the list called “Regions:”

```4d
 ARRAY TO LIST(atRegions;"Regions")
```

#### Example 

You want to put the distinct values of a field into a list, for example to create a hierarchical pop-up menu. You can write:

```4d
 ALL RECORDS([Company])
 DISTINCT VALUES([Company]country;$arrCountries)
 CountryList:=New list
 ARRAY TO LIST($arrCountries;CountryList)
```

#### Error management 

An error *\-9957* is generated when ARRAY TO LIST is applied to a list that is currently being edited in the Design environment List Editor. You can catch this error using an [ON ERR CALL](on-err-call.md "ON ERR CALL") project method.

#### See also 

[LIST TO ARRAY](list-to-array.md)  
[Load list](load-list.md)  
[ON ERR CALL](on-err-call.md)  
[SAVE LIST](save-list.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 287 |
| Thread safe | &check; |
| Modifies variables | error |
| Forbidden on the server ||


