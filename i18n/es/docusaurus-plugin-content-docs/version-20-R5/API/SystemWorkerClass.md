---
id: SystemWorkerClass
title: SystemWorker
---

System workers allow the 4D code to call any external process (a shell command, PHP, etc.) en la misma máquina. Los trabajadores del sistema se llaman de forma asíncrona. Mediante el uso de retrollamadas, 4D hace posible la comunicación en ambos sentidos.

The `SystemWorker` class is available from the `4D` class store.

### Ejemplo

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

### Resumen

|                                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #4D.SystemWorker.new().Syntax -->](#4d-systemworker-new)<br/><!-- INCLUDE #4D.SystemWorker.new().Summary -->                        |
| [<!-- INCLUDE #SystemWorkerClass.closeInput().Syntax -->](#closeinput)<br/><!-- INCLUDE #SystemWorkerClass.closeInput().Summary -->               |
| [<!-- INCLUDE #SystemWorkerClass.commandLine.Syntax -->](#commandline)<br/><!-- INCLUDE #SystemWorkerClass.commandLine.Summary -->                |
| [<!-- INCLUDE #SystemWorkerClass.currentDirectory.Syntax -->](#currentdirectory)<br/><!-- INCLUDE #SystemWorkerClass.currentDirectory.Summary --> |
| [<!-- INCLUDE #SystemWorkerClass.dataType.Syntax -->](#dataype)<br/><!-- INCLUDE #SystemWorkerClass.dataType.Summary -->                          |
| [<!-- INCLUDE #SystemWorkerClass.encoding.Syntax -->](#encoding)<br/><!-- INCLUDE #SystemWorkerClass.encoding.Summary -->                         |
| [<!-- INCLUDE #SystemWorkerClass.errors.Syntax -->](#errors)<br/><!-- INCLUDE #SystemWorkerClass.errors.Summary -->                               |
| [<!-- INCLUDE #SystemWorkerClass.exitCode.Syntax -->](#exitcode)<br/><!-- INCLUDE #SystemWorkerClass.exitCode.Summary -->                         |
| [<!-- INCLUDE #SystemWorkerClass.hideWindow.Syntax -->](#hideWindow)<br/><!-- INCLUDE #SystemWorkerClass.hideWindow.Summary -->                   |
| [<!-- INCLUDE #SystemWorkerClass.pid.Syntax -->](#pid)<br/><!-- INCLUDE #SystemWorkerClass.pid.Summary -->                                        |
| [<!-- INCLUDE #SystemWorkerClass.postMessage().Syntax -->](#postmessage)<br/><!-- INCLUDE #SystemWorkerClass.postMessage().Summary -->            |
| [<!-- INCLUDE #SystemWorkerClass.response.Syntax -->](#response)<br/><!-- INCLUDE #SystemWorkerClass.response.Summary -->                         |
| [<!-- INCLUDE #SystemWorkerClass.responseError.Syntax -->](#responseerror)<br/><!-- INCLUDE #SystemWorkerClass.responseError.Summary -->          |
| [<!-- INCLUDE #SystemWorkerClass.terminate().Syntax -->](#terminate)<br/><!-- INCLUDE #SystemWorkerClass.terminate().Summary -->                  |
| [<!-- INCLUDE #SystemWorkerClass.terminated.Syntax -->](#terminated)<br/><!-- INCLUDE #SystemWorkerClass.terminated.Summary -->                   |
| [<!-- INCLUDE #SystemWorkerClass.timeout.Syntax -->](#timeout)<br/><!-- INCLUDE #SystemWorkerClass.timeout.Summary -->                            |
| [<!-- INCLUDE #SystemWorkerClass.wait().Syntax -->](#wait)<br/><!-- INCLUDE #SystemWorkerClass.wait().Summary -->                                 |

<!-- REF 4D.SystemWorker.new().Desc -->

## 4D.SystemWorker.new()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 19 R4       | Añadidos       |

</details>

<!-- REF #4D.SystemWorker.new().Syntax -->

**4D.SystemWorker.new** ( _commandLine_ : Text { ; options : Object } ) : 4D.SystemWorker<!-- END REF -->

<!-- REF #4D.SystemWorker.new().Params -->

| Parámetros  | Tipo                            |     | Descripción                                                          |
| ----------- | ------------------------------- | :-: | -------------------------------------------------------------------- |
| commandLine | Text                            |  -> | Línea de comando a ejecutar                                          |
| options     | Object                          |  -> | Parámetros worker                                                    |
| result      | 4D.SystemWorker |  <- | Nuevo System worker asíncrono o null si el proceso no se ha iniciado |

<!-- END REF -->

#### Descripción

The `4D.SystemWorker.new()` function <!-- REF #4D.SystemWorker.new().Summary -->creates and returns a `4D.SystemWorker` object that will execute the _commandLine_ you passed as parameter to launch an external process<!-- END REF -->.

El objeto system worker devuelto puede utilizarse para enviar mensajes al worker y obtener los resultados del worker.

If an error occurs during the creation of the proxy object, the function returns a `null` object and an error is thrown.

In the _commandLine_ parameter, pass the full path of the application's file to be executed (posix syntax), as well as any required arguments, if necessary. If you pass only the application name, 4D will use the `PATH` environment variable to locate the executable.

**Warning:** This function can only launch executable applications; it cannot execute instructions that are part of the shell (command interpreter). For example, under Windows it is not possible to use this command to execute the `dir` instruction.

#### Objeto _options_

In the _options_ parameter, pass an object that can contain the following properties:

| Propiedad        | Tipo    | Por defecto | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ---------------- | ------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| onResponse       | Formula | indefinido  | Retrollamada para los mensajes del system worker. Esta retrollamada se llama una vez que se recibe la respuesta completa. Recibe dos objetos como parámetros (ver más abajo)                                                                                                                                                                                               |
| onData           | Formula | indefinido  | Retrollamada para los datos del system worker. Esta retrollamada se llama cada vez que el system worker recibe los datos. Recibe dos objetos como parámetros (ver más abajo)                                                                                                                                                                                               |
| onDataError      | Formula | indefinido  | Callback for the external process errors (_stderr_ of the external process). Recibe dos objetos como parámetros (ver más abajo)                                                                                                                                                                                                                                         |
| onError          | Formula | indefinido  | Retrollamada para los errores de ejecución, devueltos por el system worker en caso de condiciones de ejecución inusuales (errores del sistema). Recibe dos objetos como parámetros (ver más abajo)                                                                                                                                                                      |
| onTerminate      | Formula | indefinido  | Retrollamada cuando el proceso externo se termina. Recibe dos objetos como parámetros (ver más abajo)                                                                                                                                                                                                                                                                                      |
| timeout          | Number  | indefinido  | Tiempo en segundos antes de que el proceso sea eliminado si aún está activo                                                                                                                                                                                                                                                                                                                                                   |
| dataType         | Text    | "text"      | Tipo de contenido del cuerpo de la respuesta. Valores posibles: "text" (por defecto), "blob".                                                                                                                                                                                                                                                              |
| encoding         | Text    | "UTF-8"     | Only if `dataType="text"`. Codificación del contenido del cuerpo de la respuesta. For the list of available values, see the [`CONVERT FROM TEXT`](https://doc.4d.com/4dv19R/help/command/en/page1011.html) command description                                                                                                                                                                |
| variables        | Object  |             | Define las variables de entorno personalizadas para el system worker. Syntax: `variables.key=value`, where `key` is the variable name and `value` its value. Los valores se convierten en cadenas de caracters cuando es posible. El valor no puede contener un '='. Si no se define, el system worker hereda del entorno 4D. |
| currentDirectory | Folder  |             | Directorio de trabajo en el que se ejecuta el proceso                                                                                                                                                                                                                                                                                                                                                                         |
| hideWindow       | Boolean | true        | (Windows) Ocultar la ventana de la aplicación (si es posible) o la consola Windows                                                                                                                                                                                                                                                                                                      |

Todas las funciones de retrollamada reciben dos parámetros objeto. Su contenido depende de la retrollamada:

| Parámetros                   | Tipo        | _onResponse_ | _onData_        | _onDataError_  | _onError_    | _onTerminate_ |
| ---------------------------- | ----------- | ------------ | --------------- | -------------- | ------------ | ------------- |
| $param1                      | Object      | SystemWorker | SystemWorker    | SystemWorker   | SystemWorker | SystemWorker  |
| $param2.type | Text        | "response"   | "data"          | "error"        | "error"      | "termination" |
| $param2.data | Text o Blob |              | datos recibidos | datos de error |              |               |

Esta es la secuencia de llamadas de retorno:

1. `onData` and `onDataError` are executed one or several times
2. if called, `onError` is executed once (stops the system worker processing)
3. if no error occured, `onResponse` is executed once
4. `onTerminate` is always executed

#### Valor devuelto

La función devuelve un objeto system worker sobre el que se pueden llamar las funciones y las propiedades de la clase SystemWorker.

#### Ejemplos en Windows

1. Para abrir el Bloc de notas y abrir un documento específico:

```4d
var $sw : 4D.SystemWorker
var $options : Object
$options:=New object
$options.hideWindow:= False

$sw:=4D.SystemWorker.new ("C:\\WINDOWS\\notepad.exe C:\\Docs\\new folder\\res.txt";$options)
```

2. Ejecutar npm install en la consola:

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

3. Para lanzar la aplicación Microsoft® Word® y abrir un documento específico:

```4d
$mydoc:="C:\\Program Files\\Microsoft Office\\Office15\\WINWORD.EXE C:\\Tempo\\output.txt"
var $sw : 4D.SystemWorker
$sw:=4D.SystemWorker.new($mydoc)
```

4. Para lanzar un comando con el directorio actual y publicar un mensaje:

```4d
var $param : Object
var $sys : 4D.SystemWorker

$param:=New object
$param.currentDirectory:=Folder(fk database folder)
$sys:=4D.SystemWorker.new("git commit -F -";$param)
$sys.postMessage("This is a postMessage")
$sys.closeInput()
```

5. Para permitir al usuario abrir un documento externo en Windows:

```4d
$docname:=Select document("";"*.*";"Choose the file to open";0)
If(OK=1)
 var $sw : 4D.SystemWorker
 $sw:=4D.SystemWorker.new("cmd.exe /C start \"\" \""+$docname+"\"")
End if
```

#### Ejemplos en macOS

1. Edit a text file (`cat` is the macOS command used to edit files). En este ejemplo, se pasa la ruta de acceso completa del comando:

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

3. Para obtener el contenido de la carpeta "Users" (ls -l es el equivalente en macOS del comando dir en DOS).

```4d
var $systemworker : 4D.SystemWorker
var $output : Text
var $errors : Collection

$systemworker:=4D.SystemWorker.new("/bin/ls -l /Users ")
$systemworker.wait(5)
$output:=$systemworker.response
$error:=$systemworker.errors

```

4. El mismo comando que el anterior, pero utilizando un ejemplo de clase usuario "Params" para mostrar cómo manejar las funciones de retrollamada:

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

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 19 R4       | Añadidos       |

</details>

<!-- REF #SystemWorkerClass.closeInput().Syntax -->

**.closeInput**()<!-- END REF -->

<!-- REF #SystemWorkerClass.closeInput().Params -->

| Parámetros | Tipo |     | Descripción                  |
| ---------- | ---- | :-: | ---------------------------- |
|            |      |     | No requiere ningún parámetro |

<!-- END REF -->

#### Descripción

The `.closeInput()` function <!-- REF #SystemWorkerClass.closeInput().Summary -->closes the input stream (_stdin_) of the external process<!-- END REF -->.

When the executable waits for all data to be received through `postMessage()`, `.closeInput()` is useful to indicate to the executable that data sending is finished and that it can proceed.

#### Ejemplo

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

<!-- REF #SystemWorkerClass.commandLine.Syntax -->

**.commandLine** : Text<!-- END REF -->

#### Descripción

The `.commandLine` property <!-- REF #SystemWorkerClass.commandLine.Summary -->contains the command line passed as parameter to the [`new()`](#4d-systemworker-new) function<!-- END REF -->.

Esta propiedad es de **solo lectura**.

<!-- END REF -->

<!-- REF SystemWorkerClass.currentDirectory.Desc -->

## .currentDirectory

<!-- REF #SystemWorkerClass.currentDirectory.Syntax -->

**.currentDirectory** : 4D.Folder<!-- END REF -->

#### Descripción

The `.currentDirectory` property <!-- REF #SystemWorkerClass.currentDirectory.Summary -->contains the working directory in which the external process is executed<!-- END REF -->.

<!-- END REF -->

<!-- REF SystemWorkerClass.dataType.Desc -->

## .dataType

<!-- REF #SystemWorkerClass.dataType.Syntax -->

**.dataType** : Text<!-- END REF -->

#### Descripción

The `.dataType` property <!-- REF #SystemWorkerClass.dataType.Summary -->contains the type of the response body content<!-- END REF -->. Valores posibles: "text" o "blob".

Esta propiedad es de **solo lectura**.

<!-- END REF -->

<!-- REF SystemWorkerClass.encoding.Desc -->

## .encoding

<!-- REF #SystemWorkerClass.encoding.Syntax -->

**.encoding** : Text<!-- END REF -->

#### Descripción

The `.encoding` property <!-- REF #SystemWorkerClass.encoding.Summary -->contains the encoding of the response body content<!-- END REF -->. This property is only available if the [`dataType`](#datatype) is "text".

Esta propiedad es de **solo lectura**.

<!-- END REF -->

<!-- REF SystemWorkerClass.errors.Desc -->

## .errors

<!-- REF #SystemWorkerClass.errors.Syntax -->

**.errors** : Collection<!-- END REF -->

#### Descripción

The `.errors` property <!-- REF #SystemWorkerClass.errors.Summary -->contains a collection of 4D errors in case of execution error(s) if any<!-- END REF -->.

Cada elemento de la colección es un objeto con las siguientes propiedades:

| Propiedad                                                                                  | Tipo   | Descripción                                           |
| ------------------------------------------------------------------------------------------ | ------ | ----------------------------------------------------- |
| [].errorCode           | number | Código de error 4D                                    |
| [].message             | text   | Descripción del error 4D                              |
| [ ].componentSignature | text   | Firma del componente interno que ha devuelto el error |

If no error occured, `.errors` is undefined.

<!-- END REF -->

<!-- REF SystemWorkerClass.exitCode.Desc -->

## .exitCode

<!-- REF #SystemWorkerClass.exitCode.Syntax -->

**.exitCode** : Integer<!-- END REF -->

#### Descripción

The `.exitCode` property <!-- REF #SystemWorkerClass.exitCode.Summary -->contains the exit code returned by the external process<!-- END REF -->. If the process did not terminate normaly, `exitCode` is _undefined_.

Esta propiedad es de **solo lectura**.

<!-- END REF -->

<!-- REF SystemWorkerClass.hideWindow.Desc -->

## .hideWindow

<!-- REF #SystemWorkerClass.hideWindow.Syntax -->

**.hideWindow** : Boolean<!-- END REF -->

#### Descripción

The `.hideWindow` property <!-- REF #SystemWorkerClass.hideWindow.Summary -->can be used to hide the window of the DOS console or the window of the launched executable (**Windows only**)<!-- END REF -->.

<!-- END REF -->

This property is **read-write**.

<!-- REF SystemWorkerClass.pid.Desc -->

## .pid

<!-- REF #SystemWorkerClass.pid.Syntax -->

**.pid** : Integer<!-- END REF -->

#### Descripción

The `.pid` property <!-- REF #SystemWorkerClass.pid.Summary -->contains the process unique identifier of the external process at the system level<!-- END REF -->.

Esta propiedad es de **solo lectura**.

<!-- END REF -->

<!-- REF SystemWorkerClass.postMessage().Desc -->

## .postMessage()

<!-- REF #SystemWorkerClass.postMessage().Syntax -->

**.postMessage**( _message_ : Text)<br/>**.postMessage**( _messageBLOB_ : Blob)<!-- END REF -->

<!-- REF #SystemWorkerClass.postMessage().Params -->

| Parámetros  | Tipo |     | Descripción                                                                            |
| ----------- | ---- | :-: | -------------------------------------------------------------------------------------- |
| message     | Text |  -> | Texto a escribir en el flujo de entrada (stdin) del proceso externo |
| messageBLOB | Blob |  -> | Bytes escritos en el flujo de entrada                                                  |

<!-- END REF -->

#### Descripción

The `.postMessage()` function <!-- REF #SystemWorkerClass.postMessage().Summary -->allows you to write on the input stream (stdin) of the external process<!-- END REF -->. In the _message_ parameter, pass the text to write in _stdin_.

The `.postMessage()` function also accepts a Blob type value in _messageBLOB_ to pass in _stdin_, so that you can post binary data.

You can use the `.dataType` property of the [options object](#options-object) to make response body return Blob values.

<!-- END REF -->

<!-- REF SystemWorkerClass.response.Desc -->

## .response

<!-- REF #SystemWorkerClass.response.Syntax -->

**.response** : Text<br/>**.response** : Blob<!-- END REF -->

#### Descripción

The `.response` property <!-- REF #SystemWorkerClass.response.Summary -->contains the concatenation of all data returned once the request is terminated<!-- END REF -->, i.e. the full message received from the process output.

The type of the message is defined according to the [`dataType`](#datatype) attribute.

Esta propiedad es de **solo lectura**.

<!-- END REF -->

<!-- REF SystemWorkerClass.responseError.Desc -->

## .responseError

<!-- REF #SystemWorkerClass.responseError.Syntax -->

**.responseError** : Text<!-- END REF -->

#### Descripción

The `.responseError` property <!-- REF #SystemWorkerClass.responseError.Summary -->contains the concatenation of all the errors returned, once the request is terminated<!-- END REF -->.

<!-- END REF -->

<!-- REF SystemWorkerClass.terminate().Desc -->

## .terminate()

<!-- REF #SystemWorkerClass.terminate().Syntax -->

**.terminate**()<!-- END REF -->

<!-- REF #SystemWorkerClass.terminate().Params -->

| Parámetros | Tipo |     | Descripción                  |
| ---------- | ---- | :-: | ---------------------------- |
|            |      |     | No requiere ningún parámetro |

<!-- END REF -->

#### Descripción

The `.terminate()` function <!-- REF #SystemWorkerClass.terminate().Summary -->forces the `SystemWorker` to terminate its execution<!-- END REF -->.

Esta función envía la instrucción de terminar y devolver el control al script en ejecución.

<!-- END REF -->

<!-- REF SystemWorkerClass.terminated.Desc -->

## .terminated

<!-- REF #SystemWorkerClass.terminated.Syntax -->

**.terminated** : Boolean<!-- END REF -->

#### Descripción

The `.terminated` property <!-- REF #SystemWorkerClass.terminated.Summary -->contains **true** if the external process is terminated<!-- END REF -->.

Esta propiedad es de **solo lectura**.

<!-- END REF -->

<!-- REF SystemWorkerClass.timeout.Desc -->

## .timeout

<!-- REF #SystemWorkerClass.timeout.Syntax -->

**.timeout** : Integer<!-- END REF -->

#### Descripción

The `.timeout` property <!-- REF #SystemWorkerClass.timeout.Summary -->contains the duration in seconds before the external process will be killed if it is still alive<!-- END REF -->.

Esta propiedad es de **solo lectura**.

<!-- END REF -->

<!-- REF SystemWorkerClass.wait().Desc -->

## .wait()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |

|19 R4|Añadido|

</details>

<!-- REF #SystemWorkerClass.wait().Syntax -->

**.wait**( {_timeout_ : Real} ) : 4D.SystemWorker<!-- END REF -->

<!-- REF #SystemWorkerClass.wait().Params -->

| Parámetros | Tipo                            |     | Descripción                                       |
| ---------- | ------------------------------- | :-: | ------------------------------------------------- |
| timeout    | Real                            |  -> | Tiempo de espera (en segundos) |
| Result     | 4D.SystemWorker |  <- | Objeto SystemWorker                               |

<!-- END REF -->

#### Descripción

The `.wait()` function <!-- REF #SystemWorkerClass.wait().Summary -->waits until the end of the `SystemWorker` execution or the specified _timeout_<!-- END REF -->.

En _timeout_, pase un valor en segundos. The `SystemWorker` script will wait for the external process for the amount of time defined in the _timeout_ parameter. If you omit the _timeout_ parameter, the script execution will wait indefinitely.

Actually, `.wait()` waits until the end of processing of the `onTerminate` formula, except if the _timeout_ is reached. If _timeout_ is reached, the `SystemWorker` is not killed.

During a `.wait()` execution, callback functions are executed, especially callbacks from other events or from other `SystemWorker` instances. You can exit from a `.wait()` by calling [`terminate()`](#terminate) from a callback.

Esta función devuelve el objeto SystemWorker.

> This function is not necessary if you created the `SystemWorker` from a 4D worker process.

<!-- END REF -->
