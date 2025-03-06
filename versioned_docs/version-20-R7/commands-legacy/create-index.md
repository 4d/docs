---
id: create-index
title: CREATE INDEX
slug: /commands/create-index
displayed_sidebar: docs
---

<!--REF #_command_.CREATE INDEX.Syntax-->**CREATE INDEX** ( *aTable* ; *fieldsArray* ; *indexType* ; *indexName* {; *} )<!-- END REF-->
<!--REF #_command_.CREATE INDEX.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | Table for which to create an index |
| fieldsArray | Pointer array | &#8594;  | Pointer(s) to field(s) to be indexed |
| indexType | Integer | &#8594;  | Type of index to create: -1 = Keywords, 0 = default, 1 = Standard B-Tree, 3 = Cluster B-Tree |
| indexName | Text | &#8594;  | Name of index to create |
| * | Operator | &#8594;  | If passed = asynchronous indexing |

<!-- END REF-->

#### Description 

<!--REF #_command_.CREATE INDEX.Summary-->The **CREATE INDEX** command creates:

* A standard index on one or more fields (composite index) or
* A keyword index on a field.<!-- END REF-->

The index is created for the *aTable* table by using one or more fields designated by the *fieldsArray* pointer array. This array contains a single row when you want to create a simple index and two or more rows when you want to create a composite index (except in the case of a keyword index). In the case of composite indexes, the order of the fields in the array is important when the index is being built.

The *indexType* parameter sets the type of index to be created. You can pass one of the following constants, found in the *Index Type* theme:

| Constant             | Type    | Value | Comment                                                                                                                                                                             |
| -------------------- | ------- | ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Cluster BTree index  | Integer | 3     | B-Tree type index using clusters. This type of index is optimized when the index contains few keywords, i.e. when the same values occur frequently in the data.                     |
| Default index type   | Integer | 0     | 4D specifies the index type (excluding keywords indexes) that is the most optimized according to the contents of the field.                                                         |
| Keywords index       | Integer | \-1   | Permits word-by-word indexing of field contents. This type of index can only be used with fields of the Text, Alpha or Picture type. Warning: Keywords indexes cannot be composite. |
| Standard BTree index | Integer | 1     | Standard B-Tree type index. This multi-purpose index type is used in previous versions of 4D                                                                                        |

**Note:** A B-Tree index associated with a Text type field stores the first 1024 characters of the field (maximum). Therefore in this context, searches for strings containing more than 1024 characters will fail. 

In the *indexName* parameter, you pass the name of the index to be created. Naming the index is necessary if several different types of indexes can be associated with the same field and if you want to be able to delete them individually using the [DELETE INDEX](delete-index.md) command. If the *indexName* index already exists, the command does nothing.

The optional *\** parameter, when it is passed, performs indexing in asynchronous mode. In this mode, the original method continues its execution after the call from the command, regardless of whether or not the indexing is finished.

If the **CREATE INDEX** command encounters any locked records, they will not be indexed and the command will wait for them to be unlocked.

If a problem occurs during command execution (non-indexed field, attempt to create a keyword index on more than one field, etc.), an error is generated. This error can be intercepted using an error-handling method.

#### Note for deployment 

Since this command modifies the database structure, it cannot be used in the context of a read-only packaged application (.4dc file installed in the *Program Files* folder or .4dz file). 

#### Example 1 

Creation of two standard indexes on the “Last Name” and “Telephone”fields of the \[Customers\] table:

```4d
 ARRAY POINTER(fieldPtrArr;1)
 fieldPtrArr{1}:=->[Customers]LastName
 CREATE INDEX([Customers];fieldPtrArr;Standard BTree Index;"CustLNameIdx")
 fieldPtrArr{1}:=->[Customers]Telephone
 CREATE INDEX([Customers];fieldPtrArr;Standard BTree Index;"CustTelIdx")
```

#### Example 2 

Creation of a keywords index on the “Observations” field of the \[Customers\] table:

```4d
 ARRAY POINTER(fieldPtrArr;1)
 fieldPtrArr{1}:=->[Customers]Observations
 CREATE INDEX([Customers];fieldPtrArr;Keywords Index;"CustObsIdx")
```

#### Example 3 

Creation of a composite index on the “City” and “Zipcode” fields of the \[Customers\] table:

```4d
 ARRAY POINTER(fieldPtrArr;2)
 fieldPtrArr{1}:=->[Customers]City
 fieldPtrArr{2}:=->[Customers]Zipcode
 CREATE INDEX([Customers];fieldPtrArr;Standard BTree Index;"CityZip")
```

#### See also 

[DELETE INDEX](delete-index.md)  
[RESUME INDEXES](resume-indexes.md)  
[SET INDEX](set-index.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 966 |
| Thread safe | &check; |


