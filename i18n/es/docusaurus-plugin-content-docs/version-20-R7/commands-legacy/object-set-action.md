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

#### Descripción 

<!--REF #_command_.OBJECT SET ACTION.Summary-->El comando **OBJECT SET ACTION** modifica, para el proceso actual, la acción estándar asociada al objeto o a los objetos designado(s) por los parámetros *objeto* y *\** .<!-- END REF-->  
  
**Nota:** las acciones estándar también se pueden configurar para la sesión en el editor de formularios usando la lista de propiedades (ver *Acciones estándar* en el manual de *Diseño*).  

  
Si pasa el parámetro opcional *\** indica que el parámetro *objeto* es un nombre de objeto (cadena). Si no pasa este parámetro, indica que el parámetro *objeto* es un campo o una variable. En este caso, se pasa una referencia de campo o variable en lugar de una cadena (campo o variable objeto únicamente).  

En el parámetro *acción*, pase un cadena con el nombre de la acción estándar a asociar al objeto. Opcionalmente, la acción puede tener parámetros. Para mayor información sobre nombres de acciones, consulte la sección \[#title id="964"/\] en el manual de *Diseño 4D*. También puede pasar una de las siguientes constantes, que se encuentran en el tema "*Acción estándar*":

\[#table\_kst id="3229250,3229256,3229259,3229262,3229265,3233324,3229268,3229271,3229274,3229277,3229280,3232805,3229283,3229286,3229289,3249369,3247262,3233343,3233352,3233331,3249654,3233337,3233359,3233366,3233794,3229292,3229295,3229298,3229301,3229304,3229307,3229253,3229310,3229313,3229316,3229319,3229322,3229325,3229328,3229331,3229334,3229337,3229340,3233802,3229343,3229346" typeCol="false"/\]

**Nota de compatibilidad**: las constantes heredadas (prefijadas por \_o\_ en el tema) están obsoletas a partir de 4D v16 R3\. Sin embargo, todavía son soportadas por compatibilidad.  

#### Ejemplo 

Usted desea asociar la acción estándar **Validate** con un botón:

```4d
 OBJECT SET ACTION(*;"bValidate";ak accept)
```

#### Ver también 

[OBJECT Get action](object-get-action.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1259 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


