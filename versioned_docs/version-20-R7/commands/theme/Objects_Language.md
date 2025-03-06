---
id: Objects_Language
title: Objects (Language)
---
||
|---|
|[**New object** {( *property* ; *value* {; *property2* ; *value2* ; ... ; *propertyN* ; *valueN*} )} : Object](../../commands-legacy/new-object)<br/>The **New object** command creates a new empty or prefilled object and returns its reference.|
|[**New shared object** {( *property* ; *value* {; *property2* ; *value2* ; ... ; *propertyN* ; *valueN*} )} : Object](../../commands-legacy/new-shared-object)<br/>The **New shared object** command creates a new empty or prefilled shared object and returns its reference.|
|[**OB Class** ( *object* ) : any](../../commands-legacy/ob-class)<br/>The **OB Class** command returns the class of the *object* passed in parameter.|
|[**OB Copy** ( *object* {; resolvePtrs | {; *option* {; *groupWith*}}} )  : Object](../../commands-legacy/ob-copy)<br/>The **OB Copy** command returns an object containing a complete (deep) copy of the properties, sub-objects and values for the *object*.|
|[**OB Entries** ( *object* ) : Collection](../../commands-legacy/ob-entries)<br/>The **OB Entries** command returns a collection of objects containing the contents of the *object* as key / value property pairs.|
|[**OB Get** ( *object* ; *property* {; *type*} ) : Expression](../../commands-legacy/ob-get)<br/>The **OB Get** command returns the current value of the *property* of the *object*, optionally converted into the *type* specified.|
|[**OB GET ARRAY** ( *object* ; *property* ; *array* )](../../commands-legacy/ob-get-array)<br/>The **OB GET ARRAY** command retrieves, in *array*, the array of values stored in the *property* of the language object designated by the *object* parameter.|
|[**OB GET PROPERTY NAMES** ( *object* ; *arrProperties* {; *arrTypes*} )](../../commands-legacy/ob-get-property-names)<br/>The **OB GET PROPERTY NAMES** command returns, in *arrProperties*, the names of the properties contained in the language object designated by the *object* parameter.|
|[**OB Get type** ( *object* ; *property* ) : Integer](../../commands-legacy/ob-get-type)<br/>The **OB Get type** command returns the type of value associated with the *property* of the language *object*.|
|[**OB Instance of** ( *object* ; *class* ) : Boolean](../../commands-legacy/ob-instance-of)<br/>The **OB Instance of** command returns true if *object* belongs to *class* or to one of its child classes, and false otherwise.|
|[**OB Is defined** ( *object* {; *property*} ) : Boolean](../../commands-legacy/ob-is-defined)<br/>The **OB Is defined** command returns True if *object* or *property* is defined, and False otherwise.|
|[**OB Is empty** ( *object* ) : Boolean](../../commands-legacy/ob-is-empty)<br/>The **OB Is empty** command returns True if *object* is undefined or empty, and False if *object* is defined (initialized) and contains at least one property.|
|[**OB Is shared** ( *toCheck* ) : Boolean](../../commands-legacy/ob-is-shared)<br/>The **OB Is shared** command returns **True** if the *toCheck* object or collection is shared, and **False** otherwise (see *Shared objects and shared collections*).|
|[**OB Keys** ( *object* ) : Collection](../../commands-legacy/ob-keys)<br/>The **OB Keys** command returns a collection of strings containing all of the enumerable property names of the *object*.|
|[**OB REMOVE** ( *object* ; *property* )](../../commands-legacy/ob-remove)<br/>The **OB REMOVE** command removes the *property* of the language object designated by the *object* parameter.|
|[**OB SET** ( *object* ; *property* ; *value* {; *property2* ; *value2* ; ... ; *propertyN* ; *valueN*} )](../../commands-legacy/ob-set)<br/>The **OB SET** command creates or modifies one or more *property*/*value* pairs in the language object designated by the *object* parameter.|
|[**OB SET ARRAY** ( *object* ; *property* ; *array* )](../../commands-legacy/ob-set-array)<br/>The **OB SET ARRAY** command defines the *array* to be associated with the *property* in the language object designated by the *object* parameter.|
|[**OB SET NULL** ( *object* ; *property* )](../../commands-legacy/ob-set-null)<br/>The **OB SET NULL** command stores the **null** value in the language object designated by the *object* parameter.|
|[**OB Values** ( *object* ) : Collection](../../commands-legacy/ob-values)<br/>The **OB Values** command returns a collection of variants containing all of the enumerable property values of the *object*.|
|[**Storage**  : Object](../../commands-legacy/storage)<br/>The **Storage** method returns the catalog of shared objects or shared collections that you have registered in the *Storage* object on the current machine or component.|
