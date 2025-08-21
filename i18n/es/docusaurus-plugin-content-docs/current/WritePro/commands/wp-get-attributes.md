---
id: wp-get-attributes
title: WP Get attributes
displayed_sidebar: docs
---

<!--REF #_command_.WP Get attributes.Syntax-->**WP Get attributes** ( *targetObj* ; *...attribName* ; *...attribValue* ) : Object<br/>**WP Get attributes** ( *targetObj* ; *attribColl* ) : Object<!-- END REF-->

<!--REF #_command_.WP Get attributes.Params-->

| Parámetros  | Tipo                                           |                             | Descripción                                 |
| ----------- | ---------------------------------------------- | --------------------------- | ------------------------------------------- |
| targetObj   | Object                                         | &#8594; | Rango o elemento o documento 4D Write Pro   |
| attribName  | Text                                           | &#8594; | Nombre del atributo a obtener               |
| attribValue | Text, Number, Array, Collection, Picture, Date | &#8592; | Valor actual del atributo para el objetivo  |
| attribColl  | Collection                                     | &#8594; | Colección de nombres de atributos a obtener |
| Resultado   | Object                                         | &#8592; | Nombres y valores de los atributos          |

<!-- END REF-->

## Descripción

El comando **WP Get attributes**<!--REF #_command_.WP Get attributes.Summary--> devuelve el valor de cualquier atributo en un rango 4D Write Pro, encabezado, cuerpo, pie de página, tabla o documento.<!-- END REF--> Este comando le da acceso a cualquier tipo de atributos internos 4D Write Pro: carácter, párrafo, documento, tabla o imagen.

En *targetObj*, puede pasar:

- un rango, o
- un elemento (encabezado / pie de página / cuerpo / tabla / párrafo / imagen anclada / sección / subsección / hoja de estilo), o
- un documento 4D Write Pro

En *attribName*, pase el nombre del atributo a recuperar.

You can also pass a collection of attribute names in *attribColl*, in which case the command will return an object containing the attribute names passed in *attribColl* along with their corresponding values.

For a comprehensive list of attributes to pass, as well as their scope and values, please refer to the *4D Write Pro Attributes* section.

If there are different values for the same attribute in the element passed as a parameter, the command returns:

- para valores numéricos, wk mixed
- for an array, an empty array (tab stops, color if *attribValue* is defined as array), with an exception for wk text shadow offset for which the array value will always contain 2 entries which may be set separately to wk mixed if either horizontal offset or vertical offset (or both) are mixed.
- para valores cadena, una cadena vacía
- para valores imagen, una imagen vacía.

**Note**: If *targetObj* contains a paragraph and a character style sheets, the paragraph style sheet name is returned.

## Ejemplo 1

Desea obtener el color de fondo del área seleccionada:

```4d
 $range:=WP Selection range(*;"WParea")
 WP Get attributes($range;wk background color;$bcol)
```

## Ejemplo 2

You want to get the font size, background color and border style of the selected area using a collection:

```4d
 $range:=WP Selection range(*;"WParea")
 $collection:=New collection(wk font size; wk background color; wk border style)
 $attributes:=WP Get attributes($range; $collection)
 
```

## Ver también

[WP RESET ATTRIBUTES](../commands/wp-reset-attributes.md)\
[WP SET ATTRIBUTES](wp-set-attributes.md)