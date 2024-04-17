---
id: error-handling
title: Gestion des erreurs
---

Le traitement des erreurs consiste à anticiper les erreurs pouvant survenir dans votre application et à y répondre. 4D fournit un support complet pour la détection et la signalisation des erreurs lors de l'exécution, ainsi que pour l'analyse de leurs conditions.

La gestion des erreurs répond à deux besoins principaux :

- rechercher et corriger les éventuels bugs et erreurs dans votre code pendant la phase de développement,
- détecter et récupérer des erreurs inattendues dans les applications déployées; vous pouvez notamment remplacer les boîtes de dialogue d'erreur système (disque plein, fichier manquant, etc.) par votre propre interface.

Basically, there are two ways to handle errors in 4D. Vous pouvez :

- [install an error-handling method](#installing-an-error-handling-method), or
- use a [`Try()` keyword](#tryexpression) or a [`Try/Catch` structure](#trycatchend-try) before pieces of code that call a function, method, or expression that can throw an error.

:::tip Bonne pratique

Il est fortement recommandé d'installer une méthode globale de gestion des erreurs sur 4D Server, pour tout le code s'exécutant sur le serveur. Lorsque 4D Server ne fonctionne pas [headless](../Admin/cli.md) (c'est-à-dire qu'il est lancé avec sa [fenêtre d'administration](../ServerWindow/overview.md)), cette méthode permet d'éviter l'affichage de boîtes de dialogue sur la machine serveur. En mode headless, les erreurs sont enregistrées dans le fichier [4DDebugLog](../Debugging/debugLogFiles.md#4ddebuglogtxt-standard) pour une analyse plus approfondie.

:::


## Erreur ou statut

De nombreuses fonctions de classe 4D, telles que `entity.save()` ou `transporter.send()`, retournent un objet *status*. Cet objet permet de stocker les erreurs "prévisibles" dans le contexte d'exécution, telles qu'un mot de passe invalide, une entité verrouillée, etc., qui ne stoppe pas l'exécution du programme. Cette catégorie d'erreurs peut être gérée par du code habituel.

D'autres erreurs "imprévisibles" peuvent inclure une erreur en écriture sur le disque, une panne de réseau ou toute interruption inattendue. This category of errors generates exceptions and needs to be handled through an error-handling method or a `Try()` keyword.


## Installer une méthode de gestion des erreurs

Dans 4D, toutes les erreurs peuvent être détectées et traitées par des méthodes projet spécifiques, appelées **méthodes de gestion des erreurs** (ou **méthodes d'interception des erreurs**).

Une fois installés, les gestionnaires d'erreurs sont automatiquement appelés en mode interprété ou compilé en cas d'erreur dans l'application 4D ou l'un de ses composants. Un gestionnaire d'erreur différent peut être appelé en fonction du contexte d'exécution (voir ci-dessous).

Pour *installer* une méthode projet de gestion des erreurs, il suffit d'appeler la commande [`ON ERR CALL`](https://doc.4d.com/4dv19/help/command/en/page155.html) avec le nom de la méthode de projet et (en option) la portée comme paramètres. Par exemple :

```4d
ON ERR CALL("IO_Errors";ek local) //Installe une méthode locale de gestion des erreurs
```

Pour arrêter d'intercepter les erreurs dans un contexte d'exécution et rendre la main, appelez `ON ERR CALL` avec une chaîne vide :

```4d
ON ERR CALL("";ek local) //rend le contrôle au process local
```

The  [`Method called on error`](https://doc.4d.com/4dv20/help/command/en/page704.html) command allows you to know the name of the method installed by `ON ERR CALL` for the current process. Cela est particulièrement utile dans le contexte du code générique car il vous permet de modifier temporairement puis de restaurer la méthode de capture d'erreur :

```4d
 $methCurrent:=Method called on error(ek local)
 ON ERR CALL("NewMethod";ek local)
  //Si le document ne peut pas être ouvert, une erreur est générée
 $ref:=Open document("MyDocument")
  //Réinstallation de la méthode précédente
 ON ERR CALL($methCurrent;ek local)

```

### Portée et composants

Une méthode de gestion des erreurs peut être définie pour différents contextes d'exécution :

- pour le **process courant**- un gestionnaire d'erreurs local ne sera appelé que pour les erreurs survenues dans le process courant du projet courant,
- pour l'**ensemble de l'application**- un gestionnaire d'erreurs global sera appelé pour toutes les erreurs qui se sont produites dans le contexte d'exécution de l'application du projet courant,
- depuis les **composants**- ce gestionnaire d'erreurs est défini dans un projet hôte et sera appelé pour toutes les erreurs survenues dans chaque composant lorsqu'elles n'ont pas déjà été interceptées par la méthode de gestion d'erreurs du composant.

Exemples :

```4d
ON ERR CALL("IO_Errors";ek local) //Installe une méthode de gestion des erreurs locale
ON ERR CALL("globalHandler";ek global) //Installe une méthode de gestion des erreurs globale
ON ERR CALL("componentHandler";ek erreurs des composants) //Installe une méthode de gestion des erreurs pour les composants
```

Vous pouvez installer un gestionnaire d'erreurs global qui servira de "fallback" et des gestionnaires d'erreurs locaux spécifiques pour certains process. Un gestionnaire d'erreur global est également utile sur le serveur pour éviter l'affichage de dialogues d'erreur sur le serveur lorsqu'il est exécuté avec interface.

Vous pouvez définir une seule méthode de gestion des erreurs pour l'ensemble de l'application ou différentes méthodes par module d'application. Toutefois, une seule méthode peut être installée par contexte d'exécution et par projet.

Lorsqu'une erreur se produit, une seule méthode est appelée, comme le montre le schéma suivant :

![gestion des erreurs](../assets/en/Concepts/error-schema.png)


### Gérer les erreurs dans une méthode

Dans une méthode de gestion d'erreur personnalisée, vous avez accès à plusieurs éléments d'information qui vous aideront à identifier l'erreur :

- des variables système dédiées :

  - `Error` (entier long): Code d'erreur
  - `Error method` (texte) : nom de la méthode ayant engendré l'erreur
  - `Error line` (entier long) : Numéro de ligne de la méthode ayant généré l'erreur
  - `Error formula` (texte) : formule du code 4D (texte brut) à l'origine de l'erreur.

:::info

4D gère automatiquement un certain nombre de variables appelées **variables système**, répondant à différents besoins. Voir le manuel *4D Language Reference*.

:::

- la commande [`Last errors`](https://doc.4d.com/4dv19/help/command/en/page1799.html) qui renvoie une collection de la pile actuelle des erreurs survenues dans l'application 4D. Vous pouvez également utiliser la commande [`GET LAST ERROR STACK`](https://doc.4d.com/4dv19/help/command/en/page1015.html) qui renvoie les mêmes informations sous forme de tableaux.
- la commande `Get call chain` qui retourne une collection d'objets décrivant chaque étape de la chaîne d'appel de la méthode dans le process courant.


#### Exemple

Voici un système de gestion des erreurs simple :

```4d
//installer la méthode de gestion d'erreur
ON ERR CALL("errorMethod")
 //... exécuter le code
 ON ERR CALL("") //redonner le contrôle à 4D
```

```4d
// méthode projet errorMethod
 If(Error#1006) //ceci n'est pas une interruption générée par l'utilisateur
    ALERT("L'erreur "+String(Error)+" s'est produite". Le code en question est : \""+Error formula+"\"")
 End if
```

### Utiliser une méthode de gestion des erreurs vide

Si vous souhaitez cacher la boite de dialogue d'erreur standard, vous pouvez installer une méthode de gestion d'erreurs vide. La variable système `Error` peut être testée dans n'importe quelle méthode, c'est-à-dire en dehors de la méthode de gestion d'erreurs :

```4d
ON ERR CALL("emptyMethod") //emptyMethod existe mais est vide
$doc:=Open document( "myFile.txt")
If (Error=-43)
    ALERT("File not found.")
End if
ON ERR CALL.("")
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

*expression* can be any valid expression.

If an error occurred during its execution, it is intercepted and no error dialog is displayed, whether an [error-handling method](#installing-an-error-handling-method) was installed or not before the call to `Try()`. If *expression* returns a value, `Try()` returns the last evaluated value, otherwise it returns `Undefined`.

You can handle the error(s) using the [`Last errors`](https://doc.4d.com/4dv20/help/command/en/page1799.html) command. If *expression* throws an error within a stack of `Try()` calls, the execution flow stops and returns to the latest executed `Try()` (the first found back in the call stack).

:::note

If an [error-handling method](#installing-an-error-handling-method) is installed by *expression*, it is called in case of error.

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
- If the code block execution throws a *non-deferred error*, the execution flow stops and executes the corresponding `Catch` code block.
- If the code block execution throws a *deferred error*, the execution flow continues until the end of the `Try` block and then executes the corresponding `Catch` code block.

:::note

If a *deferred* error is thrown outside of the `Try` block, the code execution continues until the end of the method or function.

:::

:::info

For more information on *deferred* and *non-deferred* errors, please refer to the [`throw`](https://doc.4d.com/4dv20R/help/command/en/page1805.html) command description.

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
