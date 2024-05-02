---
id: remote-admin
title: Administration from Remote Machines
---

You can administer the 4D Server application from a remote 4D (client machine) by opening the 4D Server administration window on the client machine.

## Opening the administration window on a remote 4D machine

To open a server administration window from a client machine, you must be connected to the remote database as a Designer or Administrator. Otherwise, when you attempt to open the administration window, a privilege error (-9991) is generated.

This window can be accessed in one of two manners:

- Choose the **Administration Window** command from the **Help** menu or click on the corresponding button in the 4D tool bar.
- Execute the `OPEN ADMINISTRATION WINDOW` command.

A [server administration window](monitor.md) then appears on the client machine.

## Specificities of administration via a remote 4D machine

A client machine displaying the server administration window has access to all the available information and can act upon the processes and the starting/stopping of servers. When the server administration window is displayed on a remote machine, there are nevertheless certain restrictions and specific features concerning its operation:

- On the [Process page](processes.md), it is not possible to debug a user process (since the debug window appears on the server machine).
- On the [Maintenance Page](maintenance.md), it is possible to execute actions that cause all the clients to be disconnected and the server to be restarted (compacting and restarting operations). In this case, the client machine requesting the operation is automatically reconnected on restarting.
- On the [Maintenance Page](maintenance.md), the **View Report** buttons are renamed **Download Report** after the execution of a maintenance operation. These files are downloaded into the local database folder on the client machine before being displayed.
