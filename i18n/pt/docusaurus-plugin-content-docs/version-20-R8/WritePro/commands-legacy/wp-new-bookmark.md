---
id: wp-new-bookmark
title: WP NEW BOOKMARK
slug: /WritePro/commands/wp-new-bookmark
displayed_sidebar: docs
---

<!--REF #_command_.WP NEW BOOKMARK.Syntax-->**WP NEW BOOKMARK** ( *objFaixa* ; *nomeBookm* )<!-- END REF-->
<!--REF #_command_.WP NEW BOOKMARK.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| objFaixa | Object | &#8594;  | faixa 4D Write Pro |
| nomeBookm | Text | &#8594;  | Nome da Bookmark a criar |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.WP NEW BOOKMARK.Summary-->O comando **WP NEW BOOKMARK** \[#/descv\]cria uma nova bookmark ou marcador de página chamado *nomeBookm* baseado na *FaixaObj* 4D Write Pro na faixa do documento pai.<!-- END REF--> \[#/descv\]

Bookmarks são referências nomeadas à faixas, que permitem que acesse e reutilise partes específicas do documento, por exemplo, como modelos. Para saber mais, veja *Comandos de Bookmark*.

Em *targetObj*, pode passar:

* uma faixa ou
* um elemento (cabeçalho / rodapé / corpo / tabela / fila/ imagem inline / parágrafo)

**Nota**: Se passar um elemento em *targetObj*, a bookmark vai conter apenas o elemento especificado.

Em *nomeBookm*, passe o nome para a nova bookmark. O nome da bookmark deve seguir as regras de nomes HTML/CSS, ou seja, deve conter apenas caracteres alfanuméricos (caracteres inválidos, como espaços, são automaticamente removidos). Nomes de bookmarks devem ser únicos dentro do documento. Se uma bookmark com o mesmo nome já existir no documento, ela será sobreescrita. 

É possível criar tantas bookmarks quantas desejadas dentro do mesmo documento. Bookmarks múltiplas podem ser criadas usando exatamente a mesma range. Quando criada, uma bookmark é automaticamente armazenada no documento pai e salv com o documento.. 

#### Exemplo 1 

Pode criar uma nova bookmark referenciando o texto selecionado atual no documento. Pode escrever:

```4d
 var $range : Object
 $range:=WP Selection range(*;"WPDocument")
 WP NEW BOOKMARK($range;"my_bookmark")
```

#### Exemplo 2 

Se quiser renomear uma bookmark existente, precisa criar uma nova bookmark com a mesma faixa, e então apagar a antiga:

```4d
 var $bookmarkOldName : Text
 var $bookmarkNewName : Text
 var $p : Integer
 var $wpRange : Object
 
 $bookmarkOldName:="MyBookmark"
 $bookmarkNewName:="MyNewBookmark"
 
 ARRAY TEXT($_bookmarks;0)
 WP GET BOOKMARKS(WParea;$_bookmarks)
 
 $p:=Find in array($_bookmarks;$bookmarkOldName)
 If($p>0)
    $wpRange:=WP Get bookmark range(WParea;$bookmarkOldName)
    WP DELETE BOOKMARK(WParea;$bookmarkOldName)
    WP NEW BOOKMARK($wpRange;$bookmarkNewName)
 End if
```

#### Ver também 

  
[WP Bookmark range](wp-bookmark-range.md)  
[WP DELETE BOOKMARK](wp-delete-bookmark.md)  
[WP GET BOOKMARKS](wp-get-bookmarks.md)  