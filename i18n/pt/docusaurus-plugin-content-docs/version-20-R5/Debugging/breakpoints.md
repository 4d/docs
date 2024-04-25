---
id: breakpoints
title: Pontos de interrupção e captura de comandos
---

## Visão Geral

Os pontos de interrupção e a captura de comandos são técnicas de depuração muito eficientes. Ambas têm o mesmo efeito: fazem uma pausa na execução do código (e apresentam a janela do depurador, se ainda não tiver sido apresentada) num passo pretendido.

Os pontos de interrupção são definidos em qualquer linha de código onde se pretenda que a execução seja interrompida. É possível associar uma condição ao ponto de interrupção.

A captura de um comando permite começar a rastrear a execução de qualquer processo assim que um comando for chamado por esse processo.

## Breakpoints

Para criar um ponto de interrupção, clique na margem esquerda do painel Código-fonte no depurador ou no Editor de código.

In the following example, a break point (the red bullet) has been set, in the debugger, on the line `If ($in.dataClass#Null)`:

![break-point](../assets/en/Debugging/break.png)

In the above example, clicking the [**No Trace**](./debugger.md/#no-trace) button resumes normal execution up to the line marked with the break point. Essa linha não é executada - o usuário é levado de volta ao modo de rastreio. Setting a break point beyond the program counter and clicking the **No Trace** button allows you to skip portions of the method being traced.

Para remover um ponto de interrupção, clique no marcador correspondente.

### Propriedades do ponto de interrupção

Pode editar o comportamento de um ponto de interrupção utilizando a janela Propriedades do ponto de paragem:

![breakpoint-properties](../assets/en/Debugging/breakpoint-properties.png)

This window is available from the Code Editor or the [Source Code Pane](debugger.md#source-code-pane). Pode:

- right-click a line and select **Edit Breakpoint** in the contextual menu, or
- `Alt+click` (Windows) or `Option+click` (macOS) in the left margin.

Se já existir um ponto de paragem, a janela é apresentada para esse ponto de paragem. Caso contrário, é criado um ponto de paragem e a janela é apresentada para o novo ponto de paragem criado.

Segue-se uma descrição das propriedades:

- **Location**: indicates the name of the method and the line number attached to the breakpoint.
- **Break when following expression is true**: You can create **conditional breakpoints** by entering a 4D formula that returns `True` or `False`. For example, insert `Records in selection(\[aTable])=0` to make sure the break occurs only if there no record selected for the table \[aTable]. Breakpoint conditions are available in the **Condition** column of the [Break list](#break-list).
- **Number of times to skip before breaking**: You can attach a breakpoint to a line located in a loop structure (While, Repeat, or For) or located in subroutine or function called from within a loop.
- **Breakpoint is disabled**: If you currently do not need a break point, but might need it later, you can temporarily disable it. Um ponto de interrupção desativado aparece como um traço (-) em vez de um marcador (-)|.

### Pontos de interrupção na depuração remota

A lista de pontos de paragem é armazenada localmente. No modo de depuração remota, se o depurador anexado for um 4D remoto, a lista de pontos de interrupção remota substitui temporariamente a lista de pontos de interrupção do servidor durante a sessão de depuração.

A lista de pontos de paragem do servidor é automaticamente restaurada se voltar a ser o depurador ligado.

### Lista de pausas

A lista de interrupções é uma página do explorador do tempo de execução que lhe permite gerir os pontos de interrupção criados na janela do depurador ou no editor de código. For more information on the Runtime Explorer, see its dedicated page in [the Design reference manual](https://doc.4d.com/4Dv19/4D/19/Runtime-Explorer.200-5416614.en.html).

Para abrir a página da lista de pontos de interrupção:

1. From the **Run menu**, click **Runtime Explorer...**

2. Click the **Break** tab to display the Break list:

![break-list-runtime-explorer](../assets/en/Debugging/break-list.png)

Usando esta janela, pode:

- Set conditions for breakpoints in the **Conditions** column
- Ative ou desative os pontos de interrupção clicando nos marcadores na margem. Os pontos de interrupção desactivados apresentam marcadores transparentes
- Delete breakpoints by pressing the `Delete` or `Backspace` key, or click on the **Delete** button below the list.
- Abrir os métodos onde se encontram os pontos de interrupção fazendo duplo clique em qualquer linha da lista

Não é possível adicionar novos pontos de paragem a partir desta janela. Os pontos de paragem só podem ser criados a partir da janela do depurador ou do editor de código.

## Comandos de captura

The **Catch** tab of the Runtime Explorer lets you add additional breaks to your code by catching calls to 4D commands. Ao contrário de um ponto de interrupção, que está localizado em um método particular do projeto (e, portanto, desencadeia uma exceção de rastreamento apenas quando é alcançado), o escopo de captura de um comando inclui todos os processos que executam o código 4D e chamam esse comando.

A captura de um comando é uma forma conveniente de rastrear grandes porções de código sem definir pontos de interrupção em locais arbitrários. For example, if a record that should not be deleted is deleted after you've executed one or several processes, you can try to reduce the field of your investigation by catching commands such as `DELETE RECORD` and `DELETE SELECTION`. Cada vez que estes comandos forem chamados, é possível verificar se o registo em questão foi eliminado e, assim, isolar a parte defeituosa do código.

Pode combinar pontos de interrupção e captura de comandos.

Para abrir a página Comandos apanhados:

1. Choose **Run** > **Runtime explorer...** to open the Runtime Explorer.

2. Click **Catch** to display the Caught Commands List:

![runtime-explorer-window](../assets/en/Debugging/catch-command.png)

Esta página lista os comandos que devem ser capturados durante a execução. É composto por duas colunas:

- A coluna da esquerda mostra o estado de ativação/desativação do ponto de interrupção no comando, seguido pelo nome do comando
- A coluna da direita mostra a condição associada ao ponto de interrupção do comando, se houver

Para adicionar um ponto de interrupção personalizado:

1. Click on the **Add New Catch** button (in the shape of a +) located below the list. A new entry is added to the list with the `ALERT` command as default
2. Click the **ALERT** label, type the name of the command you want to catch, then press **Enter**.

Para ativar ou desativar um ponto de interrupção de ordem, clique no ponto (-) na frente da etiqueta do comando.
A bala é transparente quando o controle é desativado.

> Desativar um ponto de interrupção no comando tem praticamente o mesmo efeito que excluí-lo. Durante a execução, o depurador quase não passa tempo na entrada. A vantagem de desativar uma entrada é que não tem de a recriar quando voltar a precisar dela.

Para remover um ponto de interrupção no comando:

1. Seleccione um comando na lista.
2. Press **Backspace** or **Delete** on your keyboard or click on the **Delete** button beneath the list (**Delete All** removes all commands in the list).

### Definir uma condição para um ponto de interrupção no comando

1. Clique na entrada na coluna da direita
2. Introduza uma fórmula 4D (expressão, chamada comando ou método de projeto) que devolve um valor booleano.

> Para remover uma condição, elimine a sua fórmula.

A adição de condições permite-lhe parar a execução quando o comando é invocado apenas se a condição for cumprida. For example, if you associate the condition `Records in selection(\[Emp]>10)` with the break point on the `DELETE SELECTION` command, the code will not be stopped during execution of the `DELETE SELECTION` command if the current selection of the \[Emp] table only contains 9 records (or less).

A adição de condições a pontos de interrupção em comandos torna a execução mais lenta, pois a condição precisa ser avaliada toda vez que uma exceção é encontrada. Por outro lado, adicionar condições acelera o processo de depuração, porque 4D automaticamente ignora ocorrências que não correspondem às condições.
