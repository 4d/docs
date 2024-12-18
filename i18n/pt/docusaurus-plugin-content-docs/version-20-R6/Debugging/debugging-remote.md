---
id: debugging-remote
title: Depuração a partir de máquinas remotas
---

## Visão Geral

Quando um banco de dados 4D está sendo executado no 4D Server em modo interpretado, é possível depurar o código 4D em execução no servidor a partir de um cliente 4D remoto conectado ao projeto. Basta associar o depurador a uma máquina remota específica, e a execução do código pode ser monitorada no depurador diretamente na máquina remota.

En una máquina remota, la [ventana de depuración](debugger.md) muestra un icono de servidor específico y un color de fondo azul para indicar que está depurando el código servidor:

![debugger-window-remote](../assets/en/Debugging/debuggerWindowRemote.png)

Esta funcionalidad es especialmente útil cuando 4D Server se ejecuta en modo sin interfaz (ver [Command Line Interface](../Admin/cli.md)), o cuando el acceso a la máquina del servidor no es fácil.

## Depurador anexado

Apenas um depurador pode depurar uma aplicação 4D Server num determinado momento. Se llama el **depurador asociado**. O depurador ligado pode ser:

- o depurador local do Servidor 4D (padrão) - se o servidor não estiver sendo executado sem interface.
- o depurador de um cliente 4D remoto - se a sessão remota tiver acesso ao modo Desenho.

O depurador anexado é chamado sempre que um 4D Server se encontra:

- um ponto de ruptura
- un comando `TRACE`
- um ponto de interrupção para fazer o pedido
- um erro

Tenga en cuenta que los mensajes de error se envían a la máquina depuradora asociada. Isso significa que, no caso de um depurador remoto, as mensagens de erro do servidor são exibidas no cliente 4D remoto.

Note que:

- The code executed in the `On Server Startup Database` Method cannot be debugged remotely. Só pode ser depurado no lado do servidor
- Se não estiver ligado um depurador, o código em execução não é interrompido pelos comandos de depuração

## Ligar o depurador

Por defeito, quando se inicia uma aplicação interpretada:

- se o 4D Server não estiver funcionando sem interface, o depurador está associado ao servidor,
- se 4D Server funciona sem interface, nenhum depurador está ligado.

Pode anexar o depurador a qualquer cliente 4D remoto autorizado a conectar-se à aplicação 4D Server.

> A sessão usuário do cliente 4D remoto deve ter acesso ao ambiente de desenho do banco de dados.

Para anexar o depurador a um cliente 4D remoto:

1. In the 4D Server menu bar, select **Edit** > **Detach Debugger** so that the debugger becomes available to remote machines (this step is useless if the 4D Server is running headless).
2. In a remote 4D client connected to the server, select **Run** > **Attach Remote Debugger**

If the attachment is accepted (see [Rejected attachment requests](#rejected-attachment-requests)), the menu command becomes **Detach Remote Debugger**.

O depurador é então ligado ao cliente 4D remoto:

- até ao fim da sessão do usuário
- until you select `Detach Remote Debugger`

Para ligar o depurador de novo ao servidor:

1. On the remote 4D client that has the debugger attached, select **Run** > **Detach Remote Debugger**.
2. In the 4D Server menu bar, select **Edit** > **Attach debugger**.

> Quando o depurador estiver conectado ao servidor (padrão), todos os processos do servidor são executados automaticamente no modo cooperativo para permitir a depuração. Este fato pode ter um impacto significativo no desempenho. Quando não for necessário depurar na máquina do servidor, recomenda-se desconectar o depurador e anexá-lo a uma máquina remota, se necessário.

## Anexar o depurador na inicialização

4D permite que você anexe automaticamente o depurador a um cliente 4D remoto ou ao servidor na inicialização:

- On the server (if not headless), this option is named **Attach Debugger At Startup**. Quando o servidor é iniciado, ele anexa automaticamente o depurador (padrão).

> **Warning**: If this option is selected for a server which is subsequently launched in headless mode, the debugger won't be available for this server.

- On a remote 4D client, this option is named **Attach Remote Debugger At Startup**. Quando selecionado, o cliente 4D remoto tentará automaticamente anexar o depurador remoto em cada conexão subsequente com o mesmo banco de dados do 4D Server. If the attachment is accepted (see [Rejected attachment requests](#rejected-attachment-requests)), the remote debugger is automatically attached to the remote 4D client and the **Detach Remote Debugger option is displayed**.

> This setting is applied per project and is stored locally in the [`.4DPreferences`](Project/architecture.md#userpreferencesusername) file.

## Solicitações de anexos rejeitadas

Enquanto o depurador estiver conectado a um cliente 4D remoto ou ao 4D Server, nenhuma outra máquina poderá se conectar ao depurador.

Se uma máquina tentar anexar o depurador enquanto este já estiver anexado, a anexação é rejeitada e aparece uma caixa de diálogo:

![attach-debugger-dialog](../assets/en/Debugging/attach-debugger-dialog.png)

![attach-debugger-dialog-2](../assets/en/Debugging/attach-debugger-dialog-2.png)

A ligação do depurador neste caso exige que:

- the attached debugger is detached from the server or from the remote 4D client using respectively the **Detach debugger** or **Detach remote debugger** menu command,
- a sessão do cliente remoto 4D anexado é encerrada.
