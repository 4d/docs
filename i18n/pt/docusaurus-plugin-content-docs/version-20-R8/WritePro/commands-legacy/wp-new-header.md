---
id: wp-new-header
title: WP New header
slug: /WritePro/commands/wp-new-header
displayed_sidebar: docs
---

<!--REF #_command_.WP New header.Syntax-->**WP New header** ( *wpSeção* ) -> Resultado<!-- END REF-->
<!--REF #_command_.WP New header.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| wpSeção | Object | &#8594;  | Seção ou subseção 4D Write Pro |
| Resultado | Object | &#8592; | Cabeçalho 4D Write Pro |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.WP New header.Summary-->O comando **WP New header** cria e devolve um cabeçalho associado à seção ou subseção definida pelo parâmetro *wpSection*.<!-- END REF-->

Se já tiver sido definido um elemento de cabeçalho para a seção ou subseção, um objeto *indefinido é devolvido e* um erro é gerado.

#### Exemplo 

Se quiser criar um cabeçalho para as páginas corretas de uma seção:

```4d
 var $section;$subsection;$header : Object
  //Recupera a primeira seção
 $section:=WP Get section(wpDoc;1)
  //Recupera a primeira subseção da primeira seção
 $subsection:=WP Get subsection($section;wk right page)
 
  //Se a subseção existir, configura o cabeçalho
 If($subsection#Null)
    $header:=WP New header($subsection)
 End if
```

#### Ver também 

[WP DELETE HEADER ](wp-delete-header.md)  
[WP Get header](wp-get-header.md)  
[WP New footer](wp-new-footer.md)  