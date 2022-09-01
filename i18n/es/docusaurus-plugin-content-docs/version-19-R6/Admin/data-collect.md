---
id: data-collect
title: Acerca de la recopilación de datos
---

Para que nuestros productos sean siempre mejores, recogemos automáticamente los datos relativos a las estadísticas de uso de las aplicaciones 4D Server en funcionamiento. Los datos recogidos son completamente anónimos y se transfieren sin afectar la experiencia del usuario.

Esta página explica:

- qué información se recopila
- dónde se almacena la información y cuándo se envía a 4D
- cómo desactivar la recopilación automática de datos en las aplicaciones integradas cliente/servidor.


## Información recopilada

Los datos se recogen durante los siguientes eventos:

- Inicio de 4D Server,
- apertura de base de datos,
- cierre de base de datos,
- inicio del servidor web.

### Recogido al iniciar el servidor 4D

| Datos         | Ejemplo                                                                                              | Notas                                                                    |
| ------------- | ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| CPU           | Intel(R) Core(TM) i7-2600 CPU @ 3.40GH 3.39GHz                                                       | Nombre, tipo y velocidad del procesador                                  |
| numberOfCores | 4                                                                                                    | Número total de núcleos                                                  |
| memory        | 419430400                                                                                            | Volumen de almacenamiento de memoria (en bytes) disponible en la máquina |
| system        | Microsoft Windows 10 Pro 1809 (17763.253)                                                            | Versión del sistema operativo y número de build                          |
| headless      | false                                                                                                | True si la aplicación se ejecuta en modo sin interfaz                    |
| version       | 1960                                                                                                 | Número de versión de la aplicación 4D                                    |
| buildNumber   | 123456                                                                                               | Número de build de la aplicación 4D                                      |
| license       | {"name":"4D Developer Professional 19R6","products":[{"id":808464433,"name":"4D","allowedCount":1}]} | Nombre comercial y descripción de las licencias de los productos         |


### Recogido por la base de datos al abrir

| Datos                   | Ejemplo                                                 | Notas                                                                                            |
| ----------------------- | ------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| id                      | cadena hashed                                           | Identificador único asociado a la base de datos (*Polinomio Rolling hash del nombre de la base*) |
| dataFileSize            | 419430400                                               | Tamaño del archivo de datos en bytes                                                             |
| indexesSize             | 419430400                                               | Tamaño del índice en bytes                                                                       |
| cacheSize               | 419430400                                               | Tamaño de caché en bytes                                                                         |
| usingLegacyNetworkLayer | fasle                                                   | True si se utiliza la capa de red heredada para el servidor de aplicaciones                      |
| isEncrypted             | true                                                    | True si el archivo de datos está encriptado                                                      |
| isCompiled              | true                                                    | True si la aplicación está compilada                                                             |
| isEngined               | true                                                    | True si la aplicación se fusiona con 4D Volume Desktop                                           |
| isProjectMode           | true                                                    | True si la aplicación es un proyecto                                                             |
| mobile                  | [{"os":"iOS", "version":"12.465", "simulator":"false"}] | Información sobre sesiones móviles                                                               |


### Recogido por la base al cerrar

| Datos  | Ejemplo | Notas                                                                 |
| ------ | ------- | --------------------------------------------------------------------- |
| uptime | 123456  | Tiempo transcurrido (en segundos) desde que se abrió la base 4D local |


### Recogido por la base al iniciar el servidor web

| Datos     | Ejemplo          | Notas        |
| --------- | ---------------- | ------------ |
| webServer | {"started":true} | Siempre true |



## ¿Cuándo se almacena y envia?

Los datos recogidos se escriben en un archivo de texto (formato JSON) cuando 4D Server se cierra. El archivo se almacena dentro de la carpeta [active 4D](https://doc.4d.com/4dv19/help/command/en/page485.html), es decir:

- en Windows: `Users\[userName]\AppData\Roaming\4D Server`
- en macOS: `/Users/[userName]/Library/ApplicationSupport/4D Server`

Una vez a la semana, el archivo se envía automáticamente por la red a 4D. A continuación, el archivo se elimina de la carpeta activa de 4D.

![](../assets/en/Admin/data-collect.png)

> Si el archivo no ha podido ser enviado por alguna razón, no obstante se elimina y no se muestra ningún mensaje de error del lado de 4D Server.


## Desactivar la recopilación de datos en las aplicaciones cliente/servidor integradas

Puede desactivar la recolección automática de datos en [aplicaciones integradas cliente/servidor](../Desktop/building.md#clientserver-page).

Para desactivar la colección, pasar el valor **False** a la llave [`ServerDataCollection`](https://doc.4d.com/4Dv19R6/4D/19-R6/ServerDataCollection.300-6011712.en.html) en el archivo `buildApp. Archivo Dsettings`, utilizado para crear la aplicación cliente/servidor.