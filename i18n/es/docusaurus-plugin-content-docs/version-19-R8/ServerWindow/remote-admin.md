---
id: remote-admin
title: Administración desde máquinas remotas
---

Puede administrar la aplicación 4D Server desde un 4D remoto (máquina cliente) abriendo la ventana de administración de 4D Server en la máquina cliente.

## Abrir la ventana de administración en una máquina 4D remota

Para abrir una ventana de administración del servidor desde un equipo cliente, debe estar conectado a la base de datos remota como Diseñador o Administrador. De lo contrario, cuando intente abrir la ventana de administración, se generará un error de privilegio (-9991).

Se puede acceder a esta ventana de dos maneras:

- Seleccione el comando **Ventana de administración** del menú **Ayuda** o haga clic en el botón correspondiente de la barra de herramientas de 4D.
- Ejecute el comando `OPEN ADMINISTRATION WINDOW`.

A continuación, aparecerá una [ventana de administración del servidor](monitor.md) en el equipo cliente.


## Especificidades de la administración a través de una máquina 4D remota

Una máquina cliente que muestre la ventana de administración del servidor tiene acceso a toda la información disponible y puede actuar sobre los procesos y el arranque/detención de los servidores. Cuando la ventana de administración del servidor se muestra en una máquina remota, existen no obstante ciertas restricciones y características específicas relativas a su funcionamiento:

- En la página [Proceso](processes.md), no es posible depurar un proceso de usuario (ya que la ventana de depuración aparece en la máquina del servidor).
- En la página de mantenimiento [](maintenance.md), es posible ejecutar acciones que provocan la desconexión de todos los clientes y el reinicio del servidor (operaciones de compactación y reinicio). In this case, the client machine requesting the operation is automatically reconnected on restarting.
- On the [Maintenance Page](maintenance.md), the **View Report** buttons are renamed **Download Report** after the execution of a maintenance operation. These files are downloaded into the local database folder on the client machine before being displayed.