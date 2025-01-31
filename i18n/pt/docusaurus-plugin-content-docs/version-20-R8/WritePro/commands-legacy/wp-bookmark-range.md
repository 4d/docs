---
id: wp-bookmark-range
title: WP Bookmark range
slug: /WritePro/commands/wp-bookmark-range
displayed_sidebar: docs
---

<!--REF #_command_.WP Bookmark range.Syntax-->**WP Bookmark range** ( *docWP* ; *NomeBK* ) -> Resultado<!-- END REF-->
<!--REF #_command_.WP Bookmark range.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| docWP | Object | &#8594;  | Documento 4D Write Pro |
| NomeBK | Text | &#8594;  | Nome de bookmark cuja faixa quer obter |
| Resultado | Object | &#8592; | Faixa de bookmark |

<!-- END REF-->

#### Compatibilidade 

<!--REF #_command_.WP Bookmark range.Summary-->**WP Bookmark range** era chamada **WP Get bookmark range** em versões anteriores de 4D Write Pro.<!-- END REF--> Foi renomeada por claridade. 

#### Descrição 

O comando **WP Bookmark range** devolve um objeto de tipo faixa de texto (objFaixa) que contém a faixa para o marcador com o nome *nombk* em *docWP*.

Se o marcador *nombk* não existir em *wpDoc*, um objeto objFaixa é devolvido.

#### Exemplo 

Se quiser mostrar a faixa do marcador "MyBookmark" em seu documento:

```4d
 var $wpRange : Object
 $wpRange:=WP Get bookmark range(WParea;"MyBookmark")
 WP SELECT(WParea;$wpRange)
```

#### Ver também 

[WP DELETE BOOKMARK](wp-delete-bookmark.md)  
[WP GET BOOKMARKS](wp-get-bookmarks.md)  
[WP NEW BOOKMARK](wp-new-bookmark.md)  
[WP Text range](wp-text-range.md)  