---
id: exporting
title: Exporting to 4D project 
---

You can convert an existing 4D database (.4db file) into a 4D project. Since the export only creates a new version of the existing database, original files are never touched. Thus, you can convert your database as many times as you need.

Keep in mind that the export is a one-way operation:

- once a 4D database has been exported as a project, both versions become independant. 
- a 4D project cannot be exported to a .4db file


## Converting a database

When you convert an existing 4D database to a project, the .4db file is left untouched: a "Project" folder is created next to your .4db file, and will contain all necessary files.

**Note:** If a "Project" folder already exists at the same level as your .4db file (for example if a conversion has been done already), it will be replaced by the conversion process. 

To convert a database to a project:

1. Open the database to convert.
2. Select **File > Export > Structure to project**.  
**Notes:**   
- This command is only available if the database is open in classic (binary) mode.
- You can also use the **Export structure file** language command.
![](../assets/en/exportProj.png)
If the conversion was successful and no blocking errors encountered, the following dialog box is diplayed:
![](../assets/en/exportProj2.png)

- **Reveal log**: highlights the conversion log file on your disk. Reading this file is highly recommenced in any case since the conversion process could have modified some parts of the application (see XXX).
- **Open project**: restarts the 4D application and loads the converted project. 

### About the data file

The data file is left untouched by the

## Resulting project

During the conversion process, a new "Project" folder is created at the same level as your .4db structure file. It contains all your development as text files: forms, structure, methods, triggers, menus, tips, lists. It also contains a ".4DProject" file, which is your converted 4D project main file:

![](../assets/en/exportProj3.png)

When you open the "<name>.4DProject" file with your 4D application, the project uses the same resources folder and web folder as the existing "<name>.4db" file, which makes it easier to test your project.

You can still open the "<name>.4db" database, do some modifications if required (see [Compatibility issues]), then export again, and test. You can repeat this operation until you are satisfied with the conversion.

## Check your conversion

No need to worry about converting your database. The conversion does not change your structure (.4db) and your data (.4dd). A log file is created during the conversion. Messages are classified into three categories: info, warning and error.
For example, if you have images in the pictures library, 4D exports them to the resources folder of your database. In the log file, you have the correspondence between the ID of the picture and the name of the file:
{
   "message": "Exporting picture id:1, name:logo.png, types:.png to <...>:Resources:Images:library:logo.png",
   "severity": "info"
}
Or for instance, some errors require your intervention. Some old form objects are no longer supported, such as highlight buttons. In this case, you must convert the button yourself to a 3D button.
{
   "table": 3,
   "tableName": "Name",
   "form": "Form",
   "object": "button",
   "message": "Highlight buttons are unsupported. Please convert them to 3D buttons.",
   "severity": "error"
}
We’ve got you covered. 4D informs you of everything it does. All you have to do is reading what’s written for a better understanding if something went wrong during the conversion, or for just useful information to help you carry on.


## Compatibility issues

## And after?
### Copy, merge, 
### Rollback
