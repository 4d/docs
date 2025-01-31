---
id: cli
title: Command Line Interface
---

You can use the macOS Terminal or the Windows console to drive your 4D applications (4D, 4D Server, merged application, and [tool4d](#tool4d)) using command lines. More particularly, this functionality allows you to:

- launch a database remotely, which can be especially useful for administering Web servers.
- run automatic tests for your applications.

## Basic information

You can execute command lines for 4D applications using the macOS Terminal or the Windows Console.

- Under macOS, you should use the `open` command.
- Under Windows, you can just pass the arguments directly.

> Under macOS, you can pass the arguments directly by going to the folder where the application is found inside the package (Contents/MacOS path), which allows to address the stderr stream. For example, if the 4D package is located in the `MyFolder` folder, you must write the command line as follows: `/MyFolder/4D.app/Contents/MacOS/4D`. However, we recommend that you use the `open` command whenever you do not need to access the stderr stream.

## Launch a 4D application

Here is a description of command lines and arguments supported to launch 4D applications.

Syntax:

```
<applicationPath> [--version] [--help] [--project] [<projectPath | packagePath | 4dlinkPath> [--data <dataPath>]]
[--opening-mode interpreted | compiled] [--create-data] [--user-param <user string>] [--headless] [--dataless]  
[--webadmin-settings-file] [--webadmin-access-key] [--webadmin-auto-start] [--webadmin-store-settings]  
[--utility] [--skip-onstartup] [--startup-method <methodName string>]
```

|Argument|Value|Description|
|:-------------|---|---|
|`applicationPath`|Path of 4D, 4D Server, merged application, or tool4d|Launches the application.<br/>If not headless: identical to double-clicking the application; when called without structure file argument, the application is executed and the 'select database' dialog box appears.|
|`--version`||Displays application version and exits|
|`--help`||Displays help and exits. Alternate arguments: -?, -h|
|`--project`|projectPath &#124; packagePath &#124; 4dlinkPath|Project file to open with the current data file. No dialog box appears.|
|`--data`|dataPath|Data file to open with the designated project file. If not specified, the last opened data file is used.|
|`--opening-mode`|interpreted &#124; compiled|Requests database to open in interpreted or compiled mode. No error is thrown if the requested mode is unavailable.|
|`--create-data`||Automatically creates a new data file if no valid data file is found. No dialog box appears. 4D uses the file name passed in the "--data" argument if any (generates an error if a file with the same name already exists).|
|`--user-param`|Custom user string|A string that will be available within the application through the [`Get database parameter`](https://doc.4d.com/4dv19R/help/command/en/page643.html) command (the string must not start with a "-" character, which is reserved). |
|`--headless`||Launches the 4D, 4D Server or merged application without interface (headless mode). In this mode:<li> The Design mode is not available, database starts in Application mode</li><li> No toolbar, menu bar, MDI window or splash screen is displayed</li><li>No icon is displayed in the dock or task bar</li><li>The opened database is not registered in the "Recent databases" menu</li><li>The diagnostic log is automatically started (see [SET DATABASE PARAMETER](https://doc.4d.com/4dv19/help/command/en/page642.html), selector 79)</li><li>Every call to a dialog box is intercepted and an automatic response it provided (e.g. OK for the [ALERT](https://doc.4d.com/4dv19/help/command/en/page41.html) command, Abort for an error dialog...). All intercepted commands(*) are logged in the diagnostic log.</li><br/>For maintenance needs, you can send any text to standard output streams using the [LOG EVENT](https://doc.4d.com/4dv19/help/command/en/page667.html) command. Note that headless 4D applications can only be closed by a call to [QUIT 4D](https://doc.4d.com/4dv19/help/command/en/page291.html) or using the OS task manager.|
|`--dataless`||Launches 4D, 4D Server, merged application or tool4d in dataless mode. Dataless mode is useful when 4D runs tasks with no need for data (project compilation for example). In this mode: <li>No file containing data is opened, even if specified in the command line or the `.4DLink` file, or when using the `CREATE DATA FILE` and `OPEN DATA FILE` commands.</li><li>Commands that manipulate data will throw an error. For example, `CREATE RECORD` throws “no table to apply the command to”.</li><br/>**Note**:<li>If passed in the command line, dataless mode applies to all databases opened in 4D, as long as the application is not closed.</li><li>If passed using the `.4DLink` file, dataless mode only applies to the database specified in the `.4DLink` file. For more information on `.4DLink` files, see [Project opening shortcuts](../GettingStarted/creating.md#project-opening-shortcuts).</li>|
|`--webadmin-settings-file`|File path|Path of the custom WebAdmin `.4DSettings` file for the [WebAdmin web server](webAdmin.md). Not available with [tool4d](#tool4d).|
|`--webadmin-access-key`|Text|Access key for the [WebAdmin web server](webAdmin.md). Not available with [tool4d](#tool4d).|
|`--webadmin-auto-start`|Boolean|Status of the automatic startup for the [WebAdmin web server](webAdmin.md). Not available with [tool4d](#tool4d).|
|`--webadmin-store-settings`||Store the access key and automatic starting parameters in the currently used settings file (i.e. the default [`WebAdmin.4DSettings`](webAdmin.md#webadmin-settings) file or a custom file designated with the `--webadmin-settings-path` parameter). Use the `--webadmin-store-settings` argument to save these settings if necessary. Not available with [tool4d](#tool4d).|
|`--utility`||Only available with 4D Server. Launches [4D Server in utility mode](#4d-server-in-utility-mode).|
|`--skip-onstartup`||Launches the project without executing any "automatic" methods, including the `On Startup` and `On Exit` database methods|
|`--startup-method`|Project method name (string)|Project method to execute immediately after the `On Startup` database method (if not skipped with `--skip-onstartup`).|

(*) Some dialogs are displayed before the database is opened, so that it's impossible to write into the [Diagnostic log file](Debugging/debugLogFiles.md#4ddiagnosticlogtxt) (licence alert, conversion dialog, database selection, data file selection). In such case, an error message is thrown both in the stderr stream and the system event log, and then the application quits.

### Examples

> The current folder of the user is reached using the "~ " command under macOS and the "%HOMEPATH%" command under Windows.

Launch a 4D application stored on the desktop:

*   macOS:


```bash
open ~/Desktop/4D.app
open "~/Desktop/4D Server.app"
```

*   Windows:


```bash
%HOMEPATH%\Desktop\4D\4D.exe
%HOMEPATH%\Desktop\"4D Server.exe"
```


Open a package file on macOS:

```bash
--args ~/Documents/myDB.4dbase
```

Open a project file:

*   macOS:


```bash
--args ~/Documents/myProj/Project/myProj.4DProject
```


*   Windows:


```bash
%HOMEPATH%\Documents\myProj\Project\myProj.4DProject
```



Open a project file and a data file:

*   macOS:


```bash
--args --project ~/Documents/myProj/Project/myProj.4DProject --data ~/Documents/data/myData.4DD
```

*   Windows:


```bash
--project %HOMEPATH%\Documents\myProj\Project\myProj.4DProject --data %HOMEPATH%\Documents\data\myData.4DD
or:
/project %HOMEPATH%\Documents\myProj\Project\myProj.4DProject /data %HOMEPATH%\Documents\data\myData.4DD
```

Open a .4DLink file:

*   macOS:


```bash
~/Desktop/MyDatabase.4DLink
```


*   Windows:


```bash
%HOMEPATH%\Desktop\MyDatabase.4DLink
```

Open compiled mode and create a data file if not available:

*   macOS:


```bash
~/Documents/myBase.4dbase --args --opening-mode compiled --create-data true
```

*   Windows:


```bash
%HOMEPATH%\Documents\myBase.4dbase\myDB.4db --opening-mode compiled --create-data true
```

Open a project file and a data file and pass a string as a user parameter:

*   macOS:


```bash
--args --project ~/Documents/myProj/Project/myProj.4DProject --data ~/Documents/data/myData.4DD --user-param "Hello world"
```

*   Windows:


```bash
--project %HOMEPATH%\Documents\myProj\Project\myProj.4DProject --data %HOMEPATH%\Documents\data\myData.4DD --user-param "Hello world"
```

Open without interface (headless mode):

*   macOS:


```bash
--args --project ~/Documents/myProj/Project/myProj.4DProject --data ~/Documents/data/myData.4DD --headless  
```

*   Windows:


```bash
--project %HOMEPATH%\Documents\myProj\Project\myProj.4DProject --data %HOMEPATH%\Documents\data\myData.4DD --headless
```



## tool4d


**tool4d** is a free, lightweight, stand-alone application allowing you to open a 4D project in headless mode and execute some 4D code using the CLI.

tool4d is available on Windows and macOS and is always associated to a 4D release (same version and build number). It is only provided in English localization.

tool4d is a perfect tool if you want to:

- implement a CI/CD chain for your 4D application,
- use a light 4D executable to run 4D scripts, for example to execute automatic unit tests.



### Using tool4d

You can get tool4d from the 4D [Product download page](https://product-download.4d.com/).

You use tool4d by executing a [command line](#launch-a-4d-application) with a standard 4D project. You can use all arguments described in the above table, except --`webadmin` since this component is [disabled in tool4d](#disabled-4d-features). With tool4d, the following specific sequence is launched:

1. tool4d executes the `On Startup` database method (and all "automatic" methods such as [user method](../Users/handling_users_groups.md#user-properties)), except if the `--skip-onstartup` argument is passed.
2. tool4d executes the method designated by the `--startup-method` argument, if any.
3. tool4d executes the `On Exit` database method, except if the `--skip-onstartup` argument is passed.
4. tool4d quits.

On Windows, tool4d is a console application so that the `stdout` stream is displayed in the terminal (cmd, powershell...).


:::note Notes

- tool4d is always executed headless (the `headless` command line option is useless).
- The [`Application type`](https://doc.4d.com/4dv19R/help/command/en/page494.html) command returns the value 6 ("tool4d") when called from the tool4d application.
- the [diagnostic log file](../Debugging/debugLogFiles.md#4ddiagnosticlogtxt) is prefixed with "4DDiagnosticLogTool".

:::


### Disabled 4D features

Keep in mind that tool4d runs automatically in **headless mode** (see `--headless` in [this table](#launch-a-4d-application)), and does neither give access to the 4D IDE nor any of its servers. In particular, the following features are disabled:

- application server, Web server, SQL server,
- backup scheduler,
- ODBC and SQL pass-through,
- all components such as 4D View Pro, 4D SVG, 4D NetKit...,
- hunspell spell checker,
- japanese spellchecker (*mecab* library),
- WebAdmin,
- CEF,
- PHP,
- remote debugger (local debugger, `TRACE` command and breakpoints are ignored in headless applications).



## 4D Server in utility mode

You can launch a 4D Server instance in a utility mode (headless) by using the `--utility` CLI option. In this case, the following workflow is triggered:

1. 4D Server executes the `On Startup` database method (and all "automatic" methods such as [user method](../Users/handling_users_groups.md#user-properties)), except if the `--skip-onstartup` parameter is passed.
2. 4D Server executes the method designated by the `--startup-method`, if any.
3. 4D Server executes the `On Exit` database method, except if the `--skip-onstartup` parameter is passed.
4. 4D Server quits.

:::info

Unlike tool4d, 4D Server in utility mode has all its features enabled. However, the application server and all other servers are not started.

:::


:::tip See also

See [this blog post](https://blog.4d.com/a-tool-for-4d-code-execution-in-cli/) for examples of how to use tool4d and 4D Server in utility mode.  

:::
