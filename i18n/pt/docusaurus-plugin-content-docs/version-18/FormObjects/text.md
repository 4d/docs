---
id: text
title: Text
---

## Visão Geral

Um objeto de texto permite a exibição de conteúdo escrito estático*(por exemplo*, instruções, títulos, rótulos etc.) em um formulário. Estas áreas de texto estático podem se tornar dinâmicas quando incluem referências dinâmicas. Para mais informações, consulte [Usando referências em textos estáticos](https://doc.4d.com/4Dv17R5/4D/17-R5/Using-references-in-static-text.300-4163725.en.html).

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
                "stroke": "#ff0000"  //cor do texto  
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

[Negrito](properties_Text.md#bold) - [Estilo de linha de borda](properties_BackgroundAndBorder.md#border-line-style) - [Parte inferior](properties_CoordinatesAndSizing.md#bottom) - [Classe](properties_Object.md#css-class) - [Colunas](properties_Crop.md#columns) - [Executar método de objeto](properties_Action.md#execute-object-method) - [Tipo de expressão](properties_Object.md#expression-type) (somente "inteiro", "número", "data" ou "hora") - [Altura](properties_CoordinatesAndSizing.md#height) - [Dica de ajuda](properties_Help.md#help-tip) - [Dimensionamento horizontal](properties_ResizingOptions.md#horizontal-sizing) - [Esquerda](properties_CoordinatesAndSizing.md#left) - [Máximo](properties_Scale.md#maximum) - [Mínimo](properties_Scale.md#minimum) - [Nome do objeto](properties_Object.md#object-name) - [Nome do caminho](properties_Picture.md#pathname) - [Direita](properties_CoordinatesAndSizing.md#right) - [Linhas](properties_Crop.md#rows) - [Etapa](properties_Scale.md#step) - [Ação padrão](properties_Action.md#standard-action) - Parte superior</18> - [Tipo](properties_Object.md#type) - [Variável ou expressão](properties_Object.md#variable-or-expression) - [Dimensionamento vertical](properties_ResizingOptions.md#vertical-sizing) - [Visibilidade](properties_Display.md#visibility) - [Largura](properties_CoordinatesAndSizing.md#width)</p>
