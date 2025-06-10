---
id: wp-get-attributes
title: WP Get attributes
displayed_sidebar: docs
---

<!--REF #_command_.WP Get attributes.Syntax-->**WP Get attributes** ( *targetObj* ; *attribName* ; *attribValue* {; *attribName2* ; *attribValue2* ; ... ; *attribNameN* ; *attribValueN*} )<br/>**WP Get attributes** ( *targetObj* ; *attribColl* ) : Object<!-- END REF-->

<!--REF #_command_.WP Get attributes.Params-->

| Parâmetro   | Tipo                                           |                             | Descrição                                       |
| ----------- | ---------------------------------------------- | --------------------------- | ----------------------------------------------- |
| targetObj   | Object                                         | &#8594; | Intervalo ou elemento ou documento 4D Write Pro |
| attribName  | Text                                           | &#8594; | Nome do atributo para obter                     |
| attribValue | Text, Number, Array, Collection, Picture, Date | &#8592; | Valor atual do atributo para o alvo             |
| attribColl  | Collection                                     | &#8594; | Coleção de nomes de atributo para obter         |
| Resultado   | Object                                         | &#8592; | Nomes e valores de atributos                    |

<!-- END REF-->

## Descrição

O comando **WP Get attributes** <!--REF #_command_.WP Get attributes. ummary--> retorna o valor de qualquer atributo em um intervalo 4D de escrita Pro, cabeçalho, corpo, rodapé, tabela ou documento.<!-- FIM REF--> Este comando lhe dá acesso a qualquer tipo de atributo interno da 4D Write Pro: caractere, parágrafo, tabela ou imagem.

Em *targetObj*, você pode passar:

- um intervalo, ou
- um elemento (cabeçalho / rodapé / corpo / tabela / parágrafo / imagem embutida ou embutida em linha / seção / subseção / folha de estilo), ou
- um documento 4D Write Pro

Em *attribName*, passe o nome do atributo que você deseja recuperar.

Você também pode passar uma coleção de nomes de atributos em *attribColl*, nesse caso o comando retornará um objeto que contém os nomes de atributos passados em *attribColl* juntamente com seus valores correspondentes.

Para uma lista completa de atributos a passar, bem como seu escopo e valores, consulte a seção *4D Write Pro Atributes*.

Se houver valores diferentes para o mesmo atributo no elemento passado como um parâmetro, o comando retorna:

- para valores numéricos, wk mix
- para um array, um array vazio (guia para, cor se *attribValue* é definido como array), com uma exceção para o deslocamento de sombra do texto wk para o qual o valor da matriz sempre conterá 2 entradas que podem ser definidas separadamente para wk misturar se o deslocamento horizontal ou vertical (ou ambos) são misturadas.
- para valores da string, uma string vazia
- para valores de imagem, uma imagem vazia.

**Nota**: se *targetObj* contiver um parágrafo e uma folha de estilo de personagem, a folha de estilo de parágrafos será retornada.

## Exemplo 1

Para obter a cor de fundo da área selecionada:

```4d
 $range:=WP Selection range(*;"WParea")
 WP Get attributes($range;wk background color;$bcol)
```

## Exemplo 2

Para obter o tamanho da fonte, cor de fundo e estilo da borda da área selecionada usando uma coleção:

```4d
 $range:=WP Selection range(*;"WParea")
 $collection:=New collection(wk font size; wk background color; wk border style)
 $attributes:=WP Get attributes($range; $collection)
 
```

## Veja também

[WP RESET ATTRIBUTES](../commands/wp-reset-attributes.md)\
[WP SET ATTRIBUTES](wp-set-attributes.md)