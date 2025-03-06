---
id: Relations
title: Relations
---
||
|---|
|[**CREATE RELATED ONE** ( *aField* )](../../commands-legacy/create-related-one)<br/>**CREATE RELATED ONE** performs two actions.|
|[**GET AUTOMATIC RELATIONS** ( *one* ; *many* )](../../commands-legacy/get-automatic-relations)<br/>The **GET AUTOMATIC RELATIONS** command lets you know if the automatic/manual status of all manual many-to-one and one-to-many relations of the database have been modified in the current process.|
|[**GET FIELD RELATION** ( *manyField* ; *one* ; *many* {; *} )](../../commands-legacy/get-field-relation)<br/>The **GET FIELD RELATION** command lets you find out the automatic/manual status of the relation starting from *manyField* for the current process.|
|[**OLD RELATED MANY** ( *aField* )](../../commands-legacy/old-related-many)<br/>**OLD RELATED MANY** operates the same way [RELATE MANY](relate-many.md) does, except that **OLD RELATED MANY** uses the old value in the one field to establish the relation.|
|[**OLD RELATED ONE** ( *aField* )](../../commands-legacy/old-related-one)<br/>**OLD RELATED ONE** operates the same way as [RELATE ONE](relate-one.md) does, except that **OLD RELATED ONE** uses the old value of *aField* to establish the relation.|
|[**RELATE MANY** ( oneTable | Field )](../../commands-legacy/relate-many)<br/>RELATE MANY has two forms.|
|[**RELATE MANY SELECTION** ( *aField* )](../../commands-legacy/relate-many-selection)<br/>The RELATE MANY SELECTION command generates a selection of records in the Many table, based on a selection of records in the One table, and loads the first record of the Many table as the current record.|
|[**RELATE ONE** ( manyTable | Field {; *choiceField*} )](../../commands-legacy/relate-one)<br/>**RELATE ONE** has two forms.|
|[**RELATE ONE SELECTION** ( *manyTable* ; *oneTable* )](../../commands-legacy/relate-one-selection)<br/>The RELATE ONE SELECTION command creates a new selection of records for the table *oneTable*, based on the selection of records in the table *manyTable* and loads the first record of the new selection as the current record.|
|[**SAVE RELATED ONE** ( *aField* )](../../commands-legacy/save-related-one)<br/>**SAVE RELATED ONE** saves the record related to *aField*.|
|[**SET AUTOMATIC RELATIONS** ( *one* {; *many*} )](../../commands-legacy/set-automatic-relations)<br/>**SET AUTOMATIC RELATIONS** temporarily changes all the manual relations into automatic relations for the entire database in the current process.|
|[**SET FIELD RELATION** ( manyTable | Field ; *one* ; *many* )](../../commands-legacy/set-field-relation)<br/>The **SET FIELD RELATION** command sets the automatic/manual status of each relation of the database separately for the current process, regardless of its initial status as specified in the Relation properties window in the Design environment.|
