---
id: configuring
title: Configuração das áreas 4D View Pro
---

As propriedades da área 4D View Pro podem ser configuradas utilizando a lista de propriedades. As propriedades da folha de cálculo estão disponíveis através da linguagem.

## Propriedades da área do formulário

Using the area's property list, you can set [4D View Pro object properties](FormObjects/viewProArea_overview.md#supported-properties) such as **Object Name**, [**Variable or Expression**](#4d-view-pro-form-object-variable), **Appearance**, **Action**, and **Events**.

![](../assets/en/ViewPro/vpPropertyList.png)

### Selecção de uma interface utilizador

Puede seleccionar la interfaz a utilizar con sus áreas de formulario 4D View Pro en la **Lista de propiedades**, en **Apariencia**:

![](../assets/en/ViewPro/vpUserInterface.PNG)

> Você também pode usar as propriedades JSON [`userInterface`](FormObjects/properties_Appearance.md#user-interface) e [`withFormulaBar`](FormObjects/properties_Appearance.md#show-formula-bar)(apenas com a interface "barra de ferramentas").

As interfaces permitem modificações básicas e a manipulação de dados. Modificações definidas pelo usuário são salvas no objeto 4D View Pro quando o usuário salva o documento.

#### Fita

![](../assets/en/ViewPro/vpRibbon.png)

#### Barra de ferramentas

Habilitar a interface da barra de ferramentas exibe a opção [**Mostrar a barra de fórmula**](FormObjects/properties_Appearance.md#show-formula-bar). Quando selecionada, a barra de fórmula fica visível abaixo da interface da barra de ferramentas.

Com barra de fórmula visível:

![](../assets/en/ViewPro/vpToolbar.png)

#### Funcionalidades

Tanto os recursos relacionados ao Ribbon como o grupo da interface de ferramentas (toolbar) nas abas:

| Tab      | Acções                           | Interface Ribbon | Interface da barra de ferramentas |
| -------- | -------------------------------- | :--------------: | :-------------------------------: |
| File     | Manipulação de ficheiros         |         X        |                                   |
| Inicio   | Aspecto do texto                 |         X        |                 X                 |
| Inserir  | Adicionar itens                  |         X        |                 X                 |
| Fórmulas | Cálculo de fórmulas e biblioteca |         X        |                 X                 |
| Dados    | Manipulação de dados             |         X        |                 X                 |
| Mostrar  | Apresentação visual              |         X        |                 X                 |
| Settings | Presentação da folha             |         X        |                                   |

## Eventos formulário

Os seguintes eventos de formulário estão disponíveis na lista de propriedades para as áreas 4D View Pro.

Alguns dos eventos são eventos padrão de formulário (disponíveis para todos os objetos ativos) e alguns são eventos específicos de forma 4D View Pro. Some of the events are standard form events (available to all active objects) and some are specific 4D View Pro form events. A tabela a seguir mostra quais eventos são padrões e quais são específicos ou fornecem informações adicionais para as áreas 4D View Pro:

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

O objeto 4D View Pro permite controlar várias opções de suas áreas 4D View Pro. Este objeto é tratado pelos seguintes comandos:

- [VP SET SHEET OPTIONS](commands/vp-set-sheet-options.md)
- [VP Get sheet options](commands/vp-get-sheet-options.md)

### Aspecto da folha

| Propriedade          |                        | Tipo          | Descrição                                                                                                                                                                                                                                                                                                                                              |
| -------------------- | ---------------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| allowCellOverflow    |                        | boolean       | Especifica se os dados podem transbordar para células vazias adjacentes.                                                                                                                                                                                                                                                               |
| sheetTabColor        |                        | string        | Uma string de cores usada para representar a cor da aba da folha, como "red", "#FFFF00", "rgb(255,0,0)", "Accent 5", e assim por diante.                                                                                                                                                                            |
| frozenlineColor      |                        | string        | Uma cor, usada para representar a cor da linha congelada, como "red", "#FFFF00", "rgb(255,0,0)", "Accent 5", e assim por diante.                                                                                                                                                                                    |
| clipBoardOptions     |                        | inteiro longo | A opção de área de transferência. Valores disponíveis: `vk clipboard paste options all`, `vk clipboard paste options formatting`, `vk clipboard paste options formulas`, `vk clipboard paste options formulas and formatting`, `vk clipboard paste options values`, `vk clipboard paste options values and formatting` |
| gridline             |                        | object        | As opções da linha de grade.                                                                                                                                                                                                                                                                                                           |
|                      | color                  | string        | Uma cor, usada para representar a cor da linha da grade, como "red", "#FFFF00", "rgb(255,0,0)", "Accent 5", e assim por diante.                                                                                                                                                                                     |
|                      | showVerticalGridline   | boolean       | Especifica se a linha de grelha vertical deve ser mostrada.                                                                                                                                                                                                                                                                            |
|                      | showHorizontalGridline | boolean       | Especifica se a linha de grelha horizontal deve ser mostrada.                                                                                                                                                                                                                                                                          |
| rowHeaderVisible     |                        | boolean       | Especifica se o cabeçalho da linha é visível.                                                                                                                                                                                                                                                                                          |
| colHeaderVisible     |                        | boolean       | Especifica se o cabeçalho da coluna é visível.                                                                                                                                                                                                                                                                                         |
| rowHeaderAutoText    |                        | inteiro longo | Especifica se o cabeçalho da linha exibe letras ou números ou está em branco. Valores disponibles: `vk header auto text blank`, `vk header auto text letters`, `vk header auto text numbers`                                                                                                                           |
| colHeaderAutoText    |                        | inteiro longo | Especifica se o cabeçalho da coluna exibe letras ou números ou está em branco. Valores disponibles: `vk header auto text blank`, `vk header auto text letters`, `vk header auto text numbers`                                                                                                                          |
| selectionBackColor   |                        | string        | A cor de fundo da seleção para a folha. (formato RGBA preferido)                                                                                                                                                                                                                                                    |
| selectionBorderColor |                        | string        | A cor do contorno da seleção para a folha.                                                                                                                                                                                                                                                                                             |
| sheetAreaOffset      |                        | object        | As opções de sheetAreaOffset.                                                                                                                                                                                                                                                                                                          |
|                      | left                   | inteiro longo | O deslocamento à esquerda da folha em relação ao host.                                                                                                                                                                                                                                                                                 |
|                      | top                    | inteiro longo | O deslocamento superior da folha em relação ao host.                                                                                                                                                                                                                                                                                   |

> Todas as propriedades são opcionais.

### Protecção da folha

Para bloquear toda la hoja, basta con poner la propiedad *isProtected* en **true**. A continuación, puede desbloquear las celdas individualmente colocando la propiedad de estilo de celda [bloqueada](#layout).

| Propriedade       |                          | Tipo    | Descrição                                                                                                                                                           |
| ----------------- | ------------------------ | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| isProtected       |                          | boolean | Especifica se as células nesta folha que são marcadas como protegidas não podem ser editadas.                                                       |
| protectionOptions |                          | object  | Um valor que indica os elementos que os usuários podem modificar. Se null: o parâmetro protectionOptions é reposto. |
|                   | allowSelectLockedCells   | boolean | Especifica se o usuário pode selecionar células bloqueadas, opcional. True por defeito.                                             |
|                   | allowSelectUnlockedCells | boolean | Especifica se o usuário pode selecionar células desbloqueadas, opcional. True por defeito.                                          |
|                   | allowSort                | boolean | Especifica se o usuário pode ordenar intervalos, opcional. Padrão é falso.                                                          |
|                   | allowFilter              | boolean | Especifica se o usuário pode filtrar intervalos, opcional. Padrão é falso.                                                          |
|                   | allowEditObjects         | boolean | Especifica se o usuário pode editar objetos flutuantes, opcional. Padrão é falso.                                                   |
|                   | allowResizeRows          | boolean | Especifica se o usuário pode redimensionar as linhas, opcional. Padrão é falso.                                                     |
|                   | allowResizeColumns       | boolean | Especifica se o usuário pode redimensionar colunas, opcional. Padrão é falso.                                                       |
|                   | allowDragInsertRows      | boolean | Especifica se o usuário pode executar a operação de arrastar para inserir linhas, opcional. Padrão é falso.                         |
|                   | allowDragInsertColumns   | boolean | Especifica se o usuário pode executar a operação de arrastar para inserir colunas, opcional. Padrão é falso.                        |
|                   | allowInsertRows          | boolean | Especifica se o usuário pode inserir linhas, opcional. Padrão é falso.                                                              |
|                   | allowInsertColumns       | boolean | Especifica se o usuário pode inserir colunas, opcional. Padrão é falso.                                                             |
|                   | allowDeleteRows          | boolean | Especifica se o usuário pode eliminar linhas, opcional. Padrão é falso.                                                             |
|                   | allowDeleteColumns       | boolean | Especifica se o usuário pode eliminar colunas, opcional. Padrão é falso.                                                            |

> Todas as propriedades são opcionais.

## Formato das células

Definir um padrão de formato garante que o conteúdo dos seus documentos 4D View Pro seja exibido como deveria. Formats can be set using the selected 4D View Pro [interface](#selecting-a-user-interface), or using the [VP SET VALUE](commands/vp-set-value.md) or [VP SET NUM VALUE](commands/vp-set-num-value.md) commands.

A versão 4D View Pro tem formatos embutidos para números, datas, horas e texto, mas você também pode criar seus próprios padrões para formatar o conteúdo das células usando caracteres especiais e códigos.

For example, when using the [VP SET VALUE](commands/vp-set-value.md) or [VP SET NUM VALUE](commands/vp-set-num-value.md) commands to enter amounts in an invoice, you may want the currency symbols ($, €, ¥, etc.) to be aligned regardless of the space required by the number (i.e., whether the amount is $5.00 or $5,000.00). You could use formatting characters and spectify the pattern *($\* #,##0.00*) which would display amounts as shown:

![](../assets/en/ViewPro/apx_vpCellFormat1.PNG)

Observe que, ao criar seus próprios padrões de formato, apenas a exibição dos dados é modificada. O valor dos dados mantém-se inalterado.

### Formatos número e texto

Formatos de números se aplicam a todos os tipos de números (por exemplo, positivos, negativos e zeros).

| Caracteres                                                    | Descrição                                                                                                                                                                                                                                                                                               | Exemplo                                                                                                                                                                                                                                                                                                                              |
| ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 0                                                             | Marcador de posição mostrando zeros.                                                                                                                                                                                                                                                    | #.00 mostrará 1.1 como 1.10                                                                                                                                                                                                                                                          |
| .                                             | Exibe um ponto decimal                                                                                                                                                                                                                                                                                  | 0.00 mostrará 1999 como 1999.00                                                                                                                                                                                                                                                                      |
| ,                                                             | Mostra o separador de milhares num número. Milhares são separados por vírgulas se o formato contém uma vírgula entre os sinais de número "#" ou por zeros. Uma vírgula após um marcador de posição de dígito escala o número por 1.000. | #,0 mostrará 12200000 como 12,200,000                                                                                                                                                                                                                                                                                                |
| \_                                      | Salta a largura do carácter seguinte.                                                                                                                                                                                                                                                   | Geralmente usado em combinação com parênteses para adicionar parágrafos esquerdos, \_(e _), respectivamente.                                                                                                                                           |
| @                                                | Formatador de texto. Aplica o formato a todo o texto da célula                                                                                                                                                                                                                          | "\[Red]@" aplica a cor de letra vermelha aos valores de texto.                                                                                                                                                                                     |
| \*                                                            | Repete o carácter seguinte para preencher a largura da coluna.                                                                                                                                                                                                                          | 0\*- incluirá traços suficientes após um número para preencher a célula, enquanto \*0 antes de qualquer formato incluirá zeros à esquerda.                                                                                                                                                                           |
| " "                                                           | Exibe o texto dentro das aspas sem interpretá-lo.                                                                                                                                                                                                                                       | "8%" será exibido como: 8%                                                                                                                                                                                                                                                                                           |
| %                                                             | Mostra os números como uma percentagem de 100.                                                                                                                                                                                                                                          | 8% será exibido como 0,08                                                                                                                                                                                                                                                                                                            |
| \#                                                           | Espaço reservado para dígitos que não apresenta zeros extra. Se um número tem mais dígitos à direita do que existem espaços reservados, o número será arredondado.                                                                                                      | #.# mostrará 1.54 como 1.5                                                                                                                                                                                                                                                           |
| ?                                                             | Espaço reservado digito que deixa espaço para zeros extras, mas não exibe-os. Normalmente utilizado para alinhar números pelo ponto decimal.                                                                                                                            | $?? mostra um máximo de 2 casas decimais e faz com que os sinais de dólar alinhem para valores variáveis.                                                                                                                                                                                                            |
| \                                                            | Exibe o caractere seguinte.                                                                                                                                                                                                                                                             | #.00\? mostrará 123 como 123.00?                                                                                                                                                                                                                                                                    |
| /                                                             | Quando utilizado com números, apresenta-os como fracções. Quando utilizado com códigos de texto, data ou hora, é apresentado "tal e qual".                                                                                                                              | #/# mostrará .75 como 3/4                                                                                                                                                                                                                                                                                            |
| \[ ]     | Cria formatos condicionais.                                                                                                                                                                                                                                                             | \[>100]\[GREEN]#,##0;\[`<=-100`]\[YELLOW]#,##0;\[BLUE]#,##0 |
| E                                                             | Formato notação científica.                                                                                                                                                                                                                                                             | #E+# - mostrará 1.500.500 como 2E+6                                                                                                                                                                                                                                                                  |
| \[color] | Formata o texto ou número na cor especificada                                                                                                                                                                                                                                                           | \[Green]###.##\[Red]-###.###                                                                                                                                                               |

#### Exemplo

```4d
//Set the cell value as $125,571.35 VP SET VALUE(VP Cell("ViewProArea";3;2);New object("value";125571.35;"format";"_($* #,##0.00_)")
```

### Formatos data e hora

4D View Pro fornece as seguintes constantes para padrões de data e hora do ISO 8601:

| Parâmetros                                | Valor                                | Comentário                                                                                                                                                                                                                                                        |
| ----------------------------------------- | ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `vk pattern full date time`               | "*fullDateTimePattern*"              | Formato ISO 8601 para a data e hora completas no padrão de localização.EUA atual: "dddd, dd MMMM yyyy HH:mm:ss"                                                                                   |
| `vk pattern long date`                    | "*longDatePattern*"                  | Formato ISO 8601 para a data completa no padrão de localização atual: "dddd, dd MMMM yyyy"                                                                                                                                                        |
| `vk pattern long time`                    | "*longTimePattern*"                  | Formato ISO 8601 para a hora na localização atual. Padrão padrão EUA: "HH:mm:ss"                                                                                                                  |
| `vk pattern month day`                    | "*monthDayPattern*"                  | Formato ISO 8601 para o mês e dia no padrão da localização atual: "MMMM dd"                                                                                                                                                                       |
| `vk pattern short date`                   | "*shortDatePattern*"                 | Formato ISO 8601 abreviado para a data na data atual de localização.USA padrão padrão: "MM/dd/yyyy"                                                                                                                               |
| `vk pattern short time`                   | "*shortTimePattern*"                 | Formato abreviado ISO 8601 para a hora no padrão de localização.EUA atual: "HH:mm"                                                                                                                                |
| `vk pattern sortable date time`           | "*sortableDateTimePattern*"          | Formato ISO 8601 para a data e hora na localização atual que pode ser classificado.EUA padrão padrão: "yyyy\'-\'MM\'dd\'T\'H\':\'mm\':\':\'mm\':\'ss" |
| `vk pattern universal sortable date time` | "*universalSortableDateTimePattern*" | Formato ISO 8601 para a data e hora na localização atual usando UTC que pode ser classificado.EUA padrão padrão: "yyyy\'-\'MM\'-\'dd H\':\'mm\':\':\'ss\'Z\'"          |
| `vk pattern year month`                   | "*yearMonthPattern*"                 | Formato ISO 8601 para o mês e ano na localização atual. Padrão padrão para EUA: "MMM aaaa"                                                                                                                                        |

#### Exemplo

```4d
//Set the cell value as specific date and time VP SET VALUE(VP Cell("ViewProArea";3;9);New object("value";!2024-12-18!);"time";?14:30:10?;"format";vk pattern full date time))
```

### Formatos data e hora personalizados

Para criar seus próprios padrões de data e hora, na sua localização atual, você pode usar combinações dos seguintes códigos:

|      | Código<br/>(não sensível a maiúsculas e minúsculas) | Descrição                                                                                      | Exemplo                                                         |
| ---- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| Date |                                                                        |                                                                                                | (January 1, 2019)                            |
|      | m                                                                      | Número do mês sem zero à esquerda                                                              | 1                                                               |
|      | mm                                                                     | Número do mês com zero à esquerda                                                              | 01                                                              |
|      | mmm                                                                    | Nome do mês, abreviado                                                                         | Jan                                                             |
|      | mmmm                                                                   | Nome do mês, long                                                                              | January                                                         |
|      | d                                                                      | Número do dia sem zero à esquerda                                                              | 1                                                               |
|      | dd                                                                     | Número do dia com zero à esquerda                                                              | 01                                                              |
|      | ddd                                                                    | Dia da semana, curto                                                                           | Tue                                                             |
|      | dddd                                                                   | Dia da semana, longo                                                                           | Tuesday                                                         |
|      | yy                                                                     | Ano, breve                                                                                     | 19                                                              |
|      | yyyy                                                                   | Ano, longo                                                                                     | 2019                                                            |
| Hora |                                                                        |                                                                                                | (2:03:05 PM) |
|      | h                                                                      | Hora sem zero à esquerda. 0-23                                                 | 2                                                               |
|      | hh                                                                     | Hora com zero à esquerda. 00-23                                                | 02                                                              |
|      | m                                                                      | Minutos sem zero à esquerda. 0-59                                              | 3                                                               |
|      | mm                                                                     | Minutos com zero à esquerda. 00-59                                             | 03                                                              |
|      | s                                                                      | Segundos sem zero à esquerda. 0-59                                             | 5                                                               |
|      | ss                                                                     | Segundos com zero à esquerda. 00-59                                            | 05                                                              |
|      | \[h]              | Tempo decorrido em horas                                                                       | 14 (pode exceder 24)                         |
|      | \[mm]             | Tempo decorrido em minutos                                                                     | 843                                                             |
|      | \[ss]             | Tempo decorrido em segundos                                                                    | 50585                                                           |
|      | AM/PM                                                                  | Períodos do dia. Se omitido, utiliza-se o formato de 24 horas. | PM                                                              |

> O código "m" é interpretado de acordo com sua posição no padrão. Se for imediatamente após 'h' ou 'hh' ou imediatamente antes 't' ou 'ss', será interpretado como actos, caso contrário será interpretado como meses.

### Símbolos adicionais

Além dos caracteres especiais e códigos descritos nas seções anteriores, existem caracteres adicionais e símbolos que podem ser usados em seus padrões de formato. Esses caracteres e símbolos adicionais não exigem uma \ ou "" e não afetam a interpretação do padrão de formatos. Aparecem "tal como estão" no padrão.

| Caracteres             | Descrição                                                                                                    | Exemplo                                      |
| ---------------------- | ------------------------------------------------------------------------------------------------------------ | -------------------------------------------- |
| + e -                  | Sinais mais e menos                                                                                          | ### + ### = ###,##\#                         |
| ( ) | Parênteses esquerdo e direito                                                                                | (-###.##) |
| :      | Dois pontos                                                                                                  | hh:mm:ss     |
| ^                      | Caret                                                                                                        | #\^#                                        |
| '                      | Apóstrofe                                                                                                    | '######                                      |
| { }                    | Parêntesis enrolados                                                                                         | {###,###,###}                                |
| `< >`                  | Sinais de menor e maior que                                                                                  | `## >##`                                     |
| =                      | Sinal igual                                                                                                  | #+#=##                                       |
| /                      | Barrada de frente. Quando utilizado com números, apresenta-os como fracções. | mm/dd/yyyy                                   |
| !                      | Ponto de exclamação                                                                                          | $###.00!                     |
| &  | Ampersand                                                                                                    | "Hello" & "Welcome"      |
| ~      | Tilde                                                                                                        | ~##                          |
|                        | Carácter de espaço                                                                                           |                                              |
| €                      | Euro                                                                                                         | €###.00                      |
| £                      | Libra esterlina                                                                                              | £###.00                      |
| ¥                      | Iene japonês                                                                                                 | ¥###.00                      |
| $                      | Sinal de dólar                                                                                               | $###.00                      |
| ¢                      | Sinal de cêntimo                                                                                             | .00¢                         |

## Atributos de impressão

Os atributos de impressão 4D View Pro permitem que você controle todos os aspectos da impressão de áreas 4D View Pro. Esses atributos são tratados pelos seguintes comandos:

- [VP SET PRINT INFO](commands/vp-set-print-info.md)
- [VP Get print info](commands/vp-get-print-info.md)

### Colunas / Linhas

Atributos de coluna e linha são usados para especificar o início, o fim e a repetição de colunas e linhas.

| Propriedade       | Tipo          | Descrição                                                                                                                                                  |
| ----------------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| columnEnd         | inteiro longo | A última coluna a imprimir num intervalo de células. Valor padrão = -1 (todas as colunas)                               |
| columnStart       | inteiro longo | A primeira coluna a imprimir num intervalo de células. Valor padrão = -1 (todas as colunas)                             |
| repeatColumnEnd   | inteiro longo | A última coluna de um intervalo de colunas a imprimir à esquerda de cada página. Valor padrão = -1 (todas as colunas)   |
| repeatColumnStart | inteiro longo | A primeira coluna de um intervalo de colunas a imprimir à esquerda de cada página. Valor padrão = -1 (todas as colunas) |
| repeatRowEnd      | inteiro longo | A última linha de um intervalo de linhas a imprimir no topo de cada página. Valor padrão = -1 (todas as linhas)         |
| repeatRowStart    | inteiro longo | A primeira linha de um intervalo de linhas a imprimir no topo de cada página. Valor padrão = -1 (todas as linhas)       |
| rowEnd            | inteiro longo | A última linha a imprimir num intervalo de células. Valor padrão = -1 (todas as linhas)                                 |
| rowStart          | inteiro longo | A primeira linha a imprimir num intervalo de células. Valor padrão = -1 (todas as linhas)                               |

### Cabeçalhos / Rodapés

Atributos de cabeçalho e rodapé são usados para especificar texto ou imagens na seção esquerda, direita e cabeçalho central.

| Propriedade       | Tipo                                      | Descrição                                                                        |
| ----------------- | ----------------------------------------- | -------------------------------------------------------------------------------- |
| footerCenter      | text                                      | O texto e o formato do rodapé central nas páginas impressas.     |
| footerCenterImage | picture &#124; text\* | A imagem para a secção central do rodapé.                        |
| footerLeft        | text                                      | O texto e o formato do rodapé esquerdo nas páginas impressas.    |
| footerLeftImage   | picture &#124; text\* | A imagem para a secção esquerda do rodapé.                       |
| footerRight       | text                                      | O texto e o formato do rodapé direito nas páginas impressas.     |
| footerRightImage  | picture &#124; text\* | A imagem para a secção direita do rodapé.                        |
| headerCenter      | text                                      | O texto e o formato do cabeçalho central nas páginas impressas.  |
| headerCenterImage | picture &#124; text\* | A imagem para a secção central do cabeçalho.                     |
| headerLeft        | text                                      | O texto e o formato do cabeçalho esquerdo nas páginas impressas. |
| headerLeftImage   | picture &#124; text\* | A imagem para a secção esquerda do cabeçalho.                    |
| headerRight       | text                                      | O texto e o formato do cabeçalho direito nas páginas impressas.  |
| headerRightImage  | picture &#124; text\* | A imagem para a secção direita do cabeçalho.                     |

\* Se estiver usando o tipo de texto, passe o caminho do arquivo (absoluto ou relativo) da imagem. Se você passar por um caminho relativo, o arquivo deve estar localizado ao lado do arquivo de estrutura do banco de dados. No Windows, a extensão do ficheiro deve ser indicada. No matter the type used to set an image, the image itself (not a reference) is stored in the 4D View Pro area and is returned by [VP Get print info](commands/vp-get-print-info.md).

### Caracteres especiais

Os seguintes caracteres especiais permitem a adição ou formatação automática de informações no cabeçalho e rodapé quando a área 4D View Pro é impressa.

| Caracteres            | Descrição                                          | Exemplo                                                                                                                                               | Resultados                                                      |   |
| --------------------- | -------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- | - |
| & | Carácter de escape                                 | (ver exemplos abaixo)                                                                                                              |                                                                 |   |
| P                     | Página actual                                      | printInfo.headerLeft:="Esta es la página &P."                                     | Esta é a página 5.                              |   |
| N                     | Contagem de páginas                                | printInfo.headerLeft:="Hay &N páginas."                                           | Existem 10 páginas.                             |   |
| D                     | Data atual (formato yyyy/mm/dd) | printInfo.headerLeft:="Es &D."                                                    | Estamos em 2015/6/19.                           |   |
| T                     | Hora actual                                        | printInfo.headerLeft:="Es &T."                                                    | São 16:30:36.   |   |
| G                     | Imagem                                             | printInfo.headerLeftImage:=smiley<br/>printInfo.headerLeft:="&G"  | ![](../assets/en/ViewPro/apx_vpPrintAttributes1.PNG)            |   |
| S                     | Riscado                                            | printInfo.headerLeft:="&SEsto es texto."                                          | ~Isto é texto.~ |   |
| U                     | Sublinhado                                         | printInfo.headerLeft:="&UEsto es texto."                                          | Isto é texto. (Sublinhado)   |   |
| B                     | Negrito                                            | printInfo.headerLeft:="&BEsto es texto."                                          | **Isto é texto.**                               |   |
| I                     | Itálico                                            | printInfo.headerLeft:="&IEsto es texto."                                          | *Isto é texto.*                                 |   |
| "                     | Prefixo do tipo de letra                           | printInfo.headerLeft:="&\"Lucida Console\"&14This is text." | ![](../assets/en/ViewPro/apx_vpPrintAttributes2.PNG)            |   |
| K                     | Prefixo da cor do texto                            | printInfo.headerLeft:="&KFF0000Esto es texto."                                    | Este é o texto (a vermelho). |   |
| F                     | Nome do Workbook                                   | printInfo.headerLeft:="&F"                                                                        | 2019 Monthly Revenue Forecasts                                  |   |
| A                     | Nome da folha de cálculo                           | printInfo.headerLeft:="&A"                                                                        | June 2019 revenue forecast                                      |   |

### Margens

Atributos de margem são usados para especificar a margem 4D View Pro para impressão. Expresso em centésimos de polegada.

| Propriedade |         | Tipo          | Descrição                                                                             |
| ----------- | ------- | ------------- | ------------------------------------------------------------------------------------- |
| margin      |         | object        | As margens de impressão                                                               |
|             | top     | inteiro longo | Margem superior, em centésimos de polegada. Valor padrão = 75         |
|             | bottom  | inteiro longo | Margem inferior, em centésimos de polegada. Valor padrão = 75         |
|             | left    | inteiro longo | Margem esquerda, em centésimos de polegada. Valor padrão = 70         |
|             | direita | inteiro longo | Margem direita, em centésimos de polegada. Valor padrão = 70          |
|             | header  | inteiro longo | Deslocação do cabeçalho, em centésimos de polegada. Valor padrão = 30 |
|             | footer  | inteiro longo | Deslocamento do rodapé, em centésimos de polegada. Valor padrão = 30  |

### Orientação

Os atributos de orientação são utilizados para especificar a direcção da disposição da página impressa.

> Este atributo define apenas as informações de renderização.

| Propriedade | Tipo          | Descrição                                                                                                                                                                               |
| ----------- | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| orientation | inteiro longo | Orientação da página. Valores disponibles: `vk print page orientation landscape`, `vk print page orientation portrait` (por defecto) |

### Página

Os atributos de página são utilizados para especificar as definições gerais de impressão de documentos.

| Propriedade     | Tipo          | Descrição                                                                                                                                                                                                                                                         |
| --------------- | ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| blackAndWhite   | boolean       | Impressão apenas em preto e branco. <p>Valor padrão = false</p><p>**Nota**: os PDFs não são afetados por esse atributo. As cores nos PDFs mantêm-se.</p>                                          |
| centering       | inteiro longo | A forma como o conteúdo é centrado na página impressa. Valores disponibles: `vk print centering both`, `vk print centering horizontal`, `vk print centering none` (por defecto), `vk print centering vertical` |
| firstPageNumber | inteiro longo | The page number to print on the first page. Default value = 1                                                                                                                                                                                     |
| pageOrder       | inteiro longo | As páginas do pedido são impressas. Valores disponibles: `vk print page order auto` (por defecto), `vk print page order down then over`, `vk print page order over then down`.                 |
| pageRange       | text          | O intervalo de páginas para impressão                                                                                                                                                                                                                             |
| qualityFactor   | inteiro longo | O fator de qualidade para impressão (1 a 8).  The higher the quality factor, the better the printing quality, however printing performance may be affected.<p>Default value = 2</p>                            |
| useMax          | boolean       | Only columns and rows with data are printed.<p>Default value = true</p>                                                                                                                                                                           |
| zoomFactor      | real          | The amount to enlarge or reduce the printed page.<p>Default value = 1</p>                                                                                                                                                                         |

### Tamanho de papel

Atributos do tamanho do papel são usados para especificar as dimensões ou modelo de papel a ser usado para impressão. Existem duas formas de definir o tamanho do papel:

- Tamanho personalizado - atributos de altura e largura
- Tamanho normal - atributo kind

| Propriedade |        | Tipo          | Descrição                                                                                                                                                                                            |
| ----------- | ------ | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| paperSize   |        | object        | Dimensões do papel (altura, largura) ou formato específico (tipo) para impressão.                                                              |
|             | height | inteiro longo | Altura do papel, em centésimos de polegada.                                                                                                                                          |
|             | width  | inteiro longo | Largura do papel, em centésimos de polegada.                                                                                                                                         |
|             | kind   | text          | Name of standard paper size (e.g., A2, A4, legal, etc.) retornado por `Get Print Option`. Valor padrão = "letter" |

- If the paper size is specified using the `height` and `width` properties,  [`VP Get print info`](./commands/vp-get-print-info.md) returns a paper size with `custom` as value for `kind`.

- Si establece el tamaño del papel mediante la propiedad `kind`, puede utilizar cualquiera de los dos:
  - uno de los formatos de la [lista de formatos SpreadJS](https://developer.mescius.com/spreadjs/api/enums/GC.Spread.Sheets.Print.PaperKind)
  - um dos formatos retornados pelo comando [`PRINT OPTION VALUES`](https://doc.4d.com/4dv19/help/command/en/page785.html).
    In that case, [`VP Get print info`](./commands/vp-get-print-info.md) returns the corresponding format with the height and width.

### Escala

Os atributos de escala são usados para especificar a otimização e ajustes de impressão.

| Propriedade    | Tipo          | Descrição                                                                                                                                             |
| -------------- | ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| bestFitColumns | boolean       | A largura da coluna é ajustada para se adequar à maior largura de texto para impressão. Valor padrão = "false"                        |
| bestFitRows    | boolean       | A altura da linha é ajustada para se adequar à altura do texto mais alto para impressão. Valor padrão = "false"                       |
| fitPagesTall   | inteiro longo | O número de páginas verticais (orientação retrato) para verificar na otimização da impressão. Valor padrão = -1    |
| fitPagesWide   | inteiro longo | O número de páginas horizontais (orientação paisagem) para verificar na otimização da impressão. Valor padrão = -1 |

### Mostrar / Esconder

Mostrar / Ocultar atributos são usados para especificar a visibilidade (impressão) de elementos de área 4D View Pro.

| Propriedade      | Tipo          | Descrição                                                                                                                                                                                                                                                    |
| ---------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| showBorder       | boolean       | Prints the outline border. Default value = "true"                                                                                                                                                                                            |
| showColumnHeader | inteiro longo | Parâmetros de impressão do cabeçalho da coluna. Valores disponibles: `vk print visibility hide`, `vk print visibility inherit` (por defecto), `vk print visibility show`, `vk print visibility show once` |
| showGridLine     | boolean       | Imprime as linhas de grade. Valor padrão = "false"                                                                                                                                                                                           |
| showRowHeader    | inteiro longo | Parâmetros de impressão de cabeçalhos de linha. Valores disponibles: `vk print visibility hide`, `vk print visibility inherit` (por defecto), `vk print visibility show`, `vk print visibility show once` |

### Marca de água

Atributos de marca d'água são usados para sobrepor texto ou uma imagem na área 4D View Pro.

| Propriedade   |                                                                                    | Tipo                                      | Descrição                                                                                                                                                                                                                                                                                                                                        |
| ------------- | ---------------------------------------------------------------------------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| marca de água |                                                                                    | collection                                | Coleção de parâmetros de marcas de água.  Valor padrão: undefined                                                                                                                                                                                                                                                |
|               | \[ ].height   | inteiro longo                             | A altura do texto/imagem da marca de água.                                                                                                                                                                                                                                                                                       |
|               | \[ ].imageSrc | picture &#124; text\* | O texto/imagem da marca de água.                                                                                                                                                                                                                                                                                                 |
|               | \[ ].page     | text                                      | A(s) página(s) onde a marca de água é impressa. Para todas as páginas: "all". Para páginas específicas: números de página ou intervalos de páginas separados por vírgulas. Ex.: "1,3,5-12" |
|               | \[ ].width    | inteiro longo                             | A largura do texto/imagem da marca de água.                                                                                                                                                                                                                                                                                      |
|               | \[ ].x        | inteiro longo                             | A coordenada horizontal do ponto superior esquerdo do texto / imagem da marca d'água.                                                                                                                                                                                                                                            |
|               | \[ ].y        | inteiro longo                             | A coordenada vertical do ponto superior esquerdo do texto / imagem da marca d'água.                                                                                                                                                                                                                                              |

\* Se estiver usando o tipo de texto, passe o caminho do arquivo (absoluto ou relativo) da imagem. Se você passar por um caminho relativo, o arquivo deve estar localizado ao lado do arquivo de estrutura do banco de dados. No Windows, a extensão do ficheiro deve ser indicada. No matter the type used to set an image, the image itself (not a reference) is stored in the 4D View Pro area and is returned by [VP Get print info](commands/vp-get-print-info.md).

## Objetos Estilo

Objetos de estilo 4D View Pro e folhas de estilo permitem que você controle os aspectos gráficos e a aparência dos seus documentos 4D View Pro.

### Objetos de estilo & Hojas de estilo

Os objetos estilo contêm os parâmetros de estilo. Podem ser utilizados numa folha de estilo ou por conta própria. Objetos de estilo também podem ser usados além de uma folha de estilo para que diferentes configurações possam ser especificadas para intervalos de células individuais sem afetar o resto do documento. You can use style objects directly with the [VP SET CELL STYLE](commands/vp-set-cell-style.md) and [VP SET DEFAULT STYLE](commands/vp-set-default-style.md) commands. You can also use style objects when defining custom table themes using the [VP SET TABLE THEME](commands/vp-set-table-theme.md) or [VP CREATE TABLE](commands/vp-create-table.md) commands.

Una **hoja de estilo** agrupa una combinación de propiedades en un objeto estilo para especificar el aspecto de todas las celdas de sus documentos 4D View Pro. Folhas de estilo salvas com o documento podem ser usadas para definir as propriedades para uma única folha, várias folhas ou um livro de trabalho inteiro. Quando criada, uma folha de estilo 4D View Pro é dado um nome que é salvo na folha de estilo na propriedade "nome". Isto permite que uma folha de estilo seja facilmente usada e, se cuidadosamente selecionada, pode facilitar sua identificação e propósito (por exemplo, Letterhead\_internal, Letterhead_external).

Style sheets are created with the [VP ADD STYLESHEET](commands/vp-add-stylesheet.md) command and applied with the the [VP SET DEFAULT STYLE](commands/vp-set-default-style.md) or [VP SET CELL STYLE](commands/vp-set-cell-style.md) commands. Você pode remover uma folha de estilos com o comando [VP REMOVE STYLESHEET](commands/vp-remove-stylesheet.md).

The [VP Get stylesheet](commands/vp-get-stylesheet.md) command can be used to return the style object of a single style sheet or you can use the [VP Get stylesheets](commands/vp-get-stylesheets.md) command to retrieve a collection of style objects for multiple style sheets.

### Propriedades do objecto de estilo

Exemplo:

```4d
 $style:=New object
 $style.hAlign:=vk horizontal align left
 $style.font:="12pt papyrus"
 $style.backColor:="#E6E6FA" //cor púrpura claro
 
 VP SET DEFAULT STYLE("myDoc";$style)
```

#### Fondo & Primer plano

| Propriedade           | Tipo          | Descrição                                                | Valores possíveis                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --------------------- | ------------- | -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| backColor             | text          | Define a cor do fundo.                   | Sintaxe da cor CSS "#rrggbb" (sintaxe preferencial), sintaxe da cor CSS "rgb(r,g,b)" (sintaxe alternativa), nome da cor CSS (sintaxe alternativa)                                                                                                                                                                                                                                                                                                                                                                    |
| backgroundImage       | picture, text | Especifica uma imagem de fundo.          | Pode ser especificado diretamente ou via caminho da imagem (caminho completo ou nome de arquivo apenas). Se apenas o nome do arquivo for usado, o arquivo deve estar localizado ao lado do arquivo de estrutura da base de dados. Independentemente da configuração (imagem ou texto), a imagem é salva com o documento. Isto pode afetar o tamanho de um documento se a imagem for grande. Nota para o Windows: a extensão do ficheiro deve ser incluída. |
| backgroundImageLayout | inteiro longo | Define o esquema para a imagem de fundo. | `vk image layout center`, `vk image layout none`, `vk image layout stretch`, `vk image layout zoom`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| foreColor             | text          | Define a cor do primeiro plano.          | Sintaxe da cor CSS "#rrggbb" (sintaxe preferencial), sintaxe da cor CSS "rgb(r,g,b)" (sintaxe alternativa), nome da cor CSS (sintaxe alternativa)                                                                                                                                                                                                                                                                                                                                                                    |

#### Bordas

| Propriedade                                                                |       | Tipo          | Descrição                                                                                                                        | Valores possíveis                                                                                                                                                                                                                                                                                                                                                |
| -------------------------------------------------------------------------- | ----- | ------------- | -------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| borderBottom, borderLeft, borderRight, borderTop, diagonalDown, diagonalUp |       | object        | Define a linha de fronteira correspondente                                                                                       |                                                                                                                                                                                                                                                                                                                                                                  |
|                                                                            | color | text          | Define a cor da margem. Predefinição = black.                                                    | Sintaxe da cor CSS "#rrggbb" (sintaxe preferencial), sintaxe da cor CSS "rgb(r,g,b)" (sintaxe alternativa), nome da cor CSS (sintaxe alternativa)                                                                                                                                    |
|                                                                            | style | inteiro longo | Define o estilo da borda. Predefinição = vazio. Não pode ser null ou indefinido. | `vk line style dash dot`, `vk line style dash dot dot`, `vk line style dashed`, `vk line style dotted`, `vk line style double`, `vk line style empty`, `vk line style hair`, `vk line style medium`, `vk line style medium dash dot`, `vk line style medium dash dot dot`,`vk line style medium dashed`, `vk line style slanted dash dot`, `vk line style thick` |

#### Fontes e texto

| Propriedade     |              | Tipo          | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Valores possíveis                                                                                                                                                                                                                                  |
| --------------- | ------------ | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| font            |              | text          | Especifica as características da fonte em CSS (fonte curta ("font-style font-variant font-weight font-size/line-height font-family"). Exemplo: "14pt Century Gothic". Os valores font-size e font-family são obrigatórios. Se um dos outros valores estiver faltando, seus valores padrão serão usados. Nota: se um nome de fonte conter um espaço, o nome deve estar entre aspas. | Uma abreviação de fonte CSS. 4D provides utility commands to handle font characteristics as objects: [`VP Font to object`](commands/vp-font-to-object.md) and [`VP Object to font`](commands/vp-object-to-font.md) |
| formatter       |              | text          | Padrão para propriedade valor/tempo.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Formatos número/texto/data/hora, caracteres especiais. Ver [Formato de celda](#cell-format).                                                                                                                       |
| isVerticalText  |              | boolean       | Especifica a direção do texto.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | True = texto vertical, False = texto horizontal.                                                                                                                                                                                   |
| labelOptions    |              | object        | Define as opções de etiqueta de célula (opções de marca de água).                                                                                                                                                                                                                                                                                                                                                                                                                                     |                                                                                                                                                                                                                                                    |
|                 | alignment    | inteiro longo | Especifica a posição da etiqueta da célula. Propriedade opcional.                                                                                                                                                                                                                                                                                                                                                                                                                                        | `vk label alignment top left`, `vk label alignment bottom left`, `vk label alignment top center`, `vk label alignment bottom center`, `vk label alignment top right`, `vk label alignment bottom right`                                            |
|                 | visibilidade | inteiro longo | Especifica a visibilidade da etiqueta da célula. Propriedade opcional.                                                                                                                                                                                                                                                                                                                                                                                                                                   | `vk label visibility auto`, `vk label visibility hidden`, `vk label visibility visible`                                                                                                                                                            |
|                 | foreColor    | text          | Define a cor do primeiro plano. Propriedade opcional.                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Sintaxe da cor CSS "#rrggbb" (sintaxe preferencial), sintaxe da cor CSS "rgb(r,g,b)" (sintaxe alternativa), nome da cor CSS (sintaxe alternativa)                      |
|                 | font         | text          | Especifica as características da fonte com o CSS de forma abreviada ("font-style font-variant font-weight font-size/line-height font-family"). Os valores font-size e font-family são obrigatórios.                                                                                                                                                                                                                                                                                   |                                                                                                                                                                                                                                                    |
| textDecoration  |              | inteiro longo | Especifica a decoração adicionada ao texto.                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | `vk text decoration double underline`, `vk text decoration line through`, `vk text decoration none`, `vk text decoration overline`, `vk text decoration underline`                                                                                 |
| textIndent      |              | inteiro longo | Define a unidade de indentação do texto. 1 = 8 píxeles                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |                                                                                                                                                                                                                                                    |
| textOrientation |              | inteiro longo | Define o ângulo de rotação do texto numa célula. Número entre -90 e 90                                                                                                                                                                                                                                                                                                                                                                                                                                                   |                                                                                                                                                                                                                                                    |
| marca de água   |              | text          | Define o conteúdo da marca de água (etiqueta da célula)                                                                                                                                                                                                                                                                                                                                                                                                                                                               |                                                                                                                                                                                                                                                    |
| wordWrap        |              | boolean       | Especifica se o texto deve ser envolvido.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | True = texto embrulhado, False = texto não embrulhado                                                                                                                                                                                              |

#### Layout

| Propriedade | Tipo          | Descrição                                                                                                                                                           | Valores possíveis                                                                                                    |
| ----------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| cellPadding | text          | Define o preenchimento da célula                                                                                                                                    |                                                                                                                      |
| hAlign      | inteiro longo | Define o alinhamento horizontal do conteúdo da célula.                                                                                              | `vk horizontal align center`, `vk horizontal align general`, `vk horizontal align left`, `vk horizontal align right` |
| locked      | boolean       | Especifica o estado de proteção da célula. Nota, sólo está disponible si está activada la [protección de hojas](#sheet-protection). | True = bloqueado, False = desbloqueado.                                                              |
| shrinkToFit | boolean       | Especifica se o conteúdo da célula deve ser reduzido.                                                                                               | True = conteúdo reduzido, False = sem redução.                                                       |
| tabStop     | boolean       | Especifica se o foco da célula pode ser definido utilizando a tecla Tab.                                                                            | True = a tecla Tab define o foco, False = a tecla Tab não define o foco.                             |
| vAlign      | inteiro longo | Especifica o alinhamento vertical do conteúdo da célula.                                                                                            | `vk vertical align bottom`, `vk vertical align center`, `vk vertical align top`                                      |

#### Informações sobre o estilo

| Propriedade | Tipo | Descrição                                                                                                                                                                                                                                                                                                                                               |
| ----------- | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name        | text | Define o nome do estilo                                                                                                                                                                                                                                                                                                                                 |
| parentName  | text | Especifica o estilo em que o estilo atual se baseia. Valores do estilo pai serão aplicados, em seguida, quaisquer valores do estilo atual são aplicados. Alterações feitas no estilo atual não serão referidas no estilo pai. Apenas disponível quando se utiliza uma folha de estilos. |

## Objeto 4D View Pro

El [objeto](Concepts/dt_object.md) 4D View Pro almacena todo el contenido de la hoja de cálculo. É tratado automaticamente pelo 4D View Pro. You can set or get this object using the [VP IMPORT FROM OBJECT](commands/vp-import-from-object.md) or [VP Export to object](commands/vp-export-to-object.md) commands.

Contém as seguintes propriedades:

| Propriedade  | Tipo de valor | Descrição                                         |
| ------------ | ------------- | ------------------------------------------------- |
| version      | Integer       | Versão do componente interno                      |
| dateCreation | Timestamp     | Data de criação                                   |
| dateModified | Timestamp     | Data da última modificação                        |
| meta         | Object        | Conteúdos gratuitos, reservados ao programador 4D |
| spreadJS     | Object        | Reservado para o componente 4D View Pro           |

## Variável de objeto do formulário 4D View Pro

La variable del objeto del formulario 4D View Pro es la variable del objeto  asociada al área del formulario 4D View Pro. Gere a informação utilizada pelo objeto 4D View Pro.

> A variável de objeto 4D View Pro é apenas para fins informativos (ou seja, depuração). Não deve, em caso algum, ser modificado.

Contém as seguintes propriedades:

| Propriedade                            | Tipo de valor | Descrição                                                                                                                                                                                                                                                                                                                                                                        |
| -------------------------------------- | ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ViewPro.area           | Text          | Nome da área 4D View Pro                                                                                                                                                                                                                                                                                                                                                         |
| ViewPro.callbacks      | Object        | Armazena informações temporárias necessárias para comandos que requerem callbacks como importar e exportar.                                                                                                                                                                                                                                                      |
| ViewPro.commandBuffers | Collection    | Stores sequentially the commands called by the method and executes them as a batch (rather than individually) when exiting the method, when a command returns a value, or when the [VP FLUSH COMMANDS](commands/vp-flush-commands.md) is called. Esse mecanismo aumenta o desempenho ao reduzir o número de pedidos enviados. |
| ViewPro.events         | Object        | [Eventos](#form-events).                                                                                                                                                                                                                                                                                                                                         |
| ViewPro.formulaBar     | Parâmetros    | Indica se a barra de fórmulas é ou não apresentada. Disponível apenas para a interface "barra de ferramentas".                                                                                                                                                                                                                                   |
| ViewPro.inited         | Parâmetros    | Indica si el área 4D View Pro ha sido inicializada o no (ver evento[On VP Ready](Events/onVpReady.md)).                                                                                                                                                                                                                                       |
| ViewPro.interface      | Text          | Especifica o tipo de interface do usuário: "ribbon", "toolbar", "none".                                                                                                                                                                                                                                                                          |
