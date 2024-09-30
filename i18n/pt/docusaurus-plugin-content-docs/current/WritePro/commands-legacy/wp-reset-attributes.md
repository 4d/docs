---
id: wp-reset-attributes
title: WP RESET ATTRIBUTES
slug: /WritePro/commands/wp-reset-attributes
displayed_sidebar: docs
---

<!--REF #_command_.WP RESET ATTRIBUTES.Syntax-->**WP RESET ATTRIBUTES** ( *faixaObj* ; *nomeAtrib* {; *nomeAtrib2* ; ... ; *nomeAtribN*} )<!-- END REF-->
<!--REF #_command_.WP RESET ATTRIBUTES.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| faixaObj | Objeto | &#x1F852; | faixa ou elemento ou documento 4D Write Pro |
| nomeAtrib | String | &#x1F852; | Nome do atributo a remover |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.WP RESET ATTRIBUTES.Summary-->O novo comando **WP RESET ATTRIBUTES** permite restaurar o valor de um ou mais atributos na *faixaObj* 4D Write Pro.<!-- END REF--> Este comando pode eliminar qualquer tipo de atributo interno 4D Write Pro: caractere, parágrafo, documento, tabela ou imagem. 

No primeiro parâmetro, pode passar:

* uma faixa, ou
* um elemento (cabeçalho / rodapé / corpo / tabela / parágrafo / imagem ancorada ou inline/seção ou subseção/folha de estilo, ou
* um documento 4D Write Pro

Quando um valor de atributo for eliminado com o comando **WP RESET ATTRIBUTES**, se reinicializa no valor predeterminado. Os valores como padrão são listados na seção *Atributos 4D Write Pro*.

**Nota:** 

* Quando **WP RESET ATTRIBUTES** se aplicar a um objeto seção/sub-seção, os atributos são herdados da seção ou documento pai.
* Quando **WP RESET ATTRIBUTES** se aplicar a um objeto folha de estilo, os atributos se eliminam da folha de estilo a menos que seja a folha de estilo predeterminada ("Normal"). Neste caso, o valor predeterminado se aplica ao atributo (a folha de estilo "Normal" define todos os atributos da folha de estilo).

Se o atributo a reinicializar não foi definido no elemento passado como um parâmetro, o comando não faz nada.

#### Exemplo 

Se quiser eliminar os diferentes atributos da seguinte seleção:

![](../../assets/en/WritePro/commands/pict2643861.EN.png)

Pode executar:

```4d
 $range:=WP Get selection(*;"WParea")
 WP RESET ATTRIBUTES($range;wk padding)
 WP RESET ATTRIBUTES($range;wk background color)
 WP RESET ATTRIBUTES($range;wk text underline style)
 WP RESET ATTRIBUTES($range;wk margin)
 WP RESET ATTRIBUTES($range;wk border style)
```

O documento resultante é:

![](../../assets/en/WritePro/commands/pict2643863.EN.png)

#### Ver também 

*Atributos 4D Write Pro*  
[WP GET ATTRIBUTES](wp-get-attributes.md)  
[WP SET ATTRIBUTES](wp-set-attributes.md)  