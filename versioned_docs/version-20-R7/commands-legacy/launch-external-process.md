---
id: launch-external-process
title: LAUNCH EXTERNAL PROCESS
slug: /commands/launch-external-process
displayed_sidebar: docs
---

<!--REF #_command_.LAUNCH EXTERNAL PROCESS.Syntax-->**LAUNCH EXTERNAL PROCESS** ( *fileName* {; *inputStream* {; *outputStream* {; *errorStream*}}}{; *pid*} )<!-- END REF-->
<!--REF #_command_.LAUNCH EXTERNAL PROCESS.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| fileName | Text | &#8594;  | File path and arguments of file to launch |
| inputStream | Text, Blob | &#8594;  | Input stream (stdin) |
| outputStream | Text, Blob | &#8592; | Output stream (stdout) |
| errorStream | Text, Blob | &#8592; | Error stream (stderr) |
| pid | Integer | &#8592; | Unique identifier for external process |

<!-- END REF-->


:::info Compatibility

<!--REF #_command_.LAUNCH EXTERNAL PROCESS.Summary-->Starting with 4D v19 R4, we recommend the use of the [`4D.SystemWorker class`](../API/SystemWorkerClass.md) to run and control external processes.<!-- END REF--> However, this command is still supported. 

:::

#### Description 

The **LAUNCH EXTERNAL PROCESS** command launches an external process from 4D under macOS and Windows. 

Under macOS, this command provides access to any executable application that can be launched from the Terminal.

Pass the fixed file path of the application to execute, as well as any required arguments (if necessary), in the *fileName* parameter.

Under macOS, you can also pass the application name only; 4D will then use the PATH environment variable to locate the executable.

**Warning:** This command can only launch executable applications; it cannot execute instructions that are part of the shell (command interpreter). For example, under macOS it is not possible to use this command to execute the *echo* instruction or indirections.

The *inputStream* parameter (optional) contains the *stdin* of the external process. Once the command has been executed, the *outputStream* and *errorStream* parameters (if passed) return respectively the *stdout* and *stderr* of the external process. You can use BLOB parameters instead of strings if you are working with binary data (such as pictures).

4D provides three specific environment variables that can be set using [SET ENVIRONMENT VARIABLE](set-environment-variable.md) and are available for use in the context of **LAUNCH EXTERNAL PROCESS**:

* *\_4D\_OPTION\_CURRENT\_DIRECTORY*: Used to set the current directory of the external process to be launched. In *varValue*, you must pass the pathname of the directory (HFS type syntax on macOS and DOS on Windows).
* *\_4D\_OPTION\_HIDE\_CONSOLE* (Windows only): Used to hide the window of the DOS console. You must pass "true" in *varValue* to hide the console or "false" to display it.
* *\_4D\_OPTION\_BLOCKING\_EXTERNAL\_PROCESS*: Used to execute the external process in asynchronous mode, in other words, non-blocking for other applications. You must pass "false" in varValue to set an asynchronous execution or "true" to set a synchronous execution (default). For this variable, passing "" in *varValue* does nothing.  
If you set the *\_4D\_OPTION\_BLOCKING\_EXTERNAL\_PROCESS* environment variable to "false" via the [SET ENVIRONMENT VARIABLE](set-environment-variable.md) command (asynchronous execution), the *outputStream* and *errorStream* parameters are not returned.

These variables are valid in the current process for the next call to **LAUNCH EXTERNAL PROCESS**.

When passed, the *pid* parameter (longint) returns the system level ID for the process created to launch the command, regardless of the *\_4D\_OPTION\_BLOCKING\_EXTERNAL\_PROCESS* option status. With this information, it is easier to interact with a created external process thereafter, e.g. to stop it. If the process launch fails, the *pid* parameter is not returned.

#### Examples under macOS 

The following examples use the macOS Terminal available in the Application/Utilities folder.

1\. To change permissions for a file (*chmod* is the macOS command used to modify file access):

```4d
 LAUNCH EXTERNAL PROCESS("chmod +x /folder/myfile.txt")
```

2\. To edit a text file (*cat* is the macOS command used to edit files). In this example, the full access path of the command is passed:

```4d
 var input;output : Text
 input:=""
 LAUNCH EXTERNAL PROCESS("/bin/cat /folder/myfile.txt";input;output)
```

3\. To get the contents of the "Users" folder (*ls -l* is the macOS equivalent of the *dir* command in DOS):

```4d
 var $In;$Out : Text
 LAUNCH EXTERNAL PROCESS("/bin/ls -l /Users";$In;$Out)
```

4\. To launch an independent "graphic" application, it is preferable to use the *open* system command (in this case, the **LAUNCH EXTERNAL PROCESS** statement has the same effect as double-clicking the application): 

```4d
 LAUNCH EXTERNAL PROCESS("open /Applications/Calculator.app")
```

#### Examples under Windows 

5\. To open NotePad:

```4d
 LAUNCH EXTERNAL PROCESS("C:\\WINDOWS\\notepad.exe")
```

6\. To open Notepad and open a specific document: 

```4d
 LAUNCH EXTERNAL PROCESS("C:\\WINDOWS\\notepad.exe C:\\Docs\\new folder\\res.txt")
```

7\. To launch the Microsoft® Word® application and open a specific document (note the use of the two ""):

```4d
 $mydoc:="C:\\Program Files\\Microsoft Office\\Office10\\WINWORD.EXE \"C:\\Documents and
 Settings\\Mark\\Desktop\\MyDocs\\New folder\\test.xml\""
 LAUNCH EXTERNAL PROCESS($mydoc;$tIn;$tOut)
```

8\. To execute a Perl script (requires ActivePerl):

```4d
 var $input;$output : Text
 SET ENVIRONMENT VARIABLE("myvariable";"value")
 LAUNCH EXTERNAL PROCESS("D:\\Perl\\bin\\perl.exe D:\\Perl\\eg\\cgi\\env.pl";$input;$output)
```

9\. To launch a command with the current directory and without displaying the console: 

```4d
 SET ENVIRONMENT VARIABLE("_4D_OPTION_CURRENT_DIRECTORY";"C:\\4D_VCS")
 SET ENVIRONMENT VARIABLE("_4D_OPTION_HIDE_CONSOLE";"true")
 LAUNCH EXTERNAL PROCESS("mycommand")
```

10\. To allow the user to open an external document on Windows:

```4d
 $docname:=Select document("";"*.*";"Choose the file to open";0)
 If(OK=1)
    SET ENVIRONMENT VARIABLE("_4D_OPTION_HIDE_CONSOLE";"true")
    LAUNCH EXTERNAL PROCESS("cmd.exe /C start \"\" \""+$docname+"\"")
 End if
```

11\. The following examples request the process list on Windows:

```4d
 var $pid : Integer
 var $stdin;$stdout;$stderr : Text
 
 LAUNCH EXTERNAL PROCESS("tasklist";$pid) //gets PID only
 LAUNCH EXTERNAL PROCESS("tasklist";$stdin;$stdout;$stderr;$pid) //gets all information
```

#### System variables and sets 

If the command has been executed correctly, the system variable OK is set to 1\. Otherwise (file not found, insufficient memory, etc.), it is set to 0.

#### See also 

[OPEN URL](open-url.md)  
[SET ENVIRONMENT VARIABLE](set-environment-variable.md)  