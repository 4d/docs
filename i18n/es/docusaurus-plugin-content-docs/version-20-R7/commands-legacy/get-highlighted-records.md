---
id: get-highlighted-records
title: GET HIGHLIGHTED RECORDS
slug: /commands/get-highlighted-records
displayed_sidebar: docs
---

<!--REF #_command_.GET HIGHLIGHTED RECORDS.Syntax-->**GET HIGHLIGHTED RECORDS** ( {*tabla* ;} *nomConjunto* )<!-- END REF-->
<!--REF #_command_.GET HIGHLIGHTED RECORDS.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| tabla | Table | &#8594;  | Tabla de la cual leer los registros seleccionados Si se omite, tabla del formulario actual |
| nomConjunto | Text | &#8594;  | Conjunto en el cual guardar los registros seleccionados |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.GET HIGHLIGHTED RECORDS.Summary-->El comando GET HIGHLIGHTED RECORDS  guarda en el conjunto designado por el parámetro *nomConjunto* los registros seleccionados (es decir, los registros seleccionados por el usuario en el formulario listado) de la *tabla* pasada como parámetro.<!-- END REF--> Si el parámetro *tabla* se omite, se utiliza la tabla del formulario o del subformulario actual. 

En modo Diseño o durante la ejecución de los comandos [DISPLAY SELECTION](display-selection.md "DISPLAY SELECTION") / [MODIFY SELECTION](modify-selection.md "MODIFY SELECTION"), este comando puede remplazarse llamando el conjunto sistema UserSet mantenido automáticamente por 4D. Sin embargo, como este comando permite designar la tabla de la cual recuperar los registros seleccionados, el comando GET HIGHLIGHTED RECORDS también puede administrar las selecciones de registros en subformularios. En este caso, las selecciones de subformularios pueden provenir de diferentes tablas. Para mayor información sobre el conjunto UserSet, consulte la sección *Conjuntos*.

El comando GET HIGHLIGHTED RECORDS también puede llamarse fuera del contexto de un formulario; sin embargo, el conjunto devuelto está vacío. 

El conjunto designado por *nomConjunto* puede ser local/cliente, proceso o interproceso. 

**Nota:** en formularios incluidos, el comando GET HIGHLIGHTED RECORDS devuelve un conjunto vacío si el subformulario no tiene la propiedad de selección **Multilíneas**. En este caso, para conocer la línea seleccionada, debe utilizar el comando [Selected record number](selected-record-number.md "Selected record number"). 

#### Ejemplo 

Este método indica cuántos registros están seleccionados en el subformulario que muestra los registros de la tabla \[CDs\]:

```4d
 GET HIGHLIGHTED RECORDS([CDs];"$highlight")
 ALERT(String(Records in set("$highlight"))"+"registros seleccionados.")
 CLEAR SET("$highlight")
```

#### Variables y conjuntos del sistema 

Si el comando se ejecuta correctamente, la variable sistema OK toma el valor 1\. De lo contrario, toma el valor 0\. 

#### Ver también 

[HIGHLIGHT RECORDS](highlight-records.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 902 |
| Hilo seguro | &cross; |
| Modifica variables | OK |


