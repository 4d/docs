---
id: open-url
title: OPEN URL
slug: /commands/open-url
displayed_sidebar: docs
---

<!--REF #_command_.OPEN URL.Syntax-->**OPEN URL** ( *path* {; *appName*}{; *} )<!-- END REF-->
<!--REF #_command_.OPEN URL.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| path | Text | &#8594;  | Path of document or URL to open |
| appName | Text | &#8594;  | Name of application to use |
| * | Operator | &#8594;  | If specified = URL is not translated, If omitted = URL is translated |

<!-- END REF-->

#### Description 

<!--REF #_command_.OPEN URL.Summary-->The **OPEN URL** command opens the file or URL passed in the *path* parameter with the application indicated in *appName* (if any).<!-- END REF--> 

The *path* parameter can contain either a standard URL or a file pathname. The command accepts colons (':') under OS X, slashes ('\\') under Windows or a Posix URL beginning with file://. 

If the *appName* parameter is omitted, 4D first attempts to interpret the *path* parameter as a file pathname. If this is the case, 4D will request the system to open the file using the most suitable application (for example, a browser for .html files, Word for .doc files, etc.). The \* parameter is ignored in this case.  
If the *path* parameter contains a standard URL (mailto:, news:, http:, etc. protocols), 4D starts the default Web browser and accesses the URL. If there is no browser on the volumes connected to the computer, this command has no effect. 

When the *appName* parameter is passed, the command interrogates the system. If an application with this name is installed, it is started and the command requests it to open the specified URL or document.  
Under Windows, the mechanism for recognizing the application name is the same as the one used by the "Run" command of the Start menu. For example, you could pass:

* "iexplore" to start the Internet Explorer.
* "chrome" to start Chrome (if installed)
* "winword" to start MS Word (if installed)

**Note:** You will find the list of applications installed in the *registry* at the following key: HKEY\_LOCAL\_MACHINE\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\App Paths

Under OS X, the mechanism uses the Finder which automatically indexes all the applications installed. It can recognize any .app application by means of its package name (with or without the .app suffix). For example, you could pass:

* "safari"
* "FireFox"
* "TextEdit"

When the *appName* application is not found, no error is returned; the command is run as if this parameter had not been specified.

4D automatically encodes the URL’s special characters. If you pass the *\** character, 4D will not translate the URL’s special characters. This option allows you to access and to send URLs of the type: "*http://www.server.net/page.htm?q=something*". 

**Note:** This command does not work when called from a Web process.

#### Example 1 

The following examples illustrate different types of strings that are accepted as URLs by the command:

```4d
 OPEN URL("http://www.4d.com")
 OPEN URL("file://C:/Users/Laurent/Documents/pending.htm")
 OPEN URL("C:\\Users\\Laurent\\Documents\\pending.htm")
 OPEN URL("mailto:jean_martin@4d.fr")
```

#### Example 2 

This example can be used to launch the most suitable application: 

```4d
 $file:=Select document("";"";0)
 If(OK=1)
    OPEN URL(Document)
 End if
```

#### Example 3 

The *appName* parameter lets you open the same text file using different applications:

```4d
 OPEN URL("C:\\temp\\cookies.txt") //open the file with Notepad
 OPEN URL("C:\\temp\\cookies.txt";"winword") //open the file with MS Word (if installed)
 OPEN URL("C:\\temp\\cookies.txt";"excel") //open the file with MS Excel (if installed)
```

#### See also 

[LAUNCH EXTERNAL PROCESS](launch-external-process.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 673 |
| Thread safe | &check; |


