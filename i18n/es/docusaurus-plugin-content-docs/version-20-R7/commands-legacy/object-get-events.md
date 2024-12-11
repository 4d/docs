---
id: object-get-events
title: OBJECT GET EVENTS
slug: /commands/object-get-events
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT GET EVENTS.Syntax-->**OBJECT GET EVENTS** ( {* ;} *objeto* ; *arrEvents* )<!-- END REF-->
<!--REF #_command_.OBJECT GET EVENTS.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es un campo o una variable |
| objeto | any | &#8594;  | Nombre de objeto "" para designar el formulario (si se especifica *) o  Campo o variable (si se omite *) |
| arrEvents | Integer array | &#8592; | Array de eventos desactivados |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.OBJECT GET EVENTS.Summary-->El comando **OBJECT GET EVENTS** permite obtener la configuración actual de los eventos formulario del formulario, del objeto o de los objetos designado(s) por los parámetros *objeto* y *\**.<!-- END REF--> 

Los eventos formulario se pueden activar/desactivar, ya sea utilizando la lista de propiedades o utilizando el comando [OBJECT SET EVENTS](object-set-events.md) si se le llama en el proceso actual.

Si se pasa el parámetro opcional *\** indica que el parámetro *objeto* es un nombre de objeto (cadena). Si no se pasa este parámetro, indica que el parámetro *objeto* es un campo o una variable. En este caso, se pasa una referencia de campo o variable en lugar de una cadena (campo o variable objeto únicamente).   
Para obtener la configuración de los eventos del formulario para el propio formulario, pase el parámetro opcional *\** y una cadena vacía "" en *objeto*: en este caso, usted designa el formulario actual.

**Nota:** si desea obtener los eventos de un subformulario relacionados con una tabla, sólo se puede utilizar la sintaxis basada en el nombre del objeto.

Pase un array entero largo en el parámetro *arrEvents*. Cuando se ejecuta el comando, se asigna el tamaño a este array automáticamente y recibe todos los eventos formulario predefinidos o personalizados que se han activado para el objeto o el formulario. Puede comparar los valores recibidos con las constantes del tema "*Eventos formulario*".  
  
Tenga en cuenta que el array *arrEvents* se devuelve vacío si ningún método objeto está asociado al objeto o si ningún método formulario se asocia al formulario.

#### Ejemplo 

Usted quiere activar dos eventos y obtener la lista de eventos para un objeto:

```4d
 ARRAY LONGINT($ArrCurrentEvents;0)
 ARRAY LONGINT($ArrEnabled;2)
 $ArrEnabled{1}:=On Header Click
 $ArrEnabled{2}:=On Footer Click
 OBJECT SET EVENTS(*;"Col1";$ArrEnabled;Enable events others unchanged)
 OBJECT GET EVENTS(*;"Col1";$ArrCurrentEvents)
```

#### Ver también 

[OBJECT SET EVENTS](object-set-events.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1238 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


