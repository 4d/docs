---
id: vss
title: Volume Shadow Copy Service (VSS)
---

4D Server Windows comes with a dedicated **VSS writer** application that will automatically manage snapshot requests sent through Windows Volume Shadows Copy Service (VSS).

VSS is provided by Windows Server to allow backup applications to capture snapshots (shadow copies) of any files or entire hard disks at a given moment, while applications are running. Thanks to this technology, you can recover, for example, a 4D Server database at the exact state it was at the moment of the snapshot. This mechanism requires that running application files are in a consistent state when the snapshot is performed. For this reason, a VSS-aware application must install a VSS writer application or service. This component is then "warned" by the service when a shadow copy is about to be done and tells the **VSS requestor** (basically the backup application) how to back up its file and data.

## Requisitos del sistema del host (hipervisor)

Del lado del equipo anfitrión, se admiten los siguientes solicitantes VSS:

- VMware ESXI en toda plataforma
- Microsoft Hyper-V Server 2016

## Activación del VSS

The VSS feature is automatically installed/updated when the 4D Server application is launched. El servicio de aplicación VSS writer se inicia si el usuario de la sesión tiene privilegios de administrador.

Generalmente, el escenario inicial será:

1. Inicie 4D Server o la aplicación servidor fusionada por primera vez.
2. Si no se inicia con privilegios de administrador, se mostrará un icono de advertencia.
3. Salga y reinicie 4D Server o la aplicación servidor fusionada como administrador. El servicio 4D VSS se ejecuta y registra automáticamente en VSS.
4. (Opcional) Reinicie 4D Server o la aplicación servidor fusionada con los privilegios estándar.

El ejecutable VSS writer se inicia como un servicio con el nombre "VSS \<appName\>". Se ejecutará un único servicio VSS para todas las instancias de 4D Server. One VSS service will run for each different engined application (different name) running on the machine (see below).

The [Monitor Page](../ServerWindow/monitor.md) of the 4D Server Administration window displays the status of VSS writer service, in Application information area:

![](../assets/en/server/vss.png)

Additional information about the Volume Shadow Copy status can be displayed in a tips when you hover the mouse over the area:

![](../assets/en/server/vss-2.png)

## Acerca de VSS Writer

The **vss_writer.exe** application is provided to handle Volume Shadow Copy Service (VSS) management for 4D applications.

:::note

The 4D VSS management is handled through a separate application since this program must run using administration privileges.

:::

L'exécutable VSS writer de 4D est automatiquement installé par 4D Server au premier lancement.

El servicio 4D VSS Writer gestiona y transmite las solicitudes VSS a 4D Server. These messages are logged in the 4D Server diagnostic log, and in the Windows event viewer.