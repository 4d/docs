---
id: exporting
title: Exporting from a 4D database 
---

You can convert a 4D binary database (.4db file) into a 4D project. Because the export only creates a new version of the existing database, the original files are never touched. Thus, you can convert your database as many times as you need.

Keep in mind that an export is a one-way operation:

- once a 4D database has been exported as a project, both versions become independent of each other. 
- a 4D project cannot be exported to a .4db file


## Converting a database

When you convert an existing 4D database to a project, the .4db file is left untouched: a folder named "Project" is created next to your .4db file, and will contain all necessary files.

**Note:** If a folder named "Project" already exists at the same level as your .4db file (for example if a conversion has been done already), it will be replaced by the conversion process. 

To convert a database to a project:

1. Open the database to convert.
2. Select **File > Export > Structure to project**.  
![](assets/en/Project/exportProj.png)
**Notes:**   
- This command is only available if a binary database is open -- it is disabled in project databases.
- You can also use the **Export structure file** language command.

If the conversion is successful and no blocking errors are encountered, the following dialog box is diplayed:
![](assets/en/Project/exportProj2.png)

- **Reveal log**: highlights the conversion log file on your disk. Reading this file is highly recommended since the conversion process could have modified some parts of the application (see [Check the conversion](#check-the-conversion)).

- **Open project**: restarts the 4D application and loads the converted project. 

### About the data file

The data file is left untouched by the conversion. Only development elements are converted. You can still open the data file with the .4db structure file after a conversion. 

## Resulting project

During the conversion, a new "Project" folder is created at the same level as your .4db structure file. It contains all of your application development as text files: forms, structure, methods, triggers, menus, tips, lists. It also contains a .4DProject file, which is your converted 4D project main file:

![](assets/en/Project/exportProj3.png)

When you open the .4DProject file with your 4D application, the project uses the same resources folder and web folder as the existing .4db file, which makes it easier to test your project.

You can still open the .4db database, perform modifications if required (see below), then export it again, and test it. You can repeat this operation until you are satisfied with the conversion.

## Check the conversion

A log file in JSON format is created by default during the conversion process to reference all issues that required an action from the converter. In this file, messages are classified into three categories ("severity" property), for example:

```codejs
	{
	   "message": "Exporting picture id:1, name:logo.png, types:.png to <...>:Resources:Images:library:logo.png",
	   "severity": "info"
	}
```

- **info**: describes a necessary action executed automatically by the converter that will not have an impact on the application interface or features. For example, if you have images in the pictures library, 4D exports them to the **Resources** folder of the database (see example above).

- **warning**: describes a necessary action executed automatically by the converter that could lead to differences in the application's features or interface, but without preventing the database to run. Warnings usually require that you control the impact of the conversion on your code. For example, warnings are returned when unsupported compatibility settings, such as "Unicode mode" or "Radio buttons grouped by name" are automatically switched. 

- **error**: describes an issue that requires your intervention to be corrected. It can prevent the database from running properly. For example, some legacy form objects are no longer supported, such as highlight buttons. In this case, you must convert the button by yourself to a 3D button in the .4db file before relaunching the conversion operation. 


When edits are required in the .4db database, just modify the code or the form accordingly and export the structure again. Repeat as necessary until you are satisfied with the result. 


## Compatibility issues

During the conversion, some legacy 4D technologies are converted to more modern implementations, and some others are temporarily disregarded.
 
In particular:

- The picture library no longer exists. During conversion, 4D exports all of your images to the **Resources** folder of the database.
- Form objects and form object properties have been updated (they now use the same grammar as dynamic forms). Deprecated parts are not supported. 
- Compatibility settings are reset as for a new database. See the Conversion log file to verify the status of compatibility settings for your database. 

For a detailed list of compatibility issues, please refer to [Legacy technologies on Doc Center](https://doc.4d.com/4Dv17R5/4D/17-R5/Deprecated-or-removed-features-in-v17-product-range.200-4245348.en.html#4020272).


## And now?

Once your are satisfied with your converted database and want to start working on your project, you can clean up your working directory:

1. Remove your .4db and .4dindy files from the application folder (e.g., move them to a backup directory).
2. On macOS, remove the .4dbase folder extension during the entire development phase. Since you are going to work with text files and put them under a source control tool, you will need to have direct access to them. 

If you want the data file to be open automatically after the project is moved to other machines, you can make it compliant with the [project architecture](architecture.md):

1. Rename your data file "data.4dd".
2. Create a folder named "Data" and move the *data.4dd* file within that folder
2. Store the *Data* folder at the same level as the Project folder.