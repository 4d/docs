---
id: propertiesBackgroundAndBorder
title: Fundo e margem
---

## Cor de fundo alternado

Permite definir uma cor de fundo diferente para linhas/colunas ímpares em uma caixa de listagem. Por padrão, *Automático* está selecionado para colunas de list box: a coluna usa a cor de fundo alternativa definida no nível da caixa de listagem.

Você também pode definir esta propriedade usando o comando [`OBJECT SET RGB COLORS`](../commands/object-set-rgb-colors).

#### Gramática JSON

| Nome          | Tipo de dados | Valores possíveis                              |
| ------------- | ------------- | ---------------------------------------------- |
| alternateFill | string        | qualquer valor css; "transparent"; "automatic"; "automaticAlternate" |

#### Objectos suportados

[List Box](listbox_overview.md) - [Columna List Box](listbox-column.md)

#### Comandos

[`OBJECT GET RGB COLORS`](../commands/object-get-rgb-colors) - [`OBJECT SET RGB COLORS`](../commands/object-set-rgb-colors)

---

## Background Color / Fill color

Defines the background color / fill color of an object. It can be defined for some standard objects (`fill` JSON property) or ["custom style" objects](#custom-style-button-check-box-or-radio-button) (`borderFillColor` JSON property).  

:::note

The **Fill color** property is named **Background color** with [List Box](listbox_overview.md), [List Box Column](listbox-column.md) and [List Box Footer](listbox-header-footer.md#footers) objects.

:::

### Standard objects

No caso de uma coluna de list box, por padrão, *Automático* é selecionado: a coluna usa a cor de fundo definida no nível da caixa de listagem.

#### Gramática JSON

| Nome | Tipo de dados | Valores possíveis                              |
| ---- | ------------- | ---------------------------------------------- |
| fill | string        | qualquer valor css; "transparent"; "automatic" |

#### Objectos suportados

[Lista hierárquica](list_overview.md) - [Entrada](input_overview.md) - [List Box](listbox_overview.md) - [Coluna List Box](listbox-column.md) - [Rodapé List Box](listbox-header-footer.md#footers) - [Oval](shapes_overview.md#oval) - [Rectângulo](shapes_overview.md#rectangle) - [Área de texto](text.md)

#### Comandos

[`LISTBOX Get row color`](../commands/listbox-get-row-color) - [`LISTBOX SET ROW COLOR`](../commands/listbox-set-row-color) - [`OBJECT GET RGB COLORS`](../commands/object-get-rgb-colors) - [`OBJECT SET RGB COLORS`](../commands/object-set-rgb-colors)

### Custom button, custom check box, or custom radio button

This property allows you to assign a fill color attribute to [custom buttons](./button_overview.md#custom), [custom check boxes](./checkbox_overview.md#custom), or [custom radio buttons](./radio_overview.md#custom). In addition, [custom buttons](./button_overview.md#custom) must have the ["custom" Border Line Style](#border-line-style). In other contexts, the property is ignored.

#### Gramática JSON

| Nome            | Tipo de dados | Valores possíveis                              |
| --------------- | ------------- | ---------------------------------------------- |
| borderFillColor | string        | qualquer valor css; "transparent"; "automatic" |

#### Objectos suportados

[Custom Button](./button_overview.md#custom) (with ["custom" Border Line Style](#border-line-style)) - [Custom Check Box](checkbox_overview.md#custom) - [Custom Radio Button](radio_overview.md#custom)

#### Comandos

[`OBJECT GET RGB COLORS`](../commands/object-get-rgb-colors) - [`OBJECT SET RGB COLORS`](../commands/object-set-rgb-colors)

#### Veja também

[Transparente](#transparente)

---

## Background Color Expression {#background-color-expression}

`List box de tipo coleção e seleção de entidades`

Uma expressão ou uma variável (variáveis de matriz não podem ser usadas) para aplicar uma cor de fundo personalizada a cada linha da caixa de listagem. A expressão ou variável será avaliada para cada linha exibida e deve retornar um valor de cor RGB. For more information, refer to the description of the [`OBJECT SET RGB COLORS`](../commands/object-set-rgb-colors) command.

Você também pode definir esta propriedade usando o comando [`LISTBOX SET PROPERTY`](../commands/listbox-set-property) com a constante `lk background color expression`.

> Com os list box de tipo coleção ou seleção de entidades, esta propriedade também pode ser definida usando uma [Meta Info Expression](properties_Text.md#meta-info-expression).

#### Gramática JSON

| Nome          | Tipo de dados | Valores possíveis                             |
| ------------- | ------------- | --------------------------------------------- |
| rowFillSource | string        | Uma expressão que retorna um valor de cor RGB |

#### Objectos suportados

[List Box](listbox_overview.md) - [Columna List Box](listbox-column.md)

#### Comandos

[`LISTBOX Get property`](../commands/listbox-get-property) - [`LISTBOX SET PROPERTY`](../commands/listbox-set-property)

---

## Border Color {#border-color}

Permite definir a cor da borda. O efeito desta propriedade varia ligeiramente dependendo do tipo de objeto ao qual ela é aplicada.

- **objetos com propriedades de texto**: [botões](./button_overview.md) (todos os estilos exceto "custom", veja abaixo), [listas hierárquicas](list_overview.md), [entradas](input_overview.md), [list boxes](listbox_overview.md), [indicadores de progresso](./progressIndicator.md), [réguas](./ruler.md) e [áreas de texto](text.md).  
Por padrão, a cor da borda desses objetos é definida automaticamente para a sua propriedade [**cor da fonte**](./properties_Text.md#font-color). Esta configuração padrão corresponde à opção **Igual à fonte** na Lista de Propriedades (a propriedade `borderColor` fica indefinida no JSON).  
Você pode separar essas duas propriedades definindo um valor de cor para a propriedade "Cor da borda" do objeto (disponível apenas quando a propriedade [**estilo de linha de borda**](#border-line-style) é **simples** (`solid` na propriedade JSON) ou **pontilhada**).

- **objetos sem propriedades de texto**: [áreas 4D View Pro](viewProArea_overview.md), [áreas 4D Write Pro](writeProArea_overview.md), [grades de botões](buttonGrid_overview.md), [botões de imagem](pictureButton_overview.md), [menus pop-up de imagem](picturePopupMenu_overview.md), [áreas de plug-in](pluginArea_overview.md), [subformulários](subform_overview.md), [spinners](spinner.md), [splitters](splitters.md), [steppers](stepper.md), [áreas web](webArea_overview.md).  
A propriedade cor da borda define a cor das bordas. O valor padrão da cor é "Automático", ou seja, a borda é exibida com a cor automática definida pelo seu sistema operacional.

- **botões com estilo customizado**: [custom buttons](./button_overview.md#custom) com ["custom" Border Line Style](#border-line-style), [custom check boxes](./checkbox_overview.md#custom) e [custom radio buttons](./radio_overview.md#custom).  
Neste caso, a propriedade cor da borda define a cor de uma borda *interna*, que é um atributo do próprio objeto e não uma propriedade de decoração. Esta borda interna também pode ter uma [largura](#border-width) (ela só é exibida se a largura > 0).

#### Gramática JSON

| Nome        | Tipo de dados | Valores possíveis                              |
| ----------- | ------------- | ---------------------------------------------- |
| borderColor | string        | qualquer valor css; "transparent"; "automatic" |

#### Objectos suportados

[Área 4D View Pro](viewProArea_overview.md) - [Área 4D Write Pro](writeProArea_overview.md) - [Botão](./button_overview.md) - [Grade de botões](buttonGrid_overview.md) - [Check Box ("custom" style)](checkbox_overview.md#custom) - [Lista hierárquica](list_overview.md) - [Entrada](input_overview.md) - [List Box](listbox_overview.md) - [Botão imagem](pictureButton_overview.md) - [Menu pop-up com imagem](picturePopupMenu_overview.md) - [Área Plug-in](pluginArea_overview.md) - [Indicador de progresso](./progressIndicator.md) - [Radio Button ("custom" style)](radio_overview.md#custom) - [Regua](./ruler.md) - [Área de texto](text.md) - [Spinner](spinner.md) - [Splitter](splitters.md) - [Stepper](stepper.md) - [Subformulário](subform_overview.md) - [Área web](webArea_overview.md)

#### Comandos

[`OBJECT GET RGB COLORS`](../commands/object-get-rgb-colors) - [`OBJECT SET RGB COLORS`](../commands/object-set-rgb-colors)

#### Veja também

[Cor da linha](#cor-da-linha) (para formas)

## Estilo de linha de borda {#border-line-style}

Permite definir um estilo para o contorno do objeto. As seguintes opções estão disponíveis (nem todas as opções são possíveis dependendo do objeto):

| Estilo           | Objetos (\*) | Descrição |
|------------------|--------------|-----------|
| None             | todos        | Objetos aparecem sem borda. |
| Plain            | todos        | Objetos aparecem emoldurados com uma linha contínua de 1 pt. ("solid" valor json) |
| Dotted           | todos        | Objetos aparecem emoldurados com uma linha pontilhada de 1 pt. |
| Raised           | todos        | Objetos aparecem emoldurados com um efeito 3D. |
| Sunken           | todos        | Objetos aparecem emoldurados com um efeito 3D rebaixado. |
| Double           | todos        | Objetos aparecem emoldurados com uma linha dupla, ou seja, duas linhas contínuas de 1 pt separadas por um pixel. |
| System           | todos *exceto* [botões](button_overview.md) e [áreas de texto](text.md) | Objetos aparecem com uma linha de borda baseada nas especificações gráficas do sistema operacional. |
| System rounded   | [entradas](input_overview.md) | No macOS, objetos aparecem com o efeito nativo de borda "Liquid Glass" do sistema (para informações sobre Liquid Glass, veja [este post do blog 4D](https://blog.4d.com/the-new-macos-tahoe-design-comes-to-your-4d-applications/)). Inclui borda interna definida pelo sistema, raio de canto, cor de borda cinza e padding interno. Note que a aparência "Liquid Glass" *não* é usada em um objeto de entrada multilinha se a [propriedade de barras de rolagem](./properties_Appearance.md#vertical-scroll-bar) estiver ativada ("System" é usada neste caso).<br/> No Windows, este estilo é semelhante ao "System" em tempo de execução. |
| Custom           | [custom buttons](./button_overview.md#custom) | Habilita o design de borda interna, que inclui um conjunto de propriedades extras: [Cor de preenchimento](#fill-color), [Cor da borda](#border-color), [Largura da borda](#border-width) e [Raio do canto](#corner-radius). <br/>![](../assets/en/FormObjects/custom-button.png) |

(\*) "todos" significa "todos os objetos suportados" listados abaixo.

:::tip Related blog posts

- [Customize Buttons, Radio Buttons, and Check Boxes with Background and Border Properties](https://blog.4d.com/customize-buttons-radio-buttons-and-check-boxes-with-background-and-border-properties).  
- [Give Your Form Objects the Border Color They Deserve](https://blog.4d.com/give-your-form-objects-the-border-color-they-deserve)
- [Choose the Right Native Input Style for Your Interface on macOS](https://blog.4d.com/choose-the-right-native-input-style-for-your-interface-on-macos)

:::

#### Gramática JSON

| Nome        | Tipo de dados | Valores possíveis                                                           |
| ----------- | ------------- | --------------------------------------------------------------------------- |
| borderStyle | text          | "custom", "dotted", "double", "none", "raised", "solid", "sunken", "system", "systemRounded" |

#### Objectos suportados

[Área 4D View Pro](viewProArea_overview.md) - [Áreas 4D Write Pro](writeProArea_overview.md) - [Botões](button_overview.md) - [Grade de botões](buttonGrid_overview.md) - [Lista jerárquica](list_overview.md) - [Entrada](input_overview.md) - [List Box](listbox_overview.md) - [Botão imagem](pictureButton_overview.md) - [Menu pop-up com imagem](picturePopupMenu_overview.md) - [Área Plug-in](pluginArea_overview.md) - [Indicador de progresso](progressIndicator.md) - [Regra](ruler.md) - [Spinner](spinner.md) - [Stepper](stepper.md) - [Subformulário](subform_overview.md) - [Área de texto](text.md) - [Área web](webArea_overview.md)

#### Comandos

[`OBJECT Get border style`](../commands/object-get-border-style) - [`OBJECT SET BORDER STYLE`](../commands/object-set-border-style)

#### Veja também

[Tipo de linha pontilhada](#tipo-de-linha-pontilhada) (formas)

---

## Border Width {#border-width}

Allows defining the width of the inner border for:

- [custom buttons](./button_overview.md#custom) with the ["custom" Border Line Style](#border-line-style),
- [custom check boxes](./checkbox_overview.md#custom),
- [custom radio buttons](./radio_overview.md#custom).

In other contexts, the property is ignored.

The value is expressed in pixels.

#### Gramática JSON

| Nome        | Tipo de dados | Valores possíveis                                                            |
| ----------- | ------------- | ---------------------------------------------------------------------------- |
| borderWidth | number        | Integer value (pixels). Minimum value = 0 |

#### Objectos suportados

[Botão ("custom" style)](./button_overview.md#custom) (with ["custom" Border Line Style](#border-line-style)) - [Check Box ("custom style")](checkbox_overview.md#custom) - [Radio Button ("custom" style)](radio_overview.md#custom)

---

## Retângulo

<details><summary>História</summary>

| Release | Mudanças                                                         |
| ------- | ---------------------------------------------------------------- |
| 21 R5   | Support for custom-styled buttons, radio buttons and check boxes |
| 19 R7   | Support for inputs and text areas                                |

</details>

Define o arredondamento do canto (em pixels) do objeto. Por padrão, o valor do raio é 0 pixels. Você pode alterar essa propriedade para desenhar objetos arredondados com formas personalizadas:

![](../assets/en/FormObjects/shape_rectangle.png)

O valor mínimo é 0; nesse caso, um retângulo de objeto padrão não arredondado é desenhado.
O valor máximo depende do tamanho do retângulo (ele não pode exceder metade do tamanho do retângulo menor) sendo calculado dinamicamente.

In [text areas](./text.md) and [inputs](./input_overview.md):

- the corner radius property is only available with "none", "solid", or "dotted" [border line styles](#border-line-style),
- the corner roundness is drawn **outside** the area of the object (the object appears larger in the form but its [width](./properties_CoordinatesAndSizing.md#width) and [height](./properties_CoordinatesAndSizing.md#height) are not extended).

![](../assets/en/FormObjects/radius-text.png)

In [custom buttons](./button_overview.md#custom) (with a ["custom" Border Line Style](#border-line-style)), [custom check boxes](checkbox_overview.md#custom) and [custom radio buttons](radio_overview.md#custom), the corner radius is drawn **inside** the area of the object.

#### Gramática JSON

| Nome         | Tipo de dados | Valores possíveis         |
| ------------ | ------------- | ------------------------- |
| borderRadius | integer       | mínimo: 0 |

#### Objectos suportados

[Botão ("custom" style)](./button_overview.md#custom) (with ["custom" Border Line Style](#border-line-style)) - [Check Box ("custom" style)](checkbox_overview.md#custom) - [Input](input_overview.md) - [Rectangle](shapes_overview.md#rectangle) - [Text Area](text.md) - [Radio Button ("custom" style)](radio_overview.md#custom)

#### Comandos

[OBJECT GET CORNER RADIUS](../commands/object-get-corner-radius) - [OBJECT SET CORNER RADIUS](../commands/object-set-corner-radius)

---

## Tipo de linha pontilhada {#dotted-line-type}

Descreve o tipo de linha pontilhada como uma sequência de pontos pretos e brancos.

#### Gramática JSON

| Nome            | Tipo de dados               | Valores possíveis                                                                                                                                                                                                            |
| --------------- | --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| strokeDashArray | arrays numéricos ou strings | Ex. Ex. Ex. Ex. Ex. "6 1" or \[6,1\] for a sequence of 6 black point and 1 white point |

#### Objectos suportados

[Rectângulo](shapes_overview.md#rectangle) - [Ovalo](shapes_overview.md#oval) - [Linha](shapes_overview.md#line)

---

## Esconder linhas em branco extras

Controla a exibição de linhas em branco extras adicionadas na parte inferior de um objeto de caixa de listagem. Por defeito, 4D adiciona essas linhas extra para preencher a área vazia:

![](../assets/en/FormObjects/property_hideExtraBlankRows1.png)

Pode remover estas linhas vazias selecionando esta opção. A parte inferior do objeto do list box é deixada em branco:

![](../assets/en/FormObjects/property_hideExtraBlankRows2.png)

#### Gramática JSON

| Nome               | Tipo de dados | Valores possíveis |
| ------------------ | ------------- | ----------------- |
| hideExtraBlankRows | boolean       | true, false       |

#### Objectos suportados

[List Box](listbox_overview.md)

#### Comandos

[`LISTBOX Get property`](../commands/listbox-get-property) - [`LISTBOX SET PROPERTY`](../commands/listbox-set-property)

---

## Cor da linha

Designa a cor das linhas do objeto.
A cor pode ser especificada por:

- um nome de cor - como "red"
- um valor HEX - como "#ff0000"
- um valor RGB - como "rgb(255,0,0)"

Você também pode definir esta propriedade usando o comando [`OBJECT SET RGB COLORS`](../commands/object-set-rgb-colors).

#### Gramática JSON

| Nome   | Tipo de dados | Valores possíveis                        |
| ------ | ------------- | ---------------------------------------- |
| stroke | string        | um valor css, "transparent", "automatic" |

:::note

Essa propriedade também está disponível para objetos com propriedades de texto, neste caso ela designa tanto a [Cor da fonte](properties_Text.md#font-color) quanto as linhas do objeto, exceto se você usou a propriedade [Cor da borda](#border-color).

:::

#### Objectos suportados

[Línea](shapes_overview.md#line) - [Óvalo](shapes_overview.md#oval) - [Rectángulo](shapes_overview.md#rectangle)

#### Comandos

[`OBJECT GET RGB COLORS`](../commands/object-get-rgb-colors) - [`OBJECT SET RGB COLORS`](../commands/object-set-rgb-colors)

---

## Largura da linha

Designa a espessura de uma linha.

#### Gramática JSON

| Nome        | Tipo de dados | Valores possíveis                                                                                               |
| ----------- | ------------- | --------------------------------------------------------------------------------------------------------------- |
| strokeWidth | number        | 0 para el ancho más pequeño en un formulario impreso, ou qualquer valor de inteiro < 20 |

#### Objectos suportados

[Línea](shapes_overview.md#line) - [Óvalo](shapes_overview.md#oval) - [Rectángulo](shapes_overview.md#rectangle)

---

## Row Background Color Array {#row-background-color-array}

`List boxes de tipo array`

O nome de um array para aplicar uma cor de fundo personalizada para cada linha ou coluna da list box.

Deve ser introduzido o nome de um array Longint. Cada elemento deste array corresponde a uma linha do list box (se aplicada o list box) ou a uma célula da coluna (se aplicada a uma coluna), pelo que o array deve ter o mesmo tamanho que o array associado à coluna. Você pode usar as constantes descritas no comando [`OBJECT SET RGB COLORS`](../commands/object-set-rgb-colors). Se você quiser que a célula herde a cor de fundo definida em um nível superior, passe o valor -255 para o elemento correspondente do array.

Por exemplo, dada uma caixa de listagem em que as linhas têm uma cor alternada de cinza/cinza claro, definida nas propriedades da caixa de listagem. Um array de cor de fundo também foi definida para a caixa de listagem, a fim de mudar a cor das linhas em que pelo menos um valor é negativo para laranja claro:

```4d
 <>_BgndColors{$i}:=0x00FFD0B0 // laranja
 <>_BgndColors{$i}:=-255 // valor por padrão
```

![](../assets/en/FormObjects/listbox_styles1.png)

De seguida, deve colorir as células com valores negativos a laranja-escuro. Para fazer isso, você definiu um array de cor de fundo para cada coluna, por exemplo, `<>_BgndColor_1`, `<>_BgndColor_2` e `<>_BgndColor_3`. Os valores dessas arrays têm prioridade sobre os valores definidos nas propriedades da caixa de listagem, bem como sobre os valores do array geral de cores de fundo:

```4d
 <>_BgndColorsCol_3{2}:=0x00FF8000 // laranja escura
 <>_BgndColorsCol_2{5}:=0x00FF8000
 <>_BgndColorsCol_1{9}:=0x00FF8000
 <>_BgndColorsCol_1{16}:=0x00FF8000
```

![](../assets/en/FormObjects/listbox_styles2.png)

Você pode obter o mesmo resultado usando os comandos [`LISTBOX SET ROW FONT STYLE`](../commands/listbox-set-row-font-style) e [`LISTBOX SET ROW COLOR`](../commands/listbox-set-row-color). Eles têm a vantagem de permitir que você não precise predefinir matrizes de estilo/cor para as colunas: em vez disso, elas são criadas dinamicamente pelos comandos.

#### Gramática JSON

| Nome          | Tipo de dados | Valores possíveis                           |
| ------------- | ------------- | ------------------------------------------- |
| rowFillSource | string        | O nome de um array longint. |

#### Objectos suportados

[List Box](listbox_overview.md) - [Columna List Box](listbox-column.md)

#### Comandos

[`LISTBOX Get array`](../commands/listbox-get-array) - [`LISTBOX GET ARRAYS`](../commands/listbox-get-arrays)

---

## Transparente

Define o fundo do list box como "Transparent". Quando definido, qualquer [cor de fundo alternativa](#alternate-background-color) ou [cor de fundo](#background-color--fill-color) definido para a coluna é ignorada.

#### Gramática JSON

| Nome | Tipo de dados | Valores possíveis |
| ---- | ------------- | ----------------- |
| fill | text          | "transparent"     |

#### Objectos suportados

[List Box](listbox_overview.md)

#### Comandos

[`OBJECT GET RGB COLORS`](../commands/object-get-rgb-colors) - [`OBJECT SET RGB COLORS`](../commands/object-set-rgb-colors)

#### Veja também

[Cor de fundo / Cor de preenchimento](#background-color--fill-color)

