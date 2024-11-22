---
id: compact-data-file
title: Compact data file
slug: /commands/compact-data-file
displayed_sidebar: docs
---

<!--REF #_command_.Compact data file.Syntax-->**Compact data file** ( *structurePath* ; *dataPath* {; *archiveFolder* {; *option* {; *method*}}} ) : Text<!-- END REF-->
<!--REF #_command_.Compact data file.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| structurePath | Text | &#8594;  | Pathname of structure file |
| dataPath | Text | &#8594;  | Pathname of data file to be compacted |
| archiveFolder | Text | &#8594;  | Pathname of folder where original data file will be put |
| option | Integer | &#8594;  | Compacting options |
| method | Text | &#8594;  | Name of 4D callback method |
| Function result | Text | &#8592; | Complete pathname of folder containing original data file |

<!-- END REF-->

#### Description 

<!--REF #_command_.Compact data file.Summary-->The **Compact data file** command compacts the data file designated by the *dataPath* parameter associated with the *structurePath* structure file.<!-- END REF--> For more information about compacting, refer to the Design Reference manual.

To ensure the continuity of the database operation, the new compacted data file automatically replaces the original file. For security, the original file is not modified and is moved into a special folder named “Replaced files (compacting) YYYY-MM-DD HH-MM-SS” where YYYY-MM-DD HH-MM-SS represents the date and time of the backup. For example: “Replaced files (compacting) 2007-09-27 15-20-35”.

The command returns the complete pathname of the folder actually created to store the original data file. This command can only be executed from 4D (local mode) or 4D Server (stored procedure). The data file to be compacted must correspond to the structure file designated by *structurePath*. In addition, the data file must not be open when the command is executed; otherwise an error is generated.  
If an error occurs during the compacting process, the original files are kept in their initial location. If an index file (.4DIndx file) is associated with the data file, it is also compacted. As with the data file, the original file is saved and the new compacted version replaces the previous one.

* In the *structurePath* parameter, pass the complete pathname of the structure file associated with the data file that you want to compact. This information is needed for the compacting procedure. The pathname must be expressed in the syntax of the operating system. You can also pass an empty string; in this case, the standard Open file dialog box appears so that you can designate the structure file to be used.
* In the *dataPath* parameter, you can pass an empty string, a file name or a complete pathname, expressed in the syntax of the operating system. If you pass an empty string, the standard Open file dialog box appears so that the user can designate the data file to be compacted. This file must correspond to the structure file defined in the *structurePath* parameter. If you only pass the name of the data file, 4D will look for it at the same level as the structure file.
* The optional *archiveFolder* parameter can be used to specify the location of the “Replaced files (compacting) DateTime” folder intended to receive the original versions of the data files as well as any index files.  
The command returns the complete pathname of the folder actually created.  
\- If you omit this parameter, the original files are automatically put in a “Replaced files (compacting) DateTime” folder that is created next to the structure file.  
\- If you pass an empty string, a standard Open folder dialog box will appear so that the user can specify the location of the folder to be created.  
\- If you pass a pathname (expressed in the syntax of the operating system), the command will create a “Replaced files (compacting) DateTime” folder at this location.
* The optional *options* parameter is used to set various compacting options. To do so, use the following constants, found in the “*Data File Maintenance*” theme. You can pass several options by combining them:
  
| Constant                | Type    | Value  | Comment                                                                                                                                                                                                                                                                                                                                                                                                                                                           |  
| ----------------------- | ------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |  
| Compact address table   | Integer | 131072 | Force the address table of the records to be rewritten (slows down compacting). Note that in this case, record numbers are rewritten. If you only pass this option, 4D automatically enables the ’Update records’ option.                                                                                                                                                                                                                                         |  
| Create process          | Integer | 32768  | When this option is passed, compacting will be asynchronous and you will need to manage the results using the callback method (see below). 4D will not display the progress bar (it is possible to do so using the callback method). The OK system variable is set to 1 if the process has been launched correctly and 0 in all other cases. When this option is not passed, the OK variable is set to 1 if the compacting takes place correctly and 0 otherwise. |  
| Do not create log file  | Integer | 16384  | Generally, this command creates a log file in XML format (refer to the end of the command description). With this option, no log file will be created.                                                                                                                                                                                                                                                                                                            |  
| Timestamp log file name | Integer | 262144 | When this option is passed, the name of the log file generated will contain the date and time of its creation; as a result, it will not replace any log file already generated previously. By default, if this option is not passed, log file names are not timestamped and each new file generated replaces the previous one.                                                                                                                                    |  
| Update records          | Integer | 65536  | Force all records to be rewritten according to current definition of the fields in the structure                                                                                                                                                                                                                                                                                                                                                                  |
* The *method* parameter is used to set a callback method which will be called regularly during the compacting if the Create process option has been passed. Otherwise, the callback method is never called. For more information about this method, please refer to the description of the [VERIFY DATA FILE](verify-data-file.md) command.

By default, the **Compact data file** command creates a log file in XML format (if you have not passed the Do not create log file option, see the *options* parameter). This file is placed in the **Logs** folder of the database and its name is based on the structure file of the current database. For example, for a structure file named “myDB.4db,” the log file will be named “myDB\_Compact\_Log.xml.”  
If you have passed the Timestamp log file name option, the name of the log file includes the date and time of its creation in the form "YYYY-MM-DD HH-MM-SS", which gives us, for example: “myDB\_Compact\_Log\_2015-09-27 15-20-35.xml”. This means that each new log file does not replace the previous one, but it might require subsequent manual action to remove unnecessary files.   
Regardless of the option selected, as soon as a log file is generated, its path is returned in the *Document* system variable after execution of the command.

#### Example 

The following example (Windows) carries out the compacting of a data file:

```4d
 $structFile:=Structure file
 $dataFile:="C:\\Databases\\Invoices\\January\\Invoices.4dd"
 $origFile:="C:\\Databases\\Invoices\\Archives\\January\\"
 $archFolder:=Compact data file($structFile;$dataFile;$origFile)
```

#### System variables and sets 

If the compacting operation is carried out correctly, the OK system variable is set to 1; otherwise, it is set to 0\. If a log file was generated, its complete pathname is returned in the Document system variable. 

#### See also 

[Table fragmentation](table-fragmentation.md)  
[VERIFY DATA FILE](verify-data-file.md)  