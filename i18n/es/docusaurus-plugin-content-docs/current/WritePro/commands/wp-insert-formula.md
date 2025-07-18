---
id: wp-insert-formula
title: WP Insert formula
displayed_sidebar: docs
---

<!--REF #_command_.WP Insert formula.Syntax-->**WP Insert formula** ( *targetObj* ; *formula* ; *mode* {; *rangeUpdate*} ) : Object<!-- END REF-->

<!--REF #_command_.WP Insert formula.Params-->

| Parámetros  | Tipo   |                             | Descripción                                                       |
| ----------- | ------ | --------------------------- | ----------------------------------------------------------------- |
| targetObj   | Object | &#8594; | Rango o elemento o documento 4D Write Pro                         |
| formula     | Object | &#8594; | Objeto de fórmula U Objeto con propiedades de fórmula y de nombre |
| mode        | Number | &#8594; | Modo de inserción                                                 |
| rangeUpdate | Number | &#8594; | Includes or excludes the inserted content within the range        |
| Resultado   | Object | &#8592; | Text range object reprsenting the result of the formula           |

<!-- END REF-->

## Descripción

El comando **WP Insert formula** <!--REF #_command_.WP Insert formula.Summary--> inserta una *formula* en *targetObj* de acuerdo con el *mode* de inserción especificado y devuelve el rango de texto resultante.<!-- END REF-->

En el parámetro *targetObj*, puede pasar:

- un rango, o
- an element (table / row / cell(s) / paragraph / body / header / footer / section / subsection / inline picture), or
- un documento 4D Write Pro.

In the *formula* parameter, pass the 4D formula to evaluate. Puede pasar:

- o un [objeto de la fórmula](../../commands/formula.md-objects) creado por el comando [**Formula**](../../commands/formula.md) o [**Formula from string**](../../commands/formula.md-from-string),
- o un objeto que contiene dos propiedades:

| **Propiedad** | **Tipo** | **Description**                                                                                                                                                                             |
| ------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name          | Text     | Nombre que se mostrará para la fórmula en el documento                                                                                                                                      |
| formula       | Object   | The [formula object](../../commands/formula.md-objects) created by the [**Formula**](../../commands/formula.md) or [**Formula from string**](../../commands/formula.md-from-string) command |

When you use an object with a formula *name*, this name is displayed in the document instead of the formula reference when formulas are displayed as reference, and in the formula tip when displayed as value or symbols. If the *name* property contains an empty string or is omitted, it is removed from the object and the formula is displayed by default. Para más información, vea la página [Gestión de formulas](../managing-formulas.md).

In the *mode* parameter, pass one of the following constants to indicate the insertion mode to be used:

| Constante  | Tipo    | Valor | Comentario                                      |
| ---------- | ------- | ----- | ----------------------------------------------- |
| wk append  | Integer | 2     | Insertar el contenido al final del objetivo     |
| wk prepend | Integer | 1     | Insertar el contenido al principio del objetivo |
| wk replace | Integer | 0     | Sustituir contenido de destino                  |

- If *targetObj* is a range, you can use the optional *rangeUpdate* parameter to pass one of the following constants to specify whether or not the inserted *formula* is included in the resulting range:

| Constante             | Tipo    | Valor | Comentario                                                                            |
| --------------------- | ------- | ----- | ------------------------------------------------------------------------------------- |
| wk exclude from range | Integer | 1     | Contenido insertado no incluido en el rango actualizado                               |
| wk include in range   | Integer | 0     | Contenido insertado incluido en el rango actualizado (por defecto) |

If you do not pass a *rangeUpdate* parameter, by default the inserted *formula* is included in the resulting range.

- Si *targetObj* no es un rango, *rangeUpdate* se ignora.

:::note

Keep in mind that, when called, the formula object is evaluated within the context of the database or component that created it.

:::

## Ejemplo 1

To replace all current date formulas with formatted strings:

```4d
 var $_formulas : Collection
 var $find;$newFormula : Object
 
  // define the formula to find
 $find:=Formula(Current date)
 
  // define the replacement formula
 $newFormula:=Formula(String(Current date;System date long))
 
  // find all formulas in the document
 $_formulas:=WP Get formulas(WriteProArea)
 
  // query the collection from WP Get formulas
 $_formulas:=$_formulas.query("formula.source =:1";$find.source)
 
  // then replace each formula
 For each($formula;$_formulas)
    WP Insert formula($formula.range;$newFormula;wk replace)
 End for each
```

## Ejemplo 2

You want to use a formula name for the customer name:

```4d
  //add some data
 $data:=New object("customer";New object("lastname";"Smith";"firstname";"John"))
 WP SET DATA CONTEXT(WPArea;$data)
 
  //create a formula object with a name
 $o:=New object
 $o.formula:=Formula(This.data.customer.firstname+" "+This.data.customer.lastname)
 $o.name:="Customer name"
 
  //inserts as text
 $range:=WP Text range(WPArea;wk start text;wk end text)
 WP SET TEXT($range;"Dear ";wk append)
 WP Insert formula($range;$o;wk append)
```

Resultado:

![](../../assets/en/WritePro/commands/pict6433508.en.png)

## Ejemplo 3

Desea resaltar una fórmula en amarillo:

```4d
WParea:=WP New
WP SET TEXT(WParea; "The project was completed on: "; wk append)
$range1:=WP Insert formula(WParea; Formula(Current date); wk append)

WP SET ATTRIBUTES($range1; wk background color; "yellow")

```

Resultado:

![](../../assets/en/WritePro/commands/WPpic1.png)

## Ver también

*Managing formulas*\
[WP COMPUTE FORMULAS](../commands-legacy/wp-compute-formulas.md)</br>
[WP FREEZE FORMULAS](../commands-legacy/wp-freeze-formulas.md)</br>
[WP Get formulas](../commands-legacy/wp-get-formulas.md)