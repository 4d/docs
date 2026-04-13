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

When the [`OBJECT SET VISIBLE`](../commands/object-set-visible) command is used with a header, it is applied to all headers, regardless of the individual element set by the command. Por ejemplo, `OBJECT SET VISIBLE(*; "header3";False)` ocultará todos los encabezados del objeto list box al que pertenece *header3* y no simplemente este encabezado.

### Propriedades específicas de cabeçalho

[Bold](properties_Text.md#bold) - [Class](properties_Object.md#css-class) - [Font](properties_Text.md#font) - [Font Color](properties_Text.md#font-color) - [Help Tip](properties_Help.md#help-tip) - [Horizontal Alignment](properties_Text.md#horizontal-alignment) - [Horizontal Padding](properties_CoordinatesAndSizing.md#horizontal-padding) - [Icon Location](properties_TextAndPicture.md#icon-location) - [Italic](properties_Text.md#italic) - [Object Name](properties_Object.md#object-name) - [Pathname](properties_TextAndPicture.md#picture-pathname) - [Title](properties_Object.md#title) - [Underline](properties_Text.md#underline) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Alignment](properties_Text.md#vertical-alignment) - [Vertical Padding](properties_CoordinatesAndSizing.md#vertical-padding) - [Width](properties_CoordinatesAndSizing.md#width)

## Rodapés

List boxes podem conter "cabeçalhos" não editáveis, exibindo informação adicional. No caso de dados mostrados em formato de tabela, os rodapés são geralmente usados para exibir cálculos como totais ou médias.

Quando cabeçalhos são exibidos, pode clicar para selecionar um quando o objeto list box for selecionado no editor de Formulário:

![](../assets/en/FormObjects/listbox_footers.png)

Para cada cabeçalho coluna List Box pode estabelecer propriedades texto padrão: nesse caso, essas propriedades têm prioridade sobre àquelas da coluna ou da list box. Pode também acessar propriedades específicas para cabeçalhos. Em particular, você pode inserir um [cálculo personalizado ou automático](properties_Object.md#variable-calculation).

Na execução, eventos que ocorrem em um rodapé são gerados em método de objeto coluna list box.

When the [`OBJECT SET VISIBLE`](../commands/object-set-visible) command is used with a footer, it is applied to all footers, regardless of the individual element set by the command. Por exemplo, OBJECT SET VISIBLE(\*;"footer3";False) esconde todos os rodapés no objeto list box ao qual footer3 pertence e não apenas esse rodapé.

### Propriedades específicas do rodapé

[Formato Alpha](properties_Display.md#alpha-format) - [Cor de fundo](properties_BackgroundAndBorder.md#background-color--fill-color) - [Negrito](properties_Text.md#bold) - [Class](properties_Object.md#css-class) - [Formato de data](properties_Display.md#date-format) - [Tipo de expressão](properties_Object.md#expression-type) - [Fonte](properties_Text.md#font) - [Cor do fonte](properties_Text.md#font-color) - [Dica](properties_Help.md#help-tip) - [Alinhamento horizontal](properties_Text.md#horizontal-alignment) - [Padding horizontal](properties_CoordinatesAndSizing.md#horizontal-padding) - [Italic](properties_Text.md#italic) - [Formato de número](properties_Display.md#number-format) - [Nome do objeto](properties_Object.md#object-name) - [Formato da imagem](properties_Display.md#picture-format) - [Formato do tempo](properties_Display.md#time-format) - [Truncate com ellipsis](properties_Display.md#truncate-with-ellipsis) - [Sublinhado](properties_Text.md#underline) - [Cálculo variável](properties_Object.md#variable-calculation) - [Variável ou Expressão](properties_Object.md#variable-or-expression) - [Alinhamento vertical](properties_Text.md#vertical-alignment) - [Padding](properties_Coordinates_CoordinatesAndSizing.md#vertical-padding) - [Largura](properties_CoordinatesAndSizing.md#width) - [Embalagem de palavras](properties_Display.md#wordwrap)


