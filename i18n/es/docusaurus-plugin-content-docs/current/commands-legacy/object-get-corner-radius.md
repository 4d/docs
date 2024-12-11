---
id: object-get-corner-radius
title: OBJECT Get corner radius
slug: /commands/object-get-corner-radius
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get corner radius.Syntax-->**OBJECT Get corner radius** ( {* ;} *objeto* ) : Integer<!-- END REF-->
<!--REF #_command_.OBJECT Get corner radius.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena)<br/>Si se omite, objeto es una variable o un campo |
| objeto | any | &#8594;  | Nombre de objeto (si se especifica *) o Campo o variable (si se omite *) |
| Resultado | Integer | &#8592; | Radio de esquinas redondeadas (en píxeles) |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.OBJECT Get corner radius.Summary-->El comando **OBJECT Get corner radius** devuelve el valor actual del radio de la esquina para el objeto designado por el parámetro *objeto*.<!-- END REF--> Este valor puede haber sido definido a nivel del formulario utilizando la *propiedad radio de esquina* o para el proceso actual con el comando [OBJECT SET CORNER RADIUS](object-set-corner-radius.md).

El comando **OBJECT Get corner radius** puede utilizarse con los siguientes objetos de formulario:

* rectángulos
* entradas (sólo proyectos 4D)
* áreas de texto (sólo proyectos 4D)

Al pasar el parámetro opcional *\** indica que el parámetro *objeto* es un nombre de objeto (cadena). Si no pasa este parámetro, indica que el parámetro *objeto* es un campo o una variable. En este caso, se pasa una referencia de campo o variable en lugar de una cadena (campo o variable objeto únicamente).

Este comando devuelve el radio de esquinas redondeadas en píxeles.

**Nota:** el comando devuelve 0 cuando se aplica a un objeto que no soporta la propiedad radio de esquina.

#### Ejemplo 

El siguiente código puede añadirse a un método de un botón:

```4d
 var $radius : Integer
 $radius:=OBJECT Get corner radius(*;"GreenRect") //obtiene el valor actual
 OBJECT SET CORNER RADIUS(*;"GreenRect";$radius+1) //aumenta el radio
  // El valor máximo se manejará automáticamente: cuando se alcance, el botón
  // no hará nada
```

#### Ver también 

[OBJECT SET CORNER RADIUS](object-set-corner-radius.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1324 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


