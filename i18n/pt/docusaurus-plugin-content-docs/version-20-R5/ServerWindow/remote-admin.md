---
id: remote-admin
title: Administração a partir de máquinas remotas
---

Pode administrar a aplicação 4D Server a partir de um 4D remoto (máquina cliente) abrindo a janela de administração do 4D Server na máquina cliente.

## Abrir a janela de administração numa máquina 4D remota

Para abrir uma janela de administração do servidor a partir de uma máquina cliente, é necessário estar ligado à banco de dados remoto como Desenhador ou Administrador. Caso contrário, quando tentar abrir a janela de administração, é gerado um erro de privilégio (-9991).

Esta janela pode ser acedida de duas maneiras:

- Seleccione el comando **Ventana de administración** del menú **Ayuda** o haga clic en el botón correspondiente de la barra de herramientas de 4D.
- Ejecute el comando `OPEN ADMINISTRATION WINDOW`.

A continuación, aparecerá una [ventana de administración del servidor](monitor.md) en el equipo cliente.

## Especificidades da administração via uma máquina 4D remota

A client machine displaying the server administration window has access to all the available information and can act upon the processes and the starting/stopping of servers. When the server administration window is displayed on a remote machine, there are nevertheless certain restrictions and specific features concerning its operation:

- En la página [Proceso](processes.md), no es posible depurar un proceso de usuario (ya que la ventana de depuración aparece en la máquina del servidor).
- En la página de mantenimiento , es posible ejecutar acciones que provocan la desconexión de todos los clientes y el reinicio del servidor (operaciones de compactación y reinicio). In this case, the client machine requesting the operation is automatically reconnected on restarting.
- En la [página Mantenimiento](maintenance.md), los botones **Ver informe** pasan a llamarse **Descargar informe** tras la ejecución de una operación de mantenimiento. These files are downloaded into the local database folder on the client machine before being displayed.
