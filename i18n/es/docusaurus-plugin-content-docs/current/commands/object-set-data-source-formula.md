---
id: object-set-data-source-formula
title: OBJECT SET DATA SOURCE FORMULA
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET DATA SOURCE FORMULA.Syntax-->**OBJECT SET DATA SOURCE FORMULA** ( {* ;} *object* ; *formula* )<!-- END REF-->

<!--REF #_command_.OBJECT SET DATA SOURCE FORMULA.Params-->

| Parámetros | Tipo                       |                             | Descripción                                                                                                                |
| ---------- | -------------------------- | --------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| \*         | Operador                   | &#8594; | Si se especifica, object es un nombre de objeto (cadena)<br/>Si se omite, object es un campo o variable |
| object     | any                        | &#8594; | Nombre del objeto (si se especifica \*) o<br/>Campo o variable (si se omite \*)      |
| formula    | 4D.Formula | &#8594; | Fórmula a asignar como fuente de datos                                                                                     |

<!-- END REF-->

## Descripción

El comando **OBJECT SET DATA SOURCE FORMULA** <!--REF #_command_.OBJECT SET DATA SOURCE FORMULA.Summary--> asigna una fórmula (expresión) como fuente de datos del objeto u objetos designados por los parámetros *object* y *\** <!-- END REF-->. La fórmula debe proporcionarse como un objeto [`4D.Formula`](../API/FunctionClass.md#formula-objects).

Pasar el parámetro opcional *\** indica que el parámetro *object* es un nombre de objeto (cadena). Si no pasa este parámetro, indica que el parámetro *object* es un campo o variable. En este caso, se pasa una referencia de campo o variable en lugar de una cadena (campo o variable objeto de formulario).

La *formula* actúa como la fuente de la cual el objeto recupera su valor en ejecución. Esto permite un comportamiento dinámico, como valores calculados, visualización condicional o datos derivados.

Si se pasa *Null* como parámetro *formula*, 4D restablecerá la fuente de datos del objeto a una [variable dinámica de formulario](../FormObjects/properties_Object.md#dynamic-variables).

Si el comando se aplica a un objeto que no existe o no admite fórmulas, no hace nada.

:::note Notas

- La fórmula se ejecuta en el contexto del formulario propietario del objeto. Cuando trabaje con formularios anidados (por ejemplo, subformularios), asegúrese de que la fórmula está definida y asignada en el contexto de formulario apropiado para evitar comportamientos inesperados.
- Si asigna una fórmula a un objeto de entrada o a cualquier objeto con un valor modificable, asegúrese de que la fórmula es [**asignable**](../Concepts/quick-tour.md#assignable-vs-non-assignable-expressions).

:::

## Ejemplo

Desea vincular dinámicamente una entrada a una expresión. Por ejemplo, muestre el precio con descuento basado en un precio base y un valor de descuento:

```4d

Form.basePrice := 100
Form.discount := 0.2

$discountedFormula := Formula(Form.basePrice * (1 - Form.discount))

OBJECT SET DATA SOURCE FORMULA(*;"DiscountedPriceInput"; $discountedFormula)

```

## Ver también

[OBJECT Get data source formula](object-get-data-source-formula.md)<br/>
[LISTBOX SET COLUMN FORMULA](../commands-legacy/listbox-set-column-formula.md)<br/>
[OBJECT SET DATA SOURCE](../commands-legacy/object-set-data-source.md)<br/>
[OBJECT SET VALUE](../commands-legacy/object-set-value.md)

## Propiedades

|                   |                             |
| ----------------- | --------------------------- |
| Número de comando | 1851                        |
| Hilo seguro       | no |


