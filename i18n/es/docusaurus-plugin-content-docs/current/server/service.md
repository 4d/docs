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

To register a 4D Server application as a Service, select **Register Current Application as Service** in the [**File** menu](./menus.md#file) of 4D Server. La próxima vez que se inicie el equipo, 4D Server se ejecutará automáticamente y se abrirá el proyecto actual. Puede registrar cualquier número de proyectos. Cada proyecto solo se puede registrar una vez.

:::note

Sous Windows, cette commande peut apparaître grisée lorsque l'accès aux fonctions de gestion des services est restreint. En este caso, para poder utilizar este comando, debe iniciar 4D Server con privilegios de administrador (para ello, haga clic derecho en el icono de la aplicación y seleccione la opción Ejecutar como administrador en el menú contextual).

:::

:::warning

Por defecto, cuando se registra como servicio, 4D Server está configurado para usar la "Cuenta de sistema local". You must change this account and select a valid user account having the access rights and settings required to use your application. In particular, if you want to be able to print, you must open the session with a user account which has default print settings. El problema es similar si desea acceder a los volúmenes red. Para cambiar la cuenta, vaya a **Panel de control > Sistema y seguridad > Herramientas administrativas > Servicios**. En la lista **Servicios**, haga clic derecho en **4D Server**, seleccione la opción **Propiedades**, vaya a la pestaña **Iniciar sesión** y especifique la cuenta bajo la cual debe ejecutarse el servidor (ajuste que se aplicará en el próximo inicio).

:::

Para dar de baja su aplicación, seleccione **Dar de baja la aplicación actual** en el menú **Archivo** de 4D Server. Este comando se atenúa si el proyecto no está registrado como servicio.

Para anular el registro de todas las bases de datos de 4D Server a la vez, seleccione **Anular el registro de todos los servicios del servidor** en el menú **Archivo** de 4D Server. Este comando se atenúa si no hay ningún servicio 4D Server activado.

You cannot change the service registration status of 4D Server from within 4D Server, if the application has been launched as a service on start-up. En este caso, los tres elementos del menú están desactivados. Para detener el servicio, utilice el panel de control **Servicios**.

