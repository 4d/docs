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
- un elemento (tabla / línea / párrafo / cuerpo / encabezado / pie de página / imagen en línea / sección / subsección), o
- un documento 4D Write Pro

En *breakType*, pase una de las siguientes constantes del tema *4D Write Pro Constants* para definir el tipo de ruptura a insertar:

| Constante                   | Tipo    | Valor | Comentario                                                                                                                                                    |
| --------------------------- | ------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| wk column break             | Integer | 3     | Salto de columna: inserta un salto de columna                                                                                                 |
| wk continuous section break | Integer | 5     | Define un salto de sección continuo (a menudo se utiliza para cambiar el número de columnas sin empezar una nueva página). |
| wk line break               | Integer | 0     | Salto de línea (en el mismo párrafo)                                                                                                       |
| wk page break               | Integer | 2     | Salto de página: define una nueva página                                                                                                      |
| wk paragraph break          | Integer | 4     | Salto de párrafo: define un nuevo párrafo                                                                                                     |
| wk section break            | Integer | 1     | Ruptura de sección: define una nueva sección                                                                                                  |

En el parámetro *mode*, pase una constante para indicar el modo de inserción que se utilizará para la ruptura en el destino *targetObj*:

| Constante  | Tipo    | Valor | Comentario                                      |
| ---------- | ------- | ----- | ----------------------------------------------- |
| wk append  | Integer | 2     | Insertar el contenido al final del objetivo     |
| wk prepend | Integer | 1     | Insertar el contenido al principio del objetivo |
| wk replace | Integer | 0     | Sustituir contenido de destino                  |

- Si *targetObj* es un rango, puede utilizar el parámetro opcional *rangeUpdate* para pasar una de las siguientes constantes para especificar si el contenido insertado se incluye o no en el rango resultante:

| Constante             | Tipo    | Valor | Comentario                                                                            |
| --------------------- | ------- | ----- | ------------------------------------------------------------------------------------- |
| wk exclude from range | Integer | 1     | Contenido insertado no incluido en el rango actualizado                               |
| wk include in range   | Integer | 0     | Contenido insertado incluido en el rango actualizado (por defecto) |

Si no se pasa el parámetro *rangeUpdate*, por defecto el contenido insertado se incluye en el rango resultante.

- Si *targetObj* no es un rango, *rangeUpdate* se ignora.

## Ejemplo 1

Al crear facturas, desea insertar saltos de página excepto en la última página:

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

Desea insertar un salto de sección continuo para tener una sección de una columna y una sección de dos columnas en la misma página.

1. Inserte un salto de sección continuo en la selección para crear una nueva sección:

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