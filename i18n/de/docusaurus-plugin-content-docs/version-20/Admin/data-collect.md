---
id: data-collect
title: Data Collection
---

To help us make our products always better, we automatically collect data regarding usage statistics on running 4D Server applications. Collected data is completely anonymous and data is transferred with no impact on the user experience.

This page explains:

- what information is collected,
- where information is stored and when it is sent to 4D,
- how to disable automatic data collection in client/server built applications.


## Collected information

Data is collected during the following events:

- database startup,
- database closure,
- web server startup,
- php execution,
- client connection,
- data collection sending.

Some data is also collected at regular intervals.

### Collected at database startup

| Data                    | Typ                  | Hinweise                                                                                       |
| ----------------------- | -------------------- | ---------------------------------------------------------------------------------------------- |
| CPU                     | Text                 | Name, type, and speed of the processor                                                         |
| numberOfCores           | Zahl                 | Total number of cores                                                                          |
| memory                  | Zahl                 | Volume of memory storage (in bytes) available on the machine                                   |
| system                  | Text                 | Operating system version and build number                                                      |
| headless                | Boolean              | True if the application is running in headless mode                                            |
| version                 | Zahl                 | Version number of the 4D application                                                           |
| buildNumber             | Zahl                 | Build number of the 4D application                                                             |
| license                 | Objekt               | Commercial name and description of product licenses                                            |
| isRosetta               | Boolean              | True if 4D is emulated through Rosetta on macOS, False otherwise (not emulated or on Windows). |
| uniqueID                | Text                 | Unique ID of the 4D Server                                                                     |
| id                      | Text (hashed string) | Unique id associated to the database (*Polynomial Rolling hash of the database name*)          |
| dataFileSize            | Zahl                 | Data file size in bytes                                                                        |
| indexesSize             | Zahl                 | Index size in bytes                                                                            |
| cacheSize               | Zahl                 | Cache size in bytes                                                                            |
| usingLegacyNetworkLayer | Boolean              | True if legacy network layer used for the application server                                   |
| usingQUICNetworkLayer   | Boolean              | True if the database uses the QUIC network layer                                               |
| encryptedConnections    | Boolean              | True if client/server connections are encrypted                                                |
| encrypted               | Boolean              | True if the data file is encrypted                                                             |
| compiled                | Boolean              | True if the application is compiled                                                            |
| isEngined               | Boolean              | True if the application is merged with 4D Volume Desktop                                       |
| projectMode             | Boolean              | True if the application is a project                                                           |
| mobile                  | Collection           | Information on mobile sessions                                                                 |


### Collected at web server startup and data collection sending

| Data      | Typ    | Hinweise                                                |
| --------- | ------ | ------------------------------------------------------- |
| webServer | Objekt | "started":true if the web server is starting or started |


### Collected at regular intervals

| Data                        | Typ  | Hinweise                                     |
| --------------------------- | ---- | -------------------------------------------- |
| maximumNumberOfWebProcesses | Zahl | Maximum number of simultaneous web processes |
| maximumUsedPhysicalMemory   | Zahl | Maximum use of physical memory               |
| maximumUsedVirtualMemory    | Zahl | Maximum use of virtual memory                |


### Collected at data collection sending

| Data                        | Typ    | Hinweise                                                     |
| --------------------------- | ------ | ------------------------------------------------------------ |
| uptime                      | Zahl   | Time elapsed (in seconds) since local 4D database was opened |
| cacheReadBytes              | Objekt | Number of bytes read from cache                              |
| cacheMissBytes              | Objekt | Number of bytes missed from cache                            |
| cacheReadCount              | Objekt | Number of reads in the cache                                 |
| cacheMissCount              | Objekt | Number of reads missed in the cache                          |
| dataSegment1.diskReadBytes  | Objekt | Number of bytes read in the data file                        |
| dataSegment1.diskWriteBytes | Objekt | Number of bytes written in the data file                     |
| dataSegment1.diskReadCount  | Objekt | Number of reads in the data file                             |
| dataSegment1.diskWriteCount | Objekt | Number of writes in the data file                            |
| indexSegment.diskReadBytes  | Zahl   | Number of bytes read in the index file                       |
| indexSegment.diskWriteBytes | Zahl   | Number of bytes written in the index file                    |
| indexSegment.diskReadCount  | Zahl   | Number of reads in the index file                            |
| indexSegment.diskWriteCount | Zahl   | Number of writes in the index file                           |



### Collected at database closure and data collection sending

| Data              | Typ  | Hinweise                                                     |
| ----------------- | ---- | ------------------------------------------------------------ |
| webserverHits     | Zahl | Number of hits on the web server during the data collection  |
| restHits          | Zahl | Number of hits on the REST server during the data collection |
| webserverBytesIn  | Zahl | Bytes received by the web server during the data collection  |
| webserverBytesOut | Zahl | Bytes sent by the web server during the data collection      |




### Collected every time PHP execute is called

| Data        | Typ     | Hinweise                                                                            |
| ----------- | ------- | ----------------------------------------------------------------------------------- |
| phpCall     | Zahl    | Number of calls to `PHP execute`                                                    |
| externalPHP | Boolean | True if the client performs a call to `PHP execute` and uses its own version of php |


### Collected at client connection

| Data                       | Typ        | Hinweise                                                                           |
| -------------------------- | ---------- | ---------------------------------------------------------------------------------- |
| maximum4DClientConnections | Zahl       | Maximum number of 4D Client connections to the server                              |
| connectionSystems          | Collection | Client OS without the build number (in parenthesis) and number of clients using it |



## Where is it stored and sent?

Collected data is written in a text file (JSON format) per database when 4D Server quits. The file is stored inside the [active 4D folder](https://doc.4d.com/4dv20/help/command/en/page485.html), i.e.:

- on Windows: `Users\[userName]\AppData\Roaming\4D Server`
- on macOS: `/Users/[userName]/Library/ApplicationSupport/4D Server`

Once a week, the file is automatically sent over the network to 4D. The file is then deleted from the active 4D folder. The file is then deleted from the active 4D folder.

![](../assets/en/Admin/data-collect.png)

> If the file could not be sent for some reason, it is nevertheless deleted and no error message is displayed on the 4D Server side.

The file is sent to the following server address: `https://dcollector.4d.com` (ip: 195.68.52.83).


## Disabling data collection in client/server built applications

You can disable the automatic data collection in [client/server built applications](../Desktop/building.md#clientserver-page).

To disable the collection, pass the value **False** to the [`ServerDataCollection`](https://doc.4d.com/4Dv19R6/4D/19-R6/ServerDataCollection.300-6011712.en.html) key in the `buildApp.4DSettings` file, used to build the client/server application.