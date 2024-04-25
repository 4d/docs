---
id: methods
title: Página Métodos
---

Esta página contém parâmetros que definem a interface do Editor de código e a sua visualização predefinida, bem como opções relativas ao seu funcionamento. Está dividida em duas secções às quais se acede através dos separadores Tema e Opções.

## Temas

Esta página permite selecionar, criar ou configurar temas do Editor de código. Um tema define a fonte, o tamanho da fonte, as cores e os estilos dos itens apresentados no editor de código.

![](../assets/en/Preferences/themes.png)

### Lista de temas

Nesta lista, seleciona o tema a aplicar ao editor de código. São apresentados todos os temas disponíveis, incluindo os temas personalizados (se existirem). 4D fornece dois temas por padrão:

- **Tema Light predefinido**
- **Tema escuro predefinido**

> Os temas padrão não podem ser modificados ou eliminados.

A **myTheme** theme is automatically added if you already customized Code Editor styles in previous 4D releases.

### Criar temas personalizados

É possível criar temas que podem ser totalmente personalizados. To create a theme, select an existing theme and click on the **+** at the bottom of the theme list. You can also add customized themes by copying theme files in the `4D Editor Themes` folder (see below).

### Ficheiros de temas personalizados

Each custom theme is stored in a single JSON file named _themeName.json_ The JSON files for custom themes are stored in the `4D Editor Themes` folder located at the same level as the 4D [preferences file](overview.md#storage).

If key values are not defined in a custom theme, they default to the values from the _Default Light Theme_. If a JSON theme file is invalid, the _Default Light Theme_ is loaded and an error is generated.

> Quando um ficheiro de tema é modificado por um editor externo, 4D deve ser reiniciado para considerar a(s) modificação(ões).

## Definição do tema

Definir um tema significa:

- definir um tipo de letra e um tamanho de letra globais para todo o editor de código,
- atribuir estilos e cores específicos a cada elemento da linguagem 4D (campos, tabelas, variáveis, parâmetros, SQL, etc.), elemento da linguagem SQL (palavras-chave, funções, etc.) e fundos de cor.

A combinação de cores e estilos diferentes é particularmente útil para manutenção do código.

### Tipo e tamanho de letra

The **font** and **font size** menus allows you to select the font name and size used in the Code Editor entry area for all categories.

### Linguagem 4D e Linguagem SQL

Pode definir estilos de letra e cores diferentes (cor da letra ou cor de fundo) cada tipo de elemento de linguagem. Pode selecionar o(s) elemento(s) a personalizar na lista Categoria.

### Outros estilos

Essas opções configuram as várias cores usadas nas interfaces do Editor de código e do depurador.

![](../assets/en/Preferences/categories.png)

|                                                | Descrição                                                                                                                                                                                |
| ---------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Cor de fundo**                               | Cor de fundo da janela do editor de código.                                                                                                                              |
| **Borda da linha em execução no depurador**    | Color of the border surrounding the line currently running in the debugger when the "Highlight line running" option is enabled in the [Options](#options) page.          |
| **Cor de fundo da linha do cursor**            | Cor de fundo da linha que contém o cursor.                                                                                                                               |
| **Cor de fundo da linha de execução**          | Cor de fundo da linha que está a ser executada no depurador.                                                                                                             |
| **Destaque das palavras encontradas**          | Cor de destaque das palavras encontradas numa pesquisa.                                                                                                                  |
| **Destaque dos parênteses**                    | Highlight color of corresponding parentheses (used when pairs of parentheses are signaled by highlighting, see [Options](#options)).                  |
| **Destaque dos blocos**                        | Highlight color for selected logical blocks when the "Highlight logical blocks" option is enabled in the [Options](#options).                                            |
| **Realce da mesma variável ou campo**          | Highlight color for other occurrences of the same variable or field text when one of the "Highlighting variables and text" option is enabled in the [Options](#options). |
| **Destaque da linha em execução no depurador** | Highlight color of the line currently running in the debugger when the "Highlight line running" option is enabled in the [Options](#options).                            |
| **Cor de fundo da seleção**                    | Cor de fundo da seleção.                                                                                                                                                 |
| **Texto sugerido**                             | Cor do texto do preenchimento automático sugerido pelo Editor de código.                                                                                                 |

## Opções

Esta página configura as opções de exibição do Editor de código.

![](../assets/en/Preferences/options.png)

### Opções

#### Linguagem de programação 4D (Use os parâmetros regionais do sistema)

Permite-lhe desativar/ativar os parâmetros do código "internacional" para a aplicação 4D local.

- **unchecked** (default): English-US settings and the English programming language are used in 4D methods.
- **checked**: Regional settings are used in 4D methods.

> Se modificar esta opção, tem de reiniciar a aplicação 4D para que a alteração seja tida em conta.

#### Indentação

Altera o valor de indentação do código 4D no editor de código. A largura deve ser especificada em pontos (10 por defeito).

O código 4D é automaticamente indentado para revelar a sua estrutura:

![](../assets/en/Preferences/optionsIndent.png)

A modificação deste valor predefinido pode ser útil se os seus métodos contiverem algoritmos complexos com muitos níveis de incorporação. Pode ser utilizada uma indentação mais estreita para limitar a deslocação horizontal.

#### Mostrar los números de línea

Permite-lhe apresentar os números de linha por padrão em cada janela do Editor de código. Também pode mostrar/ocultar números de linha para a janela atual diretamente a partir do Editor de código.

#### Mostrar as listas

Lets you choose whether or not to show the lists of objects (Commands, Tables and fields, etc.) by default when the Code Editor window is opened. Também é possível mostrar ou ocultar cada lista diretamente a partir do Editor de código.

#### Mostrar pranchetas

Permite-lhe escolher se quer ou não mostrar as várias pranchetas no editor de código.

![](../assets/en/Preferences/show-clipboards.png)

The corresponding [clipboard shorcuts](https://doc.4d.com/4Dv19R3/4D/19-R3/Writing-a-method.300-5612559.en.html#3977166) are still active when these clipboards are hidden.

#### Destacar os blocos lógicos

Quando marcada, todo o código pertencente a um bloco lógico (If/End if, por exemplo) é realçado quando o rato é colocado sobre o nó expandido:

![](../assets/en/Preferences/optionsLogicalBlocks.png)

The highlight color can be set in the [Theme](#theme-definition) page.

#### Mostrar sempre as linhas de bloco

Oculta permanentemente as linhas verticais dos blocos. As linhas de bloco são concebidas para ligar visualmente os nós. Por padrão, são sempre apresentados (exceto quando os ícones de recolher/expandir estão ocultos, ver abaixo).

![](../assets/en/Preferences/optionsBlockLines.png)

#### Ocultar ícones recolher/expandir

Permite-lhe ocultar todos os ícones de expansão/recolhimento por padrão ao apresentar o código. Quando a opção está selecionada, os ícones dos nós (bem como as linhas de bloco locais, ver acima) são apresentados temporariamente quando o rato é colocado sobre um nó:

![](../assets/en/Preferences/optionsHideIcons.png)

#### Inserir () e fechar } ) ] "

Permite a inserção automática de () e de chaves de fecho durante a escrita de código. Esta opção controla duas funcionalidades automáticas:

- **parentheses pair ()**: Added after a 4D command, keyword or project method inserted from a suggestion or completion list, if the inserted element requires one or more mandatory arguments. Por exemplo, se escrever "C_OB" e pressionar Tab, 4D escreve "C_OBJECT()" e coloca o ponto de inserção dentro do ().

- **closing }, ), ], or "**: Character added when you type respectively an opening {, (, ], or ". Esta função permite inserir pares de símbolos correspondentes no ponto de inserção ou à volta de um texto selecionado. Por exemplo, se realçar uma cadeia de caracteres e escrever um único ", toda a cadeia de caracteres selecionada será colocada entre "":

![](../assets/en/Preferences/optionsClosing.png)\
![](../assets/en/Preferences/optionsClosing2.png)

#### Correspondência \[]\(){}

Define a sinalização gráfica das chaves correspondentes no código. Esta sinalização aparece sempre que é selecionado um parêntese quadrado, parêntese ou parêntese curvo.
As opções abaixo estão disponíveis:

- **None**: No signaling
- **Rectangle** (default): Braces surrounded by a black line\
  ![](../assets/en/Preferences/optionsRectangle.png)
- **Background Color**: Braces highlighted (the color is set in the [Theme](#theme-definition) page).
- **Bold**: Braces displayed in bold.

#### Destaque de variáveis e campos

Permite destacar todas as ocorrências da mesma variável ou campo numa janela de método aberta.

![](../assets/en/Preferences/optionsVariables.png)

- **No**(default): No highlight
- **On cursor**: All occurrences are highlighted when the text is clicked
- **On selection**: All occurrences are highlighted when the text is selected

The highlight color can be set in the [Theme](#theme-definition) page.

#### Depurar (Destacar a linha em execução)

Destaca a linha que está atualmente em execução no depurador, para além do indicador de seta amarela normal.

![](../assets/en/Preferences/optionsLine.png)

Se anular a seleção desta opção, só é mostrada a seta amarela.

### Sugestões

Esta área permite-lhe configurar os mecanismos de preenchimento automático no Editor de código para o adaptar aos seus próprios hábitos de trabalho.

|                               | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Abertura automática da janela | Triggers the automatic display of the suggestion window for:<ul><li>Constants</li><li>Variables (local and interprocess) and object attributes</li><li>Tables</li><li>Prototypes (_i.e._, class functions)</li></ul><p>For example, when the "Variables (local or interprocess) and object attributes" option is checked, a list of suggestions appears when you type the $ character:</p><p>![](../assets/en/Preferences/suggestionsAutoOpen.png)</p> You can disable this functioning for certain elements of the language by deselecting their corresponding option.                                                                                                                                                                                                                                                                                                                                                                                   |
| Validação de uma sugestão     | Sets the entry context that allows the Code Editor to validate automatically the current suggestion displayed in the autocomplete window.<ul><li>**Tab and delimiters**<br/>When this option is selected, you can validate the current selection with the Tab key or any delimiter that is relevant to the context. Por exemplo, se introduzir "ALE" e depois "(", 4D escreve automaticamente "ALERT(" no editor. Here is the list of delimiters that are taken into account:<br/> ( ; : = < [ {</li><li>**Tab only**<br/>When this option is selected, you can only use the Tab key to insert the current suggestion. This can be used more particularly to facilitate the entry of delimiter characters in element names, such as ${1}.**Note**: You can also double-click in the window or press the Carriage return key to validate a suggestion.</li></ul> |
