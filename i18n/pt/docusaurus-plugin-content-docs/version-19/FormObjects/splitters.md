---
id: splitters
title: Separador
---



Um divisor divide um formulário em duas áreas, permitindo que o usuário amplie e reduza as áreas movendo o divisor para um lado ou para o outro. Um repartidor pode ser horizontal ou vertical. O divisor leva em consideração as propriedades de redimensionamento de cada objeto, o que significa que pode personalizar completamente a interface de seu banco de dados. Um separador pode ou não ser um "empurrador."

O divisor é usado, por exemplo, em formulários de saída para que as colunas possam ser redimensionadas:

![](../assets/en/FormObjects/split1.png)

Algumas das características gerais do repartidor:

* Você pode colocar quantos divisores quiser em qualquer formulário e usar uma mistura de divisores horizontais e verticais no mesmo formulário.
* Um separador pode passar por um objeto. Este objeto será redimensionado quando o divisor for movido.
* As paradas do divisor são calculadas de modo que os objetos movidos permaneçam totalmente visíveis no formulário ou não passem sob/próximo a outro divisor. Quando a propriedade [Pusher](properties_ResizingOptions.md#pusher) está associada a um divisor, seu movimento para a direita ou para baixo não encontra nenhuma parada.
* Se você redimensionar um formulário usando um divisor, as novas dimensões do formulário serão salvas somente enquanto o formulário estiver sendo exibido. Quando um formulário é fechado, as dimensões iniciais são restauradas.

Uma vez inserido, o separador aparece como uma linha. You can modify its [border style](properties_BackgroundAndBorder.md#border-line-style) to obtain a thinner line or [change its color](properties_BackgroundAndBorder.md#line-color).

#### Exemplo JSON

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

[Estilo da linha de borda](properties_BackgroundAndBorder.md#border-line-style) - [Parte inferior](properties_CoordinatesAndSizing.md#bottom) - [Classe](properties_Object.md#css-class) - [Altura](properties_CoordinatesAndSizing.md#height) - [Dica de ajuda](properties_Help.md#help-tip) - [Dimensionamento horizontal](properties_ResizingOptions.md#horizontal-sizing) - [Esquerda](properties_CoordinatesAndSizing.md#left) - [Cor da linha](properties_BackgroundAndBorder.md#line-color) - [Nome do objeto](properties_Object.md#object-name) - [Pusher](properties_ResizingOptions.md#pusher) - [Direita](properties_CoordinatesAndSizing.md#right) - [Parte superior](properties_CoordinatesAndSizing.md#top) - [Tipo](properties_Object.md#type) - [Dimensionamento vertical](properties_ResizingOptions.md#vertical-sizing) - [Variável ou expressão](properties_Object.md#variable-or-expression) - [Visibilidade](properties_Display.md#visibility) - [Largura](properties_CoordinatesAndSizing.md#width)

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

Uma [variável ](properties_Object.md#variable-or-expression) do tipo *Longint* está associada a cada divisor. Esta variável pode ser utilizada nos seus métodos objeto e/ou formulário. Seu valor indica a posição atual do divisor, em píxeis, em relação à sua posição inicial.

* Se o valor for negativo: o divisor foi movido para cima ou para a esquerda,
* Se o valor for positivo: o divisor foi movido para a parte inferior ou para a direita,
* Se o valor for 0: o divisor foi movido para a sua posição original.

Você também pode mover o divisor de forma programática: basta definir o valor da variável associada. Por exemplo, se um divisor vertical estiver associado a uma variável chamada `split1` e se você executar a seguinte instrução: `split1:=-10`, o divisor será movido 10 píxeis para a esquerda, como se o usuário tivesse feito isso manualmente. A movimentação é de fato realizada no final da execução do formulário ou método objeto que contém a declaração.
