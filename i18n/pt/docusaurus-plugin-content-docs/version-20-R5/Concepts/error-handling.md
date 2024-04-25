---
id: error-handling
title: Gestão de erros
---

O manejo de erros é o processo de antecipar e responder aos erros que possam ocorrer em sua aplicação. 4D oferece assistência completa à detecção e notificação de erros no tempo de execução, assim como a análise de suas condições.

Manejo de erros responde à duas necessidades principais:

- descobrir e consertar erros potenciais e bugs no código durante a fase de desenvolvimento,
- catching and recovering from unexpected errors in deployed applications; in particular, you can replace system error dialogs (disk full, missing file, etc.) with you own interface.

Basicamente, há duas maneiras de lidar com erros em 4D. Pode:

- [install an error-handling method](#installing-an-error-handling-method), or
- use a [`Try()` keyword](#tryexpression) or a [`Try/Catch` structure](#trycatchend-try) before pieces of code that call a function, method, or expression that can throw an error.

:::tip Good practice

\> > É recomendado instalar um método de gerenciamento de erros em 4D Server, para todos os códigos rodando no servidor. When 4D Server is not running [headless](../Admin/cli.md) (i.e. launched with its [administration window](../ServerWindow/overview.md)), this method would avoid unexpected dialog boxes to be displayed on the server machine. In headless mode, errors are logged in the [4DDebugLog file](../Debugging/debugLogFiles.md#4ddebuglogtxt-standard) for further analysis.

:::

## Erro ou status

Many 4D class functions, such as `entity.save()` or `transporter.send()`, return a _status_ object. Este objecto é utilizado para armazenar erros "previsíveis" no contexto do tempo de execução, por exemplo, palavra-passe inválida, entidade bloqueada, etc., que não interrompem a execução do programa. Esta categoria de erros pode ser tratada por código normal.

Outros erros "imprevisíveis" incluem erro de gravação em disco, falha de rede, ou em geral qualquer interrupção inesperada. This category of errors generates exceptions and needs to be handled through an error-handling method or a `Try()` keyword.

## Instalação de um método de gestão de erros

In 4D, all errors can be caught and handled by specific project methods, named **error-handling** (or **error-catching**) methods.

Uma vez instalados, os manipuladores de erros são automaticamente chamados em modo interpretado ou compilado em caso de erro na aplicação 4D ou num dos seus componentes. Um manipulador de erros diferente pode ser chamado em função do contexto de execução (ver abaixo).

To _install_ an error-handling project method, you just need to call the [`ON ERR CALL`](https://doc.4d.com/4dv19/help/command/en/page155.html) command with the project method name and (optionnally) scope as parameters. Por exemplo:

```4d
ON ERR CALL("IO_ERRORS") //Instala o método de gestão de erros
```

To stop catching errors for an execution context and give back hand, call `ON ERR CALL` with an empty string:

```4d
ON ERR CALL("";ek local) // dá o controle para o processo local
```

The  [`Method called on error`](https://doc.4d.com/4dv20/help/command/en/page704.html) command allows you to know the name of the method installed by `ON ERR CALL` for the current process. É particularmente útil no contexto dos componentes porque permite mudar temporariamente e depois restaurar o método de captura de erros do banco de dados local:

```4d
 $methCurrent:=Method called on error(ek local)
 ON ERR CALL("NewMethod";ek local)
  //If the document cannot be opened, an error is generated
 $ref:=Open document("MyDocument")
  //Reinstallation of previous method
 ON ERR CALL($methCurrent;ek local)

```

### Alcance e componentes

Um método de tratamento de erros pode ser definido para diferentes contextos de execução:

- for the **current process**- a local error handler will be only called for errors that occurred in the current process of the current project,
- for the **whole application**- a global error handler will be called for all errors that occurred in the application execution context of the current project,
- from the **components**- this error handler is defined in a host project and will be called for all errors that occurred in the components when they were not already caught by a component handler.

Exemplos:

```4d
ON ERR CALL("IO_Errors";ek local) //Instala um método local de tratamento de erros ON ERR CALL("globalHandler";ek global) //Instala um método global de tratamento de erros ON ERR CALL("componentHandler";ek erros de componentes) //Instala um método de tratamento de erros de componentes
```

Pode instalar um gerenciador de erros global que servirá como "fallback" e métodos de erros locais específicos para certos processos. Um manipulador de erros global é também útil no servidor para evitar diálogos de erro no servidor quando executado com interface.

Pode definir um único método de captura de erros para toda a aplicação ou diferentes métodos por módulo de aplicação. Entretanto, apenas um método pode ser instalado por processo.

Quando ocorre um erro, apenas um método é chamado, como descrito no diagrama seguinte:

![error management](../assets/en/Concepts/error-schema.png)

### Manejo de erros dentro do método

Within the custom error method, you have access to several pieces of information that will help you identifying the error:

- variáveis sistema (\*):

  - `Error` (longint): error code
  - `Error method` (text): name of the method that triggered the error
  - `Error line` (longint): line number in the method that triggered the error
  - `Error formula` (text): formula of the 4D code (raw text) which is at the origin of the error.

:::info

4D automatically maintains a number of variables called **system variables**, meeting different needs. Ver o manual da linguagem 4D\*.

:::

- the [`Last errors`](https://doc.4d.com/4dv19/help/command/en/page1799.html) command that returns a collection of the current stack of errors that occurred in the 4D application. You can also use the [`GET LAST ERROR STACK`](https://doc.4d.com/4dv19/help/command/en/page1015.html) command that returns the same information as arrays.
- the `Get call chain` command that returns a collection of objects describing each step of the method call chain within the current process.

#### Exemplo

Aqui está um sistema de gestão de erros simples:

```4d
//instalar o método de gestão de erros
 ON ERR CALL("errorMethod")
 //... executar o código
 ON ERR CALL("") //retorna o controle para 4D
```

```4d
// errorMethod project method
 If(Error#1006) //this is not a user interruption
    ALERT("The error "+String(Error)+" occurred". The code in question is: \""+Error formula+"\"")
 End if
```

### Utilizar um método de gestão de erro vazio

Se quiser que a caixa de diálogo fique escondida, pode instalar um método de gestão de erros vazio. The `Error` system variable can be tested in any method, i.e. outside of the error-handling method:

```4d
ON ERR CALL("emptyMethod") //emptyMethod exists but is empty
$doc:=Open document( "myFile.txt")
If (Error=-43)
	ALERT("File not found.")
End if
ON ERR CALL("")
```

## Try(expression)

The `Try(expression)` statement allows you to test a single-line expression in its actual execution context (including, in particular, local variable values) and to intercept errors it throws so that the 4D error dialog box is not displayed. Using `Try(expression)` provides an easy way to handle simple error cases with a very low number of code lines, and without requiring an error-handling method.

:::note

If you want to try a more complex code than a single-line expression, you might consider using a [`Try/Catch` structure](#trycatchend-try).

:::

The formal syntax of the `Try(expression)` statement is:

```4d

Try (expression) : any | Undefined

```

_expression_ can be any valid expression.

If an error occurred during its execution, it is intercepted and no error dialog is displayed, whether an [error-handling method](#installing-an-error-handling-method) was installed or not before the call to `Try()`. If _expression_ returns a value, `Try()` returns the last evaluated value, otherwise it returns `Undefined`.

You can handle the error(s) using the [`Last errors`](https://doc.4d.com/4dv20/help/command/en/page1799.html) command. If _expression_ throws an error within a stack of `Try()` calls, the execution flow stops and returns to the latest executed `Try()` (the first found back in the call stack).

:::note

If an [error-handling method](#installing-an-error-handling-method) is installed by _expression_, it is called in case of error.

:::

### Exemplos

1. You want to display the contents of a file if the file can be open without error, and if its contents can be read. Você pode escrever:

```4d
var $text : Text
var $file : 4D.File := File("/RESOURCES/myFile.txt")
var $fileHandle : 4D.FileHandle := Try($file.open())
If ($fileHandle # Null)
  $text:=Try($fileHandle.readText()) || "Erro ao ler o arquivo"
End if
```

2. Você deseja tratar o erro de divisão por zero. Nesse caso, você deseja retornar 0 e lançar um erro:

```4d
function divide( $p1: real; $p2: real)-> $result: real
  if ($p2=0)
     $result:=0 //only for clarity (0 is the default for reals)
     throw(-12345; "Division by zero")
  else
    $result:=$p1/$p2
  end if

function test()
  $result:=Try(divide($p1;$p2))
  If (Last errors # null)
    ALERT("Error")
  End if

```

3. You want to handle both [predictable and non-predictable](#error-or-status) errors:

```4d
var $e:=ds.Employee.new()
$e.name:="Smith"
$status:=Try($e.save()) //catch predictable and non-predictable errors
If ($status.success)
   ALERT( "Success")
Else
   ALERT( "Error: "+JSON Stringify($status.errors))
End if

```

## Try...Catch...End try

The `Try...Catch...End try` structure allows you to test a block code in its actual execution context (including, in particular, local variable values) and to intercept errors it throws so that the 4D error dialog box is not displayed.

Unlike the `Try(expression)` keyword that evaluates a single-line expression, the `Try...Catch...End try` structure allows you to evaluate any code block, from the most simple to the most complex, without requiring an error-handling method. In addition, the `Catch` block can be used to handle the error in any custom way.

The formal syntax of the `Try...Catch...End try` structure is:

```4d

Try 
	statement(s) // Code to evaluate
Catch
	statement(s) // Code to execute in case of error
End try

```

The code placed between the `Try` and the `Catch` keywords is first executed, then the flow depends on the error(s) encountered during this execution.

- If no error is thrown, the code execution continues after the corresponding `End try` keyword. The code placed between the `Catch` and the `End try` keywords is not executed.
- If the code block execution throws a _non-deferred error_, the execution flow stops and executes the corresponding `Catch` code block.
- If the code block execution throws a _deferred error_, the execution flow continues until the end of the `Try` block and then executes the corresponding `Catch` code block.

:::note

If a _deferred_ error is thrown outside of the `Try` block, the code execution continues until the end of the method or function.

:::

:::info

For more information on _deferred_ and _non-deferred_ errors, please refer to the [`throw`](https://doc.4d.com/4dv20R/help/command/en/page1805.html) command description.

:::

In the `Catch` code block, you can handle the error(s) using standard error handling commands. The [`Last errors`](https://doc.4d.com/4dv20/help/command/en/page1799.html) function contains the last errors collection. You can [declare an error-handling method](#installing-an-error-handling-method) in this code block, in which case it is called in case of error (otherwise the 4D error dialog box is displayed).

:::note

If an [error-handling method](#installing-an-error-handling-method) is installed in the code placed between the `Try` and the `Catch` keywords, it is called in case of error.

:::

### Exemplo

Combining transactions and `Try...Catch...End try` structures allows writing secured code for critical features.

```4d
Function createInvoice($customer : cs.customerEntity; $items : Collection; $invoiceRef : Text) : cs.invoiceEntity
	var $newInvoice : cs.invoiceEntity
	var $newInvoiceLine : cs.invoiceLineEntity
	var $item : Object
	ds.startTransaction()
	Try
		$newInvoice:=This.new()
		$newInvoice.customer:=$customer
		$newInvoice.invoiceRef:=$invoiceRef
		For each ($item; $items)
			$newInvoiceLine:=ds.invoiceLine.new()
			$newInvoiceLine.item:=$item.item
			$newInvoiceLine.amount:=$item.amount
			$newInvoiceLine.invoice:=$newInvoice
			//call other specific functions to validate invoiceline
			$newInvoiceLine.save()
		End for each 
		$newInvoice.save()
		ds.validateTransaction()
	Catch
		ds.cancelTransaction()
		ds.logErrors(Last errors)
		$newInvoice:=Null
	End try
	return $newInvoice

```
