---
id: error-handling
title: Gestion des erreurs
---

Le traitement des erreurs consiste à anticiper les erreurs pouvant survenir dans votre application et à y répondre. 4D fournit un support complet pour la détection et la signalisation des erreurs lors de l'exécution, ainsi que pour l'analyse de leurs conditions.

La gestion des erreurs répond à deux besoins principaux :

- rechercher et corriger les éventuels bugs et erreurs dans votre code pendant la phase de développement,
- catching and recovering from unexpected errors in deployed applications; in particular, you can replace system error dialogs (disk full, missing file, etc.) with you own interface.

Basically, there are two ways to handle errors in 4D. Vous pouvez :

- [install an error-handling method](#installing-an-error-handling-method), or
- use a [`Try()` keyword](#tryexpression) or a [`Try/Catch` structure](#trycatchend-try) before pieces of code that call a function, method, or expression that can throw an error.

:::tip Good practice

Il est fortement recommandé d'installer une méthode globale de gestion des erreurs sur 4D Server, pour tout le code s'exécutant sur le serveur. When 4D Server is not running [headless](../Admin/cli.md) (i.e. launched with its [administration window](../ServerWindow/overview.md)), this method would avoid unexpected dialog boxes to be displayed on the server machine. In headless mode, errors are logged in the [4DDebugLog file](../Debugging/debugLogFiles.md#4ddebuglogtxt-standard) for further analysis.

:::

## Erreur ou statut

Many 4D class functions, such as `entity.save()` or `transporter.send()`, return a _status_ object. Cet objet permet de stocker les erreurs "prévisibles" dans le contexte d'exécution, telles qu'un mot de passe invalide, une entité verrouillée, etc., qui ne stoppe pas l'exécution du programme. Cette catégorie d'erreurs peut être gérée par du code habituel.

D'autres erreurs "imprévisibles" peuvent inclure une erreur en écriture sur le disque, une panne de réseau ou toute interruption inattendue. This category of errors generates exceptions and needs to be handled through an error-handling method or a `Try()` keyword.

## Installer une méthode de gestion des erreurs

In 4D, all errors can be caught and handled by specific project methods, named **error-handling** (or **error-catching**) methods.

Une fois installés, les gestionnaires d'erreurs sont automatiquement appelés en mode interprété ou compilé en cas d'erreur dans l'application 4D ou l'un de ses composants. Un gestionnaire d'erreur différent peut être appelé en fonction du contexte d'exécution (voir ci-dessous).

To _install_ an error-handling project method, you just need to call the [`ON ERR CALL`](https://doc.4d.com/4dv19/help/command/en/page155.html) command with the project method name and (optionnally) scope as parameters. Par exemple :

```4d
ON ERR CALL("IO_Errors";ek local) //Installe une méthode locale de gestion des erreurs
```

To stop catching errors for an execution context and give back hand, call `ON ERR CALL` with an empty string:

```4d
ON ERR CALL("";ek local) //rend le contrôle au process local
```

The  [`Method called on error`](https://doc.4d.com/4dv20/help/command/en/page704.html) command allows you to know the name of the method installed by `ON ERR CALL` for the current process. Cela est particulièrement utile dans le contexte du code générique car il vous permet de modifier temporairement puis de restaurer la méthode de capture d'erreur :

```4d
 $methCurrent:=Method called on error(ek local)
 ON ERR CALL("NewMethod";ek local)
  //If the document cannot be opened, an error is generated
 $ref:=Open document("MyDocument")
  //Reinstallation of previous method
 ON ERR CALL($methCurrent;ek local)

```

### Portée et composants

Une méthode de gestion des erreurs peut être définie pour différents contextes d'exécution :

- for the **current process**- a local error handler will be only called for errors that occurred in the current process of the current project,
- for the **whole application**- a global error handler will be called for all errors that occurred in the application execution context of the current project,
- from the **components**- this error handler is defined in a host project and will be called for all errors that occurred in the components when they were not already caught by a component handler.

Exemples :

```4d
ON ERR CALL("IO_Errors";ek local) //Installe une méthode de gestion des erreurs locale
ON ERR CALL("globalHandler";ek global) //Installe une méthode de gestion des erreurs globale
ON ERR CALL("componentHandler";ek erreurs des composants) //Installe une méthode de gestion des erreurs pour les composants
```

Vous pouvez installer un gestionnaire d'erreurs global qui servira de "fallback" et des gestionnaires d'erreurs locaux spécifiques pour certains process. Un gestionnaire d'erreur global est également utile sur le serveur pour éviter l'affichage de dialogues d'erreur sur le serveur lorsqu'il est exécuté avec interface.

Vous pouvez définir une seule méthode de gestion des erreurs pour l'ensemble de l'application ou différentes méthodes par module d'application. Toutefois, une seule méthode peut être installée par contexte d'exécution et par projet.

Lorsqu'une erreur se produit, une seule méthode est appelée, comme le montre le schéma suivant :

![error management](../assets/en/Concepts/error-schema.png)

### Gérer les erreurs dans une méthode

Dans une méthode de gestion d'erreur personnalisée, vous avez accès à plusieurs éléments d'information qui vous aideront à identifier l'erreur :

- des variables système dédiées :

  - `Error` (longint): error code
  - `Error method` (text): name of the method that triggered the error
  - `Error line` (longint): line number in the method that triggered the error
  - `Error formula` (text): formula of the 4D code (raw text) which is at the origin of the error.

:::info

4D automatically maintains a number of variables called **system variables**, meeting different needs. Consultez le manuel Language de 4D\*.

:::

- the [`Last errors`](https://doc.4d.com/4dv19/help/command/en/page1799.html) command that returns a collection of the current stack of errors that occurred in the 4D application. You can also use the [`GET LAST ERROR STACK`](https://doc.4d.com/4dv19/help/command/en/page1015.html) command that returns the same information as arrays.
- the `Get call chain` command that returns a collection of objects describing each step of the method call chain within the current process.

#### Exemple

Voici un système de gestion des erreurs simple :

```4d
//installer la méthode de gestion d'erreur
ON ERR CALL("errorMethod")
 //... exécuter le code
 ON ERR CALL("") //redonner le contrôle à 4D
```

```4d
// errorMethod project method
 If(Error#1006) //this is not a user interruption
    ALERT("The error "+String(Error)+" occurred". The code in question is: \""+Error formula+"\"")
 End if
```

### Utiliser une méthode de gestion des erreurs vide

Si vous souhaitez cacher la boite de dialogue d'erreur standard, vous pouvez installer une méthode de gestion d'erreurs vide. The `Error` system variable can be tested in any method, i.e. outside of the error-handling method:

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

### Exemples

1. You want to display the contents of a file if the file can be open without error, and if its contents can be read. Vous pouvez écrire :

```4d
var $text : Text
var $file : 4D.File := File("/RESOURCES/myFile.txt")
var $fileHandle : 4D.FileHandle := Try($file.open())
If ($fileHandle # Null)
  $text:=Try($fileHandle.readText()) || "Error reading the file"
End if
```

2. You want to handle the divide by zero error. In this case, you want to return 0 and throw an error:

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

### Exemple

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
