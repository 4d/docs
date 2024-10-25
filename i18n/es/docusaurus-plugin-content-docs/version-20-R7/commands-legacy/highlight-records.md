---
id: highlight-records
title: HIGHLIGHT RECORDS
slug: /commands/highlight-records
displayed_sidebar: docs
---

<!--REF #_command_.HIGHLIGHT RECORDS.Syntax-->**HIGHLIGHT RECORDS** ( {*tabla* }{;}{ *nomConjunto* {; *}} )<!-- END REF-->
<!--REF #_command_.HIGHLIGHT RECORDS.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| tabla | Table | &#8594;  | Tabla de la cual seleccionar los registros Si se omite, tabla del formulario actual |
| nomConjunto | Text | &#8594;  | Conjunto de registros a seleccionar o Userset si se omite |
| * | Operador | &#8594;  | Desactivar el desplazamiento automático de la lista |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.HIGHLIGHT RECORDS.Summary-->El comando HIGHLIGHT RECORDS permite seleccionar registros en un formulario listado.<!-- END REF--> Esta operación es idéntica a la selección de registros manual en modo listado utilizando el ratón o las combinaciones de teclado **Mayús+Clic** o **Ctrl+Clic** (Windows) o **comando+Clic** (Mac OS). La selección actual no se modifica. 

**Nota:** el conjunto de registros seleccionados se actualiza después de redibujar los registros; es decir, después de la ejecución de todo el método de llamado y no sólo inmediatamente después de la ejecución de HIGHLIGHT RECORDS.

El parámetro *tabla* permite designar la tabla de la cual seleccionar los registros. Este parámetro se puede utilizar, particularmente, para seleccionar los registros de los subformularios incluidos, los cuales no pertenecen a la tabla actual (ver a continuación). 

* Si pasa un nombre de conjunto válido en *nomConjunto*, el comando se aplicará a los registros de ese conjunto para la *tabla* definida.
* Si omite el parámetro *nomConjunto*, el comando seleccionará únicamente los registros del conjunto UserSet actual. Este conjunto sólo se gestiona en modo Diseño y en caso de llamar los comandos [MODIFY SELECTION](modify-selection.md "MODIFY SELECTION") / [DISPLAY SELECTION](display-selection.md "DISPLAY SELECTION"). Si quiere seleccionar los registros de un subformulario, debe pasar un nombre de tabla y de conjunto. Para mayor información sobre el conjunto UserSet, consulte la sección .

Cuando se pasa el parámetro *\**, provoca la inactivación de la función de desplazamiento automático de la lista si los registros seleccionados no son visibles. Este mecanismo autoriza la gestión personalizada del desplazamiento vía el comando [OBJECT SET SCROLL POSITION](object-set-scroll-position.md "OBJECT SET SCROLL POSITION"). 

**Nota:** en el marco de los subformularios incluidos, el comando HIGHLIGHT RECORDS no hace nada si la propiedad de selección **Multilíneas** no está seleccionada para el formulario. En este caso, para seleccionar una línea, debe utilizar el comando [GOTO SELECTED RECORD](goto-selected-record.md "GOTO SELECTED RECORD"). 

#### Ejemplo 

En un formulario de salida mostrado por el comando [MODIFY SELECTION](modify-selection.md "MODIFY SELECTION"), usted quiere que el usuario pueda realizar búsquedas sin que la selección actual se modifique. Para hacer esto, coloque un botón **Buscar** en el formulario y asócielo con el siguiente método: 

```4d
 SET QUERY DESTINATION(Into set;"UserSet")
 QUERY
 SET QUERY DESTINATION(Into current selection)
 HIGHLIGHT RECORDS
```

Cuando el usuario hace clic en el botón, aparece la caja de diálogo estándar buscar. Una vez se valida la búsqueda, los registros encontrados se seleccionarán sin que la selección actual se modifique. 

#### Ver también 

[GET HIGHLIGHTED RECORDS](get-highlighted-records.md)  
[OBJECT SET SCROLL POSITION ](object-set-scroll-position.md)  