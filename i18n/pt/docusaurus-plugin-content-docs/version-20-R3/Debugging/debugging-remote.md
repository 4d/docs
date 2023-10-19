---
id: debugging-remote
title: Depuração a partir de máquinas remotas
---

## Visão Geral

Quando um banco de dados 4D está sendo executado no 4D Server em modo interpretado, é possível depurar o código 4D em execução no servidor a partir de um cliente 4D remoto conectado ao projeto. Basta associar o depurador a uma máquina remota específica, e a execução do código pode ser monitorada no depurador diretamente na máquina remota.

Numa máquina remota, a [janela do depurador](debugger.md) apresenta um ícone de servidor específico e uma cor de fundo azul para indicar que depura código de servidor:

![debugger-window-remote](../assets/en/Debugging/debuggerWindowRemote.png)

Essa funcionalidade é particularmente útil quando o 4D Server está sendo executado no modo headless (consulte [Interface de linha de comando](../Admin/cli.md)), ou quando o acesso à máquina do servidor não é fácil.


## Depurador anexado

Apenas um depurador pode depurar uma aplicação 4D Server num determinado momento. Chama-se ao **depurador anexado**. O depurador ligado pode ser:

* o depurador local do Servidor 4D (padrão) - se o servidor não estiver sendo executado sem interface.
* o depurador de um cliente 4D remoto - se a sessão remota tiver acesso ao modo Desenho.

O depurador anexado é chamado sempre que um 4D Server se encontra:
* um ponto de ruptura
* um comando `TRACE`
* um ponto de interrupção para fazer o pedido
* um erro

Tenga en cuenta que los mensajes de error se envían a la máquina depuradora asociada. Isso significa que, no caso de um depurador remoto, as mensagens de erro do servidor são exibidas no cliente 4D remoto.

Note que:
* O código executado no método `On Server Startup Database` não pode ser depurado remotamente. Só pode ser depurado no lado do servidor
* Se não estiver ligado um depurador, o código em execução não é interrompido pelos comandos de depuração


## Ligar o depurador

Por defeito, quando se inicia uma aplicação interpretada:

* se o 4D Server não estiver funcionando sem interface, o depurador está associado ao servidor,
* se 4D Server funciona sem interface, nenhum depurador está ligado.

Pode anexar o depurador a qualquer cliente 4D remoto autorizado a conectar-se à aplicação 4D Server.

> A sessão usuário do cliente 4D remoto deve ter acesso ao ambiente de desenho do banco de dados.

Para anexar o depurador a um cliente 4D remoto:

1. Na barra de menu do 4D Server, selecione **Edit** > **Detach Debugger** para que o depurador se torne disponível para máquinas remotas (essa etapa é inútil se o 4D Server estiver sendo executado sem cabeça).
2. Em um cliente 4D remoto conectado ao servidor, selecione **Run** > **Attach Remote Debugger**

Se o anexo for aceito (consulte [Solicitações de anexo rejeitadas](#rejected-attachment-requests)), o comando de menu se tornará **Detach Remote Debugger**.

O depurador é então ligado ao cliente 4D remoto:
* até ao fim da sessão do usuário
* até selecionar `Detach Remote Debugger`

Para ligar o depurador de novo ao servidor:

1. No cliente 4D remoto que tiver o depurador conectado, selecione **Run** > **Detach Remote Debugger**.
2. Na barra de menu do 4D Server, selecione **Edit** > **Attach debugger**.

> Quando o depurador estiver conectado ao servidor (padrão), todos os processos do servidor são executados automaticamente no modo cooperativo para permitir a depuração. Este fato pode ter um impacto significativo no desempenho. Quando não for necessário depurar na máquina do servidor, recomenda-se desconectar o depurador e anexá-lo a uma máquina remota, se necessário.



## Anexar o depurador na inicialização

4D permite que você anexe automaticamente o depurador a um cliente 4D remoto ou ao servidor na inicialização:

* No servidor (se não for headless), essa opção é denominada **Attach Debugger At Startup**. Quando o servidor é iniciado, ele anexa automaticamente o depurador (padrão).

> **Aviso**: Se essa opção for selecionada para um servidor que será iniciado posteriormente no modo sem cabeça, o depurador não estará disponível para esse servidor.

* Em um cliente 4D remoto, essa opção é denominada **Attach Remote Debugger At Startup**. When selected, the remote 4D client will automatically try to attach the remote debugger at each subsequent connection to the same 4D Server database. If the attachment is accepted (see [Rejected attachment requests](#rejected-attachment-requests)), the remote debugger is automatically attached to the remote 4D client and the **Detach Remote Debugger option is displayed**.

> This setting is applied per project and is stored locally in the [`.4DPreferences`](Project/architecture.md#userpreferencesusername) file.

## Pedidos de ligação rejeitados

While the debugger is already attached to a remote 4D client or to 4D Server, no other machine can attach the debugger.

Se uma máquina tentar anexar o depurador enquanto este já estiver anexado, a anexação é rejeitada e aparece uma caixa de diálogo:

![attach-debugger-dialog](../assets/en/Debugging/attach-debugger-dialog.png)

![attach-debugger-dialog-2](../assets/en/Debugging/attach-debugger-dialog-2.png)

A ligação do depurador neste caso exige que:

* the attached debugger is detached from the server or from the remote 4D client using respectively the **Detach debugger** or **Detach remote debugger** menu command,
* a sessão do cliente remoto 4D anexado é encerrada.
