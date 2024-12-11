---
id: set-index
title: SET INDEX
slug: /commands/set-index
displayed_sidebar: docs
---

<!--REF #_command_.SET INDEX.Syntax-->**SET INDEX** ( *aField* ; *index* {; *} )<!-- END REF-->
<!--REF #_command_.SET INDEX.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aField | Field | &#8594;  | Field for which to create or delete the index |
| index | Boolean, Integer | &#8594;  | True=Create index, False=Delete index, orCreate an index of the type: -1=Keywords, 0=by default, 1=B-Tree standard, 3=B-Tree cluster |
| * | Operator |  &#8594;  | Asynchronous indexing if * is passed |

<!-- END REF-->

#### Compatibility Note 

<!--REF #_command_.SET INDEX.Summary-->**SET INDEX**, although a legacy command, is still fully supported and can remain in your application -- there is no need to rewrite existing code.<!-- END REF--> However, it would be better to use [CREATE INDEX](create-index.md) and [DELETE INDEX](delete-index.md) to manage indexes because they provide more features. 

#### Description 

The **SET INDEX** accepts two syntaxes:

* If you pass a Boolean in the *index* parameter, the command creates or removes the index for the field you pass in *aField*.
* If you pass an integer in the *index* parameter, the command creates an index of the type specified.

**index = Boolean**  
To index the field, pass True in *index*. The command creates an index of the default type. If the index already exists, the call has no effect.   
If you pass False in *index*, the command will delete all the standard indexes (i.e., non-composite and non-keyword) that are associated with the field. If the index does not exist, the call has no effect.

**index = Integer**  
In this case, the command creates an index of the type specified for *aField*. You can pass one of the following constants, found in the “*Index Type*” theme:

| Constant             | Type    | Value | Comment                                                                                                                                                         |
| -------------------- | ------- | ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Cluster BTree Index  | Integer | 3     | B-Tree type index using clusters. This type of index is optimized when the index contains few keywords, i.e. when the same values occur frequently in the data. |
| Default Index Type   | Integer | 0     | 4D specifies the index type (excluding keywords indexes) that is the most optimized according to the contents of the field.                                     |
| Keywords Index       | Integer | \-1   | Permits word-by-word indexing of field contents. This type of index can only be used with fields of the Text or Alpha type.                                     |
| Standard BTree Index | Integer | 1     | Standard B-Tree type index. This multi-purpose index type is used in previous versions of 4D                                                                    |

**Note:** A B-Tree index associated with a Text type field stores the first 1024 characters of the field (maximum). Therefore in this context, searches for strings containing more than 1024 characters will fail.

SET INDEX will not index locked records; it will wait until the record becomes unlocked.

The optional *\** parameter indicates an asynchronous (simultaneous) indexing. Asynchronous indexing allows the execution of the calling method to continue immediately, whether or not indexing is completed. However, execution will halt at any command that requires the index.

**Notes:**

* Indexes created by this command do not have names. They cannot be deleted by the [DELETE INDEX](delete-index.md) command using the syntax based on the name.
* This command cannot be used to create or delete composite indexes.
* This command cannot be used to delete a keywords index created by the [CREATE INDEX](create-index.md) command.

#### Note for deployment 

Since this command modifies the database structure, it cannot be used in the context of a read-only packaged application (.4dc file installed in the *Program Files* folder or .4dz file). 

#### Example 1 

The following example indexes the field *\[Customers\]ID*:

```4d
 UNLOAD RECORD([Customers])
 SET INDEX([Customers]ID;True)
```

#### Example 2 

You want to index the *\[Customers\]Name* field in asynchronous mode:

```4d
 SET INDEX([Customers]Name;True;*)
```

#### Example 3 

Creation of a keywords index:

```4d
 SET INDEX([Books]Summary;Keywords Index)
```

#### See also 

[CREATE INDEX](create-index.md)  
[DELETE INDEX](delete-index.md)  
[GET FIELD PROPERTIES](get-field-properties.md)  
[ORDER BY](order-by.md)  
[QUERY](query.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 344 |
| Thread safe | &check; |
| Forbidden on the server ||


