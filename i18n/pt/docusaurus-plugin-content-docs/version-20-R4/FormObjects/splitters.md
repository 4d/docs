---
id: splitters
title: Splitter
---



A splitter divides a form into two areas, allowing the user to enlarge and reduce the areas by moving the splitter one way or the other. Um repartidor pode ser horizontal ou vertical. O divisor leva em consideração as propriedades de redimensionamento de cada objeto, o que significa que pode personalizar completamente a interface de seu banco de dados. Um separador pode ou não ser um "empurrador."

O divisor é usado, por exemplo, em formulários de saída para que as colunas possam ser redimensionadas:

![](../assets/en/FormObjects/split1.png)


Algumas das características gerais do repartidor:

*   You can place as many splitters as you want in any type of form and use a mixture of horizontal and vertical splitters in the same form.
*   Um separador pode passar por um objeto. Este objeto será redimensionado quando o divisor for movido.
*   Splitter stops are calculated so that the objects moved remain entirely visible in the form or do not pass under/next to another splitter. When the [Pusher](properties_ResizingOptions.md#pusher) property is associated with a splitter, its movement to the right or downward does not encounter any stops.
*   If you resize a form using a splitter, the new dimensions of the form are saved only while the form is being displayed. Quando um formulário é fechado, as dimensões iniciais são restauradas.

Uma vez inserido, o separador aparece como uma linha. Pode modificar o seu [estilo de contorno](properties_BackgroundAndBorder.md#border-line-style-dotted-line-type) para obter uma linha mais fina ou [alterar a sua cor](properties_BackgroundAndBorder.md##font-color-line-color).

#### JSON Exemplo

```4d
"mySplitter": {
 "type": "splitter",
 "left": 60,  
 "top": 160,   
 "width": 100,  
 "height": 20,  
 "splitterMode": "move"  //pusher
 }
```


### Propriedades compatíveis

[Estilo del borde](properties_BackgroundAndBorder.md##border-line-style-dotted-line-type) - [Negrita](properties_Text.md#bold) - \[Abaixo\](properties_CoordinatesAndSizing. md#bottom) - [Classe](properties_Object.md#css-class) - [Fuente](properties_Text.md#font) - \[Cor da fonte\](properties_Text. md#font-color) - [Altura](properties_CoordinatesAndSizing.md#height) - [Conselho de ajuda](properties_Help.md#help-tip) - \[Tamaño horizontal\](properties_ResizingOptions. md#horizontal-sizing) - [Itálica](properties_Text.md#italic) - [Esquerda](properties_CoordinatesAndSizing.md#left) - \[Cor da linha\](properties_BackgroundAndBorder. md##font-color-line-color) - [Nome de objeto](properties_Object.md#object-name) - [Pusher](properties_ResizingOptions.md) - \[Direita\](properties_CoordinatesAndSizing. md#right) - [Título](properties_Object.md#title) -[Acima](properties_CoordinatesAndSizing.md#top) - \[Tipo\](properties_Object. md#type) - [Sublinhado](properties_Text.md#underline) - [Tamanho vertical](properties_ResizingOptions.md#vertical-sizing) - \[Variável ou expressão\](properties_Object.

## Interação com as propriedades dos objetos vizinhos

Num formulário, os separadores interagem com os objetos que estão à sua volta conforme as opções de redimensionamento desses objetos:

| Opções de redimensionamento para os objetos | Objeto(s) acima de um separador horizontal ou à esquerda de um separador vertical (1)                | Objeto(s) abaixo de um separador horizontal *non-Pusher* ou à direita de um separador vertical *non-Pusher*                                                                                               | Objeto(s) abaixo de um separador horizontal *Pusher* ou à direita de um divisor vertical *Pusher*                                                    |
| ------------------------------------------- | ---------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| Nenhum                                      | Manter-se como está                                                                                  | São deslocados com o separador (a posição relativa ao separador não é modificada) até à paragem seguinte. A paragem quando se desloca para baixo ou para a direita é o limite da janela ou outro divisor. | São movidos com o divisor (a posição relativa ao divisor não é modificada) indefinidamente. Não é aplicada qualquer paragem (ver parágrafo seguinte) |
| Redimensionar                               | Mantêm a(s) posição(ões) original(ais), mas são redimensionadas conforme a nova posição do separador |                                                                                                                                                                                                           |                                                                                                                                                      |
| Mover                                       | Mover-se com o separador                                                                             |                                                                                                                                                                                                           |                                                                                                                                                      |

*(1) Não é possível arrastar o divisor para além do lado direito (horizontal) ou inferior (vertical) de um objeto situado nesta posição.*
> Um objeto completamente contido no retângulo que define o divisor é movido enquanto o divisor.

## Gestão programada dos separadores


Pode associar um método objeto a um separador e este será chamado com o evento `On Clicked` durante todo o movimento.

Uma [variável ](properties_Object.md#variable-or-expression) do tipo *Longint* está associada a cada divisor. Esta variável pode ser utilizada nos seus métodos objeto e/ou formulário. Its value indicates the splitter’s current position, in pixels, in relation to its initial position.

*   If the value is negative: the splitter was moved toward the top or toward the left,
*   If the value is positive: the splitter was moved toward the bottom or toward the right,
*   Se o valor for 0: o divisor foi movido para a sua posição original.

You can also move the splitter programmatically: you just have to set the value of the associated variable. For example, if a vertical splitter is associated with a variable named `split1`, and if you execute the following statement: `split1:=-10`, the splitter will be moved 10 pixels to the left — as if the user did it manually. The move is actually performed at the end of the execution of the form or object method containing the statement. 
