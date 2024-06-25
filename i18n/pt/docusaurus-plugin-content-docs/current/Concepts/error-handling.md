---
id: error-handling
title: Gestão de erros
---

O manejo de erros é o processo de antecipar e responder aos erros que possam ocorrer em sua aplicação. 4D oferece assistência completa à detecção e notificação de erros no tempo de execução, assim como a análise de suas condições.

Manejo de erros responde à duas necessidades principais:

- descobrir e consertar erros potenciais e bugs no código durante a fase de desenvolvimento,
- catching and recovering from unexpected errors in deployed applications; in particular, you can replace system error dialogs (disk full, missing file, etc.) with you own interface.

Basicamente, há duas maneiras de lidar com erros em 4D. Pode:

- [instalar un método de gestión de errores](#installing-an-error-handling-method), o
- use a [`Try()` keyword](#tryexpression) or a [`Try/Catch` structure](#trycatchend-try) before pieces of code that call a function, method, or expression that can throw an error.

:::tip Boas práticas

\> > É recomendado instalar um método de gerenciamento de erros em 4D Server, para todos os códigos rodando no servidor. Cuando 4D Server no se ejecuta [headless](../Admin/cli.md) (es decir, se lanza con su [ventana de administración](../ServerWindow/overview.md)), este método evitaría que se mostraran cajas de diálogo inesperadas en la máquina servidor. En modo sin interfaz, los errores se registran en el archivo [4DDebugLog](../Debugging/debugLogFiles.md#4ddebuglogtxt-standard) para su posterior análisis.

:::

## Erro ou status

Muchas funciones de clase 4D, como `entity.save()` o `transporter.send()`, devuelven un objeto _status_. Este objecto é utilizado para armazenar erros "previsíveis" no contexto do tempo de execução, por exemplo, palavra-passe inválida, entidade bloqueada, etc., que não interrompem a execução do programa. Esta categoria de erros pode ser tratada por código normal.

Outros erros "imprevisíveis" incluem erro de gravação em disco, falha de rede, ou em geral qualquer interrupção inesperada. Esta categoría de errores genera excepciones y debe gestionarse mediante un método de gestión de errores o una palabra clave `Try()`.

## Instalação de um método de gestão de erros

En 4D, todos los errores pueden ser detectados y manejados por métodos proyecto específicos, llamados **métodos de gestión de errores** (o **métodos de intercepción de errores**).

Uma vez instalados, os manipuladores de erros são automaticamente chamados em modo interpretado ou compilado em caso de erro na aplicação 4D ou num dos seus componentes. Um manipulador de erros diferente pode ser chamado em função do contexto de execução (ver abaixo).

To _install_ an error-handling project method, you just need to call the [`ON ERR CALL`](https://doc.4d.com/4dv19/help/command/en/page155.html) command with the project method name and (optionnally) scope as parameters. Por exemplo:

```4d
ON ERR CALL("IO_ERRORS") //Instala o método de gestão de erros
```

Para dejar de interceptar los errores en un contexto de ejecución y devolver la mano, llame `ON ERR CALL` con una cadena vacía:

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

- para el **proceso actual**- sólo se llamará a un gestor de errores local para los errores ocurridos en el proceso actual del proyecto actual,
- para **toda la aplicación**- se llamará a un gestor de errores global para todos los errores que se produzcan en el contexto de ejecución de la aplicación del proyecto actual,
- desde los **componentes**- este manejador de errores se define en un proyecto local y será llamado para todos los errores que ocurran en los componentes cuando no hayan sido ya interceptados por un manejador de componentes.

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

  - `Error` (entero largo): código de error
  - `Error method`(texto): nombre del método que ha provocado el error
  - `Error line` (entero largo): número de línea del método que ha provocado el error
  - `Error formula` (texto): fórmula del código 4D (texto bruto) que está en el origen del error.

:::info

4D mantiene automáticamente una serie de variables denominadas **variables sistema**, que responden a diferentes necesidades. Ver o manual da linguagem 4D\*.

:::

- the [`Last errors`](https://doc.4d.com/4dv19/help/command/en/page1799.html) command that returns a collection of the current stack of errors that occurred in the 4D application. You can also use the [`GET LAST ERROR STACK`](https://doc.4d.com/4dv19/help/command/en/page1015.html) command that returns the same information as arrays.
- el comando `Get call chain` que devuelve una colección de objetos que describen cada paso de la cadena de llamadas a métodos dentro del proceso actual.

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

Se quiser que a caixa de diálogo fique escondida, pode instalar um método de gestão de erros vazio. La variable sistema `Error` puede ser probada en cualquier método, es decir, fuera del método de gestión de errores:

```4d
ON ERR CALL("emptyMethod") //emptyMethod exists but is empty
$doc:=Open document( "myFile.txt")
If (Error=-43)
	ALERT("File not found.")
End if
ON ERR CALL("")
```

## Try(expression)

La sentencia `Try(expression)` permite probar una expresión de una sola línea en su contexto de ejecución real (incluyendo, en particular, los valores de las variables locales) e interceptar los errores que arroje para que no se muestre el diálogo de erro El uso de `Try(expression)` ofrece una manera fácil de manejar casos de error simples con un número muy bajo de líneas de código, y sin requerir un método de gestión de errores.

:::note

If you want to try a more complex code than a single-line expression, you might consider using a [`Try/Catch` structure](#trycatchend-try).

:::

La sintaxis formal de la declaración `Try(expresión)` es:

```4d

Try (expression) : any | Undefined

```

_expresion_ puede ser toda expresión válida.

Si se produce un error durante su ejecución, se intercepta y no se muestra ningún diálogo de error, si un [método de gestión de errores](#installing-an-error-handling-method) fue instalado o no antes de la llamada a `Try()`. Si _expression_ devuelve un valor, `Try()` devuelve el último valor evaluado, en caso contrario devuelve `Define`.

You can handle the error(s) using the [`Last errors`](https://doc.4d.com/4dv20/help/command/en/page1799.html) command. Si _expression_ arroja un error dentro de una pila de llamadas `Try()`, el flujo de ejecución se detiene y devuelve a la última ejecución `Try()` (la primera encontrada de nuevo en la pila de llamadas).

:::note

Si un [método de gestión de errores](#installing-an-error-handling-method) es instalado por _expression_, es llamado en caso de error.

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

3. Desea gestionar tanto los errores [previsibles como los no previsibles>](#error-or-status):

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

La estructura `Try...Catch...End try` permite probar el código de un bloque en su contexto de ejecución real (incluyendo, en particular, los valores de las variables locales) e interceptar los errores que lanza para que no se muestre el diálogo de error d

A diferencia de la palabra clave `Try(expression)` que evalúa una expresión de una sola línea, la estructura `Try...Catch...End try` permite evaluar cualquier bloque de código, desde el más simple al más complejo, sin necesidad de un método de gestión de  Además, el bloque `Catch` puede utilizarse para gestionar el error de forma personalizada.

La sintaxis formal de la estructura `Try...Catch...End try` es:

```4d

Try 
	statement(s) // Code to evaluate
Catch
	statement(s) // Code to execute in case of error
End try

```

El código entre las palabras clave `Try` y `Catch` se ejecuta en primer lugar, luego el flujo depende del error o errores encontrados durante esta ejecución.

- Si no se lanza ningún error, la ejecución del código continúa después de la palabra clave correspondiente `End try`. El código situado entre las palabras clave `Catch` y `End try` no se ejecuta.
- Si la ejecución del bloque de código arroja un error no diferido \*\*, el flujo de ejecución se detiene y ejecuta el bloque de código correspondiente `Catch`.
- Si la ejecución del bloque de código arroja un _error diferido_, el flujo de ejecución continúa hasta el final del bloque `Try` y luego ejecuta el bloque de código correspondiente `Catch`.

:::note

Si se lanza un error _diferido_ fuera del bloque `Try`, la ejecución del código continúa hasta el final del método o función.

:::

:::info

For more information on _deferred_ and _non-deferred_ errors, please refer to the [`throw`](https://doc.4d.com/4dv20R/help/command/en/page1805.html) command description.

:::

En el bloque de código `Catch`, puede gestionar los errores utilizando los comandos estándar de gestión de errores. The [`Last errors`](https://doc.4d.com/4dv20/help/command/en/page1799.html) function contains the last errors collection. En este bloque de código puede declarar [un método de gestión de errores](#installing-an-error-handling-method), en cuyo caso se llama en caso de error (de lo contrario se muestra el diálogo de error de 4D).

:::note

Si se instala un [método de gestión de errores](#installing-an-error-handling-method) en el código colocado entre las palabras clave `Try` y `Catch`, se llama en caso de error.

:::

### Exemplo

La combinación de transacciones y estructuras `Try...Catch...End try` permite escribir código seguro para funciones críticas.

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
