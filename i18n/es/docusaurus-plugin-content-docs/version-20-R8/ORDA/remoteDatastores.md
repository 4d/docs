---
id: datastores
title: Bases de datos remotas
---

Un **datastore remoto** es una referencia, en una aplicación 4D local (4D o 4D Server), a un [datastore](dsMapping.md#datastore) almacenado en otra aplicación 4D.

The local 4D application connects to and references the remote datastore through a call to the [`Open datastore`](../commands/open-datastore.md) command.

En la máquina remota, 4D abre una [sesión](../WebServer/sessions.md) para gestionar las peticiones de la aplicación que llaman a `Open datastore`. Las solicitudes utilizan internamente la [API REST](../REST/gettingStarted.md), lo que significa que pueden requerir [licencias disponibles](../REST/authUsers.md).

## Utilizando sesiones web

When you work with a remote datastore referenced through calls to the [`Open datastore`](../commands/open-datastore.md) command, the connection with the requesting processes is handled via [web sessions](../WebServer/sessions.md) on the remote machine.

La sesión web creada en el almacén de datos remoto se identifica utilizando un ID de sesión interno que se asocia al `localID` del lado de la aplicación 4D. Esta sesión gestiona automáticamente el acceso a los datos, a las selecciones de entidades o a las entidades.

El `localID` es local a la máquina que se conecta al datastore remoto, lo que significa:

- Si otros procesos de la misma aplicación necesitan acceder al mismo datastore remoto, pueden utilizar el mismo `localID` y, de este modo, compartir la misma sesión.
- Si otro proceso de la misma aplicación abre el mismo datastore remoto pero con otro `localID`, creará una nueva sesión en el datastore remoto.
- Si otra máquina se conecta al mismo datastore remoto con el mismo `localID`, creará otra sesión con otra cookie.

Estos principios se ilustran en los gráficos siguientes:

![](../assets/en/ORDA/sessions.png)

### Visualización de las sesiones

Los procesos que gestionan las sesiones de acceso al datastore se muestran en la ventana de administración de 4D Server:

- nombre: "REST Handler: \<process name\>"
- tipo: tipo Worker Server HTTP
- sesión: el nombre de la sesión es el nombre de usuario que se pasa al comando `Open datastore`.

En el siguiente ejemplo, se están ejecutando dos procesos para la misma sesión:

![](../assets/en/ORDA/sessionAdmin.png)

## Cierre de las sesiones

Como se describe en el párrafo [tiempo de vida de la sesión](../WebServer/sessions.md#session-lifetime) una sesión web es cerrada automáticamente por 4D cuando no ha habido actividad durante su periodo de tiempo de espera. El tiempo de espera por defecto es de 60 mn, pero este valor puede modificarse utilizando el parámetro _connectionInfo_ del comando `Open datastore`.

Si se envía una solicitud al almacén de datos remoto después de haber cerrado la sesión, ésta se vuelve a crear automáticamente si es posible (licencia disponible, servidor no detenido...). Sin embargo, hay que tener en cuenta que se pierde el contexto de la sesión en cuanto a bloqueos y transacciones (ver abajo).

## Bloqueo y transacciones

Las funcionalidades ORDA relacionadas con el bloqueo de entidades y transacciones se gestionan a nivel del proceso en los datastores remotos, igual que en el modo cliente/servidor ORDA:

- Si un proceso bloquea una entidad de un datastores remoto, la entidad se bloquea para todos los otros procesos, incluso cuando estos procesos comparten la misma sesión (ver [Bloqueo de entidades](entities.md#entity-locking)). Si varias entidades que apuntan a un mismo registro han sido bloqueadas en un proceso, todas deben ser desbloqueadas en el proceso para eliminar el bloqueo. Si se ha puesto un bloqueo en una entidad, el bloqueo se elimina cuando ya no hay ninguna referencia a esta entidad en la memoria.
- Las transacciones pueden iniciarse, validarse o cancelarse por separado en cada almacén de datos remoto mediante las funciones `dataStore.startTransaction()`, `dataStore.cancelTransaction()` y `dataStore.validateTransaction()`. No afectan a otros almacenes de datos.
- Classic 4D language commands ([`START TRANSACTION`](../commands-legacy/start-transaction.md), [`VALIDATE TRANSACTION`](../commands-legacy/validate-transaction.md), [`CANCEL TRANSACTION`](../commands-legacy/cancel-transaction.md)) only apply to the main datastore (returned by `ds`).
  Si una entidad de un datastore remoto es retenida por una transacción en un proceso, los otros procesos no pueden actualizarla, incluso si estos procesos comparten la misma sesión.
- Los bloqueos en las entidades son eliminados y las transacciones son anuladas:
  - cuando el proceso es eliminado.
  - cuando la sesión se cierra en el servidor
  - cuando la sesión es terminada desde la ventana de administración del servidor.
