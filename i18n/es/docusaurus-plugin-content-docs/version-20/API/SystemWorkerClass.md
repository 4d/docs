---
id: SystemWorkerClass
title: SystemWorker
---

Los System workers permiten que el código 4D llame a cualquier proceso externo (un comando shell, PHP, etc.) en la misma máquina. Los trabajadores del sistema se llaman de forma asíncrona. Mediante el uso de retrollamadas, 4D hace posible la comunicación en ambos sentidos.

La clase `SystemWorker` está disponible en el almacén de clases `4D`.

### Ejemplo

```4d
    // Ejemplo Windows para acceder a la información de ipconfig
var $myWinWorker : 4D.SystemWorker
var $ipConfig : Text
$myWinWorker:= 4D.SystemWorker.new("ipconfig")
$ipConfig:=$myWinWorker.wait(1).response //timeout 1 segundo

    // ejemplo macOS para cambiar los permisos de un archivo en macOS
    // chmod es el comando macOS utilizado para modificar el acceso a los archivos
var $myMacWorker : 4D.SystemWorker
$myMacWorker:= 4D.SystemWorker.new("chmod +x /folder/myfile.sh")

```

### Resumen

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

<details><summary>Histórico</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 19 R4       | Añadidos       |

</details>

<!-- REF #4D.SystemWorker.new().Syntax -->
**4D.SystemWorker.new** ( *commandLine* : Text { ; options : Object } ) : 4D.SystemWorker<!-- END REF -->


<!-- REF #4D.SystemWorker.new().Params -->
| Parámetros  | Tipo            |    | Descripción                                                          |
| ----------- | --------------- |:--:| -------------------------------------------------------------------- |
| commandLine | Text            | -> | Línea de comando a ejecutar                                          |
| options     | Object          | -> | Parámetros worker                                                    |
| resultado   | 4D.SystemWorker | <- | Nuevo System worker asíncrono o null si el proceso no se ha iniciado |  
<!-- END REF -->

#### Descripción

La función `4D.SystemWorker.new()` <!-- REF #4D.SystemWorker.new().Summary -->crea y devuelve un objeto `4D.SystemWorker` que ejecutará la *commandLine* que se ha pasado como parámetro para lanzar un proceso externo<!-- END REF -->.

El objeto system worker devuelto puede utilizarse para enviar mensajes al worker y obtener los resultados del worker.

Si se produce un error durante la creación del objeto proxy, la función devuelve un objeto `null` y se lanza un error.

En el parámetro *commandLine*, pase la ruta completa del archivo de la aplicación a ejecutar (sintaxis posix), así como los argumentos necesarios, si es el caso. Si sólo pasa que el nombre de la aplicación, 4D utilizará la variable de entorno `PATH` para localizar el ejecutable.

**Atención:** esta función sólo puede lanzar aplicaciones ejecutables; no puede ejecutar las instrucciones que formen parte del shell (intérprete de comandos). Por ejemplo, en Windows no es posible utilizar este comando para ejecutar la instrucción `dir`.

#### Objeto *options*

En el parámetro *options*, pase un objeto que pueda contener las siguientes propiedades:

| Propiedad        | Tipo    | Por defecto | Descripción                                                                                                                                                                                                                                                                                                                         |
| ---------------- | ------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| onResponse       | Formula | indefinido  | Retrollamada para los mensajes del system worker. Esta retrollamada se llama una vez que se recibe la respuesta completa. Recibe dos objetos como parámetros (ver más abajo)                                                                                                                                                        |
| onData           | Formula | indefinido  | Retrollamada para los datos del system worker. Esta retrollamada se llama cada vez que el system worker recibe los datos. Recibe dos objetos como parámetros (ver más abajo)                                                                                                                                                        |
| onDataError      | Formula | indefinido  | Retrollamada para los errores del proceso externo (*stderr* del proceso externo). Recibe dos objetos como parámetros (ver más abajo)                                                                                                                                                                                                |
| onError          | Formula | indefinido  | Retrollamada para los errores de ejecución, devueltos por el system worker en caso de condiciones de ejecución inusuales (errores del sistema). Recibe dos objetos como parámetros (ver más abajo)                                                                                                                                  |
| onTerminate      | Formula | indefinido  | Retrollamada cuando el proceso externo se termina. Recibe dos objetos como parámetros (ver más abajo)                                                                                                                                                                                                                               |
| timeout          | Number  | indefinido  | Tiempo en segundos antes de que el proceso sea eliminado si aún está activo                                                                                                                                                                                                                                                         |
| dataType         | Text    | "text"      | Tipo de contenido del cuerpo de la respuesta. Valores posibles: "text" (por defecto), "blob".                                                                                                                                                                                                                                       |
| encoding         | Text    | "UTF-8"     | Sólo si `dataType="text"`. Codificación del contenido del cuerpo de la respuesta. Para ver la lista de valores disponibles, consulte la descripción del comando [`CONVERT FROM TEXT`](https://doc.4d.com/4dv19R/help/command/en/page1011.html)                                                                                      |
| variables        | Object  |             | Define las variables de entorno personalizadas para el system worker. Sintaxis: `variables.key=value`, donde `key` es el nombre de la variable y `value` su valor. Los valores se convierten en cadenas de caracters cuando es posible. El valor no puede contener un '='. Si no se define, el system worker hereda del entorno 4D. |
| currentDirectory | Folder  |             | Directorio de trabajo en el que se ejecuta el proceso                                                                                                                                                                                                                                                                               |
| hideWindow       | Boolean | true        | (Windows) Ocultar la ventana de la aplicación (si es posible) o la consola Windows                                                                                                                                                                                                                                                  |

Todas las funciones de retrollamada reciben dos parámetros objeto. Su contenido depende de la retrollamada:

| Parámetros   | Tipo        | *onResponse* | *onData*        | *onDataError*  | *onError*    | *onTerminate* |
| ------------ | ----------- | ------------ | --------------- | -------------- | ------------ | ------------- |
| $param1      | Object      | SystemWorker | SystemWorker    | SystemWorker   | SystemWorker | SystemWorker  |
| $param2.type | Text        | "response"   | "data"          | "error"        | "error"      | "termination" |
| $param2.data | Text o Blob |              | datos recibidos | datos de error |              |               |

Esta es la secuencia de llamadas de retorno:

1. `onData` y `onDataError` se ejecutan una o varias veces
2. si se llama, `onError` se ejecuta una vez (detiene el procesamiento del system worker)
3. si no se ha producido ningún error, `onResponse` se ejecuta una vez
4. `onTerminate` se ejecuta siempre

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

1. Editar un archivo texto (`cat` es el comando macOS utilizado para editar los archivos). En este ejemplo, se pasa la ruta de acceso completa del comando:

```4d

var $sw : 4D.SystemWorker
$sw:=4D.SystemWorker.new("/bin/cat /folder/myfile.txt")
$sw.wait() //synchronous execution

```

2. Para lanzar una aplicación "gráfica" independiente, es preferible utilizar el comando sistema `open` (en este caso, el código tiene el mismo efecto que hacer doble clic en la aplicación):

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

<details><summary>Histórico</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 19 R4       | Añadidos       |

</details>

<!-- REF #SystemWorkerClass.closeInput().Syntax -->
**.closeInput**()<!-- END REF -->


<!-- REF #SystemWorkerClass.closeInput().Params -->
| Parámetros | Tipo |  | Descripción                                             |
| ---------- | ---- |::| ------------------------------------------------------- |
|            |      |  | No requiere ningún parámetro|<!-- END REF -->

|

#### Descripción

La función `.closeInput()` <!-- REF #SystemWorkerClass.closeInput().Summary -->cierra el flujo de entrada (*stdin*) del proceso externo<!-- END REF -->.

Cuando el ejecutable espera a que se reciban todos los datos a través de `postMessage()`, `.closeInput()` es útil para indicar al ejecutable que el envío de datos ha terminado y que puede continuar.

#### Ejemplo

```4D
// Crear algunos datos para gzip
var $input;$output : Blob
var $gzip : Texto
TEXT TO BLOB("Hello, World!";$input)
$gzip:="\"C:\\Program Files (x86)\\GnuWin32\\bin\\gzip.exe\" "

// Crear un system worker asíncrono
var $worker : 4D.SystemWorker
$worker:= 4D.SystemWorker.new($gzip;New object("dataType"; "blob"))

// Enviar el archivo comprimido en stdin.
$worker.postMessage($input)
// Tenga en cuenta que llamamos a closeInput() para indicar que hemos terminado.
// gzip (y la mayoría de los programas que esperan datos de stdin) esperarán más datos hasta que la entrada se cierre explícitamente.
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

La propiedad `.commandLine` <!-- REF #SystemWorkerClass.commandLine.Summary -->contiene la línea de comandos pasada como parámetro a la función [`new()`](#4d-systemworker-new)<!-- END REF -->.

Esta propiedad es **de sólo lectura**.

<!-- END REF -->

<!-- REF SystemWorkerClass.currentDirectory.Desc -->
## .currentDirectory

<!-- REF #SystemWorkerClass.currentDirectory.Syntax -->
**.currentDirectory** : 4D.Folder<!-- END REF -->

#### Descripción

La propiedad `.currentDirectory` <!-- REF #SystemWorkerClass.currentDirectory.Summary -->contiene el directorio de trabajo en el que se ejecuta el proceso externo<!-- END REF -->.

<!-- END REF -->

<!-- REF SystemWorkerClass.dataType.Desc -->
## .dataType

<!-- REF #SystemWorkerClass.dataType.Syntax -->
**.dataType** : Text<!-- END REF -->

#### Descripción

La propiedad `.dataType` <!-- REF #SystemWorkerClass.dataType.Summary -->contiene el tipo de contenido del cuerpo de la respuesta<!-- END REF -->. Valores posibles: "text" o "blob".

Esta propiedad es **de sólo lectura**.

<!-- END REF -->

<!-- REF SystemWorkerClass.encoding.Desc -->
## .encoding

<!-- REF #SystemWorkerClass.encoding.Syntax -->
**.encoding** : Text<!-- END REF -->

#### Descripción

La propiedad `.encoding` <!-- REF #SystemWorkerClass.encoding.Summary -->contiene la codificación del contenido del cuerpo de la respuesta<!-- END REF -->. Esta propiedad sólo está disponible si el [`dataType`](#datatype) es "text".

Esta propiedad es **de sólo lectura**.

<!-- END REF -->

<!-- REF SystemWorkerClass.errors.Desc -->
## .errors

<!-- REF #SystemWorkerClass.errors.Syntax -->
**.errors** : Collection<!-- END REF -->

#### Descripción

La propiedad `.errors` <!-- REF #SystemWorkerClass.errors.Summary -->contiene una colección de errores 4D en caso de error(es) de ejecución, si los hay<!-- END REF -->.

Cada elemento de la colección es un objeto con las siguientes propiedades:

| Propiedad              | Tipo   | Descripción                                           |
| ---------------------- | ------ | ----------------------------------------------------- |
| [].errorCode           | number | Código de error 4D                                    |
| [].message             | text   | Descripción del error 4D                              |
| [ ].componentSignature | text   | Firma del componente interno que ha devuelto el error |

Si no se ha producido ningún error, `.errors` es indefinido.

<!-- END REF -->

<!-- REF SystemWorkerClass.exitCode.Desc -->
## .exitCode

<!-- REF #SystemWorkerClass.exitCode.Syntax -->
**.exitCode** : Integer<!-- END REF -->

#### Descripción

La propiedad `.exitCode` <!-- REF #SystemWorkerClass.exitCode.Summary -->contiene el código de salida devuelto por el proceso externo<!-- END REF -->. Si el proceso no terminó normalmente, `exitCode` es *undefined*.

Esta propiedad es **de sólo lectura**.

<!-- END REF -->

<!-- REF SystemWorkerClass.hideWindow.Desc -->
## .hideWindow

<!-- REF #SystemWorkerClass.hideWindow.Syntax -->
**.hideWindow** : Boolean<!-- END REF -->

#### Descripción

La propiedad `.hideWindow` <!-- REF #SystemWorkerClass.hideWindow.Summary -->puede utilizarse para ocultar la ventana de la consola DOS o la ventana del ejecutable lanzado (**Sólo para Windows**)<!-- END REF -->.

<!-- END REF -->

Esta propiedad es **lectura-escritura**.

<!-- REF SystemWorkerClass.pid.Desc -->
## .pid

<!-- REF #SystemWorkerClass.pid.Syntax -->
**.pid** : Integer<!-- END REF -->

#### Descripción

La propiedad `.pid` <!-- REF #SystemWorkerClass.pid.Summary -->contiene el identificador único del proceso externo a nivel del sistema<!-- END REF -->.

Esta propiedad es **de sólo lectura**.

<!-- END REF -->

<!-- REF SystemWorkerClass.postMessage().Desc -->
## .postMessage()

<!-- REF #SystemWorkerClass.postMessage().Syntax -->
**.postMessage**( *message* : Text)<br/>**.postMessage**( *messageBLOB* : Blob)<!-- END REF -->


<!-- REF #SystemWorkerClass.postMessage().Params -->
| Parámetros  | Tipo |    | Descripción                                                         |
| ----------- | ---- |:--:| ------------------------------------------------------------------- |
| message     | Text | -> | Texto a escribir en el flujo de entrada (stdin) del proceso externo |
| messageBLOB | Blob | -> | Bytes escritos en el flujo de entrada|<!-- END REF -->

|

#### Descripción

La función `.postMessage()` <!-- REF #SystemWorkerClass.postMessage().Summary -->permite escribir en el flujo de entrada (stdin) del proceso externo<!-- END REF -->. En el parámetro *message*, pase el texto a escribir en *stdin*.

La función `.postMessage()` también acepta un valor de tipo Blob en *messageBLOB* para pasar en *stdin*, de modo que se pueden publicar datos binarios.

Puede utilizar la propiedad `.dataType` del objeto [options](#options-object) para que el cuerpo de la respuesta devuelva los valores Blob.

<!-- END REF -->

<!-- REF SystemWorkerClass.response.Desc -->
## .response

<!-- REF #SystemWorkerClass.response.Syntax -->
**.response** : Text<br/>**.response** : Blob<!-- END REF -->

#### Descripción

La propiedad `.response` <!-- REF #SystemWorkerClass.response.Summary -->contiene la concatenación de todos los datos devueltos una vez finalizada la solicitud<!-- END REF -->es decir, el mensaje completo recibido de la salida del proceso.

El tipo del mensaje se define según el atributo [`dataType`](#datatype).

Esta propiedad es **de sólo lectura**.

<!-- END REF -->

<!-- REF SystemWorkerClass.responseError.Desc -->
## .responseError

<!-- REF #SystemWorkerClass.responseError.Syntax -->
**.responseError** : Text<!-- END REF -->

#### Descripción

La propiedad `.responseError` <!-- REF #SystemWorkerClass.responseError.Summary -->contiene la concatenación de todos los errores devueltos, una vez finalizada la petición<!-- END REF -->.

<!-- END REF -->

<!-- REF SystemWorkerClass.terminate().Desc -->
## .terminate()

<!-- REF #SystemWorkerClass.terminate().Syntax -->
**.terminate**()<!-- END REF -->


<!-- REF #SystemWorkerClass.terminate().Params -->
| Parámetros | Tipo |  | Descripción                                             |
| ---------- | ---- |::| ------------------------------------------------------- |
|            |      |  | No requiere ningún parámetro|<!-- END REF -->

|

#### Descripción

La función `.terminate()` <!-- REF #SystemWorkerClass.terminate().Summary -->The `.terminate()` function<!-- END REF -->.

Esta función envía la instrucción de terminar y devolver el control al script en ejecución.

<!-- END REF -->

<!-- REF SystemWorkerClass.terminated.Desc -->
## .terminated

<!-- REF #SystemWorkerClass.terminated.Syntax -->
**.terminated** : Boolean<!-- END REF -->

#### Descripción

La propiedad `.terminated` <!-- REF #SystemWorkerClass.terminated.Summary -->contiene **true** si el proceso externo ha terminado<!-- END REF -->.

Esta propiedad es **de sólo lectura**.

<!-- END REF -->

<!-- REF SystemWorkerClass.timeout.Desc -->
## .timeout

<!-- REF #SystemWorkerClass.timeout.Syntax -->
**.timeout** : Integer<!-- END REF -->

#### Descripción

La propiedad `.timeout` <!-- REF #SystemWorkerClass.timeout.Summary -->contiene la duración en segundos antes de que el proceso externo sea eliminado si aún está vivo<!-- END REF -->.

Esta propiedad es **de sólo lectura**.

<!-- END REF -->

<!-- REF SystemWorkerClass.wait().Desc -->
## .wait()

<details><summary>Histórico</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
|             |                |

|19 R4|Añadido|

</details>

<!-- REF #SystemWorkerClass.wait().Syntax -->
**.wait**( {*timeout* : Real} ) : 4D.SystemWorker<!-- END REF -->


<!-- REF #SystemWorkerClass.wait().Params -->
| Parámetros | Tipo            |    | Descripción                                    |
| ---------- | --------------- |:--:| ---------------------------------------------- |
| timeout    | Real            | -> | Tiempo de espera (en segundos)                 |
| Result     | 4D.SystemWorker | <- | Objeto SystemWorker|<!-- END REF -->

|

#### Descripción

La función `.wait()` <!-- REF #SystemWorkerClass.wait().Summary -->espera hasta el final de la ejecución del `SystemWorker` o del *timeout* especificado<!-- END REF -->.

En *timeout*, pase un valor en segundos. El script `SystemWorker` esperará al proceso externo durante el tiempo definido en el parámetro *timeout*. Si omite el parámetro *timeout*, la ejecución del script esperará indefinidamente.

En realidad, `.wait()` espera hasta el final del procesamiento de la fórmula `onTerminate`, excepto si se alcanza el *timeout*. Si se alcanza el *timeout*, el `SystemWorker` no es eliminado.

Durante una ejecución de `.wait()` se ejecutan las funciones de retrollamada, especialmente las retrollamadas provienen de otros eventos o de otras instancias de `SystemWorker`. Se puede salir de un `.wait()` llamando a [`terminate()`](#terminate) desde una retrollamada.

Esta función devuelve el objeto SystemWorker.

> This function is not necessary if you created the `SystemWorker` form a 4D worker process.

<!-- END REF -->
