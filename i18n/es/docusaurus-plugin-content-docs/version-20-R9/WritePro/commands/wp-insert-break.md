---
id: wp-insert-break
title: WP Insert break
displayed_sidebar: docs
---

<!--REF #_command_.WP Insert break.Syntax-->**WP Insert break** ( *targetObj* ; *breakType* ; *mode* {; *rangeUpdate*} ) : Object<!-- END REF-->

<!--REF #_command_.WP Insert break.Params-->

| Parámetros  | Tipo    |                             | Descripción                               |
| ----------- | ------- | --------------------------- | ----------------------------------------- |
| targetObj   | Object  | &#8594; | Rango o elemento o documento 4D Write Pro |
| breakType   | Integer | &#8594; | Tipo de ruptura a insertar                |
| mode        | Integer | &#8594; | Modo de inserción                         |
| rangeUpdate | Integer | &#8594; | Modo de actualización del rango           |
| Resultado   | Object  | &#8592; | Rango de texto del caracter de ruptura    |

<!-- END REF-->

## Descripción

El comando **WP Insert break** <!--REF #_command_.WP Insert break.Summary-->inserta una nueva ruptura de tipo *breakType* en el *targetObj* de acuerdo con los parámetros de inserción *mode*  y *rangeUpdate* especificados, y devuelve el rango de texto del caracter de ruptura<!-- END REF-->

En *targetObj*, pase:

- un rango, o
- an element (table / row / paragraph / body / header / footer / inline picture / section / subsection), or
- un documento 4D Write Pro

In *breakType*, pass one of the following constants from the *4D Write Pro Constants* theme to define the type of break to insert:

| Constante                   | Tipo    | Valor | Comentario                                                                                                                                      |
| --------------------------- | ------- | ----- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| wk column break             | Integer | 3     | Salto de columna: inserta un salto de columna                                                                                   |
| wk continuous section break | Integer | 5     | Defines a continuous section break (often used to change the number of columns without starting a new page). |
| wk line break               | Integer | 0     | Salto de línea (en el mismo párrafo)                                                                                         |
| wk page break               | Integer | 2     | Salto de página: define una nueva página                                                                                        |
| wk paragraph break          | Integer | 4     | Salto de párrafo: define un nuevo párrafo                                                                                       |
| wk section break            | Integer | 1     | Ruptura de sección: define una nueva sección                                                                                    |

In the *mode* parameter, pass a constant to indicate the insertion mode to be used for the break in the destination *targetObj*:

| Constante  | Tipo    | Valor | Comentario                                      |
| ---------- | ------- | ----- | ----------------------------------------------- |
| wk append  | Integer | 2     | Insertar el contenido al final del objetivo     |
| wk prepend | Integer | 1     | Insertar el contenido al principio del objetivo |
| wk replace | Integer | 0     | Sustituir contenido de destino                  |

- If *targetObj* is a range, you can use the optional *rangeUpdate* parameter to pass one of the following constants to specify whether or not the inserted contents are included in the resulting range:

| Constante             | Tipo    | Valor | Comentario                                                                            |
| --------------------- | ------- | ----- | ------------------------------------------------------------------------------------- |
| wk exclude from range | Integer | 1     | Contenido insertado no incluido en el rango actualizado                               |
| wk include in range   | Integer | 0     | Contenido insertado incluido en el rango actualizado (por defecto) |

If you do not pass a *rangeUpdate* parameter, by default the inserted contents are included in the resulting range.

- Si *targetObj* no es un rango, *rangeUpdate* se ignora.

## Ejemplo 1

While building invoices, you want to insert page breaks except on the last page:

```4d
 $nbInvoices:=Records in selection([INVOICE])
 For($j;1;$nbInvoices)
    ... //procesando facturas
    If($j#$nbInvoices) //insertar ruptura de página excepto para la última página
       WP Insert break($buildRange;wk page break;wk append;wk exclude from range)
    End if
 End for
```

## Ejemplo 2

You want to insert a continuous section break to have a single column section and a two-column section on the same page.

1. Insert a continuous section break at the selection to create a new section:

```4d
 $range:=WP Selection range(*;"WParea")  
 WP Insert break($range;wk continuous section break;wk append)  
```

![](../../assets/en/WritePro/commands/pict5562056.en.png)
2. Define el conteo de columnas a 2 para la primera sección:

```4d
 $section:=WP Get section(WParea;1)  
 WP SET ATTRIBUTES($section;wk column count;2)  
```

![](../../assets/en/WritePro/commands/pict5562058.en.png)

## Ver también

[WP Get breaks](../commands-legacy/wp-get-breaks.md)</br>
[WP Insert document body](wp-insert-document-body.md)