---
id: cli
title: Command Line Interface
---

You can use the macOS Terminal or the Windows console to drive your 4D applications (4D and 4D Server) using command lines. More particularly, this functionality allows you to:

- launch a database remotely, which can be especially useful for administering Web servers.
- run automatic tests for your applications.

## Basic information

You can execute command lines for 4D applications using the macOS Terminal or the Windows Console.

- Under macOS, you should use the `open` command.
- Under Windows, you can just pass the arguments directly.

> Under macOS, you can pass the arguments directly by going to the folder where the application is found inside the package (Contents/MacOS path), which allows to address the stderr stream. For example, if the 4D package is located in the `MyFolder` folder, you must write the command line as follows: `/MyFolder/4D.app/Contents/MacOS/4D`. However, we recommend that you use the `open` command whenever you do not need to access the stderr stream.

## Launch a 4D application

Here is a description of command lines and the arguments supported to launch 4D applications.

Syntax:
```
<applicationPath> [--version] [--help] [--project] [<projectPath | packagePath | 4dlinkPath> [--data <dataPath>]] 
[--opening-mode interpreted | compiled] [--create-data] [--user-param <user string>] [--headless] [--dataless]
[--webadmin-settings-file] [--webadmin-access-key] [--webadmin-auto-start] [--webadmin-store-settings]
```
| Argument&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Value                                            | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `applicationPath`                                                                                                                                                                            | Path of the 4D, 4D Server or merged application  | Launches the application. Identical to double-clicking the 4D application. When called without structure file argument, the application is executed and the 'select database' dialog box appears.                                                                                                                                                                                                                                                                                                                                                                                                 |
| `--version`                                                                                                                                                                                  |                                                  | Dispays application version and exits                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `--help`                                                                                                                                                                                     |                                                  | Dispays help and exits. Alternate arguments: -?, -h                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `--project`                                                                                                                                                                                  | projectPath &#124; packagePath &#124; 4dlinkPath | Project file to open with the current data file. No dialog box appears.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `--data`                                                                                                                                                                                     | dataPath                                         | Data file to open with the designated project file. If not specified, 4D uses the last opened data file.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `--opening-mode`                                                                                                                                                                             | interpreted &#124; compiled                      | Requests database to open in interpreted or compiled mode. No error is thrown if the requested mode is unavailable.                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `--create-data`                                                                                                                                                                              |                                                  | Automatically creates a new data file if no valid data file is found. No dialog box appears. 4D uses the file name passed in the "--data" argument if any (generates an error if a file with the same name already exists).                                                                                                                                                                                                                                                                                                                                                                       |
| `--user-param`                                                                                                                                                                               | Custom user string                               | A string that will be available within the 4D application through the Get database parameter command (the string must not start with a "-" character, which is reserved).                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `--headless`                                                                                                                                                                                 |                                                  | Launches the 4D, 4D Server or merged application without interface (headless mode). In this mode:<li> The Design mode is not available, database starts in Application mode</li><li> No toolbar, menu bar, MDI window or splash screen is displayed</li><li>No icon is displayed in the dock or task bar</li><li>The opened database is not registered in the "Recent databases" menu</li><li>The diagnostic log is automatically started (see [SET DATABASE PARAMETER](https://doc.4d.com/4dv19/help/command/en/page642.html), selector 79)</li><li>Every call to a dialog box is intercepted and an automatic response it provided (e.g. OK for the [ALERT](https://doc.4d.com/4dv19/help/command/en/page41.html) command, Abort for an error dialog...). All intercepted commands(*) are logged in the diagnostic log.</li><br/>For maintenance needs, you can send any text to standard output streams using the [LOG EVENT](https://doc.4d.com/4dv19/help/command/en/page667.html) command. Note that headless 4D applications can only be closed by a call to [QUIT 4D](https://doc.4d.com/4dv19/help/command/en/page291.html) or using the OS task manager. |
| `--dataless`                                                                                                                                                                                 |                                                  | Launches 4D, 4D Server or merged application in dataless mode. Dataless mode is useful when 4D runs tasks with no need for data (project compilation for example). In this mode: <li>No file containing data is opened, even if specified in the command line or the `.4DLink` file, or when using the `CREATE DATA FILE` and `OPEN DATA FILE` commands.</li><li>Commands that manipulate data will throw an error. For example, `CREATE RECORD` throws “no table to apply the command to”.</li><br/>**Note**:<li>If passed in the command line, dataless mode applies to all databases opened in 4D, as long as the application is not closed.</li><li>If passed using the `.4DLink` file, dataless mode only applies to the database specified in the `.4DLink` file. For more information on `.4DLink` files, see [Project opening shortcuts](../GettingStarted/creating.md#project-opening-shortcuts).</li>                                                                                                                                                                                                                                                                                          |
| `--webadmin-settings-file`                                                                                                                                                                   | File path                                        | Path of the custom WebAdmin `.4DSettings` file for the [WebAdmin web server](webAdmin.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `--webadmin-access-key`                                                                                                                                                                      | String                                           | Access key for the [WebAdmin web server](webAdmin.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `--webadmin-auto-start`                                                                                                                                                                      | Boolean                                          | Status of the automatic startup for the [WebAdmin web server](webAdmin.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `--webadmin-store-settings`                                                                                                                                                                  |                                                  | Store the access key and automatic starting parameters in the currently used settings file (i.e. the default [`WebAdmin.4DSettings`](webAdmin.md#webadmin-settings) file or a custom file designated with the `--webadmin-settings-path` parameter). Use the `--webadmin-store-settings` argument to save these settings if necessary                                                                                                                                                                                                                                                             |
 (*) Some dialogs are displayed before the database is opened, so that it's impossible to write into the 

[Diagnostic log file](Debugging/debugLogFiles.md#4ddiagnosticlogtxt) (licence alert, conversion dialog, database selection, data file selection). In such case, an error message is thrown both in the stderr stream and the system event log, and then the application quits.

### Examples

These examples assume that your 4D application is stored on the desktop and that the database to be opened is found in the "Documents" folder.

> The current folder of the user is reached using the "~ " command under macOS and the "%HOMEPATH%" command under Windows.

Launch application:

*   macOS:


```bash
open ~/Desktop/4D.app
```

*   Windows:


```bash
%HOMEPATH%\Desktop\4D\4D.exe
```

Launch application with a package file on macOS:

```bash
yarn open ~/Desktop/4D.app --args ~/Documents/myDB.4dbase
```

Launch application with a project file:

*   macOS:


```bash
yarn open ~/Desktop/4D.app --args ~/Documents/myProj/Project/myProj.4DProject
```


*   Windows:


```bash
%HOMEPATH%\Desktop\4D\4D.exe %HOMEPATH%\Documents\myProj\Project\myProj.4DProject
```



Launch application with a project file and a data file:

*   macOS:


```bash
open ~/Desktop/4D.app --args --project ~/Documents/myProj/Project/myProj.4DProject --data ~/Documents/data/myData.4DD
```

*   Windows:


```bash
%HOMEPATH%\Desktop\4D\4D.exe --project %HOMEPATH%\Documents\myProj\Project\myProj.4DProject --data %HOMEPATH%\Documents\data\myData.4DD
or:
%HOMEPATH%\Desktop\4D\4D.exe /project %HOMEPATH%\Documents\myProj\Project\myProj.4DProject /data %HOMEPATH%\Documents\data\myData.4DD
```

Launch application with a .4DLink file:

*   macOS:


```bash
open ~/Desktop/4D.app MyDatabase.4DLink
```

```bash
open "~/Desktop/4D Server.app" MyDatabase.4DLink
```

*   Windows:


```bash
%HOMEPATH%\Desktop\4D.exe MyDatabase.4DLink
```

```bash
%HOMEPATH%\Desktop\4D Server.exe" MyDatabase.4DLink
```

Launch application in compiled mode and create a data file if not available:

*   macOS:


```bash
open ~/Desktop/4D.app ~/Documents/myBase.4dbase --args --opening-mode compiled --create-data true
```

*   Windows:


```bash
%HOMEPATH%\Desktop\4D\4D.exe %HOMEPATH%\Documents\myBase.4dbase\myDB.4db --opening-mode compiled --create-data true
```

Launch application with a project file and a data file and pass a string as a user parameter:

*   macOS:


```bash
open ~/Desktop/4D.app --args --project ~/Documents/myProj/Project/myProj.4DProject --data ~/Documents/data/myData.4DD --user-param "Hello world"
```

*   Windows:


```bash
%HOMEPATH%\Desktop\4D\4D.exe --project %HOMEPATH%\Documents\myProj\Project\myProj.4DProject --data %HOMEPATH%\Documents\data\myData.4DD --user-param "Hello world"
```

Launch application without interface (headless mode):

*   macOS:


```bash
open ~/Desktop/4D.app --args --project ~/Documents/myProj/Project/myProj.4DProject --data ~/Documents/data/myData.4DD --headless
```

```bash
open ~/Desktop/MyBuiltRemoteApp −−headless
```

*   Windows:


```bash
%HOMEPATH%\Desktop\4D\4D.exe --project %HOMEPATH%\Documents\myProj\Project\myProj.4DProject --data %HOMEPATH%\Documents\data\myData.4DD --headless
%HOMEPATH%\Desktop\4D\MyBuiltRemoteApp.exe --headless
```
