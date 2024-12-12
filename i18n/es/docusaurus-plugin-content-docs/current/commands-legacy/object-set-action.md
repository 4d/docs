---
id: object-set-action
title: OBJECT SET ACTION
slug: /commands/object-set-action
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET ACTION.Syntax-->**OBJECT SET ACTION** ( {*sup* ;} *objeto* ; *accion* )<!-- END REF-->
<!--REF #_command_.OBJECT SET ACTION.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| sup | * | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena)<br/>Si se omite, objeto es un campo o una variable |
| objeto | any | &#8594;  | Nombre de objeto (si * se especifica ) o <br/>Campo o variable (si * se omite) |
| accion | Text | &#8594;  | Acción para asociar |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.OBJECT SET ACTION.Summary-->El comando **OBJECT SET ACTION** modifica, para el proceso actual, la acción estándar asociada al objeto o a los objetos designado(s) por los parámetros *objeto* y *\** .<!-- END REF-->  
  
**Nota:** las acciones estándar también se pueden configurar para la sesión en el editor de formularios usando la lista de propiedades (ver *Acciones estándar* en el manual de *Diseño*).  

  
Si pasa el parámetro opcional *\** indica que el parámetro *objeto* es un nombre de objeto (cadena). Si no pasa este parámetro, indica que el parámetro *objeto* es un campo o una variable. En este caso, se pasa una referencia de campo o variable en lugar de una cadena (campo o variable objeto únicamente).  

En el parámetro *acción*, pase un cadena con el nombre de la acción estándar a asociar al objeto. Opcionalmente, la acción puede tener parámetros. Para mayor información sobre nombres de acciones, consulte la sección Acción estándar en el manual de *Diseño 4D*. También puede pasar una de las siguientes constantes, que se encuentran en el tema "*Acción estándar*".


**Nota de compatibilidad**: las constantes heredadas (prefijadas por \_o\_ en el tema) están obsoletas a partir de 4D v16 R3\. Sin embargo, todavía son soportadas por compatibilidad.  

#### Ejemplo 

Usted desea asociar la acción estándar **Validate** con un botón:

```4d
 OBJECT SET ACTION(*;"bValidate";ak accept)
```

#### Ver también 

[OBJECT Get action](object-get-action.md)  