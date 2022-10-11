---
id: data-collect
title: About Data Collection
---

To help us make our products always better, we automatically collect data regarding usage statistics on running 4D Server applications. Collected data is completely anonymous and data is transferred with no impact on the user experience.

This page explains:

- what information is collected
- where information is stored and when it is sent to 4D
- how to disable automatic data collection in client/server built applications.


## Collected information

Data is collected during the following events:

- 4D Server startup,
- database opening,
- database closure,
- web server startup.

### Collected at 4D Server startup

| Data          | Beispiel                                                                                             | Hinweise                                                     |
| ------------- | ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| CPU           | Intel(R) Core(TM) i7-2600 CPU @ 3.40GH 3.39GHz                                                       | Name, type, and speed of the processor                       |
| numberOfCores | 4                                                                                                    | Total number of cores                                        |
| memory        | 419430400                                                                                            | Volume of memory storage (in bytes) available on the machine |
| system        | Microsoft Windows 10 Pro 1809 (17763.253)                                                            | Operating system version and build number                    |
| headless      | falsch                                                                                               | True if the application is running in headless mode          |
| version       | 1960                                                                                                 | Version number of the 4D application                         |
| buildNumber   | 123456                                                                                               | Build number of the 4D application                           |
| license       | {"name":"4D Developer Professional 19R6","products":[{"id":808464433,"name":"4D","allowedCount":1}]} | Commercial name and description of product licenses          |


### Collected per database at opening

| Data                    | Beispiel                                                | Hinweise                                                                              |
| ----------------------- | ------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| id                      | hashed string                                           | Unique id associated to the database (*Polynomial Rolling hash of the database name*) |
| dataFileSize            | 419430400                                               | Data file size in bytes                                                               |
| indexesSize             | 419430400                                               | Index size in bytes                                                                   |
| cacheSize               | 419430400                                               | Cache size in bytes                                                                   |
| usingLegacyNetworkLayer | fasle                                                   | True if legacy network layer used for the application server                          |
| isEncrypted             | wahr                                                    | True if the data file is encrypted                                                    |
| isCompiled              | wahr                                                    | True if the application is compiled                                                   |
| isEngined               | wahr                                                    | True if the application is merged with 4D Volume Desktop                              |
| isProjectMode           | wahr                                                    | True if the application is a project                                                  |
| mobile                  | [{"os":"iOS", "version":"12.465", "simulator":"false"}] | Information on mobile sessions                                                        |


### Collected per database at closure

| Data   | Beispiel | Hinweise                                                     |
| ------ | -------- | ------------------------------------------------------------ |
| uptime | 123456   | Time elapsed (in seconds) since local 4D database was opened |


### Collected per database at web server startup

| Data      | Beispiel         | Hinweise    |
| --------- | ---------------- | ----------- |
| webServer | {"started":true} | Always true |



## When is it stored and sent?

Collected data is written in a text file (JSON format) when 4D Server quits. The file is stored inside the [active 4D folder](https://doc.4d.com/4dv19/help/command/en/page485.html), i.e.:

- on Windows: `Users\[userName]\AppData\Roaming\4D Server`
- on macOS: `/Users/[userName]/Library/ApplicationSupport/4D Server`

Once a week, the file is automatically sent over the network to 4D. The file is then deleted from the active 4D folder. The file is then deleted from the active 4D folder.

![](../assets/en/Admin/data-collect.png)

> If the file could not be sent for some reason, it is nevertheless deleted and no error message is displayed on the 4D Server side.


## Disabling data collection in client/server built applications

You can disable the automatic data collection in [client/server built applications](../Desktop/building.md#clientserver-page).

To disable the collection, pass the value **False** to the [`ServerDataCollection`](https://doc.4d.com/4Dv19R6/4D/19-R6/ServerDataCollection.300-6011712.en.html) key in the `buildApp.4DSettings` file, used to build the client/server application.