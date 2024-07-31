---
id: compact
title: Compact Page
sidebar_label: Compact Page
---

You use this page to access the data file compacting functions.

## Why compact your files? 

Compacting files meets two types of needs:

- **Reducing size and optimization of files**: Files may contain unused spaces (“holes”). In fact, when you delete records, the space that they occupied previously in the file becomes empty. 4D reuses these empty spaces whenever possible, but since data size is variable, successive deletions or modifications will inevitably generate unusable space for the program. The same goes when a large quantity of data has just been deleted: the empty spaces remain unassigned in the file. 
The ratio between the size of the data file and the space actually used for the data is the occupation rate of the data. A rate that is too low can lead, in addition to a waste of space, to the deterioration of database performance. Compacting can be used to reorganize and optimize storage of the data in order to remove the “holes”. 
The “Information” area summarizes the data concerning the fragmentation of the file and suggests operations to be carried out. The [Data](information.md#data) tab on the “Information” page of the MSC indicates the fragmentation of the current data file.

- **Complete updating of data** by applying the current formatting set in the structure file. This is useful when data from the same table were stored in different formats, for example after a change in the database structure. 

>Compacting is only available in maintenance mode. If you attempt to carry out this operation in standard mode, a warning dialog box will inform you that the application will be closed and restarted in maintenance mode. You can compact a data file that is not opened by the application (see [Compact records and indexes](#compact-records-and-indexes) below).

## Standard compacting  

To directly begin the compacting of the data file, click on the compacting button in the MSC window.

![](../assets/en/MSC/MSC_compact.png) 


>Since compacting involves the duplication of the original file, the button is disabled when there is not adequate space available on the disk containing the file. 

This operation compacts the main file as well as any index files. 4D copies the original files and puts them in a folder named **Replaced Files (Compacting)**, which is created next to the original file. If you have carried out several compacting operations, a new folder is created each time. It will be named “Replaced Files (Compacting)_1”, “Replaced Files (Compacting)_2”, and so on. You can modify the folder where the original files are saved using the advanced mode.

When the operation is completed, the compacted files automatically replace the original files. The application is immediately operational without any further manipulation.

>When the database is encrypted, compacting includes decryption and encryption steps and thus, requires the current data encryption key. If no valid data key has already been provided, a dialog box requesting the passphrase or the data key is displayed. 

**Warning:** Each compacting operation involves the duplication of the original file which increases the size of the application folder. It is important to take this into account (especially under macOS where 4D applications appear as packages) so that the size of the application does not increase excessively. Manually removing the copies of the original file inside the package can be useful in order to keep the package size down.

## Open log file

After compacting is completed, 4D generates a log file in the Logs folder of the project. This file allows you to view all the operations carried out. It is created in XML format and named:  *ApplicationName**_Compact_Log_yyyy-mm-dd hh-mm-ss.xml*" where:

- *ApplicationName* is the name of the project file without any extension, for example "Invoices",
- *yyyy-mm-dd hh-mm-ss* is the timestamp of the file, based upon the local system time when the maintenance operation was started, for example "2019-02-11 15-20-45".

When you click on the **Open log file** button, 4D displays the most recent log file in the default browser of the machine.


## Advanced mode

The Compact page contains an **Advanced>** button, which can be used to access an options page for compacting data file.

### Compact records and indexes

The **Compact records and indexes** area displays the pathname of the current data file as well as a **[...]** button that can be used to specify another data file. When you click on this button, a standard Open document dialog box is displayed so that you can designate the data file to be compacted. You must select a data file that is compatible with the open structure file. Once this dialog box has been validated, the pathname of the file to be compacted is indicated in the window. 

The second **[...]** button can be used to specify another location for the original files to be saved before the compacting operation. This option can be used more particularly when compacting voluminous files while using different disks.

### Force updating of the records

When this option is checked, 4D rewrites every record for each table during the compacting operation, according to its description in the structure. If this option is not checked, 4D just reorganizes the data storage on disk. This option is useful in the following cases:

- When field types are changed in the application structure after data were entered. For example, you may have changed a Longint field to a Real type. 4D even allows changes between two very different types (with risks of data loss), for instance a Real field can be changed to Text and vice versa.
In this case, 4D does not convert data already entered retroactively; data is converted only when records are loaded and then saved. This option forces all data to be converted.

- When an external storage option for Text, Picture or BLOB data has been changed after data were entered. This can happen when databases are converted from a version prior to v13. As is the case with the retyping described above, 4D does not convert data already entered retroactively. To do this, you can force records to be updated in order to apply the new storage mode to records that have already been entered.

- When tables or fields were deleted. In this case, compacting with updating of records recovers the space of these removed data and thus reduces file size.

>All the indexes are updated when this option is selected.

### Compact address table

(option only active when preceding option is checked)

This option completely rebuilds the address table for the records during compacting. This optimizes the size of the address table and is mainly used for databases where large volumes of data were created and then deleted. In other cases, optimization is not a decisive factor.

Note that this option substantially slows compacting and invalidates any sets saved using the `SAVE SET` command. Moreover, we strongly recommend deleting saved sets in this case because their use can lead to selections of incorrect data. 

:::note Notes

- Compacting takes records of tables that have been put into the Trash into account. If there are a large number of records in the Trash, this can be an additional factor that may slow down the operation.
- Using this option makes the address table, and thus the database, incompatible with the current journal file (if there is one). It will be saved automatically and a new journal file will have to be created the next time the application is launched.
- You can decide if the address table needs to be compacted by comparing the total number of records and the address table size in the [Information](information.md) page of the MSC.
- The [`TRUNCATE TABLE`](https://doc.4d.com/4dv19R/help/command/en/page1051.html) command automatically resets the address table for the specified table.  

:::
