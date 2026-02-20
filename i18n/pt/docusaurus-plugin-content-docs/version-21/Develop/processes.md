---
id: processes
title: Processos e Workers
---

Multi-tarefa no 4D é a habilidade de ter várias operações que são executadas simultaneamente. Essas operações são chamadas **processos**. Processos múltiplos são como múltiplos usuários no mesmo computador, cada um trabalhando em sua própria tarefa. Isto significa, essencialmente, que cada método pode ser executado como uma tarefa distinta de base de dados.

Se você escrever código seguro para threads, você pode criar [**processos preemptivos**](preemptive.md) que serão capazes de aproveitar o poder de processamento de computadores multi-core em suas aplicações compiladas, para execução mais rápida.

:::note

A aplicação 4D cria processos para suas próprias necessidades, por exemplo, o processo Principal para gerenciar as janelas de exibição da interface do usuário, o processo Design para gerenciar as janelas e editores do ambiente de design (observe que ambos são [processos de trabalho](#worker-processes)), o processo Servidor Web, o processo Gerenciador de Cache, o processo de Indexação ou o processo Gerenciador de Eventos.

:::

## Criar e limpar processos

Existem várias maneiras de criar um processo:

- Execute um método no ambiente de Design após marcar a caixa de seleção **Novo Processo** na caixa de diálogo "Executar Método". O método escolhido na caixa de diálogo Executar Método é o método do processo.
- Use o comando [`New process`](../commands-legacy/new-process.md). The method passed as a parameter to the [`New process`](../commands/new-process) command is the process method.
- Use o comando [`Execute on server`](../commands-legacy/execute-on-server.md) para criar um procedimento armazenado no servidor. O método passado como parâmetro do comando é o método processo.
- Use o comando [`CALL WORKER`](../commands-legacy/call-worker.md). Se o processo worker ainda não existir, será criado.

:::note

Em aplicativos de desktop, os processos podem ser executados escolhendo comandos de menu. No [Editor de Barra de Menu](../Menus/creating.md), selecione o comando de menu e marque a caixa de seleção **Iniciar um Novo Processo**. O método associado ao comando do menu é o método processo.

:::

Um processo pode ser liberado sob as seguintes condições (as primeiras duas condições são automáticas):

- Quando o método processo termina de ser executado
- Quando o usuário sai da aplicação
- Se você parar o processo procedimentalmente ou usar o botão **Abortar** no Depurador ou no Explorador de Tempo de Execução
- Se você chamar o comando [`KILL WORKER`](../commands-legacy/kill-worker.md) (para excluir apenas um processo de trabalhador).

Um processo pode criar outro processo. Os processos não são organizados hierarquicamente—todos os processos são iguais, independentemente do processo do qual foram criados. Uma vez que o processo "pai" cria um processo "filho", o processo filho continuará independentemente de o processo pai ainda estar em execução.

## Elementos de um processo

Cada processo contém elementos específicos que podem ser tratados independentemente de outros processos.

### Elementos da linguagem

- Variáveis: Cada processo tem suas próprias [variáveis de processo](../Concepts/variables#process-variables). Variáveis de processo são reconhecidas apenas dentro do domínio de seu processo nativo.
- Conjuntos de processo: cada processo tem seus próprios conjuntos de processos. `LockedSet` é um conjunto de processos. Os conjuntos processo são apagados assim que o método processo termina.
- [Método de tratamento de erros](../Concepts/error-handling#installing-an-error-handling-method): Cada processo pode ter seu próprio método de tratamento de erros.
- [Janela do Depurador](../Debugging/debugger#calling-the-debugger): Cada processo pode ter sua própria janela do Depurador.

### Elementos da interface

Elementos de interface são usados em [Aplicações para Desktop](../category/desktop-applications). Eles consistem nos seguintes:

- [Barra de menus](../Menus/creating.md): cada processo pode ter sua própria barra de menu atual. A barra de menu do processo ativo é a barra de menu atual para o aplicativo.
- Um ou mais janelas: Cada processo pode ter mais de uma janela aberta simultaneamente. Por outro lado, alguns processos não têm nenhuma janela.
- Uma janela ativa (em primeiro plano): Mesmo que um processo possa ter várias janelas abertas simultaneamente, cada processo tem apenas uma janela ativa. Para ter mais de uma janela ativa, você deve iniciar mais de um processo.
- Formulários de entrada e saída: Os formulários de entrada e saída padrão podem ser definidos processualmente para cada tabela em cada processo.

:::info

- Por padrão, os processos não incluem barras de menu, o que significa que os atalhos do menu **Editar** (em particular, cortar/copiar/colar) não estão disponíveis nas janelas de processo. Quando você chama caixas de diálogo ou editores do 4D (editor de formulários, editor de consultas, Requisição, etc.) de um processo, se você deseja que o usuário possa se beneficiar de atalhos de teclado como copiar/colar, você precisa garantir que o equivalente a um menu **Editar** esteja instalado no processo.
- [Processos preemptivos](preemptive.md) e processos executados no servidor (procedimentos armazenados) não devem conter elementos da interface.

:::

:::note

Cada processo também possui uma seleção atual e registro atual separados por tabela. Para obter mais informações sobre esses conceitos, consulte [doc.4d.com](https://doc.4d.com/4Dv20/4D/20.1/Displaying-and-selecting-records.300-6602144.en.html).

:::

## Remote processes

When you create a process on a remote 4D, a "twin" process is created on the server to handle data access and database context as soon as it is necessary, i.e. the first time the process on the remote 4D needs to access data.

For optimization reason, while no server access is required, for example if the process on the remote 4D runs an event-handling method or controls floating windows, no twin process is created on the server.

## Processos Worker

Usar um processo de trabalho é uma maneira simples e poderosa de trocar informações entre processos. Esta funcionalidade é baseada em um sistema de mensagens assíncrono que permite que processos e formulários sejam chamados e solicitados a executar métodos com parâmetros em seu próprio contexto.

Um trabalhador pode ser "contratado" por qualquer processo (usando o comando [`CALL WORKER`](../commands-legacy/call-worker.md)) para executar métodos do projeto com parâmetros em seu próprio contexto, permitindo assim o acesso a informações compartilhadas.

:::info

No aplicativo Desktop, um método de projeto também pode ser executado com parâmetros no contexto de qualquer forma usando o comando [`CALL FORM`](../commands-legacy/call-form.md).

:::

Esta funcionalidade aborda as seguintes necessidades em relação à comunicação de interprocessos 4D:

- Uma vez que são suportados tanto por processos cooperativos quanto preemptivos, eles são a solução perfeita para comunicação entre processos em [processos preemptivos](preemptive.md) ([variáveis entre processos estão obsoletas](https://doc.4d.com/4Dv20/4D/20/Deprecated-or-Removed-Features.100-6259787.en.html#5868705) e não são permitidas em processos preemptivos).
- Eles fornecem uma alternativa simples aos semáforos, que podem ser complicados de configurar e complexos de usar

:::note

Although they have been designed mainly for interprocess communication in the context of preemptive processes, [`CALL WORKER`](../commands/call-worker) and [`CALL FORM`](../commands/call-form) can be used with cooperative processes.

:::

### Usando workers

Um worker é usado para solicitar a um processo que execute métodos projeto. Um worker consiste de:

- um nome único (*warning: o nome diferencia maiúsculas de minúsculas*), também usado para nomear seu processo associado
- um processo associado, que pode ou não existir em um determinado momento
- uma caixa de mensagem
- um método de inicialização (opcional)

You ask a worker to execute a project method by calling the [`CALL WORKER`](../commands/call-worker) command. O trabalhador e sua caixa de mensagens são criados no primeiro uso; seu processo associado também é lançado automaticamente no primeiro uso. Se o processo do trabalhador morrer em seguida, a caixa de mensagem permanece aberta e qualquer nova mensagem na caixa iniciará um novo processo do trabalhador.

A animação a seguir ilustra esta sequência:

![](../assets/en/Develop/WorkerAnimation.gif)

Unlike a process created with the [`New process`](../commands/new-process) command, a worker process **remains alive after the execution of the process method ends**. Isto significa que todas as execuções de métodos para o mesmo trabalhador serão executadas no mesmo processo, que mantém todas as informações do estado do processo (variáveis do processo, registro atual e seleção atual, etc.). Consequentemente, os métodos executados sucessivamente terão acesso e compartilharão as mesmas informações, permitindo a comunicação entre os processos. A caixa de mensagens do worker lida com chamadas sucessivas de forma assíncrona.

[`CALL WORKER`](../commands/call-worker) encapsulates both the method name and command arguments in a message that is posted in the worker's message box. O processo do trabalhador é então iniciado, se já não existe e solicitado a executar a mensagem. This means that [`CALL WORKER`](../commands/call-worker) will usually return before the method is actually executed (processing is asynchronous). For this reason, [`CALL WORKER`](../commands/call-worker) does not return any value. If you need a worker to send information back to the process which called it (callback), you need to use [`CALL WORKER`](../commands/call-worker) again to pass the information needed to the caller. É claro que, nesse caso, o próprio chamador deve ser um worker.

It is not possible to use [`CALL WORKER`](../commands/call-worker) to execute a method in a process created by the [`New process`](../commands/new-process) command. Apenas os processos trabalhadores possuem uma caixa de mensagens e podem, portanto, serem chamados pelo `CALL WORKER`. Note that a process created by [`New process`](../commands/new-process) can call a worker, but cannot be called back.

Worker processes can be created on 4D Server through stored procedures: for example, you can use the `Execute on server` command to execute a method that calls the [`CALL WORKER`](../commands/call-worker) command.

Um processo de trabalho é encerrado por meio de uma chamada ao comando [`KILL WORKER`](../commands-legacy/kill-worker.md), que esvazia a caixa de mensagens do trabalhador e solicita ao processo associado que pare de processar mensagens e termine sua execução atual assim que a tarefa atual for concluída.

O método de inicialização de um worker é o método usado para criar o trabalhador (na primeira utilização). If [`CALL WORKER`](../commands/call-worker) is called with an empty *method* parameter, then the startup method is automatically reused as method to execute.

The main process created by 4D when opening a database for user and application modes is a worker process and can be called using [`CALL WORKER`](../commands/call-worker). Note that the name of the main process may vary depending on the 4D localization language, but it always has the process number 1; as a result, it's more convenient to designate it by process number instead of process name when calling [`CALL WORKER`](../commands/call-worker).

### Identificação dos processos Worker

All worker processes, except the main process, have the process type `Worker process` (5) returned by the [`Process info`](../commands/process-info.md) command.

[Ícones específicos](../ServerWindow/processes#process-type) identificam os processos worker.

### Veja também

Para obter mais informações, consulte [este post](https://blog.4d.com/4d-summit-2016-laurent-esnault-presents-workers-and-ui-in-preemptive-mode/) sobre como usar os workers.
