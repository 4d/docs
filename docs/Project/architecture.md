---
id: architecture
title: Architecture of a 4D project
---

A 4D project is made of several folders and files, stored within a single parent database folder. For example:

![](assets/en/Project/project1.png)


## Project folder

The Project folder typically contains the following hierarchy:

- *databaseName*.4DProject file
- Sources
	+ DatabaseMethods
	+ Methods
	+ Forms
	+ TableForms
	+ Triggers
- BuildSettings
- DerivedData


### *databaseName*.4DProject file

Project development file, used to designate and launch the project. This file can be opened by:

- 4D Developer
- 4D Server (read-only, see [Developing a project](developing.md))

**Note:** In 4D projects, development is done with 4D Developer and multi-user development is managed through source control tools. 4D Server can open .4DProject files for testing purposes.


### Sources folder

Contents|Description|Format
--------|-------|----
catalog.4DCatalog|Table and field definitions|XML
folders.json|Explorer folder definitions|JSON
menus.json|Menu definitions|JSON
settings.4DSettings|Database settings|XML
tips.json|Defined tips|JSON
lists.json|Defined lists|JSON
filters.json|Defined filters|JSON  

#### DatabaseMethods folder

Contents|Description|Format
--------|-------|----
*databaseMethodName*.4dm|Database methods defined in the database. One file per database method|text

#### Methods folder

Contents|Description|Format
--------|-------|----
*methodName*.4dm|Project methods defined in the database. One file per method|text

#### Forms folder

Contents|Description|Format
--------|-------|----
*formName*/form.4DForm|Project form description|json
*formName*/method.4dm|Project form method|text
*formName*/Images/*pictureName*|Project form static picture|picture
*formName*/ObjectMethods/*objectName*.4dm|Object methods. One file per object method|text

#### TableForms folder

Contents|Description|Format
--------|-------|----
*n*/Input/*formName*/form.4DForm|Input table form description (n is the table number)|json
*n*/Input/*formName*/Images/*pictureName*|Input table form static pictures|picture
*n*/Input/*formName*/method.4dm|Input table form method|text
*n*/Input/*formName*/ObjectMethods/*objectName*.4dm|Input form object methods. One file per object method|text
*n*/Output/*formName*/form.4DForm|Output table form description (n is the table number)|json
*n*/Output/*formName*/Images/*pictureName*|Output table form static pictures|picture
*n*/Output/*formName*/method.4dm|Output table form method|text
*n*/Output/*formName*/ObjectMethods/*objectName*.4dm|Output form object methods. One file per object method|text

#### Triggers folder

Contents|Description|Format
--------|-------|----
table_*n*.4dm|Trigger methods defined in the database. One trigger file per table (n is the table number)|text

**Note:**
The .4dm file extension is a text-based file format, containing the code of a 4D method. It is compliant with source control tools. 

### BuildSettings folder

The BuildSettings folder is created automatically when using the application builder dialog box or the ```BUILD APPLICATION``` command. It contains:

Contents|Description|Format
--------|-------|----
BuildApp.xml|Build settings file|XML


### Trash folder

The Trash folder contains methods and forms that were deleted from the project (if any). It can contain the following folders:

- Methods
- Forms
- TableForms

Within these folders, deleted element names are in parentheses, e.g. "(myMethod).4dm". The folder organization is identical to the [Sources](#sources) folder. 


### DerivedData folder

The DerivedData folder contains cached data used internally by 4D to optimize processing. It is automatically created or recreated when necessary. You can ignore this folder. 


## Resources folder

The Resources folder contains any custom database resource files and folders. In this folder, you can place all the files needed for the translation or customization of the application interface (picture files, text files, XLIFF files, etc.). 4D uses automatic mechanisms to work with the contents of this folder, in particular for the handling of XLIFF files and static pictures. For using in remote mode, the Resources folder lets you share files between the server machine and all the client machines. See the *4D Server Reference Manual*.

Contents|Description|Format
--------|-------|----
*item*|Database resource files and folders|various
Images/Library/*item*|Pictures from the Picture Library as separate files(*). Names of these items become file names. If a duplicate exists, a number is added to the name.|picture

(*) only if the project was created from a .4db database (see [Exporting a database](exporting.md)).


## Data folder

The data folder contains the data file and all files relating to the data.

Contents|Description|Format
--------|-------|----
data.4dd(*)|Data file containing data entered in the records and all the data belonging to the records. When you open a 4D project, the application opens the current data file by default. If you change the name or location of this file, the *Open data file* dialog box will then appear so that you can select the data file to use or create a new one|binary
data.journal|Created only when the database uses a log file. The log file is used to ensure the security of the data between backups. All operations carried out on the data are recorded sequentially in this file. Therefore, each operation on the data causes two simultaneous actions: the first on the data (the statement is executed normally) and the second in the log file (a description of the operation is recorded). The log file is constructed independently, without disturbing or slowing down the user’s work. A database can only work with a single log file at a time. The log file records operations such as additions, modifications or deletions of records, transactions, etc. It is generated by default when a database is created.|binary
data.match|(internal) UUID matching table number|XML

(*) When the project is created from a .4db database, the data file is left untouched. Thus, it can be named differently and placed in another location (see [Exporting a database](exporting.md)).


## Logs folder

The Logs folder contains all log files used by the project. Log files are and include, in particular:

- database conversion,
- web server requests,
- data verification and repair,
- structure verification and repair,
- backup/restore activities journal,
- command debugging,
- 4D Server requests (generated on client machines and on the server).


## userPreferences.*userName* folder

This folder contains user configuration files. You can just ignore this folder. It contains for example:

Contents|Description|Format
--------|-------|----
methodPreferences.json|Current user method editor preferences|JSON
methodWindowPositions.json|Current user window positions for methods|JSON
formWindowPositions.json|Current user window positions for forms|JSON
workspace.json|List of opened windows; on macOS, order of tab windows|JSON
preferencesv15.4DPreferences|User preferences|JSON


