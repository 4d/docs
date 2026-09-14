---
id: service
title: Registrarse como servicio
---

En Windows, 4D Server se puede iniciar como un servicio.

Una aplicación 4D Server registrada como servicio se inicia automáticamente al iniciar el equipo con el proyecto actual, incluso antes de que se abra una sesión de usuario. No se cierra cuando el usuario sale de su sesión.

Esta operación le permite garantizar la disponibilidad de una aplicación 4D Server incluso en el caso de un incidente que requiera reiniciar la máquina. El mantenimiento se puede realizar de forma remota.

:::note Notas

- En una aplicación 4D Server registrada como servicio, el [modo sin interfaz gráfica](../Admin/cli.md) está activo por defecto.
- Para más información sobre los mecanismos de gestión de Servicios, consulte la documentación de Windows.

:::

To register a 4D Server application as a Service, select **Register Current Application as Service** in the [**File** menu](./menus.md#file) of 4D Server. The next time the machine is started, 4D Server will be launched automatically and the current project opened. Puede registrar cualquier número de proyectos. Cada proyecto solo se puede registrar una vez.

:::note

Under Windows, this command may be grayed out when access to the service management functions is restricted. In this case, to be able to use this command, you must launch 4D Server with an administrator level (to do this, right click on the application icon and choose the **Run as administrator** command in the context menu).

:::

:::warning

When registered as service, by default 4D Server is configured to use the "Local System Account". You must change this account and select a valid user account having the access rights and settings required to use your application. In particular, if you want to be able to print, you must open the session with a user account which has default print settings. El problema es similar si desea acceder a los volúmenes red. To change the account, go to **Control Panel > System and Security > Administrative Tools > Services**. In the **Services** list, right-click on **4D Server**, choose the **Properties** option, then go to the **Log On** tab and specify the account under which the server must run (setting used at next startup).

:::

To unregister your application, select **Unregister Current Application** from the 4D Server **File** menu. Este comando se atenúa si el proyecto no está registrado como servicio.

To unregister all 4D Server databases at once, select **Unregister All Server Services** from the 4D Server **File** menu. Este comando se atenúa si no hay ningún servicio 4D Server activado.

You cannot change the service registration status of 4D Server from within 4D Server, if the application has been launched as a service on start-up. En este caso, los tres elementos del menú están desactivados. Para detener el servicio, utilice el panel de control **Servicios**.

