---
id: SystemWorkerClass
title: SystemWorker
---

Os System workers permitem que o código 4D chame qualquer processo externo (um comando shell, PHP, etc.) na mesma máquina. Os trabalhadores do sistema são chamados assíncronos. Ao utilizar os callbacks, 4D torna possível a comunicação de ambas as maneiras.

A classe `SystemWorker` está disponível no class store `4D`.

### Exemplo

```4d
    // Exemplo Windows para obter acesso à informação ipconfig
var $myWinWorker : 4D.SystemWorker
var $ipConfig : Text
$myWinWorker:= 4D.SystemWorker.new("ipconfig")
$ipConfig:=$myWinWorker.wait(1).response //timeout 1 second

    // exemplo macOS para mudar as permissões de um ficheiro no macOS
    // chmod é o comando macOS usado para modificar o acesso a ficheiros
var $myMacWorker : 4D.SystemWorker
$myMacWorker:= 4D.SystemWorker.new("chmod +x /folder/myfile.sh")

```

### Resumo

|                                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #4D.SystemWorker.new().Syntax -->](#4dsystemworkernew)<br/><!-- INCLUDE #4D.SystemWorker.new().Summary -->                          |
| [<!-- INCLUDE #SystemWorkerClass.closeInput().Syntax -->](#closeinput)<br/><!-- INCLUDE #SystemWorkerClass.closeInput().Summary -->               |
| [<!-- INCLUDE #SystemWorkerClass.commandLine.Syntax -->](#commandline)<br/><!-- INCLUDE #SystemWorkerClass.commandLine.Summary -->                |
| [<!-- INCLUDE #SystemWorkerClass.currentDirectory.Syntax -->](#currentdirectory)<br/><!-- INCLUDE #SystemWorkerClass.currentDirectory.Summary --> |
| [<!-- INCLUDE #SystemWorkerClass.dataType.Syntax -->](#datatype)<br/><!-- INCLUDE #SystemWorkerClass.dataType.Summary -->                         |
| [<!-- INCLUDE #SystemWorkerClass.encoding.Syntax -->](#encoding)<br/><!-- INCLUDE #SystemWorkerClass.encoding.Summary -->                         |
| [<!-- INCLUDE #SystemWorkerClass.errors.Syntax -->](#errors)<br/><!-- INCLUDE #SystemWorkerClass.errors.Summary -->                               |
| [<!-- INCLUDE #SystemWorkerClass.exitCode.Syntax -->](#exitcode)<br/><!-- INCLUDE #SystemWorkerClass.exitCode.Summary -->                         |
| [<!-- INCLUDE #SystemWorkerClass.hideWindow.Syntax -->](#hidewindow)<br/><!-- INCLUDE #SystemWorkerClass.hideWindow.Summary -->                   |
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

A função `4D.SystemWorker.new()` <!-- REF #4D.SystemWorker.new().Summary --> cria e retorna um objeto `4D.SystemWorker` que executará o *commandLine* que você passou como parâmetro para iniciar um processo externo <!-- END REF -->.

O objecto worker do sistema devolvido pode ser utilizado para postar mensagens ao worker e obter a saída do worker.

Se ocorrer um erro durante a criação do objeto proxy, a função retornará um objeto `null` e um erro será lançado.

No parâmetro *commandLine*, passe o caminho completo do arquivo do aplicativo a ser executado (sintaxe posix), bem como os argumentos necessários, se for o caso. Se você passar apenas o nome da aplicação, o 4D usará a variável de ambiente `PATH` para localizar o executável.

**Advertência**: esta função só pode lançar aplicações executáveis; não pode executar instruções que fazem parte da shell (intérprete de comandos). Por exemplo, no Windows não é possível usar este comando para executar a instrução `dir`.

#### Objeto *options*

No parâmetro *options*, passe um objeto que possa conter as seguintes propriedades:

| Propriedade      | Tipo       | Por padrão | Descrição                                                                                                                                                                                                                                                                                                                                                                                                     |
| ---------------- | ---------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| onResponse       | Formula    | indefinido | Chamada de retorno para mensagens de worker do sistema. Esta chamada de retorno é chamada assim que a resposta completa é recebida. Recebe dois objectos como parâmetros (ver abaixo)                                                                                                                                                                      |
| onData           | Formula    | indefinido | Chamada de retorno para os dados do worker do sistema. Esta chamada de retorno é chamada cada vez que o worker do sistema recebe dados. Recebe dois objectos como parâmetros (ver abaixo)                                                                                                                                                                  |
| onDataError      | Formula    | indefinido | Callback para os erros do processo externo (*stderr* do processo externo). Recebe dois objectos como parâmetros (ver abaixo)                                                                                                                                                                                                                            |
| onError          | Formula    | indefinido | Chamada de retorno para erros de execução, devolvida pelo worker do sistema em caso de condições anormais de tempo de execução (erros de sistema). Recebe dois objectos como parâmetros (ver abaixo)                                                                                                                                                    |
| onTerminate      | Formula    | indefinido | Chamada de retorno quando o processo externo é terminado. Recebe dois objectos como parâmetros (ver abaixo)                                                                                                                                                                                                                                                                |
| timeout          | Number     | indefinido | Tempo em segundos antes de o processo ser terminado se ainda estiver vivo                                                                                                                                                                                                                                                                                                                                     |
| dataType         | Text       | "text"     | Tipo de conteúdo do corpo da resposta. Valores possíveis: "text" (predefinição), "blob".                                                                                                                                                                                                                                                   |
| encoding         | Text       | "UTF-8"    | Somente se `dataType="text"`. Codificação do conteúdo do corpo da resposta. Para obter a lista de valores disponíveis, consulte a descrição do comando [`CONVERT FROM TEXT`](https://doc.4d.com/4dv19R/help/command/en/page1011.html)                                                                                                                                         |
| variables        | Object     |            | Define variáveis de ambiente personalizadas para o system worker. Sintaxe: `variáveis.key=valor`, onde `chave` é o nome da variável e `valor` seu valor. Os valores são convertidos em cordas quando possível. O valor não pode conter um '='. Se não estiver definido, o system worker herda do ambiente 4D. |
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

Para as funções de callback serem chamadas quando você não usa [`wait()`](#wait) (chamada assíncrona), o processo deve ser um [worker](../Develop/processes.md#worker-processes) criado com [`CALL WORKER`](https://doc.4d.com/4dv20/help/command/en/page1389.html), NÃO [`New process`](https://doc.4d.com/4dv20/help/command/en/page317.html).

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

1. Editar um arquivo de texto (`cat` é o comando macOS utilizado para editar os arquivos). Neste exemplo, o caminho de acesso completo do comando é passado:

```4d

var $sw : 4D.SystemWorker
$sw:=4D.SystemWorker.new("/bin/cat /folder/myfile.txt")
$sw.wait() //execução síncrona

```

2. Para lançar uma aplicação "gráfica" independente, é preferível utilizar o comando do sistema `open` (neste caso, o código tem o mesmo efeito que um duplo clique na aplicação):

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

A função `.closeInput()` <!-- REF #SystemWorkerClass.closeInput().Summary -->fecha o fluxo de entrada (*stdin*) do processo externo<!-- END REF -->.

Quando o executável espera que todos os dados sejam recebidos por `postMessage()`, `.closeInput()` é útil para indicar ao executável que o envio de dados foi concluído e ele poder prosseguir.

#### Exemplo

```4D
// Crie alguns dados para gzip
var $input;$output : Blob
var $gzip : Text
TEXT TO BLOB("Hello, World!";$input)
$gzip:="\"C:\\Program Files (x86)\\GnuWin32\\bin\\gzip.exe\" "

// Criar um system worker assíncrono
var $worker : 4D.SystemWorker
$worker:= 4D.SystemWorker.new($gzip;New object("dataType"; "blob"))

// Envie o arquivo compactado para stdin.
$worker.postMessage($input)
// Observe que chamamos closeInput() para indicar que terminamos.
// O gzip (e a maioria dos programas que aguardam dados do stdin) aguardará mais dados até que a entrada seja explicitamente fechada.
$worker.closeInput()
$worker.wait()

$output:=$worker.response

```

<!-- END REF -->

<!-- REF SystemWorkerClass.commandLine.Desc -->

## .commandLine

<!-- REF #SystemWorkerClass.commandLine.Syntax -->**.commandLine** : Text<!-- END REF -->

#### Descrição

A propriedade `.commandLine` <!-- REF #SystemWorkerClass.commandLine.Summary -->contém a linha de comando passada como parâmetro para a função [`new()`](#4dsystemworkernew)<!-- END REF -->.

Essa propriedade é **somente leitura**.

<!-- END REF -->

<!-- REF SystemWorkerClass.currentDirectory.Desc -->

## .currentDirectory

<!-- REF #SystemWorkerClass.currentDirectory.Syntax -->**.currentDirectory** : 4D.Folder<!-- END REF -->

#### Descrição

A propriedade `.currentDirectory` <!-- REF #SystemWorkerClass.currentDirectory.Summary -->contém o diretório de trabalho no qual o processo externo é executado<!-- END REF -->.

<!-- END REF -->

<!-- REF SystemWorkerClass.dataType.Desc -->

## .dataType

<!-- REF #SystemWorkerClass.dataType.Syntax -->**.dataType** : Text<!-- END REF -->

#### Descrição

A propriedade `.dataType` <!-- REF #SystemWorkerClass.dataType.Summary -->contém o tipo de conteúdo do corpo de resposta <!-- END REF -->. Valores possíveis: "text" ou "blob".

Essa propriedade é **somente leitura**.

<!-- END REF -->

<!-- REF SystemWorkerClass.encoding.Desc -->

## .encoding

<!-- REF #SystemWorkerClass.encoding.Syntax -->**.encoding** : Text<!-- END REF -->

#### Descrição

A propriedade <!-- REF #SystemWorkerClass.encoding.Summary -->contém a codificação do conteúdo do corpo da resposta<!-- END REF -->. Esta propriedade só estará disponível se o [`dataType`](#datatype) for "text".

Essa propriedade é **somente leitura**.

<!-- END REF -->

<!-- REF SystemWorkerClass.errors.Desc -->

## .errors

<!-- REF #SystemWorkerClass.errors.Syntax -->**.errors** : Collection<!-- END REF -->

#### Descrição

A propriedade `.errors` <!-- REF #SystemWorkerClass.errors.Summary -->contém uma coleção de erros 4D em caso de erro(s) de execução(ões) se algum<!-- END REF -->.

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

A propriedade `.exitCode` <!-- REF #SystemWorkerClass.exitCode.Summary -->contém o código de saída retornado pelo processo externo<!-- END REF -->. Parâmetro Parâmetro Parâmetro Se o processo não tiver terminado normalmente, `exitCode` é *undefined*.

Essa propriedade é **somente leitura**.

<!-- END REF -->

<!-- REF SystemWorkerClass.hideWindow.Desc -->

## .hideWindow

<!-- REF #SystemWorkerClass.hideWindow.Syntax -->**.hideWindow** : Boolean<!-- END REF -->

#### Descrição

A propriedade `.hideWindow` <!-- REF #SystemWorkerClass.hideWindow.Summary -->pode ser usado para ocultar a janela do console DOS ou a janela do executável (**apenas Windows**)<!-- END REF -->.

<!-- END REF -->

Essa propriedade é **leitura-escrita**.

<!-- REF SystemWorkerClass.pid.Desc -->

## .pid

<!-- REF #SystemWorkerClass.pid.Syntax -->**.pid** : Integer<!-- END REF -->

#### Descrição

A propriedade `.pid` <!-- REF #SystemWorkerClass.pid.Summary -->contém o identificador exclusivo do processo externo no nível do sistema<!-- END REF -->.

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

A função `.postMessage()` <!-- REF #SystemWorkerClass.postMessage().Summary --> permite que você escreva no fluxo de entrada (stdin) do processo externo<!-- END REF -->. No parâmetro *message*, passe o texto a ser escrito em *stdin*.

A função `.postMessage()` também aceita um valor de tipo Blob em *messageBLOB* para passar em *stdin*, para que você possa postar dados binários.

Você pode usar a propriedade `.dataType` do [objeto options](#options-object) para fazer o corpo da resposta retornar valores Blob.

<!-- END REF -->

<!-- REF SystemWorkerClass.response.Desc -->

## .response

<!-- REF #SystemWorkerClass.response.Syntax -->**.response** : Text<br/>**.response** : Blob<!-- END REF -->

#### Descrição

A propriedade `.response` <!-- REF #SystemWorkerClass.response. Resumo --> contém a concatenação de todos os dados retornados assim que o pedido for encerrado<!-- FIM REF -->, ou seja, a mensagem completa recebida da saída do processo.

O tipo da mensagem é definido conforme o atributo [`dataType`](#datatype).

Essa propriedade é **somente leitura**.

<!-- END REF -->

<!-- REF SystemWorkerClass.responseError.Desc -->

## .responseError

<!-- REF #SystemWorkerClass.responseError.Syntax -->**.responseError** : Text<!-- END REF -->

#### Descrição

A propriedade `.responseError` <!-- REF #SystemWorkerClass.responseError.Summary -->contém a concatenação de todos os erros retornados, uma vez que a solicitação é encerrada<!-- END REF -->.

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

A função `.terminate()` <!-- REF #SystemWorkerClass.terminate().summary --> força o `SystemWorker` a encerrar sua execução<!-- END REF -->.

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

A propriedade `.timeout` <!-- REF #SystemWorkerClass.timeout.Summary -->contém a duração em segundos antes que o processo externo seja encerrado se ainda estiver ativo<!-- END REF -->.

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

A função `.wait()` <!-- REF #SystemWorkerClass.wait().Summary -->aguarda até o final da execução do `SystemWorker` ou até o *timeout* especificado<!-- END REF -->.

Em *timeout*, passe um valor em segundos. O script `SystemWorker` aguardará o processo externo pelo período de tempo definido no parâmetro *timeout*. Se você omitir o parâmetro *timeout*, a execução do script aguardará indefinidamente.

Na verdade, `.wait()` aguarda até o final do processamento da fórmula `onTerminate`, exceto se o *timeout* for atingido. Se *timeout* for alcançado, o `SystemWorker` não é morto.

Durante uma execução `.wait()`, as funções de retorno de chamada são executadas, especialmente retornos de chamada de outros eventos ou de outras instâncias do `SystemWorker`. Você pode sair de um `.wait()` chamando [`terminate()`](#terminate) de um retorno de chamada.

Esta função devolve o objecto SystemWorker.

> Esta função não é necessária se você criou o `SystemWorker` de um processo de trabalho 4D.

<!-- END REF -->
