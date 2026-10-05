---
id: json-validate
title: JSON Validate
slug: /commands/json-validate
displayed_sidebar: docs
---

<!--REF #_command_.JSON Validate.Syntax-->**JSON Validate** ( *vJson* : Object, Collection ; *vSchema* : Object ) : Object<!-- END REF-->

<!--REF #_command_.JSON Validate.Params-->

<div class="no-index">

| Parámetros | Tipo   |                             | Descripción                                              |
| ---------- | ------ | --------------------------- | -------------------------------------------------------- |
| vJson      | Object, Collection | &#8594; | Objeto o colección JSON que se va a validar |
| vSchema    | Object | &#8594; | Esquema JSON utilizado para validar objetos JSON |
| Resultado  | Object | &#8592; | Estado de la validación y errores (si los hay) |

</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historia</summary>

| Lanzamiento | Modificaciones                       |
| ----------- | ------------------------------------ |
| 21 R2       | Compatibilidad con JSON Schema draft 2020-12 |
| 16 R4       | Creado |

</details>
</div>

## Descripción

<!--REF #_command_.JSON Validate.Summary-->El comando **JSON Validate** comprueba que el contenido JSON de *vJson* cumple las reglas definidas en el esquema JSON *vSchema*.<!-- END REF--> Si el JSON no es válido, el comando devuelve una descripción detallada de los errores.

En *vJson*, pase un objeto JSON que contenga los datos JSON que se van a validar.

**Nota:** Validar una cadena JSON consiste en comprobar que sigue las reglas definidas en un esquema JSON. Esto es distinto de comprobar que el JSON está bien formado, lo que realiza el comando [JSON Parse](../commands/json-parse).

En *vSchema*, pase el esquema JSON que se utilizará para la validación. Para obtener más información sobre cómo crear un esquema JSON, consulte el sitio web [json-schema.org](http://json-schema.org/).

### Drafts de validación JSON Schema compatibles

Para validar un objeto JSON, 4D utiliza la norma descrita en un **documento draft de JSON Schema Validation**. A lo largo del tiempo se han publicado varias versiones de estos documentos.

4D admite dos versiones del draft:

- [versión 2020-12](https://json-schema.org/draft/2020-12/json-schema-validation) (recomendada). Se admiten todas las partes de la norma, excepto:
  - vocabulary
  - `contentEncoding`, `contentMediaType` y `contentSchema` (validación de contenido que no es JSON)
  - para las referencias: `$dynamicRef`/`$dynamicAnchor` y las referencias en `https:...`
- [versión 4](https://tools.ietf.org/html/draft-wright-json-schema-validation-00) (implementación heredada, utilizada por defecto). La compatibilidad con esta norma tiene más limitaciones que la versión 2020-12.

#### Especificar la versión que se va a utilizar

La versión que se va a utilizar debe indicarse en el esquema mediante la clave *$schema*:

- versión 2020-12:

```json
"$schema": "https://json-schema.org/draft/2020-12/schema",
```

- versión 4:

```json
"$schema": "http://json-schema.org/draft-04/schema#",
```

Por motivos de compatibilidad, se utiliza la versión 4 si se omite la clave *$schema*. No obstante, se recomienda utilizar la versión 2020-12, que proporciona las validaciones más fiables.

:::note

Si declara otra versión del esquema mediante la clave *$schema*, se devuelve un error.

:::

### Resultado de la validación

Si el esquema JSON no es válido, 4D devuelve un objeto [Null](../commands/null) y genera un error que puede capturarse mediante un [método de gestión de errores](../../Concepts/error-handling.md#installing-an-error-handling-method).

**JSON Validate** devuelve un objeto que indica el estado de la validación. Este objeto puede contener las siguientes propiedades:

| **Nombre de propiedad** | **Tipo**          | **Descripción** |
| ----------------------- | ----------------- | -------------- |
| *success*               | Boolean           | True si *vJson* es válido; false en caso contrario. Si es false, también se devuelve la propiedad *errors*. |
| *errors*                | Object collection | Lista de objetos de error si *vJson* no es válido (véase más abajo). |

Cada objeto de error de la colección *errors* contiene las siguientes propiedades:

| **Nombre de propiedad** | **Tipo** | **Descripción** |
| ----------------------- | -------- | -------------- |
| *code*                  | Number   | Código de error |
| *jsonPath*              | Text     | Ruta JSON que no se puede validar en *vJson* |
| *line*                  | Number   | Número de línea del error en el archivo JSON. Esta propiedad se completa si el JSON se ha analizado con el parámetro *\** de [JSON Parse](../commands/json-parse). De lo contrario, se omite. |
| *message*               | Text     | Mensaje de error |
| *offset*                | Number   | Desplazamiento de línea del error en el archivo JSON. Esta propiedad se completa si el JSON se ha analizado con el parámetro *\** de [JSON Parse](../commands/json-parse). De lo contrario, se omite. |
| *schemaPaths*           | Text     | Ruta JSON del esquema que provoca el error de validación |

### Lista de errores

<details>Se pueden devolver los siguientes errores:

| **Código** | **Palabra clave JSON** | **Mensaje** |
| -------- | ---------------------- | ----------- |
| 2 | multipleOf | Error al validar la clave 'multipleOf'. |
| 3 | maximum | El valor proporcionado no debe superar el especificado en el esquema ("{s1}"). |
| 4 | exclusiveMaximum | El valor proporcionado debe ser inferior al especificado en el esquema ("{s1}"). |
| 5 | minimum | El valor proporcionado no debe ser inferior al especificado en el esquema ("{s1}"). |
| 6 | exclusiveMinimum | El valor proporcionado debe ser superior al especificado en el esquema ("{s1}"). |
| 7 | maxLength | La cadena supera la longitud especificada en el esquema. |
| 8 | minLength | La cadena no alcanza la longitud especificada en el esquema. |
| 9 | pattern | La cadena "{s1}" no coincide con el patrón del esquema: {s2}. |
| 10 | additionalItems | Error al validar un array. El JSON contiene más elementos de los especificados en el esquema. |
| 11 | maxItems | El array contiene más elementos de los especificados en el esquema. |
| 12 | minItems | El array contiene menos elementos de los especificados en el esquema. |
| 13 | uniqueItems | Error al validar un array. Los elementos no son únicos. Ya existe otra instancia de "{s1}" en el array. |
| 14 | maxProperties | El número de propiedades supera el especificado en el esquema. |
| 15 | minProperties | El número de propiedades es inferior al especificado en el esquema. |
| 16 | required | Falta la propiedad obligatoria "{s1}". |
| 17 | additionalProperties | El esquema no permite propiedades adicionales. Se debe eliminar la(s) propiedad(es) {s1}. |
| 18 | dependencies | La propiedad "{s1}" requiere la propiedad "{s2}". |
| 19 | enum | Error al validar la clave 'enum'. "{s1}" no coincide con ningún elemento enum del esquema. |
| 20 | type | Tipo incorrecto. El tipo esperado es: {s1}. |
| 21 | oneOf | El JSON coincide con más de un valor. |
| 22 | oneOf | El JSON no coincide con ningún valor. |
| 23 | not | El JSON no es válido frente al valor de 'not'. |
| 24 | format | La cadena no coincide con ("{s1}"). |
| 25 | const | El valor "{s1}" no coincide con el valor 'const' del esquema. |
| 26 | unevalutedProperties | El esquema no permite propiedades no evaluadas. Se debe eliminar la(s) propiedad(es) {s1}. |
| 27 | unevalutedItems | No se permiten elementos de array no evaluados. El elemento del índice {s1} no está cubierto por ningún esquema. |
| 28 | propertyNames | El nombre de propiedad "{s1}" no se valida con el esquema 'propertyNames'. |
| 29 | contains | El array no contiene elementos que coincidan con el esquema 'contains'. |
| 30 | contains | El array debe contener al menos {s1} elementos que coincidan con el esquema 'contains', pero solo se encontraron {s2}. |
| 31 | contains | El array debe contener como máximo {s1} elementos que coincidan con el esquema 'contains', pero se encontraron {s2}. |
| 32 | required | La propiedad "{s1}" requiere que esté presente la propiedad "{s2}". |
| 35 | prefixItems | Los elementos iniciales del array no coinciden con los esquemas 'prefixItems'. |
| 36 | dependentSchemas | Error de validación en 'dependentSchemas'. |
| 37 | $ref | No se pudo resolver la referencia. |
| 38 | $ref | Se ha detectado una referencia circular. |

</details>

:::tip Entrada de blog relacionada

[Simplify JSON Validation and Boost Robustness](https://blog.4d.com/simplify-json-validation-and-boost-robustness)

:::

## Ejemplo

Desea validar un objeto JSON con un esquema, obtener la lista de errores de validación si los hay y almacenar las líneas y los mensajes de error en una variable de texto:

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

## Ver también

[JSON Parse](../commands/json-parse)

## Propiedades

|                   |      |
| ----------------- | ---- |
| Número de comando | 1456 |
| Hilo seguro       | sí   |


