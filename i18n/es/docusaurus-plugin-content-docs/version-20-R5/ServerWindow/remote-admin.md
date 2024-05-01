---
id: remote-admin
title: Administración desde máquinas remotas
---

Puede administrar la aplicación 4D Server desde un 4D remoto (máquina cliente) abriendo la ventana de administración de 4D Server en la máquina cliente.

## Abrir la ventana de administración en una máquina 4D remota

Para abrir una ventana de administración del servidor desde un equipo cliente, debe estar conectado a la base de datos remota como Diseñador o Administrador. De lo contrario, cuando intente abrir la ventana de administración, se generará un error de privilegio (-9991).

Se puede acceder a esta ventana de dos maneras:

- Choose the **Administration Window** command from the **Help** menu or click on the corresponding button in the 4D tool bar.
- Execute the `OPEN ADMINISTRATION WINDOW` command.

A [server administration window](monitor.md) then appears on the client machine.

## Especificidades de la administración a través de una máquina 4D remota

Una máquina cliente que muestre la ventana de administración del servidor tiene acceso a toda la información disponible y puede actuar sobre los procesos y el arranque/detención de los servidores. Cuando la ventana de administración del servidor se muestra en una máquina remota, existen no obstante ciertas restricciones y características específicas relativas a su funcionamiento:

- On the [Process page](processes.md), it is not possible to debug a user process (since the debug window appears on the server machine).
- On the [Maintenance Page](maintenance.md), it is possible to execute actions that cause all the clients to be disconnected and the server to be restarted (compacting and restarting operations). En este caso, la máquina cliente que solicita la operación se reconecta automáticamente al reiniciarse.
- On the [Maintenance Page](maintenance.md), the **View Report** buttons are renamed **Download Report** after the execution of a maintenance operation. Estos archivos se descargan en la carpeta local de la base de datos en la máquina cliente antes de ser visualizados.
