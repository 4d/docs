---
id: wp-selection-range
title: WP Selection range
slug: /WritePro/commands/wp-selection-range
displayed_sidebar: docs
---

<!--REF #_command_.WP Selection range.Syntax-->**WP Selection range** ( {* ;} *wpArea* ) -> Resultado<!-- END REF-->
<!--REF #_command_.WP Selection range.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificado, wpArea é um nome de objeto de formulário (string). Se omitido, wpArea é um campo de objeto ou variável |
| wpArea | Text | &#8594;  | Nome de objeto de formulário (se * é especificado) ou variável de objeto 4D Write Pro ou campo (se * for omitido) |
| Resultado | Object | &#8592; | Faixa de objeto |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Compatibilidade 

<!--REF #_command_.WP Selection range.Summary-->**WP Selection range** era chamada **WP Get selection** em versões anteriores de 4D Write Pro.<!-- END REF--> Foi renomeada para ter mais claridade. 

#### Descrição 

O novo comando **WP Selection range** devolve um novo objeto de faixa de texto (faixaObj) baseado no texto selecionado atualmente na área *wpArea* de 4D Write Pro.

Se passar o parâmetro opcional *\**, indica que *wpArea* é um nome de objeto de formulário (string). Se não passar este parâmetro, indica que *wpArea* é uma variável ou campo objeto 4D Write Pro. Se não for passada uma área 4D Write Pro no parâmetro *wpArea*, se devolve uma faixaObj vazio.

**Nota**: este comando só pode ser utilizada se *wpArea* estiver associada com um objeto de formulário (ou seja, é mostrada no formulário).

Se for selecionada uma imagem ancorada (imagem em uma localização fixa) em *wpArea*, **WP Selection range** devolve um objeto de referência de imagem e não um objeto de faixa (para saber mais, consulte a descrição do comando [WP Add picture](../commands/wp-add-picture.md). Do contrário, **WP Selection range** devolve um novo objRange. Para saber mais, consulte *Comandos de seleção de faixa*.

#### Exemplo 

Se quiser obter o texto selecionado de uma área 4D Write Pro:

```4d
 $range:=WP Selection range(*;"WParea")
```

#### Ver também 

[WP Paragraph range](wp-paragraph-range.md)  
[WP Picture range](wp-picture-range.md)  
[WP Text range](wp-text-range.md)  