---
id: wp-get-sections
title: WP Get sections
slug: /WritePro/commands/wp-get-sections
displayed_sidebar: docs
---

<!--REF #_command_.WP Get sections.Syntax-->**WP Get sections** ( *targetObj* ) -> Resultado<!-- END REF-->
<!--REF #_command_.WP Get sections.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| targetObj | Object | &#8594;  | Rango o documento 4D Write Pro |
| Resultado | Collection | &#8592; | Colección de todas las secciones (principales) encontradas en targetObj |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.WP Get sections.Summary-->El comando **WP Get sections** devuelve una colección de todas las secciones definidas en el parámetro *targetObj*.<!-- END REF-->

En el parámetro *targetObj*, puede pasar:

* un rango, o
* un elemento (tabla / línea / párrafo / cuerpo / encabezado / pie / caja de texto / imagen), o
* un documento 4D Write Pro

Si el rango o elemento pertenece a un encabezado o pie de página, **WP Get sections** devuelve la sección a la que está anclado el encabezado o pie de página.

Para cajas de texto e imágenes ancladas, **WP Get sections** devuelve: 

* una colección que contiene una única sección si el elemento está anclado a una sección,
* una colección con todas las secciones si el elemento está anclado a todas las secciones,
* una colección vacía si el elemento está anclado a la vista anidada o a un número de página.

Para más información acerca de secciones, consulte el párrafo *Manejo de encabezados, pies y secciones*.

#### Ejemplo 

Desea cambiar un atributo para la última sección del área 4D Write Pro:

```4d
 var $colSections : Collection
 $colSections:=WP Get sections(wpDoc)
 WP SET ATTRIBUTES($colSections[$colSections.length-1];wk column count;3)
```

#### Ver también 

[WP Get section](wp-get-section.md)  