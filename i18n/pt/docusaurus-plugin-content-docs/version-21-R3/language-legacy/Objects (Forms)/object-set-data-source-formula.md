---
id: object-set-data-source-formula
title: OBJECT SET DATA SOURCE FORMULA
slug: /commands/object-set-data-source-formula
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET DATA SOURCE FORMULA.Syntax-->**OBJECT SET DATA SOURCE FORMULA** ( * ; *object* : Text ; *formula* : 4D.Formula )<br/>**OBJECT SET DATA SOURCE FORMULA** ( *object* : Variable, Field ; *formula* : 4D.Formula )<!-- END REF-->

<!--REF #_command_.OBJECT SET DATA SOURCE FORMULA.Params-->

<div class="no-index">

| Parâmetro | Tipo                       |                             | Descrição                                                                                                               |
| --------- | -------------------------- | --------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| \*        | Operador                   | &#8594; | If specified, object is an object name (string) ; if omitted, object is a variable or a field        |
| object    | Text, Variable, Field      | &#8594; | Form object name (if \* is specified) or<br/>Field or variable (if \* is omitted) |
| formula   | 4D.Formula | &#8594; | Formula to assign as the data source                                                                                    |

</div>
<!-- END REF-->

<div class="no-index">
<details><summary>História</summary>

| Release | Mudanças                    |
| ------- | --------------------------- |
| 21      | Support of *base* parameter |
| 20 R10  | Created                     |

</details>
</div>

## Descrição

The **OBJECT SET DATA SOURCE FORMULA** command <!--REF #_command_.OBJECT SET DATA SOURCE FORMULA.Summary-->  assigns a formula (expression) as the data source of the object(s) designated by the *object* and *\** parameters <!-- END REF-->. The formula must be provided as a [`4D.Formula`](../../API/FunctionClass.md#formula-objects) object.

Passing the optional *\** parameter indicates that the *object* parameter is an object name (string). If you do not pass this parameter, it indicates that the *object* parameter is a field or variable. In this case, you pass a field or variable reference instead of a string (field or variable object only).

The *formula* acts as the source from which the object retrieves its value at runtime. This allows for dynamic behavior, such as calculated values, conditional display, or derived data.

If *Null* is passed as the *formula* parameter, 4D will reset the object’s data source to a [dynamic form variable](../../FormObjects/properties_Object.md#dynamic-variables).

If the command is applied to an object that does not exist or cannot support formulas, it does nothing.

:::note Notas

- The formula is executed in the context of the form that owns the object. When working with nested forms (e.g., subforms), ensure that the formula is defined and assigned in the appropriate form context to avoid unexpected behavior.
- If you assign a formula to an input object or any object with a modifiable value, make sure that the formula is [**assignable**](../../Concepts/quick-tour.md#assignable-vs-non-assignable-expressions).

:::

## Exemplo

You want to dynamically bind an input to an expression. For example, show the discounted price based on a base price and a discount value:

```4d

Form.basePrice := 100
Form.discount := 0.2

$discountedFormula := Formula(Form.basePrice * (1 - Form.discount))

OBJECT SET DATA SOURCE FORMULA(*;"DiscountedPriceInput"; $discountedFormula)

```

## Ver também

[OBJECT Get data source formula](../commands/object-get-data-source-formula)<br/>
[LISTBOX SET COLUMN FORMULA](../commands/listbox-set-column-formula)<br/>
[OBJECT SET DATA SOURCE](../commands/object-set-data-source)<br/>
[OBJECT SET VALUE](../commands/object-set-value)

## Propriedades

|                   |      |
| ----------------- | ---- |
| Número de comando | 1851 |
| Thread safe       | não  |



