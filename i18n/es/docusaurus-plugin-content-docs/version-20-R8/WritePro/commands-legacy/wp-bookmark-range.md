---
id: wp-bookmark-range
title: WP Bookmark range
slug: /WritePro/commands/wp-bookmark-range
displayed_sidebar: docs
---

<!--REF #_command_.WP Bookmark range.Syntax-->**WP Bookmark range** ( *docWP* ; *nombk* ) -> Resultado<!-- END REF-->
<!--REF #_command_.WP Bookmark range.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| docWP | Object | &#8594;  | Documento 4D Write Pro |
| nombk | Text | &#8594;  | Nombre del marcador cuyo rango desea obtener |
| Resultado | Object | &#8592; | Rango del marcador |

<!-- END REF-->

#### Compatibilidad 

<!--REF #_command_.WP Bookmark range.Summary-->**WP Bookmark range** fue nombrado **WP Get bookmark range** en versiones anteriores de 4D Write Pro.<!-- END REF--> Se ha renombrado por claridad. 

#### Descripción 

El comando **WP Bookmark range** devuelve un objeto de tipo rango objRango que contiene el rango asociado al marcador con el nombre *nombk* en el documento *docWP*.

Si el marcador *nombk* no existe en *wpDoc*, se devuelve un objeto objRango.

#### Ejemplo 

Usted quiere mostrar el rango del marcador "MyBookmark" en su documento:

```4d
 var $wpRange : Object
 $wpRange:=WP Bookmark range(WParea;"MyBookmark")
 WP SELECT(WParea;$wpRange)
```

#### Ver también 

[WP DELETE BOOKMARK](wp-delete-bookmark.md)  
[WP GET BOOKMARKS](wp-get-bookmarks.md)  
[WP NEW BOOKMARK](wp-new-bookmark.md)  
[WP Text range](wp-text-range.md)  