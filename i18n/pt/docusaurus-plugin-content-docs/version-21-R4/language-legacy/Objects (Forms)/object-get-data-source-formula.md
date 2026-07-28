---
id: object-get-data-source-formula
title: OBJECT Get data source formula
slug: /commands/object-get-data-source-formula
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get data source formula.Syntax-->**OBJECT Get data source formula** ( * ; *object* : Text ) : 4D.Formula<br/>**OBJECT Get data source formula** ( *object* : Variable, Field ) : 4D.Formula<!-- END REF-->

<!--REF #_command_.OBJECT Get data source formula.Params-->

<div class="no-index">

| Parâmetro | Tipo                       |                             | Descrição                                                                                                               |
| --------- | -------------------------- | --------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| \*        | Operador                   | &#8594; | If specified, object is an object name (string) ; if omitted, object is a variable or a field        |
| object    | Text, Variable, Field      | &#8594; | Form object name (if \* is specified) or<br/>Field or variable (if \* is omitted) |
| Resultado | 4D.Formula | &#8592; | Fórmula associada com o objeto de formulário (`Null` se nenhuma fórmula estiver associada)           |

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

The **OBJECT Get data source formula** command<!--REF #_command_.OBJECT Get data source formula.Summary--> returns the formula (if any) associated object(s) designated by the *object* and *\** parameters.<!-- END REF-->

Passing the optional *\** parameter indicates that the *object* parameter is an object name (string). If you do not pass this parameter, it indicates that the *object* parameter is a field or variable. In this case, you pass a field or variable reference instead of a string (field or variable object only).

When a formula is associated with a form object, it acts as the object's data source at runtime.

If this command is applied to an object with no custom formula assigned, it returns the automatically assigned [dynamic form variable](../../FormObjects/properties_Object.md#dynamic-variables).  
Se o objeto não existe ou não suporta fórmulas, ele retorna `Null`.

## Exemplo

You want check what formula (if any) is bound to an object:

```4d
$formula:=OBJECT Get data source formula(*; "myInput")

```

## Veja também

[OBJECT SET DATA SOURCE FORMULA](../commands/object-set-data-source-formula)<br/>
[LISTBOX GET COLUMN FORMULA](../commands/listbox-get-column-formula)<br/>
[OBJECT SET DATA SOURCE](../commands/object-set-data-source)<br/>
[OBJECT GET VALUE](../commands/object-get-value)

## Propriedades

|                   |      |
| ----------------- | ---- |
| Número de comando | 1852 |
| Thread safe       | não  |



