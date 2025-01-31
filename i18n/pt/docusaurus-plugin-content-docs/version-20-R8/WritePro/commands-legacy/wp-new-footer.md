---
id: wp-new-footer
title: WP New footer
slug: /WritePro/commands/wp-new-footer
displayed_sidebar: docs
---

<!--REF #_command_.WP New footer.Syntax-->**WP New footer** ( *wpSeção* ) -> Resultado<!-- END REF-->
<!--REF #_command_.WP New footer.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| wpSeção | Object | &#8594;  | Seção ou subseção 4D Write Pro |
| Resultado | Object | &#8592; | Cabeçalho 4D Write Pro |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.WP New footer.Summary-->O comando **WP New footer** cria e devolve um rodapé associado à seção ou subseção definida pelo paâmetro *wpSection*.<!-- END REF-->

Se um elemento de rodapé já estive definido para a seção ou subseção, um objeto indefinido é devolvido e se gera um erro.

#### Exemplo 

Deseja criar um rodapé para as páginas da esquerda de uma seção:

```4d
 var $section;$subsection;$footer : Object
  //Recupera a primeira seção
 $section:=WP Get section(wpDoc;1)
  //Recupera a referência na subseção esquerda da primeira seção
 $subsection:=WP Get subsection($section;wk left page)
 
  //Se a subseção existir, configureo rodapé
 If($subsection#Null)
    $footer:=WP New footer($subsection)
 End if
```

#### Ver também 

[WP DELETE FOOTER](wp-delete-footer.md)  
[WP Get footer](wp-get-footer.md)  
[WP New header](wp-new-header.md)  