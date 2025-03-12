---
id: wp-get-attributes
title: WP GET ATTRIBUTES
slug: /WritePro/commands/wp-get-attributes
displayed_sidebar: docs
---

<!--REF #_command_.WP GET ATTRIBUTES.Syntax-->**WP GET ATTRIBUTES** ( *faixaObj* ; *nomeAtrib* ; *valorAtrib* {; *nomeAtrib2* ; *valorAtrib2* ; ... ; *nomeAtribN* ; *valorAtribN*} )<!-- END REF-->
<!--REF #_command_.WP GET ATTRIBUTES.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| faixaObj | Object | &#8594;  | Faixa do 4D Write Pro ou documento |
| nomeAtrib | Text | &#8594;  | Nome do atributo a obter |
| valorAtrib | Texto, Número, Array, Collection, Imagem, Data | &#x1F858; | Valor atual do atributo para a faixa de texto |

<!-- END REF-->

## Descrição 

<!--REF #_command_.WP GET ATTRIBUTES.Summary-->O novo comando **WP GET ATTRIBUTES** devolve o valor de qualquer atributo em uma faixa ou documento 4D Write Pro.<!-- END REF--> Este comando lhe permite acessar a todo tipo de atributos internos 4D Write Pro: caractere, parágrafo, documento, tabela ou imagem.

No *rangoObj*,o, pode passar:

* uma range (faixa de seleção)
* um elemento de referência (cabeçalho / rodapé / corpo / tabela / parágrafo / imagem ancorada ou inline/seção/subseção/folha de estilo), ou
* um documento 4D Write Pro

  
Para obter uma lista completa dos atributos a passar em *nomAtrib*, assim como também seus respectivos valores, por favor consulte a seção *Atributos 4D Write Pro*.

Se houver diferentes valores para o mismo atributo na faixa ou o documento passado como parâmetro, o comando devolve:

* para valores numéricos, wk mixed
* para um array, um array vazio (paradas de tabulações, cor se *valorAttib* estiver definido como array), com a exceção de wk text shadow offset para o qual o valor array sempre conterá 2 entradas que podem ser definidas por separado como wk mixed se qualquer deslocamento horizontal ou vertical (ou ambos) são combinados.
* para valores string, uma sting vazia
* para valores imagem, uma imagem vazia.

**Nota**: se *rangeObj* conter um parágrafo e uma folha de estilo de caracteres, se devolve o nome da folha de estilo de parágrafo.

## Exemplo 

Se quiser obter a cor de fundo da área selecionada:

```4d
 $range:=WP Selection range(*;"WParea")
 WP GET ATTRIBUTES($range;wk background color;$bcol)
```

## Ver também 

*Atributos 4D Write Pro*  
*Constantes 4D Write Pro*  
[WP RESET ATTRIBUTES](../commands/wp-reset-attributes.md)  
[WP SET ATTRIBUTES](wp-set-attributes.md)  