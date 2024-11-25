---
id: wp-paragraph-range
title: WP Paragraph range
slug: /WritePro/commands/wp-paragraph-range
displayed_sidebar: docs
---

<!--REF #_command_.WP Paragraph range.Syntax-->**WP Paragraph range** ( *faixaObj* ) -> Resultado<!-- END REF-->
<!--REF #_command_.WP Paragraph range.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| faixaObj | Object | &#8594;  | Range or element |
| Resultado | Object | &#8592; | Faixa de objeto direcionando apenas parágrafos |

<!-- END REF-->

#### Compatibilidade 

<!--REF #_command_.WP Paragraph range.Summary-->**WP Paragraph range** era chamado de **WP Get paragraphs** em versões anteriores de 4D Write Pro.<!-- END REF--> Foi renomeado por claridade. 

#### Descrição 

O novo comando **WP Paragraph range** devolve uma faixa de objetos específica que se refere unicamente aos parágrafos contidos em *rfaixaObj* que foi passada como parâmetro. A faixa de objetos parágrafo devolvido deve ser utilizado por [WP GET ATTRIBUTES](../commands/wp-get-attributes.md) e [WP SET ATTRIBUTES](../commands/wp-set-attributes.md) para manejar os atributos do parágrafo unicamente.

Em *faixaObj*, passe:

* uma faixa, ou
* um elemento (tabela / fila / parágrafo / cabeçalho / rodapé / corpo/seção/subseção)

#### Exemplo 

Se quiser definiri a margem interior apenas para os parágrafos:

```4d
 $oParagraphs:=WP Paragraph range($oSelection)
 WP SET ATTRIBUTES($oParagraphs;wk padding;20)
```

#### Ver também 

[WP Picture range](wp-picture-range.md)  
[WP Selection range](wp-selection-range.md)  
[WP Text range](wp-text-range.md)  