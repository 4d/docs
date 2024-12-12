---
id: json-validate
title: JSON Validate
slug: /commands/json-validate
displayed_sidebar: docs
---

<!--REF #_command_.JSON Validate.Syntax-->**JSON Validate** ( *vJson* ; *vSchema* ) : Object<!-- END REF-->
<!--REF #_command_.JSON Validate.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| vJson | Object | &#8594;  | Objeto JSON a validar |
| vSchema | Object | &#8594;  | Esquema JSON utilizado para validar objetos JSON |
| Resultado | Object | &#8592; | Estado de validación y errores (si los hay) |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.JSON Validate.Summary-->El comando **JSON Validate** verifica la conformidad del contenido JSON *vJson* con las reglas definidas en el esquema JSON *vSchema*.<!-- END REF--> Si el JSON no es válido, el comando devuelve una descripción detallada de los errores.

Pase en *vJson* un objeto JSON que contiene el contenido JSON a validar.

**Nota:** la validación de una cadena JSON consiste en comprobar que sigue las reglas definidas en un esquema JSON. Esto es diferente a comprobar que el JSON está bien formado, lo cual hace el comando [JSON Parse](json-parse.md). 

Pase en *vSchema* el esquema JSON a utilizar para la validación. Para mayor información sobre cómo crear un esquema JSON, puede consultar el sitio web [json-schema.org](http://json-schema.org/).

**Nota:** para validar un objeto JSON, 4D utiliza la norma descrita en el documento [JSON Schema Validation](https://tools.ietf.org/html/draft-wright-json-schema-validation-00) (este borrador aún se está escribiendo y puede evolucionar en el futuro). La implementación de 4D se basa en la versión 4 de este documento.   
  
Si el esquema JSON no es válido, 4D devuelve un objeto [Null](null.md) y genera un error que puede detectarse por un método de llamada de error.

**JSON Validate** devuelve un objeto que ofrece el estado de la validación. Este objeto puede contener las siguientes propiedades:

| **Nombre de propiedad** | **Tipo**             | **Descripción**                                                                                              |
| ----------------------- | -------------------- | ------------------------------------------------------------------------------------------------------------ |
| *success*               | Booleano             | True si *vJson* está validado, false en caso contrario. Si es false, la propiedad errors también se devuelve |
| *errors*                | Colección de objetos | Lista de objetos de error en caso de que *vJson* no esté validado (ver abajo)                                |

Cada objeto de error de la colección *errors* contiene las siguientes propiedades:

| **Nombre de propiedad** | **Tipo** | **Descripción**                                                                                                                                                                                           |
| ----------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| *code*                  | Número   | Código de error                                                                                                                                                                                           |
| *jsonPath*              | Cadena   | Ruta JSON que no se puede validar en *vJson*                                                                                                                                                              |
| *line*                  | Número   | Número de línea del error en el archivo JSON. Esta propiedad se llena si el JSON ha sido analizado por [JSON Parse](json-parse.md) con el parámetro *\**. De lo contrario, la propiedad se omite.         |
| *message*               | Cadena   | Mensaje de error                                                                                                                                                                                          |
| *offset*                | Número   | Desplazamiento de línea del error en el archivo JSON. Esta propiedad se llena si el JSON ha sido analizado por [JSON Parse](json-parse.md) con el parámetro *\**. De lo contrario, la propiedad se omite. |
| *schemaPaths*           | Cadena   | Ruta JSON en el esquema que causa el error de validación                                                                                                                                                  |

##### Gestión de errores 

Se pueden devolver los siguientes errores:  

| **Código** | **Palabra clave JSON** | **Mensaje\[#table\]**                                                                                        |
| ---------- | ---------------------- | ------------------------------------------------------------------------------------------------------------ |
| 2          | multipleOf             | Error al validar contra la llave'multipleOf'.                                                                |
| 3          | maximum                | El valor dado no debe ser mayor que el especificado en el esquema ("{s1}").                                  |
| 4          | exclusiveMaximum       | El valor dado debe ser menor que el especificado en el esquema ("{s1}").                                     |
| 5          | minimum                | El valor dado no debe ser menor que el especificado en el esquema ("{s1}").                                  |
| 6          | exclusiveMinimum       | El valor dado debe ser mayor que el especificado en el esquema ("{s1}").                                     |
| 7          | maxLength              | La cadena es más larga que la especificada en el esquema.                                                    |
| 8          | minLength              | La cadena es más corta que la especificada en el esquema.                                                    |
| 9          | pattern                | La cadena "{s1}" no coincide con el patrón del esquema: {s2}.                                                |
| 10         | additionalItems        | Error al validar un array. JSON contiene más elementos que los especificados en el esquema.                  |
| 11         | maxItems               | El array contiene más elementos que los especificados en el esquema.                                         |
| 12         | minItems               | El array contiene menos elementos que los especificados en el esquema.                                       |
| 13         | uniqueItems            | Error al validar un array. Los elementos no son únicos. Otra instancia de "{s1}" ya está en el array.        |
| 14         | maxProperties          | El número de propiedades es mayor que el especificado en el esquema.                                         |
| 15         | minProperties          | El número de propiedades es menor que el especificado en el esquema.                                         |
| 16         | required               | Falta la propiedad requerida "{s1}".                                                                         |
| 17         | additionalProperties   | No hay propiedades adicionales permitidas por el esquema. La(s) propiedad(es) {s1} debe(n) ser eliminada(s). |
| 18         | dependencies           | La propiedad "{s1}" requiere la propiedad "{s2}".                                                            |
| 19         | enum                   | Error al validar contra la llave 'enum'. "{s1}" no coincide con ningún elemento enum del esquema.            |
| 20         | type                   | Tipo incorrecto. El tipo esperado es: {s1}                                                                   |
| 21         | oneOf                  | El JSON coincide con más de un valor.                                                                        |
| 22         | oneOf                  | El JSON no coincide con ningún valor.                                                                        |
| 23         | not                    | El JSON es válido contra el valor de 'not'.                                                                  |
| 24         | format.                | La cadena no coincide ("{s1}")                                                                               |

#### Ejemplo 

Usted desea validar un objeto JSON con un esquema y obtener la lista de errores de validación, si los hay, y guardar líneas de error y mensajes en una variable texto:

```4d
 var $oResult : Object
 $oResult:=JSON Validate(JSON Parse(myJson;*);mySchema)
 If($oResult.success) //validación exitosa
    ...
 Else //Validación fallida
    var $vLNbErr : Integer
    var $vTerrLine : Text
    $vLNbErr:=$oResult.errors.length ///obtener el número de error(es)
    ALERT(String($vLNbErr)+" validation error(s) found.")
    For($i;0;$vLNbErr)
       $vTerrLine:=$vTerrLine+$oResult.errors[$i].message+" "+String($oResult.errors[$i].line)+Carriage return
    End for
 End if
```

**Nota:** este ejemplo requiere que la notación de objeto esté activada (ver el párrafo *Página Compatibilidad*). 

#### Ver también 

  
  
[JSON Parse](json-parse.md)  