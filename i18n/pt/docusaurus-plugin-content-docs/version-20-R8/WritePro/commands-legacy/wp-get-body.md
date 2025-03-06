---
id: wp-get-body
title: WP Get body
slug: /WritePro/commands/wp-get-body
displayed_sidebar: docs
---

<!--REF #_command_.WP Get body.Syntax-->**WP Get body** ( *wpDoc* ) -> Resultado<!-- END REF-->
<!--REF #_command_.WP Get body.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| wpDoc | Object | &#8594;  | Documento 4D Write Pro |
| Resultado | Object | &#8592; | Corpo 4D Write Pro |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.WP Get body.Summary-->O comando **WP Get body** retorna o elemento corpo do documento *wpDoc* 4D Write Pro.<!-- END REF-->

Este elemento pode ser passada a:

* o comando [WP SELECT](wp-select.md) para selecionar o corpo do documento.
* o comando [WP Text range](wp-text-range.md) para definir o corpo como uma faixa.
* os comandos [WP SET ATTRIBUTES](../commands/wp-set-attributes.md) e [WP GET ATTRIBUTES](../commands/wp-get-attributes.md) para manejar os atributos de corpo.

#### Exemplo 

Se quiser copiar a parte do corpo de um documento 4D Write Pro a outro documento 4D Write Pro:

```4d
 var $bodySource;$rangeSource;$tempoc;$bodyTarget;$rangeTarget : Object
 
 $bodySource:=WP Get body([TEMPLATES]WPtemplate)
 $rangeSource:=WP Text range($bodySource;wk start text;wk end text)
 $tempoc:=WP New($rangeSource)
 
 $bodyTarget:=WP Get body([Docs]MyWPDoc)
 $rangeTarget:=WP Text range($bodyTarget;wk start text;wk end text)
 
 WP INSERT DOCUMENT($rangeTarget;$tempoc;wk replace)
```

#### Ver também 

[WP Text range](wp-text-range.md)  