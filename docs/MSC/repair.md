---
id: repair
title: Repair Page
sidebar_label: Repair Page
---

This page is used to repair the data file when it has been damaged. Generally, you will only use these functions under the supervision of 4D technical teams, when anomalies have been detected while opening the application or following a [verification](verify.md).

**Warning:** Each repair operation involves the duplication of the original file, which increases the size of the application folder. It is important to take this into account (especially in macOS where 4D applications appear as packages) so that the size of the application does not increase excessively. Manually removing the copies of the original file inside the package can be useful to minimize the package size.

>Repairing is only available in maintenance mode. If you attempt to carry out this operation in standard mode, a warning dialog will inform you that the application will be closed and restarted in maintenance mode.

>When the database is encrypted, repairing data includes decryption and encryption steps and thus, requires the current data encryption key. If no valid encryption key has already been provided, a dialog requesting the passphrase or the encryption key is displayed (see Encrypt page). 

## File overview 

### Data file to be repaired
Pathname of the current data file. The **[...]** button can be used to specify another data file. When you click on this button, a standard Open document dialog is displayed so that you can designate the data file to be repaired. If you perform a [standard repair](#standard-repair), you must select a data file that is compatible with the open project file. If you perform a [recover by record headers](#recover-by-record-headers) repair, you can select any data file. Once this dialog has been validated, the pathname of the file to be repaired is indicated in the window. 

### Original files backup folder
By default, the original data file will be duplicated before the repair operation. It will be placed in a subfolder named “Replaced files (repairing)” in the application folder. The second **[...]** button can be used to specify another location for the original files to be saved before repairing begins. This option can be used more particularly when repairing voluminous files while using different disks.

### Repaired files
4D creates a new blank data file at the location of the original file. The original file is moved into the folder named "\Replaced Files (Repairing) date time" whose location is set in the "Original files backup folder" area (application folder by default). The blank file is filled with the recovered data. 


## Standard repair

Standard repair should be chosen when only a few records or indexes are damaged (address tables are intact). The data is compacted and repaired. This type of repair can only be performed when the data and structure file match.

When the repair procedure is finished, the "Repair" page of the MSC is displayed. A message indicates if the repair was successful. If so, you can open the application immediately. 
![](../assets/en/MSC/MSC_RepairOK.png)

## Recover by record headers
Use this low-level repair option only when the data file is severely damaged and after all other solutions (restoring from a backup, standard repair) have proven to be ineffective.

4D records vary in size, so it is necessary to keep the location where they are stored on disk in a specific table, named address table, in order to find them again. The program therefore accesses the address of the record via an index and the address table. If only records or indexes are damaged, the standard repair option is usually sufficient to resolve the problem. However, when the address table itself is affected, it requires a more sophisticated recovery since it will be necessary to reconstitute it. To do this, the MSC uses the marker located in the header of each record. The markers are compared to a summary of the record, including the bulk of their information, and from which it is possible to reconstruct the address table.

> If you have deselected the **Records definitively deleted** option in the properties of a table in the structure, performing a recovery by header markers may cause records that were previously deleted to reappear. 
> 
> Recovery by headers does not take integrity constraints into account. More specifically, after this operation you may get duplicated values with unique fields or NULL values with fields declared **Never Null**.

When you click on **Scan and repair...**, 4D performs a complete scan of the data file. When the scan is complete, the results appear in the following window:

![](../assets/en/MSC/mscrepair2.png)

>If all the records and all the tables have been assigned, only the main area is displayed. 

The "Records found in the data file" area includes two tables summarizing the information from the scan of the data file. 

- The first table lists the information from the data file scan. Each row shows a group of recoverable records in the data file:
	- The **Order** column indicates the recovery order for the group of records.  
	- The **Count** column indicates the number of the records in the table.
	- The **Destination table** column indicates the names of tables that were automatically assigned to the groups of identified records. The names of tables assigned automatically appear in green. Groups that were not assigned, i.e. tables that could not be associated with any records appear in red.
	- The **Recover** column lets you indicate, for each group, whether you want to recover the records. By default, this option is checked for every group with records that can be associated with a table.

- The second table lists the tables of the project file.


### Manual assigning
If several groups of records could not be assigned to tables due to a damaged address table, you can assign them manually. 
To do this, first select an unassigned group of records in the first table. The "Content of the records" area then displays a preview of the contents of the first records of the group to make it easier to assign them:

![](../assets/en/MSC/mscrepair3.png)

Next select the table you want to assign to the group in the "Unassigned tables" table and click on the **Identify table** button. You can also assign a table using drag and drop. 
The group of records is then associated with the table and it will be recovered in this table. The names of tables that are assigned manually appear in black. 
Use the **Ignore records** button to remove the association made manually between the table and the group of records. 


## Open log file

After repair is completed, 4D generates a log file in the Logs folder of the project. This file allows you to view all the operations carried out. It is created in XML format and named: *ApplicationName**_Repair_Log_yyyy-mm-dd hh-mm-ss.xml*" where:

- *ApplicationName* is the name of the project file without any extension, for example "Invoices",
- *yyyy-mm-dd hh-mm-ss* is the timestamp of the file, based upon the local system time when the maintenance operation was started, for example "2019-02-11 15-20-45".

When you click on the **Open log file** button, 4D displays the most recent log file in the default browser of the machine.
