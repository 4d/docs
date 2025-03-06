---
id: SQL
title: SQL
---
||
|---|
|[**Begin SQL**](../../commands-legacy/begin-sql)<br/>Begin SQL is a keyword used in the Method editor to indicate the beginning of a sequence of SQL commands that must be interpreted by the current data source of the process (the integrated SQL engine of 4D or any source specified via the [SQL LOGIN](sql-login.md) command).|
|[**End SQL**](../../commands-legacy/end-sql)<br/>**End SQL** is a keyword indicating the end of a sequence of SQL commands in the Method editor.|
|[**Is field value Null** ( *aField* ) : Boolean](../../commands-legacy/is-field-value-null)<br/>The Is field value Null command returns **True** if the field designated by the *aField* parameter contains the NULL value, and **False** otherwise.|
|[**QUERY BY SQL** ( {*aTable* ;} *sqlFormula* )](../../commands-legacy/query-by-sql)<br/>The QUERY BY SQL command can be used to take advantage of the SQL kernel integrated into 4D.|
|[**SET FIELD VALUE NULL** ( *aField* )](../../commands-legacy/set-field-value-null)<br/>The SET FIELD VALUE NULL command assigns the NULL value to the field designated by the *aField* parameter.|
|[**SQL CANCEL LOAD**](../../commands-legacy/sql-cancel-load)<br/>The **SQL CANCEL LOAD** command ends the current SELECT request and initializes the parameters.|
|[**SQL End selection**  : Boolean](../../commands-legacy/sql-end-selection)<br/>The SQL End selection command is used to determine if the boundaries of the result set have been reached.|
|[**SQL EXECUTE** ( *sqlStatement* {; *boundObj*}{; *boundObj2* ; ... ; *boundObjN*} )](../../commands-legacy/sql-execute)<br/>The SQL EXECUTE command executes an SQL command and binds the result to 4D objects (arrays, variables or fields).|
|[**SQL EXECUTE SCRIPT** ( *scriptPath* ; *errorAction* {; *attribName* ; *attribValue*} {; *attribName2* ; *attribValue2* ; ... ; *attribNameN* ; *attribValueN*} )](../../commands-legacy/sql-execute-script)<br/>The **SQL EXECUTE SCRIPT** command is used to execute a series of SQL statements placed in the script file designated by *scriptPath*.|
|[**SQL EXPORT DATABASE** ( *folderPath* {; *numFiles* {; *fileLimitSize* {; *fieldLimitSize*}}} )](../../commands-legacy/sql-export-database)<br/>The SQL EXPORT DATABASE command exports in SQL format all the records of all the tables in the database.|
|[**SQL EXPORT SELECTION** ( *aTable* ; *folderPath* {; *numFiles* {; *fileLimitSize* {; *fieldLimitSize*}}} )](../../commands-legacy/sql-export-selection)<br/>The **SQL EXPORT SELECTION** command exports in SQL format the records of the current selection of the 4D table designated by the *aTable* parameter.|
|[**SQL Get current data source**  : Text](../../commands-legacy/sql-get-current-data-source)<br/>The SQL Get current data source command returns the name of the current data source of the application.|
|[**SQL GET DATA SOURCE LIST** ( *sourceType* ; *sourceNamesArr* ; *driversArr* )](../../commands-legacy/sql-get-data-source-list)<br/>The **SQL GET DATA SOURCE LIST** command returns, in the *sourceNamesArr* and *driversArr* arrays, the names and drivers of the *sourceType* type data sources defined in the ODBC manager of the operating system.|
|[**SQL GET LAST ERROR** ( *errCode* ; *errText* ; *errODBC* ; *errSQLServer* )](../../commands-legacy/sql-get-last-error)<br/>The SQL GET LAST ERROR command returns information related to the last error encountered during the execution of an ODBC command.|
|[**SQL GET OPTION** ( *option* ; *value* )](../../commands-legacy/sql-get-option)<br/>The **SQL GET OPTION** command returns the current *value* of the option passed in *option*.|
|[**SQL LOAD RECORD** {( *numRecords* )}](../../commands-legacy/sql-load-record)<br/>The SQL LOAD RECORD command retrieves one or more record(s) in 4D coming from the data source open in the current connection.|
|[**SQL LOGIN** {( *dataEntry* ; *userName* ; *password* ; * )}](../../commands-legacy/sql-login)<br/>The **SQL LOGIN** command allows you to connect to an SQL data source specified in the *dataEntry* parameter.|
|[**SQL LOGOUT**](../../commands-legacy/sql-logout)<br/>The SQL LOGOUT command closes the connection with an ODBC source that is open in the current process (if applicable).|
|[**SQL SET OPTION** ( *option* ; *value* )](../../commands-legacy/sql-set-option)<br/>The **SQL SET OPTION** command modifies the *value* of the option passed in *option*.|
|[**SQL SET PARAMETER** ( *object* ; *paramType* )](../../commands-legacy/sql-set-parameter)<br/>The SQL SET PARAMETER command allows the use of a 4D variable, array or field value in SQL requests.|
|[**START SQL SERVER**](../../commands-legacy/start-sql-server)<br/>The START SQL SERVER command launches the integrated SQL server in the 4D application where it has been executed.|
|[**STOP SQL SERVER**](../../commands-legacy/stop-sql-server)<br/>The STOP SQL SERVER command stops the integrated SQL server in the 4D application where it has been executed.|
