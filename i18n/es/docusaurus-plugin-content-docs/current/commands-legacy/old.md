---
id: old
title: Old
slug: /commands/old
displayed_sidebar: docs
---

<!--REF #_command_.Old.Syntax-->**Old** ( *unCampo* ) : any<!-- END REF-->
<!--REF #_command_.Old.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| unField | Field | &#8594;  | Campo del cual devolver el valor anterior |
| Resultado | any | &#8592; | Valor original del campo |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Old.Summary-->El comando Old devuelve el valor almacenado en *campo* antes de que se le haya asignado un valor por programación o modificado un durante la entrada de datos.<!-- END REF--> 

Cada vez que cambia el registro actual para una tabla, 4D crea y mantiene en memoria un duplicado de la “imagen” del nuevo registro actual en el momento en que se carga. Cuando usted modifica un registro, trabaja con la imagen actual del registro, no con su duplicado. Esta imagen se borra cuando cambia nuevamente el registro actual.

Old devuelve el valor de la imagen duplicada. En otras palabras, para un registro existente, devuelve el valor del campo tal como está guardado en el disco. Si un registro es nuevo, Old devuelve el valor vacío por defecto de acuerdo al tipo de *campo*. Por ejemplo, si *campo* es un campo Alfa, Old devuelve una cadena vacía. Si *campo* es de tipo numérico, Old devuelve cero (0), etc.

Old funciona con *campo* si el campo ha sido modificado por un método o por el usuario durante la entrada de datos. Old puede aplicarse a todos los tipos de campo.

Para restaurar el valor original de un campo, asígnele el valor devuelto por Old.

**Nota**: por razones técnicas, Old no puede pasarse como parámetro a otros comandos con campos tipo imagen y BLOB. Es necesario pasar el valor por una variable intermedia. Por ejemplo:

```4d
  //No escriba (causa error de sintaxis):
 $tamano :=BLOB size(Old([LaTabla]ElBlob)) //INCORRECTO
  //Escriba:
 $antBLOB:=Old([LaTabla]ElBlob)
 $tamano :=BLOB size($antBLOB) //CORRECTO
```

#### Ver también 

[Modified](modified.md)  