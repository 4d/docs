---
id: object-get-padding
title: OBJECT Get padding
slug: /commands/object-get-padding
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get padding.Syntax-->**OBJECT Get padding** ( * ; *object* : Text ) : Object<br/>**OBJECT Get padding** ( *object* : Variable, Field ) : Object<!-- END REF-->

<!--REF #_command_.OBJECT Get padding.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594; | Si se especifica, object es un nombre de objeto (cadena)<br/>Si se omite, object es una variable o un campo |
| object | Text, Variable, Field | &#8594; | Nombre de objeto (si se especifica *) o<br/>variable o campo (si se omite *) |
| Resultado | Object | &#8592; | Valores de relleno |

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

<!--REF #_command_.OBJECT Get padding.Summary-->El comando **OBJECT Get padding** devuelve un objeto que contiene los valores de relleno actuales del objeto designado por los parámetros *object* y *\**.<!-- END REF-->

Si pasa el parámetro opcional *\**, esto indica que el parámetro *object* es un nombre de objeto (una cadena). Si no pasa este parámetro, esto indica que *object* es una variable o un campo. En este caso, pase una referencia de variable o de campo en lugar de una cadena.

**Nota:** Si aplica este comando a un conjunto de objetos, solo se devuelven los valores de relleno del último objeto.

El objeto devuelto contiene las siguientes propiedades:

| Propiedad | Tipo | Descripción |
| --- | --- | --- |
| `top` | Integer | Relleno entre el contenido y el borde superior |
| `bottom` | Integer | Relleno entre el contenido y el borde inferior |
| `left` | Integer | Relleno entre el contenido y el borde izquierdo |
| `right` | Integer | Relleno entre el contenido y el borde derecho |

Los valores de relleno se expresan en píxeles.

El relleno se puede recuperar para los siguientes tipos de objetos de formulario:

* [áreas de texto](../../FormObjects/text.md),
* [entradas](../../FormObjects/input_overview.md),
* [list boxes](../../FormObjects/listbox_overview.md),
* [columnas de list box](../../FormObjects/listbox-column.md),
* [encabezados](../../FormObjects/properties_Headers.md) y [pies de list box](../../FormObjects/properties_Footers.md).

Para las list boxes, las columnas de list box y sus encabezados y pies, los valores `top` y `bottom` devueltos son iguales, al igual que los valores `left` y `right`.

## Ejemplo

```4d 

var $currentPadding:=OBJECT Get padding(*; "My Input")
// $currentPadding = {"left":10,"right":15,"top":20,"bottom":35}

```


## Ver también

[OBJECT SET PADDING](../commands/object-set-padding)  
[OBJECT Get vertical alignment](../commands/object-get-vertical-alignment)  
[OBJECT SET VERTICAL ALIGNMENT](../commands/object-set-vertical-alignment)

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 1866 |
| Hilo seguro | no |