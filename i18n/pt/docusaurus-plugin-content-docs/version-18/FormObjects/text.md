---
id: text
title: Text
---

## Visão Geral

A text object allows you to display static written content (*e.g.*, instructions, titles, labels, etc.) on a form. These static text areas can become dynamic when they include dynamic references. For more information, refer to [Using references in static text](https://doc.4d.com/4Dv17R5/4D/17-R5/Using-references-in-static-text.300-4163725.en.html).

#### JSON Exemplo

```4d
 "myText": {
                "type": "text",
                "text": "Hello World!",
                "textAlign": "center",
                "left": 60,   
                "top": 160, 
                "width": 100,
                "height": 20,
                "stroke": "#ff0000"  //text color   
                "fontWeight": "bold"
                }
```

## Rotação

4D lets you rotate text areas in your forms using the [Orientation](properties_Text.md#orientation) property.

![](../assets/en/FormObjects/staticText.png)

> Text rotation can be defined for a process using the `OBJECT SET TEXT ORIENTATION` language command.

Once a text is rotated, you can still change its size or position, as well as all its properties. Note that the text area’s height and width properties do not depend on its orientation:

![](../assets/en/FormObjects/staticText2.png)

- If the object is resized in direction A, its [width](properties_CoordinatesAndSizing.md#width) is modified;
- If the object is resized in direction C, its [height](properties_CoordinatesAndSizing.md#height) is modified;
- If the object is resized in direction B, both its [width](properties_CoordinatesAndSizing.md#width) and [height](properties_CoordinatesAndSizing.md#height) are modified.

## Propriedades compatíveis

[Estilo daborde](properties_BackgroundAndBorder.md##border-line-style-dotted-line-type) - [Negrita](properties_Text.md#bold) - \[Abaixo\](properties_CoordinatesAndSizing. md#bottom) - [Classe](properties_Object.md#css-class) - [Fuente](properties_Text.md#font) - \[Cor da fonte\](properties_Text. md#font-color) - [Altura](properties_CoordinatesAndSizing.md#height) - [Conselho de ajuda](properties_Help.md#help-tip) - \[Tamaño horizontal\](properties_ResizingOptions. md#horizontal-sizing) - [Itálica](properties_Text.md#italic) - [Esquerda](properties_CoordinatesAndSizing.md#left) - \[Cor da linha\](properties_BackgroundAndBorder. md##font-color-line-color) - [Nome de objeto](properties_Object.md#object-name) - [Pusher](properties_ResizingOptions.md) - \[Direita\](properties_CoordinatesAndSizing. md#right) - [Título](properties_Object.md#title) -[Acima](properties_CoordinatesAndSizing.md#top) - \[Tipo\](properties_Object. md#type) - [Sublinhado](properties_Text.md#underline) - [Tamanho vertical](properties_ResizingOptions.md#vertical-sizing) - \[Variável ou expressão\](properties_Object. md#variable-or-expression) - [Visibilidade](properties_Display.md#visibility) - [Largura](properties_CoordinatesAndSizing.md#width)
