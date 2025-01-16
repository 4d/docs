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


[Negrito](properties_Text.md#bold) - [Estilo da linha de borda](properties_BackgroundAndBorder.md#border-line-style) - [Fundo](properties_CoordinatesAndSizing.md#bottom) - [Classe](properties_Object.md#css-class) - [Raio do canto](properties_CoordinatesAndSizing.md#corner-radius) - [Cor do preenchimento](properties_BackgroundAndBorder.md#background-color--fill-color) - [Fonte](properties_Text.md#font) - [Cor da fonte](properties_Text.md#font-color) - [Tamanho da fonte](properties_Text.md#font-size) - [Altura](properties_CoordinatesAndSizing.md#height) - [Alinhamento horizontal](properties_Text.md#horizontal-alignment) - [Dimensionamento horizontal](properties_ResizingOptions.md#horizontal-sizing) - [Itálico](properties_Text.md#italic) - [Esquerda](properties_CoordinatesAndSizing.md#left) - [Nome do objeto](properties_Object.md#object-name) - [Orientação](properties_Text.md#orientation) - [Direita](properties_CoordinatesAndSizing.md#right) - [Título](properties_Object.md#title) - [Topo](properties_CoordinatesAndSizing.md#top) - [Tipo](properties_Object.md#type) - [Sublinhado](properties_Text.md#underline) - [Dimensionamento vertical](properties_ResizingOptions.md#vertical-sizing) - [Visibilidade](properties_Display.md#visibility) - [Largura](properties_CoordinatesAndSizing.md#width) 
