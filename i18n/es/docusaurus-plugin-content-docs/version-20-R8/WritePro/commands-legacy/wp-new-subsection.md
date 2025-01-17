---
id: wp-new-subsection
title: WP New subsection
slug: /WritePro/commands/wp-new-subsection
displayed_sidebar: docs
---

<!--REF #_command_.WP New subsection.Syntax-->**WP New subsection** ( *wpSection* ; *subSectionType* ) -> Resultado<!-- END REF-->
<!--REF #_command_.WP New subsection.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| wpSection | Object | &#8594;  | Sección 4D Write Pro |
| subSectionType | Integer | &#8594;  | Tipo de subsección (wk first page, wk left page, o wk right page) |
| Resultado | Object | &#8592; | Nueva subsección |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.WP New subsection.Summary-->El comando **WP New subsection** crea una nueva subsección del tipo *subSectionType* en la sección 4D Write Pro *wpSection*.<!-- END REF-->

En *wpSection*, pase la sección donde desea crear una nueva subsección. La sección se puede obtener utilizando los comandos [WP Get sections](wp-get-sections.md) o [WP Get section](wp-get-section.md).

El parámetro *subSectionType* especifica la subsección a crear. Puede pasar una de las siguientes constantes:  
  
| Constante     | Tipo         | Valor |
| ------------- | ------------ | ----- |
| wk first page | Entero largo | 1     |
| wk left page  | Entero largo | 2     |
| wk right page | Entero largo | 3     |

**Nota:** crear una subsección de página izquierda o derecha creará automáticamente la subsección opuesta. Por ejemplo, si crea una subsección de página izquierda, la subsección de la página derecha se define automáticamente.

Si *subSectionType* ya existe, se devuelve un error.

#### Ejemplo 

Desea crear las subsecciones izquierda y derecha:

```4d
 var $section;$subsection : Object
  // obtiene la primera sección
 $section:=WP Get section(wpDoc;1)
  // Crea la sección izquierda - la sección derecha se crea automáticamente
 $subsection:=WP New subsection($section;wk left page)
```

#### Ver también 

[WP DELETE SUBSECTION](../commands/wp-delete-subsection.md)  
[WP Get subsection](wp-get-subsection.md)  