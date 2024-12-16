---
id: text
title: Text
---


Um objeto de texto permite a exibição de conteúdo escrito estático*(por exemplo*, instruções, títulos, rótulos etc.) em um formulário. Estas áreas de texto estático podem se tornar dinâmicas quando incluem referências dinâmicas. Para mais informações, consulte [Usando referências em textos estáticos](https://doc.4d.com/4Dv17R5/4D/17-R5/Using-references-in-static-text.300-4163725.en.html).

#### Exemplo JSON:

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

O 4D permite que você gire as áreas de texto em seus formulários usando a propriedade [Orientation](properties_Text.md#orientation).

![](../assets/en/FormObjects/staticText.png)

> A rotação do texto pode ser definida para um processo utilizando o comando de linguagem `OBJECT SET TEXT ORIENTATION`.

Quando um texto é rodado, pode continuar a alterar o seu tamanho ou posição, bem como todas as suas propriedades. Observe que as propriedades de largura e altura da área de texto não dependem da sua orientação:

![](../assets/en/FormObjects/staticText2.png)

- Se o objeto for redimensionado na direção A, sua [largura](properties_CoordinatesAndSizing.md#width) será modificada;
- Se o objeto for redimensionado na direção C, sua [altura](properties_CoordinatesAndSizing.md#height) será modificada;
- Se o objeto for redimensionado na direção B, sua [largura](properties_CoordinatesAndSizing.md#width) e [altura](properties_CoordinatesAndSizing.md#height) serão modificadas.


## Propriedades compatíveis

<details><summary>Histórico</summary>

| Release | Mudanças                             |
| ------- | ------------------------------------ |
| 18 R6   | Suporte da propriedade Raio de canto |

</details>


[Bold](properties_Text.md#bold) - [Border Line Style](properties_BackgroundAndBorder.md#border-line-style) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Class](properties_Object.md#css-class) - [Corner radius](properties_CoordinatesAndSizing.md#corner-radius) - [Fill Color(properties_BackgroundAndBorder.md#background-color--fill-color) - [Font](properties_Text.md#font) - [Font Color](properties_Text.md#font-color) - [Font Size](properties_Text.md#font-size) - [Height](properties_CoordinatesAndSizing.md#height) - [Horizontal Alignment](properties_Text.md#horizontal-alignment) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Italic](properties_Text.md#italic) - [Left](properties_CoordinatesAndSizing.md#left) - [Object Name](properties_Object.md#object-name) - [Orientation](properties_Text.md#orientation) - [Right](properties_CoordinatesAndSizing.md#right) - [Title](properties_Object.md#title) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Underline](properties_Text.md#underline) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width) 
