---
id: SystemWorkerClass
title: SystemWorker
---

System workers allow the 4D code to call any external process (a shell command, PHP, etc.) on the same machine. System workers are called asynchronously. By using callbacks, 4D makes it possible to communicate both ways.

The `SystemWorker` class is available from the `4D` class store.

### Example

```4d
    // Windows example to get access to the ipconfig information
var $myWinWorker : 4D.SystemWorker
var $ipConfig : Text
$myWinWorker:= 4D.SystemWorker.new("ipconfig")
$ipConfig:=$myWinWorker.wait(1).response //timeout 1 second

    // macOS example to change the permissions for a file on macOS
    // chmod is the macOS command used to modify file access
var $myMacWorker : 4D.SystemWorker
$myMacWorker:= 4D.SystemWorker.new("chmod +x /folder/myfile.sh")

```

### Summary

||
|---|
|[<!-- INCLUDE #4D.SystemWorker.new().Syntax -->](#4d-systemworker-new)<br/><!-- INCLUDE #4D.SystemWorker.new().Summary -->|
|[<!-- INCLUDE #SystemWorkerClass.closeInput().Syntax -->](#closeinput)<br/><!-- INCLUDE #SystemWorkerClass.closeInput().Summary --> |
|[<!-- INCLUDE #SystemWorkerClass.commandLine.Syntax -->](#commandline)<br/><!-- INCLUDE #SystemWorkerClass.commandLine.Summary --> |
|[<!-- INCLUDE #SystemWorkerClass.currentDirectory.Syntax -->](#currentdirectory)<br/><!-- INCLUDE #SystemWorkerClass.currentDirectory.Summary --> |
|[<!-- INCLUDE #SystemWorkerClass.dataType.Syntax -->](#dataype)<br/><!-- INCLUDE #SystemWorkerClass.dataType.Summary --> |
|[<!-- INCLUDE #SystemWorkerClass.encoding.Syntax -->](#encoding)<br/><!-- INCLUDE #SystemWorkerClass.encoding.Summary --> |
|[<!-- INCLUDE #SystemWorkerClass.errors.Syntax -->](#errors)<br/><!-- INCLUDE #SystemWorkerClass.errors.Summary --> |
|[<!-- INCLUDE #SystemWorkerClass.exitCode.Syntax -->](#exitcode)<br/><!-- INCLUDE #SystemWorkerClass.exitCode.Summary --> |
|[<!-- INCLUDE #SystemWorkerClass.hideWindow.Syntax -->](#hideWindow)<br/><!-- INCLUDE #SystemWorkerClass.hideWindow.Summary --> |
|[<!-- INCLUDE #SystemWorkerClass.pid.Syntax -->](#pid)<br/><!-- INCLUDE #SystemWorkerClass.pid.Summary --> |
|[<!-- INCLUDE #SystemWorkerClass.postMessage().Syntax -->](#postmessage)<br/><!-- INCLUDE #SystemWorkerClass.postMessage().Summary --> |
|[<!-- INCLUDE #SystemWorkerClass.response.Syntax -->](#response)<br/><!-- INCLUDE #SystemWorkerClass.response.Summary --> |
|[<!-- INCLUDE #SystemWorkerClass.responseError.Syntax -->](#responseerror)<br/><!-- INCLUDE #SystemWorkerClass.responseError.Summary --> |
|[<!-- INCLUDE #SystemWorkerClass.terminate().Syntax -->](#terminate)<br/><!-- INCLUDE #SystemWorkerClass.terminate().Summary --> |
|[<!-- INCLUDE #SystemWorkerClass.terminated.Syntax -->](#terminated)<br/><!-- INCLUDE #SystemWorkerClass.terminated.Summary --> |
|[<!-- INCLUDE #SystemWorkerClass.timeout.Syntax -->](#timeout)<br/><!-- INCLUDE #SystemWorkerClass.timeout.Summary --> |
|[<!-- INCLUDE #SystemWorkerClass.wait().Syntax -->](#wait)<br/><!-- INCLUDE #SystemWorkerClass.wait().Summary --> |

<!-- REF 4D.SystemWorker.new().Desc -->
## 4D.SystemWorker.new()

<details><summary>History</summary>

|Release|Changes|
|---|---|
|19 R4|Added|

</details>

<!-- REF #4D.SystemWorker.new().Syntax -->**4D.SystemWorker.new** ( *commandLine* : Text { ; options : Object } ) : 4D.SystemWorker<!-- END REF -->


<!-- REF #4D.SystemWorker.new().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|commandLine|Text|->|Command line to execute|
|options|Object|->|Worker parameters|
|result|4D.SystemWorker|<-|New asynchronous System worker or null if process not started|  
<!-- END REF -->

#### Description

The `4D.SystemWorker.new()` function <!-- REF #4D.SystemWorker.new().Summary -->creates and returns a `4D.SystemWorker` object that will execute the *commandLine* you passed as parameter to launch an external process<!-- END REF -->.

The returned system worker object can be used to post messages to the worker and get the worker output.

If an error occurs during the creation of the proxy object, the function returns a `null` object and an error is thrown.

In the *commandLine* parameter, pass the full path of the application's file to be executed (posix syntax), as well as any required arguments, if necessary. If you pass only the application name, 4D will use the `PATH` environment variable to locate the executable.

**Warning:** This function can only launch executable applications; it cannot execute instructions that are part of the shell (command interpreter). For example, under Windows it is not possible to use this command to execute the `dir` instruction.

#### *options* Object

In the *options* parameter, pass an object that can contain the following properties:

|Property|Type|Default|Description|
|---|---|---|---|
|onResponse|Formula|undefined|Callback for system worker messages. This callback is called once the complete response is received. It receives two objects as parameters (see below)|
|onData|Formula|undefined|Callback for system worker data. This callback is called each time the system worker receives data. It receives two objects as parameters (see below) |
|onDataError|Formula|undefined|Callback for the external process errors (*stderr* of the external process). It receives two objects as parameters (see below)|
|onError|Formula|undefined|Callback for execution errors, returned by the system worker in case of unusual runtime conditions (system errors). It receives two objects as parameters (see below)|
|onTerminate|Formula|undefined|Callback when the external process is terminated. It receives two objects as parameters (see below)|
|timeout|Number|undefined|Time in seconds before the process is killed if it is still alive|
|dataType|Text|"text"|Type of the response body content. Possible values: "text" (default), "blob".|
|encoding|Text|"UTF-8"|Only if `dataType="text"`. Encoding of the response body content. For the list of available values, see the [`CONVERT FROM TEXT`](https://doc.4d.com/4dv19R/help/command/en/page1011.html) command description|
|variables|Object||Sets custom environment variables for the system worker. Syntax: `variables.key=value`, where `key` is the variable name and `value` its value. Values are converted into strings when possible. The value cannot contain a '='. If not defined, the system worker inherits from the 4D environment.|
|currentDirectory|Folder||Working directory in which the process is executed|
|hideWindow|Boolean|true|(Windows) Hide the application window (if possible) or the Windows console|

All callback functions receive two object parameters. Their contents depend on the callback:

|Parameter|Type|*onResponse*|*onData*|*onDataError*|*onError*|*onTerminate*|
|---|---|---|---|---|---|---|
|$param1|Object|SystemWorker|SystemWorker|SystemWorker|SystemWorker|SystemWorker|
|$param2.type|Text|"response"|"data"|"error"|"error"|"termination"|
|$param2.data|Text or Blob||received data|error data|||

Here is the sequence of callback calls:

1. `onData` and `onDataError` are executed one or several times
2. if called, `onError` is executed once (stops the system worker processing)
3. if no error occured, `onResponse` is executed once
4. `onTerminate` is always executed


:::info

For the callback functions to be called when you do not use [`wait()`](#wait) (asynchronous call), the process must be a [worker](../Develop/processes.md#worker-processes) created with [`CALL WORKER`](https://doc.4d.com/4dv20/help/command/en/page1389.html), NOT [`New process`](https://doc.4d.com/4dv20/help/command/en/page317.html).

:::


#### Returned value

The function returns a system worker object on which you can call functions and properties of the SystemWorker class.

#### Examples on Windows

1. To open Notepad and open a specific document:

```4d
var $sw : 4D.SystemWorker
var $options : Object
$options:=New object
$options.hideWindow:= False

$sw:=4D.SystemWorker.new ("C:\\WINDOWS\\notepad.exe C:\\Docs\\new folder\\res.txt";$options)
```

2. Run npm install in the console:

```4d
var $folder : 4D.Folder
var $options : Object
var $worker : 4D.SystemWorker

$folder:=Folder(fk database folder)
$options:=New object
$options.currentDirectory:=$folder
$options.hideWindow:=False

$worker:=4D.SystemWorker.new("cmd /c npm install";$options)

```

3. To launch the Microsoft® Word® application and open a specific document:

```4d
$mydoc:="C:\\Program Files\\Microsoft Office\\Office15\\WINWORD.EXE C:\\Tempo\\output.txt"
var $sw : 4D.SystemWorker
$sw:=4D.SystemWorker.new($mydoc)
```

4. To launch a command with the current directory and post a message:

```4d
var $param : Object
var $sys : 4D.SystemWorker

$param:=New object
$param.currentDirectory:=Folder(fk database folder)
$sys:=4D.SystemWorker.new("git commit -F -";$param)
$sys.postMessage("This is a postMessage")
$sys.closeInput()
```

5. To allow the user to open an external document on Windows:

```4d
$docname:=Select document("";"*.*";"Choose the file to open";0)
If(OK=1)
 var $sw : 4D.SystemWorker
 $sw:=4D.SystemWorker.new("cmd.exe /C start \"\" \""+$docname+"\"")
End if
```

#### Examples on macOS

1. Edit a text file (`cat` is the macOS command used to edit files). In this example, the full access path of the command is passed:

```4d

var $sw : 4D.SystemWorker
$sw:=4D.SystemWorker.new("/bin/cat /folder/myfile.txt")
$sw.wait() //synchronous execution

```

2. To launch an independent "graphic" application, it is preferable to use the `open` system command (in this case, the code has the same effect as double-clicking the application):

```4d
var $sw : 4D.SystemWorker
$sw:=4D.SystemWorker.new ("open /Applications/Calculator.app")
```

3. To get the contents of the "Users" folder (ls -l is the macOS equivalent of the dir command in DOS).

```4d
var $systemworker : 4D.SystemWorker
var $output : Text
var $errors : Collection

$systemworker:=4D.SystemWorker.new("/bin/ls -l /Users ")
$systemworker.wait(5)
$output:=$systemworker.response
$error:=$systemworker.errors

```

4. Same command as above, but using a sample "Params" user class to show how to handle callback functions:

```4d

var $systemworker : 4D.SystemWorker
$systemworker:=4D.SystemWorker.new("/bin/ls -l /Users ";cs.Params.new())


// "Params" class

Class constructor
 This.dataType:="text"
    This.data:=""
    This.dataError:=""

Function onResponse($systemWorker : Object)
     This._createFile("onResponse"; $systemWorker.response)

Function onData($systemWorker : Object; $info : Object)
     This.data+=$info.data
     This._createFile("onData";this.data)

Function onDataError($systemWorker : Object; $info : Object)
     This.dataError+=$info.data
     This._createFile("onDataError";this.dataError)

Function onTerminate($systemWorker : Object)
     var $textBody : Text
     $textBody:="Response: "+$systemWorker.response
     $textBody+="ResponseError: "+$systemWorker.responseError
     This._createFile("onTerminate"; $textBody)

Function _createFile($title : Text; $textBody : Text)
     TEXT TO DOCUMENT(Get 4D folder(Current resources folder)+$title+".txt"; $textBody)

```

<!-- END REF -->

<!-- REF SystemWorkerClass.closeInput().Desc -->
## .closeInput()

<details><summary>History</summary>

|Release|Changes|
|---|---|
|19 R4|Added|

</details>

<!-- REF #SystemWorkerClass.closeInput().Syntax -->**.closeInput**()<!-- END REF -->


<!-- REF #SystemWorkerClass.closeInput().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
||||Does not require any parameters|
<!-- END REF -->

#### Description

The `.closeInput()` function <!-- REF #SystemWorkerClass.closeInput().Summary -->closes the input stream (*stdin*) of the external process<!-- END REF -->.

When the executable waits for all data to be received through `postMessage()`, `.closeInput()` is useful to indicate to the executable that data sending is finished and that it can proceed.

#### Example

```4D
// Create some data to gzip
var $input;$output : Blob
var $gzip : Text
TEXT TO BLOB("Hello, World!";$input)
$gzip:="\"C:\\Program Files (x86)\\GnuWin32\\bin\\gzip.exe\" "

// Create an asynchronous system worker
var $worker : 4D.SystemWorker
$worker:= 4D.SystemWorker.new($gzip;New object("dataType";"blob"))

// Send the compressed file on stdin.
$worker.postMessage($input)
// Note that we call closeInput() to indicate we're done.
// gzip (and most program waiting data from stdin) will wait for more data until the input is explicitely closed.
$worker.closeInput()
$worker.wait()

$output:=$worker.response

```

<!-- END REF -->

<!-- REF SystemWorkerClass.commandLine.Desc -->
## .commandLine

<!-- REF #SystemWorkerClass.commandLine.Syntax -->**.commandLine** : Text<!-- END REF -->

#### Description

The `.commandLine` property <!-- REF #SystemWorkerClass.commandLine.Summary -->contains the command line passed as parameter to the [`new()`](#4d-systemworker-new) function<!-- END REF -->.

This property is **read-only**.

<!-- END REF -->

<!-- REF SystemWorkerClass.currentDirectory.Desc -->
## .currentDirectory

<!-- REF #SystemWorkerClass.currentDirectory.Syntax -->
**.currentDirectory** : 4D.Folder<!-- END REF -->

#### Description

The `.currentDirectory` property <!-- REF #SystemWorkerClass.currentDirectory.Summary -->contains the working directory in which the external process is executed<!-- END REF -->.

<!-- END REF -->

<!-- REF SystemWorkerClass.dataType.Desc -->
## .dataType

<!-- REF #SystemWorkerClass.dataType.Syntax -->**.dataType** : Text<!-- END REF -->

#### Description

The `.dataType` property <!-- REF #SystemWorkerClass.dataType.Summary -->contains the type of the response body content<!-- END REF -->. Possible values : "text" or "blob".

This property is **read-only**.

<!-- END REF -->

<!-- REF SystemWorkerClass.encoding.Desc -->
## .encoding

<!-- REF #SystemWorkerClass.encoding.Syntax -->**.encoding** : Text<!-- END REF -->

#### Description

The `.encoding` property <!-- REF #SystemWorkerClass.encoding.Summary -->contains the encoding of the response body content<!-- END REF -->. This property is only available if the [`dataType`](#datatype) is "text".

This property is **read-only**.

<!-- END REF -->

<!-- REF SystemWorkerClass.errors.Desc -->
## .errors

<!-- REF #SystemWorkerClass.errors.Syntax -->**.errors** : Collection<!-- END REF -->

#### Description

The `.errors` property <!-- REF #SystemWorkerClass.errors.Summary -->contains a collection of 4D errors in case of execution error(s) if any<!-- END REF -->.

Each element of the collection is an object with the following properties:

|Property|Type|Description|
|---|---|---|
|[].errorCode|number|4D error code|
|[].message|text|Description of the 4D error|
|[ ].componentSignature|text|Signature of the internal component which returned the error|

If no error occured, `.errors` is undefined.

<!-- END REF -->

<!-- REF SystemWorkerClass.exitCode.Desc -->
## .exitCode

<!-- REF #SystemWorkerClass.exitCode.Syntax -->**.exitCode** : Integer<!-- END REF -->

#### Description

The `.exitCode` property <!-- REF #SystemWorkerClass.exitCode.Summary -->contains the exit code returned by the external process<!-- END REF -->. If the process did not terminate normaly, `exitCode` is *undefined*.

This property is **read-only**.

<!-- END REF -->

<!-- REF SystemWorkerClass.hideWindow.Desc -->
## .hideWindow

<!-- REF #SystemWorkerClass.hideWindow.Syntax -->**.hideWindow** : Boolean<!-- END REF -->

#### Description

The `.hideWindow` property <!-- REF #SystemWorkerClass.hideWindow.Summary -->can be used to hide the window of the DOS console or the window of the launched executable (**Windows only**)<!-- END REF -->.

<!-- END REF -->

This property is **read-write**.

<!-- REF SystemWorkerClass.pid.Desc -->
## .pid

<!-- REF #SystemWorkerClass.pid.Syntax -->**.pid** : Integer<!-- END REF -->

#### Description

The `.pid` property <!-- REF #SystemWorkerClass.pid.Summary -->contains the process unique identifier of the external process at the system level<!-- END REF -->.

This property is **read-only**.

<!-- END REF -->

<!-- REF SystemWorkerClass.postMessage().Desc -->
## .postMessage()

<!-- REF #SystemWorkerClass.postMessage().Syntax -->**.postMessage**( *message* : Text)<br/>**.postMessage**( *messageBLOB* : Blob)<!-- END REF -->


<!-- REF #SystemWorkerClass.postMessage().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|message|Text|->|Text to write on the input stream (stdin) of the external process|
|messageBLOB|Blob|->|Bytes write on the input stream|
<!-- END REF -->

#### Description

The `.postMessage()` function <!-- REF #SystemWorkerClass.postMessage().Summary -->allows you to write on the input stream (stdin) of the external process<!-- END REF -->. In the *message* parameter, pass the text to write in *stdin*.

The `.postMessage()` function also accepts a Blob type value in *messageBLOB* to pass in *stdin*, so that you can post binary data.

You can use the `.dataType` property of the [options object](#options-object) to make response body return Blob values.

<!-- END REF -->

<!-- REF SystemWorkerClass.response.Desc -->
## .response

<!-- REF #SystemWorkerClass.response.Syntax -->**.response** : Text<br/>**.response** : Blob<!-- END REF -->

#### Description

The `.response` property <!-- REF #SystemWorkerClass.response.Summary -->contains the concatenation of all data returned once the request is terminated<!-- END REF -->, i.e. the full message received from the process output.

The type of the message is defined according to the [`dataType`](#datatype) attribute.

This property is **read-only**.

<!-- END REF -->

<!-- REF SystemWorkerClass.responseError.Desc -->
## .responseError

<!-- REF #SystemWorkerClass.responseError.Syntax -->**.responseError** : Text<!-- END REF -->

#### Description

The `.responseError` property <!-- REF #SystemWorkerClass.responseError.Summary -->contains the concatenation of all the errors returned, once the request is terminated<!-- END REF -->.

<!-- END REF -->

<!-- REF SystemWorkerClass.terminate().Desc -->
## .terminate()

<!-- REF #SystemWorkerClass.terminate().Syntax -->**.terminate**()<!-- END REF -->


<!-- REF #SystemWorkerClass.terminate().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
||||Does not require any parameters|
<!-- END REF -->

#### Description

The `.terminate()` function <!-- REF #SystemWorkerClass.terminate().Summary -->forces the `SystemWorker` to terminate its execution<!-- END REF -->.

This function sends the instruction to terminate and give control back to the executing script.

<!-- END REF -->

<!-- REF SystemWorkerClass.terminated.Desc -->
## .terminated

<!-- REF #SystemWorkerClass.terminated.Syntax -->**.terminated** : Boolean<!-- END REF -->

#### Description

The `.terminated` property <!-- REF #SystemWorkerClass.terminated.Summary -->contains **true** if the external process is terminated<!-- END REF -->.

This property is **read-only**.

<!-- END REF -->

<!-- REF SystemWorkerClass.timeout.Desc -->
## .timeout

<!-- REF #SystemWorkerClass.timeout.Syntax -->**.timeout** : Integer<!-- END REF -->

#### Description

The `.timeout` property <!-- REF #SystemWorkerClass.timeout.Summary -->contains the duration in seconds before the external process will be killed if it is still alive<!-- END REF -->.

This property is **read-only**.

<!-- END REF -->

<!-- REF SystemWorkerClass.wait().Desc -->
## .wait()

<details><summary>History</summary>

|Release|Changes|
|---|---|

|19 R4|Added|

</details>

<!-- REF #SystemWorkerClass.wait().Syntax -->**.wait**( {*timeout* : Real} ) : 4D.SystemWorker<!-- END REF -->


<!-- REF #SystemWorkerClass.wait().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|timeout|Real|->|Waiting time (in seconds)|
|Result|4D.SystemWorker|<-|SystemWorker object|
<!-- END REF -->

#### Description

The `.wait()` function <!-- REF #SystemWorkerClass.wait().Summary -->waits until the end of the `SystemWorker` execution or the specified *timeout*<!-- END REF -->.

In *timeout*, pass a value in seconds. The `SystemWorker` script will wait for the external process for the amount of time defined in the *timeout* parameter. If you omit the *timeout* parameter, the script execution will wait indefinitely.

Actually, `.wait()` waits until the end of processing of the `onTerminate` formula, except if the *timeout* is reached. If *timeout* is reached, the `SystemWorker` is not killed.

During a `.wait()` execution, callback functions are executed, especially callbacks from other events or from other `SystemWorker` instances. You can exit from a `.wait()` by calling [`terminate()`](#terminate) from a callback.

This function returns the SystemWorker object.

> This function is not necessary if you created the `SystemWorker` from a 4D worker process.

<!-- END REF -->
