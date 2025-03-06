---
id: Structure_Access
title: Structure Access
---
||
|---|
|[**CREATE INDEX** ( *aTable* ; *fieldsArray* ; *indexType* ; *indexName* {; *} )](../../commands-legacy/create-index)<br/>The **CREATE INDEX** command creates:

* A standard index on one or more fields (composite index) or
* A keyword index on a field.|
|[**DELETE INDEX** ( fieldPtr | indexName {; *} )](../../commands-legacy/delete-index)<br/>The DELETE INDEX command deletes one or more existing indexes from the database.|
|[**EXPORT STRUCTURE** ( *exportedStructure* {; *format*} )](../../commands-legacy/export-structure)<br/>The **EXPORT STRUCTURE** command exports the structure definition of the current 4D database in *exportedStructure*.|
|[**Field** ( *tableNum* ; *fieldNum* ) -> fieldPtr  <br/>
**Field** ( *fieldPtr* ) -> fieldNum](../../commands-legacy/field)<br/>The **Field** command has two forms:

* If you pass a table number in *tableNum* and a field number in fieldNum, **Field** returns a pointer to the field.|
|[**Field name** ( fieldPtr | tableNum {; *fieldNum*} ) : Text](../../commands-legacy/field-name)<br/>The Field name command returns the name of the field whose pointer you pass in *fieldPtr* or whose table and field number you pass in *tableNum* and *fieldNum*.|
|[**Get external data path** ( *aField* ) : Text](../../commands-legacy/get-external-data-path)<br/>The **Get external data path** command returns the full pathname of the external storage file for the data of the field passed in the *aField* parameter, for the current record.|
|[**GET FIELD ENTRY PROPERTIES** ( fieldPtr|tableNum {; *fieldNum*}; *list* ; *mandatory* ; *nonEnterable* ; *nonModifiable* )](../../commands-legacy/get-field-entry-properties)<br/>The GET FIELD ENTRY PROPERTIES command returns the data entry properties for the field specified by *tableNum* and *fieldNum* or by *fieldPtr*.|
|[**GET FIELD PROPERTIES** ( fieldPtr | tableNum {; *fieldNum*}; *fieldType* {; *fieldLength* {; *indexed* {; *unique* {; *invisible*}}}} )](../../commands-legacy/get-field-properties)<br/>The **GET FIELD PROPERTIES** command returns information about the field specified by *fieldPtr* or by *tableNum* and *fieldNum*.|
|[**GET MISSING TABLE NAMES** ( *missingTables* )](../../commands-legacy/get-missing-table-names)<br/>The **GET MISSING TABLE NAMES** command returns the names of all the missing tables of the current database in the *missingTables* array.|
|[**GET RELATION PROPERTIES** ( fieldPtr|tableNum {; *fieldNum*}; *oneTable* ; *oneField* {; *choiceField* {; *autoOne* {; *autoMany*}}} )](../../commands-legacy/get-relation-properties)<br/>The GET RELATION PROPERTIES command returns the properties of the relation (if any) which starts from the source field defined by *tableNum* and *fieldNum* or by *fieldPtr*.|
|[**GET TABLE PROPERTIES** ( tablePtr|tableNum ; *invisible* {; *trigSaveNew* {; *trigSaveRec* {; *trigDelRec* {; *trigLoadRec*}}}} )](../../commands-legacy/get-table-properties)<br/>The GET TABLE PROPERTIES command returns the properties for the table passed in *tablePtr* or *tableNum*.|
|[**IMPORT STRUCTURE** ( *xmlStructure* )](../../commands-legacy/import-structure)<br/>The **IMPORT STRUCTURE** command imports, into the current database, the XML definition of the 4D database structure passed in the *xmlStructure* parameter.|
|[**Is field number valid** ( tableNum | tablePtr ; *fieldNum* ) : Boolean](../../commands-legacy/is-field-number-valid)<br/>The Is field number valid command returns True if the field whose number is passed in the *fieldNum* parameter exists in the table whose number or pointer is passed in the *tableNum* or *tablePtr* parameter.|
|[**Is table number valid** ( *tableNum* ) : Boolean](../../commands-legacy/is-table-number-valid)<br/>The Is table number valid command returns True if the table whose number is passed in the *tableNum* parameter exists in the database and False otherwise.|
|[**Last field number** ( tableNum | tablePtr ) : Integer](../../commands-legacy/last-field-number)<br/>The **Last field number** command returns the highest field number among the fields in the table whose number or pointer you pass in *tableNum* or *tablePtr*.|
|[**Last table number**  : Integer](../../commands-legacy/last-table-number)<br/>**Last table number** returns the highest table number among the tables in the database.|
|[**PAUSE INDEXES** ( *aTable* )](../../commands-legacy/pause-indexes)<br/>The **PAUSE INDEXES** command temporarily disables all the indexes of *aTable*, except for the index of the primary key.|
|[**REGENERATE MISSING TABLE** ( *tableName* )](../../commands-legacy/regenerate-missing-table)<br/>The **REGENERATE MISSING TABLE** command rebuilds the missing table whose name is passed in the *tableName* parameter.|
|[**RELOAD EXTERNAL DATA** ( *aField* )](../../commands-legacy/reload-external-data)<br/>The **RELOAD EXTERNAL DATA** command reloads the contents in memory of an external storage file associated with a BLOB, Picture, or Text type field.|
|[**RESUME INDEXES** ( *aTable* {; *} )](../../commands-legacy/resume-indexes)<br/>The **RESUME INDEXES** command reactivates all the indexes of *aTable* when they have been paused previously using the [PAUSE INDEXES](pause-indexes.md) command.|
|[**SET EXTERNAL DATA PATH** ( *aField* ; *path* )](../../commands-legacy/set-external-data-path)<br/>The **SET EXTERNAL DATA PATH** command sets or modifies, for the current record, the external storage location for the *aField* field passed as parameter.|
|[**SET INDEX** ( *aField* ; *index* {; *} )](../../commands-legacy/set-index)<br/>**SET INDEX**, although a legacy command, is still fully supported and can remain in your application -- there is no need to rewrite existing code.|
|[**Table** ( tableNum | aPtr ) : any](../../commands-legacy/table)<br/>The Table command has three forms:

* If you pass a table number in *tableNum*, Table returns a pointer to the table.|
|[**Table name** ( tableNum | tablePtr ) : Text](../../commands-legacy/table-name)<br/>The Table name command returns the name of the table whose number or pointer you pass in *tableNum* or *tablePtr*.|
