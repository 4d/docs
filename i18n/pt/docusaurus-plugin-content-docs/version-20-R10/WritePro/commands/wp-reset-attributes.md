---
id: wp-reset-attributes
title: WP RESET ATTRIBUTES
displayed_sidebar: docs
---

<!--REF #_command_.WP RESET ATTRIBUTES.Syntax-->**WP RESET ATTRIBUTES** ( *targetObj* ; *...attribName* )<br/>**WP RESET ATTRIBUTES** ( *sectionOrSubsection* {; *...attribName* })<br/>**WP RESET ATTRIBUTES** ( *targetObj* ; *attribColl* )<br/> **WP RESET ATTRIBUTES** ( *sectionOrSubsection* {; *attribColl*})<!-- END REF-->

<!--REF #_command_.WP RESET ATTRIBUTES.Params-->

| Parâmetro           | Tipo       |                             | Descrição                                                              |
| ------------------- | ---------- | --------------------------- | ---------------------------------------------------------------------- |
| targetObj           | Object     | &#8594; | Range or element or 4D Write Pro document                              |
| sectionOrSubsection | Object     | &#8594; | Section or subsection of a 4D Write Pro document                       |
| attribName          | Text       | &#8594; | Nome do(s) atributo(s) a remover |
| attribColl          | Collection | &#8594; | Collection of attributes to remove                                     |

<!-- END REF-->

## Descrição

O comando **WP RESET ATTRIBUTES**<!--REF #_command_.WP RESET ATTRIBUTES.Summary--> permite que você reinicie o valor de um ou mais atributos no intervalo, elemento ou documento passado como parâmetro.<!-- END REF--> Este comando pode remover qualquer tipo de atributo interno 4D Write Pro: caractere, parágrafo, tabela ou imagem. You can pass the attribute name to be reset in *attribName* or you can pass a collection of attributes in *attribColl* to reset multiple attributes at once.

> In the case of a section or a subsection, the *sectionOrSubsection* object can be passed alone and all the attributes are reset at once.

No parâmetro *targetObj*, você pode passar qualquer um deles:

- um intervalo, ou
- an element (header / footer / body / table / paragraph / anchored or inline picture / section / subsection / style sheet), or
- um documento 4D Write Pro

When an attribute value is removed using the **WP RESET ATTRIBUTES** command, the default value is applied to *targetObj* or *sectionOrSubsection*. Default values are listed in the [4D Write Pro Attributes](../4d-write-pro-attributes) section.

:::note Notas

- When **WP RESET ATTRIBUTES** is applied to a section/sub-section object, attributes are then inherited from the parent section or document.
- When **WP RESET ATTRIBUTES** is applied to a style sheet object, the attributes are removed from the style sheet unless it is the default ("Normal") style sheet. In this case, the default value is applied to the attribute (the "Normal" style sheet defines all style sheet attributes).
- Quando *sectionOrSubsection* não é uma seção nem uma subseção e se nenhum atributo é fornecido, então um erro é gerado.

:::

If the attribute to be reset was not defined in the element passed as a parameter, the command does nothing.

## Exemplo 1

You want to remove several attributes from the following selection:

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

You want to remove several attributes using a collection:

```4d
$myRange:=WP Get selection(*;"WParea")
$myCollection:=New collection(wk font size; wk background color; wk border style)
WP RESET ATTRIBUTES($myRange; $myCollection)
 
```

## Exemplo 3

```4d
$section:=WP Get section($document; 3)
WP RESET ATTRIBUTES($section)  // All attributes of the section are removed
$subSection:=WP Get subsection(WP Get section($document; 3); wk left page)
WP RESET ATTRIBUTES($subSection) // All attributes of the subSection are removed
```

## Veja também

[4D Write Pro Attributes](../4d-write-pro-attributes)  
[WP GET ATTRIBUTES](wp-get-attributes.md)  
[WP SET ATTRIBUTES](wp-set-attributes.md)
