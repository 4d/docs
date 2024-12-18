---
id: debugger
title: Depurador
---

O depurador é útil quando é necessário detetar erros ou monitorizar a execução de métodos. Permite-lhe percorrer o seu código lentamente e examinar a informação. Este processo é designado por "rastreio".

![debugger-window-local](../assets/en/Debugging/debugger-window-intro.png)

## Chamando o depurador

Há várias formas de exibir o depurador:

- Clicar no botão **Trace** na [janela Syntax Error] (basics.md#syntax-error-window)
- Usando o comando [`TRACE`] (https://doc.4d.com/4dv19/help/command/en/page157.html)
- Clicando no botão **Depurar** na janela Executar método ou selecionando o botão **Executar e depurar...** no Editor de Código
- Usando **Alt+Shift+Botão Direito** (Windows) ou **Ctrl+Option+Cmd+Click** (macOS) enquanto um método está sendo executado, em seguida, selecionando o processo para rastrear no menu pop-up:

![open-debugger](../assets/en/Debugging/openDebugger.png)

- Clicar no botão **Trace** quando um processo for selecionado na página Process (Processo) do Runtime Explorer.
- Adicionar um ponto de interrupção na janela do Editor de código ou nas páginas Break e Catch do Explorador de execução.

Quando chamada, a janela do depurador fornece o nome do método ou da função de classe que rastreia atualmente e a ação que causa o aparecimento inicial da janela do depurador. Por exemplo, na janela do depurador acima:

- \*Clients_BuildLogo é o método que é rastreado
- A janela do depurador apareceu porque detectou uma chamada para o comando `C_PICTURE` e este comando era um dos comandos a ser pego

A exibição de uma nova janela do depurador utiliza a mesma configuração que a última janela exibida na mesma sessão. Se executar vários processos usuário, pode rastreá-los de forma independente e ter uma janela do depurador aberta para cada processo.

A janela do depurador é normalmente apresentada na máquina onde o código é executado. Com uma aplicação monousuário, é sempre apresentado na máquina que executa a aplicação. Com uma aplicação cliente/servidor, é apresentado:

- no 4D remoto para o código que está a ser executado localmente
- no computador do servidor para o código em execução no servidor (por exemplo, um método com a opção **executar no servidor**).

> Se o servidor estiver a funcionar sem interface, não pode ser apresentada qualquer janela do depurador no servidor, pelo ser necessário utilizar o depurador remoto. Ver [Depuración desde máquinas remotas](./debugging-remote.md).

## Botões da barra de ferramentas

A barra de ferramentas do depurador inclui vários botões, associados a atalhos predefinidos:

![execution-control-toolbar-buttons](../assets/en/Debugging/executionToolbarButtons.png)

> Os atalhos padrão podem ser personalizados na página Atalhos da caixa de diálogo Preferências.

#### Retomar execução

Interrompe o modo de rastreamento e retoma o curso normal da execução do método.

> **Shift** + **F5** or **Shift** + clicking the **No Trace** button resumes execution. Também desativa todas as chamadas TRACE subsequentes para o processo atual.

#### Executar passo a passo

Executa a linha de método atual, indicada pelo contador de programa (a seta amarela). O depurador passa para a linha seguinte.

O botão Executar não entra em sub-rotinas e funções, mantém-se ao nível do método que rastreia atualmente. If you want to also trace subroutines and functions calls, use the **Step Into** button.

Na depuração remota, se o método for executado no servidor, o método principal é chamado após a execução da última linha do método secundário. If the parent method is executed on the remote side, the **Step Over** button has the same effect as the **No Trace** button.

#### Passo a passo detalhado

Quando uma linha que chama outro método (sub-rotina ou função) é executada, clique neste botão para exibir o outro método e percorrê-lo.

The new method becomes the current (top) method in the [Call Chain Pane](#call-chain-pane) of the Debugger window.

When executing a line that does not call another method, this button has the same effect as the **Step Over** button.

#### Step Out

If you are tracing subroutines and functions, clicking on this button allows you to execute the entire method currently being traced and to step back to the caller method. The Debugger window is brought back to the previous method in the call chain. If the current method is the last method in the call chain, the Debugger window is closed.

In remote debugging, on execution of the last line of the method, if the method is executed on the server, the parent method is called. If the parent method is executed on the remote side, the button acts in the same manner as the No Trace button.

#### Step Into Process

On execution of a line that creates a new process (i.e., calling the New process command), this button opens a new Debugger window that allows you to trace the process method of the newly created process. On execution of a line that does not creates a new process, this button acts in the same manner as the Step Over button.

#### Abortar

Interrompe a execução do método e regressa ao estado anterior ao início da execução do método:

- Ao rastrear um método formulário ou um método objeto em execução em resposta a um evento: pára e retorna ao formulário.
- Ao rastrear um método em execução no ambiente do aplicativo: pára e retorna ao ambiente.

#### Abortar e editar

The method that is executing when you click the **Abort and Edit** button opens in the Code Editor.

> **Tip**: Use this button when you know which changes are required in your code, and when these changes are required to pursue the testing of your methods. Quando terminar as alterações, volte a executar o método.

#### Editar

O método executado no momento em que se clica no botão Editar abre-se no Editor de código.

Se utilizar este botão para modificar um método, as modificações só entram em vigor na próxima vez que este for executado.

> **Tip:** Use this button when you know which changes are required in your code and when they don't interfere with the rest of the code to be executed or traced.

#### Botão Salvar parâmetros

Salva a configuração atual da janela do depurador e a torna a configuração padrão. Isto inclui:

- o tamanho e a posição da janela
- a posição das linhas de divisão e o conteúdo da área que avalia as expressões

Estes parâmetros são armazenados no projeto.

Essa ação não está disponível no modo de depuração remota (consulte [Depuração de máquinas remotas](./debugging-remote)).

## Janela de expressão

O painel **Watch** é exibido no canto superior esquerdo da janela do depurador, abaixo da barra de ferramentas de controle de execução. Aqui um exemplo simples:

![watch-pane](../assets/en/Debugging/watchPane.png)

> Este painel não está disponível no modo de depuração remota.

O painel de expressão: **Watch Pane** exibe informações gerais úteis sobre o sistema, ambiente 4D e ambiente de execução.

A coluna **Expressão** exibe os nomes dos objetos e das expressões. A coluna **Value** exibe seus valores correspondentes atuais. Clicar em qualquer valor no lado direito do painel permite-lhe modificar o valor do objeto, se tal for permitido para esse objeto.

A qualquer momento, você pode arrastar e soltar temas, sublistas de temas (se houver) e itens de temas para o [Custom Watch Pane] (#custom-watch-pane).

### Lista de expressões

#### Objetos linha

Este tema permite-lhe acompanhar os valores dos objetos ou expressões:

- usado na linha de código a ser executada (aquela marcada com o contador de programas - a seta amarela no [Painel Código-fonte] (#painel código-fonte)),
- utilizado na linha de código anterior

Como a linha de código anterior é a que acabou de ser executada antes, este tema mostra os objetos ou expressões da linha atual antes e depois da execução da linha.  Digamos que executa o seguinte método:

```4d
TRACE
$a:=1
$b:=a+1
$c:=a+b
```

1. Uma janela do depurador é aberta com o contador do programa definido para a linha com `a:=1`. Nesse momento, o tema **Line Objects** é exibido:

   | $a | Indefinido |
   | -- | ---------- |

   A variável `$a` ainda não foi inicializada, mas é exibida porque é usada na linha a ser executada.

2. Você clica no botão **Step Over**. O contador do programa está agora definido para a linha `b:=a+1`. Neste ponto, o tema **Objetos linha** é exibido:

   | $a | 1          |
   | -- | ---------- |
   | $b | Indefinido |

   O valor da variável `$a` é agora 1. A variável `$b` ainda não foi inicializada, mas é exibida porque é usada na linha a ser executada.

3. Você clica no botão **Step Over** novamente. O contador do programa está agora definido na linha com $c:=a+b. O tema **Objetos atuais** exibe:

   | $c | Indefinido |
   | -- | ---------- |
   | $a | 1          |
   | $b | 2          |

   O valor da variável `$b` é agora 2. A variável `$c` ainda não foi inicializada, mas é exibida porque é usada na linha a ser executada.

#### Variáveis.

Este tema é composto pelos seguintes subtemas:

| Subtema       | Descrição                                                         | Os valores podem ser modificados? |
| ------------- | ----------------------------------------------------------------- | --------------------------------- |
| Interprocesso | Lista de variáveis interprocessos que são utilizadas agora        | Sim                               |
| Processo      | Lista de variáveis processo utilizadas pelo processo atual        | Sim                               |
| Local         | Lista de variáveis locais utilizadas pelo método rastreado        | Sim                               |
| Parâmetros    | Lista dos parâmetros recebidos pelo método                        | Sim                               |
| Self          | Ponteiro para o objeto atual, quando se rastreia um método objeto | Não                               |

Os arrays, como outras variáveis, aparecem nos subtemas Interprocesso, Processo e Local, dependendo do seu escopo. O depurador apresenta os primeiros 100 elementos. Dentro da coluna **Valor**, você pode modificar os valores dos elementos de matriz, mas não o tamanho das matrizes.

Para exibir os tipos de variáveis e seus nomes internos, clique com o botão direito do mouse e marque a opção **Show Types** no menu de contexto:

![show-types-menu-item](../assets/en/Debugging/showTypes.png)

Aqui está o resultado:

![dynamic-variable-names](../assets/en/Debugging/dynamicVariableNames.png)

#### Valores actuais do formulário

Este tema contém o nome de cada objeto dinâmico incluído no formulário atual, bem como o valor da sua variável associada:

![current-form-value](../assets/en/Debugging/current-form-values.png)

Alguns objetos, como os arrays list box, podem ser apresentados como dois objetos distintos, a variável do próprio objeto e a sua fonte de dados.

#### Constantes

Como a página Constantes da janela Explorer, esse tema exibe as constantes predefinidas oferecidas pelo 4D. As expressões deste tema não podem ser modificadas.

#### Semáforos

Este tema lista os semáforos locais definidos atualmente. Para cada semáforo, a coluna Valor fornece o nome do processo que define o semáforo. As expressões deste tema não podem ser modificadas. The expressions from this theme cannot be modified.

#### Processos

Este tema enumera os processos iniciados desde o início da sessão de trabalho. A coluna do valor apresenta o tempo utilizado e o estado atual de cada processo (ou seja, Executando, pausado, etc.). As expressões deste tema não podem ser modificadas.

#### Tabela

Este tema lista as tabelas e campos na base de dados 4D. Para cada item da Tabela, a coluna Valor exibe o tamanho da seleção atual para o processo atual, bem como o número de **registros bloqueados**.

Para cada item Campo, a coluna Valor apresenta o valor do campo para o registo atual (exceto imagem e BLOB). Pode modificar os valores dos campos, mas não as informações das tabelas.

#### Conjuntos

Este tema lista os conjuntos definidos no processo atual (aquele que está sendo rastreado) e os conjuntos interprocessos. Para cada conjunto, a coluna Valor apresenta o número de registos e o nome da tabela. As expressões deste tema não podem ser modificadas.

#### Seleções temporárias

Este tema lista as seleções temporárias definidas no processo atual (aquele que está sendo rastreado no momento); ele também lista as seleções temporárias entre processos. Para cada seleção temporária, a coluna Valor apresenta o número de registos e o nome da tabela. As expressões deste tema não podem ser modificadas.

#### Informação

Este tema contém informações gerais sobre o funcionamento da base de dados, tais como a tabela predefinida atual (se existir), espaço de memória físico, virtual, livre e utilizado, destino da consulta, etc.

#### Web

Este tema apresenta informações sobre o servidor Web principal da aplicação (apenas disponível se o servidor Web estiver ativo):

- Arquivo Web para Enviar: nome do arquivo Web aguardando ser enviado (se houver)
- Utilização da cache Web: número de páginas presentes na cache Web, bem como a sua percentagem de utilização
- Tempo decorrido do servidor Web: duração da utilização do servidor Web no formato horas:minutos:segundos
- Contagem de visitas à Web: número total de pedidos HTTP recebidos desde o lançamento do servidor Web, bem como o número instantâneo de pedidos por segundo
- Número de processos Web ativos: número de processos Web ativos, todos os processos Web em conjunto

As expressões contidas neste tema não podem ser modificadas.

### Menu contextual

O menu contextual da janela de expressão oferece opções adicionais.

![context-menu](../assets/en/Debugging/contextual-menu.png)

- **Recolher tudo**: Recolhe todos os níveis da lista hierárquica.
- **Expandir tudo**: Expandir todos os níveis da lista hierárquica.
- **Mostrar tipos**: muestra el tipo de cada elemento de la lista (cuando es apropiado).
- \*\*Mostrar os números dos campos e das tabelas: Apresenta o número de cada tabela ou campo. Útil se trabalhar com números de tabelas ou de campos, ou com apontadores utilizando comandos como Table ou Field\`.
- **Mostrar Ícones**: Cada objeto é precedido por um ícone que indica seu tipo. Você pode desativar essa opção para acelerar a exibição, ou apenas porque você prefere usar apenas a opção **Mostrar Tipos**.
- **Tabelas e Campos classificados**: classifica as tabelas e os campos em ordem alfabética em suas respectivas listas.
- **Mostrar números inteiros em hexadecimal**: Os números são normalmente apresentados em notação decimal. Esta opção apresenta-os em notação hexadecimal. Nota: para introduzir um valor numérico em hexadecimal, digite 0x (zero + "x"), seguido dos dígitos hexadecimais.
- **Activar el seguimiento de la actividad**: activa el seguimiento de la actividad (control avanzado de la actividad interna de la aplicación) y muestra la información obtenida en los temas adicionales: **Programador**, **Web** y **Red**.

## Painel da cadeia de chamadas

Um método pode chamar outros métodos ou funções de classe, que podem chamar outros métodos ou funções. O painel Cadeia de chamadas permite-lhe acompanhar essa hierarquia.

![call-chain-pane](../assets/en/Debugging/call-chain-example.png)

Cada item do nível principal é o nome de um método ou função classe. O item superior é o que é atualmente rastreado, o item seguinte do nível principal é o nome do chamador (o método ou função que chamou o que é atualmente rastreado), o item seguinte é o chamador do chamador, e assim por diante.

Na imagem acima:

- O `thirdMethod` não recebeu nenhum parâmetro
- \`$0 está atualmente indefinido, porque o método não atribuiu nenhum valor a $0 (porque ainda não executou esta atribuição ou por o método ser uma sub-rotina e não uma função)
- O `secondMethod` recebeu três parâmetros do `firstMethod`:
  - $1 é um ponteiro para a tabela `[Employee]`
  - $2 é um ponteiro para o campo `ID` na tabela `[Employee]`
  - $3 é um parâmetro alfanumérico cujo valor é "Z"

Você pode dar duplo clique no nome de qualquer método para exibir seu conteúdo no [Source Code Pane](#source-code-pane).

Clicar no ícone junto ao nome de um método ou função expande, ou recolhe os parâmetros e o resultado (se existir). Os valores aparecem no lado direito do painel. Clicar em qualquer valor do lado direito permite-lhe alterar o valor de qualquer parâmetro ou resultado de função.

Para exibir o tipo de parâmetro, verifique a opção **Mostrar tipos** no menu contextual:

![call-chain-show-types](../assets/en/Debugging/callChainShowTypes.png)

Depois de implementar a lista de parâmetros, você pode arrastar e soltar parâmetros e resultados de funções para o [Painel de Observação Personalizado](#custom-watch-pane).

Você também pode usar o comando [Get call chain](https://doc.4d.com/4dv19/help/command/en/page1662.html) para recuperar a cadeia de chamadas programaticamente.

## Painel de Observação Personalizado

O Painel de controle personalizado é útil para avaliar expressões. É semelhante ao [Watch Pane](#watch-pane), exceto que aqui você decide quais expressões são exibidas. Qualquer tipo de expressão pode ser avaliado:

- campo
- variável
- pointer
- cálculo
- Comando 4D
- method
- e qualquer outra coisa que devolva um valor

![custom-Watch-pane](../assets/en/Debugging/custom-watch-pane.png)

É possível avaliar qualquer expressão que possa ser apresentada sob a forma de texto. Isto não abrange os campos ou variáveis imagem e BLOB. Para exibir o conteúdo do BLOB, você pode usar comandos BLOB, como [BLOB to text] (https://doc.4d.com/4dv19/help/command/en/page555.html).

### Manuseamento de expressões

Existem várias formas de adicionar expressões à lista:

- Arraste e solte um objeto ou expressão do painel Watch ou do painel Call Chain
- Selecione uma expressão no [painel Source Code](#source-code-pane) e pressione **ctrl+D**  (Windows) ou **cmd+D** (macOS)
- Dê duplo clique em algum lugar no espaço vazio do Custom Watch Pane (adiciona uma expressão com um nome de espaço reservado que você pode editar)

Pode introduzir qualquer fórmula que devolva um resultado.

Para editar uma expressão, clique nela para selecioná-la e, em seguida, clique novamente ou pressione **Enter** no seu teclado.

Para excluir uma expressão, clique nela para selecioná-la e, em seguida, pressione **Backspace** ou **Delete** no teclado.

> \*\*Aviso: Tenha cuidado quando avalia uma expressão 4D que modifica o valor de uma das variáveis de sistema (por exemplo, a variável OK) porque a execução do resto do método pode ser alterada.

### Menu contextual

O menu de contexto do Custom Watch Pane lhe dá acesso ao editor de fórmulas 4D e a outras opções:

![custom-watch-pane-context-menu](../assets/en/Debugging/custom-watch-pane-context-menu.png)

**Nova expressão**: Isso insere uma nova expressão e exibe o 4D Formula Editor.

![custom-Watch-pane-context-menu](../assets/en/Debugging/custom-watch-pane-formula-editor.png)

For more information on the Formula Editor, see the [4D Design Reference manual](https://doc.4d.com/4Dv19/4D/19/4D-Design-Reference.100-5416591.en.html).

- **Inserir comando**: Atalho para inserir um comando 4D como uma nova expressão.
- **Excluir tudo**: Remove todas as expressões do Painel de Vigia Personalizado.
- **Expressões Padrão**: Copia a lista de expressões do Watch.

> This option is not available in [remote debugging mode](debugging-remote.md).

- **Recolher tudo/Expandir tudo**: Recolhe ou expande todas as listas hierárquicas.
- **Mostrar tipos**: Exibe o tipo de cada item da lista (quando apropriado).
- **Mostrar números de campos e tabelas**: Exibe o número de cada tabela ou campo do site **Fields**. Útil se você trabalha com tabelas, números de campo ou ponteiros usando comandos como `Table` ou `Field`.
- **Mostrar ícones**: Exibe um ícone que indica o tipo de cada item.
- **Tabelas e campos ordenados**: Apresenta a tabela e os campos por ordem alfabética.
- **Mostrar números inteiros na Hexadecimal**: Exibe números usando notação hexadecimal. Para introduzir um valor numérico em hexadecimal, digite 0x (zero + "x"), seguido dos dígitos hexadecimais.

## Panel de código fuente

O painel Código-fonte mostra o código-fonte do método ou função que está sendo rastreado no momento.

Essa área também permite que você adicione ou remova [**pontos de interrupção**] (breakpoints.md).

### Tips

Passe o ponteiro do rato sobre qualquer expressão para visualizar uma dica de ferramenta que indica:

- o tipo declarado da expressão
- o valor atual da expressão

![source-code-pane](../assets/en/Debugging/sourceCodePane.png)

Isto também funciona com as selecções:

![source-code-pane-tip](../assets/en/Debugging/sourcePaneTip.png)

### Adição de expressões ao painel de controle personalizado

Você pode copiar qualquer expressão selecionada do painel Código-fonte para o [painel de observação personalizada] (#painel de observação personalizada).

1. No painel de código fonte, selecione a expressão a avaliar
2. Faça uma das seguintes opções:
   - Arraste e solte o texto selecionado na área Expression (Expressão) do Custom Watch Pane (Painel de observação personalizada)
   - Pressione **Ctrl+D** (Windows) ou **Cmd+D** (macOS)
   - Clique com o botão direito do mouse no texto selecionado **>** **Copiar para o painel de expressões**

### Contador do programa

A seta amarela na margem esquerda do painel Código-fonte é chamada contador de programa. Marca a linha seguinte a ser executada.

Por padrão, a linha do contador de programas (também designada por linha de execução) é realçada no depurador. Você pode personalizar a cor do destaque na página de [Métodos das Preferências](Preferences/methods.md).

#### Movendo o contador do programa

Para efeitos de depuração, é possível deslocar o contador de programa para o método no topo da cadeia de chamadas (o método atualmente em execução). Para o fazer, clique e arraste a seta amarela para outra linha.

Isto apenas diz ao depurador para prosseguir o rastreio ou a execução a partir de um ponto diferente. Não executa linhas nem anula a sua execução. Todos os parâmetros, campos, variáveis, etc. atuais não são afetados.

Por exemplo:

```4d
  // ...
 If(This condition)
    DO_SOMETHING
 Else
    DO_SOMETHING_ELSE
 End if
  // ...
```

Digamos que o contador do programa esteja definido para a linha `If (This condition)`.
Quando você clica no botão **Step over**, o contador do programa passa diretamente para a linha `DO_SOMETHING_ELSE`.
Para examinar os resultados da linha `DO_SOMETHING`, você pode mover o contador do programa para essa linha e executá-la.

### Menu contextual

O menu contextual do painel Código-fonte fornece acesso a várias funções que são úteis ao executar métodos no modo Rastreamento:

![source-code-pane-context-window](../assets/en/Debugging/sourceCodePaneContext.png)

- **Goto Definition**: Vai para o local onde o objeto selecionado está definido. Este comando está disponível para:
  - *Métodos do projeto:* exibe o conteúdo do método em uma nova janela do Editor de Código
  - *Campos:* Exibe as propriedades do campo no inspetor da janela de estrutura
  - *Tabelas:* Exibe as propriedades da tabela no inspetor da janela Estrutura
  - *Formulários:* Apresenta o formulário no editor de formulários
  - *Variáveis* (parâmetro local, de processo, entre processos ou $n ): exibe a linha no método atual ou entre os métodos do compilador em que a variável é declarada
- **Search References** (também disponível no Editor de código): Pesquisa todos os objetos do projeto (métodos e formulários) nos quais o elemento atual do método é referenciado. O elemento atual é o elemento selecionado ou o elemento onde se encontra o cursor. Pode ser o nome de um campo, variável, comando, cadeia de caracteres, etc. Os resultados da pesquisa são apresentados numa nova janela de resultados padrão.
- **Cópia**: Cópia padrão da expressão selecionada para a área de transferência.
- **Copiar para o Painel de Expressão**: Copia a expressão selecionada para o painel de observação personalizado.
- **Run to Cursor**:Executa instruções encontradas entre o contador de programas e a linha selecionada do método (onde o cursor se encontra).
- **Set Next Statement**:Move o contador do programa para a linha selecionada sem executar essa linha ou qualquer outra intermediária. A linha designada só será executada se o usuário clicar em um dos botões de execução.
- **Alternar Ponto de Interrupção** (também disponível no Code Editor): Alternativamente, insere ou remove o ponto de interrupção correspondente à linha selecionada. Isso modifica o ponto de interrupção permanentemente: por exemplo, se você remover um ponto de interrupção no depurador, ele não aparecerá mais no método original.
- **Editar ponto de interrupção** (também disponível no Editor de código): Exibe a caixa de diálogo Propriedades do ponto de interrupção. Quaisquer alterações efetuadas modificam permanentemente o ponto de interrupção.

### Localizar seguinte/anterior

Os atalhos específicos permitem-lhe encontrar cadeias de caracteres idênticas à que foi selecionada:

- Para pesquisar as próximas cadeias de caracteres idênticas, pressione **Ctrl+E** (Windows) ou **Cmd+E** (macOS)
- Para buscar las cadenas idénticas anteriores, presione **Ctrl+Shift+E** (Windows) o **Cmd+E** (macOS)

A pesquisa só é efetuada se selecionar pelo menos um carácter no painel Código fonte.

## Atalhos

Esta secção lista todos os atalhos disponíveis na janela do depurador.

> A barra de ferramentas também possui [atalhos](#botoes-barra-ferramentas).

#### Janela de avaliação e subjanela de avaliação

- **Dê um duplo clique** em um item na janela de observação para copiá-lo para a janela de observação personalizada
- **Duplo clique** no painel Custom Watch para criar uma nova expressão

#### Panel de código fuente

- Clique na margem esquerda para definir ou remover pontos de quebra.
- **Alt+Shift+Clique** (Windows) ou **Option+Shift+Clique** (macOS) define um ponto de interrupção temporário.
- **Alt-Clique** (Windows) ou **Option-Clique** exibe a janela Editar Quebra para um novo ponto de quebra ou um ponto de quebra existente.
- Uma expressão ou objeto selecionado pode ser copiado para a janela de avaliação personalizada através de um simples arrastar e largar.
- **Ctrl+D** (Windows) ou **Cmd+D** (macOS) copiam as combinações de teclas selecionadas para a Janela de Observação Personalizada.
- \*\*As combinações de teclas Ctrl+Shift+E (Windows) ou Cmd+Shift+E (macOS) localizam as cadeias de caracteres anteriores idênticas à selecionada.
- \*\*As combinações de teclas Ctrl+Shift+E (Windows) ou Cmd+Shift+E (macOS) localizam as cadeias de caracteres anteriores idênticas à selecionada.

#### Todas as janelas

- **Ctrl** + **+/-** (Windows) ou **Command** + **+/-** (macOS) aumenta ou diminui o tamanho da fonte para melhorar a legibilidade. O tamanho de letra modificado também é aplicado ao Editor de código sendo guardado nas Preferências.
- **Ctrl + \*** (Windows) ou **Command + \*** (macOS) força a atualização do Watch Pane.
- Quando nenhum item estiver selecionado em qualquer painel, pressione **Enter** para passar para o próximo.
- Quando um valor de item é selecionado, utilize as teclas de setas para navegar na lista.
- Ao editar um item, utilize as teclas de seta para mover o cursor. Utilize Ctrl-A/X/C/V (Windows) ou Comandó-A/X/C/V (macOS) como atalhos para os comandos de menu Selecionar tudo/Cortar/Copiar/Colar do menu Editar.
