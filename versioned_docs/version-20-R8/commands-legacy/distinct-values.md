---
id: distinct-values
title: DISTINCT VALUES
slug: /commands/distinct-values
displayed_sidebar: docs
---

<!--REF #_command_.DISTINCT VALUES.Syntax-->**DISTINCT VALUES** ( *aField* ; *array* {; *countArray*} )<!-- END REF-->
<!--REF #_command_.DISTINCT VALUES.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aField | Field | &#8594;  | Indexable field to use for data |
| array | Array | &#8592; | Array to receive field data |
| countArray | Array integer, Real array | &#8592; | Array to receive count of each value |

<!-- END REF-->

#### Description 

<!--REF #_command_.DISTINCT VALUES.Summary-->The **DISTINCT VALUES** command creates and populates the array *array* with non-repeated (unique) values coming from the field *aField* for the current selection of the table to which the field belongs and, optionally, returns the number of occurrences of each value in the *countArray* parameter.<!-- END REF-->

You can pass to **DISTINCT VALUES** any **indexable** field, that is, whose type supports indexing without necessarily being indexed.   
However, executing this command on unindexed fields will be slower. Also note that, in this case, the command loses the current record. 

**DISTINCT VALUES** browses and retains the non-repeated values present only in the currently selected records.

**Note:** When the **DISTINCT VALUES** command is called during a transaction (that has not yet finished), it **will take** into account records created during that transaction.

The array used by **DISTINCT VALUES** must be of the same type as the field passed as first parameter, otherwise the array is retyped. There is one exception to this rule: if the field is of the Picture type (and is associated with a keyword index), the corresponding array must be of the Text type.

After the call, the size of the array is equal to the number of distinct values found in the selection. The command does not change the current selection or the current record. The **DISTINCT VALUES** command uses the index of the field, so the elements in *array* are returned sorted in ascending order. If this is the order you need, you do not need to call [SORT ARRAY](sort-array.md) after using **DISTINCT VALUES**.

**Note:** When **DISTINCT VALUES** is executed with a text or picture field associated with a keyword index, the command fills the array with the keywords of the index. Unlike other types of data, the values returned differ according to the existence of the index. In the case of a Text field, the keyword index is always taken into account, even when the field is also associated with a standard index. If the Text or Picture field is not associated with a keyword index, the array is returned empty. 

The command accepts a *countArray* array as an optional parameter. When it is passed, this array returns, for each non-repeated value in *aField*, the number of occurrences detected in the current selection. The *countArray* array is automatically sized to the number of elements in *array*. For example, for a selection that contains three records with field values "A", "B", and "A", *array* will contain {A;B} and *countArray* will contain {2;1}. You can pass either a Longint array or a Real array in *countArray*. 

**Note:** The *countArray* parameter is not supported for text or picture fields that are associated with keyword indexes (in this context, it is returned empty). 

**WARNING:** **DISTINCT VALUES** can create large arrays depending on the size of the selection and the number of different values in the records. Arrays reside in memory, therefore it is a good idea to test the result after the completion of the command. To do so, test the size of the resulting array or cover the call to the command, using an [ON ERR CALL](on-err-call.md) project method.

**4D Server:** The command is optimized for 4D Server. The array is created and the values are calculated on the server machine; the array is then sent, in its entirety, to the client.

##### 

**Note:** This command does not support Object type fields.

#### Example 1 

The following example creates a list of cities from the current selection and tells the user the number of cities in which the firm has stores: 

```4d
 ALL RECORDS([Retail Outlets]) // Create a selection of records
 DISTINCT VALUES([Retail Outlets]City;asCities)
 ALERT("The firm has stores in "+String(Size of array(asCities))+" cities.")
```

#### Example 2 

You want to get a complete list of keywords contained in the keyword index for the "Pictures" field: 

```4d
 ALL RECORDS([PICTURES])
 ARRAY TEXT(<>_MyKeywords;10)
 DISTINCT VALUES([PICTURES]Photos;<>_MyKeywords)
```

#### Example 3 

To compute statistics, you want to sort the number of distinct values in a field in descending order:

```4d
 ARRAY TEXT($_issue_type;0)
 ARRAY LONGINT($_issue_type_instance;0)
 DISTINCT VALUES([Issue]iType;$_issue_type;$_issue_type_instances)
 SORT ARRAY($_issue_type_instances;$_issue_type;<)
```

#### See also 

  
[GET TEXT KEYWORDS](get-text-keywords.md)  
[ON ERR CALL](on-err-call.md)  
[SELECTION RANGE TO ARRAY](selection-range-to-array.md)  
[SELECTION TO ARRAY](selection-to-array.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 339 |
| Thread safe | &check; |


