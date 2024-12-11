---
id: distinct-attribute-values
title: DISTINCT ATTRIBUTE VALUES
slug: /commands/distinct-attribute-values
displayed_sidebar: docs
---

<!--REF #_command_.DISTINCT ATTRIBUTE VALUES.Syntax-->**DISTINCT ATTRIBUTE VALUES** ( *objectField* ; *path* ; *valuesArray* )<!-- END REF-->
<!--REF #_command_.DISTINCT ATTRIBUTE VALUES.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| objectField | Field | &#8594;  | Object field from which to get the list of distinct attribute values |
| path | Text | &#8594;  | Path of attribute whose distinct values you want to get |
| valuesArray | Text array, Array integer, Boolean array, Date array, Time array | &#8592; | Distinct values in attribute path |

<!-- END REF-->

#### Description 

<!--REF #_command_.DISTINCT ATTRIBUTE VALUES.Summary-->The **DISTINCT ATTRIBUTE VALUES** command creates and populates the *valuesArray* with non-repeated (unique) values coming from the *path* attribute in the *objectField* field for the current selection of the table to which this field belongs.<!-- END REF--> Note that *objectField* must be of the Object type, otherwise an error is returned. The command can be used with indexed or non-indexed fields. 

Pass a valid attribute path in *path*. Use the standard dot notation to define paths to nested attributes, for example "company.address.number". Keep in mind that object attribute names are case-sensitive.

The array you passed in *valuesArray* must be of the same type as the values stored in the attribute *path*. Values must be scalar and can be of the Text, number, Boolean, Date, or Time type (pointers, objects, BLOBs or images are not supported). Make sure that all field attribute values are of the same type; otherwise, an error is returned. For example, if the *path* attribute contains "Monday" in one record and 10125 in another record, an error will be returned. 

If the command is called from within a transaction, records created during the transaction are taken into account. 

After the call, the size of the array is equal to the number of distinct values found in the selection. The command does not change the current selection or the current record. 

##### Using the .length virtual property 

You can use the "length" virtual property with this command. It is automatically available for all attributes of the array type, and provides the size of the array, i.e. the number of elements it contains. This property is designed to be used in queries (see [QUERY BY ATTRIBUTE](query-by-attribute.md)). You can also use it with the **DISTINCT ATTRIBUTE VALUES** command to get the different array sizes for an attribute.

#### Example 

Your database contains a \[Customer\]full\_Data object field with 15 records:

![](../assets/en/commands/pict2994114.en.png)

If you execute this code:

```4d
 ARRAY LONGINT(aLAges;0)
 ARRAY LONGINT(aLAgesChild;0)
 ARRAY LONGINT(aLChildNum;0)
 ALL RECORDS([Customer])
  //get the distinct values for the "age" attribute
 DISTINCT ATTRIBUTE VALUES([Customer]full_Data;"age";aLAges)
  //get the distinct values for the "age" attribute within the "Children" array
 DISTINCT ATTRIBUTE VALUES([Customer]full_Data;"Children[].age";aLAgesChild)
  //get the distinct numbers of children by using the length virtual property
 DISTINCT ATTRIBUTE VALUES([Customer]full_Data;"Children.length";aLChildNum)
```

The *aLAges* array receives the following elements:

| **Element** | **Value** |
| ----------- | --------- |
| 1           | 33        |
| 2           | 35        |
| 3           | 36        |
| 4           | 40        |
| 5           | 42        |
| 6           | 44        |
| 7           | 52        |
| 8           | 54        |
| 9           | 60        |

The *aLAgesChild* array receives the following elements:

| **Element** | **Value** |
| ----------- | --------- |
| 1           | 2         |
| 2           | 3         |
| 3           | 4         |
| 4           | 5         |
| 5           | 6         |
| 6           | 10        |
| 7           | 12        |
| 8           | 14        |
| 9           | 15        |
| 10          | 16        |

The *aLChildNum* array receives the following elements:

| **Element** | **Value** |
| ----------- | --------- |
| 1           | 1         |
| 2           | 2         |
| 3           | 3         |

#### See also 

  
[DISTINCT ATTRIBUTE PATHS](distinct-attribute-paths.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 1397 |
| Thread safe | &check; |
| Forbidden on the server ||


