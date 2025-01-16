---
id: wp-new-subsection
title: WP New subsection
slug: /WritePro/commands/wp-new-subsection
displayed_sidebar: docs
---

<!--REF #_command_.WP New subsection.Syntax-->**WP New subsection** ( *wpSeção* ; *subSeçãoTipo* ) -> Resultado<!-- END REF-->
<!--REF #_command_.WP New subsection.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| wpSeção | Object | &#8594;  | seção 4D Write Pro |
| subSeçãoTipo | Integer | &#8594;  | Tipo de subseção (wk first page, wk left page ou wk right page) |
| Resultado | Object | &#8592; | Nova subseção |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.WP New subsection.Summary-->O comando **WP New subsection** cria e retorna uma nova subseção do tipo *subSeçãoTipo* na seção 4D Write Pro *wpSeção*.<!-- END REF-->

Em *wpSection*, passe a seção onde quier criar uma nova subseção. Esta referência pode ser obtida utilizando os comandos [WP Get sections](wp-get-sections.md) ou [WP Get section](wp-get-section.md).

O parâmetro *subSectionType* especifica a subseção a ser criada. Pode passar uma das constantes abaixo:  
  
| Constante     | Tipo          | Valor |
| ------------- | ------------- | ----- |
| wk first page | Inteiro longo | 1     |
| wk left page  | Inteiro longo | 2     |
| wk right page | Inteiro longo | 3     |

**Nota:** criar uma subseção de página esquerda ou direita criará automaticamente a subseção oposta. Por exemplo, se quiser criar uma subseção de página esquerda, a subseção da página direita se define automaticamente.

Se *subSectionType* já existir, um erro é devolvido.

#### Exemplo 

Se quiser criar as subseções esquerda e direita:

```4d
 var $section;$subsection : Object
  // obtém a primeira seção
 $section:=WP Get section(wpDoc;1)
  // Cria a seção esquerda - a seção direita é criada automaticamente
 $subsection:=WP New subsection($section;wk left page)
```

#### Ver também 

[WP DELETE SUBSECTION](../commands/wp-delete-subsection.md)  
[WP Get subsection](wp-get-subsection.md)  