---
id: json-resolve-pointers
title: JSON Resolve pointers
slug: /commands/json-resolve-pointers
displayed_sidebar: docs
---

<!--REF #_command_.JSON Resolve pointers.Syntax-->**JSON Resolve pointers** ( *objeto* {; *opciones*} ) : Object<!-- END REF-->
<!--REF #_command_.JSON Resolve pointers.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| objeto | Object | &#8594;  | Objeto que contiene punteros JSON para resolver |
| &#8592; | Objeto con punteros JSON resueltos (sólo si resultado es un objeto) |
| opciones | Object | &#8594;  | Opciones para la resolución de punteros |
| Resultado | Object | &#8592; | Objeto que contiene el resultado del proceso |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.JSON Resolve pointers.Summary-->El comando **JSON Resolve pointers** resuelve todos los punteros JSON encontrados en el objeto, con respecto a la configuración de opciones (si existe).<!-- END REF-->

Los punteros JSON son particularmente útiles para:

* anidar parte de un documento JSON externo o reutilizar una parte de un documento JSON en otros lugares en el mismo documento JSON, con el fin de factorizar la información,
* expresan una estructura cíclica en JSON,
* definir un objeto de plantilla que contiene las propiedades predeterminadas almacenadas en JSON.

Pase en el parámetro *objeto* un objeto que contiene punteros JSON que se deben resolver (para más información sobre la sintaxis del puntero JSON, consulte el párrafo *Definir punteros JSON* abajo). 

**Nota:** el *objeto* fuente se actualizará con el resultado de la resolución del puntero después de ejecutar el comando (excepto si el resultado no es un objeto, consulte abajo). Si desea conservar una versión original del objeto, puede considerar utilizar previamente [OB Copy](ob-copy.md). 

Opcionalmente, puede pasar en *opciones* un objeto que contenga propiedades específicas que se utilizarán al resolver punteros. Se soportan las siguientes propiedades:

| **Propiedad** | **Tipo de valor** | **Descripción**                                                                                                                                                                            |
| ------------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| rootFolder    | Cadena            | Ruta absoluta (utilizando la sintaxis 4D estándar) a la carpeta que se utilizará para resolver punteros relativos en el objeto. El valor predeterminado es la carpeta Recursos de la base. |
| merge         | Booleano          | Fusiona objetos con objetos puntero (true) en lugar de reemplazarlos (false). El valor predeterminado es false ![](../assets/en/commands/pict3516702.es.png)                               |

Después de ejecutar el comando:

* si el resultado de la resolución del puntero es un objeto, el *objeto* se actualiza y contiene el objeto resultante.
* si el resultado de la resolución del puntero es un valor escalar (es decir, un texto, un número...), el objeto se deja intacto y el valor resultante se devuelve en la propiedad "valor" del resultado de la función.

En todos los casos, el comando devuelve un objeto que contiene las siguientes propiedades:

| **Propiedad**           | **Tipo de valor** | **Descripción**                                                                                                    |
| ----------------------- | ----------------- | ------------------------------------------------------------------------------------------------------------------ |
| value                   | Cualquiera        | Resultado del procesamiento del comando en *objeto*. Si el resultado es un objeto, es igual al *objeto* de salida. |
| success                 | Booleano          | true si todos los punteros han sido resueltos correctamen                                                          |
| errors                  | Colección         | Colección de errores si los hay                                                                                    |
| errors\[\].code         | Número            | código del error                                                                                                   |
| errors\[\].message      | Cadena            | mensaje de error                                                                                                   |
| errors\[\].pointerURI   | Cadena            | valor del puntero                                                                                                  |
| errors\[\].referredPath | Cadena            | ruta completa del documento                                                                                        |

#### Definir punteros JSON 

JSON Pointer es un estándar que define una sintaxis de cadena que se puede utilizar para acceder a un campo o a un valor clave particular en todo el documento JSON. El estándar se ha descrito en [RFC 6901](https://tools.ietf.org/html/rfc6901). 

Un puntero JSON es, estrictamente hablando, una cadena compuesta de partes separadas por '/'. Un puntero JSON normalmente se encuentra en un URI que especifica el documento en el que se resolverá el puntero. El carácter de fragmento "#" se utiliza en la URI para especificar el puntero JSON Por convención, se puede encontrar un URI que contenga un puntero JSON en una propiedad de objeto JSON que debe llamarse "$ ref".

```json
{
   "$ref":<path>#<json_pointer>
}
```

**Nota**: 4D no soporta el carácter "-" como referencia a elementos de array inexistentes.

##### Recursividad y resolución de ruta 

Los punteros JSON se resuelven recursivamente, lo que significa que si un puntero resuelto también contiene punteros, se resuelven recursivamente y así sucesivamente, hasta que se resuelvan todos los punteros. En este contexto, todas las rutas de archivo encontradas en las URIs de puntero JSON pueden ser relativas o absolutas. Deben utilizar '/' como delimitador de ruta y se resuelven de la siguiente manera:

* Una ruta relativa no debe comenzar con '/'. Se resuelve relativamente al documento JSON donde se ha encontrado la cadena de ruta de acceso,
* Una ruta absoluta comienza con '/'. Solo las [rutas filesystem](../Concepts/paths.md#filesystem-pathnames) se aceptan como rutas absolutas. Por ejemplo, "/RESOURCES/templates/myfile.json" apunta al archivo "myfile.json" que se encuentra en la carpeta de recursos de la base de datos actual.

**Notas:**

* La resolución del nombre distingue entre mayúsculas y minúsculas.
* 4D no resuelve una ruta a un archivo json ubicado en la red (que empiece por "http/https").

#### Ejemplo 1 

Este ejemplo básico ilustra cómo un puntero JSON se puede definir y reemplazar en un objeto:

```4d
  // crear un objeto con algún valor
 var $o : Object
 $o:=New object("value";42)
 
  // crear el objeto puntero JSON
 var $ref : Object
 $ref:=New object("$ref";"#/value")
 
  // añadir el objeto puntero JSON como propiedad
 $o.myJSONPointer:=$ref
 
  // resolverlo todo y verificar que el puntero se ha resuelto
 var $result : Object
 $options:=New object("rootFolder";Get 4D folder(Current resources folder);"merge";True)
 $result:=JSON Resolve pointers($o;$options)
 If($result.success)
    ALERT(JSON Stringify($result.value))
  //{"value":42,"myJSONPointer":42}
 Else
    ALERT(JSON Stringify($result.errors))
 End if
```

#### Ejemplo 2 

Usted quiere reutilizar "billingAddress" como "shippingAddress" en el siguiente objeto JSON (llamado $oMyConfig):

```json
{
    "lastname": "Doe",
    "firstname": "John",
    "billingAddress": { 
        "street": "95 S. Market Street",
        "city": "San Jose",
        "state": "California" 
    },
    "shippingAddress": { "$ref": "#/billingAddress" }
}
```

Después de ejecutar este código:

```4d
 $oResult:=JSON Resolve pointers($oMyConfig)
```

... se devuelve el siguiente objeto:

```json
{
    "success": true,
    "value": {
        "lastname": "Doe",
        "firstname": "John",
        "billingAddress": {
            "street": "95 S. Market Street",
            "city": "San Jose",
            "state": "California" 
        },
        "shippingAddress": {
            "street": "95 S. Market Street",
            "city": "San Jose",
            "state": "California" 
        }
    }
}
```

#### Ejemplo 3 

Este ejemplo ilustra el efecto de la opción "fusionar". Usted desea editar los derechos de un usuario basándose en un archivo predeterminado.

```json
{
    "rights": { 
        "$ref": "defaultSettings.json#/defaultRights",
        "delete": true,
        "id": 456
    }
}
```

El archivo *defaultSettings.json* contiene:

```json
{
    "defaultRights":
    {
        "edit": true,
        "add": false,
        "delete": false
    }
}
```

Si ejecuta:

```4d
 var $options : Object
 $options:=New object("merge";False) //reemplazar contenidos
 $oResult:=JSON Resolve pointers($oMyConfig;$options)
```

el valor resultante es exactamente el contenido del archivo *defaultSettings.json*:

```json
{
    "success": true,
    "value": {
        "rights": {
            "edit": true,
            "add": false,
            "delete": false
        }
    }
}
```

Si ejecuta:

```4d
 var $options : Object
 $options:=New object("merge";True) //fusionar ambos contenidos
 $oResult:=JSON Resolve pointers($oMyConfig;$options)
```

...el valor resultante es una versión modificada del objeto original:

```json
{
    "success": true,
    "value": {
        "rights": {
            "edit": true,
            "add": false,
            "delete": true,
            "id": 456
        }
    }
}
```

#### Ver también 

  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 1478 |
| Hilo seguro | &check; |


