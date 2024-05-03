---
id: users
title: Página Usuários
---

The **Users** page lists the 4D users connected to the server.

![](../assets/en/Admin/server-users.png)

The "Users" button indicates, in parentheses, the total number of users connected to the server (this number does not take into account any display filters applied to the window). A página também contém uma área de pesquisa dinâmica e botões de controlo. You can modify the order of the columns by dragging and dropping their header areas.

Também pode ordenar a lista de valores da coluna clicando no respetivo cabeçalho. Clique várias vezes para especificar sucessivamente uma ordem ascendente/descendente.

![](../assets/en/Admin/server-users-sort.png)

## Lista de usuários

For each user connected to the server, the list provides the following information:

- Sistema da máquina cliente (macOS ou Windows) como um ícone.
- **4D User**: Name of the 4D user, or alias if set with the [`SET USER ALIAS`](https://doc.4d.com/4dv19/help/command/en/page1666.html) command on the user machine. If passwords are not activated and no alias has been set, all users are named "Designer".
- **Machine name**: Name of the remote machine.
- **Session name**: Name of the session opened on the remote machine.
- **IP Address**: IP address of the remote machine.
- **Login date**: Date and time of the remote machine connection.
- **CPU Time**: CPU time consumed by this user since connecting.
- **Activity**: Ratio of time that 4D Server devotes to this user (dynamic display). "Sleeping" if the remote machine has switched to sleep mode (see below).

### Gerir usuários adormecidos

4D Server specifically handles cases where a machine running a 4D remote application switches to sleep mode while its connection to the server machine is still active. In this case, the connected 4D remote application automatically notifies 4D Server of its imminent disconnection. On the server, the connected user changes to a **Sleeping** activity status:

![](../assets/en/Admin/server-sleeping.png)

Este estado liberta recursos no servidor. In addition, the 4D remote application reconnects to 4D Server automatically after waking up from sleep mode.

The following scenario is supported: a remote user stops working for awhile, for example during a lunch break, but keeps the connection to the server open. A máquina passa para o modo de suspensão. When the user returns, they wake the machine up and the 4D remote application automatically recovers its connection to the server as well as the session context.

> A sleeping remote session is automatically dropped by the server after 48 hours of inactivity. You can modify this default timeout using the [`SET DATABASE PARAMETER`](https://doc.4d.com/4dv19/help/command/en/page642.html) command with the `Remote connection sleep timeout` selector.

## Área de pesquisa/filtragem

This feature can be used to reduce the number of rows displayed in the list to those that correspond to the text entered in the search area. The area indicates the columns where the search/filtering will be carried out. On the Users page, it will be the 4D User, Machine name and Session name columns.

A lista é atualizada em tempo real à medida que o texto é introduzido na área. It is possible to enter more than one value to be searched for: separate the values with a semi-colon. The `OR` type operator is used in this case. For example, if you enter "John;Mary;Peter," only rows with John OR Mary OR Peter in the target columns will be kept.

## Botões de administração

Esta página inclui três botões de controlo. Esses botões estarão ativos se pelo menos uma linha estiver selecionada. You can select several rows by holding down the **Shift** key for an adjacent selection or **Ctrl** (Windows) / **Command** (macOS) key for a non-adjacent selection.

### Enviar mensagem

This button can be used to send a message to the 4D users selected in the window. Se nenhum usuário estiver selecionado, o botão não está ativo. When you click on this button, a dialog box appears that lets you enter the message. The dialog box indicates the number of users that will receive this message:

![](../assets/en/Admin/server-message.png)

A mensagem será apresentada como um alerta nas máquinas remotas.

> You can perfom the same action for remote users with the [`SEND MESSAGE TO REMOTE USER`](https://doc.4d.com/4dv19/help/command/en/page1632.html) command.

### Visualizar processos

This button can be used to directly show the processes of the user(s) selected on the [**Processes** page](processes.md) of the window. When you click on this button, 4D Server switches to the Processes page and enters the selected user names in the search/filtering area.

### Drop user

Este botão pode ser utilizado para forçar a desconexão do(s) usuário(s) selecionado(s). When you click on this button, a warning dialog box appears so that you can confirm or cancel this operation (hold down **Alt** key while clicking on the **Drop user** button to disconnect the selected user(s) directly without displaying the confirmation dialog box).

> You can perfom the same action for remote users with the [`DROP REMOTE USER`](https://doc.4d.com/4dv19/help/command/en/page1633.html) command.
