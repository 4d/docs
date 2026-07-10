---
id: service
title: Registering as a Service  
---

Under Windows, 4D Server can be launched as a Service.

A 4D Server application registered as a service is automatically launched on start-up of the machine with the current project, even before a user session is opened. It is not closed when the user exits their session. 

This operation lets you guarantee the availability of a 4D Server application even in the event of an incident that requires restarting the machine. Maintenance can be carried out remotely.

:::note Notes

- In a 4D Server application registered as a service, the [headless mode](../Admin/cli.md) is implicit.
- For more information about the mechanisms for managing Services, refer to the Windows documentation.

:::


To register a 4D Server application as a Service, select **Register Current Application as Service** in the [**File** menu](./menus.md#file) of 4D Server. The next time the machine is started, 4D Server will be launched automatically and the current project opened. You can register any number of databases. Each project can be registered only once.


:::note

Under Windows, this command may be grayed out when access to the service management functions is restricted. In this case, to be able to use this command, you must launch 4D Server with an administrator level (to do this, right click on the application icon and choose the **Run as administrator** command in the context menu).

:::

:::warning

When registered as service, by default 4D Server is configured to use the "Local System Account". You must change this account and select a valid user account having the access rights and settings required to use your application. In particular, if you want to be able to print, you must open the session with a user account which has default print settings. The issue is similar if you want to access network volumes. To change the account, go to **Control Panel > System and Security > Administrative Tools > Services**. In the **Services** list, right-click on **4D Server**, choose the **Properties** option, then go to the **Log On** tab and specify the account under which the server must run (setting used at next startup).

:::

To unregister your application, select **Unregister Current Application** from the 4D Server **File** menu. This command is dimmed if the project is not registered as a service.

To unregister all 4D Server databases at once, select **Unregister All Server Services** from the 4D Server **File** menu. This command is dimmed if no 4D Server service is enabled.

You cannot change the service registration status of 4D Server from within 4D Server, if the application has been launched as a service on start-up. In this case, the three menu items are disabled. To stop the service, use the **Services** control panel.

