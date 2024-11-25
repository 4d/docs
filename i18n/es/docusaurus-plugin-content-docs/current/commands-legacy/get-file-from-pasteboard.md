---
id: get-file-from-pasteboard
title: Get file from pasteboard
slug: /commands/get-file-from-pasteboard
displayed_sidebar: docs
---

<!--REF #_command_.Get file from pasteboard.Syntax-->**Get file from pasteboard** ( *indiceN* ) : Text<!-- END REF-->
<!--REF #_command_.Get file from pasteboard.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| indiceN | Integer | &#8594;  | N archivo incluido en la acción arrastrar |
| Resultado | Text | &#8592; | Ruta de acceso al archivo extraído del portapapeles |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.Get file from pasteboard.Summary-->El comando Get file from pasteboard devuelve la ruta de acceso absoluto de un archivo incluido en una operación de arrastrar y soltar.<!-- END REF--> Varios archivos pueden ser seleccionados y movidos simultáneamente. El parámetro *indiceN* se utiliza para designar un archivo entre un conjunto de archivos seleccionados. 

Si no hay archivo N en el portapapeles, el comando devuelve una cadena vacía.

#### Ejemplo 

El siguiente ejemplo puede utilizarse para recuperar en un array todas las rutas de acceso a los archivos incluídos en la operación arrastrar y soltar:

```4d
 ARRAY TEXT($arrayArchivos;0)
 var $vtarchivo : Text
 var $n : Integer
 $n:=1
 Repeat
    $vtarchivo:=Get file from pasteboard($n)
    If($vtarchivo#"")
       APPEND TO ARRAY($arrayArchivos;$vtarchivo)
       $n:=$n+1
    End if
 Until($vtarchivo="")
```

#### Ver también 

[SET FILE TO PASTEBOARD](set-file-to-pasteboard.md)  