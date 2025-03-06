---
id: Sets
title: Sets
---
||
|---|
|[**ADD TO SET** ( {*aTable* ;} *set* )](../../commands-legacy/add-to-set)<br/>ADD TO SET adds the current record of *aTable* to *set*.|
|[**CLEAR SET** ( *set* )](../../commands-legacy/clear-set)<br/>**CLEAR SET** clears *set* from memory and frees the memory used by *set*.|
|[**COPY SET** ( *srcSet* ; *dstSet* )](../../commands-legacy/copy-set)<br/>The COPY SET command copies the contents of the set *srcSet* into the set *dstSet*.|
|[**CREATE EMPTY SET** ( {*aTable* ;} *set* )](../../commands-legacy/create-empty-set)<br/>**CREATE EMPTY SET** creates a new empty set, *set*, for *aTable*.|
|[**CREATE SET** ( {*aTable* ;} *set* )](../../commands-legacy/create-set)<br/>**CREATE SET** creates a new set, *set*, for *aTable*, and places the current selection in *set*.|
|[**CREATE SET FROM ARRAY** ( *aTable* ; *recordsArray* {; *setName*} )](../../commands-legacy/create-set-from-array)<br/>The **CREATE SET FROM ARRAY** command creates *setName* from:

* Either an array of absolute record numbers *recordsArray* from *aTable*,
* Or an array of booleans *recordsArray*.|
|[**DIFFERENCE** ( *set1* ; *set2* ; *resultSet* )](../../commands-legacy/difference)<br/>**DIFFERENCE** compares *set1* and *set2* and excludes all records that are in *set2* from the *resultSet*.|
|[**INTERSECTION** ( *set1* ; *set2* ; *resultSet* )](../../commands-legacy/intersection)<br/>**INTERSECTION** compares *set1* and *set2* and selects only the records that are in both.|
|[**Is in set** ( *set* ) : Boolean](../../commands-legacy/is-in-set)<br/>Is in set tests whether or not the current record for the table is in *set*.|
|[**LOAD SET** ( {*aTable* ;} *set* ; *document* )](../../commands-legacy/load-set)<br/>**LOAD SET** loads a set from *document* that was saved with the [SAVE SET](save-set.md) command.|
|[**Records in set** ( *set* ) : Integer](../../commands-legacy/records-in-set)<br/>Records in set returns the number of records in *set*.|
|[**REMOVE FROM SET** ( {*aTable* ;} *set* )](../../commands-legacy/remove-from-set)<br/>REMOVE FROM SET removes the current record of *aTable* from *set*.|
|[**SAVE SET** ( *set* ; *document* )](../../commands-legacy/save-set)<br/>**SAVE SET** saves *set* to *document*, a document on disk.|
|[**UNION** ( *set1* ; *set2* ; *resultSet* )](../../commands-legacy/union)<br/>**UNION** creates a set that contains all records from *set1* and *set2*.|
|[**USE SET** ( *set* )](../../commands-legacy/use-set)<br/>**USE SET** makes the records in *set* the current selection for the table to which the set belongs.|
