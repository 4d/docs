---
id: object-get-placeholder
title: OBJECT Get placeholder
slug: /commands/object-get-placeholder
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get placeholder.Syntax-->**OBJECT Get placeholder** ( {* ;} *objeto* ) : Text<!-- END REF-->
<!--REF #_command_.OBJECT Get placeholder.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es un campo o una variable |
| objeto | any | &#8594;  | Nombre de objeto (si se especifica *) o  Campo o variable (si se omite *) |
| Resultado | Text | &#8592; | Texto de ejemplo asociado al objeto |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.OBJECT Get placeholder.Summary-->El comando **OBJECT Get placeholder** devuelve el texto de ejemplo asociado al objeto o a los objetos designado(s) por los parámetros *objeto* y *\**.<!-- END REF--> Si no hay ningún texto del marcador asociado con el objeto, el comando devuelve una cadena vacía.

Puede definir el texto del marcador, ya sea usando la lista de propiedades o utilizando el comando [OBJECT SET PLACEHOLDER](object-set-placeholder.md).

Si pasa el parámetro opcional *\** indica que el parámetro *objeto* es un nombre de objeto (cadena). Si no se pasa este parámetro, indica que el parámetro *objeto* es un campo o una variable. En este caso, se pasa una referencia de campo o variable en lugar de una cadena (campo o variable de objeto únicamente).

Si el marcador es una referencia xliff definida por la lista de propiedades, el comando devuelve la referencia original en el formulario ":xliff:resname", y no a su valor calculado.

#### Ejemplo 

Si quiere recibir el texto del marcador de campo:

```4d
 $txt:=OBJECT Get placeholder([People]LastName)
```

#### Ver también 

[OBJECT SET PLACEHOLDER](object-set-placeholder.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1296 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


