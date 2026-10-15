---
id: wp-paragraph-range
title: WP Paragraph range
slug: /WritePro/commands/wp-paragraph-range
displayed_sidebar: docs
---

<!--REF #_command_.WP Paragraph range.Syntax-->**WP Paragraph range** ( *faixaObj* : Object ) -> Resultado<!-- END REF-->
<!--REF #_command_.WP Paragraph range.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| faixaObj | Object | &#8594;  | Range or element |
| Resultado | Object | &#8592; | Faixa de objeto direcionando apenas parágrafos |
</div>
<!-- END REF-->


## Descrição 

<!--REF #_command_.WP Paragraph range.Summary-->O comando **WP Paragraph range** devolve uma faixa de objetos específica que se refere unicamente aos parágrafos contidos em *rfaixaObj* que foi passada como parâmetro.<!-- END REF--> A faixa de objetos parágrafo devolvido deve ser utilizado por [WP GET ATTRIBUTES](../commands/wp-get-attributes) e [WP SET ATTRIBUTES](../commands/wp-set-attributes) para manejar os atributos do parágrafo unicamente.

Em *faixaObj*, passe:

* uma faixa, ou
* um elemento (tabela / fila / parágrafo / cabeçalho / rodapé / corpo/seção/subseção)

## Exemplo 

Se quiser definiri a margem interior apenas para os parágrafos:

```4d
 $oParagraphs:=WP Paragraph range($oSelection)
 WP SET ATTRIBUTES($oParagraphs;wk padding;20)
```

## Ver também 

[WP Picture range](../commands/wp-picture-range)  
[WP Selection range](../commands/wp-selection-range)  
[WP Text range](../commands/wp-text-range)  

