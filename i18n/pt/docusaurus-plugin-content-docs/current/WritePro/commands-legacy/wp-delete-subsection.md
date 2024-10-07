---
id: wp-delete-subsection
title: WP DELETE SUBSECTION
slug: /WritePro/commands/wp-delete-subsection
displayed_sidebar: docs
---

<!--REF #_command_.WP DELETE SUBSECTION.Syntax-->**WP DELETE SUBSECTION** ( *wpSeção* ; *subSeçãoTipo* )<!-- END REF-->
<!--REF #_command_.WP DELETE SUBSECTION.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| wpSeção | Objeto | &#x1F852; | seção 4D Write Pro |
| subSeçãoTipo | Inteiro longo | &#x1F852; | tipo subseção (wk first page, wk left page ou wk right page) |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.WP DELETE SUBSECTION.Summary-->O comando **WP DELETE SUBSECTION** elimina a subseção de tipo *subSectionType* da seção 4D Write Pro *wpSection*.<!-- END REF-->

Em *wpSection*, passe a seção desde a que deseja eliminar a subseção. Esta referência pode ser obtida utilizando os comandos [WP Get sections](wp-get-sections.md) ou [WP Get section](wp-get-section.md).

O parâmetro *subSectionType* especifica a subseção a eliminar. Pode passar uma das constantes abaixo:  
  
| Constante     | Tipo          | Valor |
| ------------- | ------------- | ----- |
| wk first page | Inteiro longo | 1     |
| wk left page  | Inteiro longo | 2     |
| wk right page | Inteiro longo | 3     |

**Nota:** eliminar uma subseção de página esquerda ou direita eliminará automaticamente a subseção oposta. Por exemplo, se elimina uma subção da página direita, a subseção esquerda da página se elimina automaticamente.

Se *subSectionType* não existir, o comando não faz nada (não é gerado um erro).

#### Exemplo 

Se quiser eliminar a subseção da primeira página da primeira seção:

```4d
 var $section;$subsection : Object
  // Obtera primeira seção
 $section:=WP Get section(wpDoc;1)
  // Eliminar a subseção
 WP DELETE SUBSECTION($section;wk first page)
```

#### Ver também 

[WP Get subsection](wp-get-subsection.md)  
[WP New subsection](wp-new-subsection.md)  