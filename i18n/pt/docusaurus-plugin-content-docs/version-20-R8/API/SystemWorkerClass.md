---
id: SystemWorkerClass
title: SystemWorker
---

System workers allow the 4D code to call any external process (a shell command, PHP, etc.) na mesma máquina. Os trabalhadores do sistema são chamados assíncronos. Ao utilizar os callbacks, 4D torna possível a comunicação de ambas as maneiras.

The `SystemWorker` class is available from the `4D` class store.

### Exemplo

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

### Resumo

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

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 19 R4   | Adicionado |

</details>

<!-- REF #4D.SystemWorker.new().Syntax -->**4D.SystemWorker.new** ( *commandLine* : Text { ; options : Object } ) : 4D.SystemWorker<!-- END REF -->

<!-- REF #4D.SystemWorker.new().Params -->

| Parâmetro   | Tipo                            |                             | Descrição                                                            |
| ----------- | ------------------------------- | :-------------------------: | -------------------------------------------------------------------- |
| commandLine | Text                            |              ->             | Linha de comando a executar                                          |
| options     | Object                          |              ->             | Parâmetros worker                                                    |
| resultado   | 4D.SystemWorker | <- | Novo System worker assíncrono ou nulo se o processo não for iniciado |

<!-- END REF -->

#### Descrição

The `4D.SystemWorker.new()` function <!-- REF #4D.SystemWorker.new().Summary -->creates and returns a `4D.SystemWorker` object that will execute the *commandLine* you passed as parameter to launch an external process<!-- END REF -->.

O objecto worker do sistema devolvido pode ser utilizado para postar mensagens ao worker e obter a saída do worker.

If an error occurs during the creation of the proxy object, the function returns a `null` object and an error is thrown.

In the *commandLine* parameter, pass the full path of the application's file to be executed (posix syntax), as well as any required arguments, if necessary. If you pass only the application name, 4D will use the `PATH` environment variable to locate the executable.

**Advertência**: esta função só pode lançar aplicações executáveis; não pode executar instruções que fazem parte da shell (intérprete de comandos). For example, under Windows it is not possible to use this command to execute the `dir` instruction.

#### Objeto *options*

In the *options* parameter, pass an object that can contain the following properties:

| Propriedade      | Tipo       | Por padrão | Descrição                                                                                                                                                                                                                                                                                                                                                                                                     |
| ---------------- | ---------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| onResponse       | Formula    | indefinido | Chamada de retorno para mensagens de worker do sistema. Esta chamada de retorno é chamada assim que a resposta completa é recebida. Recebe dois objectos como parâmetros (ver abaixo)                                                                                                                                                                      |
| onData           | Formula    | indefinido | Chamada de retorno para os dados do worker do sistema. Esta chamada de retorno é chamada cada vez que o worker do sistema recebe dados. Recebe dois objectos como parâmetros (ver abaixo)                                                                                                                                                                  |
| onDataError      | Formula    | indefinido | Callback for the external process errors (*stderr* of the external process). Recebe dois objectos como parâmetros (ver abaixo)                                                                                                                                                                                                                          |
| onError          | Formula    | indefinido | Chamada de retorno para erros de execução, devolvida pelo worker do sistema em caso de condições anormais de tempo de execução (erros de sistema). Recebe dois objectos como parâmetros (ver abaixo)                                                                                                                                                    |
| onTerminate      | Formula    | indefinido | Chamada de retorno quando o processo externo é terminado. Recebe dois objectos como parâmetros (ver abaixo)                                                                                                                                                                                                                                                                |
| timeout          | Number     | indefinido | Tempo em segundos antes de o processo ser terminado se ainda estiver vivo                                                                                                                                                                                                                                                                                                                                     |
| dataType         | Text       | "text"     | Tipo de conteúdo do corpo da resposta. Valores possíveis: "text" (predefinição), "blob".                                                                                                                                                                                                                                                   |
| encoding         | Text       | "UTF-8"    | Somente se `dataType="text"`. Codificação do conteúdo do corpo da resposta. Para obter a lista de valores disponíveis, consulte a descrição do comando [`CONVERT FROM TEXT`](https://doc.4d.com/4dv19R/help/command/en/page1011.html)                                                                                                                                         |
| variables        | Object     |            | Define variáveis de ambiente personalizadas para o system worker. Syntax: `variables.key=value`, where `key` is the variable name and `value` its value. Os valores são convertidos em cordas quando possível. O valor não pode conter um '='. Se não estiver definido, o system worker herda do ambiente 4D. |
| currentDirectory | Folder     |            | Directório de trabalho no qual o processo é executado                                                                                                                                                                                                                                                                                                                                                         |
| hideWindow       | Parâmetros | true       | (Windows) Esconder a janela de aplicação (se possível) ou a consola Windows                                                                                                                                                                                                                                                                                             |

Todas as funções de chamada de retorno recebem dois parâmetros de objectos. O seu conteúdo depende do retorno da chamada:

| Parâmetro                    | Tipo         | *onResponse* | *onData*        | *onDataError* | *onError*    | *onTerminate* |
| ---------------------------- | ------------ | ------------ | --------------- | ------------- | ------------ | ------------- |
| $param1                      | Object       | SystemWorker | SystemWorker    | SystemWorker  | SystemWorker | SystemWorker  |
| $param2.type | Text         | "response"   | "data"          | "error"       | "error"      | "termination" |
| $param2.data | Text ou Blob |              | dados recebidos | dados de erro |              |               |

Aqui está a sequência de chamadas de retorno:

1. `onData` e `onDataError` são executados uma ou várias vezes
2. se chamado, `onError` é executado uma vez (pára o processamento do system worker)
3. se não ocorreu nenhum erro, `onResponse` é executado uma vez
4. `onTerminate` é sempre executado uma vez

:::info

For the callback functions to be called when you do not use [`wait()`](#wait) (asynchronous call), the process must be a [worker](../Develop/processes.md#worker-processes) created with [`CALL WORKER`](https://doc.4d.com/4dv20/help/command/en/page1389.html), NOT [`New process`](https://doc.4d.com/4dv20/help/command/en/page317.html).

:::

#### Valor retornado

A função devolve um objecto system worker sobre o qual se pode chamar funções e propriedades da classe SystemWorker.

#### Exemplos no Windows

1. Para abrir o Bloco de Notas e abrir um documento específico:

```4d
var $sw : 4D.SystemWorker
var $options : Object
$options:=New object
$options.hideWindow:= False

$sw:=4D.SystemWorker.new ("C:\\WINDOWS\\notepad.exe C:\\Docs\\new folder\\res.txt";$options)
```

2. Executar npm instalar na consola:

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

3. Para lançar a aplicação Microsoft® Word® e abrir um documento específico:

```4d
$mydoc:="C:\\Program Files\\Microsoft Office\\Office15\\WINWORD.EXE C:\\Tempo\\output.txt"
var $sw : 4D.SystemWorker
$sw:=4D.SystemWorker.new($mydoc)
```

4. Para lançar um comando com o diretório atual e publicar uma mensagem:

```4d
var $param : Object
var $sys : 4D.SystemWorker

$param:=New object
$param.currentDirectory:=Folder(fk database folder)
$sys:=4D.SystemWorker.new("git commit -F -";$param)
$sys.postMessage("This is a postMessage")
$sys.closeInput()
```

5. Para permitir que o utilizador abra um documento externo no Windows:

```4d
$docname:=Select document("";"*.*";"Choose the file to open";0)
If(OK=1)
 var $sw : 4D.SystemWorker
 $sw:=4D.SystemWorker.new("cmd.exe /C start \"\" \""+$docname+"\"")
End if
```

#### Exemplos em macOS

1. Edit a text file (`cat` is the macOS command used to edit files). Neste exemplo, o caminho de acesso completo do comando é passado:

```4d

var $sw : 4D.SystemWorker
$sw:=4D.SystemWorker.new("/bin/cat /folder/myfile.txt")
$sw.wait() //execução síncrona

```

2. To launch an independent "graphic" application, it is preferable to use the `open` system command (in this case, the code has the same effect as double-clicking the application):

```4d
var $sw : 4D.SystemWorker
$sw:=4D.SystemWorker.new ("open /Applications/Calculator.app")
```

3. Para obter o conteúdo da pasta "Users" (ls -l é o equivalente em macOS do comando dir em DOS).

```4d
var $systemworker : 4D.SystemWorker
var $output : Text
var $errors : Collection

$systemworker:=4D.SystemWorker.new("/bin/ls -l /Users ")
$systemworker.wait(5)
$output:=$systemworker.response
$error:=$systemworker.errors

```

4. O mesmo comando que acima, mas usando uma amostra de classe de utilizador "Params" para mostrar como lidar com as funções de callback:

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

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 19 R4   | Adicionado |

</details>

<!-- REF #SystemWorkerClass.closeInput().Syntax -->**.closeInput**()<!-- END REF -->

<!-- REF #SystemWorkerClass.closeInput().Params -->

| Parâmetro | Tipo |     | Descrição                  |
| --------- | ---- | :-: | -------------------------- |
|           |      |     | Não exige nenhum parâmetro |

<!-- END REF -->

#### Descrição

The `.closeInput()` function <!-- REF #SystemWorkerClass.closeInput().Summary -->closes the input stream (*stdin*) of the external process<!-- END REF -->.

When the executable waits for all data to be received through `postMessage()`, `.closeInput()` is useful to indicate to the executable that data sending is finished and that it can proceed.

#### Exemplo

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

#### Descrição

The `.commandLine` property <!-- REF #SystemWorkerClass.commandLine.Summary -->contains the command line passed as parameter to the [`new()`](#4d-systemworker-new) function<!-- END REF -->.

Essa propriedade é **somente leitura**.

<!-- END REF -->

<!-- REF SystemWorkerClass.currentDirectory.Desc -->

## .currentDirectory

<!-- REF #SystemWorkerClass.currentDirectory.Syntax -->

**.currentDirectory** : 4D.Folder<!-- END REF -->

#### Descrição

The `.currentDirectory` property <!-- REF #SystemWorkerClass.currentDirectory.Summary -->contains the working directory in which the external process is executed<!-- END REF -->.

<!-- END REF -->

<!-- REF SystemWorkerClass.dataType.Desc -->

## .dataType

<!-- REF #SystemWorkerClass.dataType.Syntax -->**.dataType** : Text<!-- END REF -->

#### Descrição

The `.dataType` property <!-- REF #SystemWorkerClass.dataType.Summary -->contains the type of the response body content<!-- END REF -->. Valores possíveis: "text" ou "blob".

Essa propriedade é **somente leitura**.

<!-- END REF -->

<!-- REF SystemWorkerClass.encoding.Desc -->

## .encoding

<!-- REF #SystemWorkerClass.encoding.Syntax -->**.encoding** : Text<!-- END REF -->

#### Descrição

The `.exitCode` property <!-- REF #SystemWorkerClass.exitCode.Summary -->contains the exit code returned by the external process<!-- END REF -->. Parâmetro

Essa propriedade é **somente leitura**.

<!-- END REF -->

<!-- REF SystemWorkerClass.errors.Desc -->

## .errors

<!-- REF #SystemWorkerClass.errors.Syntax -->**.errors** : Collection<!-- END REF -->

#### Descrição

The `.errors` property <!-- REF #SystemWorkerClass.errors.Summary -->contains a collection of 4D errors in case of execution error(s) if any<!-- END REF -->.

Cada elemento da coleção é um objeto com as seguintes propriedades:

| Propriedade                                                                                | Tipo   | Descrição                                            |
| ------------------------------------------------------------------------------------------ | ------ | ---------------------------------------------------- |
| [].errorCode           | number | Código de erro 4D                                    |
| [].message             | text   | Descrição do erro 4D                                 |
| [ ].componentSignature | text   | Assinatura da componente interna que devolveu o erro |

Se não ocorrer nenhum erro, `.errors` será undefined.

<!-- END REF -->

<!-- REF SystemWorkerClass.exitCode.Desc -->

## .exitCode

<!-- REF #SystemWorkerClass.exitCode.Syntax -->**.exitCode** : Integer<!-- END REF -->

#### Descrição

Parâmetro Se o processo não tiver terminado normalmente, `exitCode` é *undefined*.

Essa propriedade é **somente leitura**.

<!-- END REF -->

<!-- REF SystemWorkerClass.hideWindow.Desc -->

## .hideWindow

<!-- REF #SystemWorkerClass.hideWindow.Syntax -->**.hideWindow** : Boolean<!-- END REF -->

#### Descrição

The `.hideWindow` property <!-- REF #SystemWorkerClass.hideWindow.Summary -->can be used to hide the window of the DOS console or the window of the launched executable (**Windows only**)<!-- END REF -->.

<!-- END REF -->

Essa propriedade é **leitura-escrita**.

<!-- REF SystemWorkerClass.pid.Desc -->

## .pid

<!-- REF #SystemWorkerClass.pid.Syntax -->**.pid** : Integer<!-- END REF -->

#### Descrição

The `.pid` property <!-- REF #SystemWorkerClass.pid.Summary -->contains the process unique identifier of the external process at the system level<!-- END REF -->.

Essa propriedade é **somente leitura**.

<!-- END REF -->

<!-- REF SystemWorkerClass.postMessage().Desc -->

## .postMessage()

<!-- REF #SystemWorkerClass.postMessage().Syntax -->**.postMessage**( *message* : Text)<br/>**.postMessage**( *messageBLOB* : Blob)<!-- END REF -->

<!-- REF #SystemWorkerClass.postMessage().Params -->

| Parâmetro   | Tipo |     | Descrição                                                                              |
| ----------- | ---- | :-: | -------------------------------------------------------------------------------------- |
| message     | Text |  -> | Texto para escrever no fluxo de entrada (stdin) do processo externo |
| messageBLOB | Blob |  -> | Bytes escritos no fluxo de entrada                                                     |

<!-- END REF -->

#### Descrição

Parâmetro No parâmetro *message*, passe o texto a ser escrito em *stdin*.

The `.postMessage()` function also accepts a Blob type value in *messageBLOB* to pass in *stdin*, so that you can post binary data.

You can use the `.dataType` property of the [options object](#options-object) to make response body return Blob values.

<!-- END REF -->

<!-- REF SystemWorkerClass.response.Desc -->

## .response

<!-- REF #SystemWorkerClass.response.Syntax -->**.response** : Text<br/>**.response** : Blob<!-- END REF -->

#### Descrição

The `.response` property <!-- REF #SystemWorkerClass.response.Summary -->contains the concatenation of all data returned once the request is terminated<!-- END REF -->, i.e. the full message received from the process output.

O tipo da mensagem é definido conforme o atributo [`dataType`](#datatype).

Essa propriedade é **somente leitura**.

<!-- END REF -->

<!-- REF SystemWorkerClass.responseError.Desc -->

## .responseError

<!-- REF #SystemWorkerClass.responseError.Syntax -->**.responseError** : Text<!-- END REF -->

#### Descrição

The `.responseError` property <!-- REF #SystemWorkerClass.responseError.Summary -->contains the concatenation of all the errors returned, once the request is terminated<!-- END REF -->.

<!-- END REF -->

<!-- REF SystemWorkerClass.terminate().Desc -->

## .terminate()

<!-- REF #SystemWorkerClass.terminate().Syntax -->**.terminate**()<!-- END REF -->

<!-- REF #SystemWorkerClass.terminate().Params -->

| Parâmetro | Tipo |     | Descrição                  |
| --------- | ---- | :-: | -------------------------- |
|           |      |     | Não exige nenhum parâmetro |

<!-- END REF -->

#### Descrição

The `.terminate()` function <!-- REF #SystemWorkerClass.terminate().Summary -->forces the `SystemWorker` to terminate its execution<!-- END REF -->.

Esta função envia a instrução para terminar e devolver o controlo ao guião de execução.

<!-- END REF -->

<!-- REF SystemWorkerClass.terminated.Desc -->

## .terminated

<!-- REF #SystemWorkerClass.terminated.Syntax -->**.terminated** : Boolean<!-- END REF -->

#### Descrição

A propriedade `.terminated` <!-- REF #SystemWorkerClass.terminated.Summary -->contém **true** se o processo externo for encerrado<!-- END REF -->.

Essa propriedade é **somente leitura**.

<!-- END REF -->

<!-- REF SystemWorkerClass.timeout.Desc -->

## .timeout

<!-- REF #SystemWorkerClass.timeout.Syntax -->**.timeout** : Integer<!-- END REF -->

#### Descrição

The `.timeout` property <!-- REF #SystemWorkerClass.timeout.Summary -->contains the duration in seconds before the external process will be killed if it is still alive<!-- END REF -->.

Essa propriedade é **somente leitura**.

<!-- END REF -->

<!-- REF SystemWorkerClass.wait().Desc -->

## .wait()

<details><summary>História</summary>

| Release | Mudanças |
| ------- | -------- |

|19 R4|Adicionado|

</details>

<!-- REF #SystemWorkerClass.wait().Syntax -->**.wait**( {*timeout* : Real} ) : 4D.SystemWorker<!-- END REF -->

<!-- REF #SystemWorkerClass.wait().Params -->

| Parâmetro  | Tipo                            |                             | Descrição                                        |
| ---------- | ------------------------------- | :-------------------------: | ------------------------------------------------ |
| timeout    | Real                            |              ->             | Tempo de espera (em segundos) |
| Resultados | 4D.SystemWorker | <- | Objecto SystemWorker                             |

<!-- END REF -->

#### Descrição

The `.wait()` function <!-- REF #SystemWorkerClass.wait().Summary -->waits until the end of the `SystemWorker` execution or the specified *timeout*<!-- END REF -->.

Em *timeout*, passe um valor em segundos. The `SystemWorker` script will wait for the external process for the amount of time defined in the *timeout* parameter. If you omit the *timeout* parameter, the script execution will wait indefinitely.

Actually, `.wait()` waits until the end of processing of the `onTerminate` formula, except if the *timeout* is reached. Se *timeout* for alcançado, o `SystemWorker` não é morto.

During a `.wait()` execution, callback functions are executed, especially callbacks from other events or from other `SystemWorker` instances. Você pode sair de um `.wait()` chamando [`terminate()`](#terminate) de um retorno de chamada.

Esta função devolve o objecto SystemWorker.

> This function is not necessary if you created the `SystemWorker` from a 4D worker process.

<!-- END REF -->
