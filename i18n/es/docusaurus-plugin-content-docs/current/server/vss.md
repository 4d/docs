---
id: vss
title: Volume Shadow Copy Service (VSS)
---

4D Server Windows comes with a dedicated **VSS writer** application that will automatically manage snapshot requests sent through Windows Volume Shadows Copy Service (VSS).

VSS is provided by Windows Server to allow backup applications to capture snapshots (shadow copies) of any files or entire hard disks at a given moment, while applications are running. Gracias a esta tecnología, puede recuperar, por ejemplo, una base 4D Server tal y como estaba en el momento de tomar la instantánea. Este mecanismo requiere que los archivos de la aplicación en ejecución estén en un estado consistente cuando se realiza la copia. Por esta razón, una aplicación compatible con VSS debe instalar una aplicación o un servicio VSS writer. This component is then "warned" by the service when a shadow copy is about to be done and tells the **VSS requestor** (basically the backup application) how to back up its file and data.

## Requisitos del sistema del host (hipervisor)

Del lado del equipo anfitrión, se admiten los siguientes solicitantes VSS:

- VMware ESXI en toda plataforma
- Microsoft Hyper-V Server 2016

## Activación del VSS

La funcionalidad VSS se instala o actualiza automáticamente al iniciar la aplicación 4D Server. El servicio de aplicación VSS writer se inicia si el usuario de la sesión tiene privilegios de administrador.

Generalmente, el escenario inicial será:

1. Inicie 4D Server o la aplicación servidor fusionada por primera vez.
2. Si no se inicia con privilegios de administrador, se mostrará un icono de advertencia.
3. Salga y reinicie 4D Server o la aplicación servidor fusionada como administrador. El servicio 4D VSS se ejecuta y registra automáticamente en VSS.
4. (Opcional) Reinicie 4D Server o la aplicación servidor fusionada con los privilegios estándar.

El ejecutable VSS writer se inicia como un servicio con el nombre "VSS \<appName\>". Se ejecutará un único servicio VSS para todas las instancias de 4D Server. Se ejecutará un servicio VSS por cada aplicación con motor integrado (con un nombre distinto) que se ejecute en el equipo (ver más abajo).

The [Monitor Page](../ServerWindow/monitor.md) of the 4D Server Administration window displays the status of VSS writer service, in Application information area:

![](../assets/en/server/vss.png)

Se puede mostrar información adicional sobre el estado Volume Shadow Copy en un globo de ayuda al pasar el ratón sobre el área:

![](../assets/en/server/vss-2.png)

## Acerca de VSS Writer

La aplicación **vss_writer.exe** se proporciona para gestionar el servicio Volume Shadow Copy Service (VSS) en las aplicaciones 4D.

:::note

La gestión del VSS de 4D se realiza a través de una aplicación independiente, ya que este programa debe ejecutarse con privilegios de administrador.

:::

L'exécutable VSS writer de 4D est automatiquement installé par 4D Server au premier lancement.

El servicio 4D VSS Writer gestiona y transmite las solicitudes VSS a 4D Server. Estos mensajes se guardan en el registro de diagnóstico de 4D Server y en el Visor de eventos de Windows.