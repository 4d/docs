---
id: propertiesCoordinatesAndSizing
title: Coordenadas e dimensionamento
---

## Altura automática da linha

Essa propriedade só está disponível para caixas de listagem com as seguintes [fontes de dados](properties_Object.md#data-source):

- collection ou entity selection,
- array (não hierárquico).

A propriedade não está selecionada por padrão. Quando usado para pelo menos uma coluna, a altura de cada linha na coluna será automaticamente calculada por 4D, e o conteúdo da coluna será levado em consideração. Observe que somente as colunas com a opção selecionada serão consideradas para calcular a altura da linha.

:::note

Ao redimensionar o formulário, se a propriedade de [dimensionamento horizontal](properties_ResizingOptions.md#horizontal-sizing) "Crescer" tiver sido atribuída à list box, a coluna mais à direita será aumentada além de sua largura máxima, se necessário.

:::

Quando essa propriedade está ativada, a altura de cada linha é calculada automaticamente para que o conteúdo da célula caiba totalmente sem ser truncado (a menos que a opção [Wordwrap](properties_Display.md#wordwrap) esteja desativada.

* O cálculo da altura da linha tem em conta:
  * qualquer tipo de conteúdo (texto, numérico, datas, horas, imagens (o cálculo depende do formato da imagem), objetos),
  * quaisquer tipos de controlo (entradas, caixas de verificação, listas, listas suspensas),
  * tipos, estilos e tamanhos de letra,
  * a opção [Wordwrap](properties_Display.md#wordwrap): se desativada, a altura será baseada no número de parágrafos (as linhas são truncadas); se ativada, a altura será baseada no número de linhas (não truncadas).

* O cálculo da altura da linha ignora:
  * conteúdo da coluna oculta
  * Fundo

:::caution

> Como requer cálculos adicionais em tempo de execução, a opção de altura automática da linha pode afetar a fluidez da rolagem da sua caixa de listagem, principalmente quando ela contém um grande número de linhas.

:::


#### Gramática JSON

| Nome          | Tipo de dados | Valores possíveis |
| ------------- | ------------- | ----------------- |
| rowHeightAuto | boolean       | true, false       |

#### Objectos suportados

[Coluna da List Box](listbox_overview.md#list-box-columns)

---

## Fundo

Coordenadas inferiores do objeto no formulário.

#### Gramática JSON

| Nome   | Tipo de dados | Valores possíveis |
| ------ | ------------- | ----------------- |
| bottom | number        | mínimo: 0         |

#### Objectos suportados

[Área 4D View Pro](viewProArea_overview.md) - [Área 4D Write Pro](writeProArea_overview.md) - [Botão](button_overview.md) - [Grade de botões](buttonGrid_overview.md) - [Caixa de seleção](checkbox_overview.md) - [Combo box](comboBox_overview.md) - [Lista suspensa](dropdownList_Overview.md) - [Caixa de grupo](groupBox.md) - [Lista hierárquica](list_overview.md#overview) - [Área de entrada](input_overview.md) - [List Box](listbox_overview.md#overview) - [Linha](shapes_overview.md#line) - [Coluna da List Box](listbox_overview.md#list-box-columns) - [Oval](shapes_overview.md#oval) - [Botão imagem](pictureButton_overview.md) - [Menu pop-up imagem](picturePopupMenu_overview.md) - [Área de plug-in](pluginArea_overview.md#overview) - [Indicadores de progresso](progressIndicator.md) - [Botão raio](radio_overview.md) - [Rectângulo](shapes_overview.md#rectangle) - [Regua](ruler.md) - [Spinner](spinner.md) - [Splitter](splitters.md) - [Imagem estática](staticPicture.md) [Stepper](stepper.md) - [Sub-formulário](subform_overview.md) - [Tab control](tabControl.md) - [Área texto](text.md) - [Área Web](webArea_overview.md#overview)

---

## Direita

Coordenadas esquerda do objecto no formulário.

#### Gramática JSON

| Nome | Tipo de dados | Valores possíveis |
| ---- | ------------- | ----------------- |
| left | number        | mínimo: 0         |

#### Objectos suportados

[Área 4D View Pro](viewProArea_overview.md) - [Área 4D Write Pro](writeProArea_overview.md) - [Botão](button_overview.md) - [Grade de botões](buttonGrid_overview.md) - [Caixa de seleção](checkbox_overview.md) - [Combo box](comboBox_overview.md) - [Lista suspensa](dropdownList_Overview.md) - [Caixa de grupo](groupBox.md) - [Lista hierárquica](list_overview.md#overview) - [Área de entrada](input_overview.md) - [List Box](listbox_overview.md#overview) - [Linha](shapes_overview.md#line) - [Coluna da List Box](listbox_overview.md#list-box-columns) - [Oval](shapes_overview.md#oval) - [Botão imagem](pictureButton_overview.md) - [Menu pop-up imagem](picturePopupMenu_overview.md) - [Área de plug-in](pluginArea_overview.md#overview) - [Indicadores de progresso](progressIndicator.md) - [Botão raio](radio_overview.md) - [Regua](ruler.md) - [Rectângulo](shapes_overview.md#rectangle) - - [Spinner](spinner.md) - [Splitter](splitters.md) - [Imagem estática](staticPicture.md) [Stepper](stepper.md) - [Sub-formulário](subform_overview.md) - [Tab control](tabControl.md) - [Área texto](text.md) - [Área Web](webArea_overview.md#overview)

---

## Esquerda

Coordenada direita do objecto no formulário.

#### Gramática JSON

| Nome    | Tipo de dados | Valores possíveis |
| ------- | ------------- | ----------------- |
| direita | number        | mínimo: 0         |

#### Objectos suportados

[Área 4D View Pro](viewProArea_overview.md) - [Área 4D Write Pro](writeProArea_overview.md) - [Botão](button_overview.md) - [Grade de botões](buttonGrid_overview.md) - [Caixa de seleção](checkbox_overview.md) - [Combo box](comboBox_overview.md) - [Lista suspensa](dropdownList_Overview.md) - [Caixa de grupo](groupBox.md) - [Lista hierárquica](list_overview.md#overview) - [Área de entrada](input_overview.md) - [List Box](listbox_overview.md#overview) - [Linha](shapes_overview.md#line) - [Coluna da List Box](listbox_overview.md#list-box-columns) - [Oval](shapes_overview.md#oval) - [Botão imagem](pictureButton_overview.md) - [Menu pop-up imagem](picturePopupMenu_overview.md) - [Área de plug-in](pluginArea_overview.md#overview) - [Indicadores de progresso](progressIndicator.md) - [Botão raio](radio_overview.md) - [Regua](ruler.md) - [Rectângulo](shapes_overview.md#rectangle) - - [Spinner](spinner.md) - [Splitter](splitters.md) - [Imagem estática](staticPicture.md) [Stepper](stepper.md) - [Sub-formulário](subform_overview.md) - [Tab control](tabControl.md) - [Área texto](text.md) - [Área Web](webArea_overview.md#overview)

---

## Topo

Coordenada superior do objecto no formulário.

#### Gramática JSON

| Nome | Tipo de dados | Valores possíveis |
| ---- | ------------- | ----------------- |
| top  | number        | mínimo: 0         |

#### Objectos suportados

[Área 4D View Pro](viewProArea_overview.md) - [Área 4D Write Pro](writeProArea_overview.md) - [Botão](button_overview.md) - [Grade de botões](buttonGrid_overview.md) - [Caixa de seleção](checkbox_overview.md) - [Combo box](comboBox_overview.md) - [Lista suspensa](dropdownList_Overview.md) - [Caixa de grupo](groupBox.md) - [Lista hierárquica](list_overview.md#overview) - [Área de entrada](input_overview.md) - [List Box](listbox_overview.md#overview) - [Linha](shapes_overview.md#line) - [Coluna da List Box](listbox_overview.md#list-box-columns) - [Oval](shapes_overview.md#oval) - [Botão imagem](pictureButton_overview.md) - [Menu pop-up imagem](picturePopupMenu_overview.md) - [Área de plug-in](pluginArea_overview.md#overview) - [Indicadores de progresso](progressIndicator.md) - [Botão raio](radio_overview.md) - [Regua](ruler.md) - [Rectângulo](shapes_overview.md#rectangle) - - [Spinner](spinner.md) - [Splitter](splitters.md) - [Imagem estática](staticPicture.md) [Stepper](stepper.md) - [Sub-formulário](subform_overview.md) - [Tab control](tabControl.md) - [Área texto](text.md) - [Área Web](webArea_overview.md#overview)

---

## Retângulo

<details><summary>Histórico</summary>

| Release | Mudanças                               |
| ------- | -------------------------------------- |
| 18 R6   | Suporte para entradas e áreas de texto |

</details>

Define o arredondamento do canto (em pixels) do objeto. Por padrão, o valor do raio é 0 pixels. Você pode alterar essa propriedade para desenhar objetos arredondados com formas personalizadas:

![](../assets/en/FormObjects/shape_rectangle.png)

O valor mínimo é 0; nesse caso, um retângulo de objeto padrão não arredondado é desenhado. O valor máximo depende do tamanho do retângulo (ele não pode exceder metade do tamanho do retângulo menor) sendo calculado dinamicamente.

:::note

Com [áreas de texto](text.md) e [entradas](input_overview.md):

- a propriedade corner radius só está disponível com os [estilos de linha de borda](properties_BackgroundAndBorder.md#border-line-style)"none", "solid" ou "dotted",
- o arredondamento do canto é desenhado fora da área do objeto (o objeto parece maior no formulário, mas sua [largura](properties_CoordinatesAndSizing.md#width) e [altura](properties_CoordinatesAndSizing.md#height) não são ampliadas).

![](../assets/en/FormObjects/radius-text.png)

:::

Você também pode definir essa propriedade usando os comandos [OBJECT Get corner radius](https://doc.4d.com/4dv19/help/command/en/page1323.html) e [OBJECT SET CORNER RADIUS](https://doc.4d.com/4dv19/help/command/en/page1324.html).

#### Gramática JSON

| Nome         | Tipo de dados | Valores possíveis |
| ------------ | ------------- | ----------------- |
| borderRadius | integer       | mínimo: 0         |

#### Objectos suportados

[Entrada](input_overview.md) - [Retângulo](shapes_overview.md#rectangle) - [Área de texto](text.md)

---

## Alto

Esta propriedade designa o tamanho vertical de um objeto.
> Alguns objetos podem ter uma altura predefinida que não pode ser alterada.

#### Gramática JSON

| Nome   | Tipo de dados | Valores possíveis |
| ------ | ------------- | ----------------- |
| height | number        | mínimo: 0         |

#### Objectos suportados

[Área 4D View Pro](viewProArea_overview.md) - [Área 4D Write Pro](writeProArea_overview.md) - [Botão](button_overview.md) - [Grade de botões](buttonGrid_overview.md) - [Caixa de seleção](checkbox_overview.md) - [Combo box](comboBox_overview.md) - [Lista suspensa](dropdownList_Overview.md) - [Caixa de grupo](groupBox.md) - [Lista hierárquica](list_overview.md#overview) - [Área de entrada](input_overview.md) - [List Box](listbox_overview.md#overview) - [Linha](shapes_overview.md#line) - [Coluna da List Box](listbox_overview.md#list-box-columns) - [Oval](shapes_overview.md#oval) - [Botão imagem](pictureButton_overview.md) - [Menu pop-up imagem](picturePopupMenu_overview.md) - [Área de plug-in](pluginArea_overview.md#overview) - [Indicadores de progresso](progressIndicator.md) - [Botão raio](radio_overview.md) - [Regua](ruler.md) - [Rectângulo](shapes_overview.md#rectangle) - - [Spinner](spinner.md) - [Splitter](splitters.md) - [Imagem estática](staticPicture.md) [Stepper](stepper.md) - [Sub-formulário](subform_overview.md) - [Tab control](tabControl.md) - [Área texto](text.md) - [Área Web](webArea_overview.md#overview)

---

## Largura

Esta propriedade designa o tamanho horizontal de um objeto.
> * Alguns objetos podem ter uma altura predefinida que não pode ser alterada.
> * Se a propriedade [Redimensionável](properties_ResizingOptions.md#resizable) for usada para uma [coluna de list box](listbox_overview.md#list-box-columns), o usuário também poderá redimensionar manualmente a coluna.
> * Ao redimensionar o formulário, se a propriedade de [dimensionamento horizontal "Crescer"](properties_ResizingOptions.md#horizontal-sizing) tiver sido atribuída à list box, a coluna mais à direita será aumentada além de sua largura máxima, se necessário.

#### Gramática JSON

| Nome  | Tipo de dados | Valores possíveis |
| ----- | ------------- | ----------------- |
| width | number        | mínimo: 0         |

#### Objectos suportados

[4D View Pro Area](viewProArea_overview.md) - [4D Write Pro Area](writeProArea_overview.md) - [Botão](button_overview.md) - [Grade de botões](buttonGrid_overview.md) - [Caixa de seleção](checkbox_overview.md) - [Caixa de](comboBox_overview.md) [combinação](dropdownList_Overview.md) - [Lista suspensa](dropdownList_Overview.md) - Caixa de grupo</7> - [Lista hierárquica](list_overview.md#overview) - [Entrada](input_overview.md) - [Caixa de listagem](listbox_overview.md#overview) - [Linha](shapes_overview.md#line) - [Coluna de caixa de listagem](listbox_overview.md#list-box-columns) - [Oval](shapes_overview.md#oval) - [Botão de imagem](pictureButton_overview.md) - [Menu pop-up de imagem](picturePopupMenu_overview.md) - [Área de plug-in](pluginArea_overview.md#overview) - [Indicadores de progresso](progressIndicator.md) - [Botão de rádio](radio_overview.md) - [Régua](ruler.md) - [Retângulo](shapes_overview.md#rectangle) - [Spinner](spinner.md) - [Divisor](splitters.md) - [Imagem estática](staticPicture.md) - [Stepper](stepper.md) - [Subformulário](subform_overview.md) - [Controle de tabulação](tabControl.md) - [Área de texto](text.md) - [Área da Web](webArea_overview.md#overview)

---

## Largura máxima

A largura máxima da coluna (em píxeis). A largura da coluna não pode ser aumentada além deste valor ao redimensionar a coluna ou o formulário.
> Ao redimensionar o formulário, se a propriedade de [dimensionamento horizontal "Crescer"](properties_ResizingOptions.md#horizontal-sizing) tiver sido atribuída à list box, a coluna mais à direita será aumentada além de sua largura máxima, se necessário.

#### Gramática JSON

| Nome     | Tipo de dados | Valores possíveis |
| -------- | ------------- | ----------------- |
| maxWidth | number        | mínimo: 0         |

#### Objectos suportados

[Coluna da List Box](listbox_overview.md#list-box-columns)

---

## Largura mínima

A largura mínima da coluna (em píxeis). A largura da coluna não pode ser reduzida abaixo deste valor quando se redimensiona a coluna ou o formulário.
> Ao redimensionar o formulário, se a propriedade de [dimensionamento horizontal "Crescer"](properties_ResizingOptions.md#horizontal-sizing) tiver sido atribuída à list box, a coluna mais à direita será aumentada além de sua largura máxima, se necessário.

#### Gramática JSON

| Nome     | Tipo de dados | Valores possíveis |
| -------- | ------------- | ----------------- |
| minWidth | number        | mínimo: 0         |

#### Objectos suportados

[Coluna da List Box](listbox_overview.md#list-box-columns)

---

## Array altura linha

Define a altura das linhas do list box (excluindo cabeçalhos e rodapés). Por padrão, a altura da linha é definida conforme a plataforma e o tamanho da fonte.

#### Gramática JSON

| Nome      | Tipo de dados | Valores possíveis                               |
| --------- | ------------- | ----------------------------------------------- |
| rowHeight | string        | valor css na unidade "em" ou "px" (por defeito) |

#### Objectos suportados

[List Box](listbox_overview.md#overview)

#### Veja também

[Array estilo linha](#row-height-array)

---

## Array estilo linha

Essa propriedade é usada para especificar o nome de um array de altura de linha que você deseja associar a list box. Um array de altura de linha deve ser do tipo numérico (longint por defeito).

Quando um array de altura de linha é definido, cada um de seus elementos cujo valor difere de 0 (zero) é considerado para determinar a altura da linha correspondente no list box, com base na unidade de altura da linha atual.

Por exemplo, pode escrever:

```4d
ARRAY LONGINT(RowHeights;20)
RowHeights{5}:=3
```

Supondo que a unidade das linhas seja "linhas", então a quinta linha do list box terá uma altura de três linhas, enquanto todas as outras linhas manterão sua altura padrão.
> * A propriedade Row Height Array não é considerado nos list boxes hierárquicos.
> * Para caixas de listagem de seleção de matriz e coleção/entidade, essa propriedade estará disponível somente se a opção [Altura automática da linha](#automatic-row-height) não estiver selecionada.

#### Gramática JSON

| Nome            | Tipo de dados | Valores possíveis              |
| --------------- | ------------- | ------------------------------ |
| rowHeightSource | string        | Nome de uma variável array 4D. |

#### Objectos suportados

[List Box](listbox_overview.md#overview)

#### Veja também

[Array altura linha](#row-height)

---

## Barra rolagem horizontal

Define um preenchimento horizontal para as células. O valor é definido em pixeis (padrão = 0).

![](../assets/en/FormObjects/padding.png)

#### Gramática JSON

| Nome              | Tipo de dados | Valores possíveis               |
| ----------------- | ------------- | ------------------------------- |
| horizontalPadding | number        | Número de pixéis (deve ser >=0) |

#### Objectos suportados

[List Box](listbox_overview.md#overview) - [List Box Column](listbox_overview.md#list-box-columns) - [Footers](properties_Footers.md) - [Headers](properties_Headers.md)

#### Veja também

[Dimensionamento vertical](#vertical-padding)

---

## Dimensionamento vertical

Define um preenchimento vertical para as células. O valor é definido em pixeis (padrão = 0).

#### Gramática JSON

| Nome            | Tipo de dados | Valores possíveis               |
| --------------- | ------------- | ------------------------------- |
| verticalPadding | number        | Número de pixéis (deve ser >=0) |

#### Objectos suportados

[List Box](listbox_overview.md#overview) - [List Box Column](listbox_overview.md#list-box-columns) - [Footers](properties_Footers.md) - [Headers](properties_Headers.md)

#### Veja também

[Barra rolagem horizontal](#horizontal-padding)
