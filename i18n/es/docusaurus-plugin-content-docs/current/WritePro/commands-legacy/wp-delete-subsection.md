---
id: wp-delete-subsection
title: WP DELETE SUBSECTION
slug: /WritePro/commands/wp-delete-subsection
displayed_sidebar: docs
---

<!--REF #_command_.WP DELETE SUBSECTION.Syntax-->**WP DELETE SUBSECTION** ( *wpSection* ; *subSectionType* )<!-- END REF-->
<!--REF #_command_.WP DELETE SUBSECTION.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| wpSection | Objeto | &#x1F852; | Sección 4D Write Pro |
| subSectionType | Entero largo | &#x1F852; | Tipo de subsección (wk first page, wk left page, o wk right page) |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.WP DELETE SUBSECTION.Summary-->El comando **WP DELETE SUBSECTION** elimina la subsección de tipo *subSectionType* de la sección 4D Write Pro *wpSection*.<!-- END REF-->

En *wpSection*, pase la sección desde la que desea eliminar la subsección. La sección se puede obtener utilizando los comandos [WP Get sections](wp-get-sections.md) o [WP Get section](wp-get-section.md).

El parámetro *subSectionType* especifica la subsección a eliminar. Puede pasar una de las siguientes constantes:  
  
| Constante     | Tipo         | Valor |
| ------------- | ------------ | ----- |
| wk first page | Entero largo | 1     |
| wk left page  | Entero largo | 2     |
| wk right page | Entero largo | 3     |

**Nota:** eliminar una subsección de página izquierda o derecha eliminará automáticamente la subsección opuesta. Por ejemplo, si elimina una subsección de la página derecha, la subsección izquierda de la página se elimina automáticamente.

Si *subSectionType* no existe, el comando no hace nada (no se genera ningún error).

#### Ejemplo 

Desea eliminar la subsección de la primera página de la primera sección:

```4d
 var $section;$subsection : Object
  // Obtener la primera sección
 $section:=WP Get section(wpDoc;1)
  // Eliminar la subsección
 WP DELETE SUBSECTION($section;wk first page)
```

#### Ver también 

[WP Get subsection](wp-get-subsection.md)  
[WP New subsection](wp-new-subsection.md)  