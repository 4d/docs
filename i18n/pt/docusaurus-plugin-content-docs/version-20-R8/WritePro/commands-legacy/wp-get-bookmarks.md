---
id: wp-get-bookmarks
title: WP GET BOOKMARKS
slug: /WritePro/commands/wp-get-bookmarks
displayed_sidebar: docs
---

<!--REF #_command_.WP GET BOOKMARKS.Syntax-->**WP GET BOOKMARKS** ( *docWP* ; *arrayNomeMarcadores* )<!-- END REF-->
<!--REF #_command_.WP GET BOOKMARKS.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| docWP | Object | &#8594;  | Documento 4D Write Pro |
| arrayNomeMarcadores | Array texto | &#x1F858; | Array de nome de marcadores |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.WP GET BOOKMARKS.Summary-->O comando **WP GET BOOKMARKS** devolve um array que contém os nomes de todos os marcadores definidos em *docWP*.<!-- END REF--> 

Depois de executar o comando, *arrayNomMarcadores* é preenchido com todos os nomes de marcadores no documento. No array, os nomes estão ordenados por posição de marcador dentro do documento.  
  
Se vários marcadores começarem na mesma posição, são ordenados em ordem alfabética.

#### Exemplo 

Se quiser saber o número de marcadores definidos em seu documento:

```4d
 ARRAY TEXT($_bookmarks;0)
 WP GET BOOKMARKS(WParea;$_bookmarks)
 ALERT("The document contains "+Size of array($_bookmarks)+" bookmarks.")
```

#### Ver também 

[WP Bookmark range](wp-bookmark-range.md)  
[WP DELETE BOOKMARK](wp-delete-bookmark.md)  
[WP NEW BOOKMARK](wp-new-bookmark.md)  