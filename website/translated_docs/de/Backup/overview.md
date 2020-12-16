---
id: overview
title: Overview
---

4D includes a full database backup and restore module.

This module allows backing up a database currently in use without having to exit it. Each backup can include the project folder, the data file and any additional files or folders. These parameters are first set in the Database Settings.

Backups can be started manually or automatically at regular intervals without any user intervention. Specific language commands, as well as specific database methods, allow integrating backup functions into a customized interface.

Databases can be restored automatically when a damaged database is opened.

Also, the integrated backup module can take advantage of the .journal file ([database log file](log.md)). This file keeps a record of all operations performed on the data and also ensures total security between two backups. In case of problems with a database in use, any operations missing in the data file are automatically reintegrated the next time the database is opened. You can view the journal file contents at any time.

> You can also implement alternative solutions for replicating and synchronizing data in order to maintain identical versions of databases for backup purposes. These solutions can be based on the following mechanisms and technologies:  
> - Setting up a logical mirror with 4D Server (using the integrated backup module mechanisms)  
> - Synchronization using SQL - Synchronization using HTTP (/rest/url)


> For a general overview of 4D's security features, see the [4D Security guide](https://blog.4d.com/4d-security-guide/).
