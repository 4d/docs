---
id: listbox-header-footer
title: List Box Header and Footer
---

:::note

- To be able to access header properties for a list box, you must enable the [Display Headers](properties_Headers.md#display-headers) option.
- Para poder acessar as propriedades do rodapé para um list box, você deve ativar a opção [Exibir rodapés](properties_Footers.md#display-footers).

:::

## Cabeçalhos

Quando mostrar os cabeçalhos, pode selecionar um cabeçalho no editor de formulários clicando nele quando o objeto List Box estiver selecioando:

![](../assets/en/FormObjects/listbox_header.png)

Pode estabelecer propriedades de texto padrão para cada cabeçalho de coluna da list box, nesse caso, essas propriedades tem prioriedade sobre aquelas da coluna ou da própria list box.

Além disso, tem acesso às propriedades específicas para cabeçalhos. Especificamente, um ícone pode ser exibido no cabeçalho ao lado ou no lugar do título da coluna, por exemplo, ao executar [classificações personalizadas](./listbox_overview.md#managing-sorts).

![](../assets/en/FormObjects/lbHeaderIcon.png)

Na execução, eventos que ocorrem em um cabeçalho são gerados em método de objeto coluna list box.

Quando o comando `OBJECT SET VISIBLE` é usado com um cabeçalho, ele é aplicado a todos os cabeçalhos, independentemente do elemento individual definido pelo comando. Por ejemplo, `OBJECT SET VISIBLE(*; "header3";False)` ocultará todos los encabezados del objeto list box al que pertenece *header3* y no simplemente este encabezado.

### Propriedades específicas de cabeçalho

[Bold](properties_Text.md#bold) - [Class](properties_Object.md#css-class) - [Font](properties_Text.md#font) - [Font Color](properties_Text.md#font-color) - [Help Tip](properties_Help.md#help-tip) - [Horizontal Alignment](properties_Text.md#horizontal-alignment) - [Icon Location](properties_TextAndPicture.md#icon-location) - [Italic](properties_Text.md#italic) - [Object Name](properties_Object.md#object-name) - [Pathname](properties_TextAndPicture.md#picture-pathname) - [Title](properties_Object.md#title) - [Underline](properties_Text.md#underline) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Alignment](properties_Text.md#vertical-alignment) - [Width](properties_CoordinatesAndSizing.md#width)

## Rodapés

List boxes podem conter "cabeçalhos" não editáveis, exibindo informação adicional. No caso de dados mostrados em formato de tabela, os rodapés são geralmente usados para exibir cálculos como totais ou médias.

Quando cabeçalhos são exibidos, pode clicar para selecionar um quando o objeto list box for selecionado no editor de Formulário:

![](../assets/en/FormObjects/listbox_footers.png)

Para cada cabeçalho coluna List Box pode estabelecer propriedades texto padrão: nesse caso, essas propriedades têm prioridade sobre àquelas da coluna ou da list box. Pode também acessar propriedades específicas para cabeçalhos. Em particular, você pode inserir um [cálculo personalizado ou automático](properties_Object.md#variable-calculation).

Na execução, eventos que ocorrem em um rodapé são gerados em método de objeto coluna list box.

Quando o comando OBJECT SET VISIBLE for usado com um rodapé, é aplicado a todos os rodapés, independente do elemento individual estabelecido pelo comando. Por exemplo, OBJECT SET VISIBLE(\*;"footer3";False) esconde todos os rodapés no objeto list box ao qual footer3 pertence e não apenas esse rodapé.

### Propriedades específicas do rodapé

[Alpha Format](properties_Display.md#alpha-format) - [Background Color](properties_BackgroundAndBorder.md#background-color--fill-color) - [Bold](properties_Text.md#bold) - [Class](properties_Object.md#css-class) - [Date Format](properties_Display.md#date-format) - [Expression Type](properties_Object.md#expression-type) - [Font](properties_Text.md#font) - [Font Color](properties_Text.md#font-color) - [Help Tip](properties_Help.md#help-tip) - [Horizontal Alignment](properties_Text.md#horizontal-alignment) - [Italic](properties_Text.md#italic) - [Number Format](properties_Display.md#number-format) - [Object Name](properties_Object.md#object-name) - [Picture Format](properties_Display.md#picture-format) - [Time Format](properties_Display.md#time-format) - [Truncate with ellipsis](properties_Display.md#truncate-with-ellipsis) - [Underline](properties_Text.md#underline) - [Variable Calculation](properties_Object.md#variable-calculation) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Alignment](properties_Text.md#vertical-alignment) - [Width](properties_CoordinatesAndSizing.md#width) - [Wordwrap](properties_Display.md#wordwrap)

