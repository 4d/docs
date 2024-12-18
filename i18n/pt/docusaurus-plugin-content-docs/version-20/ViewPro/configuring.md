---
id: configuring
title: Configuração das áreas 4D View Pro
---

As propriedades da área 4D View Pro podem ser configuradas utilizando a lista de propriedades. As propriedades da folha de cálculo estão disponíveis através da linguagem.

## Propriedades da área do formulário

Using the area's property list, you can set [4D View Pro object properties](FormObjects/viewProArea_overview.md#supported-properties) such as **Object Name**, [**Variable or Expression**](#4d-view-pro-form-object-variable), **Appearance**, **Action**, and **Events**.

![](../assets/en/ViewPro/vpPropertyList.png)

### Selecção de uma interface utilizador

You can select the interface to use with your 4D View Pro form areas in the **Property List**, under **Appearance**:

![](../assets/en/ViewPro/vpUserInterface.PNG)

> Você também pode usar a [`userInterface`](FormObjects/properties_Appearance.md#user-interface) e [`withFormulaBar`](FormObjects/properties_Appearance.md#show-formula-bar)(apenas com a interface "toolbar") em JSON.

As interfaces permitem modificações básicas e a manipulação de dados. User-defined modifications are saved in the 4D View Pro object when the user saves the document.

#### Fita

![](../assets/en/ViewPro/vpRibbon.png)

#### Barra de ferramentas

Ativar a interface da barra de ferramentas exibe a opção [**Mostrar barra de fórmula**](FormObjects/properties_Appearance.md#show-formula-bar). Quando selecionada, a barra de fórmula fica visível abaixo da interface da barra de ferramentas.

Com barra de fórmula visível:

![](../assets/en/ViewPro/vpToolbar.png)

#### Funcionalidades

Both the Ribbon and the Toolbar interfaces group related features into tabs:

| Tab      | Acções                           | Interface Ribbon | Interface da barra de ferramentas |
| -------- | -------------------------------- |:----------------:|:---------------------------------:|
| File     | Manipulação de ficheiros         |        X         |                                   |
| Inicio   | Aspecto do texto                 |        X         |                 X                 |
| Inserir  | Adicionar itens                  |        X         |                 X                 |
| Fórmulas | Cálculo de fórmulas e biblioteca |        X         |                 X                 |
| Dados    | Manipulação de dados             |        X         |                 X                 |
| Mostrar  | Apresentação visual              |        X         |                 X                 |
| Settings | Presentação da folha             |        X         |                                   |

## Eventos formulário

Os seguintes eventos de formulário estão disponíveis na lista de propriedades para as áreas 4D View Pro.

Some of the events are standard form events (available to all active objects) and some are specific 4D View Pro form events. Some standard form events provide extended information in the object returned by the [`FORM Event`](https://doc.4d.com/4dv19/help/command/en/page1606.html) command when they are generated for 4D View Pro areas. The following table shows which events are standard and which are specific or provide additional information to 4D View Pro areas:

| Eventos 4D ‘standard’                           | Eventos 4D View Pro específicos e alargados           |
| ----------------------------------------------- | ----------------------------------------------------- |
| [On Load](../Events/onLoad.md)                  | [On VP Ready](../Events/onVpReady.md)                 |
| [On Getting Focus](../Events/onGettingFocus.md) | [On Clicked](../Events/onClicked.md)                  |
| [On Losing Focus](../Events/onLosingFocus.md)   | [On Double Clicked](../Events/onDoubleClicked.md)     |
| [On Unload](../Events/onUnload.md)              | [On Header Click](../Events/onHeaderClick.md)         |
|                                                 | [On After Edit](../Events/onAfterEdit.md)             |
|                                                 | [On Selection Change](../Events/onSelectionChange.md) |
|                                                 | [On Column Resize](../Events/onColumnResize.md)       |
|                                                 | [On Row Resize](../Events/onRowResize.md)             |
|                                                 | [On VP Range Changed](../Events/onVpRangeChanged.md)  |

## Opções folha

The 4D View Pro sheet options object allows you to control various options of your 4D View Pro areas. Este objeto é tratado pelos seguintes comandos:

* [VP SET SHEET OPTIONS](method-list.md#vp-set-sheet-options)
* [VP Get sheet options](method-list.md#vp-get-sheet-options)

### Aspecto da folha

| Propriedade          |                        | Tipo          | Descrição                                                                                                                                                                                                                                                                                                              |
| -------------------- | ---------------------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| allowCellOverflow    |                        | boolean       | Especifica se os dados podem transbordar para células vazias adjacentes.                                                                                                                                                                                                                                               |
| sheetTabColor        |                        | string        | A color string used to represent the sheet tab color, such as "red", "#FFFF00", "rgb(255,0,0)", "Accent 5", and so on.                                                                                                                                                                                                 |
| frozenlineColor      |                        | string        | A color string used to represent the frozen line color, such as "red", "#FFFF00", "rgb(255,0,0)", "Accent 5", and so on.                                                                                                                                                                                               |
| clipBoardOptions     |                        | inteiro longo | A opção de área de transferência. Valores disponibles: `vk clipboard paste options all`, `vk clipboard paste options formatting`, `vk clipboard paste options formulas`, `vk clipboard paste options formulas and formatting`, `vk clipboard paste options values`, `vk clipboard paste options values and formatting` |
| gridline             |                        | object        | As opções da linha de grade.                                                                                                                                                                                                                                                                                           |
|                      | color                  | string        | A color string used to represent the grid line color, such as "red", "#FFFF00", "rgb(255,0,0)", "Accent 5", and so on.                                                                                                                                                                                                 |
|                      | showVerticalGridline   | boolean       | Especifica se a linha de grelha vertical deve ser mostrada.                                                                                                                                                                                                                                                            |
|                      | showHorizontalGridline | boolean       | Especifica se a linha de grelha horizontal deve ser mostrada.                                                                                                                                                                                                                                                          |
| rowHeaderVisible     |                        | boolean       | Especifica se o cabeçalho da linha é visível.                                                                                                                                                                                                                                                                          |
| colHeaderVisible     |                        | boolean       | Especifica se o cabeçalho da coluna é visível.                                                                                                                                                                                                                                                                         |
| rowHeaderAutoText    |                        | inteiro longo | Specifies whether the row header displays letters or numbers or is blank. Valores disponíveis: `vk header auto text blank`, `vk header auto text letters`, `vk header auto text numbers`                                                                                                                               |
| colHeaderAutoText    |                        | inteiro longo | Specifies whether the column header displays letters or numbers or is blank. Valores disponíveis: `vk header auto text blank`, `vk header auto text letters`, `vk header auto text numbers`                                                                                                                            |
| selectionBackColor   |                        | string        | A cor de fundo da seleção para a folha. (formato RGBA preferido)                                                                                                                                                                                                                                                       |
| selectionBorderColor |                        | string        | A cor do contorno da seleção para a folha.                                                                                                                                                                                                                                                                             |
| sheetAreaOffset      |                        | object        | As opções de sheetAreaOffset.                                                                                                                                                                                                                                                                                          |
|                      | left                   | inteiro longo | O deslocamento à esquerda da folha em relação ao host.                                                                                                                                                                                                                                                                 |
|                      | top                    | inteiro longo | O deslocamento superior da folha em relação ao host.                                                                                                                                                                                                                                                                   |
> Todas as propriedades são opcionais.

### Protecção da folha

To lock the whole sheet, you only need to set the *isProtected* property to **true**. You can then unlock cells individually by setting the [locked](#layout) cell style property.

| Propriedade       |                          | Tipo    | Descrição                                                                                                           |
| ----------------- | ------------------------ | ------- | ------------------------------------------------------------------------------------------------------------------- |
| isProtected       |                          | boolean | Specifies whether cells on this sheet that are marked as protected cannot be edited.                                |
| protectionOptions |                          | object  | Um valor que indica os elementos que os usuários podem modificar. Se null: o parâmetro protectionOptions é reposto. |
|                   | allowSelectLockedCells   | boolean | Especifica se o usuário pode selecionar células bloqueadas, opcional. True por defeito.                             |
|                   | allowSelectUnlockedCells | boolean | Especifica se o usuário pode selecionar células desbloqueadas, opcional. True por defeito.                          |
|                   | allowSort                | boolean | Especifica se o usuário pode ordenar intervalos, opcional. Padrão é falso.                                          |
|                   | allowFilter              | boolean | Especifica se o usuário pode filtrar intervalos, opcional. Padrão é falso.                                          |
|                   | allowEditObjects         | boolean | Especifica se o usuário pode editar objetos flutuantes, opcional. Padrão é falso.                                   |
|                   | allowResizeRows          | boolean | Especifica se o usuário pode redimensionar as linhas, opcional. Padrão é falso.                                     |
|                   | allowResizeColumns       | boolean | Especifica se o usuário pode redimensionar colunas, opcional. Padrão é falso.                                       |
|                   | allowDragInsertRows      | boolean | Specifies whether the user can perform the drag operation to insert rows, optional. Padrão é falso.                 |
|                   | allowDragInsertColumns   | boolean | Specifies whether the user can perform the drag operation to insert columns, optional. Padrão é falso.              |
|                   | allowInsertRows          | boolean | Especifica se o usuário pode inserir linhas, opcional. Padrão é falso.                                              |
|                   | allowInsertColumns       | boolean | Especifica se o usuário pode inserir colunas, opcional. Padrão é falso.                                             |
|                   | allowDeleteRows          | boolean | Especifica se o usuário pode eliminar linhas, opcional. Padrão é falso.                                             |
|                   | allowDeleteColumns       | boolean | Especifica se o usuário pode eliminar colunas, opcional. Padrão é falso.                                            |
> Todas as propriedades são opcionais.

## Formato das células

Defining a format pattern ensures that the content of your 4D View Pro documents is displayed the way you intended. Formats can be set using the selected 4D View Pro [interface](#selecting-a-user-interface), or using the [VP SET VALUE](method-list.md#vp-set-value) or [VP SET NUM VALUE](method-list.md#vp-set-num-value) methods.

4D View Pro has built-in formats for numbers, dates, times, and text, but you can also create your own patterns to format the contents of cells using special characters and codes.

For example, when using the [VP SET VALUE](method-list.md#vp-set-value) or [VP SET NUM VALUE](method-list.md#vp-set-num-value) methods to enter amounts in an invoice, you may want the currency symbols ($, €, ¥, etc.) to be aligned regardless of the space required by the number (i.e., whether the amount is $5.00 or $5,000.00). Você poderia usar caracteres de formatação e especificar o padrão _($* #,##0.00_) que exibiria os valores conforme mostrado:

![](../assets/en/ViewPro/apx_vpCellFormat1.PNG)

Note that when creating your own format patterns, only the display of the data is modified. O valor dos dados mantém-se inalterado.

### Formatos número e texto

Number formats apply to all number types (e.g., positive, negative, and zeros).

| Caracteres | Descrição                                                                                                                                                                                                                          | Exemplo                                                                                                                                    |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| 0          | Marcador de posição mostrando zeros.                                                                                                                                                                                               | #.00 mostrará 1.1 como 1.10                                                                                                                |
| .          | Exibe um ponto decimal                                                                                                                                                                                                             | 0.00 mostrará 1999 como 1999.00                                                                                                            |
| ,          | Mostra o separador de milhares num número. Thousands are separated by commas if the format contains a comma enclosed by number signs "#" or by zeros. Uma vírgula após um marcador de posição de dígito escala o número por 1.000. | #,0 mostrará 12200000 como 12,200,000                                                                                                      |
| \_       | Salta a largura do carácter seguinte.                                                                                                                                                                                              | Usually used in combination with parentheses to add left and right indents, \_( and _) respectively.                                     |
| @          | Formatador de texto. Aplica o formato a todo o texto da célula                                                                                                                                                                     | "\[Red]@" aplica a cor de letra vermelha aos valores de texto.                                                                            |
| *          | Repete o carácter seguinte para preencher a largura da coluna.                                                                                                                                                                     | 0*- incluirá traços suficientes após um número para preencher a célula, enquanto *0 antes de qualquer formato incluirá zeros à esquerda. |
| " "        | Exibe o texto dentro das aspas sem interpretá-lo.                                                                                                                                                                                  | "8%" será exibido como: 8%                                                                                                                 |
| %          | Mostra os números como uma percentagem de 100.                                                                                                                                                                                     | 8% será exibido como 0,08                                                                                                                  |
| \#       | Espaço reservado para dígitos que não apresenta zeros extra. If a number has more digits to the right of the decimal than there are placeholders, the number is rounded up.                                                        | #.# mostrará 1.54 como 1.5                                                                                                                 |
| ?          | Digit placeholder that leaves space for extra zeros, but does not display them. Normalmente utilizado para alinhar números pelo ponto decimal.                                                                                     | $?? displays a maximum of 2 decimals and causes dollar signs to line up for varying amounts.                                               |
| \         | Exibe o caractere seguinte.                                                                                                                                                                                                        | #.00\? mostrará 123 como 123.00?                                                                                                          |
| /          | Quando utilizado com números, apresenta-os como fracções. Quando utilizado com códigos de texto, data ou hora, é apresentado "tal e qual".                                                                                         | #/# mostrará .75 como 3/4                                                                                                                  |
| \[ ]      | Cria formatos condicionais.                                                                                                                                                                                                        | \[>100]\[GREEN]#,##0;\[`<=-100`]\[YELLOW]#,##0;\[BLUE]#,##0                                                                        |
| E          | Formato notação científica.                                                                                                                                                                                                        | #E+# - mostrará 1.500.500 como 2E+6                                                                                                        |
| \[color]  | Formata o texto ou número na cor especificada                                                                                                                                                                                      | \[Green]###.##\[Red]-###.###                                                                                                             |

#### Exemplo

```4d
//Set the cell value as $125,571.35 VP SET VALUE(VP Cell("ViewProArea";3;2);New object("value";125571.35;"format";"_($* #,##0.00_)")
```

### Formatos data e hora

4D View Pro provides the following constants for ISO 8601 date and time patterns:

| Parâmetros                                | Valor                                | Comentário                                                                                                                                                            |
| ----------------------------------------- | ------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `vk pattern full date time`               | "*fullDateTimePattern*"              | ISO 8601 format for the full date and time in current localization.USA default pattern: "dddd, dd MMMM yyyy HH:mm:ss"                                                 |
| `vk pattern long date`                    | "*longDatePattern*"                  | ISO 8601 format for the full date in current localization.USA default pattern: "dddd, dd MMMM yyyy"                                                                   |
| `vk pattern long time`                    | "*longTimePattern*"                  | ISO 8601 format for the time in current localization.USA default pattern: "HH:mm:ss"                                                                                  |
| `vk pattern month day`                    | "*monthDayPattern*"                  | ISO 8601 format for the month and day in current localization.USA default pattern: "MMMM dd"                                                                          |
| `vk pattern short date`                   | "*shortDatePattern*"                 | Abbreviated ISO 8601 format for the date in current localization.USA default pattern: "MM/dd/yyyy"                                                                    |
| `vk pattern short time`                   | "*shortTimePattern*"                 | Abbreviated ISO 8601 format for the time in current localization.USA default pattern: "HH:mm"                                                                         |
| `vk pattern sortable date time`           | "*sortableDateTimePattern*"          | ISO 8601 format for the date and time in current localization which can be sorted.USA default pattern: "yyyy\'-\'MM\'-\'dd\'T\'HH\':\'mm\':\'ss"            |
| `vk pattern universal sortable date time` | "*universalSortableDateTimePattern*" | ISO 8601 format for the date and time in current localization using UTC which can be sorted.USA default pattern: "yyyy\'-\'MM\'-\'dd HH\':\'mm\':\'ss\'Z\'" |
| `vk pattern year month`                   | "*yearMonthPattern*"                 | ISO 8601 format for the month and year in current localization.USA default pattern: "yyyy MMMM"                                                                       |

#### Exemplo

```4d
//Set the cell value as specific date and time VP SET VALUE(VP Cell("ViewProArea";3;9);New object("value";!2024-12-18!);"time";?14:30:10?;"format";vk pattern full date time))
```

### Formatos data e hora personalizados

To create your own date and time patterns, in your current localization, you can use combinations of the following codes:

|      | Código<br/>(não sensível a maiúsculas e minúsculas) | Descrição                                                      | Exemplo              |
| ---- | --------------------------------------------------------- | -------------------------------------------------------------- | -------------------- |
| Date |                                                           |                                                                | (January 1, 2019)    |
|      | m                                                         | Número do mês sem zero à esquerda                              | 1                    |
|      | mm                                                        | Número do mês com zero à esquerda                              | 01                   |
|      | mmm                                                       | Nome do mês, abreviado                                         | Jan                  |
|      | mmmm                                                      | Nome do mês, long                                              | January              |
|      | d                                                         | Número do dia sem zero à esquerda                              | 1                    |
|      | dd                                                        | Número do dia com zero à esquerda                              | 01                   |
|      | ddd                                                       | Dia da semana, curto                                           | Tue                  |
|      | dddd                                                      | Dia da semana, longo                                           | Tuesday              |
|      | yy                                                        | Ano, breve                                                     | 19                   |
|      | yyyy                                                      | Ano, longo                                                     | 2019                 |
| Hora |                                                           |                                                                | (2:03:05 PM)         |
|      | h                                                         | Hora sem zero à esquerda. 0-23                                 | 2                    |
|      | hh                                                        | Hora com zero à esquerda. 00-23                                | 02                   |
|      | m                                                         | Minutos sem zero à esquerda. 0-59                              | 3                    |
|      | mm                                                        | Minutos com zero à esquerda. 00-59                             | 03                   |
|      | s                                                         | Segundos sem zero à esquerda. 0-59                             | 5                    |
|      | ss                                                        | Segundos com zero à esquerda. 00-59                            | 05                   |
|      | \[h]                                                     | Tempo decorrido em horas                                       | 14 (pode exceder 24) |
|      | \[mm]                                                    | Tempo decorrido em minutos                                     | 843                  |
|      | \[ss]                                                    | Tempo decorrido em segundos                                    | 50585                |
|      | AM/PM                                                     | Períodos do dia. Se omitido, utiliza-se o formato de 24 horas. | PM                   |
> O código "m" é interpretado de acordo com sua posição no padrão. If it's immediately after 'h' or 'hh' or immediately before 's' or 'ss', it will be interpreted as minutes, otherwise it will be interpreted as months.

### Símbolos adicionais

In addition to the special characters and codes described in the previous sections, there are additional characters and symbols that can be used in your format patterns. These additional characters and symbols do not require a \ or "" and do not impact the interpretation of the format pattern. Aparecem "tal como estão" no padrão.

| Caracteres  | Descrição                                                                    | Exemplo              |
| ----------- | ---------------------------------------------------------------------------- | -------------------- |
| + e -       | Sinais mais e menos                                                          | ### + ### = ###,### |
| ( )         | Parênteses esquerdo e direito                                                | (-###.##)            |
| :           | Dois pontos                                                                  | hh:mm:ss             |
| ^           | Caret                                                                        | #\^#                |
| '           | Apóstrofe                                                                    | '######              |
| { }         | Parêntesis enrolados                                                         | {###,###,###}        |
| `< >` | Sinais de menor e maior que                                                  | ## >##              |
| =           | Sinal igual                                                                  | #+#=##               |
| /           | Barrada de frente. Quando utilizado com números, apresenta-os como fracções. | mm/dd/yyyy           |
| !           | Ponto de exclamação                                                          | $###.00!             |
| &           | Ampersand                                                                    | "Hello" & "Welcome"  |
| ~           | Tilde                                                                        | ~##                  |
|             | Carácter de espaço                                                           |                      |
| €           | Euro                                                                         | €###.00              |
| £           | Libra esterlina                                                              | £###.00              |
| ¥           | Iene japonês                                                                 | ¥###.00              |
| $           | Sinal de dólar                                                               | $###.00              |
| ¢           | Sinal de cêntimo                                                             | .00¢                 |

## Atributos de impressão

4D View Pro print attributes allow you to control all aspects of printing 4D View Pro areas. Esses atributos são tratados pelos seguintes comandos:

* [VP SET PRINT INFO](method-list.md#vp-set-print-info)
* [VP Get print info](method-list.md#vp-get-print-info)

### Colunas / Linhas

Column and row attributes are used to specify the beginning, end, and repetition of columns and rows.

| Propriedade       | Tipo          | Descrição                                                                                                               |
| ----------------- | ------------- | ----------------------------------------------------------------------------------------------------------------------- |
| columnEnd         | inteiro longo | A última coluna a imprimir num intervalo de células. Valor padrão = -1 (todas as colunas)                               |
| columnStart       | inteiro longo | A primeira coluna a imprimir num intervalo de células. Valor padrão = -1 (todas as colunas)                             |
| repeatColumnEnd   | inteiro longo | A última coluna de um intervalo de colunas a imprimir à esquerda de cada página. Valor padrão = -1 (todas as colunas)   |
| repeatColumnStart | inteiro longo | A primeira coluna de um intervalo de colunas a imprimir à esquerda de cada página. Valor padrão = -1 (todas as colunas) |
| repeatRowEnd      | inteiro longo | A última linha de um intervalo de linhas a imprimir no topo de cada página. Valor padrão = -1 (todas as linhas)         |
| repeatRowStart    | inteiro longo | A primeira linha de um intervalo de linhas a imprimir no topo de cada página. Valor padrão = -1 (todas as linhas)       |
| rowEnd            | inteiro longo | A última linha a imprimir num intervalo de células. Valor padrão = -1 (todas as linhas)                                 |
| rowStart          | inteiro longo | A primeira linha a imprimir num intervalo de células. Valor padrão = -1 (todas as linhas)                               |

### Cabeçalhos / Rodapés

Header and footer attributes are used to specify text or images in the left, right, and center header/footer sections.

| Propriedade       | Tipo                 | Descrição                                                        |
| ----------------- | -------------------- | ---------------------------------------------------------------- |
| footerCenter      | text                 | O texto e o formato do rodapé central nas páginas impressas.     |
| footerCenterImage | picture &#124; text* | A imagem para a secção central do rodapé.                        |
| footerLeft        | text                 | O texto e o formato do rodapé esquerdo nas páginas impressas.    |
| footerLeftImage   | picture &#124; text* | A imagem para a secção esquerda do rodapé.                       |
| footerRight       | text                 | O texto e o formato do rodapé direito nas páginas impressas.     |
| footerRightImage  | picture &#124; text* | A imagem para a secção direita do rodapé.                        |
| headerCenter      | text                 | O texto e o formato do cabeçalho central nas páginas impressas.  |
| headerCenterImage | picture &#124; text* | A imagem para a secção central do cabeçalho.                     |
| headerLeft        | text                 | O texto e o formato do cabeçalho esquerdo nas páginas impressas. |
| headerLeftImage   | picture &#124; text* | A imagem para a secção esquerda do cabeçalho.                    |
| headerRight       | text                 | O texto e o formato do cabeçalho direito nas páginas impressas.  |
| headerRightImage  | picture &#124; text* | A imagem para a secção direita do cabeçalho.                     |

\* Se estiver usando o tipo de texto, passe o caminho do arquivo (absoluto ou relativo) da imagem. If you pass a relative path, the file should be located next to the database structure file. No Windows, a extensão do ficheiro deve ser indicada. No matter the type used to set an image, the image itself (not a reference) is stored in the 4D View Pro area and is returned by [VP Get print info](method-list.md#vp-get-print-info).

### Caracteres especiais

The following special characters allow the automatic addition or formatting of information in the header and footer when the 4D View Pro area is printed.

| Caracteres | Descrição                       | Exemplo                                                                | Resultados                                           |
| ---------- | ------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------- |
| &          | Carácter de escape              | (ver exemplos abaixo)                                                  |                                                      |
| P          | Página actual                   | printInfo.headerLeft:="This is page &P."                               | Esta é a página 5.|                                  |
| N          | Contagem de páginas             | printInfo.headerLeft:="Existem &N páginas."                            | Existem 10 páginas.                                  |
| D          | Data atual (formato yyyy/mm/dd) | printInfo.headerLeft:="É &D."                                          | Estamos em 2015/6/19.                                |
| T          | Hora actual                     | printInfo.headerLeft:="É &T."                                          | São 16:30:36.                                        |
| G          | Imagem                          | printInfo.headerLeftImage:=smiley<br/>printInfo.headerLeft:="&G" | ![](../assets/en/ViewPro/apx_vpPrintAttributes1.PNG) |
| S          | Riscado                         | printInfo.headerLeft:="&SThis is text."                                | ~Isto é texto.~                                      |
| U          | Sublinhado                      | printInfo.headerLeft:="&UThis is text."                                | Isto é texto. (Sublinhado)                           |
| B          | Negrito                         | printInfo.headerLeft:="&BThis is text."                                | **Isto é texto.**                                    |
| I          | Itálico                         | printInfo.headerLeft:="&IThis is text."                                | *Isto é texto.*                                      |
| "          | Prefixo do tipo de letra        | printInfo.headerLeft:="&\"Lucida Console\"&14This is text."          | ![](../assets/en/ViewPro/apx_vpPrintAttributes2.PNG) |
| K          | Prefixo da cor do texto         | printInfo.headerLeft:="&KFF0000Isto é texto."                          | Este é o texto (a vermelho).                         |
| F          | Nome do Workbook                | printInfo.headerLeft:="&F"                                             | 2019 Monthly Revenue Forecasts                       |
| A          | Nome da folha de cálculo        | printInfo.headerLeft:="&A"                                             | June 2019 revenue forecast                           |

### Margens

Margin attributes are used to specify the 4D View Pro area margins for printing. Expresso em centenas de polegada.

| Propriedade |         | Tipo          | Descrição                                                             |
| ----------- | ------- | ------------- | --------------------------------------------------------------------- |
| margin      |         | object        | As margens de impressão                                               |
|             | top     | inteiro longo | Margem superior, em centésimos de polegada. Valor padrão = 75         |
|             | bottom  | inteiro longo | Margem inferior, em centésimos de polegada. Valor padrão = 75         |
|             | left    | inteiro longo | Margem esquerda, em centésimos de polegada. Valor padrão = 70         |
|             | direita | inteiro longo | Margem direita, em centésimos de polegada. Valor padrão = 70          |
|             | header  | inteiro longo | Deslocação do cabeçalho, em centésimos de polegada. Valor padrão = 30 |
|             | footer  | inteiro longo | Deslocamento do rodapé, em centésimos de polegada. Valor padrão = 30  |

### Orientação

Os atributos de orientação são utilizados para especificar a direcção da disposição da página impressa.
> Este atributo define apenas as informações de renderização.

| Propriedade | Tipo          | Descrição                                                                                                                       |
| ----------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| orientation | inteiro longo | Orientação da página. Valores disponíveis: `vk print page orientation landscape`, `vk print page orientation portrait` (padrão) |

### Página

Os atributos de página são utilizados para especificar as definições gerais de impressão de documentos.

| Propriedade     | Tipo          | Descrição                                                                                                                                                                                                 |
| --------------- | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| blackAndWhite   | boolean       | Impressão apenas em preto e branco. <p>Valor padrão = false</p><p>**Nota**: os PDFs não são afetados por este atributo. As cores nos PDFs mantêm-se.</p>                                                                                                                     |
| centering       | inteiro longo | A forma como o conteúdo é centrado na página impressa. Valores disponíveis: `vk print centering both`, `vk print centering horizontal`, `vk print centering none` (padrão), `vk print centering vertical` |
| firstPageNumber | inteiro longo | The page number to print on the first page. Default value = 1                                                                                                                                             |
| pageOrder       | inteiro longo | As páginas do pedido são impressas. Valores disponíveis: `vk print page order auto` (default), `vk print page order down then over`, `vk print page order over then down`.                                |
| pageRange       | text          | O intervalo de páginas para impressão                                                                                                                                                                     |
| qualityFactor   | inteiro longo | O fator de qualidade para impressão (1 a 8).  The higher the quality factor, the better the printing quality, however printing performance may be affected.<p>Valor padrão = 2</p>                      |
| useMax          | boolean       | Apenas as colunas e linhas com dados são impressas.<p>Valor padrão = true</p>                                                                                                                              |
| zoomFactor      | real          | O valor para ampliar ou reduzir a página impressa.<p>Valor padrão = 1</p>                                                                                                                               |

### Tamanho de papel

Paper size attributes are used to specify the dimensions or model of paper to use for printing. Existem duas formas de definir o tamanho do papel:

* Tamanho personalizado - atributos de altura e largura
* Tamanho normal - atributo kind

| Propriedade |        | Tipo          | Descrição                                                                                                       |
| ----------- | ------ | ------------- | --------------------------------------------------------------------------------------------------------------- |
| paperSize   |        | object        | Paper dimensions (height, width) or specific format (kind) for printing.                                        |
|             | height | inteiro longo | Altura do papel, em centésimos de polegada.                                                                     |
|             | width  | inteiro longo | Largura do papel, em centésimos de polegada.                                                                    |
|             | kind   | text          | Name of standard paper size (e.g., A2, A4, legal, etc.) returned by `Get Print Option`. Valor padrão = "letter" |

* If the paper size is specified using the `height` and `width` properties,  [`VP Get print info`](./method-list.md#vp-get-print-info) returns a paper size with `custom` as value for `kind`.

* If you set the paper size using the `kind` property, you can use either:
  * um dos formatos da [lista de formatos do SpreadJS](https://www.grapecity.com/spreadjs/docs/latest/online/SpreadJS~GC.Spread.Sheets.Print.PaperKind.html)
  * um dos formatos retornados pelo comando [`PRINT OPTION VALUES`](https://doc.4d.com/4dv19/help/command/en/page785.html). In that case, [`VP Get print info`](./method-list.md#vp-get-print-info) returns the corresponding format with the height and width.

### Escala

Os atributos de escala são usados para especificar a otimização e ajustes de impressão.

| Propriedade    | Tipo          | Descrição                                                                                                       |
| -------------- | ------------- | --------------------------------------------------------------------------------------------------------------- |
| bestFitColumns | boolean       | A largura da coluna é ajustada para se adequar à maior largura de texto para impressão. Valor padrão = "false"  |
| bestFitRows    | boolean       | A altura da linha é ajustada para se adequar à altura do texto mais alto para impressão. Valor padrão = "false" |
| fitPagesTall   | inteiro longo | The number of vertical pages (portrait orientation) to check when optimizing printing. Valor padrão = -1        |
| fitPagesWide   | inteiro longo | The number of horizontal pages (landscape orientation) to check when optimizing printing. Valor padrão = -1     |

### Mostrar / Esconder

Show / Hide attributes are used to specify the visibility (printing) of 4D View Pro area elements.

| Propriedade      | Tipo          | Descrição                                                                                                                                                                                            |
| ---------------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| showBorder       | boolean       | Prints the outline border. Default value = "true"                                                                                                                                                    |
| showColumnHeader | inteiro longo | Parâmetros de impressão do cabeçalho da coluna. Valores disponíveis: `vk print visibility hide`, `vk print visibility inherit` (padrão), `vk print visibility show`, `vk print visibility show once` |
| showGridLine     | boolean       | Imprime as linhas de grade. Valor padrão = "false"                                                                                                                                                   |
| showRowHeader    | inteiro longo | Parâmetros de impressão de cabeçalhos de linha. Valores disponíveis: `vk print visibility hide`, `vk print visibility inherit` (padrão), `vk print visibility show`, `vk print visibility show once` |

### Marca de água

Watermark attributes are used to superimpose text or an image onto the 4D View Pro area.

| Propriedade   |                | Tipo                 | Descrição                                                                                                                                                                                  |
| ------------- | -------------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| marca de água |                | collection           | Coleção de parâmetros de marcas de água.  Valor padrão: undefined                                                                                                                          |
|               | \[ ].height   | inteiro longo        | A altura do texto/imagem da marca de água.                                                                                                                                                 |
|               | \[ ].imageSrc | picture &#124; text* | O texto/imagem da marca de água.                                                                                                                                                           |
|               | \[ ].page     | text                 | A(s) página(s) onde a marca de água é impressa. Para todas as páginas: "all". Para páginas específicas: números de página ou intervalos de páginas separados por vírgulas. Ex.: "1,3,5-12" |
|               | \[ ].width    | inteiro longo        | A largura do texto/imagem da marca de água.                                                                                                                                                |
|               | \[ ].x        | inteiro longo        | The horizontal coordinate of the top left point of the watermark text / image.                                                                                                             |
|               | \[ ].y        | inteiro longo        | The vertical coordinate of the top left point of the watermark text / image.                                                                                                               |

\* Se estiver usando o tipo de texto, passe o caminho do arquivo (absoluto ou relativo) da imagem. If you pass a relative path, the file should be located next to the database structure file. No Windows, a extensão do ficheiro deve ser indicada. No matter the type used to set an image, the image itself (not a reference) is stored in the 4D View Pro area and is returned by [VP Get print info](method-list.md#vp-get-print-info).

## Objetos Estilo

4D View Pro style objects and style sheets allow you to control the graphical aspects and the look of your 4D View Pro documents.

### Objectos de estilo & Folhas de estilo

Os objetos estilo contêm os parâmetros de estilo. Podem ser utilizados numa folha de estilo ou por conta própria. Style objects can also be used in addition to a style sheet so that different settings can be specified for individual cell ranges without affecting the rest of the document. You can use style objects directly with the [VP SET CELL STYLE](method-list.md#vp-set-cell-style) and [VP SET DEFAULT STYLE](method-list.md#vp-set-default-style) commands. You can also use style objects when defining custom table themes using the [VP SET TABLE THEME](method-list.md#vp-set-table-theme) or [VP CREATE TABLE](method-list.md#vp-create-table) commands.

A **style sheet** groups together a combination of properties in a style object to specify the look of all of the cells in your 4D View Pro documents. Style sheets saved with the document can be used to set the properties for a single sheet, multiple sheets, or an entire workbook. When created, a 4D View Pro style sheet is given a name which is saved within the style sheet in the "name" property. This allows a style sheet to be easily used and, if thoughtfully selected, can facilitate its identification and purpose (e.g., Letterhead\_internal, Letterhead_external).

Style sheets are created with the [VP ADD STYLESHEET](method-list.md#vp-add-stylesheet) command and applied with the the [VP SET DEFAULT STYLE](method-list.md#vp-set-default-style) or [VP SET CELL STYLE](method-list.md#vp-set-cell-style) commands. You can  remove a style sheet with the [VP REMOVE STYLESHEET](method-list.md#vp-remove-stylesheet) command.

The [VP Get stylesheet](method-list.md#vp-get-stylesheet) command can be used to return the style object of a single style sheet or you can use the [VP Get stylesheets](method-list.md#vp-get-stylesheets) command to retrieve a collection of style objects for multiple style sheets.

### Propriedades do objecto de estilo

Exemplo:

```4d
 $style:=New object
 $style.hAlign:=vk horizontal align left
 $style.font:="12pt papyrus"
 $style.backColor:="#E6E6FA" //cor púrpura claro

 VP SET DEFAULT STYLE("myDoc";$style)
```

#### Fundo & Primeiro plano

| Propriedade           | Tipo          | Descrição                                | Valores possíveis                                                                                                                                                                                                                                                                                                                                                                                    |
| --------------------- | ------------- | ---------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| backColor             | text          | Define a cor do fundo.                   | Sintaxe da cor CSS "#rrggbb" (sintaxe preferencial), sintaxe da cor CSS "rgb(r,g,b)" (sintaxe alternativa), nome da cor CSS (sintaxe alternativa)                                                                                                                                                                                                                                                    |
| backgroundImage       | picture, text | Especifica uma imagem de fundo.          | Can be specified directly or via the image path (full path or file name only). If the file name only is used, the file must be located next to the database structure file. Independentemente da configuração (imagem ou texto), a imagem é salva com o documento. Isto pode afetar o tamanho de um documento se a imagem for grande. Nota para o Windows: a extensão do ficheiro deve ser incluída. |
| backgroundImageLayout | inteiro longo | Define o esquema para a imagem de fundo. | `vk image layout center`, `vk image layout none`, `vk image layout stretch`, `vk image layout zoom`                                                                                                                                                                                                                                                                                                  |
| foreColor             | text          | Define a cor do primeiro plano.          | Sintaxe da cor CSS "#rrggbb" (sintaxe preferencial), sintaxe da cor CSS "rgb(r,g,b)" (sintaxe alternativa), nome da cor CSS (sintaxe alternativa)                                                                                                                                                                                                                                                    |

#### Bordas

| Propriedade                                                                |       | Tipo          | Descrição                                                                        | Valores possíveis                                                                                                                                                                                                                                                                                                                                                |
| -------------------------------------------------------------------------- | ----- | ------------- | -------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| borderBottom, borderLeft, borderRight, borderTop, diagonalDown, diagonalUp |       | object        | Define a linha de fronteira correspondente                                       |                                                                                                                                                                                                                                                                                                                                                                  |
|                                                                            | color | text          | Define a cor da margem. Predefinição = black.                                    | Sintaxe da cor CSS "#rrggbb" (sintaxe preferencial), sintaxe da cor CSS "rgb(r,g,b)" (sintaxe alternativa), nome da cor CSS (sintaxe alternativa)                                                                                                                                                                                                                |
|                                                                            | style | inteiro longo | Define o estilo da borda. Predefinição = vazio. Não pode ser null ou indefinido. | `vk line style dash dot`, `vk line style dash dot dot`, `vk line style dashed`, `vk line style dotted`, `vk line style double`, `vk line style empty`, `vk line style hair`, `vk line style medium`, `vk line style medium dash dot`, `vk line style medium dash dot dot`,`vk line style medium dashed`, `vk line style slanted dash dot`, `vk line style thick` |

#### Fontes e texto

| Propriedade     |              | Tipo          | Descrição                                                                                                                                                                                                                                                                                                                                                                        | Valores possíveis                                                                                                                                                                                                        |
| --------------- | ------------ | ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| font            |              | text          | Specifies the font characteristics in CSS font shorthand ("font-style font-variant font-weight font-size/line-height font-family"). Exemplo: "14pt Century Gothic". Os valores font-size e font-family são obrigatórios. Se um dos outros valores estiver faltando, seus valores padrão serão usados. Nota: se um nome de fonte conter um espaço, o nome deve estar entre aspas. | Uma abreviação de fonte CSS. 4D provides utility commands to handle font characteristics as objects: [`VP Font to object`](method-list.md#vp-font-to-object) and [`VP Object to font`](method-list.md#vp-object-to-font) |
| formatter       |              | text          | Padrão para propriedade valor/tempo.                                                                                                                                                                                                                                                                                                                                             | Formatos número/texto/data/hora, caracteres especiais. Ver [Formato da célula](#cell-format).                                                                                                                            |
| isVerticalText  |              | boolean       | Especifica a direção do texto.                                                                                                                                                                                                                                                                                                                                                   | True = texto vertical, False = texto horizontal.                                                                                                                                                                         |
| labelOptions    |              | object        | Define as opções de etiqueta de célula (opções de marca de água).                                                                                                                                                                                                                                                                                                                |                                                                                                                                                                                                                          |
|                 | alignment    | inteiro longo | Especifica a posição da etiqueta da célula. Propriedade opcional.                                                                                                                                                                                                                                                                                                                | `vk label alignment top left`, `vk label alignment bottom left`, `vk label alignment top center`, `vk label alignment bottom center`, `vk label alignment top right`, `vk label alignment bottom right`                  |
|                 | visibilidade | inteiro longo | Especifica a visibilidade da etiqueta da célula. Propriedade opcional.                                                                                                                                                                                                                                                                                                           | `vk label visibility auto`, `vk label visibility hidden`, `vk label visibility visible`                                                                                                                                  |
|                 | foreColor    | text          | Define a cor do primeiro plano. Propriedade opcional.                                                                                                                                                                                                                                                                                                                            | Sintaxe da cor CSS "#rrggbb" (sintaxe preferencial), sintaxe da cor CSS "rgb(r,g,b)" (sintaxe alternativa), nome da cor CSS (sintaxe alternativa)                                                                        |
|                 | font         | text          | Specifies the font characteristics with CSS font shorthand ("font-style font-variant font-weight font-size/line-height font-family"). Os valores font-size e font-family são obrigatórios.                                                                                                                                                                                       |                                                                                                                                                                                                                          |
| textDecoration  |              | inteiro longo | Especifica a decoração adicionada ao texto.                                                                                                                                                                                                                                                                                                                                      | `vk text decoration double underline`, `vk text decoration line through`, `vk text decoration none`, `vk text decoration overline`, `vk text decoration underline`                                                       |
| textIndent      |              | inteiro longo | Define a unidade de indentação do texto. 1 = 8 píxeles                                                                                                                                                                                                                                                                                                                           |                                                                                                                                                                                                                          |
| textOrientation |              | inteiro longo | Define o ângulo de rotação do texto numa célula. Número entre -90 e 90                                                                                                                                                                                                                                                                                                           |                                                                                                                                                                                                                          |
| marca de água   |              | text          | Define o conteúdo da marca de água (etiqueta da célula)                                                                                                                                                                                                                                                                                                                          |                                                                                                                                                                                                                          |
| wordWrap        |              | boolean       | Especifica se o texto deve ser envolvido.                                                                                                                                                                                                                                                                                                                                        | True = texto embrulhado, False = texto não embrulhado                                                                                                                                                                    |

#### Layout

| Propriedade | Tipo          | Descrição                                                                                                                    | Valores possíveis                                                                                                    |
| ----------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| cellPadding | text          | Define o preenchimento da célula                                                                                             |                                                                                                                      |
| hAlign      | inteiro longo | Define o alinhamento horizontal do conteúdo da célula.                                                                       | `vk horizontal align center`, `vk horizontal align general`, `vk horizontal align left`, `vk horizontal align right` |
| locked      | boolean       | Especifica o estado de proteção da célula. Note, this is only available if [sheet protection](#sheet-protection) is enabled. | True = bloqueado, False = desbloqueado.                                                                              |
| shrinkToFit | boolean       | Especifica se o conteúdo da célula deve ser reduzido.                                                                        | True = conteúdo reduzido, False = sem redução.                                                                       |
| tabStop     | boolean       | Especifica se o foco da célula pode ser definido utilizando a tecla Tab.                                                     | True = a tecla Tab define o foco, False = a tecla Tab não define o foco.                                             |
| vAlign      | inteiro longo | Especifica o alinhamento vertical do conteúdo da célula.                                                                     | `vk vertical align bottom`, `vk vertical align center`, `vk vertical align top`                                      |

#### Informações sobre o estilo

| Propriedade | Tipo | Descrição                                                                                                                                                                                                                                                                                            |
| ----------- | ---- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name        | text | Define o nome do estilo                                                                                                                                                                                                                                                                              |
| parentName  | text | Especifica o estilo em que o estilo atual se baseia. Values from the parent style will be applied, then any values from the current style are applied. Los cambios realizados en el estilo actual no se reflejarán en el estilo principal. Apenas disponível quando se utiliza uma folha de estilos. |

## Objeto 4D View Pro

The 4D View Pro [object](Concepts/dt_object.md) stores the whole spreadsheet contents. É tratado automaticamente pelo 4D View Pro. You can set or get this object using the [VP IMPORT FROM OBJECT](method-list.md#vp-import-from-object) or [VP Export to object](method-list.md#vp-export-to-object) methods.

Contém as seguintes propriedades:

| Propriedade  | Tipo de valor | Descrição                                         |
| ------------ | ------------- | ------------------------------------------------- |
| version      | Integer       | Versão do componente interno                      |
| dateCreation | Timestamp     | Data de criação                                   |
| dateModified | Timestamp     | Data da última modificação                        |
| meta         | Object        | Conteúdos gratuitos, reservados ao programador 4D |
| spreadJS     | Object        | Reservado para o componente 4D View Pro           |

## Variável de objeto do formulário 4D View Pro

The 4D View Pro form object variable is the [object](Concepts/dt_object.md) variable associated to the 4D View Pro form area. Gere a informação utilizada pelo objeto 4D View Pro.
> The 4D View Pro form object variable is for information purposes only (i.e., debugging). Não deve, em caso algum, ser modificado.

Contém as seguintes propriedades:

| Propriedade            | Tipo de valor | Descrição                                                                                                                                                                                                                                                                                                                   |
| ---------------------- | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ViewPro.area           | Text          | Nome da área 4D View Pro                                                                                                                                                                                                                                                                                                    |
| ViewPro.callbacks      | Object        | Stores temporary information necessary for commands requiring callbacks such as importing and exporting.                                                                                                                                                                                                                    |
| ViewPro.commandBuffers | Collection    | Stores sequentially the commands called by the method and executes them as a batch (rather than individually) upon exiting the method, or if a command returns a value or the [VP FLUSH COMMANDS](method-list.md#vp-flush-commands) is called. Esse mecanismo aumenta o desempenho ao reduzir o número de pedidos enviados. |
| ViewPro.events         | Object        | [Event](#form-events) list.                                                                                                                                                                                                                                                                                                 |
| ViewPro.formulaBar     | Parâmetros    | Indica se a barra de fórmulas é ou não apresentada. Disponível apenas para a interface "barra de ferramentas".                                                                                                                                                                                                              |
| ViewPro.inited         | Parâmetros    | Indica se a área 4D View Pro foi inicializada ou não (consulte o evento [On VP Ready](Events/onVpReady.md)).                                                                                                                                                                                                                |
| ViewPro.interface      | Text          | Especifica o tipo de interface do usuário: "ribbon", "toolbar", "none".                                                                                                                                                                                                                                                     |
