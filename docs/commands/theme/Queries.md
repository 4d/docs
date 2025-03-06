---
id: Queries
title: Queries
---
||
|---|
|[**DESCRIBE QUERY EXECUTION** ( *status* )](../../commands-legacy/describe-query-execution)<br/>The **DESCRIBE QUERY EXECUTION** command enables or disables the query analysis mode for the current process.|
|[**Find in field** ( *targetField* ; *value* ) : Integer](../../commands-legacy/find-in-field)<br/>The **Find in field** command returns the number of the first record whose *targetField* field is equal to *value*.|
|[**GET QUERY DESTINATION** ( *destinationType* ; *destinationObject* ; *destinationPtr* )](../../commands-legacy/get-query-destination)<br/>The **GET QUERY DESTINATION** command returns the current destination of query results for the process underway.|
|[**Get query limit** : Integer](../../commands-legacy/get-query-limit)<br/>The **Get query limit** command returns the limit for the number of records that a query may find in the current process.|
|[**Last query path** ( *descFormat* ) : Text](../../commands-legacy/last-query-path)<br/>The **Last query path** command returns the detailed internal description of the actual path of the last query carried out on the data.|
|[**Last query plan** ( *descFormat* ) : Text](../../commands-legacy/last-query-plan)<br/>The **Last query plan** command returns the detailed internal description of the query plan for the last query carried out on the data.|
|[**ORDER BY** ( {*aTable* ;}{ *aField* }{; > or < }{; *aField2* ; > or <2 ; ... ; *aFieldN* ; > or <N}{; *} )](../../commands-legacy/order-by)<br/>**ORDER BY** sorts (reorders) the records of the current selection of *aTable* for the current process.|
|[**ORDER BY ATTRIBUTE** ( {*aTable* ;} *objectField* ; *attributePath* ; > or < {; *objectField2* ; *attributePath2* ; > or <2 ; ... ; *objectFieldN* ; *attributePathN* ; > or <N} {; *} )](../../commands-legacy/order-by-attribute)<br/>The **ORDER BY ATTRIBUTE** command sorts (reorders) the records of the current selection of *aTable* for the current process based on the contents of the *objectField*'s *attributePath*.|
|[**ORDER BY FORMULA** ( *aTable* ; *formula* {; > or <}{; *formula2* ; > or <2 ; ... ; *formulaN* ; > or <N} )](../../commands-legacy/order-by-formula)<br/>**ORDER BY FORMULA** sorts (reorders) the records of the current selection of *aTable* for the current process.|
|[**QUERY** ( {*aTable* }{;}{ *queryArgument* {; *}} )](../../commands-legacy/query)<br/>**QUERY** looks for records matching the criteria specified in *queryArgument* and returns a selection of records for *aTable*.|
|[**QUERY BY ATTRIBUTE** ( {*aTable*}{;}{*conjOp* ;} *objectField* ; *attributePath* ; *queryOp* ; *value* {; *} )](../../commands-legacy/query-by-attribute)<br/>**QUERY BY ATTRIBUTE** looks for records matching the query string defined using the *objectField*, *attributePath*, *queryOp* and *value* parameters, and returns a selection of records for *aTable*.|
|[**QUERY BY EXAMPLE** ( {*aTable*}{;}{*} )](../../commands-legacy/query-by-example)<br/>**QUERY BY EXAMPLE** performs the same action as the Query by Example menu command in the Design environment.|
|[**QUERY BY FORMULA** ( *aTable* {; *queryFormula*} )](../../commands-legacy/query-by-formula)<br/>**QUERY BY FORMULA** looks for records in *aTable*.|
|[**QUERY SELECTION** ( {*aTable* }{;}{ *queryArgument* {; *}} )](../../commands-legacy/query-selection)<br/>**QUERY SELECTION** looks for records in *aTable*.|
|[**QUERY SELECTION BY ATTRIBUTE** ( {*aTable*}{;}{*conjOp* ;} *objectField* ; *attributePath* ; *queryOp* ; *value* {; *} )](../../commands-legacy/query-selection-by-attribute)<br/>**QUERY SELECTION BY ATTRIBUTE** works and performs the same actions as [QUERY BY ATTRIBUTE](query-by-attribute.md).|
|[**QUERY SELECTION BY FORMULA** ( *aTable* {; *queryFormula*} )](../../commands-legacy/query-selection-by-formula)<br/>**QUERY SELECTION BY FORMULA** looks for records in *aTable*.|
|[**QUERY SELECTION WITH ARRAY** ( *targetField* ; *array* )](../../commands-legacy/query-selection-with-array)<br/>The **QUERY SELECTION WITH ARRAY** command searches the table of the field passed as first parameter for the records where the value of *targetField* is equal to at least one of the values of the elements in the *array*.|
|[**QUERY WITH ARRAY** ( *targetField* ; *array* )](../../commands-legacy/query-with-array)<br/>The QUERY WITH ARRAY command searches all the records for which the value of *targetField* is equal, at least, to one of the values of the elements in *array*.|
|[**SET QUERY AND LOCK** ( *lock* )](../../commands-legacy/set-query-and-lock)<br/>The **SET QUERY AND LOCK** command can be used to request the automatic locking of records found by all queries that follow the calling of this command in the current transaction.|
|[**SET QUERY DESTINATION** ( *destinationType* {; *destinationObject* {; *destinationPtr*}} )](../../commands-legacy/set-query-destination)<br/>**SET QUERY DESTINATION** enables you to tell 4D where to put the result of any subsequent query for the current process.|
|[**SET QUERY LIMIT** ( *limit* )](../../commands-legacy/set-query-limit)<br/>**SET QUERY LIMIT** allows you to tell 4D to stop any subsequent query for the current process as soon as at least the number of records you pass in *limit* has been found.|
