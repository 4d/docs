---
id: wp-compute-formulas
title: WP COMPUTE FORMULAS
slug: /WritePro/commands/wp-compute-formulas
displayed_sidebar: docs
---

<!--REF #_command_.WP COMPUTE FORMULAS.Syntax-->**WP COMPUTE FORMULAS** ( *objTarget* )<!-- END REF-->
<!--REF #_command_.WP COMPUTE FORMULAS.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| objTarget | Object | &#8594;  | Rango o elemento o documento 4D Write Pro |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.WP COMPUTE FORMULAS.Summary-->El comando **WP COMPUTE FORMULAS** evalúa las fórmulas en *objTarget*.<!-- END REF-->

El comando calcula o actualiza el resultado de las fórmulas encontradas en *objTarget* en función del contexto actual y muestra el resultado obtenido. Por ejemplo, si la fórmula insertada es la hora, el valor se modificará cada vez que se llame al comando **WP COMPUTE FORMULAS**. Para más información sobre la evaluación de fórmulas, consulte la sección *Gestión de fórmulas*. 

En el parámetro *objTarget*, puede pasar:

* un rango, o
* un elemento (tabla / línea / celda(s) / párrafo / cuerpo / encabezado / pie de página / sección / subsección / imagen en línea o anclada / caja de texto), o
* un documento 4D Write Pro.

**Nota**: cuando se pasa una sección en *targetObj*, sólo se calculan las fórmulas de las imágenes o las fórmulas de las cajas de texto ancladas a esta sección o a todas las secciones. Si están ancladas a una página o a la vista anidada, sus fórmulas no se calculan. Pase el documento en *targetObj* para calcular todas las fórmulas de los elementos anclados. 

#### Ejemplo 

Para actualizar las fórmulas en un documento:

```4d
 WP COMPUTE FORMULAS(WriteProArea)
```

Para actualizar todas las fórmulas en la primera sección de un documento:

```4d
 WP COMPUTE FORMULAS(WP Get section(WriteProArea;1))
```

#### Ver también 

*Gestión de fórmulas*  
[WP FREEZE FORMULAS](wp-freeze-formulas.md)  
[WP Get formulas](wp-get-formulas.md)  
[WP INSERT FORMULA](../commands/wp-insert-formula.md)  
[WP SET DATA CONTEXT](wp-set-data-context.md)  