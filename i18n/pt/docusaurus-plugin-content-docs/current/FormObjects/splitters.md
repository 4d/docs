---
id: splitters
title: Separador
---

Um divisor divide um formulário em duas áreas, permitindo que o usuário amplie e reduza as áreas movendo o divisor para um lado ou para o outro. Um repartidor pode ser horizontal ou vertical. O divisor leva em consideração as propriedades de redimensionamento de cada objeto, o que significa que pode personalizar completamente a interface de seu banco de dados. Um separador pode ou não ser um "empurrador."

O divisor é usado, por exemplo, em formulários de saída para que as colunas possam ser redimensionadas:

![](../assets/en/FormObjects/split1.png)

Algumas das características gerais do repartidor:

- Você pode colocar quantos divisores quiser em qualquer formulário e usar uma mistura de divisores horizontais e verticais no mesmo formulário.
- Um separador pode passar por um objeto. Este objeto será redimensionado quando o divisor for movido.
- As paradas do divisor são calculadas de modo que os objetos movidos permaneçam totalmente visíveis no formulário ou não passem sob/próximo a outro divisor. Cuando la propiedad [Empujador](properties_ResizingOptions.md#pusher) está asociada a un separador, su movimiento hacia la derecha o hacia abajo no encuentra ningún tope.
- Se você redimensionar um formulário usando um divisor, as novas dimensões do formulário serão salvas somente enquanto o formulário estiver sendo exibido. Quando um formulário é fechado, as dimensões iniciais são restauradas.

Uma vez inserido, o separador aparece como uma linha. You can modify its [border style](properties_BackgroundAndBorder.md#border-line-style) to obtain a thinner line or [change its color](properties_BackgroundAndBorder.md#line-color).

#### Exemplo JSON:

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

[Border Line Style](properties_BackgroundAndBorder.md#border-line-style) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Class](properties_Object.md#css-class) - [Height](properties_CoordinatesAndSizing.md#height) - [Help Tip](properties_Help.md#help-tip) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Left](properties_CoordinatesAndSizing.md#left) - [Line Color](properties_BackgroundAndBorder.md#line-color) - [Object Name](properties_Object.md#object-name) - [Pusher](properties_ResizingOptions.md#pusher) - [Right](properties_CoordinatesAndSizing.md#right) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Variable or Expression](properties_Object.md#variable-or-expression) -  [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)

## Interação com as propriedades dos objetos vizinhos

Num formulário, os separadores interagem com os objetos que estão à sua volta conforme as opções de redimensionamento desses objetos:

| Opções de redimensionamento para os objetos | Objeto(s) acima de um separador horizontal ou à esquerda de um separador vertical (1)                                   | Objeto(s) debajo de un separador horizontal *no empujador* o a la derecha de un separador vertical *no empujador*                                                                                                                         | Objeto(s) debajo de un separador horizontal *Empujador* o a la derecha de un separador vertical *Empujador*                                                                             |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Nenhum                                      | Manter-se como está                                                                                                                                           | São deslocados com o separador (a posição relativa ao separador não é modificada) até à paragem seguinte. A paragem quando se desloca para baixo ou para a direita é o limite da janela ou outro divisor. | São movidos com o divisor (a posição relativa ao divisor não é modificada) indefinidamente. Não é aplicada qualquer paragem (ver parágrafo seguinte) |
| Redimensionar                               | Mantêm a(s) posição(ões) original(ais), mas são redimensionadas conforme a nova posição do separador |                                                                                                                                                                                                                                                              |                                                                                                                                                                                                            |
| Mover                                       | Mover-se com o separador                                                                                                                                      |                                                                                                                                                                                                                                                              |                                                                                                                                                                                                            |

*(1) You cannot drag the splitter past the right (horizontal) or bottom (vertical) side of an object located in this position.*

> Um objeto completamente contido no retângulo que define o divisor é movido enquanto o divisor.

## Gestão programada dos separadores

Puede asociar un método objeto a un separador y será llamado con el evento `On Clicked` durante todo el movimiento.

A cada separador se le asocia una [variable](properties_Object.md#variable-or-expression) de tipo *Longint*. Esta variável pode ser utilizada nos seus métodos objeto e/ou formulário. Seu valor indica a posição atual do divisor, em píxeis, em relação à sua posição inicial.

- Se o valor for negativo: o divisor foi movido para cima ou para a esquerda,
- Se o valor for positivo: o divisor foi movido para a parte inferior ou para a direita,
- Se o valor for 0: o divisor foi movido para a sua posição original.

Você também pode mover o divisor de forma programática: basta definir o valor da variável associada. Você também pode mover o divisor de forma programática: basta definir o valor da variável associada. A movimentação é de fato realizada no final da execução do formulário ou método objeto que contém a declaração.
