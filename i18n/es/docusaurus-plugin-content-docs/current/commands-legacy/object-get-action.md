---
id: object-get-action
title: OBJECT Get action
slug: /commands/object-get-action
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get action.Syntax-->**OBJECT Get action** ( {* ;} *objeto* ) : Text<!-- END REF-->
<!--REF #_command_.OBJECT Get action.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es un campo o variable |
| objeto | any | &#8594;  | Nombre del objeto (si se especifica *) o <br/>Campo o variable (si se omite *) |
| Resultado | Text | &#8592; | Nombre de la acción estándar asociada y (si la hay) cadena de parámetros |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.OBJECT Get action.Summary-->El comando **OBJECT Get action** devuelve el nombre y (si es el caso) el parámetro de la acción estándar asociada con el objeto designado por los parámetros *objeto* y *\**.<!-- END REF-->

Pasar el parámetro opcional *\** indica que el parámetro *objeto* es un nombre de objeto (cadena). Si no pasa este parámetro, indica que el parámetro *objeto* es un campo o una variable. En este caso, se pasa una referencia de campo o variable en lugar de una cadena (solo objeto campo o variable).

Puede establecer una acción estándar para un objeto en el Editor de formularios utilizando la lista de propiedades o utilizando el comando [OBJECT SET ACTION](object-set-action.md). **OBJECT Get action** devuelve una cadena que contiene el nombre de la acción estándar asociada al objeto (así como su parámetro, si existe).

Para obtener una lista completa de acciones estándar, consulte la sección *Acciones estándar* en el manual de *Diseño*. 

#### Ejemplo 

Usted desea asociar la acción "Cancelar" con todos los objetos en el formulario que aún no tienen ninguna acción asociada:

```4d
 ARRAY TEXT($arrObjects;0)
 
 FORM GET OBJECTS($arrObjects)
 For($i;1;Size of array($arrObjects))
    If(OBJECT Get action(*;$arrObjects{$i})=ak none)
       OBJECT SET ACTION(*;$arrObjects{$i};ak cancel)
    End if
 End for
```

#### Ver también 

[OBJECT SET ACTION](object-set-action.md)  