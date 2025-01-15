---
id: wp-get-section
title: WP Get section
slug: /WritePro/commands/wp-get-section
displayed_sidebar: docs
---

<!--REF #_command_.WP Get section.Syntax-->**WP Get section** ( *targetObj* ) | (*wpDoc* ; *indiceSeccion* ) -> Resultado<!-- END REF-->
<!--REF #_command_.WP Get section.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| targetObj | Object | &#8594;  | Rango o elemento |
| wpDoc | Object | &#8594;  | Documento 4D Write Pro |
| indiceSeccion | Integer | &#8594;  | Índice de sección |
| Resultado | Object | &#8592; | Sección 4D Write Pro |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.WP Get section.Summary-->El comando **WP Get section** devuelve la primera sección intersectada por el rango *targetObj* o elemento, o al *indiceSeccion* especificado del documento *wpDoc*.<!-- END REF-->

* Con la primera sintaxis (utilizando el parámetro *targetObj*), el comando devuelve la primera sección intersectada por el rango o el elemento. Puedes pasar en *targetObj*:  
   * un rango, o  
   * un elemento (tabla / fila / párrafo / cuerpo / caja de texto / encabezado / pie de página). No puede pasar una subsección, ni una imagen anclada (se devuelve un error en este caso).

Si el rango o elemento pertenece a un encabezado o a un pie de página, **WP Get section** devuelve la sección a la que está conectado el encabezado o pie de página. Si el rango o elemento es o pertenece a una caja de texto, **WP Get section** siempre devuelve la primera sección, excepto si está anclado a una sección (en cuyo caso se devuelve la sección).

* Con la segunda sintaxis (utilizando el parámetro *wpDoc*), el comando devuelve la sección correspondiente a la sección *indiceSeccion* (el valor de *indiceSeccion* debe ser >=1).  
Si no se define ninguna sección para el *indiceSeccion* especificado, el comando devuelve un objeto indefinido (no se devuelve ningún error).

**Nota:** utilice el comando [WP Get subsection](wp-get-subsection.md) para obtener una subsección de una sección o de un rango.

#### Ejemplo 

Desea obtener la referencia de la primera sección:

```4d
 var $section : Object
  // obtiene la primera sección
 $section:=WP Get section(wpDoc;1)
```

#### Ver también 

[WP Get sections](wp-get-sections.md)  
[WP Get subsection](wp-get-subsection.md)  