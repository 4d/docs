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

|Data|Example|Notes|
|---|----|---|
|CPU|Intel(R) Core(TM) i7-2600 CPU @ 3.40GH 3.39GHz|Name, type, and speed of the processor|
|numberOfCores|4|Total number of cores|
|memory|419430400|Volume of memory storage (in bytes) available on the machine|
|system|Microsoft Windows 10 Pro 1809 (17763.253)|Operating system version and build number|
|headless|false|True if the application is running in headless mode|
|version|1960|Version number of the 4D application|
|buildNumber|123456|Build number of the 4D application|
|license|{"name":"4D Developer Professional 19R6","products":[{"id":808464433,"name":"4D","allowedCount":1}]}|Commercial name and description of product licenses|
|isRosetta|true|True if 4D is emulated through Rosetta on macOS, False otherwise (not emulated or on Windows).|
|uniqueID|"123456"|Unique ID of the 4D Server|
|id|hashed string|Unique id associated to the database (*Polynomial Rolling hash of the database name*)|
|dataFileSize|419430400|Data file size in bytes|
|indexesSize|419430400|Index size in bytes|
|cacheSize|419430400|Cache size in bytes|
|usingLegacyNetworkLayer|False|True if legacy network layer used for the application server|
|usingQUICNetworkLayer|True|True if the database uses the QUIC network layer|
|encryptedConnections|True|True if client/server connections are encrypted|
|encrypted|true|True if the data file is encrypted|
|compiled|true|True if the application is compiled|
|isEngined|true|True if the application is merged with 4D Volume Desktop|
|projectMode|true|True if the application is a project|
|mobile|[{"os":"iOS", "version":"12.465", "simulator":"false"}]|Information on mobile sessions|


### Collected at web server startup and data collection sending

|Data|Example|Notes|
|---|----|---|
|webServer|{"started":true}|True if the web server is starting or started|


### Collected at regular intervals

|Data|Example|Notes|
|---|----|---|
|maximumNumberOfWebProcesses|123456|Maximum number of simultaneous web processes|
|maximumUsedPhysicalMemory|419430400|Maximum use of physical memory|
|maximumUsedVirtualMemory|419430400|Maximum use of virtual memory|


### Collected at data collection sending

|Data|Example|Notes|
|---|----|---|
|uptime|123456|Time elapsed (in seconds) since local 4D database was opened|
|cacheReadBytes|123456|Number of bytes read from cache|
|cacheMissBytes|123456|Number of bytes missed from cache |
|cacheReadCount|123456|Number of reads in the cache |
|cacheMissCount|123456|Number of reads missed in the cache |
|dataDiskReadBytes|123456|Number of bytes read in the data file |
|dataDiskWriteBytes|123456|Number of bytes written in the data file |
|dataDiskReadCount|123456|Number of reads in the data file |
|dataDiskWriteCount|123456|Number of writes in the data file |
|indexDiskReadBytes|123456|Number of bytes read in the index file|
|indexDiskWriteBytes|123456|Number of bytes written in the index file |
|indexDiskReadCount|123456|Number of reads in the index file |
|indexDiskWriteCount|123456|Number of writes in the index file |



### Collected at database closure and data collection sending

|Data|Example|Notes|
|---|----|---|
|webserverHits|123456|Number of hits on the web server during the data collection|
|restHits|123456|Number of hits on the REST server during the data collection|
|webserverBytesIn|123456|Bytes received by the web server during the data collection|
|webserverBytesOut|123456|Bytes sent by the web server during the data collection|




### Collected every time PHP execute is called

|Data|Example|Notes|
|---|----|---|
|callToPHPExecute|123456|Number of calls to `PHP execute` |
|clientVersionOfPHP|True|True if the client performs a call to `PHP execute` and uses its own version of php |


### Collected at client connection 

|Data|Example|Notes|
|---|----|---|
|maximum4DClientConnections|123456|Maximum number of 4D Client connections to the server |
|clientSystems|[{"os":"Microsoft Windows 10 Pro 1809", "count":"123456"}]|Client OS without the build number (in parenthesis) and number of clients using it|



## Where is it stored and sent?

Collected data is written in a text file (JSON format) per database when 4D Server quits. The file is stored inside the [active 4D folder](https://doc.4d.com/4dv20/help/command/en/page485.html), i.e.:

- on Windows: `Users\[userName]\AppData\Roaming\4D Server`
- on macOS: `/Users/[userName]/Library/ApplicationSupport/4D Server`

Once a week, the file is automatically sent over the network to 4D. The file is then deleted from the active 4D folder. 

![](../assets/en/Admin/data-collect.png)

> If the file could not be sent for some reason, it is nevertheless deleted and no error message is displayed on the 4D Server side. 

The file is sent to the following server address: `https://dcollector.4d.com` (ip: 195.68.52.83).


## Disabling data collection in client/server built applications

You can disable the automatic data collection in [client/server built applications](../Desktop/building.md#clientserver-page).

To disable the collection, pass the value **False** to the [`ServerDataCollection`](https://doc.4d.com/4Dv19R6/4D/19-R6/ServerDataCollection.300-6011712.en.html) key in the `buildApp.4DSettings` file, used to build the client/server application.