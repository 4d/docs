---
id: method-get-attributes
title: METHOD GET ATTRIBUTES
slug: /commands/method-get-attributes
displayed_sidebar: docs
---

<!--REF #_command_.METHOD GET ATTRIBUTES.Syntax-->**METHOD GET ATTRIBUTES** ( *ruta* ; *atributos* {; *} )<!-- END REF-->
<!--REF #_command_.METHOD GET ATTRIBUTES.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| ruta | Text, Text array | &#8594;  | Rutas de métodos |
| atributos | Object, Object array | &#8592; | Atributos para los métodos seleccionados |
| * | Operador | &#8594;  | Si se pasa = el comando se aplica a la base local cuando se ejecuta desde un componente (parámetro ignorado fuera de este contexto) |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.METHOD GET ATTRIBUTES.Summary-->El comando **METHOD GET ATTRIBUTES** devuelve, en *atributos*, el valor actual de todos los atributos para los métodos especificados en el parámetro *ruta*.<!-- END REF-->

Este comando sólo funciona con métodos proyecto. Si pasa una *ruta* no válida, se genera un error.

En *ruta*, puede pasar ya sea un texto que contenga una ruta de método, o un array texto que contenga un array de rutas. Debe pasar el mismo tipo de parámetro (variable o array) en *atributos* con el fin de obtener los atributos apropiados.

En *atributos*, pase un objeto o un array de objetos, dependiendo del tipo de parámetro pasado en *ruta*. Todos los atributos de métodos se devuelven como propiedades de objeto, con los valores "True"/"False" para los atributos Booleanos, los valores texto o los valores adicionales si es necesario (por ejemplo, "scope":"table" para la propiedad 4D Mobile).

Si el comando se ejecuta desde un componente, por defecto se aplica a los métodos del componente. Si pasa el parámetro *\**, accede a los métodos de la base local.

**Nota de compatibilidad:** la propiedad *published4DMobile* es obsoleta a partir de 4D v18.

#### Ejemplo 

Usted quiere obtener los atributos del método de proyecto *sendMail*. Puede escribir:

```4d
 var $att : Object
 METHOD GET ATTRIBUTES("sendMail";$att)
```

Después de la ejecución, $att contiene, por ejemplo:

```json
{
    "invisible":false,
    "preemptive":"capable",
    "publishedWeb":false,
    "publishedSoap":false,
    "publishedWsdl":false,
    "shared":false,
    "publishedSql":false,
    "executedOnServer":false,
    "published4DMobile":{
        "scope":"table",
        "table":"Table_1"
    }
}
```

#### Ver también 

[METHOD SET ATTRIBUTES](method-set-attributes.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 1334 |
| Hilo seguro | &check; |


