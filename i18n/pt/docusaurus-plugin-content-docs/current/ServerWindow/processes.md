---
id: processes
title: Página Processos
---


A página **Processes** lista todos os processos em curso.

![](../assets/en/Admin/server-admin-process-page.png)


O botão "Processos" indica, entre parêntesis, o número total de processos em execução no servidor (este número não tem em conta quaisquer filtros de visualização aplicados à janela nem o estado da opção **Display processes by groups**).

Pode alterar a ordem das colunas simplesmente arrastando e largando as áreas de cabeçalho das colunas. Também pode ordenar a lista de valores da coluna clicando no respetivo cabeçalho.

Tal como a página usuários, esta página contém uma área de  [pesquisa/filtragem dinâmica](users.md#searchfiltering-area) que pode ser utilizada para reduzir o número de linhas apresentadas na lista às que correspondem ao texto introduzido na área de pesquisa. A pesquisa/filtragem é efetuada nas colunas Nome da sessão e Nome do processo.

Existem também três botões de atalho que podem ser utilizados para filtrar o tipo de processo apresentado na janela:

![](../assets/en/Admin/server-process-buttons.png)

- **Processos de usuários**: processos gerados por e para as sessões usuários. Estes processos são precedidos de um ícone sob a forma de uma persona.
- **4D Processes**: Processos gerados pelo motor 4D Server. Estes processos são precedidos de um ícone com a forma de uma roda dentada.
- **Processos de reserva**: Processos que estão inativos mas que são mantidos temporariamente e que podem ser reutilizados em qualquer altura. Este mecanismo otimiza a reatividade do 4D Server. Estes processos são precedidos de um ícone com a forma de uma roda dentada.

A opção **Display processes by groups** permite agrupar os processos internos do 4D Server assim como os processos do cliente, para melhor legibilidade. Quando você marcar essa opção:

- os processos de cliente 4D "gêmeos" (processo de cliente 4D principal e processo de base de cliente 4D, ver [Process Type](#process-type)) são agrupados como um só,
- é criado um grupo "Gestores de tarefas"; inclui os processos internos dedicados à divisão de tarefas (Equilibrador partilhado, Gestor de sessões de rede, Trabalhador do grupo exclusivo),
- é criado um grupo "Gestores de clientes", que inclui vários processos internos dos clientes.

A área inferior da janela é utilizada para apresentar a representação gráfica da atividade do(s) processo(s) selecionado(s).

> Pode selecionar várias linhas mantendo apertada a tecla **Shift** para uma seleção adjacente ou **Ctrl** (Windows) / **Command** (macOS) para uma seleção não adjacente.

A atividade do processo é a percentagem de tempo que 4D Server dedicou a este processo (proporção). A janela fornece as seguintes informações para cada processo:

- Tipo de processo (ver abaixo),
- Sessão/Info:
    - Processo 4D - em branco,
    - Processo usuário - nome do usuário 4D,
    - Processo web - caminho URL,
- Nome do processo,
- Número do processo (tal como devolvido pelo comando [`New process`](https://doc.4d.com/4dv19/help/command/en/page317.html) , por exemplo). O número do processo é o número atribuído no servidor. No caso de um processo global, este número pode ser diferente do atribuído na máquina cliente.
- Estado atual do processo,
- Tempo de execução (em segundos) do processo desde a sua criação,
- Percentagem de tempo que 4D Server dedicou a este processo (rácio).

## Tipo de processo

Cada processo é identificado por um ícone e por um tipo. A cor e a forma do ícone indicam o tipo de processo:

| icon                                       | type                                                                                                                                                                                                 |
| ------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](../assets/en/Admin/server-icon-1.png)  | Servidor de aplicações                                                                                                                                                                               |
| ![](../assets/en/Admin/server-icon-2.png)  | Servidor SQL                                                                                                                                                                                         |
| ![](../assets/en/Admin/server-icon-3.png)  | Servidor DB4D (motor de base de dados)                                                                                                                                                               |
| ![](../assets/en/Admin/server-icon-4.png)  | Servidor Web                                                                                                                                                                                         |
| ![](../assets/en/Admin/server-icon-5.png)  | Servidor SOAP                                                                                                                                                                                        |
| ![](../assets/en/Admin/server-icon-6.png)  | Processo de cliente 4D protegido (processo de desenvolvimento de um 4D ligado)                                                                                                                       |
| ![](../assets/en/Admin/server-icon-7.png)  | Processo principal de um cliente 4D conectado ou processo criado com `Novo processo` num cliente 4D conectado (Processo colaborativo, equivalente no servidor do processo criado na máquina cliente) |
| ![](../assets/en/Admin/server-icon-8.png)  | Processo de base cliente 4D (processo paralelo a um processo cliente 4D. Processo preemptivo responsável pelo controlo do processo cliente 4D principal correspondente)                              |
| ![](../assets/en/Admin/server-icon-9.png)  | Processo de reserva (antigo ou futuro "Processo cliente 4D banco de dados")                                                                                                                          |
| ![](../assets/en/Admin/server-icon-10.png) | Worker servidor SQL                                                                                                                                                                                  |
| ![](../assets/en/Admin/server-icon-11.png) | Worker servidor HTTP                                                                                                                                                                                 |
| ![](../assets/en/Admin/server-icon-13.png) | Procedimento armazenado (processo lançado por um 4D conectado e rodando no servidor)                                                                                                                 |
| ![](../assets/en/Admin/server-icon-14.png) | Método Web (lançado por uma 4DACTION, por exemplo)                                                                                                                                                   |
| ![](../assets/en/Admin/server-icon-15.png) | Método Web (preemptivo)                                                                                                                                                                              |
| ![](../assets/en/Admin/server-icon-16.png) | Método SOAP (acionado por um serviço Web)                                                                                                                                                            |
| ![](../assets/en/Admin/server-icon-17.png) | Método SOAP (preemptivo)                                                                                                                                                                             |
| ![](../assets/en/Admin/server-icon-18.png) | Logger (registrador)                                                                                                                                                                                 |
| ![](../assets/en/Admin/server-icon-19.png) | Listener ligação TCP                                                                                                                                                                                 |
| ![](../assets/en/Admin/server-icon-20.png) | Gestor de sessões TCP                                                                                                                                                                                |
| ![](../assets/en/Admin/server-icon-21.png) | Outro processo                                                                                                                                                                                       |
| ![](../assets/en/Admin/server-icon-22.png) | Processo worker (cooperativo)                                                                                                                                                                        |
| ![](../assets/en/Admin/server-icon-23.png) | Processo 4D client (preemptivo)                                                                                                                                                                      |
| ![](../assets/en/Admin/server-icon-24.png) | Procedimento armazenado (processo preemptivo)                                                                                                                                                        |
| ![](../assets/en/Admin/server-icon-25.png) | Processo worker (apropriativo)                                                                                                                                                                       |

> Cada processo de cliente 4D principal e o seu processo de base de cliente 4D "geminado" são agrupados quando a opção **Mostrar processos por grupos** estiver selecionada.


## Botões de administração

A página também tem cinco botões de controle que atuam nos processos selecionados. Observe que você só pode agir em processos usuários.

![](../assets/en/Admin/server-process-actions.png)

- **Abortar processo**: pode ser utilizado para abortar os processos selecionados. Quando clicar neste botão, aparece uma caixa de diálogo de aviso para que se possa confirmar ou cancelar a operação.

> Também pode abortar os processos selecionados diretamente sem apresentar a caixa de diálogo de confirmação, mantendo apertada a tecla **Alt** enquanto clica neste botão, ou utilizando o comando [`ABORT PROCESS BY ID`](https://doc.4d.com/4dv19/help/command/en/page1634.html) .

- **Pausa do processo**: pode ser utilizado para fazer uma pausa nos processos selecionados.
- **Ativar processo**: pode ser utilizado para reativar os processos selecionados. Os processos devem ter sido colocados em pausa anteriormente (utilizando o botão acima ou por programação); caso contrário, este botão não tem qualquer efeito.
- **Processo de depuração**: pode ser utilizado para abrir na máquina do servidor uma ou mais janelas de depuração para os processos selecionados. Quando clicar neste botão, aparece uma caixa de diálogo de aviso para que se possa confirmar ou cancelar a operação. Note que a janela do depurador só é exibida quando o código 4D for realmente executado na máquina do servidor (por exemplo, em um gatilho ou na execução de um método com o atributo "Execute on Server").

> Também pode depurar um processo diretamente sem apresentar a caixa de diálogo de confirmação, mantendo pressionada a tecla **Alt** enquanto clica neste botão.

- **Observar usuários**: utilizado para mostrar, na página [Usuários](users.md), todos os processos dos usuários selecionados. Este botão está ativo quando pelo menos um processo do utilizador for selecionado.

