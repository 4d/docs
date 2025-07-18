---
id: wp-set-attributes
title: WP SET ATTRIBUTES
displayed_sidebar: docs
---

<!--REF #_command_.WP SET ATTRIBUTES.Syntax-->**WP SET ATTRIBUTES** ( *targetObj* ; *attribName* ; *attribValue* {; *attribName2* ; *attribValue2* ; ... ; *attribNameN* ; *attribValueN*} )<br/>**WP SET ATTRIBUTES** ( *targetObj* ; *attribObj* )<!-- END REF-->

<!--REF #_command_.WP SET ATTRIBUTES.Params-->

| Parâmetro   | Tipo                                            |                             | Descrição                                                               |
| ----------- | ----------------------------------------------- | --------------------------- | ----------------------------------------------------------------------- |
| targetObj   | Object                                          | &#8594; | Range or element or 4D Write Pro document                               |
| attribName  | Text                                            | &#8594; | Nome do atributo a ser definido                                         |
| attribValue | Text, Number, Object, Collection, Picture, Date | &#8594; | Novo valor de atributo                                                  |
| attribObj   | Object                                          | &#8594; | Object containing attribute names and their corresponding values to set |

<!-- END REF-->

## Descrição

O comando **WP REDEFINIR ATTRIBUTES** <!--REF #_command_.WP REDEFINIR ATTRIBUTES. ummary--> permite que você reinicie o valor de um ou mais atributos no intervalo, elemento ou documento passado como parâmetro.<!-- FIM REF--> Este comando lhe dá acesso a qualquer tipo de atributo interno da 4D Write Pro: caractere, parágrafo, tabela ou imagem.

Em *targetObj*, você pode passar:

- um intervalo, ou
- an element (header / footer / body / table / row / paragraph / anchored or inline picture / section / subsection / style sheet), or
- um documento 4D Write Pro

Você pode especificar atributos para *targetObj* de uma de duas maneiras:

- Use os parâmetros *attribName* e *attribValue*. Em *attribName*, passe o nome do atributo para definir para o alvo e em *attribValue*, passe o novo valor para o conjunto. Você pode passar tantos pares *attribName*/*attribValue* quanto quiser em uma única chamada.

- Use the *attribObj* parameter to pass a single object containing attribute names and their corresponding values as object properties.

For a comprehensive list of attributes to pass, as well as their scope and respective values, please refer to the *4D Write Pro Attributes* section.

## Exemplo 1

In this 4D Write Pro area, you selected a word:

![](../../assets/en/WritePro/commands/pict2643639.en.png)

Se executar o seguinte código:

```4d
 $range:=WP Get selection(*;"WParea") //get the selected range
 
  // set the shadow offset in pt for the selected text
 WP SET ATTRIBUTES($range;wk text shadow offset;1)
  //set the paragraph padding
 WP SET ATTRIBUTES($range;wk padding;1)
  //define a border of 10 pt
 WP SET ATTRIBUTES($range;wk border style;wk solid;wk border width;10)
  //set the border colors
 WP SET ATTRIBUTES($range;wk border color;"blue";wk border color bottom;"#00FA9A";wk border color right;"#00FA9A")
```

You get the following result:

![](../../assets/en/WritePro/commands/pict2643642.en.png)

## Exemplo 2

Este exemplo ilustra o uso das constantes wk inside e wk outside:

```4d
 $wpRange:=WP Get selection(writeProdoc)
 WP SET ATTRIBUTES($wpRange;wk border style+wk inside;wk dotted)
 WP SET ATTRIBUTES($wpRange;wk border style+wk outside;wk solid)
 WP SET ATTRIBUTES($wpRange;wk border color+wk outside;"#00FA9A")
```

Assuming all of the contents were selected, the result is:

![](../../assets/en/WritePro/commands/pict2821715.en.png)

## Exemplo 3

You want to set a background image for the document:

```4d
 var WParea : Object
 WParea:=WP New
 
 READ PICTURE FILE("C:\\Pictures\\boats.jpg";$picture)
 
 WP SET ATTRIBUTES(WParea;wk background image;$picture)
```

O resultado é:

![](../../assets/en/WritePro/commands/pict3514231.en.png)

You want to set a background image that covers the whole printable area. All attributes are passed using a single object:

```4d
 var WParea : Object
 WParea:=WP New
 
 READ PICTURE FILE("C:\\Pictures\\boats.jpg";$picture)
 
 $myAttributes:=New object()
 $myAttributes[wk background image]:=$picture
 $myAttributes[wk background clip]:=wk paper box
 $myAttributes[wk background origin]:=wk paper box

 WP SET ATTRIBUTES(WParea;$myAttributes)
```

O resultado é:

![](../../assets/en/WritePro/commands/pict3514233.en.png)

:::note

The paper box value is only applicable to documents and sections.

:::

## Exemplo

You want to set tabs at varying intervals and designate a character as the leading character for the last tab:

```4d
 $tab1:=New object()
 $tab1[wk type]:=wk left
 $tab1[wk offset]:="3cm"
 $tab1[wk leading]:=""
 
 $tab2:=New object()
 $tab2[wk type]:=wk center
 $tab2[wk offset]:="8cm"
 $tab2[wk leading]:=""
 
 $tab3:=New object()
 $tab3[wk type]:=wk right
 $tab3[wk offset]:="12cm"
 $tab3[wk leading]:="."
 
 $_tabs:=New collection($tab1;$tab2;$tab3)
 WP SET ATTRIBUTES(wpArea;wk tabs;$_tabs)
```

O resultado é:

![](../../assets/en/WritePro/commands/pict4251559.en.png)

## Veja também

*4D Write Pro Attributes*\
[WP GET ATTRIBUTES](../commands/wp-get-attributes.md)\
[WP RESET ATTRIBUTES](../commands/wp-reset-attributes.md)