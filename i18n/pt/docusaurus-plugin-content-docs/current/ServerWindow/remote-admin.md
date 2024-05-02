---
id: remote-admin
title: Administração a partir de máquinas remotas
---

Pode administrar a aplicação 4D Server a partir de um 4D remoto (máquina cliente) abrindo a janela de administração do 4D Server na máquina cliente.

## Abrir a janela de administração numa máquina 4D remota

Para abrir uma janela de administração do servidor a partir de uma máquina cliente, é necessário estar ligado à banco de dados remoto como Desenhador ou Administrador. Caso contrário, quando tentar abrir a janela de administração, é gerado um erro de privilégio (-9991).

Esta janela pode ser acedida de duas maneiras:

- Choose the **Administration Window** command from the **Help** menu or click on the corresponding button in the 4D tool bar.
- Execute the `OPEN ADMINISTRATION WINDOW` command.

A [server administration window](monitor.md) then appears on the client machine.

## Especificidades da administração via uma máquina 4D remota

A client machine displaying the server administration window has access to all the available information and can act upon the processes and the starting/stopping of servers. When the server administration window is displayed on a remote machine, there are nevertheless certain restrictions and specific features concerning its operation:

- On the [Process page](processes.md), it is not possible to debug a user process (since the debug window appears on the server machine).
- On the [Maintenance Page](maintenance.md), it is possible to execute actions that cause all the clients to be disconnected and the server to be restarted (compacting and restarting operations). In this case, the client machine requesting the operation is automatically reconnected on restarting.
- On the [Maintenance Page](maintenance.md), the **View Report** buttons are renamed **Download Report** after the execution of a maintenance operation. These files are downloaded into the local database folder on the client machine before being displayed.
