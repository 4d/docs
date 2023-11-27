---
id: propertiesDisplay
title: Visualização
---

---

## Formato Alfa

Alpha formats control the way the alphanumeric fields and variables appear when displayed or printed. Segue-se uma lista de formatos fornecidos para campos alfanuméricos:

![](../assets/en/FormObjects/property_alphaFormat.png)

Pode escolher um formato desta lista ou utilizar qualquer formato personalizado. The default list contains formats for some of the most common alpha fields that require formats: US telephone numbers (local and long distance), Social Security numbers, and zip codes. You can also enter a custom format name set in the Filters and formats editor of the tool box. Neste caso, o formato não pode ser modificado nas propriedades do objeto. Any custom formats or filters that you have created are automatically available, preceded by a vertical bar (|).

O sinal de número (#) é o espaço reservado para um formato de exibição alfanumérico. You can include the appropriate dashes, hyphens, spaces, and any other punctuation marks that you want to display. You use the actual punctuation marks you want and the number sign for each character you want to display.

For example, consider a part number with a format such as "RB-1762-1".

O formato alfa seria:

 ##-####-#

Quando o usuário introduz "RB17621", o campo é apresentado:

 RB-1762-1

O campo contém efetivamente "RB17621".

If the user enters more characters than the format allows, 4D displays the last characters. Por exemplo, se o formato é:

 (#######)

e o usuário introduzir "proportion", o campo é apresentado:

 (portion)

O campo contém efetivamente "proportion". 4D accepts and stores the entire entry no matter what the display format. Não se perde nenhuma informação.

#### Gramática JSON

| Nome       | Tipo de dados | Valores possíveis                                                                                |
| ---------- | ------------- | ------------------------------------------------------------------------------------------------ |
| textFormat | string        | "####", "(#####) ### ####", "### ### ### ####", "#### ## ####", "00000", formatos personalizados |

#### Objectos suportados

[Drop-down List](dropdownList_Overview.md) - [Combo Box](comboBox_overview.md) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Footer](listbox_overview.md#list-box-footers)

---

## Formato Data

Os formatos de data controlam como as datas aparecem quando são apresentadas ou impressas. For data entry, you enter dates in the MM/DD/YYYY format, regardless of the display format you have chosen.
> Unlike [Alpha](#alpha-format) and [Number](#number-format) formats, display formats for dates must only be selected among the 4D built-in formats.

A tabela seguinte apresenta as opções disponíveis:

| Nome do formato                 | Cadeia JSON          | Exemplo (sistema americano)       |
| ------------------------------- | -------------------- | --------------------------------- |
| System date short               | systemShort (padrão) | 03/25/20                          |
| System date abbreviated *(1)*   | systemMedium         | Wed, Mar 25, 2020                 |
| System date long                | systemLong           | Quarta-feira, 25 de março de 2020 |
| RFC 822                         | rfc822               | Tue, 25 Mar 2020 22:00:00 GMT     |
| Short Century                   | shortCentury         | 25/03/20 mas 25/04/2032 *(2)*     |
| Internal date long              | long                 | March 25, 2020                    |
| Internal date abbreviated *(1)* | abbreviated          | Mar 25, 2020                      |
| Internal date short             | short                | 03/25/2020                        |
| ISO Date Time *(3)*             | iso8601              | 2020-03-25T00:00:00               |

*(1)* To avoid ambiguity and in accordance with current practice, the abbreviated date formats display "jun" for June and "jul" for July. Esta particularidade só se aplica às versões francesas de 4D.

*(2)* The year is displayed using two digits when it belongs to the interval (1930;2029) otherwise it will be displayed using four digits. This is by default but it can be modified using the [SET DEFAULT CENTURY](https://doc.4d.com/4Dv17R6/4D/17-R6/SET-DEFAULT-CENTURY.301-4311596.en.html) command.

*(3)* The `ISO Date Time` format corresponds to the XML date and time representation standard (ISO8601). It is mainly intended to be used when importing/exporting data in XML format and in Web Services.
> Regardless of the display format, if the year is entered with two digits then 4D assumes the century to be the 21st if the year belongs to the interval (00;29) and the 20th if it belongs to the interval (30;99). This is the default setting but it can be modified using the [SET DEFAULT CENTURY](https://doc.4d.com/4Dv17R6/4D/17-R6/SET-DEFAULT-CENTURY.301-4311596.en.html) command.

#### Gramática JSON

| Nome       | Tipo de dados | Valores possíveis                                                                                                                                                                    |
| ---------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| dateFormat | string        | "systemShort", "systemMedium", "systemLong", "iso8601", "rfc822", "short", "shortCentury", "abbreviated", "long", "blankIfNull" (pode ser combinado com os outros valores possíveis) |

#### Objectos suportados

[Combo Box](comboBox_overview.md) - [Drop-down List](dropdownList_Overview.md) - [Input](input_overview.md) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Footer](listbox_overview.md#list-box-footers)

---

## Formato do número
> Number fields include the Integer, Long integer, Integer 64 bits, Real and Float types.

Number formats control the way numbers appear when displayed or printed. For data entry, you enter only the numbers (including a decimal point or minus sign if necessary), regardless of the display format you have chosen.

4D fornece vários formatos de números padrão.

### Marcadores

In each of the number display formats, the number sign (#), zero (0), caret (^), and asterisk (*) are used as placeholders. You create your own number formats by using one placeholder for each digit you expect to display.

| Placeholder (valores provisórios) | Efeito do zero à esquerda ou à direita |
| --------------------------------- | -------------------------------------- |
| #                                 | Não apresenta nada                     |
| 0                                 | Mostra 0                               |
| ^                                 | Apresenta um espaço (1)                |
| *                                 | Apresenta um asterisco                 |

(1) The caret (^) generates a space character that occupies the same width as a digit in most fonts.

Por exemplo, se quiser exibir números de três dígitos, pode usar o formato ####. If the user enters more digits than the format allows, 4D displays <<< in the field to indicate that more digits were entered than the number of digits specified in the display format.

If the user enters a negative number, the leftmost character is displayed as a minus sign (unless a negative display format has been specified). If ##0 is the format, minus 26 is displayed as –26 and minus 260 is displayed as <<< because the minus sign occupies a placeholder and there are only three placeholders.
> No matter what the display format, 4D accepts and stores the number entered in the field. Não se perde nenhuma informação.

Each placeholder character has a different effect on the display of leading or trailing zeros. A leading zero is a zero that starts a number before the decimal point; a trailing zero is a zero that ends a number after the decimal point.

Suponha que utiliza o formato ##0 para mostrar três dígitos. Se o utilizador não introduzir nada no campo, o campo apresenta 0. Se o usuário introduzir 26, o campo apresenta 26.

### Caracteres separadores

The numeric display formats (except for scientific notations) are automatically based on regional system parameters. 4D replaces the “.” and “,” characters by, respectively, the decimal separator and the thousand separator defined in the operating system. The period and comma are thus considered as placeholder characters, following the example of 0 or #.
> On Windows, when using the decimal separator key of the numeric keypad, 4D makes a distinction depending on the type of field where the cursor is located:
> 
> * in a Real type field, using this key will insert the decimal separator defined in the system,
> * in any other type of field, this key inserts the character associated with the key, usually a period (.) or comma (,).

### Pontos decimais e outros caracteres de visualização

É possível utilizar um ponto decimal num formato de apresentação de números. If you want the decimal to display regardless of whether the user types it in, it must be placed between zeros.

Pode utilizar quaisquer outros caracteres no formato. When used alone, or placed before or after placeholders, the characters always appear. Por exemplo, se utilizar o seguinte formato:

 $##0

a dollar sign always appears because it is placed before the placeholders.

If characters are placed between placeholders, they appear only if digits are displayed on both sides. Por exemplo, se definir o formato:

 ###.##0

o ponto só aparece se o usuário introduzir pelo menos quatro dígitos.

Os espaços são tratados como caracteres nos formatos de apresentação de números.

### Formatos para positivo, negativo e zero

A number display format can have up to three parts allowing you to specify display formats for positive, negative, and zero values. You specify the three parts by separating them with semicolons as shown below:

 Positivo;Negativo;Zero

Não é necessário especificar as três partes do formato. If you use just one part, 4D uses it for all numbers, placing a minus sign in front of negative numbers.

If you use two parts, 4D uses the first part for positive numbers and zero and the second part for negative numbers. If you use three parts, the first is for positive numbers, the second for negative numbers, and the third for zero.
> The third part (zero) is not interpreted and does not accept replacement characters. Se você digitar `###;###;#`, o valor zero será exibido como "#". Por outras palavras, o que é realmente introduzido é o que será apresentado para o valor zero.

Here is an example of a number display format that shows dollar signs and commas, places negative values in parentheses, and does not display zeros:

 $###,##0.00;($###,##0.00);

Notice that the presence of the second semicolon instructs 4D to use nothing to display zero. The following format is similar except that the absence of the second semicolon instructs 4D to use the positive number format for zero:

 $###,##0.00;($###,##0.00)

Neste caso, a indicação de zero seria $0,00.

### Notação científica

If you want to display numbers in scientific notation, use the **ampersand** (&) followed by a number to specify the number of digits you want to display. Por exemplo, o formato:

 &3

apresentaria 759,62 como:

 7.60e+2

The scientific notation format is the only format that will automatically round the displayed number. Note in the example above that the number is rounded up to 7.60e+2 instead of truncating to 7.59e+2.

### Formatos hexadecimais

You can display a number in hexadecimal using the following display formats:

* `&x`: This format displays hexadecimal numbers using the “0xFFFF” format.
* `&$`: This format displays hexadecimal numbers using the “$FFFF” format.

### Notação XML

The `&xml` format will make a number compliant with XML standard rules. In particular, the decimal separator character will be a period "." in all cases, regardless of the system settings.

### Mostrar um número como hora

You can display a number as a time (with a time format) by using `&/` followed by a digit. Time is determined by calculating the number of seconds since midnight that the value represents. O dígito no formato corresponde à ordem em que o formato da hora aparece no menu pendente Formato.

Por exemplo, o formato:

 &/5

corresponde ao 5.º formato de hora no menu pop-up, especificamente a hora AM/PM. Um campo numérico com este formato apresentaria 25000 como:

 6:56 AM

### Exemplos

The following table shows how different formats affect the display of numbers. The three columns — Positive, Negative, and Zero — each show how 1,234.50, –1,234.50, and 0 would be displayed.

| Formato Introduzido                    | Positivo         | Negativo      | Zero                         |
| -------------------------------------- | ---------------- | ------------- | ---------------------------- |
| ###                                    | <<<              | <<<           |                              |
| ####                                   | 1234             | <<<<          |                              |
| #######                                | 1234             | -1234         |                              |
| #####.##                               | 1234.5           | -1234.5       |                              |
| ####0.00                               | 1234.50          | -1234.50      | 0.00                         |
| #####0                                 | 1234             | -1234         | 0                            |
| +#####0;–#####0;0                      | +1234            | -1234         | 0                            |
| #####0DB;#####0CR;0                    | 1234DB           | 1234CR        | 0                            |
| #####0;(#####0)                        | 1234             | (1234)        | 0                            |
| ###,##0                                | 1,234            | -1,234        | 0                            |
| ##,##0.00                              | 1,234.50         | -1,234.50     | 0.00                         |
| \^\^\^\^\^\^\^                  | 1234             | -1234         |                              |
| \^\^\^\^\^\^0                    | 1234             | -1234         | 0                            |
| \^\^\^,\^\^0                      | 1,234            | -1,234        | 0                            |
| \^\^,\^\^0.00                      | 1,234.50         | -1,234.50     | 0.00                         |
| \*\*\*\*\*\*\*           | \*\*\*1234 | \*\*-1234 | \*\*\*\*\*\*\* |
| \*\*\**\*\*0               | \*\*\*1234 | \*\*-1234 | \*\*\*\*\*\*0    |
| \*\*\*,*\*0                  | \*\*1,234    | \*-1,234    | \*\*\*\*\*\*0    |
| \*\*,\*\*0.00                  | \*1,234.50     | -1,234.50     | \*\*\*\*\*0.00     |
| $\*,\*\*0.00;–$\*,\*\*0.00 | $1,234.50        | -$1,234.50    | $\*\*\*\*0.00        |
| $\^\^\^\^0                         | $ 1234           | $–1234        | $    0                       |
| $\^\^\^0;–$\^\^\^0               | $1234            | –$1234        | $   0                        |
| $\^\^\^0 ;($\^\^\^0)             | $1234            | ($1234)       | $   0                        |
| $\^,\^\^0.00 ;($\^,\^\^0.00)     | $1,234.50        | ($1,234.50)   | $    0.00                    |
| &2                                     | 1.2e+3           | -1.2e+3       | 0.0e+0                       |
| &5                                     | 1.23450e+3       | -1.23450e+3   | 0.00000                      |
| &xml                                   | 1234.5           | -1234.5       | 0                            |

#### Gramática JSON

| Nome         | Tipo de dados | Valores possíveis                                                     |
| ------------ | ------------- | --------------------------------------------------------------------- |
| numberFormat | string        | Números (incluindo um ponto decimal ou sinal de menos, se necessário) |

#### Objectos suportados

[Combo Box](comboBox_overview.md) - [Drop-down List](dropdownList_Overview.md) - [Input](input_overview.md) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Footer](listbox_overview.md#list-box-footers) - [Progress Indicators](progressIndicator.md)

---

## Formato imagem

Picture formats control how pictures appear when displayed or printed. For data entry, the user always enters pictures by pasting them from the Clipboard or by drag and drop, regardless of the display format.

As opções de truncagem e escala não afetam a imagem em si. O conteúdo de um campo Imagem é sempre guardado. Only the display on the particular form is affected by the picture display format.

### Escalado para caber

`Gramática JSON: "scaled"`

The **Scaled to fit** format causes 4D to resize the picture to fit the dimensions of the area.

![](../assets/en/FormObjects/property_pictureFormat_ScaledToFit.png)

### Truncado (centrado e não centrado)

`Gramática JSON: "truncatedCenter" / "truncatedTopLeft"`

The **Truncated (centered)** format causes 4D to center the picture in the area and crop any portion that does not fit within the area. 4D corta igualmente de cada borda e da parte superior e inferior.

O formato **Truncado (não centrado)** faz com que 4D coloque o canto superior esquerdo da imagem no canto superior esquerdo da área e recorte qualquer parte que não caiba na área. 4D corta da direita e de baixo para cima.
> Quando o formato da imagem for **Truncado (não centrado)**, é possível adicionar barras de deslocamento à área de entrada.

![](../assets/en/FormObjects/property_pictureFormat_Truncated.png)

### Escalado para caber (proporcional) e Escalado para caber centrado (proporcional)

`Gramática JSON: "proportionalTopLeft" / "proportionalCenter"`

When you use **Scaled to fit (proportional)**, the picture is reduced proportionally on all sides to fit the area created for the picture. The **Scaled to fit centered (proportional)** option does the same, but centers the picture in the picture area.

If the picture is smaller than the area set in the form, it will not be modified. If the picture is bigger than the area set in the form, it is proportionally reduced. Uma vez que é proporcionalmente reduzida, a imagem não aparece distorcida.

If you have applied the **Scaled to fit centered (proportional)** format, the picture is also centered in the area:

![](../assets/en/FormObjects/property_pictureFormat_ScaledProportional.png)

### Replicado

`Gramática JSON: "tiled"`

When the area that contains a picture with the **Replicated** format is enlarged, the picture is not deformed but is replicated as many times as necessary in order to fill the area entirely.

![](../assets/en/FormObjects/property_pictureFormat_Replicated.png)

If the field is reduced to a size smaller than that of the original picture, the picture is truncated (non-centered).

#### Gramática JSON

| Nome          | Tipo de dados | Valores possíveis                                                                                     |
| ------------- | ------------- | ----------------------------------------------------------------------------------------------------- |
| pictureFormat | string        | "truncatedTopLeft", "scaled", "truncatedCenter", "tiled", "proportionalTopLeft", "proportionalCenter" |

#### Objectos suportados

[Input](input_overview.md) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Footer](listbox_overview.md#list-box-footers)

---

## Formato Hora

Os formatos de hora controlam a forma como as horas aparecem quando são apresentadas ou impressas. For data entry, you enter times in the 24-hour HH:MM:SS format or the 12-hour HH:MM:SS AM/PM format, regardless of the display format you have chosen.
> Unlike [Alpha](#alpha-format) and [Number](#number-format) formats, display formats for times must only be selected among the 4D built-in formats.

The table below shows the Time field display formats and gives examples:

| Nome do formato              | Cadeia JSON  | Comentários                                                                                                                                      | Exemplo para 04:30:25          |
| ---------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------ |
| HH:MM:SS                     | hh_mm_ss   |                                                                                                                                                  | 04:30:25                       |
| HH:MM                        | hh_mm        |                                                                                                                                                  | 04:30                          |
| Hour Min Sec                 | HH_MM_SS   |                                                                                                                                                  | 4 horas 30 minutos 25 segundos |
| Hour Min                     | HH_MM        |                                                                                                                                                  | 4 horas 30 minutos             |
| HH:MM AM/PM                  | hh_mm_am   |                                                                                                                                                  | 4:30 a.m.                      |
| MM SS                        | mm_ss        | Hora expressa como uma duração de 00:00:00                                                                                                       | 270:25                         |
| Min Sec                      | MM_SS        | Hora expressa como uma duração de 00:00:00                                                                                                       | 270 minutos 25 segundos        |
| ISO Date Time                | iso8601      | Corresponds to the XML standard for representing time-related data. It is mainly intended to be used when importing/exporting data in XML format | 0000-00-00T04:30:25            |
| System time short            | - (o padrão) | Formato de hora standard definido no sistema                                                                                                     | 04:30:25                       |
| System time long abbreviated | systemMedium | apenas macOS: formato de hora abreviado definido no sistema. <br/>Windows: this format is the same as the System time short format         | 4•30•25 AM                     |
| System time long             | systemLong   | apenas macOS: formato de hora longa definido no sistema. <br/>Windows: this format is the same as the System time short format             | 4:30:25 AM HNEC                |

#### Gramática JSON

| Nome       | Tipo de dados | Valores possíveis                                                                                                                                                                                            |
| ---------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| timeFormat | string        | "systemShort", "systemMedium", "systemLong", "iso8601", "hh_mm_ss", "hh_mm", "hh_mm_am", "mm_ss", "HH_MM_SS", "HH_MM", "MM_SS", "blankIfNull" (pode ser combinado com os outros valores possíveis) |

#### Objectos suportados

[Combo Box](comboBox_overview.md) - [Drop-down List](dropdownList_Overview.md) - [Input](input_overview.md) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Footer](listbox_overview.md#list-box-footers)

---

## Texto quando False/Texto quando True

Quando uma [expressão booleana](properties_Object.md#expression-type) é apresentada como:

* um texto num [objeto de entrada](input_overview.md)
* a ["popup"](properties_Display.md#display-type) in a [list box column](listbox_overview.md#list-box-columns),

... pode selecionar o texto a apresentar para cada valor:

* **Texto quando True** - o texto a ser apresentado quando o valor é "true"
* **Texto quando False** - o texto a ser apresentado quando o valor é "false"

#### Gramática JSON

| Nome          | Tipo de dados | Valores possíveis                                                                |
| ------------- | ------------- | -------------------------------------------------------------------------------- |
| booleanFormat | string        | "\<*textWhenTrue*\>;\<*textWhenFalse*\>", por exemplo, "Assigned;Unassigned" |

#### Objectos suportados

[List Box Column](listbox_overview.md#list-box-columns) - [Input](input_overview.md)

---

## Tipo de exibição

Utilizado para associar um formato de visualização aos dados da coluna. The formats provided depends on the variable type (array type list box) or the data/field type (selection and collection type list boxes).

Boolean and number (numeric or integer) columns can be displayed as check boxes. Neste caso, pode ser definida a propriedade [Título](#title).

As colunas booleanas também podem ser apresentadas como menus pop-up. Neste caso, as propriedades [Text quando False e Text quando True](#text-when-false-text-when-true) devem ser definidas.

#### Gramática JSON

| Nome        | Tipo de dados | Valores possíveis                                  |
| ----------- | ------------- | -------------------------------------------------- |
| controlType | string        | <li>**number columns**: "automatic" (default) or "checkbox"</li><li>**colunas booleanas**: "checkbox" (padrão) ou "popup"</li> |

#### Objectos suportados

[Coluna da List Box](listbox_overview.md#list-box-columns)

---

## Não renderizado

When this property is enabled, the object is not drawn on the form, however it can still be activated.

Em particular, esta propriedade permite implementar botões "invisíveis".  Os botões não renderizados podem ser colocados em cima de objetos gráficos. They remain invisible and do not highlight when clicked, however their action is triggered when they are clicked.

#### Gramática JSON

| Nome    | Tipo de dados | Valores possíveis |
| ------- | ------------- | ----------------- |
| display | boolean       | true, false       |

#### Objectos suportados

[Botão](button_overview.md) - [Lista pendente](dropdownList_Overview.md)

---

## Três Estados

Permite que um objeto de caixa de verificação aceite um terceiro estado. A variável associada à caixa de seleção devolve o valor 2 quando a caixa estiver no terceiro estado.

#### Caixas de verificação de três estados em colunas list box

List box columns with a numeric [data type](properties_Object.md#expression-type) can be displayed as three-states check boxes. Se for selecionado, são apresentados os seguintes valores:

* 0 = caixa não assinalada,
* 1 = caixa marcada,
* 2 (ou qualquer valor >0) = caixa semi-marcada (terceiro estado). Para a introdução de dados, este estado devolve o valor 2.
* -1 = caixa de seleção invisível,
* -2 = caixa desmarcada, não editável,
* -3 = caixa marcada, não pode ser introduzida,
* -4 = caixa semi-marcada, não editável

In this case as well, the [Title](#title) property is also available so that the title of the check box can be entered.

#### Gramática JSON

| Nome       | Tipo de dados | Valores possíveis |
| ---------- | ------------- | ----------------- |
| threeState | boolean       | true, false       |

#### Objectos suportados

[Check box](checkbox_overview.md) - [List Box Column](listbox_overview.md#list-box-columns)

---

## Título

Esta propriedade está disponível para uma coluna list box se:

* the [column type](properties_Object.md#expression-type) is **boolean** and its [display type](properties_Display.md#display-type) is "Check Box"
* the [column type](properties_Object.md#expression-type) is **number** (numeric or integer) and its [display type](properties_Display.md#display-type) is "Three-states Checkbox".

Nesse caso, o título da caixa de seleção pode ser inserido usando essa propriedade.

#### Gramática JSON

| Nome         | Tipo de dados | Valores possíveis                                           |
| ------------ | ------------- | ----------------------------------------------------------- |
| controlTitle | string        | Qualquer etiqueta personalizada para a caixa de verificação |

#### Objectos suportados

[Coluna da List Box](listbox_overview.md#list-box-columns)

---

## Truncar com reticências

Controls the display of values when list box columns are too narrow to show their full contents.

This option is available for columns with any type of contents, except pictures and objects.

* When the property is enabled (default), if the contents of a list box cell exceed the width of the column, they are truncated and an ellipsis is displayed:

 ![](../assets/en/FormObjects/property_truncate1.png)
> A posição das elipses depende do sistema operativo. No exemplo acima (Windows), ele é adicionado no lado direito do texto. No macOS, as reticências são adicionadas no meio do texto.

* When the property is disabled, if the contents of a cell exceed the width of the column, they are simply clipped with no ellipsis added:

 ![](../assets/en/FormObjects/property_truncate2.png)

The Truncate with ellipsis option is enabled by default and can be specified with list boxes of the Array, Selection, or Collection type.

> When applied to Text type columns, the Truncate with ellipsis option is available only if the [Wordwrap](#wordwrap) option is not selected. When the Wordwrap property is selected, extra contents in cells are handled through the word-wrapping features so the Truncate with ellipsis property is not available.

The Truncate with ellipsis property can be applied to Boolean type columns; however, the result differs depending on the [cell format](#display-type):

* Para formatos booleanos do tipo pop-up, as etiquetas são truncadas com uma elipse,
* Para formatos booleanos do tipo caixa de verificação, as etiquetas são sempre cortadas.

#### Gramática JSON

| Nome         | Tipo de dados | Valores possíveis      |
| ------------ | ------------- | ---------------------- |
| truncateMode | string        | "withEllipsis", "none" |

#### Objectos suportados

[List Box Column](listbox_overview.md#list-box-columns) - [List Box Header](listbox_overview.md#list-box-footers)

---

## Visibilidade

This property allows hiding the object in the Application environment.

É possível tratar a propriedade Visibilidade para a maioria dos objetos de formulário. This property is mainly used to simplify dynamic interface development. In this context, it is often necessary to hide objects programatically during the `On load` event of the form then to display certain objects afterwards. In this context, it is often necessary to hide objects programatically during the `On load` event of the form then to display certain objects afterwards. The Visibility property allows inverting this logic by making certain objects invisible by default.

#### Visibilidade automática em formulários lista

In the context of list forms, the Visibility property supports two specific values:

* **If record selected** (JSON name: "selectedRows")
* **If record not selected** (JSON name: "unselectedRows")

This property is only used when drawing objects located in the body of a list form. It tells 4D whether or not to draw the object depending on whether the record being processed is selected/not selected. It allows you to represent a selection of records using visual attributes other than highlight colors:

![](../assets/en/FormObjects/select-row.png)

4D does not take this property into account if the object was hidden using the [`OBJECT SET VISIBLE`](https://doc.4d.com/4dv18/help/command/en/page603.html) command; in this case, the object remains invisible regardless of whether or not the record is selected.

#### Gramática JSON

| Nome         | Tipo de dados | Valores possíveis                                                                       |
| ------------ | ------------- | --------------------------------------------------------------------------------------- |
| visibilidade | string        | "visible", "hidden", "selectedRows" (list form only), "unselectedRows" (list form only) |

#### Objectos suportados

[4D View Pro area](viewProArea_overview.md) - [4D Write Pro area](writeProArea_overview.md) - [Button](button_overview.md) - [Button Grid](buttonGrid_overview.md) - [Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Drop-down List](dropdownList_Overview.md) - [Group Box](groupBox.md) - [Hierarchical List](list_overview.md) - [List Box](listbox_overview.md) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Footer](listbox_overview.md#list-box-footers) - [List Box Header](listbox_overview.md#list-box-headers) - [Picture Button](pictureButton_overview.md) - [Picture Pop-up Menu](picturePopupMenu_overview.md) - [Plug-in Area](pluginArea_overview.md) - [Progress indicator](progressIndicator.md) - [Radio Button](radio_overview.md) - [Spinner](spinner.md) - [Splitter](splitters.md) - [Static Picture](staticPicture.md) - [Stepper](stepper.md) - [Subform](subform_overview.md) - [Tab control](tabControl.md) - [Text Area](text.md) - [Web Area](webArea_overview.md)

---

## Wordwrap

> For [input](input_overview.md) objects, available when the [Multiline](properties_Entry.md#multiline) property is set to "yes" .

Manages the display of contents when it exceeds the width of the object.

#### Marcado para list box/Sim para entrada

`Gramática JSON: "normal"`

When this option is selected, text automatically wraps to the next line whenever its width exceeds that of the column/area, if the column/area height permits it.

* In single-line columns/areas, only the last word that can be displayed entirely is displayed. 4D inserts line returns; it is possible to scroll the contents of the area by pressing the down arrow key.

* Em colunas/áreas com várias linhas, 4D efetua retornos de linha automáticos.

![](../assets/en/FormObjects/wordwrap2.png)

#### Não selecionado para list box/Não para entrada

`Gramática JSON: "none"`

When this option is selected, 4D does not do any automatic line returns and the last word that can be displayed may be truncated. Nas áreas de tipo de texto, são suportadas os retornos de carro:

![](../assets/en/FormObjects/wordwrap3.png)

In list boxes, any text that is too long is truncated and displayed with an ellipse (...). In the following example, the Wordwrap option is **checked for the left column** and **unchecked for the right column**:

![](../assets/en/FormObjects/property_wordwrap1.png)

Note that regardless of the Wordwrap option’s value, the row height is not changed. If the text with line breaks cannot be entirely displayed in the column, it is truncated (without an ellipse). In the case of list boxes displaying just a single row, only the first line of text is displayed:

![](../assets/en/FormObjects/property_wordwrap2.png)

#### Automático para entrada (opção padrão)

`Gramática JSON: "automatic"`

* In single-line areas, words located at the end of lines are truncated and there are no line returns.
* Em áreas com várias linhas, 4D efetua retornos automáticos de linha.

![](../assets/en/FormObjects/wordwrap1.png)

#### Gramática JSON

| Nome     | Tipo de dados | Valores possíveis                                 |
| -------- | ------------- | ------------------------------------------------- |
| wordwrap | string        | "automatic" (exceto list box), "normal", "nenhum" |

#### Objectos suportados

[Input](input_overview.md) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Footer](listbox_overview.md#list-box-footers)
