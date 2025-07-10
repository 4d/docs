---
id: wp-get-attributes
title: WP Get attributes
displayed_sidebar: docs
---

<!--REF #_command_.WP Get attributes.Syntax-->**WP Get attributes** ( *targetObj* ; *attribName* ; *attribValue* {; *attribName2* ; *attribValue2* ; ... ; *attribNameN* ; *attribValueN*} )<br/>**WP Get attributes** ( *targetObj* ; *attribColl* ) : Object<!-- END REF-->

<!--REF #_command_.WP Get attributes.Params-->

| Parâmetro   | Tipo                                           |                             | Descrição                                 |
| ----------- | ---------------------------------------------- | --------------------------- | ----------------------------------------- |
| targetObj   | Object                                         | &#8594; | Range or element or 4D Write Pro document |
| attribName  | Text                                           | &#8594; | Nome do atributo para obter               |
| attribValue | Text, Number, Array, Collection, Picture, Date | &#8592; | Current value of attribute for the target |
| attribColl  | Collection                                     | &#8594; | Collection of attribute names to get      |
| Resultado   | Object                                         | &#8592; | Nomes e valores dos atributos             |

<!-- END REF-->

## Descrição

O comando **WP Get attributes** <!--REF #_command_.WP Get attributes. ummary--> retorna o valor de qualquer atributo em um intervalo 4D de escrita Pro, cabeçalho, corpo, rodapé, tabela ou documento.<!-- FIM REF--> Este comando lhe dá acesso a qualquer tipo de atributo interno da 4D Write Pro: caractere, parágrafo, tabela ou imagem.

Em *targetObj*, você pode passar:

- um intervalo, ou
- an element (header / footer / body / table / paragraph / anchored or inline picture / section / subsection / style sheet), or
- um documento 4D Write Pro

Em *attribName*, passe o nome do atributo que você deseja recuperar.

You can also pass a collection of attribute names in *attribColl*, in which case the command will return an object containing the attribute names passed in *attribColl* along with their corresponding values.

For a comprehensive list of attributes to pass, as well as their scope and values, please refer to the *4D Write Pro Attributes* section.

If there are different values for the same attribute in the element passed as a parameter, the command returns:

- para valores numéricos, wk mixed
- for an array, an empty array (tab stops, color if *attribValue* is defined as array), with an exception for wk text shadow offset for which the array value will always contain 2 entries which may be set separately to wk mixed if either horizontal offset or vertical offset (or both) are mixed.
- for string values, an empty string
- for picture values, an empty picture.

**Nota**: se *targetObj* contiver um parágrafo e uma folha de estilo de personagem, a folha de estilo de parágrafos será retornada.

## Exemplo 1

You want to get the background color of the selected area:

```4d
 $range:=WP Selection range(*;"WParea")
 WP Get attributes($range;wk background color;$bcol)
```

## Exemplo 2

You want to get the font size, background color and border style of the selected area using a collection:

```4d
 $range:=WP Selection range(*;"WParea")
 $collection:=New collection(wk font size; wk background color; wk border style)
 $attributes:=WP Get attributes($range; $collection)
 
```

## Veja também

[WP RESET ATTRIBUTES](../commands/wp-reset-attributes.md)\
[WP SET ATTRIBUTES](wp-set-attributes.md)