---
id: json-validate
title: JSON Validate
slug: /commands/json-validate
displayed_sidebar: docs
---

<!--REF #_command_.JSON Validate.Syntax-->**JSON Validate** ( *vJson* : Object, Collection ; *vSchema* : Object ) : Object<!-- END REF-->

<!--REF #_command_.JSON Validate.Params-->

<div class="no-index">

| Parâmetro | Tipo   |                             | Descrição                                                |
| --------- | ------ | --------------------------- | -------------------------------------------------------- |
| vJson     | Object | &#8594; | JSON object to validate                                  |
| vSchema   | Object | &#8594; | JSON schema used to validate JSON objects                |
| Resultado | Object | &#8592; | Validation status and errors (if any) |

</div>
<!-- END REF-->

<div class="no-index">
<details><summary>História</summary>

| Release | Mudanças                             |
| ------- | ------------------------------------ |
| 21 R2   | Support of JSON Schema draft 2020-12 |
| 16 R4   | Created                              |

</details>
</div>

## Descrição

<!--REF #_command_.JSON Validate.Summary-->The **JSON Validate** command checks the compliance of the *vJson* JSON contents with the rules defined in the *vSchema* JSON schema.<!-- END REF--> If the JSON is invalid, the command returns a detailed description of error(s). 

In *vJson*, pass a JSON object containing the JSON contents to be validated.

**Note:** Validating a JSON string consists of checking that it follows the rules defined in a JSON schema. This is different from checking that the JSON is well-formed, which is done by the [JSON Parse](../commands/json-parse) command.

In *vSchema*, pass the JSON schema to use for the validation. For more information on how to create a JSON schema, you may consult the [json-schema.org](http://json-schema.org/) web site.

### Supported JSON schema validation drafts

To validate a JSON object, 4D uses the norm described in a **JSON Schema Validation draft document**. Several versions of these documents have been produced over time.

4D supports two versions of the draft:

- [version 2020-12](https://json-schema.org/draft/2020-12/json-schema-validation) (recommended). All parts of the norm are supported, except:
  - vocabulary
  - `contentEncoding`, `contentMediaType`, and `contentSchema` (validation of non-JSON content)
  - for references: `$dynamicRef`/`$dynamicAnchor` and references in `https:...`
- [version 4](https://tools.ietf.org/html/draft-wright-json-schema-validation-00) (legacy implementation, used by default). Note that the support of this norm has more limitations than version 2020-12.

#### Specifying the version to use

The version to use should be inserted in the schema using the *$schema* key:

- version 2020-12:

```json
"$schema": "https://json-schema.org/draft/2020-12/schema",
```

- version 4:

```json
"$schema": "http://json-schema.org/draft-04/schema#",
```

For compatibility reasons, the version 4 is used if the *$schema* key is omitted. However, it is recommended to use the version 2020-12 which provides the most reliable controls.

:::note

If you declare another schema version using the *$schema* key, an error is returned.

:::

### Validation result

If the JSON schema is not valid, 4D returns a [Null](../commands/null) object and throws an error that can be caught by an [on error call method](../../Concepts/error-handling.md#installing-an-error-handling-method).

The **JSON Validate** returns an object that provides the status of the validation. Este objeto pode conter as seguintes propriedades:

| **Nome da propriedade** | **Tipo**          | **Description**                                                                                                 |
| ----------------------- | ----------------- | --------------------------------------------------------------------------------------------------------------- |
| *success*               | Parâmetros        | True if *vJson* is validated, false otherwise. If false, the *errors* property is also returned |
| *errors*                | Object collection | List of error objects if the *vJson* is not validated (see below)                            |

Each error object of the *errors* collection contains the following properties:

| **Nome da propriedade** | **Tipo** | **Description**                                                                                                                                                                                                                                    |
| ----------------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| *código*                | Number   | Código de erro                                                                                                                                                                                                                                     |
| *jsonPath*              | Text     | JSON path that cannot be validated in *vJson*                                                                                                                                                                                                      |
| *line*                  | Number   | Line number of the error in the JSON file. This property is filled if the JSON has been parsed by [JSON Parse](../commands/json-parse) with the *\** parameter. Otherwise, the property is omitted. |
| *message*               | Text     | Mensagem de erro                                                                                                                                                                                                                                   |
| *offset*                | Number   | Line offset of the error in the JSON file. This property is filled if the JSON has been parsed by [JSON Parse](../commands/json-parse) with the *\** parameter. Otherwise, the property is omitted. |
| *schemaPaths*           | Text     | JSON path in the schema that causes the validation error                                                                                                                                                                                           |

### Error list

<details>The following errors may be returned:

| **Code** | **JSON Keyword**     | **Message**                                                                                                                                                   |
| -------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2        | multipleOf           | Error while validating against 'multipleOf' key.                                                                                              |
| 3        | maximum              | The value provided should not be greater than specified in the schema ("{s1}").                                            |
| 4        | exclusiveMaximum     | The value provided should be less than specified in the schema ("{s1}").                                                   |
| 5        | mínimo               | The value provided should not be less than specified in the schema ("{s1}").                                               |
| 6        | exclusiveMinimum     | The value provided should be greater than specified in the schema ("{s1}").                                                |
| 7        | maxLength            | The string is longer than specified in the schema.                                                                                            |
| 8        | minLength            | The string is shorter than specified in the schema.                                                                                           |
| 9        | padrão               | The string "{s1}" does not match the pattern in the schema:{s2}.                                                              |
| 10       | additionalItems      | Error while validating an array. JSON contains more elements than specified in the schema.                                    |
| 11       | maxItems             | The array contains more items than specified in the schema.                                                                                   |
| 12       | minItems             | The array contains less items than specified in the schema.                                                                                   |
| 13       | uniqueItems          | Error while validating an array. Elements are not unique. Another instance of "{s1}" is already in the array. |
| 14       | maxProperties        | The number of properties is greater than specified in the schema.                                                                             |
| 15       | minProperties        | The number of properties is less than specified in the schema.                                                                                |
| 16       | required             | The required property "{s1}" is missing.                                                                                                      |
| 17       | additionalProperties | No additional properties allowed by the schema. The property(ies) {s1} should be removed.                  |
| 18       | dependencies         | The property "{s1}" requires the property "{s2}".                                                                                             |
| 19       | enum                 | Error while validating against 'enum' key. "{s1}" does not match any enum element in the schema.                              |
| 20       | type                 | Incorrect type. Expected type is: {s1}                                                                                        |
| 21       | oneOf                | The JSON matches more than one value.                                                                                                         |
| 22       | oneOf                | The JSON does not match any value.                                                                                                            |
| 23       | not                  | The JSON is invalid against the value of 'not'.                                                                                               |
| 24       | format               | The string does not match ("{s1}")                                                                                                         |
| 25       | const                | Value "{s1}" does not match the 'const' value in the schema.                                                                                  |
| 26       | unevalutedProperties | Unevaluated properties are not allowed by the schema. The property(ies) {s1} should be removed.            |
| 27       | unevalutedItems      | Unevaluated array items are not allowed. Item at index {s1} is not covered by any schema.                                     |
| 28       | propertyNames        | Property name "{s1}" does not validate against the 'propertyNames' schema.                                                                    |
| 29       | contains             | Array does not contain any items matching the 'contains' schema.                                                                              |
| 30       | contains             | Array must contain at least {s1} items matching the 'contains' schema, but only {s2} were found.                                              |
| 31       | contains             | Array must contain at most {s1} items matching the 'contains' schema, but {s2} were found.                                                    |
| 32       | required             | The property "{s1}" requires the property "{s2}" to be present.                                                                               |
| 35       | prefixItems          | Array items at the beginning do not match the 'prefixItems' schemas.                                                                          |
| 36       | dependentSchemas     | Validation failed against 'dependentSchemas'.                                                                                                 |
| 37       | $ref                 | Reference could not be resolved.                                                                                                              |
| 38       | $ref                 | Circular reference detected.                                                                                                                  |

</details>

:::tip Related blog post

[Simplify JSON Validation and Boost Robustness](https://blog.4d.com/simplify-json-validation-and-boost-robustness)

:::

## Exemplo

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

## Veja também

[JSON Parse](../commands/json-parse)

## Propriedades

|                   |      |
| ----------------- | ---- |
| Número de comando | 1456 |
| Thread safe       | sim  |


