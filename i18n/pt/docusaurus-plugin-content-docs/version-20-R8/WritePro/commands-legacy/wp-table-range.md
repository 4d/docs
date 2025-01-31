---
id: wp-table-range
title: WP Table range
slug: /WritePro/commands/wp-table-range
displayed_sidebar: docs
---

<!--REF #_command_.WP Table range.Syntax-->**WP Table range** ( *objFaixa* ) -> Resultado<!-- END REF-->
<!--REF #_command_.WP Table range.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| objFaixa | Object | &#8594;  | faixa de objetos ou elemento do documento 4D Write Pro |
| Resultado | Object | &#8592; | Objeto de Faixa contendo apenas tabelas |

<!-- END REF-->

#### Compatibilidade 

<!--REF #_command_.WP Table range.Summary-->**WP Table range** era chamada **WP Create table range** em versões anteriores de 4D Write Pro.<!-- END REF--> Foi renomeada por razões de claridade. 

#### Descrição 

O comando **WP Table range** devolve um objeto de range que trata só as tabelas contidas em *objRange* passado como parâmetro. Devolverá uma range de wk type table, mesmo se *objRange* passado como parâmetro não contiver uma tabela. O objeto de range de tabela devolvido pode ser utilizado por [WP GET ATTRIBUTES](../commands/wp-get-attributes.md) e [WP SET ATTRIBUTES](../commands/wp-set-attributes.md) para manejar os atributos que são aplicados às tabelas e aos conteúdos da tabela.

No parâmetro *objRange*, pode passar:

* uma range ou
* um elemento (corpo / cabeçalho / rodapé / parágrafo/seção/subseção), ou
* um documento 4D Write Pro

#### Exemplo 

Se quiser modificar a aparência das tabelas contidas na range tabela:

```4d
 tableRange:=WP Table range(myDoc)
  //atributos tabela
 WP SET ATTRIBUTES(tableRange;wk border style;wk solid;wk border color;"Blue";wk border width;"3px")
 WP SET ATTRIBUTES(tableRange;wk table align;wk center)
  // atributos texto   
 WP SET ATTRIBUTES(tableRange;wk font size;12)
 WP SET ATTRIBUTES(tableRange;wk text transform;wk capitalize)
 WP SET ATTRIBUTES(tableRange;wk font bold;wk true)
```

#### Ver também 

[WP Get elements](wp-get-elements.md)  
[WP Text range](wp-text-range.md)  