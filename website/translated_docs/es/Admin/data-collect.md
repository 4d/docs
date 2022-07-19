---
id: data-collect
title: About Data Collection
---

To help us make our products always better, we automatically collect data regarding usage statistics on running 4D Server applications. Collected data is completely anonymous and data is transferred with no impact on the user experience.

Esta página explica:

- qué información se recopila
- dónde se almacena la información y cuándo se envía a 4D


## Información recopilada

Los datos se recogen durante los siguientes eventos:

- Inicio de 4D Server,
- apertura de base de datos,
- cierre de base de datos,
- web server startup.

### Collected at 4D Server startup

| Datos         | Ejemplo                                                                                              | Notas                                                            |
| ------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| CPU           | Intel(R) Core(TM) i7-2600 CPU @ 3.40GH 3.39GHz                                                       | Nombre, tipo y velocidad del procesador                          |
| numberOfCores | 4                                                                                                    | Número total de núcleos                                          |
| memory        | 419430400                                                                                            | Volume of memory storage (in bytes) available on the machine     |
| system        | Microsoft Windows 10 Pro 1809 (17763.253)                                                            | Versión del sistema operativo y número de build                  |
| headless      | false                                                                                                | True si la aplicación se ejecuta en modo sin interfaz            |
| version       | 1960                                                                                                 | Número de versión de la aplicación 4D                            |
| buildNumber   | 123456                                                                                               | Build number of the 4D application                               |
| license       | {"name":"4D Developer Professional 19R6","products":[{"id":808464433,"name":"4D","allowedCount":1}]} | Nombre comercial y descripción de las licencias de los productos |


### Collected per database at opening

| Datos                   | Ejemplo                                                 | Notas                                                                                 |
| ----------------------- | ------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| id                      | cadena hashed                                           | Unique id associated to the database (*Polynomial Rolling hash of the database name*) |
| dataFileSize            | 419430400                                               | Tamaño del archivo de datos en bytes                                                  |
| indexesSize             | 419430400                                               | Tamaño del índice en bytes                                                            |
| cacheSize               | 419430400                                               | Tamaño de caché en bytes                                                              |
| usingLegacyNetworkLayer | fasle                                                   | True if legacy network layer used for the application server                          |
| isEncrypted             | true                                                    | True si el archivo de datos está encriptado                                           |
| isCompiled              | true                                                    | True si la aplicación está compilada                                                  |
| isEngined               | true                                                    | True if the application is merged with 4D Volume Desktop                              |
| isProjectMode           | true                                                    | True si la aplicación es un proyecto                                                  |
| mobile                  | [{"os":"iOS", "version":"12.465", "simulator":"false"}] | Información sobre sesiones móviles                                                    |


### Collected per database at closure

| Datos  | Ejemplo | Notas                                                        |
| ------ | ------- | ------------------------------------------------------------ |
| uptime | 123456  | Time elapsed (in seconds) since local 4D database was opened |


### Collected per database at web server startup

| Datos     | Ejemplo          | Notas        |
| --------- | ---------------- | ------------ |
| webServer | {"started":true} | Siempre true |



## ¿Cuándo se almacena y envia?

Collected data is written in a text file (JSON format) when 4D Server quits. The file is stored inside the [active 4D folder](https://doc.4d.com/4dv19/help/command/en/page485.html), i.e.:

- on Windows: `Users\[userName]\AppData\Roaming\4D Server`
- on macOS: `/Users/[userName]/Library/ApplicationSupport/4D Server`

Once a week, the file is automatically sent over the network to 4D. A continuación, el archivo se elimina de la carpeta activa de 4D.

![](assets/en/Admin/data-collect.png)

> If the file could not be sent for some reason, it is nevertheless deleted and no error message is displayed on the 4D Server side. 
