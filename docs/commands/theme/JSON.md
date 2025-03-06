---
id: JSON
title: JSON
---
||
|---|
|[**JSON Parse** ( *jsonString* {; *type*}{; *} ) : any](../../commands-legacy/json-parse)<br/>The **JSON Parse** command parses the contents of a JSON-formatted string and extracts values that you can store in a 4D field or variable.|
|[**JSON PARSE ARRAY** ( *jsonString* ; *array* )](../../commands-legacy/json-parse-array)<br/>The **JSON PARSE ARRAY** command parses the contents of a JSON-formatted string and puts the data extracted into the *array* parameter.|
|[**JSON Resolve pointers** ( *object* {; *options*} ) : Object](../../commands-legacy/json-resolve-pointers)<br/>The **JSON Resolve pointers** command resolves all the JSON pointers found in the *object*, with regards to *options* settings (if any).|
|[**JSON Stringify** ( *value* {; *} ) : Text](../../commands-legacy/json-stringify)<br/>The **JSON Stringify** command converts the *value* parameter into a JSON string.|
|[**JSON Stringify array** ( *array* {; *} ) : Text](../../commands-legacy/json-stringify-array)<br/>The **JSON Stringify array** command converts the 4D array *array* into a serialized JSON array.|
|[**JSON TO SELECTION** ( *aTable* ; *jsonArray* )](../../commands-legacy/json-to-selection)<br/>The **JSON TO SELECTION** command copies the contents of an array of JSON objects *jsonArray* to the selection of records of *aTable*.|
|[**JSON Validate** ( *vJson* ; *vSchema* ) : Object](../../commands-legacy/json-validate)<br/>The **JSON Validate** command checks the compliance of the *vJson* JSON contents with the rules defined in the *vSchema* JSON schema.|
|[**Selection to JSON** ( *aTable* {; *aField*}{; *aField2* ; ... ; *aFieldN*}{; *template*})  : Text](../../commands-legacy/selection-to-json)<br/>The **Selection to JSON** command returns a string containing a JSON array with as many elements as there are records in the current selection of *aTable*.|
