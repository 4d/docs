---
id: distinct-attribute-paths
title: DISTINCT ATTRIBUTE PATHS
slug: /commands/distinct-attribute-paths
displayed_sidebar: docs
---

<!--REF #_command_.DISTINCT ATTRIBUTE PATHS.Syntax-->**DISTINCT ATTRIBUTE PATHS** ( *campoObjeto* ; *arrayRuta* )<!-- END REF-->
<!--REF #_command_.DISTINCT ATTRIBUTE PATHS.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| campoObjeto | Field | &#8594;  | Campo objeto indexado |
| arrayRuta | Text array | &#8592; | Array para recibir la lista de rutas diferentes |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.DISTINCT ATTRIBUTE PATHS.Summary-->El comando **DISTINCT ATTRIBUTE PATHS** devuelve la lista de rutas distintas que se encuentran en el campo objeto indexado pasado en *campoObjeto* para la selección actual de la tabla a la que pertenece el campo.<!-- END REF-->

En *campoObjeto*, debe pasar un campo de tipo Objeto indexado; de lo contrario se devuelve un error.

Después de la llamada, el tamaño de *arrayRuta* es igual al número de rutas distintas que se encuentran en la selección. Las rutas a atributos de objetos anidados se devuelven utilizando la notación estándar punto, por ejemplo "empresa.direccion.numero". Tenga en cuenta que los nombres de atributo de objeto son sensibles a las mayúsculas y minúsculas. El comando no cambia la selección actual o el registro actual.

 En *arrayRuta*, se devuelve la lista de rutas distintas en orden alfabético (diacrítico). 

**Notas:** 

* los registros con un valor indefinido en campoObjeto no se tienen en cuenta.
* Las rutas de atributos creadas durante una transacción son tenidas en cuenta por el comando. Es importante señalar que estas rutas se conservan en el índice del campo objeto, incluso si la transacción ha sido cancelada.

#### Ejemplo 

Su base contiene un campo objeto \[Customer\]full\_Data (indexado) con 15 registros:

![](../assets/en/commands/pict2994114.en.png) 

Si ejecuta este código:

```4d
 ARRAY TEXT(aTPaths;0)
 ALL RECORDS([Customer])
 DISTINCT ATTRIBUTE PATHS([Customer]full_Data;aTPaths)
```

El array *aTPaths* obtiene los siguientes elementos:

| **Elemento** | **Valor**           |
| ------------ | ------------------- |
| 1            | "age"               |
| 2            | "Children"          |
| 3            | "Children\[\]"      |
| 4            | "Children\[\].age"  |
| 5            | "Children\[\].Name" |
| 6            | "Children.length"   |
| 7            | "client"            |
| 8            | "FirstName"         |
| 9            | "LastName"          |
| 10           | "Sex"               |
| 11           | "telephone"         |
| 12           | "telephone\[\]"     |
| 13           | "telephone.length"  |

**Nota:** "length" es una *propiedad virtual* que está disponible automáticamente para todos los atributos de tipo array. Ofrece el tamaño del array, es decir, el número de elementos,y puede ser utilizado en las peticiones. Para mayor información, consulte el párrafo *Utilización de la propiedad virtual .length*. 

#### Ver también 

  
[DISTINCT ATTRIBUTE VALUES](distinct-attribute-values.md)  