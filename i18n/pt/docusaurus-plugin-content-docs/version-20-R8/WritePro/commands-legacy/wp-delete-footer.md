---
id: wp-delete-footer
title: WP DELETE FOOTER
slug: /WritePro/commands/wp-delete-footer
displayed_sidebar: docs
---

<!--REF #_command_.WP DELETE FOOTER.Syntax-->**WP DELETE FOOTER** ( *wpSeção* )<!-- END REF-->
<!--REF #_command_.WP DELETE FOOTER.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| wpSeção | Object | &#8594;  | Seção ou subseção 4D Write Pro |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.WP DELETE FOOTER.Summary-->O comando **WP DELETE FOOTER** elimina o elemento do rodapé associado à seção ou subseção definida pelo parâmetro *wpSection*.<!-- END REF--> 

Se não existir um elemento de rodapé para a seção ou subseção, o comando não faz nada.

#### Exemplo 

Se quiser eliminar o rodapé das páginas da esquerda de uma seção:

```4d
 var $section;$subsection;$header : Object
  //Recupere a referência na primeira seção
 $section:=WP Get section(wpDoc;1)
  //Recupere a referência na subseção esquerda da primeira seção
 $subsection:=WP Get subsection($section;wk left page)
 
  //Elimina o rodapé
 WP DELETE FOOTER($subsection)
```

#### Ver também 

[WP Get footer](wp-get-footer.md)  
[WP New footer](wp-new-footer.md)  