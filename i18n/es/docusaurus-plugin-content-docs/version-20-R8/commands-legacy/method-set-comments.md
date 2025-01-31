---
id: method-set-comments
title: METHOD SET COMMENTS
slug: /commands/method-set-comments
displayed_sidebar: docs
---

<!--REF #_command_.METHOD SET COMMENTS.Syntax-->**METHOD SET COMMENTS** ( *ruta* ; *comentarios* {; *Operador*} )<!-- END REF-->
<!--REF #_command_.METHOD SET COMMENTS.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| ruta | Text, Text array | &#8594;  | Texto o array texto que contiene una o varias rutas de métodos |
| comentarios | Text, Text array | &#8594;  | Comentarios de los métodos designados |
| * | * | &#8594;  | Si se pasa = el comando se aplica a la base local cuando se ejecuta desde un componente (parámetro ignorado fuera de este contexto) |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.METHOD SET COMMENTS.Summary-->El comando **METHOD SET COMMENTS** remplaza la documentación del(os) método(s) designados por el parámetro *ruta* por los definidos en el parámetro *comentarios*.<!-- END REF-->

La documentación modificada por este comando se muestra en el explorador de 4D (no debe confundirse con líneas de comentarios en el código). Contiene:

* texto markdown en bases proyecto,
* texto con estilo en bases binarias.

Esta documentación se puede generar para métodos de tipo triggers, métodos proyecto, métodos formulario, métodos base y clases.

**Nota:** los formularios y los métodos formulario comparten la misma documentación.

Puede utilizar dos tipos de sintaxis, basadas en arrays texto o variables texto:  

```4d
 var tVpath : Text // variables texto
 var tVcomments : Text
 METHOD SET COMMENTS(tVpath;tVcomments) // documentación para un sólo método
```

```4d
 ARRAY TEXT(arrPaths;0) // arrays texto
 ARRAY TEXT(arrComments;0)
 METHOD SET COMMENTS(arrPaths;arrComments) // documentación para varios métodos
```

No es posible combinar las dos sintaxis.

Si pasa un nombre de ruta invalido, se genera un error.

Puede ejecutar este comando desde un componente, pero en este caso debe pasar el parámetro *\** porque el acceso en modo escritura al código del componente no es posible. Si omite el parámetro *\** en este contexto, se genera el error -9763.

#### Ejemplo 

Añadir una fecha de modificación a un comentario de trigger existente:

```4d
 METHOD GET COMMENTS("[trigger]/Table1";$comments)
 $comments:="Modif:"+String(Current date)+"\r"+$comments
 METHOD SET COMMENTS("[trigger]/Table1";$comments)
```

#### Ver también 

[METHOD GET COMMENTS](method-get-comments.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 1193 |
| Hilo seguro | &cross; |


