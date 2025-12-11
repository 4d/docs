---
id: object-get-data-source-formula
title: OBJECT Get data source formula
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get data source formula.Syntax-->**OBJECT Get data source formula** ( {* ;} *object* ) : 4D.Formula<!-- END REF-->

<!--REF #_command_.OBJECT Get data source formula.Params-->

| Parámetros | Tipo                       |                             | Descripción                                                                                                                |
| ---------- | -------------------------- | --------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| \*         | Operador                   | &#8594; | Si se especifica, object es un nombre de objeto (cadena)<br/>Si se omite, object es un campo o variable |
| object     | any                        | &#8594; | Nombre del objeto (si se especifica \*) o<br/>Campo o variable (si se omite \*)      |
| formula    | 4D.Formula | &#8592; | Fórmula asociada al objeto formulario (`Null` si no hay fórmula asociada)                               |

<!-- END REF-->

## Descripción

El comando **OBJECT Get data source formula**<!--REF #_command_.OBJECT Get data source formula.Summary--> devuelve la(s) fórmula(s) asociada(s) a los objetos designados por los parámetros *object* y *\**.<!-- END REF-->

Pasar el parámetro opcional *\** indica que el parámetro *object* es un nombre de objeto (cadena). Si no pasa este parámetro, indica que el parámetro *object* es un campo o variable. En este caso, se pasa una referencia de campo o variable en lugar de una cadena (campo o variable objeto de formulario).

Cuando una fórmula está asociada a un objeto de formulario, actúa como fuente de datos del objeto en tiempo de ejecución.

Si este comando se aplica a un objeto sin fórmula personalizada asignada, devuelve la [variable dinámica de formulario] asignada automáticamente(../FormObjects/properties_Object.md#dynamic-variables).  
Si el objeto no existe o no admite fórmulas, devuelve `Null`.

## Ejemplo

Desea comprobar qué fórmula (si la hay) está vinculada a un objeto:

```4d
$formula:=OBJECT Get data source formula(*; "myInput")

```

## Ver también

[OBJECT SET DATA SOURCE FORMULA](object-set-data-source-formula.md)<br/>
[LISTBOX GET COLUMN FORMULA](../commands-legacy/listbox-get-column-formula.md)<br/>
[OBJECT SET DATA SOURCE](../commands-legacy/object-set-data-source.md)<br/>
[OBJECT GET VALUE](../commands-legacy/object-get-value.md)

## Propiedades

|                   |                             |
| ----------------- | --------------------------- |
| Número de comando | 1852                        |
| Hilo seguro       | no |


