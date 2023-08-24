---
id: methods
title: Página Métodos
---

This page contains parameters defining the Method editor interface and it default display as well as options concerning its operation. Está dividida em duas secções às quais se acede através dos separadores Tema e Opções.

## Temas

This page allows selecting, creating, or configuring Method editor themes. Um tema define a fonte, o tamanho da fonte, as cores e os estilos dos itens apresentados no editor de código.

![](../assets/en/Preferences/themes.png)

### Lista de temas

Nesta lista, seleciona o tema a aplicar ao editor de código. São apresentados todos os temas disponíveis, incluindo os temas personalizados (se existirem). 4D fornece dois temas por padrão:

* **Tema Light predefinido**
* **Tema escuro predefinido**

> Os temas padrão não podem ser modificados ou eliminados.

A **myTheme** theme is automatically added if you already customized method editor styles in previous 4D releases.

### Criar temas personalizados

É possível criar temas que podem ser totalmente personalizados. Para criar um tema, selecione um tema existente e clique em **+** na parte inferior da lista de temas. Também pode adicionar temas personalizados copiando ficheiros de temas na pasta `4D Editor Themes` (ver abaixo).

### Ficheiros de temas personalizados

Cada tema personalizado é armazenado em um único arquivo JSON chamado *themeName.json*. Os arquivos JSON para temas personalizados são armazenados na pasta `4D Editor Themes` localizada no mesmo nível que o [ficheiro de preferências](overview.md#storage) de 4D.

Se os valores-chave não forem definidos em um tema personalizado, eles terão como padrão os valores do tema *Default Light Theme*. Se um ficheiro de tema JSON for inválido, o tema *Default Light Theme* é carregado sendo gerado um erro.

> Quando um ficheiro de tema é modificado por um editor externo, 4D deve ser reiniciado para considerar a(s) modificação(ões).

## Definição do tema

Definir um tema significa:

* definir um tipo de letra e um tamanho de letra globais para todo o editor de código,
* atribuir estilos e cores específicos a cada elemento da linguagem 4D (campos, tabelas, variáveis, parâmetros, SQL, etc.), elemento da linguagem SQL (palavras-chave, funções, etc.) e fundos de cor.

A combinação de cores e estilos diferentes é particularmente útil para manutenção do código.

### Tipo e tamanho de letra

The **font** and **font size** menus allows you to select the font name and size used in the Method editor entry area for all categories.

### Linguagem 4D e Linguagem SQL

Pode definir estilos de letra e cores diferentes (cor da letra ou cor de fundo) cada tipo de elemento de linguagem. Pode selecionar o(s) elemento(s) a personalizar na lista Categoria.

### Outros estilos

These options configure the various colors used in the Method editor and debugger interfaces.

![](../assets/en/Preferences/categories.png)

|                                                | Descrição                                                                                                                                                          |
| ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Cor de fundo**                               | Cor de fundo da janela do editor de métodos.                                                                                                                       |
| **Borda da linha em execução no depurador**    | Cor da borda que envolve a linha de execução no depurador quando a opção "Destacar linha de execução" está ativada na página [Opções](#options).                   |
| **Cor de fundo da linha do cursor**            | Cor de fundo da linha que contém o cursor.                                                                                                                         |
| **Cor de fundo da linha de execução**          | Cor de fundo da linha que está a ser executada no depurador.                                                                                                       |
| **Destaque das palavras encontradas**          | Cor de destaque das palavras encontradas numa pesquisa.                                                                                                            |
| **Destaque dos parênteses**                    | Cor de realce dos parênteses correspondentes (utilizada quando os pares de parênteses são assinalados por realce, ver [Opções](#options)).                         |
| **Destaque dos blocos**                        | Cor de realce dos blocos lógicos selecionados quando a opção "Realçar blocos lógicos" está ativada em [Opções](#options).                                          |
| **Realce da mesma variável ou campo**          | Cor de realce para outras ocorrências da mesma variável ou texto de campo quando uma das opções "Realçar variáveis e texto" estiver ativada em [Opções](#options). |
| **Destaque da linha em execução no depurador** | Cor de realce da linha atualmente em execução no depurador quando a opção "Realçar linha em execução" está ativada em [Opções](#options).                          |
| **Cor de fundo da seleção**                    | Cor de fundo da seleção.                                                                                                                                           |
| **Texto sugerido**                             | Color of autocomplete text suggested by the Method editor.                                                                                                         |

## Opções

This page configures Method editor display options.

![](../assets/en/Preferences/options.png)

### Opções

#### Linguagem de programação 4D (Use os parâmetros regionais do sistema)

Permite-lhe desativar/ativar os parâmetros do código "internacional" para a aplicação 4D local.

* **não selecionado** (padrão): os parâmetros English-US e a linguajem de programação inglês são utilizados nos métodos 4D.
* **verificado**: os parâmetros regionais são utilizados nos métodos 4D.

> Se modificar esta opção, tem de reiniciar a aplicação 4D para que a alteração seja tida em conta.

#### Indentação

Changes the indentation value for the 4D code in the Method editor. A largura deve ser especificada em pontos (10 por defeito).

O código 4D é automaticamente indentado para revelar a sua estrutura:

![](../assets/en/Preferences/optionsIndent.png)

A modificação deste valor predefinido pode ser útil se os seus métodos contiverem algoritmos complexos com muitos níveis de incorporação. Pode ser utilizada uma indentação mais estreita para limitar a deslocação horizontal.

#### Mostrar los números de línea

Lets you display the line numbers by default in each window of the Method editor. You can also show/hide line numbers for the current window directly from the Method editor.

#### Mostrar as listas

Lets you choose whether or not to show the lists of objects (Commands, Tables and fields, etc.) by default when the Method editor window is opened. You can also show or hide each list directly from the Method editor.

#### Destacar os blocos lógicos

Quando marcada, todo o código pertencente a um bloco lógico (If/End if, por exemplo) é realçado quando o rato é colocado sobre o nó expandido:

![](../assets/en/Preferences/optionsLogicalBlocks.png)

A cor de destaque pode ser definida na página [Tema](#theme-definition).

#### Mostrar sempre as linhas de bloco

Oculta permanentemente as linhas verticais dos blocos. As linhas de bloco são concebidas para ligar visualmente os nós. Por padrão, são sempre apresentados (exceto quando os ícones de recolher/expandir estão ocultos, ver abaixo).

![](../assets/en/Preferences/optionsBlockLines.png)

#### Ocultar ícones recolher/expandir

Permite-lhe ocultar todos os ícones de expansão/recolhimento por padrão ao apresentar o código. Quando a opção está selecionada, os ícones dos nós (bem como as linhas de bloco locais, ver acima) são apresentados temporariamente quando o rato é colocado sobre um nó:

![](../assets/en/Preferences/optionsHideIcons.png)

#### Inserir () e fechar } ) ] "

Permite a inserção automática de () e de chaves de fecho durante a escrita de código. Esta opção controla duas funcionalidades automáticas:

* **par de parênteses ()**: adicionado após um comando 4D, palavra-chave ou método projeto inserido a partir de uma lista de sugestões ou de conclusão, se o elemento inserido requer um ou mais argumentos obrigatórios. Por exemplo, se escrever "C_OB" e pressionar Tab, 4D escreve "C_OBJECT()" e coloca o ponto de inserção dentro do ().

* **}, ), ], ou "**: carácter adicionado quando se escreve respetivamente uma abertura {, (, ], ou ". Esta função permite inserir pares de símbolos correspondentes no ponto de inserção ou à volta de um texto selecionado. Por exemplo, se realçar uma cadeia de caracteres e escrever um único ", toda a cadeia de caracteres selecionada será colocada entre "":

![](../assets/en/Preferences/optionsClosing.png)  
![](../assets/en/Preferences/optionsClosing2.png)

#### Correspondência \[]\(){}

Define a sinalização gráfica das chaves correspondentes no código. Esta sinalização aparece sempre que é selecionado um parêntese quadrado, parêntese ou parêntese curvo. As opções abaixo estão disponíveis:

* **Nenhum**: sem sinalização
* **Retângulo** (padrão): parêntesis rodeados por uma linha preta  
  ![](../assets/en/Preferences/optionsRectangle.png)
* **Cor de fundo**: as chavetas são realçadas (a cor é definida na página [Tema](#theme-definition)).
* **Negrito**: as chavetas são apresentadas a negrito.

#### Destaque de variáveis e campos

Permite destacar todas as ocorrências da mesma variável ou campo numa janela de método aberta.

![](../assets/en/Preferences/optionsVariables.png)

* **Não**(padrão): sem destaque
* **No cursor**: todas as ocorrências são realçadas quando se clica no texto
* **Na seleção**: todas as ocorrências são realçadas quando o texto é selecionado

A cor de destaque pode ser definida na página [Tema](#theme-definition).

#### Depurar (Destacar a linha em execução)

Destaca a linha que está atualmente em execução no depurador, para além do indicador de seta amarela normal.

![](../assets/en/Preferences/optionsLine.png)

Se anular a seleção desta opção, só é mostrada a seta amarela.

### Sugestões

This area lets you configure autocomplete mechanisms in the Method editor to adapt it to your own work habits.

|                               | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Abertura automática da janela | Acciona a apresentação automática da janela de sugestões para: <ul><li>Constantes</li><li>Variáveis (locais e interprocessos) e atributos de objetos</li><li>Tabelas</li><li>Protótipos (ou seja, as funções de classe)</li></ul>Por exemplo, quando a opção "Variáveis (locais ou interprocessos) e atributos de objeto" está selecionada, aparece uma lista de sugestões quando escreve o carácter $:![](../assets/en/Preferences/suggestionsAutoOpen.png) Pode desativar este funcionamento para certos elementos da língua, desmarcando a opção correspondente. |
| Validação de uma sugestão     | Sets the entry context that allows the Method editor to validate automatically the current suggestion displayed in the autocomplete window.<ul><li>**Tabulação e delimitadores**<br/>Quando esta opção está selecionada, pode validar a seleção atual com a tecla Tab ou qualquer delimitador relevante para o contexto. Por exemplo, se introduzir "ALE" e depois "(", 4D escreve automaticamente "ALERT(" no editor. Eis a lista de delimitadores tidos em conta:<br/> ( ; : = < [ {</li><li>**Somente tabulação**<br/>Quando esta opção está selecionada, só pode utilizar a tecla Tab para inserir a sugestão atual. Isto pode ser utilizado mais particularmente para facilitar a introdução de caracteres delimitadores em nomes de elementos, tais como ${1}.**Note**: pode também fazer duplo clique na janela ou premir a tecla Retorno de carro para validar uma sugestão.</li></ul>                                                                                                                                                                                                                                                      |
