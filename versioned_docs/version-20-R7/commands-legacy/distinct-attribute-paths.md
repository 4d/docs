---
id: distinct-attribute-paths
title: DISTINCT ATTRIBUTE PATHS
slug: /commands/distinct-attribute-paths
displayed_sidebar: docs
---

<!--REF #_command_.DISTINCT ATTRIBUTE PATHS.Syntax-->**DISTINCT ATTRIBUTE PATHS** ( *objectField* ; *pathArray* )<!-- END REF-->
<!--REF #_command_.DISTINCT ATTRIBUTE PATHS.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| objectField | Field | &#8594;  | Indexed object field |
| pathArray | Text array | &#8592; | Array to receive list of distinct paths |

<!-- END REF-->

#### Description 

<!--REF #_command_.DISTINCT ATTRIBUTE PATHS.Summary-->The **DISTINCT ATTRIBUTE PATHS** command returns the list of distinct paths found in the indexed object field you passed in *objectField* for the current selection of the table to which this field belongs.<!-- END REF-->

In *objectField*, you must pass an Object type field that is indexed; otherwise, an error is returned. 

After the call, the size of *pathArray* is equal to the number of distinct paths found in the selection. Paths to nested object attributes are returned using the standard dot notation, for example "company.address.number". Keep in mind that object attribute names are case-sensitive. The command does not change the current selection or the current record. 

 In *pathArray*, the list of distinct paths is returned in alphabetical (diacritic) order. 

**Notes:** 

* Records with an undefined value in the *objectField* are not taken into account.
* Attribute paths created during a transaction are taken into account by the command. It is important to note that these paths are kept in the index of the object field even if the transation has been canceled.

#### Example 

Your database contains a \[Customer\]full\_Data (indexed) object field with 15 records:

![](../assets/en/commands/pict2994114.en.png)

If you execute this code:

```4d
 ARRAY TEXT(aTPaths;0)
 ALL RECORDS([Customer])
 DISTINCT ATTRIBUTE PATHS([Customer]full_Data;aTPaths)
```

The *aTPaths* array receives the following elements:

| Element | Value               |
| ------- | ------------------- |
| 1       | "age"               |
| 2       | "Children"          |
| 3       | "Children\[\]"      |
| 4       | "Children\[\].age"  |
| 5       | "Children\[\].Name" |
| 6       | "Children.length"   |
| 7       | "client"            |
| 8       | "FirstName"         |
| 9       | "LastName"          |
| 10      | "Sex"               |
| 11      | "telephone"         |
| 12      | "telephone\[\]"     |
| 13      | "telephone.length"  |

**Note:** "length" is a *virtual property* that is automatically available for all array type attributes. It provides the size of the array, i.e. the number of elements, and can be used in queries. For more information, please refer to the *Using the .length virtual property* paragraph. 

#### See also 

  
[DISTINCT ATTRIBUTE VALUES](distinct-attribute-values.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 1395 |
| Thread safe | &check; |
| Forbidden on the server ||


