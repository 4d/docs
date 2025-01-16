---
id: error-handling
title: Gestão de erros
---

O manejo de erros é o processo de antecipar e responder aos erros que possam ocorrer em sua aplicação. 4D oferece assistência completa à detecção e notificação de erros no tempo de execução, assim como a análise de suas condições.

Manejo de erros responde à duas necessidades principais:

- descobrir e consertar erros potenciais e bugs no código durante a fase de desenvolvimento,
- capturando e recuperando de erros inesperados em aplicativos implementados; em particular, você pode substituir caixas de diálogo de erro do sistema (disco cheio, arquivo em falta, etc.) com sua própria interface.

Basicamente, há duas maneiras de lidar com erros em 4D. Pode:

- [instalar un método de gestión de errores](#installing-an-error-handling-method), o
- use uma palavra-chave [`Try()`](#tryexpression) ou uma estrutura [`Try/Catch`](#trycatchend-try) antes de pedaços de código que chamem uma função, método ou expressão que possam lançar um erro.

:::tip Boas práticas

\> > É recomendado instalar um método de gerenciamento de erros em 4D Server, para todos os códigos rodando no servidor. Quando o servidor 4D não estiver executando [headless](../Admin/cli.md) (ou seja, inicializado com sua [janela de administração](.. ServerWindow/overview.md)), este método evitaria caixas de diálogo inesperadas a serem exibidas na máquina do servidor. No modo headless, erros são registrados no [arquivo 4DDebugLog](../Depuring/debugLogFiles.md#4ddebuglogtxt-standard) para análise posterior.

:::

## Erro ou status

Muitas funções de classe 4D, tais como `entity.save()` ou `transporter.send()`, retornam um objeto de _status_. Este objecto é utilizado para armazenar erros "previsíveis" no contexto do tempo de execução, por exemplo, palavra-passe inválida, entidade bloqueada, etc., que não interrompem a execução do programa. Esta categoria de erros pode ser tratada por código normal.

Outros erros "imprevisíveis" incluem erro de gravação em disco, falha de rede, ou em geral qualquer interrupção inesperada. Esta categoria de erros gera exceções e precisa ser tratada através de um método de manipulação de erros ou uma palavra-chave `Try()`.

## Instalação de um método de gestão de erros

Em 4D, todos os erros podem ser capturados e tratados por métodos específicos do projeto, denominados métodos de **tratamento de erros** (ou **captura de erros**).

Uma vez instalados, os manipuladores de erros são automaticamente chamados em modo interpretado ou compilado em caso de erro na aplicação 4D ou num dos seus componentes. Um manipulador de erros diferente pode ser chamado em função do contexto de execução (ver abaixo).

Para _instalar_ um método de projeto de manipulação de erros, você só precisa chamar o [`LIGA DE ERRO CALL`](https://doc.4d. comando/4dv19/help/command/en/page155.html) com o nome do método do projeto e (opcionnalmente) escopo como parâmetros. Por exemplo:

```4d
ON ERR CALL("IO_ERRORS") //Instala o método de gestão de erros
```

Para deixar de detectar erros para um contexto de execução e devolver o controle, chame `ON ERR CALL` com uma string vazia:

```4d
ON ERR CALL("";ek local) // dá o controle para o processo local
```

O comando [`Método chamado erro`](https://doc.4d.com/4dv20/help/command/en/page704.html) permite que você saiba o nome do método instalado por `ON ERR CALL` para o processo atual. É particularmente útil no contexto dos componentes porque permite mudar temporariamente e depois restaurar o método de captura de erros do banco de dados local:

```4d
 $methCurrent:=Método chamado em caso de erro(ek local)
ON ERR CALL("NewMethod";ek local)
  //Se o documento não pode ser aberto, um erro é gerado
 $ref:=Abrir documento("MyDocument")
  //Reinstalação do método anterior
ON ERR CALL($methCurrent;ek local)

```

### Alcance e componentes

Um método de tratamento de erros pode ser definido para diferentes contextos de execução:

- para o **processo atual**- um manipulador de erros local será chamado apenas para erros que ocorreram no processo atual do projeto atual,
- para o **aplicativo inteiro** - um manipulador de erros global será chamado para todos os erros que ocorreram no contexto de execução do aplicativo do projeto atual,
- dos **componentes** - esse manipulador de erros é definido em um projeto host e será chamado para todos os erros que ocorreram nos componentes quando eles ainda não foram capturados por um manipulador de componentes.

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

  - `Erro` (inteiro longo): código de erro
  - `Error line` (entero largo): número de línea del método que ha provocado el error
  - `Linha de erro` (longin): número de linha no método que desencadeou o erro
  - `Fórmula de erro` (texto): fórmula do código 4D (texto bruto) que está na origem do erro.

:::info

4D automatically maintains a number of variables called [**system variables**](variables.md#system-variables), meeting different needs.
:::

- o comando [`Últimos erros`](https://doc.4d.com/4dv19/help/command/en/page1799.html) que retorna uma coleção da pilha de erros atual que ocorreu na aplicação 4D. Você também pode usar o comando [`Last errors`](https://doc.4d.com/4dv19/help/command/en/page1015.html) que retorna as mesmas informações que os arrays.
- the `Call chain` command that returns a collection of objects describing each step of the method call chain within the current process.

#### Exemplo

Aqui está um sistema de gestão de erros simples:

```4d
//instalar o método de gestão de erros
 ON ERR CALL("errorMethod")
 //... executar o código
 ON ERR CALL("") //retorna o controle para 4D
```

```4d
// Método do projeto errorMethod
 If(Error#1006) //isso não é uma interrupção do usuário
    ALERT("The error "+String(Error)+" occurred". O código em questão é: \""+Error formula+"\"")
 End if
```

### Utilizar um método de gestão de erro vazio

Se quiser que a caixa de diálogo fique escondida, pode instalar um método de gestão de erros vazio. A variável `Error` do sistema pode ser testada em qualquer método, ou seja, fora do método de gestão de erros:

```4d
ERR CALL("emptyMethod") //vazityMethod existe mas está vazio
$doc:=Open document( "myFile. xt")
Se (Error=-43)
	├ALERT("Arquivo não encontrado.")
Finalize se
NO ERR CALL("")
```

## Try(expression)

A instrução `Try(expression)` permite que você teste uma expressão de linha única no contexto de execução atual (incluindo, em particular, valores variáveis locais) e para interceptar erros que ele lança para que a caixa de diálogo de erro 4D não seja exibida. O uso de `Try(expression)` oferece uma maneira fácil de tratar casos de erro simples com um número muito baixo de linhas de código e sem exigir um método de tratamento de erros.

:::note

Se você quiser tentar um código mais complexo do que uma expressão de uma única linha, você pode considerar usar uma estrutura [`Try/Catch`](#trycatchend-try).

:::

A sintaxe formal da instrução `Try(expression)` é:

```4d

Try (expression) : any | Undefined

```

_expressão_ pode ser qualquer expressão válida.

Se ocorrer um erro durante sua execução, ele será interceptado e nenhuma caixa de diálogo de erro será exibida, independentemente de um [método de tratamento de erros] (#installing-an-error-handling-method) ter sido instalado ou não antes da chamada para `Try()`. Se _expressão_ retorna um valor, `Try()` retorna o último valor avaliado, caso contrário, ele retorna `Undefined`.

Você pode lidar com o(s) erro(s) usando o comando [`Últimos erros`](https://doc.4d.com/4dv20/help/command/en/page1799.html). Se a _expressão_ lançar um erro em uma pilha de chamadas `Try()`, o fluxo de execução será interrompido e retornará ao último `Try()` executado (o primeiro encontrado na pilha de chamadas).

:::note

Se um método de tratamento de erros for instalado por _expressão_, ele é chamado em caso de erro.

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
     $result:=0 //apenas por claridade (0 se o padrão for reais)
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

3. Você deseja lidar com erros [previsíveis e não previsíveis](#error-or-status):

```4d
var $e:=ds.Employee.new()
$e.name:="Smith"
$status:=Try($e.save()) // Captura de erros previsíveis e não previsíveis
If ($status.success)
   ALERT( "Success")
Else
   ALERT( "Error: "+JSON Stringify($status.errors))
End if
```

## Try...Catch...End try

A estrutura `Try...Catch...End try` permite que você teste um bloco de código em seu contexto de execução atual (incluindo, em particular, os valores de variáveis locais) e intercepte os erros que ele lança, para que a caixa de diálogo de erro do 4D não seja exibida.

Ao contrário da palavra-chave `Try(expressão)` que avalia uma expressão de linha única, a `Experimente...Catch... a estrutura nd try` permite que você avalie qualquer bloco de código, do mais simples para o mais complexo, sem exigir um método de manipulação de erro. Além disso, o bloco `Catch` pode ser usado para tratar o erro de qualquer forma personalizada.

A sintaxe formal da estrutura `Try...Catch...End try` é:

```4d

Try 
	statement(s) // Código a ser avaliado
Catch
	statement(s) // Código a ser executado em caso de erro
End try

```

O código colocado entre as palavras-chave `Try` e `Catch` é executado primeiro e, em seguida, o fluxo depende do(s) erro(s) encontrado(s) durante essa execução.

- Se nenhum erro for lançado, a execução do código continuará após a palavra-chave `End try` correspondente. O código colocado entre as palavras-chave `Catch` e `End try` não é executado.
- Se a execução do bloco de código lançar um _erro não diferido_, o fluxo de execução é interrompido e o bloco de código `Catch` correspondente é executado.
- If the code block calls a method that throws a _deferred error_, the execution flow jumps directly to the corresponding `Catch` code block.
- If a deferred error is directly thrown from the `Try` block, the execution flow continues until the end of the `Try` block and does not execute the corresponding `Catch` block.

:::note

Se um erro _deferred_ for lançado fora do bloco `Try`, a execução do código continua até o final do método ou função.

:::

:::info

Para obter mais informações sobre erros _deferred_ e _non-deferred_, consulte a descrição do comando [`throw`](https://doc.4d.com/4dv20R/help/command/pt/page1805.html).

:::

No bloco de código `Catch`, você pode lidar com o(s) erro(s) usando comandos padrão de tratamento de erros. A função [`Últimos Erros`](https://doc.4d.com/4dv20/help/command/en/page1799.html) contém a última coleção de erros. Você pode [declarar um método de tratamento de erros](#installing-an-error-handling-method) neste bloco de código, caso em que ele é chamado em caso de erro (caso contrário, a caixa de diálogo de erro do 4D é exibida).

:::note

Se um [método de tratamento de erros](#instalando-um-método-de-tratamento-de-erros) for instalado no código colocado entre as palavras-chave `Try` e `Catch`, ele é chamado em caso de erro.

:::

### Exemplo

A combinação de transações e estruturas `Try...Catch...End try` permite escrever código seguro para recursos críticos.

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
			//chamar outras funções específicas para validar a linha de fatura
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
