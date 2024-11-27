---
id: system-info
title: System info
slug: /commands/system-info
displayed_sidebar: docs
---

<!--REF #_command_.System info.Syntax-->**System info**  : Object<!-- END REF-->
<!--REF #_command_.System info.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| Function result | Object | &#8592; | System information |

<!-- END REF-->

#### Description 

<!--REF #_command_.System info.Summary-->The **System info** command returns an object containg information about the operating system and the characteristics of the system hardware and software from the machine it's executed on.<!-- END REF-->

The command returns the following information: 

| Property          |  |             | Type                            | Description                                                                                                                                                                 | Example                                                                         |
|-------------------|-------------|-------------|---------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------|
| accountName       |             |             | string                          | The name of the account for the current user. Typically used to identify an account in the directory.                                                                       | "msmith"                                                                        |
| cores             |             |             | number                          | Total number of cores. In the case of virtual machines, the total number of cores allotted to it.                                                                           | 4                                                                               |
| cpuThreads        |             |             | number                          | Total number of threads.                                                                                                                                                    | 8                                                                               |
| machineName       |             |             | string                          | The name of the machine as set in the network parameters of the operating system.                                                                                           | "LAPTOP-M3BLHGSG"                                                               |
| macRosetta        |             |             | boolean                         | True if 4D is emulated through Rosetta on macOS, False otherwise (not emulated or on Windows).                                                                              | True                                                                            |
| model             |             |             | string                          | Name of the computer model.                                                                                                                                                 | "iMac12,2", "Dell", "Acer", "VMware", etc.                                      |
| networkInterfaces |             |             | collection                      | Physical and active network addresses only                                                                                                                                  |                                                                                 |
|                   | ipAddresses |             | collection                      |                                                                                                                                                                             |                                                                                 |
|                   |             | ip          | string                          | The address of the network interface                                                                                                                                        | "129.186.81.80"                                                                 |
|                   |             | type        | string                          | The type of the network interface                                                                                                                                           | "ipv4", "ipv6"                                                                  |
|                   | name        |             | string                          | The name of the interface.                                                                                                                                                  | "Intel(R) 82574L Gigabit Network Connection"                                    |
|                   | type        |             | string                          | The type of interface (note that "ethernet" type is provided for bluetooth interfaces).                                                                                     | "wifi", "ethernet"                                                              |
| osVersion         |             |             | string                          | The operating system version and build number(\*).                                                                                                                           | "Windows 10 Pro 1809 (17763.1577)"                                              |
| osLanguage        |             |             | string                          | Language set by the current user of the system. Expressed in the standard defined by the RFC 3066. See Language codes in the Design Reference manual for a complete list.   | "fr", "en", "ja", "de", etc.                                                    |
| physicalMemory    |             |             | number                          | The volume of memory storage (in kilobytes) available on the machine.                                                                                                       | 16777216                                                                        |
| processor         |             |             | string                          | The name, type, and speed of the processor.                                                                                                                                 | "Intel(R) Core(TM) i7-2600 CPU @ 3.40GHz"                                       |
| uptime            |             |             | number                          | The total time (in seconds) since the machine was started.                                                                                                                  | 3600                                                                            |
| userName          |             |             | string                          | The current user on the machine. Typically used as the display name (i.e., when logging into your computer).                                                                | "Mary Smith"                                                                    |
| volumes           |             |             | collection                      |                                                                                                                                                                             |                                                                                 |
|                   | available   |             | number                          | The remaining space that can be used.                                                                                                                                       | 524288                                                                          |
|                   | capacity    |             | number                          | The total volume (in kilobytes) possible.                                                                                                                                   | 1048576                                                                         |
|                   | disk        |             | object \| collection (Mac only) |                                                                                                                                                                             |                                                                                 |
|                   |             | description | string                          | A brief summary describing the disk.                                                                                                                                        | "HP LOGICAL VOLUME SCSI Disk Device"                                            |
|                   |             | identifier  | string                          | ID of disk(s) (UUID on Mac and physical drive on Windows)                                                                                                                   | Mac - "87547BDD-EA75-4F48-8BFA-9A7E393EEAB0", Windows - "\\\\.\\PHYSICALDRIVE0" |
|                   |             | size        | number                          | The total capacity (in kilobytes) of the disk                                                                                                                               | 104857600                                                                       |
|                   |             | interface   | string                          | The type of interface on the machine.                                                                                                                                       | "USB", "network", ,"SATA", "SCSI", "cd/dvd", "PCI"                              |
|                   | fileSystem  |             | string                          | The file system used by the operating system for storing and retrieving files on the hard disk.                                                                             | "NTFS", "Journaled HFS+", "GPFS", etc.                                          |
|                   | mountPoint  |             | string                          | The directory in the currently accessible file system on which an additional file system is mounted (i.e., logically attached). Note that this is in POSIX format for Macs. | Mac -  "/Volumes/Free HD", Windows - "C:"                                       |
|                   | name        |             | string                          | only on Mac - name of the volume                                                                                                                                            | "iMac-27-Program6"                                                              |


(\*) To determine only the platform being used, there are two commands available: [Is macOS](is-macos.md) and [Is Windows](is-windows.md).

**Note**: In the case of virtual machines, the information returned will be that of the virtual machine.

#### Example 

The following code on a Windows machine:

```4d
 var $systemInfo : Object
 $systemInfo:=System info
```

returns an object that contains, for example, the following information:

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

#### See also 

[Application info](application-info.md)  
[Is macOS](is-macos.md)  
[Is Windows](is-windows.md)  