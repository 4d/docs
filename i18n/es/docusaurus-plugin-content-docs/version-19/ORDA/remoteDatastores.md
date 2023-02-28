---
id: datastores
title: Utilizar un almacén de datos remoto
---

Un [datastore](dsMapping.md#datastore) expuesto en una aplicación 4D se puede acceder simultáneamente a través de diferentes clientes:

- Las aplicaciones 4D remotas que utilizan ORDA para acceder al almacén de datos principal con el comando `ds`. Tenga en cuenta que la aplicación 4D remota puede seguir accediendo a la base de datos en modo clásico. Estos accesos son gestionados por el **servidor de aplicaciones**.
- Other 4D applications (4D remote, 4D Server) opening a session on the remote datastore through the `Open datastore` command. Estos accesos son gestionados por el **servidor HTTP REST**.
- Las peticiones 4D for iOS para actualizar las aplicaciones iOS. Estos accesos son gestionados por el **servidor HTTP**.

Cuando se trabaja con un datastore remoto referenciado a través de llamadas al comando `Open datastore`, la conexión entre los procesos que efectúan la petición y el datastore remoto se gestiona a través de sesiones.

## Apertura de las sesiones

When a 4D application (*i.e.* a process) opens an external datastore using the `Open datastore` command, a session in created on the remote datastore to handle the connection. Esta sesión se identifica utilizando un ID de sesión interno que se asocia al `localID` en la aplicación 4D. Esta sesión gestiona automáticamente el acceso a los datos, a las selecciones de entidades o a las entidades.

El `localID` es local a la máquina que se conecta al datastore remoto, lo que significa:

- Si otros procesos de la misma aplicación necesitan acceder al mismo datastore remoto, pueden utilizar el mismo `localID` y, de este modo, compartir la misma sesión.
- Si otro proceso de la misma aplicación abre el mismo datastore remoto pero con otro `localID`, creará una nueva sesión en el datastore remoto.
- Si otra máquina se conecta al mismo datastore remoto con el mismo `localID`, creará otra sesión con otra cookie.

Estos principios se ilustran en los gráficos siguientes:

![](../assets/en/ORDA/sessions.png)

> Para las sesiones abiertas por peticiones REST, consulte [Usuarios y sesiones](REST/authUsers.md).

## Visualización de las sesiones

Los procesos que gestionan las sesiones de acceso al datastore se muestran en la ventana de administración de 4D Server:

- nombre: "REST Handler: \<process name\>"
- tipo: tipo Worker Server HTTP
- sesión: el nombre de la sesión es el nombre de usuario que se pasa al comando Open datastore.

En el siguiente ejemplo, se están ejecutando dos procesos para la misma sesión:

![](../assets/en/ORDA/sessionAdmin.png)

## Bloqueo y transacciones

Las funcionalidades ORDA relacionadas con el bloqueo de entidades y transacciones se gestionan a nivel del proceso en los datastores remotos, igual que en el modo cliente/servidor ORDA:

- Si un proceso bloquea una entidad de un datastores remoto, la entidad se bloquea para todos los otros procesos, incluso cuando estos procesos comparten la misma sesión (ver [Bloqueo de entidades](entities.md#entity-locking)). Si varias entidades que apuntan a un mismo registro han sido bloqueadas en un proceso, todas deben ser desbloqueadas en el proceso para eliminar el bloqueo. Si se ha puesto un bloqueo en una entidad, el bloqueo se elimina cuando ya no hay ninguna referencia a esta entidad en la memoria.
- Las transacciones pueden iniciarse, validarse o cancelarse por separado en cada almacén de datos remoto mediante las funciones `dataStore.startTransaction()`, `dataStore.cancelTransaction()` y `dataStore.validateTransaction()`. No afectan a otros almacenes de datos.
- Los comandos clásicos del lenguaje 4D (`START TRANSACTION`, `VALIDATE TRANSACTION`, `CANCEL TRANSACTION`) sólo se aplican al datastore principal (devuelto por `ds`). Si una entidad de un datastore remoto es retenida por una transacción en un proceso, los otros procesos no pueden actualizarla, incluso si estos procesos comparten la misma sesión.
- Los bloqueos en las entidades son eliminados y las transacciones son anuladas:
  - cuando el proceso es eliminado.
  - cuando la sesión se cierra en el servidor
  - cuando la sesión es terminada desde la ventana de administración del servidor.

## Cierre de las sesiones

4D cierra automáticamente una sesión cuando no hay actividad durante el tiempo de espera. El tiempo de espera por defecto es de 60 mn, pero este valor puede modificarse utilizando el parámetro `connectionInfo` del comando `Open datastore`.

Si se envía una solicitud al almacén de datos remoto después de haber cerrado la sesión, ésta se vuelve a crear automáticamente si es posible (licencia disponible, servidor no detenido...). Sin embargo, hay que tener en cuenta que se pierde el contexto de la sesión en cuanto a bloqueos y transacciones (ver arriba).
