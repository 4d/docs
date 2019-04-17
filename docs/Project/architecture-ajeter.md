---
id: architecture
title: Architecture of a 4D Project
---

The internal organization of 4D projects is described in this section. 

## Development

### Sources folder

The Sources folder is the main project folder. It contains the following elements:

Contents|Description|Format
--------|-------|----
catalog.4DCatalog|Table and field definitions|xml
folders.json|Explorer folder definitions|json
menus.json|Menu definitions|json
settings.4DSettings|Database settings|xml
tips.json|Defined tips|json
lists.json|Defined lists|json
filters.json|Defined filters|json
DatabaseMethods/*databaseMethodName*.4dm|Database methods defined in the database. One file per database method|text
Methods/*methodName*.4dm|Project methods defined in the database. One file per method|text
Forms/*formName*/form.4DForm|Project form description|json
Forms/*formName*/method.4dm|Project form method|text
Forms/*formName*/Images/*pictureName*|Project form static picture|picture
Forms/*formName*/ObjectMethods/*objectName*.4dm|Object methods. One file per object method|text
TableForms/*n*/Input/*formName*/form.4DForm|Input table form description (n is the table number)|json
TableForms/*n*/Input/*formName*/Images/*pictureName*|Input table form static pictures|picture
TableForms/*n*/Input/*formName*/method.4dm|Input table form method|text
TableForms/*n*/Input/*formName*/ObjectMethods/*objectName*.4dm|Input form object methods. One file per object method|text
TableForms/*n*/Output/*formName*/form.4DForm|Output table form description (n is the table number)|json
TableForms/*n*/Output/*formName*/Images/*pictureName*|Output table form static pictures|picture
TableForms/*n*/Output/*formName*/method.4dm|Output table form method|text
TableForms/*n*/Output/*formName*/ObjectMethods/*objectName*.4dm|Output form object methods. One file per object method|text
Triggers/table_*n*.4dm|Trigger methods defined in the database. One trigger file per table (n is the table number)|text

**Note:**
The .4dm file extension is a text-based file format, containing the code of a 4D method. It is compliant with source control tools. 

### BuildSettings folder

The BuildSettings folder is created automatically when using the application builder dialog box or the ```BUILD APPLICATION``` command. It contains:

Contents|Description|Format
--------|-------|----
BuildApp.xml|Build settings file|xml


### Resources folder

The Resources contains any custom database resource files and folders. In this folder, you can place all the files needed for the translation or customization of the application interface (picture files, text files, XLIFF files, etc.). 4D uses automatic mechanisms to work with the contents of this folder, in particular for the handling of XLIFF files and static pictures.
In the context of use in remote mode, the Resources folder lets you share files between the server machine and all the client machines. See the *4D Server Reference Manual*.

Contents|Description|Format
--------|-------|----
*item*|Database resource files and folders|various
Images/*item*|Pictures from the picture library as separate files(*). Names of picture library items become file names. If a duplicate exists, a number is added to the name.|picture

(*) only if the project was created from a .4db database (see [Exporting a database](exporting.md))

### Trash folder

The Trash folder contains methods and forms that were deleted for the project:

Contents|Description|Format
--------|-------|----
Methods/(*methodName*.4dm)|Trashed methods|text
Forms/(*formName*.4DForm)|Trashed forms|json


### userPreferences.*userName* folder

This folder contains configuration files specific to the database:

Contents|Description|Format
--------|-------|----
methodPreferences.json|Method editor preferences|json
methodWindowPositions.json|Current user window positions|json

Methods/(*methodName*.4dm)|Trashed methods|text
Forms/(*formName*.4DForm)|Trashed forms|json

### Logs folder

The Logs folder contains all log files used by the project. Logs files are timestamped. Log files include:

- database conversion,
- Web server requests,
- data verification and repair,
- structure verification and repair,
- backup/restore activities journal,
- command debugging,
- 4D Server requests (generated on client machines and on the server).


Contents|Description|Format
--------|-------|----
Sources/catalog.4DCatalog|Table and field definitions|xml
Conversion *timestamp*.json|Project conversion log file|json


Conversion log files. Conversion file names are timestamped. 

*item*|Database resource files and folders|various
Images/*item*|Pictures from the picture library as separate files(*). Names of picture library items become file names. If a duplicate exists, a number is added to the name.|picture


folders.json|Explorer folder definitions|json

- catalog.4DCatalog: Table and field definitions (xml)
- folders.json: Explorer folder definitions (json)
- menus.json: Menu definitions (json)
- settings.4DSettings: Database settings (xml)
- tips.json: Defined tips (json)
- lists.json: Defined lists (json)
- filters.json: Defined filters (json)
 
 

Contents|Description|Format
--------|-------|----
catalog.4DCatalog|Table and field definitions|xml
Sources/folders.json|Explorer folder definitions|json






















4D Project folder path|Description|Format
--------|-------|----
Sources/catalog.4DCatalog|Table and field definitions|xml
Sources/folders.json|Explorer folder definitions|json
Sources/menus.json|Menu definitions|json
Sources/settings.4DSettings|Database settings|xml
Sources/tips.json|Defined tips|json
Sources/lists.json|Defined lists|json
Sources/filters.json|Defined filters|json
Sources/DatabaseMethods/*databaseMethodName*.4dm|Database methods defined in the database. One file per database method|text
Sources/Methods/*methodName*.4dm|Project methods defined in the database. One file per method|text
Sources/Forms/*formName*/form.4DForm|Project form description|json
Sources/Forms/*formName*/method.4dm|Project form method|text
Sources/Forms/*formName*/Images/*pictureName*|Project form static picture|picture
Sources/Forms/*formName*/ObjectMethods/*objectName*.4dm|Object methods. One file per object method|text
Sources/TableForms/*n*/Input/*formName*/form.4DForm|Input table form description (n is the table number)|json
Sources/TableForms/*n*/Input/*formName*/Images/*pictureName*|Input table form static pictures|picture
Sources/TableForms/*n*/Input/*formName*/method.4dm|Input table form method|text
Sources/TableForms/*n*/Input/*formName*/ObjectMethods/<objectName>.4dm|Input form object methods. One file per object method|text
Sources/TableForms/*n*/Output/*formName*/form.4DForm|Output table form description (n is the table number)|json
Sources/TableForms/*n*/Output/*formName*/Images/<pictureName>|Output table form static pictures|picture
Sources/TableForms/*n*/Output/*formName*/method.4dm|Output table form method|text
Sources/TableForms/*n*/Output/*formName*/ObjectMethods/*objectName*.4dm|Output form object methods. One file per object method|text
Sources/Triggers/table_*n*.4dm|Trigger methods defined in the database. One trigger file per table (n is the table number)|text
BuildSettings/BuildApp.xml/Build settings file|xml
Resources/*item*|Database resource files and folders|various  
Resources/Images/*item*|(result from .4db export) Pictures from the picture library as separate files. Names of picture library items become file names. If a duplicate exists, a number is added to the name.|picture
Trash/Methods/(*methodName*.4dm)|Trashed methods|text
Trash/Forms/(*formName*.4DForm)|Trashed forms|json
userPreferences.*userName*/methodPreferences.json|Method editor preferences|json
userPreferences.*userName*/methodWindowPositions.json|Current user window positions|json
Logs|Conversion log files. Conversion file names are timestamped. Conversion log files contain the same information as the Result object from the Export structure file command|json

**Note:**
The .4dm file extension is a text-based file format, containing the code of a 4D method. It is compliant with source control tools. 