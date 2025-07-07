---
id: object-get-data-source-formula
title: OBJECT Get data source formula
---

<!--REF #_command_.OBJECT Get data source formula.Syntax-->**OBJECT Get data source formula** ( {* ;} *object* ) : *formula*<!-- END REF-->

<!--REF #_command_.OBJECT Get data source formula.Params-->

| Parámetros | Tipo                       |                             | Descripción                                                                                                        |
| ---------- | -------------------------- | --------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| \*         | Operador                   | &#8594; | If specified, object is an object name (string)<br/>If omitted, object is a field or variable   |
| object     | any                        | &#8594; | Object name (if \* is specified) or<br/>Field or variable (if \* is omitted) |
| formula    | 4D.Formula | &#8592; | Formula associated with the form object (`Null` if no formula is associated)                    |

<!-- END REF-->

## Descripción

The **OBJECT Get data source formula** command<!--REF #_command_.OBJECT Get data source formula.Summary--> returns the formula (if any) associated object(s) designated by the *object* and *\** parameters.<!-- END REF-->

Passing the optional *\** parameter indicates that the *object* parameter is an object name (string). If you do not pass this parameter, it indicates that the *object* parameter is a field or variable. In this case, you pass a field or variable reference instead of a string (field or variable object only).

When a formula is associated with a form object, it acts as the object's data source at runtime.

If this command is applied to an object with no custom formula assigned, it returns the automatically assigned [dynamic form variable](../FormObjects/properties_Object.md#dynamic-variables).\
If the object does not exist or does not support formulas, it returns `Null`.

## Ejemplo

You want check what formula (if any) is bound to an object:

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
| Hilo seguro       | &cross; |


