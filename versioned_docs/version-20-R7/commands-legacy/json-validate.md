---
id: json-validate
title: JSON Validate
slug: /commands/json-validate
displayed_sidebar: docs
---

<!--REF #_command_.JSON Validate.Syntax-->**JSON Validate** ( *vJson* ; *vSchema* ) : Object<!-- END REF-->
<!--REF #_command_.JSON Validate.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| vJson | Object | &#8594;  | JSON object to validate |
| vSchema | Object | &#8594;  | JSON schema used to validate JSON objects |
| Function result | Object | &#8592; | Validation status and errors (if any) |

<!-- END REF-->

#### Description 

<!--REF #_command_.JSON Validate.Summary-->The **JSON Validate** command checks the compliance of the *vJson* JSON contents with the rules defined in the *vSchema* JSON schema.<!-- END REF--> If the JSON is invalid, the command returns a detailed description of error(s). 

In *vJson*, pass a JSON object containing the JSON contents to be validated. 

**Note:** Validating a JSON string consists of checking that it follows the rules defined in a JSON schema. This is different from checking that the JSON is well-formed, which is done by the [JSON Parse](json-parse.md) command. 

In *vSchema*, pass the JSON schema to use for the validation. For more information on how to create a JSON schema, you may consult the [json-schema.org](http://json-schema.org/) web site.

**Note:** To validate a JSON object, 4D uses the norm described in the [JSON Schema Validation](https://tools.ietf.org/html/draft-wright-json-schema-validation-00) document (this draft is still being written and can evolve in the future). 4D's current implementation is based upon the version 4 of the draft. 

 If the JSON schema is not valid, 4D returns a [Null](null.md) object and throws an error that can be caught by an on error call method.

The **JSON Validate** returns an object that provides the status of the validation. This object can contain the following properties:  

| **Property name** | **Type**          | **Description**                                                                                 |
| ----------------- | ----------------- | ----------------------------------------------------------------------------------------------- |
| *success*         | Boolean           | True if *vJson* is validated, false otherwise. If false, the *errors* property is also returned |
| *errors*          | Object collection | List of error objects if the *vJson* is not validated (see below)                               |

Each error object of the *errors* collection contains the following properties:  

| **Property name** | **Type** | **Description**                                                                                                                                                                            |
| ----------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| *code*            | Number   | Error code                                                                                                                                                                                 |
| *jsonPath*        | Text   | JSON path that cannot be validated in *vJson*                                                                                                                                              |
| *line*            | Number   | Line number of the error in the JSON file. This property is filled if the JSON has been parsed by [JSON Parse](json-parse.md) with the *\** parameter. Otherwise, the property is omitted. |
| *message*         | Text   | Error message                                                                                                                                                                              |
| *offset*          | Number   | Line offset of the error in the JSON file. This property is filled if the JSON has been parsed by [JSON Parse](json-parse.md) with the *\** parameter. Otherwise, the property is omitted. |
| *schemaPaths*     | Text   | JSON path in the schema that causes the validation error                                                                                                                                   |

##### Error management 

The following errors may be returned :   

| **Code** | **JSON Keyword**     | **Message**                                                                                                   |
| -------- | -------------------- | ------------------------------------------------------------------------------------------------------------- |
| 2        | multipleOf           | Error while validating against 'multipleOf' key.                                                              |
| 3        | maximum              | The value provided should not be greater than specified in the schema ("{s1}").                               |
| 4        | exclusiveMaximum     | The value provided should be less than specified in the schema ("{s1}").                                      |
| 5        | minimum              | The value provided should not be less than specified in the schema ("{s1}").                                  |
| 6        | exclusiveMinimum     | The value provided should be greater than specified in the schema ("{s1}").                                   |
| 7        | maxLength            | The string is longer than specified in the schema.                                                            |
| 8        | minLength            | The string is shorter than specified in the schema.                                                           |
| 9        | pattern              | The string "{s1}" does not match the pattern in the schema:{s2}.                                              |
| 10       | additionalItems      | Error while validating an array. JSON contains more elements than specified in the schema.                    |
| 11       | maxItems             | The array contains more items than specified in the schema.                                                   |
| 12       | minItems             | The array contains less items than specified in the schema.                                                   |
| 13       | uniqueItems          | Error while validating an array. Elements are not unique. Another instance of "{s1}" is already in the array. |
| 14       | maxProperties        | The number of properties is greater than specified in the schema.                                             |
| 15       | minProperties        | The number of properties is less than specified in the schema.                                                |
| 16       | required             | The required property "{s1}" is missing.                                                                      |
| 17       | additionalProperties | No additional properties allowed by the schema. The property(ies) {s1} should be removed.                     |
| 18       | dependencies         | The property "{s1}" requires the property "{s2}".                                                             |
| 19       | enum                 | Error while validating against 'enum' key. "{s1}" does not match any enum element in the schema.              |
| 20       | type                 | Incorrect type. Expected type is: {s1}                                                                        |
| 21       | oneOf                | The JSON matches more than one value.                                                                         |
| 22       | oneOf                | The JSON does not match any value.                                                                            |
| 23       | not                  | The JSON is valid against the value of 'not'.                                                                 |
| 24       | format               | The string does not match ("{s1}")                                                                            |

#### Example 

You want to validate a JSON object with a schema and get the list of validation errors, if any, and store error lines and messages in a text variable:

```4d
 var $oResult : Object
 $oResult:=JSON Validate(JSON Parse(myJson;*);mySchema)
 If($oResult.success) //validation successful
    ...
 Else //validation failed
    var $vLNbErr : Integer
    var $vTerrLine : Text
    $vLNbErr:=$oResult.errors.length ///get the number of error(s)
    ALERT(String($vLNbErr)+" validation error(s) found.")
    For($i;0;$vLNbErr)
       $vTerrLine:=$vTerrLine+$oResult.errors[$i].message+" "+String($oResult.errors[$i].line)+Carriage return
    End for
 End if
```

**Note:** This example requires that object notation is activated (see the *Compatibility page*). 

#### See also 

  
  
[JSON Parse](json-parse.md)  