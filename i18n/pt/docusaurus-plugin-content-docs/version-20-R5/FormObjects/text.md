---
id: text
title: Text
---

Um objeto texto permite exibir conteúdo escrito estático (_e.g._, instruções, títulos, etiquetas, etc.) em um formulário. Estas áreas de texto estático podem se tornar dinâmicas quando incluem referências dinâmicas. Para más información, consulte [Uso de referencias en textos estáticos](https://doc.4d.com/4Dv17R5/4D/17-R5/Using-references-in-static-text.300-4163725.en.html).

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
                "stroke": "#ff0000"		//cor do texto   
                "fontWeight": "bold"
                }
```

## Rotação

4D permite que você gire áreas de texto em seus formulários usando a propriedade [Orientação](propriedades_Text.md#orientação).

![](../assets/en/FormObjects/staticText.png)

> A rotação do texto pode ser definida para um processo utilizando o comando de linguagem `OBJECT SET TEXT ORIENTATION`.

Quando um texto é rodado, pode continuar a alterar o seu tamanho ou posição, bem como todas as suas propriedades. Observe que as propriedades de largura e altura da área de texto não dependem da sua orientação:

![](../assets/en/FormObjects/staticText2.png)

- Se o objeto for redimensionado na direção A, seu [largura](propriedades_CoordinatesAndSizing.md#width) será modificada;
- Se o objeto for redimensionado em direção C, seu [altura](propriedades_CoordinatesAndSizing.md#height) será modificada;
- Se o objeto for redimensionado na direção B, ambos seus [largura](propriedades_CoordinatesAndSizing.md#width) e [altura](properties_CoordinatesAndSizing.md#height) serão modificados.

## Propriedades compatíveis

<details><summary>História</summary>

| Release | Mudanças                             |
| ------- | ------------------------------------ |
| 18 R6   | Suporte da propriedade Raio de canto |

</details>

[Negrito](properties_Text.md#bold) - [Estilo da linha de borda](properties_BackgroundAndBorder.md#border-line-style) - [Inferior](properties_CoordinatesAndSizing.md#bottom) - [Clase](properties_Object.md#css-class) - [Raio dos cantos](properties_CoordinatesAndSizing.md#corner-radius) - [Cor de preenchimento](properties_BackgroundAndBorder.md#background-color--fill-color) - [Fonte](propriedades_Text.md#font) - [Cor da fonte](properties_Text.md#font-color) - [Font Size](properties_Text.md#font-size) - [Altura](properties_CoordinatesAndSizing.md#height) - [Alinhamento horizontal](properties_Text.md#horizontal-alignment) - [Tamanho do espaço](properties_ResizingOptions.md#horizontal-sizing) - [Itálico](properties_Text.md#italic) - [Esquerda](propriedades_CoordinatesAndSizing.md#left) - [Nome do objeto](properties_Object.md#object-name) - [Orientação](properties_Text.md#orientation) - [Direita](propriedades_CoordinatesAndSizing.md#right) - [Título](propriedades_objeto.md#title) - [Topo](propriedades_CoordinatesAndSizing.md#top) - [Tipo](propriedades_Object.md#type) - [Sublinhado](propriedades_Text.md#underline) - [Tamanho vertical](properties_ResizingOptions.md#vertical-sizing) - [Visibility](propriedades_Display.md#visibiliity) - [Largura](propriedades_CoordinatesAndSizing.md#width)
