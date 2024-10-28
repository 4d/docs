---
id: order-by-attribute
title: ORDER BY ATTRIBUTE
slug: /commands/order-by-attribute
displayed_sidebar: docs
---

<!--REF #_command_.ORDER BY ATTRIBUTE.Syntax-->**ORDER BY ATTRIBUTE** ( {*aTable* ;} *objectField* ; *attributePath* ; > or < {; *objectField2* ; *attributePath2* ; > or <2 ; ... ; *objectFieldN* ; *attributePathN* ; > or <N} {; *} )<!-- END REF-->
<!--REF #_command_.ORDER BY ATTRIBUTE.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | Table for which to order selected records, or Default table, if omitted |
| objectField | Object | &#8594;  | Object field containing the sorting attribute |
| attributePath | Text | &#8594;  | Name or path of attribute on which to set the order for each level |
| > or < | Operator | &#8594;  | Ordering direction for each level: > to order in ascending order, or < to order in descending order |
| * | Operator | &#8594;  | Continue order flag |

<!-- END REF-->

#### Description 

<!--REF #_command_.ORDER BY ATTRIBUTE.Summary-->The **ORDER BY ATTRIBUTE** command sorts (reorders) the records of the current selection of *aTable* for the current process based on the contents of the *objectField*'s *attributePath*.<!-- END REF--> After the sort has been completed, the new first record of the selection becomes the current record.

If you omit the *aTable* parameter, the command applies to the default table, if it has been specified. Otherwise, 4D uses the table of the first field passed as a parameter.

 In *objectField*, pass the Object field whose attribute you want to use for the sort. This field can belong to *aTable* or to a One table related to *aTable* with an automatic or manual relation. In this case, the sort is always sequential.

In *attributePath*, pass the path of the attribute whose values you want to use to sort the records, for example "children.girls.age".

**Notes:** 

* Only attributes containing scalar values (number, text, boolean, date) can be sorted. Others types of values (object, picture...) are considered as null values.
* You cannot pass an element of an array in *attributePath* (in this case, an error is returned).
* Keep in mind that attribute names are case-sensitive: you can have different "MyAtt" and "myAtt" attribute names in the same record.
* You cannot use attributes whose name contains special characters such as "." or "\[ \]", because they will be incorrectly evaluated as tokens in the order by string. For more information, please refer to the *Object property identifiers* paragraph.

If the field attribute contains values in different data types (i.e. numbers, strings, booleans), they are first grouped by type, then by value. 

If the field attribute value is **null** for some records (i.e. the attribute value is null or attributePath does not exist in the field): 

* If the order is **ascending** (>), records with **null** value will be placed at the beginning of the selection.
* If the order is **descending** (<), records with **null** value will be placed at the end of the selection.

You can sort the selection on one level or on several levels. For each sort level, you specify an *aField*, an *attributePath* and the sorting order in *\> or <*. If you pass the “greater than” symbol (>), the order is ascending. If you pass the “less than” symbol (<), the order is descending. If you do not specify the sorting order, ascending order is the default.   
If only one field is specified (one level sort) and it is indexed, the index is used for the order. If the field is not indexed or if there is more than one field, the order is performed sequentially. 

For multiple sorts (sorts on multiple fields), you can call **ORDER BY ATTRIBUTE** as many times as necessary and specify the optional *\** parameter, except for the last **ORDER BY ATTRIBUTE** call, which starts the actual sort operation. This feature is useful for multiple sorts management in customized user interfaces. Note that you can combine **ORDER BY ATTRIBUTE** calls with [ORDER BY](order-by.md) calls.

**Note:** With this syntax, you can pass only one sort level (field) per **ORDER BY ATTRIBUTE** call.

No matter what way a sort has been defined, if the actual sort operation is going to take some time to be performed, 4D automatically displays a message containing a progress thermometer. These message can be turned on and off by using the [MESSAGES ON](messages-on.md) and [MESSAGES OFF](messages-off.md) commands. If the progress thermometer is displayed, the user can click the **Stop** button to interrupt the sort. If the sort is completed, OK is set to 1\. Otherwise, if the sort is interrupted, OK is set to 0 (zero).

#### Example 

You want to sort the current selection by age (descending) and then by name (ascending). Default order is:

```json
// [Customer]OB_Info contents partial export
{"LastName":"Giorgio","age":33,"client":true},
{"LastName":"Sarah","age":42,"client":true},
{"LastName":"Mikken","age":"Forty-six","client":true},
{"LastName":"Wesson","age":44,"client":true},
{"LastName":"Johnson","age":44,"client":false},
{"LastName":"Hamp","age":"Sixty","client":true},
{"LastName":"Smeldorf","age":33,"client":true},
{"LastName":"Martin","client":true],
{"LastName":"Evan","age":36,"client":true},
{"LastName":"Collins","age":33,"client":true,"Sex":"female"},
{"LastName":"Garbando","age":60,"client":false,"Sex":"male"},
{"LastName":"Smeldorf","age":54,"client":true},
{"LastName":"Smith","age":42,"client":true},
{"LastName":"Jones","age":52,"client":true},
{"LastName":"Kerrey","age":44,"client":true},
{"LastName":"Gordini","client":true},
{"LastName":"Delaferme","age":54,"client":true},
{"LastName":"Belami","age":"Forty-six","client":true},
{"LastName":"Smeldorf","age":22,"client":true},
{"LastName":"Smeldorf","age":70,"client":true}
```

If you execute:

```4d
 ORDER BY ATTRIBUTE([Customer];[Customer]OB_Info;"age";<;[Customer]OB_Info;"LastName";>)
```

Records are in the following order:

```json
{"LastName":"Smeldorf","age":70,"client":true}
{"LastName":"Garbando","age":60,"client":false,"Sex":"male"},
{"LastName":"Delaferme","age":54,"client":true}, 
{"LastName":"Smeldorf","age":54,"client":true},
{"LastName":"Jones","age":52,"client":true},
{"LastName":"Johnson","age":44,"client":false},
{"LastName":"Kerrey","age":44,"client":true},
{"LastName":"Wesson","age":44,"client":true},
{"LastName":"Sarah","age":42,"client":true},
{"LastName":"Smith","age":42,"client":true},
{"LastName":"Evan","age":36,"client":true},
{"LastName":"Collins","age":33,"client":true,"Sex":"female"},
{"LastName":"Giorgio","age":33,"client":true},
{"LastName":"Smeldorf","age":33,"client":true},
{"LastName":"Smeldorf","age":22,"client":true},
{"LastName":"Hamp","age":"Sixty","client":true}, //string values in age
{"LastName":"Belami","age":"Forty-six","client":true}, //are handled separately
{"LastName":"Mikken","age":"Forty-six","client":true}
{"LastName":"Gordini","client":true}, //at the end because
{"LastName":"Martin","client":true} //age is null (missing)
```

#### See also 

  