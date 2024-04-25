---
id: SystemWorkerClass
title: SystemWorker
---

System workers allow the 4D code to call any external process (a shell command, PHP, etc.) on the same machine. Les System workers sont appelés de manière asynchrone. En utilisant des callbacks, 4D permet de communiquer dans les deux sens.

The `SystemWorker` class is available from the `4D` class store.

### Exemple

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

### Sommaire

|                                                                                                                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #4D.SystemWorker.new().Syntax -->](#4d-systemworker-new)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #4D.SystemWorker.new().Summary -->                        |
| [<!-- INCLUDE #SystemWorkerClass.closeInput().Syntax -->](#closeinput)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #SystemWorkerClass.closeInput().Summary -->               |
| [<!-- INCLUDE #SystemWorkerClass.commandLine.Syntax -->](#commandline)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #SystemWorkerClass.commandLine.Summary -->                |
| [<!-- INCLUDE #SystemWorkerClass.currentDirectory.Syntax -->](#currentdirectory)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #SystemWorkerClass.currentDirectory.Summary --> |
| [<!-- INCLUDE #SystemWorkerClass.dataType.Syntax -->](#dataype)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #SystemWorkerClass.dataType.Summary -->                          |
| [<!-- INCLUDE #SystemWorkerClass.encoding.Syntax -->](#encoding)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #SystemWorkerClass.encoding.Summary -->                         |
| [<!-- INCLUDE #SystemWorkerClass.errors.Syntax -->](#errors)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #SystemWorkerClass.errors.Summary -->                               |
| [<!-- INCLUDE #SystemWorkerClass.exitCode.Syntax -->](#exitcode)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #SystemWorkerClass.exitCode.Summary -->                         |
| [<!-- INCLUDE #SystemWorkerClass.hideWindow.Syntax -->](#hideWindow)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #SystemWorkerClass.hideWindow.Summary -->                   |
| [<!-- INCLUDE #SystemWorkerClass.pid.Syntax -->](#pid)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #SystemWorkerClass.pid.Summary -->                                        |
| [<!-- INCLUDE #SystemWorkerClass.postMessage().Syntax -->](#postmessage)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #SystemWorkerClass.postMessage().Summary -->            |
| [<!-- INCLUDE #SystemWorkerClass.response.Syntax -->](#response)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #SystemWorkerClass.response.Summary -->                         |
| [<!-- INCLUDE #SystemWorkerClass.responseError.Syntax -->](#responseerror)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #SystemWorkerClass.responseError.Summary -->          |
| [<!-- INCLUDE #SystemWorkerClass.terminate().Syntax -->](#terminate)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #SystemWorkerClass.terminate().Summary -->                  |
| [<!-- INCLUDE #SystemWorkerClass.terminated.Syntax -->](#terminated)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #SystemWorkerClass.terminated.Summary -->                   |
| [<!-- INCLUDE #SystemWorkerClass.timeout.Syntax -->](#timeout)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #SystemWorkerClass.timeout.Summary -->                            |
| [<!-- INCLUDE #SystemWorkerClass.wait().Syntax -->](#wait)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #SystemWorkerClass.wait().Summary -->                                 |

<!-- REF 4D.SystemWorker.new().Desc -->

## 4D.SystemWorker.new()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 19 R4   | Ajout         |

</details>

<!-- REF #4D.SystemWorker.new().Syntax -->

**4D.SystemWorker.new** ( _commandLine_ : Text { ; options : Object } ) : 4D.SystemWorker<!-- END REF -->

<!-- REF #4D.SystemWorker.new().Params -->

| Paramètres  | Type                            |     | Description                                                            |
| ----------- | ------------------------------- | :-: | ---------------------------------------------------------------------- |
| commandLine | Text                            |  -> | Ligne de commande à exécuter                                           |
| options     | Object                          |  -> | Paramètres du worker                                                   |
| result      | 4D.SystemWorker |  <- | Nouveau System worker asynchrone ou null si le process n'a pas démarré |

<!-- END REF -->

#### Description

The `4D.SystemWorker.new()` function <!-- REF #4D.SystemWorker.new().Summary -->creates and returns a `4D.SystemWorker` object that will execute the _commandLine_ you passed as parameter to launch an external process<!-- END REF -->.

L'objet system worker retourné peut être utilisé pour envoyer des messages au worker et obtenir les résultats du worker.

If an error occurs during the creation of the proxy object, the function returns a `null` object and an error is thrown.

In the _commandLine_ parameter, pass the full path of the application's file to be executed (posix syntax), as well as any required arguments, if necessary. If you pass only the application name, 4D will use the `PATH` environment variable to locate the executable.

**Warning:** This function can only launch executable applications; it cannot execute instructions that are part of the shell (command interpreter). For example, under Windows it is not possible to use this command to execute the `dir` instruction.

#### _options_ Object

In the _options_ parameter, pass an object that can contain the following properties:

| Propriété        | Type    | Par défaut | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ---------------- | ------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| onResponse       | Formula | undefined  | Callback pour les messages du system worker. Ce callback est appelé une fois que la réponse complète est reçue. Elle reçoit deux objets en paramètres (voir ci-dessous)                                                                                                                                                                                                                                      |
| onData           | Formula | undefined  | Callback pour les données du system worker. Ce callback est appelé chaque fois que le system worker reçoit des données. Elle reçoit deux objets en paramètres (voir ci-dessous)                                                                                                                                                                                                                              |
| onDataError      | Formula | undefined  | Callback for the external process errors (_stderr_ of the external process). Elle reçoit deux objets en paramètres (voir ci-dessous)                                                                                                                                                                                                                                                                      |
| onError          | Formula | undefined  | Callback pour les erreurs d'exécution, renvoyées par le system worker en cas de conditions d'exécution inhabituelles (erreurs système). Elle reçoit deux objets en paramètres (voir ci-dessous)                                                                                                                                                                                                           |
| onTerminate      | Formula | undefined  | Callback lorsque le process externe est terminé. Elle reçoit deux objets en paramètres (voir ci-dessous)                                                                                                                                                                                                                                                                                                                     |
| timeout          | Number  | undefined  | Délai en secondes avant que le process soit tué s'il est toujours actif                                                                                                                                                                                                                                                                                                                                                                                         |
| dataType         | Text    | "text"     | Type de contenu du corps de la réponse. Valeurs possibles : "text" (par défaut), "blob".                                                                                                                                                                                                                                                                                                     |
| encoding         | Text    | "UTF-8"    | Only if `dataType="text"`. Encodage du contenu du corps de la réponse. For the list of available values, see the [`CONVERT FROM TEXT`](https://doc.4d.com/4dv19R/help/command/en/page1011.html) command description                                                                                                                                                                                                             |
| variables        | Object  |            | Définit des variables d'environnement personnalisées pour le system worker. Syntax: `variables.key=value`, where `key` is the variable name and `value` its value. Les valeurs sont converties en chaînes de caractères lorsque cela est possible. La valeur ne peut pas contenir un '='. S'il n'est pas défini, le system worker hérite de l'environnement 4D. |
| currentDirectory | Folder  |            | Répertoire de travail dans lequel le process est exécuté                                                                                                                                                                                                                                                                                                                                                                                                        |
| hideWindow       | Boolean | vrai       | (Windows) Masquer la fenêtre de l'application (si possible) ou la console Windows                                                                                                                                                                                                                                                                                                                                         |

Toutes les fonctions de callback reçoivent deux paramètres objet. Leur contenu dépend du callback :

| Paramètres                   | Type         | _onResponse_ | _onData_       | _onDataError_    | _onError_    | _onTerminate_ |
| ---------------------------- | ------------ | ------------ | -------------- | ---------------- | ------------ | ------------- |
| $param1                      | Object       | SystemWorker | SystemWorker   | SystemWorker     | SystemWorker | SystemWorker  |
| $param2.type | Text         | "response"   | "data"         | "error"          | "error"      | "termination" |
| $param2.data | Text ou Blob |              | données reçues | données d'erreur |              |               |

Voici la séquence des appels de callbacks :

1. `onData` and `onDataError` are executed one or several times
2. if called, `onError` is executed once (stops the system worker processing)
3. if no error occured, `onResponse` is executed once
4. `onTerminate` is always executed

#### Valeur retournée

La fonction renvoie un objet system worker sur lequel vous pouvez appeler les fonctions et les propriétés de la classe SystemWorker.

#### Exemples sous Windows

1. Pour ouvrir le Bloc-notes et ouvrir un document spécifique :

```4d
var $sw : 4D.SystemWorker
var $options : Object
$options:=New object
$options.hideWindow:= False

$sw:=4D.SystemWorker.new ("C:\\WINDOWS\\notepad.exe C:\\Docs\\new folder\\res.txt";$options)
```

2. Exécuter npm install dans la console :

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

3. Pour lancer l'application Microsoft® Word® et ouvrir un document spécifique :

```4d
$mydoc:="C:\\Program Files\\Microsoft Office\\Office15\\WINWORD.EXE C:\\Tempo\\output.txt"
var $sw : 4D.SystemWorker
$sw:=4D.SystemWorker.new($mydoc)
```

4. Pour lancer une commande avec le répertoire courant et poster un message :

```4d
var $param : Object
var $sys : 4D.SystemWorker

$param:=New object
$param.currentDirectory:=Folder(fk database folder)
$sys:=4D.SystemWorker.new("git commit -F -";$param)
$sys.postMessage("This is a postMessage")
$sys.closeInput()
```

5. Pour permettre à l'utilisateur d'ouvrir un document externe sous Windows :

```4d
$docname:=Select document(" ; "*.*" ; "Choisissez le fichier à ouvrir";0)
If(OK=1)
 var $sw : 4D.SystemWorker
 $sw:=4D.SystemWorker.new("cmd.exe /C start \"\" \""$docname"\"")
End if
```

#### Exemples sous macOS

1. Edit a text file (`cat` is the macOS command used to edit files). Dans cet exemple, le chemin d'accès complet de la commande est transmis :

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

3. Pour obtenir le contenu du dossier "Users" (ls -l est l'équivalent sous macOS de la commande dir sous DOS).

```4d
var $systemworker : 4D.SystemWorker
var $output : Text
var $errors : Collection

$systemworker:=4D.SystemWorker.new("/bin/ls -l /Users ")
$systemworker.wait(5)
$output:=$systemworker.response
$error:=$systemworker.errors

```

4. Même commande que ci-dessus, mais en utilisant un exemple de classe utilisateur "Params" pour montrer comment gérer les fonctions de callback :

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

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 19 R4   | Ajout         |

</details>

<!-- REF #SystemWorkerClass.closeInput().Syntax -->

**.closeInput**()<!-- END REF -->

<!-- REF #SystemWorkerClass.closeInput().Params -->

| Paramètres | Type |     | Description                 |
| ---------- | ---- | :-: | --------------------------- |
|            |      |     | Ne requiert aucun paramètre |

<!-- END REF -->

#### Description

The `.closeInput()` function <!-- REF #SystemWorkerClass.closeInput().Summary -->closes the input stream (_stdin_) of the external process<!-- END REF -->.

When the executable waits for all data to be received through `postMessage()`, `.closeInput()` is useful to indicate to the executable that data sending is finished and that it can proceed.

#### Exemple

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

<!-- REF #SystemWorkerClass.dataType.Syntax -->

**.dataType** : Text<!-- END REF -->

#### Description

The `.dataType` property <!-- REF #SystemWorkerClass.dataType.Summary -->contains the type of the response body content<!-- END REF -->. Valeurs possibles : "text" ou "blob".

This property is **read-only**.

<!-- END REF -->

<!-- REF SystemWorkerClass.encoding.Desc -->

## .encoding

<!-- REF #SystemWorkerClass.encoding.Syntax -->

**.encoding** : Text<!-- END REF -->

#### Description

The `.encoding` property <!-- REF #SystemWorkerClass.encoding.Summary -->contains the encoding of the response body content<!-- END REF -->. This property is only available if the [`dataType`](#datatype) is "text".

This property is **read-only**.

<!-- END REF -->

<!-- REF SystemWorkerClass.errors.Desc -->

## .errors

<!-- REF #SystemWorkerClass.errors.Syntax -->

**.errors** : Collection<!-- END REF -->

#### Description

The `.errors` property <!-- REF #SystemWorkerClass.errors.Summary -->contains a collection of 4D errors in case of execution error(s) if any<!-- END REF -->.

Chaque élément de la collection est un objet avec les propriétés suivantes :

| Propriété                                                                                  | Type   | Description                                            |
| ------------------------------------------------------------------------------------------ | ------ | ------------------------------------------------------ |
| [].errorCode           | number | Code d'erreur 4D                                       |
| [].message             | text   | Description de l'erreur 4D                             |
| [ ].componentSignature | text   | Signature du composant interne qui a retourné l'erreur |

If no error occured, `.errors` is undefined.

<!-- END REF -->

<!-- REF SystemWorkerClass.exitCode.Desc -->

## .exitCode

<!-- REF #SystemWorkerClass.exitCode.Syntax -->

**.exitCode** : Integer<!-- END REF -->

#### Description

The `.exitCode` property <!-- REF #SystemWorkerClass.exitCode.Summary -->contains the exit code returned by the external process<!-- END REF -->. If the process did not terminate normaly, `exitCode` is _undefined_.

This property is **read-only**.

<!-- END REF -->

<!-- REF SystemWorkerClass.hideWindow.Desc -->

## .hideWindow

<!-- REF #SystemWorkerClass.hideWindow.Syntax -->

**.hideWindow** : Boolean<!-- END REF -->

#### Description

The `.hideWindow` property <!-- REF #SystemWorkerClass.hideWindow.Summary -->can be used to hide the window of the DOS console or the window of the launched executable (**Windows only**)<!-- END REF -->.

<!-- END REF -->

This property is **read-write**.

<!-- REF SystemWorkerClass.pid.Desc -->

## .pid

<!-- REF #SystemWorkerClass.pid.Syntax -->

**.pid** : Integer<!-- END REF -->

#### Description

The `.pid` property <!-- REF #SystemWorkerClass.pid.Summary -->contains the process unique identifier of the external process at the system level<!-- END REF -->.

This property is **read-only**.

<!-- END REF -->

<!-- REF SystemWorkerClass.postMessage().Desc -->

## .postMessage()

<!-- REF #SystemWorkerClass.postMessage().Syntax -->

**.postMessage**( _message_ : Text)<br/>**.postMessage**( _messageBLOB_ : Blob)<!-- END REF -->

<!-- REF #SystemWorkerClass.postMessage().Params -->

| Paramètres  | Type |     | Description                                                                        |
| ----------- | ---- | :-: | ---------------------------------------------------------------------------------- |
| message     | Text |  -> | Texte à écrire dans le flux d'entrée (stdin) du process externe |
| messageBLOB | Blob |  -> | Octets écrits dans le flux d'entrée                                                |

<!-- END REF -->

#### Description

The `.postMessage()` function <!-- REF #SystemWorkerClass.postMessage().Summary -->allows you to write on the input stream (stdin) of the external process<!-- END REF -->. In the _message_ parameter, pass the text to write in _stdin_.

The `.postMessage()` function also accepts a Blob type value in _messageBLOB_ to pass in _stdin_, so that you can post binary data.

You can use the `.dataType` property of the [options object](#options-object) to make response body return Blob values.

<!-- END REF -->

<!-- REF SystemWorkerClass.response.Desc -->

## .response

<!-- REF #SystemWorkerClass.response.Syntax -->

**.response** : Text<br/>**.response** : Blob<!-- END REF -->

#### Description

The `.response` property <!-- REF #SystemWorkerClass.response.Summary -->contains the concatenation of all data returned once the request is terminated<!-- END REF -->, i.e. the full message received from the process output.

The type of the message is defined according to the [`dataType`](#datatype) attribute.

This property is **read-only**.

<!-- END REF -->

<!-- REF SystemWorkerClass.responseError.Desc -->

## .responseError

<!-- REF #SystemWorkerClass.responseError.Syntax -->

**.responseError** : Text<!-- END REF -->

#### Description

The `.responseError` property <!-- REF #SystemWorkerClass.responseError.Summary -->contains the concatenation of all the errors returned, once the request is terminated<!-- END REF -->.

<!-- END REF -->

<!-- REF SystemWorkerClass.terminate().Desc -->

## .terminate()

<!-- REF #SystemWorkerClass.terminate().Syntax -->

**.terminate**()<!-- END REF -->

<!-- REF #SystemWorkerClass.terminate().Params -->

| Paramètres | Type |     | Description                 |
| ---------- | ---- | :-: | --------------------------- |
|            |      |     | Ne requiert aucun paramètre |

<!-- END REF -->

#### Description

The `.terminate()` function <!-- REF #SystemWorkerClass.terminate().Summary -->forces the `SystemWorker` to terminate its execution<!-- END REF -->.

Cette fonction envoie l'instruction de terminer et de redonner le contrôle au script en cours d'exécution.

<!-- END REF -->

<!-- REF SystemWorkerClass.terminated.Desc -->

## .terminated

<!-- REF #SystemWorkerClass.terminated.Syntax -->

**.terminated** : Boolean<!-- END REF -->

#### Description

The `.terminated` property <!-- REF #SystemWorkerClass.terminated.Summary -->contains **true** if the external process is terminated<!-- END REF -->.

This property is **read-only**.

<!-- END REF -->

<!-- REF SystemWorkerClass.timeout.Desc -->

## .timeout

<!-- REF #SystemWorkerClass.timeout.Syntax -->

**.timeout** : Integer<!-- END REF -->

#### Description

The `.timeout` property <!-- REF #SystemWorkerClass.timeout.Summary -->contains the duration in seconds before the external process will be killed if it is still alive<!-- END REF -->.

This property is **read-only**.

<!-- END REF -->

<!-- REF SystemWorkerClass.wait().Desc -->

## .wait()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |

|19 R4|Ajouté|

</details>

<!-- REF #SystemWorkerClass.wait().Syntax -->

**.wait**( {_timeout_ : Real} ) : 4D.SystemWorker<!-- END REF -->

<!-- REF #SystemWorkerClass.wait().Params -->

| Paramètres | Type                            |     | Description                                      |
| ---------- | ------------------------------- | :-: | ------------------------------------------------ |
| timeout    | Real                            |  -> | Temps d'attente (en secondes) |
| Résultat   | 4D.SystemWorker |  <- | Objet SystemWorker                               |

<!-- END REF -->

#### Description

The `.wait()` function <!-- REF #SystemWorkerClass.wait().Summary -->waits until the end of the `SystemWorker` execution or the specified _timeout_<!-- END REF -->.

In _timeout_, pass a value in seconds. The `SystemWorker` script will wait for the external process for the amount of time defined in the _timeout_ parameter. If you omit the _timeout_ parameter, the script execution will wait indefinitely.

Actually, `.wait()` waits until the end of processing of the `onTerminate` formula, except if the _timeout_ is reached. If _timeout_ is reached, the `SystemWorker` is not killed.

During a `.wait()` execution, callback functions are executed, especially callbacks from other events or from other `SystemWorker` instances. You can exit from a `.wait()` by calling [`terminate()`](#terminate) from a callback.

Cette fonction renvoie l'objet SystemWorker.

> This function is not necessary if you created the `SystemWorker` from a 4D worker process.

<!-- END REF -->
