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
- ejecución php,
- conexión con el cliente,
- envío de recolección de datos.

También se recogen algunos datos a intervalos regulares.

### Recogidos al iniciar la base de datos

| Datos                   | Tipo                                       | Notas                                                                                                                                     |
| ----------------------- | ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| CPU                     | Text                                       | Nombre, tipo y velocidad del procesador                                                                                                   |
| numberOfCores           | Number                                     | Número total de núcleos                                                                                                                   |
| memory                  | Number                                     | Volumen de almacenamiento de memoria (en bytes) disponible en la máquina                                               |
| system                  | Text                                       | Versión del sistema operativo y número de build                                                                                           |
| headless                | Boolean                                    | True si la aplicación se ejecuta en modo sin interfaz                                                                                     |
| version                 | Number                                     | Número de versión de la aplicación 4D                                                                                                     |
| buildNumber             | Number                                     | Número de build de la aplicación 4D                                                                                                       |
| license                 | Object                                     | Nombre comercial y descripción de las licencias de los productos                                                                          |
| isRosetta               | Boolean                                    | True si 4D es emulado a través de Rosetta en macOS, False en caso contrario (no emulado o en Windows). |
| uniqueID                | Text                                       | ID único de 4D Server                                                                                                                     |
| id                      | Texto (cadena con hash) | Unique id associated to the database (_Polynomial Rolling hash of the database name_)                                  |
| dataFileSize            | Number                                     | Tamaño del archivo de datos en bytes                                                                                                      |
| indexesSize             | Number                                     | Tamaño del índice en bytes                                                                                                                |
| cacheSize               | Number                                     | Tamaño de caché en bytes                                                                                                                  |
| usingLegacyNetworkLayer | Boolean                                    | True si se utiliza la capa de red heredada para el servidor de aplicaciones                                                               |
| usingQUICNetworkLayer   | Boolean                                    | True si la base utiliza la capa de red QUIC                                                                                               |
| encryptedConnections    | Boolean                                    | True si las conexiones cliente/servidor están encriptadas                                                                                 |
| encrypted               | Boolean                                    | True si el archivo de datos está encriptado                                                                                               |
| compiled                | Boolean                                    | True si la aplicación está compilada                                                                                                      |
| isEngined               | Boolean                                    | True si la aplicación se fusiona con 4D Volume Desktop                                                                                    |
| projectMode             | Boolean                                    | True si la aplicación es un proyecto                                                                                                      |
| mobile                  | Collection                                 | Información sobre sesiones móviles                                                                                                        |

### Recogidos al inicio del servidor web y en el envío de la recolección de datos

| Datos     | Tipo   | Notas                                                                        |
| --------- | ------ | ---------------------------------------------------------------------------- |
| webServer | Object | "started":true si el servidor web está arrancando o iniciado |

### Recogidas a intervalos regulares

| Datos                       | Tipo   | Notas                                     |
| --------------------------- | ------ | ----------------------------------------- |
| maximumNumberOfWebProcesses | Number | Número máximo de procesos web simultáneos |
| maximumUsedPhysicalMemory   | Number | Uso máximo de la memoria física           |
| maximumUsedVirtualMemory    | Number | Uso máximo de la memoria virtual          |

### Recogida en el envío de datos

| Datos                                       | Tipo   | Notas                                                                                    |
| ------------------------------------------- | ------ | ---------------------------------------------------------------------------------------- |
| uptime                                      | Number | Tiempo transcurrido (en segundos) desde que se abrió la base 4D local |
| cacheReadBytes                              | Object | Número de bytes leídos de la caché                                                       |
| cacheMissBytes                              | Object | Número de bytes perdidos de la caché                                                     |
| cacheReadCount                              | Object | Número de lecturas en la caché                                                           |
| cacheMissCount                              | Object | Número de lecturas perdidas en la caché                                                  |
| dataSegment1.diskReadBytes  | Object | Número de bytes leídos en el archivo de datos                                            |
| dataSegment1.diskWriteBytes | Object | Número de bytes escritos en el archivo de datos                                          |
| dataSegment1.diskReadCount  | Object | Número de lecturas en el archivo de datos                                                |
| dataSegment1.diskWriteCount | Object | Número de escrituras en el archivo de datos                                              |
| indexSegment.diskReadBytes  | Number | Número de bytes leídos en el archivo índice                                              |
| indexSegment.diskWriteBytes | Number | Número de bytes escritos en el archivo índice                                            |
| indexSegment.diskReadCount  | Number | Número de lecturas en el archivo índice                                                  |
| indexSegment.diskWriteCount | Number | Número de escrituras en el archivo índice                                                |

### Recolección al cierre de la base y envío de los datos

| Datos                          | Tipo   | Notas                                                               |
| ------------------------------ | ------ | ------------------------------------------------------------------- |
| webserverHits                  | Number | Número de visitas al servidor web durante la recolección de datos   |
| restHits                       | Number | Número de accesos al servidor REST durante la recolección de datos  |
| webserverBytesIn               | Number | Bytes recibidos por el servidor web durante la recolección de datos |
| webserverBytesOut              | Number | Bytes enviados por el servidor web durante la recolección de datos  |
| qodly.webforms | Number | Número de formularios web Qodly                                     |

### Recolección cada vez que se llama a PHP execute

| Datos       | Tipo    | Notas                                                                               |
| ----------- | ------- | ----------------------------------------------------------------------------------- |
| phpCall     | Number  | Number of calls to `PHP execute`                                                    |
| externalPHP | Boolean | True if the client performs a call to `PHP execute` and uses its own version of php |

### Recolección en la conexión del cliente

| Datos                      | Tipo       | Notas                                                                                                                                 |
| -------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| maximum4DClientConnections | Number     | Número máximo de conexiones 4D Client al servidor                                                                                     |
| connectionSystems          | Collection | Sistema operativo del cliente sin el número de compilación (entre paréntesis) y número de clientes que lo utilizan |

## ¿Dónde se almacena y envía?

Los datos recolectados se escriben en un archivo de texto (formato JSON) por base de datos cuando 4D Server cierra. The file is stored inside the [active 4D folder](https://doc.4d.com/4dv20/help/command/en/page485.html), i.e.:

- on Windows: `Users\[userName]\AppData\Roaming\4D Server`
- on macOS: `/Users/[userName]/Library/ApplicationSupport/4D Server`

Una vez a la semana, el archivo se envía automáticamente por la red a 4D. A continuación, el archivo se elimina de la carpeta activa de 4D.

![](../assets/en/Admin/data-collect.png)

> Si el archivo no ha podido ser enviado por alguna razón, no obstante se elimina y no se muestra ningún mensaje de error del lado de 4D Server.

The file is sent to the following server address: `https://dcollector.4d.com` (ip: 195.68.52.83).

## Desactivar la recopilación de datos en las aplicaciones cliente/servidor integradas

You can disable the automatic data collection in [client/server built applications](../Desktop/building.md#clientserver-page).

To disable the collection, pass the value **False** to the [`ServerDataCollection`](https://doc.4d.com/4Dv20/4D/20/ServerDataCollection.300-6335775.en.html) key in the `buildApp.4DSettings` file, used to build the client/server application.
