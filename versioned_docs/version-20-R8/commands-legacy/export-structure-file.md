---
id: export-structure-file
title: Export structure file
slug: /commands/export-structure-file
displayed_sidebar: docs
---

<!--REF #_command_.Export structure file.Syntax-->**Export structure file** ( *folderPath* {; *options*} ) : Object<!-- END REF-->
<!--REF #_command_.Export structure file.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| folderPath | Text | &#8594;  | Path of the destination folder for project files |
| options | Object | &#8594;  | Export options |
| Function result | Object | &#8592; | Validation status and messages (if any) |

<!-- END REF-->

#### Description 

<!--REF #_command_.Export structure file.Summary-->The **Export structure file** command breaks down the current 4D database structure into a set of text-based files or native picture files and stores them in the specified *folderPath*.<!-- END REF--> By default, the entirety of the database structure (methods, forms, catalog, etc.) is exported. You can filter the contents to export using the *options* parameter (see below).

This command allows you to store database structure files in a source control repository (*i.e.*, *Git, Perforce*, etc.). Successive changes or changes from several sources can then be compared using standard source control tools. 

This command can be used in the following contexts only:

* 4D in local mode or 4D Server (an error is returned if it is called from 4D in remote mode),
* Interpreted database (the command does nothing if it is called from a .4DC database)

Note also that when it is called from a component, the command always exports the host database structure.

In *folderPath*, pass the system path of the folder where the export files must be saved.

The *options* parameter allows you to customize the conversion process. The *options* object can contain the following properties:

| **Property name** | **Value type**    | **Description**                                                                                                                                                                                                                                                                                                                                                                                            |
| ----------------- | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| withLog           | boolean or string | <table><tbody><tr><td>true or "always": create a conversion log file the destination Logs folder.</td></tr><tr><td>"ifNotEmpty": create a conversion log file only if it contains some messages</td></tr><tr><td>false or omitted (default): do not create a conversion log file</td></tr></tbody></table> |
| makeProject       | boolean           | true to generate a .4DProject file in the "Project" folder                                                                                                                                                                                                                                                                                                                                                 |
| filter            | object            | Contents to export. If omitted (default), everything is exported                                                                                                                                                                                                                                                                                                                                           |
| projectMethods    | boolean           | true to export project methods                                                                                                                                                                                                                                                                                                                                                                             |
| databaseMethods   | boolean           | true to export database methods                                                                                                                                                                                                                                                                                                                                                                            |
| triggerMethods    | boolean           | true to export trigger methods                                                                                                                                                                                                                                                                                                                                                                             |
| forms             | boolean           | true to export forms                                                                                                                                                                                                                                                                                                                                                                                       |
| pageFormat        | boolean           | true to include the forms page format as "pageFormat" property of each form json file                                                                                                                                                                                                                                                                                                                      |
| catalog           | boolean           | true to export table and field definitions                                                                                                                                                                                                                                                                                                                                                                 |
| folders           | boolean           | true to export Explorer folders definitions                                                                                                                                                                                                                                                                                                                                                                |
| settings          | boolean           | true to export structure settings                                                                                                                                                                                                                                                                                                                                                                          |
| menus             | boolean           | true to export menus                                                                                                                                                                                                                                                                                                                                                                                       |
| tips              | boolean           | true to export tips                                                                                                                                                                                                                                                                                                                                                                                        |
| lists             | boolean           | true to export lists                                                                                                                                                                                                                                                                                                                                                                                       |
| filters           | boolean           | true to export filters                                                                                                                                                                                                                                                                                                                                                                                     |
| pictures          | boolean           | true to export pictures from picture library                                                                                                                                                                                                                                                                                                                                                               |
| resources         | boolean           | true to export Resources folder                                                                                                                                                                                                                                                                                                                                                                            |
| trash             | boolean           | true to export trashed methods and forms (\*)                                                                                                                                                                                                                                                                                                                                                              |
| windowPositions   | boolean           | true to export window positions                                                                                                                                                                                                                                                                                                                                                                            |
| methodPreferences | boolean           | true to export method editor preferences                                                                                                                                                                                                                                                                                                                                                                   |
| buildSettings     | boolean           | true to export the buildApp.xml file                                                                                                                                                                                                                                                                                                                                                                       |
| dataPath          | boolean           | true to copy the last open data file path into the project user preferences file                                                                                                                                                                                                                                                                                                                           |
| directory         | boolean           | true to export 4D users and groups                                                                                                                                                                                                                                                                                                                                                                         |
| styleSheets       | boolean           | true to export style sheets as CSS                                                                                                                                                                                                                                                                                                                                                                         |
| documentation     | boolean           | true to export Explorer comments as markdown files                                                                                                                                                                                                                                                                                                                                                         |

(\*) The "trash" filter is useful only if "projectMethods" or "forms" filters are also selected.

**Warning:** When the *options* parameter is passed and the "filter" object is used, you must explicitly declare each property to export with the **true** value. When this object is passed, 4D assumes all properties are set to **false** by default. 

##### Result 

The command returns an object providing the final status of the export as well as information on encountered issues or errors, if any. The following properties are returned:

| **Property name** | **Value type** | **Description**                                                                                            |
| ----------------- | -------------- | ---------------------------------------------------------------------------------------------------------- |
| success           | boolean        | True if export operation was successful, false otherwise.                                                  |
| messages          | collection     | Collection of objects describing issues encountered during the export operation                            |
| \[ \].severity    | text           | Level of issue. Possible values: "info", "error". Only "error" level sets the "success" property to false. |
| \[ \].message     | text           | Description of the issue or error, for example "Unsupported for object type"                               |
| \[ \].errors      | collection     | Error stack (if any)                                                                                       |

**Note:** Issue objects can include additional properties depending on the context.

Possible errors include:

* duplicated elements
* file management errors (file already exists, file locked, disk full, etc.)
* unsupported form object or property (see also ).

#### Example 1 

You want to export the database structure file in an "Export" folder with the default settings:

```4d
 var $result : Object
 $result:=Export structure file("Export")
 If($result.success=True)
    ALERT("Export successful")
 Else
    ALERT("Error during export")
 End if
```

#### Example 2 

You want to export only project and database methods, and a log file:

```4d
 var $option;$result : Object
 $option:=New object("filter";New object)
 $option.filter.projectMethods:=True
 $option.filter.databaseMethods:=True
 $option.withLog:="always"
 $result:=Export structure file("exportWithLog";$option)
```

#### See also 

[FORM Convert to dynamic](form-convert-to-dynamic.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 1565 |
| Thread safe | &cross; |


