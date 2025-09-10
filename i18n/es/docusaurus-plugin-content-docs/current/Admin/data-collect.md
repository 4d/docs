---
id: data-collect
title: Recopilación de datos
---

Para que nuestros productos sean siempre mejores, recogemos automáticamente los datos relativos a las estadísticas de uso de las aplicaciones 4D Server en funcionamiento. Los datos recogidos son completamente anónimos y se transfieren sin afectar la experiencia del usuario.

Esta página explica:

- qué información se recoge,
- dónde se almacena la información y cuándo se envía a 4D,
- cómo desactivar la recopilación automática de datos en las aplicaciones integradas cliente/servidor.

## Información recopilada

Los datos se recogen durante los siguientes eventos:

- inicio de la base de datos,
- cierre de base de datos,
- inicio del servidor web,
- uso de funciones específicas como php, open datastore, depurador remoto,
- conexión con el cliente,
- envío de recolección de datos.

También se recogen algunos datos a intervalos regulares.

| Datos                                                       | Tipo                                       | Notas                                                                                                                                     |
| ----------------------------------------------------------- | ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| buildNumber                                                 | Number                                     | Número de build de la aplicación 4D                                                                                                       |
| cacheMissBytes                                              | Object                                     | Número de bytes perdidos de la caché                                                                                                      |
| cacheMissCount                                              | Object                                     | Número de lecturas perdidas en la caché                                                                                                   |
| cacheReadBytes                                              | Object                                     | Número de bytes leídos de la caché                                                                                                        |
| cacheReadCount                                              | Object                                     | Número de lecturas en la caché                                                                                                            |
| cacheSize                                                   | Number                                     | Tamaño de caché en bytes                                                                                                                  |
| compiled                                                    | Boolean                                    | True si la aplicación está compilada                                                                                                      |
| connectionSystems                                           | Collection                                 | Sistema operativo del cliente sin el número de compilación (entre paréntesis) y número de clientes que lo utilizan     |
| CPU                                                         | Text                                       | Nombre, tipo y velocidad del procesador                                                                                                   |
| dataFileSize                                                | Number                                     | Tamaño del archivo de datos en bytes                                                                                                      |
| dataSegment1.diskReadBytes                  | Object                                     | Número de bytes leídos en el archivo de datos                                                                                             |
| dataSegment1.diskReadCount                  | Object                                     | Número de lecturas en el archivo de datos                                                                                                 |
| dataSegment1.diskWriteBytes                 | Object                                     | Número de bytes escritos en el archivo de datos                                                                                           |
| dataSegment1.diskWriteCount                 | Object                                     | Número de escrituras en el archivo de datos                                                                                               |
| databases.externalDatastoreOpened           | Number                                     | Número de llamadas a `Open datastore`                                                                                                     |
| databases.internalDatastoreOpened           | Number                                     | Número de veces que un servidor externo abre el almacén de datos                                                                          |
| databases.remoteDebugger4DRemoteAttachments | Number                                     | Número de adjuntos al depurador remoto desde un 4D remoto                                                                                 |
| databases.remoteDebuggerQodlyAttachments    | Number                                     | Número de archivos adjuntos al depurador remoto de Qodly                                                                                  |
| databases.remoteDebuggerVSCodeAttachments   | Number                                     | Número de archivos adjuntos al depurador remoto desde VS Code                                                                             |
| databases.restMaxLicensedSessions           | Number                                     | Número máximo de sesiones web REST en el servidor que utilizan la licencia REST                                                           |
| databases.restMaxUnlicensedSessions         | Number                                     | Número máximo de otras sesiones web REST en el servidor                                                                                   |
| databases.webIPAddressesNumber              | Number                                     | Número de direcciones IP diferentes que hicieron una petición a 4D Server                                                                 |
| databases.webMaxLicensedSessions            | Number                                     | Número máximo de sesiones web no REST en el servidor que utilizan la licencia del servidor web                                            |
| databases.webMaxUnlicensedSessions          | Number                                     | Número máximo de otras sesiones web no REST en el servidor                                                                                |
| databases.webScalableSessions               | Boolean                                    | True si las sesiones escalables están activadas                                                                                           |
| encrypted                                                   | Boolean                                    | True si el archivo de datos está encriptado                                                                                               |
| encryptedConnections                                        | Boolean                                    | True si las conexiones cliente/servidor están encriptadas                                                                                 |
| externalPHP                                                 | Boolean                                    | True si el cliente realiza una llamada a `PHP execute` y utiliza su propia versión de php                                                 |
| hasDataChangeTracking                                       | Boolean                                    | True if a "__DeletedRecords" table exists                                                       |
| headless                                                    | Boolean                                    | True si la aplicación se ejecuta en modo sin interfaz                                                                                     |
| id                                                          | Texto (cadena con hash) | Identificador único asociado a la base de datos (*Polinomio Rolling hash del nombre de la base*)                       |
| indexSegment.diskReadBytes                  | Number                                     | Número de bytes leídos en el archivo índice                                                                                               |
| indexSegment.diskReadCount                  | Number                                     | Número de lecturas en el archivo índice                                                                                                   |
| indexSegment.diskWriteBytes                 | Number                                     | Número de bytes escritos en el archivo índice                                                                                             |
| indexSegment.diskWriteCount                 | Number                                     | Número de escrituras en el archivo índice                                                                                                 |
| indexesSize                                                 | Number                                     | Tamaño del índice en bytes                                                                                                                |
| isEngined                                                   | Boolean                                    | True si la aplicación se fusiona con 4D Volume Desktop                                                                                    |
| isRosetta                                                   | Boolean                                    | True si 4D es emulado a través de Rosetta en macOS, False en caso contrario (no emulado o en Windows). |
| LDAPLogin                                                   | Number                                     | Number of calls to `LDAP LOGIN`                                                                                                           |
| license                                                     | Object                                     | Nombre comercial y descripción de las licencias de los productos                                                                          |
| maximum4DClientConnections                                  | Number                                     | Número máximo de conexiones 4D Client al servidor                                                                                         |
| maximumNumberOfWebProcesses                                 | Number                                     | Número máximo de procesos web simultáneos                                                                                                 |
| maximumUsedPhysicalMemory                                   | Number                                     | Uso máximo de la memoria física                                                                                                           |
| maximumUsedVirtualMemory                                    | Number                                     | Uso máximo de la memoria virtual                                                                                                          |
| memory                                                      | Number                                     | Volumen de almacenamiento de memoria (en bytes) disponible en la máquina                                               |
| mobile                                                      | Collection                                 | Información sobre sesiones móviles                                                                                                        |
| numberOfCores                                               | Number                                     | Número total de núcleos                                                                                                                   |
| numberOfFields                                              | Number                                     | Number of fields                                                                                                                          |
| numberOfKeepRecordSyncInfo                                  | Number                                     | Number of tables with the "Enable Replication" option checked                                                                             |
| numberOfRecordsMax                                          | Number                                     | Total number of records                                                                                                                   |
| numberOfTables                                              | Number                                     | Number of tables                                                                                                                          |
| numberOfWebServices                                         | Number                                     | Number of methods published as Web Services                                                                                               |
| ODBCLogin                                                   | Number                                     | Number of calls to `SQL LOGIN` using ODBC                                                                                                 |
| phpCall                                                     | Number                                     | Número de llamadas a `PHP execute`                                                                                                        |
| projectMode                                                 | Boolean                                    | True si la aplicación es un proyecto                                                                                                      |
| qodly.webforms                              | Number                                     | Número de formularios web Qodly                                                                                                           |
| QueryBySQL                                                  | Number                                     | Number of calls to `QUERY BY SQL`                                                                                                         |
| restHits                                                    | Number                                     | Número de accesos al servidor REST durante la recolección de datos                                                                        |
| SQLBeginEndStatement                                        | Number                                     | Number of uses of `Begin SQL` / `End SQL`                                                                                                 |
| SQLLoginInternal                                            | Number                                     | Number of calls to `SQL LOGIN` using SQL_INTERNAL                                                                    |
| SQLServer                                                   | Number                                     | Number of SQL requests through the network                                                                                                |
| system                                                      | Text                                       | Versión del sistema operativo y número de build                                                                                           |
| uniqueID                                                    | Text                                       | ID único de 4D Server                                                                                                                     |
| uptime                                                      | Number                                     | Tiempo transcurrido (en segundos) desde que se abrió la base 4D local                                                  |
| usingLegacyNetworkLayer                                     | Boolean                                    | True si se utiliza la capa de red heredada para el servidor de aplicaciones                                                               |
| usingQUICNetworkLayer                                       | Boolean                                    | True si la base utiliza la capa de red QUIC                                                                                               |
| version                                                     | Number                                     | Número de versión de la aplicación 4D                                                                                                     |
| webServer                                                   | Object                                     | "started":true si el servidor web está arrancando o iniciado                                                              |
| webserverBytesIn                                            | Number                                     | Bytes recibidos por el servidor web durante la recolección de datos                                                                       |
| webserverBytesOut                                           | Number                                     | Bytes enviados por el servidor web durante la recolección de datos                                                                        |
| webserverHits                                               | Number                                     | Número de visitas al servidor web durante la recolección de datos                                                                         |

## ¿Dónde se almacena y envía?

Los datos recolectados se escriben en un archivo de texto (formato JSON) por base de datos cuando 4D Server cierra. El archivo se guarda dentro de la [carpeta activa de 4D](../commands-legacy/get-4d-folder.md), es decir:

- en Windows: `Users\[userName]\AppData\Roaming\4D Server`
- en macOS: `/Users/[userName]/Library/ApplicationSupport/4D Server`

Una vez a la semana, el archivo se envía automáticamente por la red a 4D. A continuación, el archivo se elimina de la carpeta activa de 4D.

![](../assets/en/Admin/data-collect.png)

> Si el archivo no ha podido ser enviado por alguna razón, no obstante se elimina y no se muestra ningún mensaje de error del lado de 4D Server.

El archivo se envía a la siguiente dirección del servidor: `https://dcollector.4d.com` (ip: 195.68.52.83).

## Desactivar la recopilación de datos en las aplicaciones cliente/servidor integradas

Puede desactivar la recolección automática de datos en [aplicaciones integradas cliente/servidor](../Desktop/building.md#clientserver-page).

Para desactivar la colección, pase el valor **False** a la llave [`ServerDataCollection`](https://doc.4d.com/4Dv20/4D/20/ServerDataCollection.300-6335775.en.html) en el archivo `buildApp.4DSettings`, utilizado para crear la aplicación cliente/servidor.