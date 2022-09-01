---
id: SystemWorkerClass
title: SystemWorker
---

Les System workers permettent au code 4D d'appeler n'importe quel process externe (une commande shell, PHP, etc.) sur la même machine. Les System workers sont appelés de manière asynchrone. En utilisant des callbacks, 4D permet de communiquer dans les deux sens.

La classe `SystemWorker` est disponible dans le class store `4D` .

### Exemple

```4d
    // Exemple Windows pour avoir accès aux informations d'ipconfig
var $myWinWorker : 4D.SystemWorker
var $ipConfig : Text
$myWinWorker:= 4D.SystemWorker.new("ipconfig")
$ipConfig:=$myWinWorker.wait(1).response //timeout 1 seconde

    // Exemple macOS pour modifier les permissions d'un fichier sous macOS
    // chmod est la commande macOS utilisée pour modifier l'accès aux fichiers
var $myMacWorker : 4D.SystemWorker
$myMacWorker:= 4D.SystemWorker.new("chmod x /folder/myfile.sh")

```

### Sommaire

|                                                                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #4D.SystemWorker.new().Syntax -->](#4d-systemworker-new)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #4D.SystemWorker.new().Summary -->|
| [<!-- INCLUDE #SystemWorkerClass.closeInput().Syntax -->](#closeinput)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SystemWorkerClass.closeInput().Summary --> |
| [<!-- INCLUDE #SystemWorkerClass.commandLine.Syntax -->](#commandline)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SystemWorkerClass.commandLine.Summary --> |
| [<!-- INCLUDE #SystemWorkerClass.currentDirectory.Syntax -->](#currentdirectory)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SystemWorkerClass.currentDirectory.Summary --> |
| [<!-- INCLUDE #SystemWorkerClass.dataType.Syntax -->](#dataype)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SystemWorkerClass.dataType.Summary --> |
| [<!-- INCLUDE #SystemWorkerClass.encoding.Syntax -->](#encoding)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SystemWorkerClass.encoding.Summary --> |
| [<!-- INCLUDE #SystemWorkerClass.errors.Syntax -->](#errors)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SystemWorkerClass.errors.Summary --> |
| [<!-- INCLUDE #SystemWorkerClass.exitCode.Syntax -->](#exitcode)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SystemWorkerClass.exitCode.Summary --> |
| [<!-- INCLUDE #SystemWorkerClass.hideWindow.Syntax -->](#hideWindow)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SystemWorkerClass.hideWindow.Summary --> |
| [<!-- INCLUDE #SystemWorkerClass.pid.Syntax -->](#pid)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SystemWorkerClass.pid.Summary --> |
| [<!-- INCLUDE #SystemWorkerClass.postMessage().Syntax -->](#postmessage)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SystemWorkerClass.postMessage().Summary --> |
| [<!-- INCLUDE #SystemWorkerClass.response.Syntax -->](#response)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SystemWorkerClass.response.Summary --> |
| [<!-- INCLUDE #SystemWorkerClass.responseError.Syntax -->](#responseerror)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SystemWorkerClass.responseError.Summary --> |
| [<!-- INCLUDE #SystemWorkerClass.terminate().Syntax -->](#terminate)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SystemWorkerClass.terminate().Summary --> |
| [<!-- INCLUDE #SystemWorkerClass.terminated.Syntax -->](#terminated)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SystemWorkerClass.terminated.Summary --> |
| [<!-- INCLUDE #SystemWorkerClass.timeout.Syntax -->](#timeout)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SystemWorkerClass.timeout.Summary --> |
| [<!-- INCLUDE #SystemWorkerClass.wait().Syntax -->](#wait)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SystemWorkerClass.wait().Summary --> |

<!-- REF 4D.SystemWorker.new().Desc -->
## 4D.SystemWorker.new()

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v19 R4  | Ajoutées      |

</details>

<!-- REF #4D.SystemWorker.new().Syntax -->
**4D.SystemWorker.new** ( *commandLine* : Text { ; options : Object } ) : 4D.SystemWorker<!-- END REF -->

<!-- REF #4D.SystemWorker.new().Params -->
| Paramètres  | Type            |    | Description                                                            |
| ----------- | --------------- |:--:| ---------------------------------------------------------------------- |
| commandLine | Text            | -> | Ligne de commande à exécuter                                           |
| options     | Object          | -> | Paramètres du worker                                                   |
| result      | 4D.SystemWorker | <- | Nouveau System worker asynchrone ou null si le process n'a pas démarré |  
<!-- END REF -->

#### Description

The `4D.SystemWorker.new()` function <!-- REF #4D.SystemWorker.new().Summary -->creates and returns a `4D.SystemWorker` object that will execute the *commandLine* you passed as parameter to launch an external process<!-- END REF -->.

L'objet system worker retourné peut être utilisé pour envoyer des messages au worker et obtenir les résultats du worker.

Si une erreur se produit pendant la création de l'objet proxy, la fonction renvoie un objet `null` et une erreur est levée.

Dans le paramètre *commandLine* , passez le chemin complet du fichier de l'application à exécuter (syntaxe posix), ainsi que les arguments requis, si nécessaire. Si vous ne passez que le nom de l'application, 4D utilisera la variable d'environnement `PATH` pour localiser l'exécutable.

**Attention :** Cette fonction ne peut lancer que des applications exécutables ; elle ne peut pas exécuter les instructions qui font partie du shell (interpréteur de commandes). Par exemple, sous Windows, il n'est pas possible d'utiliser cette commande pour exécuter l'instruction `dir` .

#### Objet *options*

Dans le paramètre *options* , passez un objet qui peut contenir les propriétés suivantes :

| Propriété        | Type    | Par défaut | Description                                                                                                                                                                                                                                                                                                                                                        |
| ---------------- | ------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| onResponse       | Formula | undefined  | Callback pour les messages du system worker. Ce callback est appelé une fois que la réponse complète est reçue. Il reçoit deux objets en paramètres (voir ci-dessous)                                                                                                                                                                                              |
| onData           | Formula | undefined  | Callback pour les données du system worker. Ce callback est appelé chaque fois que le system worker reçoit des données. Il reçoit deux objets en paramètres (voir ci-dessous)                                                                                                                                                                                      |
| onDataError      | Formula | undefined  | Callback pour les erreurs du process externe (*stderr* du processs externe). Il reçoit deux objets en paramètres (voir ci-dessous)                                                                                                                                                                                                                                 |
| onError          | Formula | undefined  | Callback pour les erreurs d'exécution, renvoyées par le system worker en cas de conditions d'exécution inhabituelles (erreurs système). Il reçoit deux objets en paramètres (voir ci-dessous)                                                                                                                                                                      |
| onTerminate      | Formula | undefined  | Callback lorsque le process externe est terminé. Il reçoit deux objets en paramètres (voir ci-dessous)                                                                                                                                                                                                                                                             |
| timeout          | Number  | undefined  | Délai en secondes avant que le process soit tué s'il est toujours actif                                                                                                                                                                                                                                                                                            |
| dataType         | Text    | "text"     | Type de contenu du corps de la réponse. Valeurs possibles : "text" (par défaut), "blob".                                                                                                                                                                                                                                                                           |
| encoding         | Text    | "UTF-8"    | Seulement si `dataType="text"`. Encodage du contenu du corps de la réponse. Pour la liste des valeurs disponibles, voir la description de la commande [`CONVERT FROM TEXT`](https://doc.4d.com/4dv19R/help/command/fe/page1011.html)                                                                                                                               |
| variables        | Object  |            | Définit des variables d'environnement personnalisées pour le system worker. Syntaxe : `variables.key=value`, où `key` est le nom de la variable et `value` sa valeur. Les valeurs sont converties en chaînes de caractères lorsque cela est possible. La valeur ne peut pas contenir un '='. S'il n'est pas défini, le system worker hérite de l'environnement 4D. |
| currentDirectory | Folder  |            | Répertoire de travail dans lequel le process est exécuté                                                                                                                                                                                                                                                                                                           |
| hideWindow       | Boolean | vrai       | (Windows) Masquer la fenêtre de l'application (si possible) ou la console Windows                                                                                                                                                                                                                                                                                  |

Toutes les fonctions de callback reçoivent deux paramètres objet. Leur contenu dépend du callback :

| Paramètres   | Type         | *onResponse* | *onData*       | *onDataError*    | *onError*    | *onTerminate* |
| ------------ | ------------ | ------------ | -------------- | ---------------- | ------------ | ------------- |
| $param1      | Object       | SystemWorker | SystemWorker   | SystemWorker     | SystemWorker | SystemWorker  |
| $param2.type | Text         | "response"   | "data"         | "error"          | "error"      | "termination" |
| $param2.data | Text ou Blob |              | données reçues | données d'erreur |              |               |

Voici la séquence des appels de callbacks :

1. `onData` et `onDataError` sont exécutés une ou plusieurs fois
2. s'il est appelé, `onError` est exécuté une fois (arrête le traitement du system worker)
3. si aucune erreur ne s'est produite, `onResponse` est exécuté une fois
4. `onTerminate` est toujours exécuté

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
$docname:=Select document("";"*.*";"Choose the file to open";0)
If(OK=1)
 var $sw : 4D.SystemWorker
 $sw:=4D.SystemWorker.new("cmd.exe /C start \"\" \""+$docname+"\"")
End if
```

#### Exemples sous macOS

1. Modifier un fichier texte (`cat` est la commande macOS utilisée pour modifier les fichiers). Dans cet exemple, le chemin d'accès complet de la commande est transmis :

```4d

var $sw : 4D.SystemWorker
$sw:=4D.SystemWorker.new("/bin/cat /folder/myfile.txt")
$sw.wait() /exécution synchrone

```

2. Pour lancer une application "graphique" indépendante, il est préférable d'utiliser la commande système `open` (dans ce cas, le code a le même effet qu'un double-clic sur l'application) :

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

| Version | Modifications |
| ------- | ------------- |
| v19 R4  | Ajoutées      |

</details>

<!-- REF #SystemWorkerClass.closeInput().Syntax -->
**.closeInput**()<!-- END REF -->

<!-- REF #SystemWorkerClass.closeInput().Params -->
| Paramètres | Type |  | Description                                            |
| ---------- | ---- |::| ------------------------------------------------------ |
|            |      |  | Ne requiert aucun paramètre|<!-- END REF -->

|

#### Description

The `.closeInput()` function <!-- REF #SystemWorkerClass.closeInput().Summary -->closes the input stream (*stdin*) of the external process<!-- END REF -->.

Lorsque l'exécutable attend que toutes les données soient reçues par `postMessage()`, `.closeInput()` est utile pour indiquer à l'exécutable que l'envoi des données est terminé et qu'il peut continuer.

#### Exemple

```4D
// Créer quelques données à gzipper
var $input;$output : Blob
var $gzip : Text
TEXT TO BLOB("Hello, World !" ;$input)
$gzip:="\"C:\\Program Files (x86)\GnuWin32\bin\\\\\gzip.exe\" "

// Créer un system worker asynchrone
var $worker : 4D.SystemWorker
$worker:= 4D.SystemWorker.new($gzip;New object("dataType" ; "blob"))

// Envoyer le fichier compressé sur stdin.
$worker.postMessage($input)
// Notez que nous appelons closeInput() pour indiquer que nous avons terminé.
// gzip (et la plupart des programmes attendant des données de stdin) attendra plus de données jusqu'à ce que l'entrée soit explicitement fermée.
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

Cette propriété est en **lecture seule**.

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

The `.dataType` property <!-- REF #SystemWorkerClass.dataType.Summary -->contains the type of the response body content<!-- END REF -->. .

Cette propriété est en **lecture seule**.

<!-- END REF -->

<!-- REF SystemWorkerClass.encoding.Desc -->
## .encoding

<!-- REF #SystemWorkerClass.encoding.Syntax -->
**.encoding** : Text<!-- END REF -->

#### Description

The `.encoding` property <!-- REF #SystemWorkerClass.encoding.Summary -->contains the encoding of the response body content<!-- END REF -->. .

Cette propriété est en **lecture seule**.

<!-- END REF -->

<!-- REF SystemWorkerClass.errors.Desc -->
## .errors

<!-- REF #SystemWorkerClass.errors.Syntax -->
**.errors** : Collection<!-- END REF -->

#### Description

The `.errors` property <!-- REF #SystemWorkerClass.errors.Summary -->contains a collection of 4D errors in case of execution error(s)<!-- END REF -->.

Chaque élément de la collection est un objet avec les propriétés suivantes :

| Propriété              | Type   | Description                                            |
| ---------------------- | ------ | ------------------------------------------------------ |
| [].errorCode           | number | Code d'erreur 4D                                       |
| [].message             | text   | Description de l'erreur 4D                             |
| [ ].componentSignature | text   | Signature du composant interne qui a retourné l'erreur |

Si aucune erreur ne s'est produite, `.errors` contient une collection vide.

<!-- END REF -->

<!-- REF SystemWorkerClass.exitCode.Desc -->
## .exitCode

<!-- REF #SystemWorkerClass.exitCode.Syntax -->
**.exitCode** : Integer<!-- END REF -->

#### Description

The `.exitCode` property <!-- REF #SystemWorkerClass.exitCode.Summary -->contains the exit code returned by the external process<!-- END REF -->. Si le process ne s'est pas terminé normalement, `exitCode` est *undefined*.

Cette propriété est en **lecture seule**.

<!-- END REF -->

<!-- REF SystemWorkerClass.hideWindow.Desc -->
## .hideWindow

<!-- REF #SystemWorkerClass.hideWindow.Syntax -->
**.hideWindow** : Boolean<!-- END REF -->

#### Description

The `.hideWindow` property <!-- REF #SystemWorkerClass.hideWindow.Summary -->can be used to hide the window of the DOS console or the window of the launched executable (**Windows only**)<!-- END REF -->.

<!-- END REF -->

Cette propriété est en **lecture-écriture**.

<!-- REF SystemWorkerClass.pid.Desc -->
## .pid

<!-- REF #SystemWorkerClass.pid.Syntax -->
**.pid** : Integer<!-- END REF -->

#### Description

The `.pid` property <!-- REF #SystemWorkerClass.pid.Summary -->contains the process unique identifier of the external process at the system level<!-- END REF -->.

Cette propriété est en **lecture seule**.

<!-- END REF -->

<!-- REF SystemWorkerClass.postMessage().Desc -->
## .postMessage()

<!-- REF #SystemWorkerClass.postMessage().Syntax -->
**.postMessage**( *message* : Text)<br/>**.postMessage**( *messageBLOB* : Blob)<!-- END REF -->

<!-- REF #SystemWorkerClass.postMessage().Params -->
| Paramètres  | Type |    | Description                                                     |
| ----------- | ---- |:--:| --------------------------------------------------------------- |
| message     | Text | -> | Texte à écrire dans le flux d'entrée (stdin) du process externe |
| messageBLOB | Blob | -> | Bytes write on the input stream|<!-- END REF -->

|

#### Description

The `.postMessage()` function <!-- REF #SystemWorkerClass.postMessage().Summary -->allows you to write on the input stream (stdin) of the external process<!-- END REF -->. Dans le paramètre *message*, passez le texte à écrire dans *stdin*.

La fonction `.postMessage()` accepte également une valeur de type Blob dans *messageBLOB*, de sorte que vous pouvez poster des données binaires dans *stdin*.

Vous pouvez utiliser la propriété `.dataType` de l'objet [options](#options-object) pour que le corps de réponse renvoie des valeurs Blob.

<!-- END REF -->

<!-- REF SystemWorkerClass.response.Desc -->
## .response

<!-- REF #SystemWorkerClass.response.Syntax -->
**.response** : Text<br/>**.response** : Blob<!-- END REF -->

#### Description

The `.responseError` property <!-- REF #SystemWorkerClass.response.Summary -->contains the concatenation of all the errors returned, once the request is terminated<!-- END REF -->.

Le type du message est défini selon l'attribut [`dataType`](#datatype) .

Cette propriété est en **lecture seule**.

<!-- END REF -->

<!-- REF SystemWorkerClass.responseError.Desc -->
## .responseError

<!-- REF #SystemWorkerClass.responseError.Syntax -->
**.responseError** : Text<!-- END REF -->

#### Description

The `.terminated` property <!-- REF #SystemWorkerClass.responseError.Summary -->contains **true** if the external process is terminated<!-- END REF -->.

<!-- END REF -->

<!-- REF SystemWorkerClass.terminate().Desc -->
## .terminate()

<!-- REF #SystemWorkerClass.terminate().Syntax -->
**.terminate**()<!-- END REF -->

<!-- REF #SystemWorkerClass.terminate().Params -->
| Paramètres | Type |  | Description                                            |
| ---------- | ---- |::| ------------------------------------------------------ |
|            |      |  | Ne requiert aucun paramètre|<!-- END REF -->

|

#### Description

The `.terminate()` function <!-- REF #SystemWorkerClass.terminate().Summary -->The `.terminate()` function<!-- END REF -->.

Cette fonction envoie l'instruction de terminer et de redonner le contrôle au script en cours d'exécution.

<!-- END REF -->

<!-- REF SystemWorkerClass.terminated.Desc -->
## .terminated

<!-- REF #SystemWorkerClass.terminated.Syntax -->
**.terminated** : Boolean<!-- END REF -->

#### Description

The `.timeout` property <!-- REF #SystemWorkerClass.terminated.Summary -->contains the duration in seconds before the external process will be killed if it is still alive<!-- END REF -->.

Cette propriété est en **lecture seule**.

<!-- END REF -->

<!-- REF SystemWorkerClass.timeout.Desc -->
## .timeout

<!-- REF #SystemWorkerClass.timeout.Syntax -->
**.timeout** : Integer<!-- END REF -->

#### Description

The `.wait()` function <!-- REF #SystemWorkerClass.timeout.Summary -->waits until the end of the `SystemWorker` execution or the specified *timeout*<!-- END REF -->.

Cette propriété est en **lecture seule**.

<!-- END REF -->

<!-- REF SystemWorkerClass.wait().Desc -->
## .wait()

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
|         |               |

|v19 R4|Added|

</details>

<!-- REF #SystemWorkerClass.wait().Syntax -->
**.wait**( {*timeout* : Real} ) : 4D.SystemWorker<!-- END REF -->

<!-- REF #SystemWorkerClass.wait().Params -->
| Paramètres | Type            |    | Description                                    |
| ---------- | --------------- |:--:| ---------------------------------------------- |
| timeout    | Real            | -> | Temps d'attente (en secondes)                  |
| Result     | 4D.SystemWorker | <- | SystemWorker object|<!-- END REF -->

|

#### Description

The `.wait()` function <!-- REF #SystemWorkerClass.wait().Summary -->waits until the end of the `SystemWorker` execution or the specified *timeout*<!-- END REF -->.

Dans *timeout*, passez une valeur en secondes. Le script `SystemWorker` attendra le process externe pendant la durée définie dans le paramètre *timeout* . Si vous omettez le paramètre *timeout*, l'exécution du script attendra indéfiniment.

En fait, `.wait()` attend la fin du traitement de la formule `onTerminate`, sauf si le *timeout* est atteint. Si le *timeout* est atteint, le `SystemWorker` n'est pas tué.

Pendant une exécution `.wait()`, les fonctions de callback sont exécutées, en particulier les callbacks provenant d'autres événements ou d'autres instances de `SystemWorker`. Vous pouvez sortir d'un `.wait()` en appelant [`terminate()`](#terminate) à partir d'un callback.

Cette fonction renvoie l'objet SystemWorker.

> Cette fonction n'est pas nécessaire si vous avez créé le `SystemWorker` à partir d'un process worker 4D.

<!-- END REF -->
