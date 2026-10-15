---
id: object-set-padding
title: OBJECT SET PADDING
slug: /commands/object-set-padding
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET PADDING.Syntax-->**OBJECT SET PADDING** ( * ; *object* : Text ; *padding* : Object )<br/>**OBJECT SET PADDING** ( *object* : Variable, Field ; *padding* : Object )<!-- END REF-->

<!--REF #_command_.OBJECT SET PADDING.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594; | Si se especifica, object es un nombre de objeto (cadena)<br/>Si se omite, object es una variable o un campo |
| object | Text, Variable, Field | &#8594; | Nombre de objeto (si se especifica *) o<br/>variable o campo (si se omite *) |
| padding | Object | &#8594; | Valores de relleno |

</div>
<!-- END REF-->

<div class="no-index">

<details><summary>Historial</summary>

| Versión | Cambios |
| --- | --- |
| 21 R5 | Creado |

</details>

</div>

## Descripción

<!--REF #_command_.OBJECT SET PADDING.Summary-->El comando **OBJECT SET PADDING** define el relleno de los objetos designados por los parámetros *object* y *\**.<!-- END REF-->

Si pasa el parámetro opcional *\**, esto indica que el parámetro *object* es un nombre de objeto (una cadena). Si no pasa este parámetro, esto indica que *object* es una variable o un campo. En este caso, pase una referencia de variable o de campo en lugar de una cadena.

En *padding*, pase un objeto que contenga las siguientes propiedades:

| Propiedad | Tipo | Descripción |
| --- | --- | --- |
| `top` | Integer | Relleno entre el contenido y el borde superior |
| `bottom` | Integer | Relleno entre el contenido y el borde inferior |
| `left` | Integer | Relleno entre el contenido y el borde izquierdo |
| `right` | Integer | Relleno entre el contenido y el borde derecho |

Todas las propiedades son opcionales. Si se omite una propiedad, su valor actual permanece sin cambios.

Los valores de relleno se expresan en píxeles. Si se asigna un valor negativo, el relleno efectivo se establece en 0.

El relleno se puede aplicar a los siguientes tipos de objetos de formulario:

* [áreas de texto](../../FormObjects/text.md),
* [entradas](../../FormObjects/input_overview.md),
* [list boxes](../../FormObjects/listbox_overview.md),
* [columnas de list box](../../FormObjects/listbox-column.md),
* [encabezados](../../FormObjects/properties_Headers.md) y [pies de list box](../../FormObjects/properties_Footers.md).

Para las list boxes, las columnas de list box y sus encabezados y pies, se utiliza el mismo objeto *padding*, pero solo se tienen en cuenta los valores `top` y `left` para la representación:

- `top` se aplica como relleno superior e inferior,
- `left` se aplica como relleno izquierdo y derecho.

## Ejemplo

```4d 
var $padding:={top: 20; left: 10}
OBJECT SET PADDING(*; "List box"; $padding)
```

El valor `top` se aplica al relleno superior e inferior, mientras que el valor `left` se aplica al relleno izquierdo y derecho.

## Ver también

[OBJECT Get padding](../commands/object-get-padding)  
[OBJECT Get vertical alignment](../commands/object-get-vertical-alignment)  
[OBJECT SET VERTICAL ALIGNMENT](../commands/object-set-vertical-alignment)

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 1865 |
| Hilo seguro | no |