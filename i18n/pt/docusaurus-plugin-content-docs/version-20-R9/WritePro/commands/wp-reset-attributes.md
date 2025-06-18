---
id: wp-reset-attributes
title: WP RESET ATTRIBUTES
displayed_sidebar: docs
---

<!--REF #_command_.WP RESET ATTRIBUTES.Syntax-->**WP RESET ATTRIBUTES** ( *targetObj* ; *attribName* {; *attribName2* ; ... ; *attribNameN*} )<br/> **WP RESET ATTRIBUTES** ( *sectionOrSubsection* {; *attribName* }{; *attribName2* ; ... ; *attribNameN*} )<br/>**WP RESET ATTRIBUTES** ( *targetObj* ; *attribColl* )<br/> **WP RESET ATTRIBUTES** ( *sectionOrSubsection* {; *attribColl*})<!-- END REF-->

<!--REF #_command_.WP RESET ATTRIBUTES.Params-->

| Parâmetro           | Tipo       |                             | Descrição                                                              |
| ------------------- | ---------- | --------------------------- | ---------------------------------------------------------------------- |
| targetObj           | Object     | &#8594; | Intervalo ou elemento ou documento 4D Write Pro                        |
| sectionOrSubsection | Object     | &#8594; | Seção ou subseção de um documento 4D Write Pro                         |
| attribName          | Text       | &#8594; | Nome do(s) atributo(s) a remover |
| attribColl          | Collection | &#8594; | Coleção de atributos para remover                                      |

<!-- END REF-->

## Descrição

O comando **WP REDEFINIR ATTRIBUTES** <!--REF #_command_.WP REDEFINIR ATTRIBUTES. ummary--> permite que você reinicie o valor de um ou mais atributos no intervalo, elemento ou documento passado como parâmetro.<!-- FIM REF--> Este comando pode remover qualquer tipo de atributo interno 4D Write Pro: caractere, parágrafo, tabela ou imagem. Você pode passar o nome do atributo para ser redefinido em *attribName* ou você pode passar uma coleção de atributos em *attribColl* para redefinir vários atributos de uma vez.

> No caso de uma seção ou uma subseção, o objeto *sectionOrSubsection* pode ser passado sozinho e todos os atributos são redefinidos de uma vez.

No parâmetro *targetObj*, você pode passar qualquer um deles:

- um intervalo, ou
- um elemento (cabeçalho / rodapé / corpo / tabela / parágrafo / imagem embutida ou embutida em linha / seção / subseção / folha de estilo), ou
- um documento 4D Write Pro

Quando um valor de atributo for removido usando o comando **WP RESET ATTRIBUTES**, o valor padrão é aplicado a *targetObj* ou *sectionOrSubsection*. Os valores padrão estão listados na seção *4D Write Pro Attributes*.

:::note Notas

- Quando **WP RESET ATTRIBUTES** é aplicado a uma seção/objeto de subseção, os atributos são herdados da seção ou documento pai.
- Quando **WP REDEFINIR ATTRIBUTES** é aplicado a um objeto de folha de estilo, os atributos são removidos da folha de estilo a menos que seja o padrão a folha de estilo ("Normal"). Neste caso, o valor padrão é aplicado ao atributo (a folha de estilo "Normal" define todos os atributos de folha de estilo).
- Quando *sectionOrSubsection* não é uma seção nem uma subseção e se nenhum atributo é fornecido, então um erro é gerado.

:::

Se o atributo a ser reiniciado não foi definido no elemento passado como parâmetro, o comando não faz nada.

## Exemplo 1

Você deseja remover vários atributos da seguinte seleção:

![](../../assets/en/WritePro/commands/pict2643861.en.png)

Você pode executar:

```4d
 $range:=WP Get selection(*;"WParea")
 WP RESET ATTRIBUTES($range;wk padding)
 WP RESET ATTRIBUTES($range;wk background color)
 WP RESET ATTRIBUTES($range;wk text underline style)
 WP RESET ATTRIBUTES($range;wk margin)
 WP RESET ATTRIBUTES($range;wk border style)
```

O documento resultante é:

![](../../assets/en/WritePro/commands/pict2643863.en.png)

## Exemplo 2

Você deseja remover vários atributos usando uma coleção:

```4d
$myRange:=WP Get selection(*;"WParea")
$myCollection:=New collection(wk font size; wk background color; wk border style)
WP RESET ATTRIBUTES($myRange; $myCollection)
 
```

## Exemplo 3

```4d
$section:=VP seção($document; 3)
WP RESET ATTRIBUTES($section) // Todos os atributos da seção são removidos
$subSection:=WP Get subsection(WP Get section($document; 3); wk left page)
WP RESET ATTRIBUTES($subSection) // Todos os atributos da subseção são removidos
```

## Veja também

*4D Write Pro Attributes*\
[WP GET ATTRIBUTES](wp-get-attributes.md)\
[WP SET ATTRIBUTES](wp-set-attributes.md)
