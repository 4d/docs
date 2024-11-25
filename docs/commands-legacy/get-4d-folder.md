---
id: get-4d-folder
title: Get 4D folder
slug: /commands/get-4d-folder
displayed_sidebar: docs
---

<!--REF #_command_.Get 4D folder.Syntax-->**Get 4D folder** {( *folder* {; *options*} {; *})} : Text<!-- END REF-->
<!--REF #_command_.Get 4D folder.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| folder | Integer | &#8594;  | Folder type (if omitted = active 4D folder) |
| options | Object | &#8594;  | 4D Client database folder path configuration |
| * | Operator | &#8594;  | Return folder of host database |
| Function result | Text | &#8592; | Pathname to 4D Folder |

<!-- END REF-->

#### Description 

<!--REF #_command_.Get 4D folder.Summary-->The **Get 4D folder** command returns the pathname to the active 4D folder of the current application, or to the 4D environment folder specified by the *folder* and *options* parameters, if passed.<!-- END REF--> This command allows you to get the actual pathname of the folders used by the 4D application. By using this command, you ensure that your code will work on any platform running any localized system.

In *folder*, you can pass one of the following constants, which are located in the "*4D Environment*" theme (you will find below a description of each folder):

| Constant                    | Type    | Value |
| --------------------------- | ------- | ----- |
| 4D Client database folder   | Integer | 3     |
| Active 4D Folder            | Integer | 0     |
| Current resources folder    | Integer | 6     |
| Data folder                 | Integer | 9     |
| Database folder             | Integer | 4     |
| Database folder Unix syntax | Integer | 5     |
| HTML Root folder            | Integer | 8     |
| Licenses folder             | Integer | 1     |
| Logs folder                 | Integer | 7     |
| MobileApps folder           | Integer | 10    |

The *options* parameter allows you to customize the local resources folder path. It is only taken into account when using the 4D Client database folder constant (see below). 

**Note:** If the **Get 4D folder** command is called from a remote 4D, the path returned is that of the remote machine, not that of 4D Server.

##### Active 4D Folder 

The 4D environment uses a specific folder to store the following information:

* Preferences files used by the 4D environment applications
* Shortcuts.xml file (custom keyboard shortcuts)
* Macros v2 folder (macro commands of Method editor)
* Favorites v1x folder, for example Favorites v13 (pathnames for local and remote databases that have been opened)
* Logs folder for maintenance logs and when the data is read-only

The active 4D folder is created by default at the following location:

* On Windows: *{Disk}:\\Users\\* *<userName>\\AppData\\Roaming\\<applicationName>*
* On macOS: *{Disk}:Users:* *<userName>:Library:Application Support:<applicationName>*

##### Licenses Folder 

Folder containing the Licenses files of the machine.

**Note:** In the case of an application merged with 4D Volume Desktop, the licenses folder is included in the package of the application.

##### Data Folder 

Path of the folder containing the current data file. The pathname is expressed using the standard syntax of the current platform. 

##### 4D Client Database Folder 

Path of the 4D folder automatically created on 4D remote machines for storing files and folders related to the database (resources, plug-ins, Resources folder, etc.). The command can return:

* the path for the current application when it is called on a remote machine and the *options* parameter is omitted,
* the path for any application when the *options* parameter is used (in which case **Get 4D folder** can be called on any machine).

By default, the path is: 

* On Windows: {**Disk}:\\Users\\{UserAccount}\\AppData\\Local\\{ApplicationName}\\{StructureName\_IP\_Port\_key}*  
eg: C:\\Users\\John Doe\\AppData\\Local\\myApp\\myApp\_192\_168\_2\_134\_19813\_157
* On macOS: *{Disk}:Users:{UserAccount}:Library:Caches:{ApplicationName} Client:{StructureName\_IP\_Port\_key}.*  
eg: :Users:John Doe:Library:Caches:myApp Client:myApp\_192\_168\_2\_134\_19813\_933

Different folders are used if multiple *instances of the client application are launched simultaneously on the same machine* *.* 

**Note: O**n Windows, in merged client projects, the location of this folder is modified if the *ShareLocalResourcesOnWindowsClient* BuildApp key is used. 

**Using 4D Client Database Folder with *options* parameter**

You can use the *options* parameter if you want to compute any *4D database local folder path.* In this case, the path is built upon information you provided in the *options* object, and the command can be used of a 4D, 4D Server, or remote application. Thanks to this feature, you can precompute your resource folder paths, for example to preload contents. 

You can pass the following properties in the *options* object:

| **Property**                       | **Type** | **Description**                                                                                                                                                 |
| ---------------------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| remoteAppPath                      | Text     | Optional - Remote application executable system path. Default is current application executable path.                                                           |
| buildApplicationName               | Text     | Optional - Name of the application (same as the *BuildApplicationName* BuildApp xml key value). Default is name of the current application.                     |
| structureName                      | Text     | Mandatory except if the *clientServerSystemFolderName* attribute is defined - Name of the structure.                                                            |
| ipAddress                          | Text     | Mandatory except if the *clientServerSystemFolderName* attribute is defined - IP address of the server (same as the *IPAddress* BuildApp xml key value).        |
| portNumber                         | Number   | Mandatory except if the *clientServerSystemFolderName* attribute is defined - Publication port of the server (same as the *PortNumber* BuildApp xml key value). |
| clientServerSystemFolderName       | Text     | Optional - Custom name of the local resources final folder (same as the *ClientServerSystemFolderName* BuildApp xml key value).                                 |
| shareLocalResourcesOnWindowsClient | Boolean  | Optional - Shared local resources folder (same as the *ShareLocalResourcesOnWindowsClient* BuildApp xml key value).                                             |

**Note:** The returned path is expressed using the system syntax of the machine running the command. 

##### Database Folder 

Folder containing the database structure file. The pathname is expressed using the standard syntax of the current platform.   
With the 4D Client application, this constant is strictly equivalent to the previous 4D Client database folder constant: the command returns the pathname of the folder created locally.

##### Database Folder Unix Syntax 

Folder containing the database structure file. This constant designates the same folder as the previous one but the pathname returned is expressed using the Unix syntax (Posix), of the type /Users/... This syntax is mainly used when you use the [LAUNCH EXTERNAL PROCESS](launch-external-process.md) command under OS X.

##### Current Resources folder 

Resources folder of the database. This folder contains the additional items (pictures, texts) used for the database interface. A component can have its own Resources folder. 

In client/server mode, this folder can be used to organize the transfer of custom data (pictures, files, subfolders, etc.) between the server machine and the client machines. The contents of this folder are automatically updated on each client machine when it connects. All referencing mechanisms associated with the Resources folder are supported in client/server mode (.lproj folder, XLIFF, pictures, and so on). In addition, 4D provides various tools that can be used to manage and update this folder dynamically, more particularly a resources explorer.

**Notes:** 

* If the Resources folder does not exist for the database, executing the Get 4D folder command with the Current resources folder constant will create it.
* On Windows, in merged client projects, the location of this folder is modified if the *ShareLocalResourcesOnWindowsClient* BuildApp key is used.

##### Logs Folder 

The Logs folder of the database, located at the same level as the data file. This folder centralizes the following log files of the current database:

* database conversion,
* Web server requests,
* backup/restore activities journal,
* command debugging,
* 4D Server requests (generated on client machines and on the server).

**Notes**: 

* An additional Logs folder, located in the system user preferences folder (Active 4D Folder), is used for maintenance log files (compact, verify, repair). It recommended to call [Get 4D file](get-4d-file.md)(Compacting log file) for example when you want to access such log files. This Logs folder is also used in cases where regular Logs folder cannot be written.
* If the Logs folder does not exist for the database, executing the **Get 4D folder** command with the Logs folder constant will create it in the appropriate location.

##### HTML Root Folder 

Current HTML root folder of the database. The pathname returned is expressed with the standard syntax of the current platform. The HTML root folder is the folder in which the 4D Web server looks for the requested Web pages and files. By default, it is named **WebFolder** and is placed next to the structure file (or its local copy in the case of 4D in remote mode). Its location can be set on the Web/Configuration page of the Preferences or dynamically via the [WEB SET ROOT FOLDER](web-set-root-folder.md) command.

**Note:** On Windows, in merged client projects, the location of this folder is modified if the *ShareLocalResourcesOnWindowsClient* BuildApp key is used. 

##### MobileApps Folder 

Folder containing all existing session files (.json) used by the 4D application to reference mobile app user sessions (i.e. sessions from 4D for iOS or 4D for Android apps). Session files are grouped in application subfolders and are automatically created. For more information, please refer to the [go mobile documentation](https://developer.4d.com/go-mobile/).

This folder is located at the same level as the current 4D data file.

##### 

The optional *\** parameter is useful in the case of an architecture using components: it can be used to determine the database (host or component) for which you want to get the folder pathname. This parameter is only valid for Database folder, Database folder UNIX syntax and Current resources folder folders. It is ignored in all other cases.

When the command is called from a component:

* If the *\** parameter is passed, the command returns the pathname of the host database folder,
* If the *\** parameter is not passed, the command returns the pathname of the component folder.  
The database folder (Database folder and Database folder UNIX syntax) returned differs according to the type of the component architecture:  
   * In the case of a .4dbase folder/package, the command returns the pathname of the .4dbase folder/package,  
   * In the case of a .4db or .4dc file, the command returns the pathname of the “Components” folder,  
   * In the case of an alias or shortcut, the command returns the pathname of the folder containing the original matrix database. The result differs according to the format of this database (.4dbase folder/package or .4db/.4dc file), as described above.  
 When the command is called from the host database, it always returns the pathname of the host database folder, regardless of whether or not the *\** parameter is passed.

#### Example 1 

During the startup of a single-user database, you want to load (or create) your own settings in a file located in the 4D folder. To do so, in the [On Startup database method](on-startup-database-method.md), you can write code similar to this:

```4d
 $vsPrefDocName:=Get 4D folder+"MyPrefs.prf" //Build pathname to the Preferences file
  // Check if the file exists
 If(Test path name($vsPrefDocName)#Is a document)
    $vtPrefDocRef:=Create document($vsPrefDocName.prf) //If not, create it
 Else
    $vtPrefDocRef:=Open document($vsPrefDocName.prf) //If so, open it
 End if
 If(OK=1)
  //Process document contents
    CLOSE DOCUMENT($vtPrefDocRef)
 Else
  //Handle error
 End if
```

#### Example 2 

This example illustrates the use of the Database folder UNIX syntax constant under Mac OS to list the contents of the database folder:

```4d
 $posixpath:="\""+Get 4D folder(Database folder Unix syntax)+"\""
 $myfolder:="ls -l "+$posixpath
 $in:=""
 $out:=""
 $err:=""
 LAUNCH EXTERNAL PROCESS($myfolder;$in;$out;$err)
```

**Note:** Under Mac OS, it is necessary to put pathnames in quotes when they contain the names of files or folders with spaces in them. The escape sequence "\\" can be used to insert the quotation mark character into the string. You can also use the statement Char(Double quote). 

#### System variables and sets 

If the *folder* parameter is invalid or if the pathname returned is empty, the OK system variable is set to 0.

#### See also 

[COMPONENT LIST](component-list.md)  
[System folder](system-folder.md)  
[Temporary folder](temporary-folder.md)  
[Test path name](test-path-name.md)  
[WEB SET ROOT FOLDER](web-set-root-folder.md)  