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
- use of specific features such as php, open datastore, remote debugger,
- client connection,
- data collection sending.

Some data is also collected at regular intervals.


|Data|Type|Notes|
|---|----|---|
|buildNumber|Number|Build number of the 4D application|
|cacheMissBytes|Object|Number of bytes missed from cache |
|cacheMissCount|Object|Number of reads missed in the cache |
|cacheReadBytes|Object|Number of bytes read from cache|
|cacheReadCount|Object|Number of reads in the cache |
|cacheSize|Number|Cache size in bytes|
|compiled|Boolean|True if the application is compiled|
|connectionSystems|Collection|Client OS without the build number (in parenthesis) and number of clients using it|
|CPU|Text|Name, type, and speed of the processor|
|dataFileSize|Number|Data file size in bytes|
|dataSegment1.diskReadBytes|Object|Number of bytes read in the data file |
|dataSegment1.diskReadCount|Object|Number of reads in the data file |
|dataSegment1.diskWriteBytes|Object|Number of bytes written in the data file |
|dataSegment1.diskWriteCount|Object|Number of writes in the data file |
|databases.externalDatastoreOpened|Number|Number of calls to `Open datastore`|
|databases.internalDatastoreOpened|Number|Number of times the datastore is opened by an external server|
|databases.remoteDebugger4DRemoteAttachments|Number|Number of attachments to the remote debugger from a remote 4D|
|databases.remoteDebuggerQodlyAttachments|Number|Number of attachments to the remote debugger from Qodly|
|databases.remoteDebuggerVSCodeAttachments|Number|Number of attachments to the remote debugger from VS Code|
|databases.restMaxLicensedSessions|Number|Maximum number of REST web sessions on the server that use the REST license|
|databases.restMaxUnlicensedSessions|Number|Maximum number of other REST web sessions on the server|
|databases.webIPAddressesNumber|Number|Number of different IP addresses that made a request to 4D Server |
|databases.webMaxLicensedSessions|Number|Maximum number of non-REST web sessions on the server that use the webserver license|
|databases.webMaxUnlicensedSessions|Number|Maximum number of other non-REST web sessions on the server|
|databases.webScalableSessions|Boolean|True if scalable sessions are activated |
|encrypted|Boolean|True if the data file is encrypted|
|encryptedConnections|Boolean|True if client/server connections are encrypted|
|externalPHP|Boolean|True if the client performs a call to `PHP execute` and uses its own version of php |
|hasDataChangeTracking|Boolean|True if a "__DeletedRecords" table exists|
|headless|Boolean|True if the application is running in headless mode|
|id|Text (hashed string)|Unique id associated to the database (*Polynomial Rolling hash of the database name*)|
|indexSegment.diskReadBytes|Number|Number of bytes read in the index file|
|indexSegment.diskReadCount|Number|Number of reads in the index file |
|indexSegment.diskWriteBytes|Number|Number of bytes written in the index file |
|indexSegment.diskWriteCount|Number|Number of writes in the index file |
|indexesSize|Number|Index size in bytes|
|isEngined|Boolean|True if the application is merged with 4D Volume Desktop|
|isRosetta|Boolean|True if 4D is emulated through Rosetta on macOS, False otherwise (not emulated or on Windows).|
|license|Object|Commercial name and description of product licenses|
|maximum4DClientConnections|Number|Maximum number of 4D Client connections to the server |
|maximumNumberOfWebProcesses|Number|Maximum number of simultaneous web processes|
|maximumUsedPhysicalMemory|Number|Maximum use of physical memory|
|maximumUsedVirtualMemory|Number|Maximum use of virtual memory|
|memory|Number|Volume of memory storage (in bytes) available on the machine|
|mobile|Collection|Information on mobile sessions|
|numberOfCores|Number|Total number of cores|
|numberOfFields|Number|Number of fields|
|numberOfKeepRecordSyncInfo|Number|Number of tables with the "Enable Replication" option checked|
|numberOfRecordsMax|Number|Total number of records|
|numberOfTables|Number|Number of tables|
|numberOfWebServices|Number|Number of methods published as Web Services|
|phpCall|Number|Number of calls to `PHP execute` |
|projectMode|Boolean|True if the application is a project|
|qodly.webforms|Number|Number of Qodly webforms|
|restHits|Number|Number of hits on the REST server during the data collection|
|system|Text|Operating system version and build number|
|uniqueID|Text|Unique ID of the 4D Server|
|uptime|Number|Time elapsed (in seconds) since local 4D database was opened|
|usingLegacyNetworkLayer|Boolean|True if legacy network layer used for the application server|
|usingQUICNetworkLayer|Boolean|True if the database uses the QUIC network layer|
|version|Number|Version number of the 4D application|
|webServer|Object|"started":true if the web server is starting or started|
|webserverBytesIn|Number|Bytes received by the web server during the data collection|
|webserverBytesOut|Number|Bytes sent by the web server during the data collection|
|webserverHits|Number|Number of hits on the web server during the data collection|


## Where is it stored and sent?

Collected data is written in a text file (JSON format) per database when 4D Server quits. The file is stored inside the [active 4D folder](../commands-legacy/get-4d-folder.md), i.e.:

- on Windows: `Users\[userName]\AppData\Roaming\4D Server`
- on macOS: `/Users/[userName]/Library/ApplicationSupport/4D Server`

Once a week, the file is automatically sent over the network to 4D. The file is then deleted from the active 4D folder. 

![](../assets/en/Admin/data-collect.png)

> If the file could not be sent for some reason, it is nevertheless deleted and no error message is displayed on the 4D Server side. 

The file is sent to the following server address: `https://dcollector.4d.com` (ip: 195.68.52.83).


## Disabling data collection in client/server built applications

You can disable the automatic data collection in [client/server built applications](../Desktop/building.md#clientserver-page).

To disable the collection, pass the value **False** to the [`ServerDataCollection`](https://doc.4d.com/4Dv20/4D/20/ServerDataCollection.300-6335775.en.html) key in the `buildApp.4DSettings` file, used to build the client/server application.