---
id: set-field-relation
title: SET FIELD RELATION
slug: /commands/set-field-relation
displayed_sidebar: docs
---

<!--REF #_command_.SET FIELD RELATION.Syntax-->**SET FIELD RELATION** ( tablasN | CampoN ; *uno* ; *muchos* )<!-- END REF-->
<!--REF #_command_.SET FIELD RELATION.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| tablasN &#124; CampoN | Tabla, Campo | &#8594;  | Tabla de inicio de las relaciones o Campo de inicio de la relación |
| uno | Integer | &#8594;  | Estado de la relación Muchos a Uno a partir del campo o de las relaciones Muchos a Uno de la tabla |
| muchos | Integer | &#8594;  | Estado de la relación Uno a Muchos a partir del campo o de las relaciones Uno a Muchos de la tabla |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.SET FIELD RELATION.Summary-->El comando SET FIELD RELATION permite definir separadamente el estado automático/manual de cada relación de la base para el proceso actual, sin tener en cuenta su estado inicial definido en el entorno Diseño en la ventana de propiedades de las relaciones.<!-- END REF--> 

Pase en el primer parámetro, un nombre de tabla o campo:

* Si pasa un nombre de campo (*campoN*), el comando se aplicará únicamente a la relación a partir del campo Muchos especificado.
* Si pasa un nombre de tabla (*tablaN*), el comando se aplicará a todas las relaciones a partir de la tabla Muchos especificada.
* Si no hay ninguna relación a partir del campo *campoN* o de la tabla *tablaN*, los parámetros *uno* y *muchos* devuelven 0, se genera el error de sintaxis No. 16 (“El campo no tiene relación”) y la variable sistema OK toma el valor 0\.

Pase en los parámetros *uno* y *muchos*, los valores que indican el cambio de estado automático/manual a aplicar respectivamente a la(s) relación(es) de tipo Muchos a Uno y Uno a Muchos. Puede utilizar las constantes del tema “*Relaciones*”:

* Do not modifyDo not modify (0) = No modificar el estado actual de la(s) relación(es).
* Structure configuration (1) = Utilizar la configuración definida para la(s) relación(es) en la ventana de estructura de la aplicación.
* Manual (2) = Volver manual(es) la(s) relación(es) en el proceso actual.
* Automatic (3) = Volver automática(s) la(s) relación(es) en el proceso actual.

**Nota:** los cambios realizados con este comando sólo aplican al proceso actual. La configuración de las relaciones definida utilizando las opciones de la ventana de propiedades de la relación no se modifica. 

**Note**: si pasa True al comando [SET AUTOMATIC RELATIONS](set-automatic-relations.md) durante la misma sesión, las llamadas al comando SET FIELD RELATION se ignoran, sin importar si están ubicadas antes o después de [SET AUTOMATIC RELATIONS](set-automatic-relations.md). Para "bloquear" el modo automático y tener en cuenta llamadas a SET FIELD RELATION, pase False a [SET AUTOMATIC RELATIONS](set-automatic-relations.md).

#### Ejemplo 

El siguiente código permite definir sólo las relaciones útiles como automáticas en el editor de informes rápidos:

```4d
 SET AUTOMATIC RELATIONS(False;False) //Inicialización de las relaciones
  //Sólo se utilizarán las siguientes relaciones
 SET FIELD RELATION([Invoices]Cust_IDt;Automatic;Automatic)
 SET FIELD RELATION([Invoice_Row]Invoice_ID;Automatic;Automatic)
 QR REPORT([Invoices];Char(1))
```

#### Ver también 

[GET AUTOMATIC RELATIONS](get-automatic-relations.md)  
[GET FIELD RELATION](get-field-relation.md)  
[GET RELATION PROPERTIES](get-relation-properties.md)  
[SET AUTOMATIC RELATIONS](set-automatic-relations.md)  