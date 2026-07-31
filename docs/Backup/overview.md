---
id: overview
title: Backup and Restore
---

4D includes a full application backup and restore module. 

This module allows backing up an application currently in use without having to exit it. Each backup can include the project folder, the data file and any additional files or folders. These parameters are first set in the Settings. 

Backups can be started manually or automatically at regular intervals without any user intervention. Specific language commands, as well as specific database methods, allow integrating backup functions into a customized interface. 

Applications can be restored automatically when a damaged application is opened. 

Also, the integrated backup module can take advantage of the .journal file ([database log file](log.md)). This file keeps a record of all operations performed on the data and also ensures total security between two backups. In case of problems with an application in use, any operations missing in the data file are automatically reintegrated the next time the application is opened. You can view the journal file contents at any time.

With 4D Server, you can also implement a [logical mirror](./mirror.md) for replicating and synchronizing data in order to maintain identical versions of applications for backup purposes. 

> For a general overview of 4D's security features, see the [4D Security guide](https://blog.4d.com/4d-security-guide/).
