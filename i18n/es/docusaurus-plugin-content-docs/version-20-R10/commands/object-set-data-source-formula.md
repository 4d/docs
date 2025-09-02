---
id: object-set-data-source-formula
title: OBJECT SET DATA SOURCE FORMULA
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

*fformula* actúa como la fuente de la que el objeto recupera su valor en ejecución. This allows for dynamic behavior, such as calculated values, conditional display, or derived data.

If *Null* is passed as the *formula* parameter, 4D will reset the object’s data source to a [dynamic form variable](../FormObjects/properties_Object.md#dynamic-variables).

If the command is applied to an object that does not exist or cannot support formulas, it does nothing.

:::note Notas

- The formula is executed in the context of the form that owns the object. When working with nested forms (e.g., subforms), ensure that the formula is defined and assigned in the appropriate form context to avoid unexpected behavior.
- If you assign a formula to an input object or any object with a modifiable value, make sure that the formula is [**assignable**](../Concepts/quick-tour.md#assignable-vs-non-assignable-expressions).

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
| Hilo seguro       | &cross; |


