---
id: system-info
title: System info
slug: /commands/system-info
displayed_sidebar: docs
---

<!--REF #_command_.System info.Syntax-->**System info**  : Object<!-- END REF-->
<!--REF #_command_.System info.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| Resultado | Object | &#8592; | Información del sistema |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.System info.Summary-->El comando **System info** devuelve un objeto que contiene información sobre el sistema operativo y las características del hardware y software del sistema de la máquina en que se ejecuta.<!-- END REF-->

El comando devuelve la siguiente información:

| Propiedad         |  |             | Tipo                                 | Descripción                                                                                                                                                                                                        | Ejemplo                                                                         |
|-------------------|--------------|-------------|--------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------|
| accountName       |              |             | cadena                               | El nombre de la cuenta para el usuario actual. Normalmente se usa para identificar una cuenta en el directorio.                                                                                                    | "msmith"                                                                        |
| cores             |              |             | número                               | Número total de núcleos. En el caso de máquinas virtuales, la cantidad total de núcleos asignados.                                                                                                                 | 4                                                                               |
| cpuThreads        |              |             | número                               | Número total de hilos.                                                                                                                                                                                             | 8                                                                               |
| machineName       |              |             | cadena                               | El nombre de la máquina como se define en los parámetros de red del sistema operativo.                                                                                                                             | "LAPTOP-M3BLHGSG"                                                               |
| macRosetta        |              |             | booleano                             | Truesi 4D está emulado a través de Rosetta en macOS, False en caso contrario (no emulado o en Windows).                                                                                                            | True                                                                            |
| model             |              |             | cadena                               | Nombre del modelo del ordenador.                                                                                                                                                                                   | "iMac12,2", "Dell", "Acer", "VMware", etc.                                      |
| networkInterfaces |              |             | colección                            | Direcciones de red físicas y activas únicamente                                                                                                                                                                    |                                                                                 |
|                   | ipAddresses  |             | colección                            |                                                                                                                                                                                                                    |                                                                                 |
|                   |              | ip          | cadena                               | La dirección de la interfaz de red                                                                                                                                                                                 | "129.186.81.80"                                                                 |
|                   |              | type        | cadena                               | El tipo de la interfaz de red                                                                                                                                                                                      | "ipv4", "ipv6"                                                                  |
|                   | name         |             | cadena                               | El nombre de la interfaz.                                                                                                                                                                                          | "Intel(R) 82574L Gigabit Network Connection"                                    |
|                   | type         |             | cadena                               | El tipo de interfaz (note que el tipo "ethernet" se ofrece para interfaces bluetooth).                                                                                                                             | "wifi", "ethernet"                                                              |
| osVersion         |              |             | cadena                               | La versión del sistema operativo y el número de compilación (\*).                                                                                                                                                   | "Windows 10 Pro 1809 (17763.1577)"                                              |
| osLanguage        |              |             | cadena                               | Idioma establecido por el usuario actual del sistema. Expresado en el estándar definido por el RFC 3066. Ver Códigos del lenguaje en el manual de Diseño para obtener una lista completa.                          | "fr", "en", "ja", "de", etc.                                                    |
| physicalMemory    |              |             | número                               | El volumen de almacenamiento de memoria (en kilobytes) disponible en la máquina.                                                                                                                                   | 16777216                                                                        |
| processor         |              |             | cadena                               | El nombre, tipo y velocidad del procesador.                                                                                                                                                                        | "Intel(R) Core(TM) i7-2600 CPU @ 3.40GHz"                                       |
| uptime            |              |             | número                               | El tiempo total (en segundos) desde que se inició la máquina.                                                                                                                                                      | 3600                                                                            |
| userName          |              |             | cadena                               | El usuario actual en la máquina. Normalmente se utiliza como el nombre a mostrar (es decir, al iniciar sesión en su ordenador).                                                                                    | "Mary Smith"                                                                    |
| volumes           |              |             | collection                           |                                                                                                                                                                                                                    |                                                                                 |
|                   | available    |             | número                               | El espacio restante que se puede usar.                                                                                                                                                                             | 524288                                                                          |
|                   | capacity     |             | número                               | Volumen total posible (en kilobytes).                                                                                                                                                                              | 1048576                                                                         |
|                   | disk         |             | objeto \| colección (Mac únicamente) |                                                                                                                                                                                                                    |                                                                                 |
|                   |              | description | cadena                               | Un breve resumen que describe el disco.                                                                                                                                                                            | "HP LOGICAL VOLUME SCSI Disk Device"                                            |
|                   |              | identifier  | cadena                               | ID de disco(s) (UUID en Mac y disco físico en Windows)                                                                                                                                                             | Mac - "87547BDD-EA75-4F48-8BFA-9A7E393EEAB0", Windows - "\\\\.\\PHYSICALDRIVE0" |
|                   |              | size        | número                               | La capacidad total (en kilobytes) del disco                                                                                                                                                                        | 104857600                                                                       |
|                   |              | interface   | cadena                               | El tipo de interfaz en la máquina.                                                                                                                                                                                 | "USB", "network", "SATA", "SCSI", "cd/dvd", "PCI", etc.                         |
|                   | fileSystem   |             | cadena                               | El sistema de archivos utilizado por el sistema operativo para almacenar y recuperar archivos en el disco duro.                                                                                                    | "NTFS", "Journaled HFS+", "GPFS", etc.                                          |
|                   | mountPoint   |             | cadena                               | El directorio en el sistema de archivos actualmente accesible en el que está montado un sistema de archivos adicional (es decir, conectado lógicamente). Tenga en cuenta que esto está en formato POSIX para Macs. | Mac -  "/Volumes/Free HD", Windows - "C:"                                       |
|                   | name         |             | cadena                               | solo en Mac - nombre del volumen                                                                                                                                                                                   | "iMac-27-Program6"                                                              |


(\*) Para determinar solo la plataforma que se utiliza, hay dos comandos disponibles: [Is macOS](is-macos.md) y [Is Windows](is-windows.md).

**Nota**: en el caso de las máquinas virtuales, la información devuelta será la de la máquina virtual.

#### Ejemplo 

El siguiente código en una máquina Windows:

```4d
 var $systemInfo : Object
 $systemInfo:=System info
```

devuelve un objeto que contiene la siguiente información:

```json
{
   "machineName":"LAPTOP-M3BLHGSG",
   "osVersion":"Windows 10 Pro 1809 (17763.1577)",
   "osLanguage":"fr",
   "accountName":"msmith",
   "userName":"mary smith",
   "processor":"Intel(R) Core(TM) i7-2600 CPU @ 3.40GH 3.39GHz",
   "cores":4,
   "cpuThreads":8,
   "networkInterfaces":[
      {
         "type":"ethernet",
         "name":"Intel(R) 82574L Gigabit Network Connection",
         "ipAddresses":[
            {
               "type":"ipV4",
               "ip":"129.138.10.17"
            },
            {
               "type":"ipV6",
               "ip":"z1009:0yxw:0000:85v6:0000:0000:ut1s:8001"
            }
         ]
      },
      {
         "type":"wifi",
         "name":"Wi-Fi",
         "ipAddresses":[
            {
               "type":"ipV4",
               "ip":"129.138.50.8"
            },
            {
               "type":"ipV6",
               "ip":"a1002:0bc8:0000:85d6:0000:0000:ef1g:7001"
            }
         ]
      }
   ],
   "uptime":3600,
   "model":"HP",
   "macRosetta":false,
   "physicalMemory":16777216,
   "volumes":[
      {
         "mountPoint":"C:",
         "capacity":1048576,
         "available":524288,
         "fileSystem":"NTFS",
         "disk":{
            "identifier":"\\\\.\\PHYSICALDRIVE0",
            "interface":"SCSI",
            "size":157284382,
            "description":"Lecteur de disque"
         }
      },
      {
         "mountPoint":"E:",
         "capacity":51198972,
         "available":51025280,
         "fileSystem":"NTFS",
         "disk":{
            "identifier":"\\\\.\\PHYSICALDRIVE0",
            "interface":"SCSI",
            "size":157284382,
            "description":"Lecteur de disque"
         }
      }
   ]
}
```

#### Ver también 

[Application info](application-info.md)  
[Is macOS](is-macos.md)  
[Is Windows](is-windows.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 1571 |
| Hilo seguro | &check; |


