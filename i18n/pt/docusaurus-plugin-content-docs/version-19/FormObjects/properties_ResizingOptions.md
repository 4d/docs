---
id: propertiesResizingOptions
title: Opções de redimensionamento
---


## Autodimensionamento coluna

Quando essa propriedade está ativada (valor `rightToLeft` em JSON), as colunas de list box são redimensionadas automaticamente com o list box, nos limites das larguras [mínima](properties_CoordinatesAndSizing.md#minimum-width) e [máxima](properties_CoordinatesAndSizing.md#maximum-width) definidas.

Quando esta propriedade é desativada (valor `legacy` em JSON), apenas a coluna mais direita do list box é redimensionada, mesmo que a sua largura exceda o valor máximo definido.

### Como funciona o redimensionamento automático de colunas

* À medida que a largura do list box aumenta, suas colunas são ampliadas, uma a uma, começando da direita para a esquerda, até que cada uma atinja sua [largura máxima](properties_CoordinatesAndSizing.md#maximum-width). Somente as colunas com a propriedade [Resizable](#resizable) selecionada são redimensionadas.

* O mesmo procedimento se aplica quando a largura do list box diminui, mas na ordem reversa (*o seja*, as colunas são redimensionadas a partir da esquerda para a direita). Quando cada coluna atinge sua [largura mínima](properties_CoordinatesAndSizing.md#minimum-width), a barra de rolagem horizontal fica ativa novamente.

* As colunas são redimensionadas somente quando a barra de rolagem horizontal não está "ativa", *ou seja*, todas as colunas estão totalmente visíveis no list box em seu tamanho atual. **Nota**: se a barra de rolagem horizontal estiver oculta, isso não altera seu estado: uma barra de rolagem ainda pode estar ativa, mesmo que não esteja visível.

* Depois que todas as colunas atingem seu tamanho máximo, elas não são mais ampliadas e, em vez disso, uma coluna em branco (falsa) é adicionada à direita para preencher o espaço extra. Se uma coluna falsa (em branco) estiver presente, quando a largura do list box diminuir, essa será a primeira área a ser reduzida.

![](../assets/en/FormObjects/property_columnAutoResizing.png)

#### Sobre a coluna falsa (em branco)

A aparência da coluna falsa corresponde à das colunas existentes; ela terá um cabeçalho e/ou rodapé falso se esses elementos estiverem presentes nas colunas do list box existentes e terá a(s) mesma(s) cor(es) de fundo aplicada(s).

O cabeçalho e/ou o rodapé falsos podem ser clicados, mas isso não tem nenhum efeito sobre as outras colunas (por exemplo, nenhuma classificação é realizada); no entanto, os eventos `On Clicked`, `On Header Click` e `On Footer Click` são gerados de acordo.

Se uma célula da coluna falsa for clicada, o comando [LISTBOX GET CELL POSITION](https://doc.4d.com/4Dv17R6/4D/17-R6/LISTBOX-GET-CELL-POSITION.301-4311145.en.html) retornará "X+1" para o número da coluna (em que X é o número de colunas existentes).

#### Gramática JSON

| Nome         | Tipo de dados | Valores possíveis       |
| ------------ | ------------- | ----------------------- |
| resizingMode | string        | "rightToLeft", "legacy" |

#### Objectos suportados

[List Box](listbox_overview.md)

---

## Dimensionamento horizontal

Esta propriedade específica se o tamanho horizontal de um objeto deve ser movido ou redimensionado quando um usuário redimensiona o formulário. Também pode ser definido dinamicamente através do comando de linguagem `OBJECT SET RESIZING OPTIONS`.

Estão disponíveis três opções:

| Opção    | Valor JSON | Resultados                                                                                                                                       |
| -------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| Agrandar | "grow"     | A mesma percentagem é aplicada à largura do objeto quando o usuário redimensiona a largura da janela,                                            |
| Mover    | "move"     | O objeto é movido para a esquerda ou para a direita na mesma quantidade que a largura aumenta quando o usuário redimensiona a largura da janela, |
| Nenhum   | "fixed"    | O objeto permanece estacionário quando o formulário é redimensionado                                                                             |
> Esta propriedade funciona em conjunto com a propriedade [Vertical Sizing](#vertical-sizing).

#### Gramática JSON

| Nome    | Tipo de dados | Valores possíveis       |
| ------- | ------------- | ----------------------- |
| sizingX | string        | "grow", "move", "fixed" |

#### Objectos suportados

[Área 4D View Pro](viewProArea_overview.md) - [Área 4D Write Pro](writeProArea_overview.md) - [Botão](button_overview.md) - [Grade de botões](buttonGrid_overview.md) - [Caixa de seleção](checkbox_overview.md) - [Combo box](comboBox_overview.md) - [Lista suspensa](dropdownList_Overview.md) - [Caixa de grupo](groupBox.md) - [Lista hierárquica](list_overview.md#overview) - [Área de entrada](input_overview.md) - [List Box](listbox_overview.md#overview) - [Linha](shapes_overview.md#line) - [Coluna da List Box](listbox_overview.md#list-box-columns) - [Oval](shapes_overview.md#oval) - [Botão imagem](pictureButton_overview.md) - [Menu pop-up imagem](picturePopupMenu_overview.md) - [Área de plug-in](pluginArea_overview.md#overview) - [Indicadores de progresso](progressIndicator.md) - [Botão raio](radio_overview.md) - [Regua](ruler.md) - [Rectângulo](shapes_overview.md#rectangle) - - [Spinner](spinner.md) - [Splitter](splitters.md) - [Imagem estática](staticPicture.md) [Stepper](stepper.md) - [Sub-formulário](subform_overview.md) - [Tab control](tabControl.md) - [Área Web](webArea_overview.md#overview)

---

## Alinhamento vertical

Esta propriedade específica se o tamanho vertical de um objeto deve ser movido ou redimensionado quando um usuário redimensiona o formulário. Ele também pode ser definido dinamicamente pelo comando de linguagem `OBJECT SET RESIZING OPTIONS`.

Estão disponíveis três opções:

| Opção    | Valor JSON | Resultados                                                                                                                               |
| -------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| Agrandar | "grow"     | A mesma porcentagem é aplicada à altura do objeto quando o usuário redimensiona a largura da janela,                                     |
| Mover    | "move"     | O objeto é movido na mesma quantidade para cima ou para baixo que o aumento da altura quando o usuário redimensiona a largura da janela, |
| Nenhum   | "fixed"    | O objeto permanece estacionário quando o formulário é redimensionado                                                                     |
> Esta propriedade funciona em conjunto com a propriedade [Dimensionamento Horizontal](#horizontal-sizing).

#### Gramática JSON

| Nome    | Tipo de dados | Valores possíveis       |
| ------- | ------------- | ----------------------- |
| sizingY | string        | "grow", "move", "fixed" |

#### Objectos suportados

[Área 4D View Pro](viewProArea_overview.md) - [Área 4D Write Pro](writeProArea_overview.md) - [Botão](button_overview.md) - [Grade de botões](buttonGrid_overview.md) - [Caixa de seleção](checkbox_overview.md) - [Combo box](comboBox_overview.md) - [Lista suspensa](dropdownList_Overview.md) - [Caixa de grupo](groupBox.md) - [Lista hierárquica](list_overview.md#overview) - [Área de entrada](input_overview.md) - [List Box](listbox_overview.md#overview) - [Linha](shapes_overview.md#line) - [Coluna da List Box](listbox_overview.md#list-box-columns) - [Oval](shapes_overview.md#oval) - [Botão imagem](pictureButton_overview.md) - [Menu pop-up imagem](picturePopupMenu_overview.md) - [Área de plug-in](pluginArea_overview.md#overview) - [Indicadores de progresso](progressIndicator.md) - [Botão raio](radio_overview.md) - [Regua](ruler.md) - [Rectângulo](shapes_overview.md#rectangle) - - [Spinner](spinner.md) - [Splitter](splitters.md) - [Imagem estática](staticPicture.md) [Stepper](stepper.md) - [Sub-formulário](subform_overview.md) - [Tab control](tabControl.md) - [Área Web](webArea_overview.md#overview)

---

## Pusher

Quando um objeto splitter tem essa propriedade, os outros objetos à sua direita (splitter vertical) ou abaixo dele (splitter horizontal) são empurrados ao mesmo tempo que o divisor, sem parada.

Aqui está o resultado de uma divisão "pusher" sendo movida: ![](../assets/en/FormObjects/splitter_pusher1.png)

![](../assets/en/FormObjects/splitter_pusher3.png)

Quando esta propriedade não é aplicada ao splitter, o resultado é o seguinte:

![](../assets/en/FormObjects/splitter_pusher2.png)

#### Gramática JSON

| Nome         | Tipo de dados |          Valores possíveis           |
|:------------ |:-------------:|:------------------------------------:|
| splitterMode |    string     | "move" (pusher), "resize" (standard) |

#### Objectos suportados

[Separador](splitters.md)

---

## Redimensionável

Designa se o tamanho da coluna pode ser modificado pelo usuário.

#### Gramática JSON

| Nome      | Tipo de dados | Valores possíveis |
|:--------- |:-------------:|:-----------------:|
| resizable |    boolean    |  "true", "false"  |

#### Objectos suportados

[Coluna da List Box](listbox_overview.md#list-box-columns)
