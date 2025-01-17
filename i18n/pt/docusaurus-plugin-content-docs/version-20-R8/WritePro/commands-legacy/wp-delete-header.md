---
id: wp-delete-header
title: WP DELETE HEADER
slug: /WritePro/commands/wp-delete-header
displayed_sidebar: docs
---

<!--REF #_command_.WP DELETE HEADER.Syntax-->**WP DELETE HEADER**  ( *wpSecao* )<!-- END REF-->
<!--REF #_command_.WP DELETE HEADER.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| wpSecao | Object | &#8594;  | Seção ou subseção 4D Write Pro |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.WP DELETE HEADER.Summary-->O comando **WP DELETE HEADER**  elimina o elemento do cabeçalho associado à seção ou subseção definida pelo parâmetro *wpSection*.<!-- END REF--> 

Se não existir um elemento de cabeçalho para a seção ou subseção, o comando não faz nada.

#### Exemplo 

Se quiser eliminar o cabeçalho das páginas corretas de uma seção:

```4d
 var $section;$subsection;$header : Object
  //Recupera a referência na primeira seção
 $section:=WP Get section(wpDoc;1)
  //Recupera a referência na subseção da esquerda da primeira seção
 $subsection:=WP Get subsection($section;wk right page)
 
  //Elimina o cabeçalho
 WP DELETE HEADER($subsection)
```

#### Ver também 

[WP Get header](wp-get-header.md)  
[WP New header](wp-new-header.md)  