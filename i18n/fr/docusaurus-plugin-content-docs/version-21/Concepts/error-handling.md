---
id: error-handling
title: Gestion des erreurs
---

Le traitement des erreurs consiste à anticiper les erreurs pouvant survenir dans votre application et à y répondre. 4D fournit un support complet pour la détection et la signalisation des erreurs lors de l'exécution, ainsi que pour l'analyse de leurs conditions.

La gestion des erreurs répond à deux besoins principaux :

- rechercher et corriger les éventuels bugs et erreurs dans votre code pendant la phase de développement,
- détecter et récupérer des erreurs inattendues dans les applications déployées ; vous pouvez notamment remplacer les boîtes de dialogue d'erreur système (disque plein, fichier manquant, etc.) par votre propre interface.

Fondamentalement, il y a deux façons de gérer les erreurs en 4D. Vous pouvez :

- [installer une méthode de gestion des erreurs](#installer-une-methode-de-gestion-des-erreurs), ou
- utiliser un mot-clé [`Try()`](#tryexpression) ou une structure [`Try/Catch`](#trycatchend-try) avant des parties de code qui appellent une fonction, une méthode ou une expression qui peut générer une erreur.

:::tip Bonne pratique

Il est fortement recommandé d'installer une méthode globale de gestion des erreurs sur 4D Server, pour tout le code s'exécutant sur le serveur. Lorsque 4D Server ne fonctionne pas [headless](../Admin/cli.md) (c'est-à-dire qu'il est lancé avec sa [fenêtre d'administration](../ServerWindow/overview.md)), cette méthode permet d'éviter l'affichage de boîtes de dialogue sur la machine serveur. En mode headless, les erreurs sont enregistrées dans le fichier [4DDebugLog](../Debugging/debugLogFiles.md#4ddebuglogtxt-standard) pour une analyse plus approfondie.

:::

## Erreurs prévisibles ou imprévisibles

De nombreuses fonctions de classe de 4D, telles que [`entity.save()`](../API/EntityClass.md#save) ou [`transporter.send()`](../API/SMTPTransporterClass.md#send), renvoient un objet contenant des informations de *status*. Cet objet est utilisé pour gérer les erreurs **prévisibles** dans le contexte d'exécution, par exemple un mot de passe invalide, une entité verrouillée, etc. qui ne nécessitent pas l'arrêt de l'exécution du programme. Cette catégorie d'erreurs, également appelée **erreurs silencieuses**, peut être gérée par le code normal. Lorsque de telles erreurs se produisent dans un contexte d'interception des erreurs, c'est-à-dire un [`Try`](#tryexpression), un [`Try/Catch`](#trycatchend-try) ou une [méthode de gestion des erreurs](#installing-an-error-handling-method), elles n'interrompent pas l'exécution et ne déclenchent pas le traitement de l'erreur (par exemple, la partie `Catch` du [`Try/Catch`](#trycatchend-try) n'est pas exécutée). Elles ne sont pas listées dans la collection [`Last errors`](../commands/last-errors.md). L'erreur est uniquement renvoyée dans les propriétés `status` et `statusText` de l'objet retourné. Elle peut être traitée selon votre logique d'application.

L'autre catégorie d'erreurs est celle des erreurs **imprévisibles**, également appelées **erreurs graves**. Il peut s'agir d'une erreur d'écriture sur le disque, d'une panne de réseau ou, plus généralement, de toute interruption inattendue. Cette catégorie d'erreurs génère des exceptions définies par [un *code*, un *message* et une *signature*](#error-codes). Elles interrompent l'exécution et déclenchent le traitement de l'erreur par les fonctions [`Try`](#tryexpression), [`Try/Catch`](#trycatchend-try) ou la [méthode de gestion des erreurs](#installing-an-error-handling-method). Elles sont listées dans la collection [`Last errors`](../commands/last-errors.md). Notez que les erreurs graves peuvent également renvoyer des valeurs dans les propriétés `status` et `statusText`, par exemple `dk status serious error` - "Other error".

## Installer une méthode de gestion des erreurs

Dans 4D, toutes les erreurs peuvent être détectées et traitées par des méthodes projet spécifiques, appelées **méthodes de gestion des erreurs** (ou **méthodes d'interception des erreurs**).

Une fois installés, les gestionnaires d'erreurs sont automatiquement appelés en mode interprété ou compilé en cas d'erreur dans l'application 4D ou l'un de ses composants. Un gestionnaire d'erreur différent peut être appelé en fonction du contexte d'exécution (voir ci-dessous).

Pour *installer* une méthode de gestion des erreurs, il suffit d'appeler la commande [`ON ERR CALL`](../commands-legacy/on-err-call.md) avec le nom de la méthode projet et (optionnellement) le champ d'application en paramètres. Par exemple :

```4d
ON ERR CALL("IO_Errors";ek local) //Installe une méthode locale de gestion des erreurs
```

Pour arrêter d'intercepter les erreurs dans un contexte d'exécution et rendre la main, appelez `ON ERR CALL` avec une chaîne vide :

```4d
ON ERR CALL("";ek local) //rend le contrôle au process local
```

La commande [`Method called on error`](../commands-legacy/method-called-on-error.md) vous permet de connaître le nom de la méthode installée par `ON ERR CALL` pour le process courant. Cela est particulièrement utile dans le contexte du code générique car il vous permet de modifier temporairement puis de restaurer la méthode de capture d'erreur :

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

![error management](../assets/en/Concepts/error-schema.png)

### Gérer les erreurs dans une méthode

Dans une méthode de gestion d'erreur personnalisée, vous avez accès à plusieurs éléments d'information qui vous aideront à identifier l'erreur :

- des variables système dédiées :

  - `Error` (entier long): Code d'erreur
  - `Error method` (texte) : nom de la méthode ayant engendré l'erreur
  - `Error line` (entier long) : Numéro de ligne de la méthode ayant généré l'erreur
  - `Error formula` (texte) : formule du code 4D (texte brut) à l'origine de l'erreur.

:::info

4D gère automatiquement un certain nombre de variables appelées [**variables système**](variables.md#system-variables), répondant à différents besoins.
:::

- la commande [`Last errors`](../commands/last-errors.md) qui renvoie une collection avec la pile courante d'erreurs survenues dans l'application 4D.
- la commande `Call chain` qui renvoie une collection d'objets décrivant chaque étape de la chaîne d'appel de méthode dans le process en cours.

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
 If(Error#1006) //ce n'est pas une interruption générée par l'utilisateur
    ALERT("L'erreur "+String(Error)+" s'est produite". Le code en question est : \""+Error formula+"\"")
 End if
```

### Utiliser une méthode de gestion des erreurs vide

Si vous souhaitez essentiellement masquer la boite de dialogue d'erreur standard, vous pouvez installer une méthode de gestion d'erreurs vide. La variable système `Error` peut être testée dans n'importe quelle méthode, c'est-à-dire en dehors de la méthode de gestion d'erreurs :

```4d
ON ERR CALL("emptyMethod") //emptyMethod existe mais elle est vide
$doc:=Open document( "myFile.txt")
If (Error=-43)
 ALERT("File not found.")
End if
ON ERR CALL("")
```

## Try(expression)

L'instruction `Try(expression)` vous permet de tester une expression d'une seule ligne dans son contexte d'exécution réel (y compris, en particulier, les valeurs de variables locales) et d'intercepter les erreurs qu'elle renvoie, de sorte que la boîte de dialogue d'erreur 4D ne soit pas affichée. L'utilisation de `Try(expression)` fournit un moyen facile de gérer des cas d'erreur simples avec un nombre très faible de lignes de code, et sans nécessiter de méthode de gestion des erreurs.

:::note

Si vous voulez tester un code plus complexe qu'une expression d'une ligne simple, vous pouvez envisager d'utiliser une structure [`Try/Catch`](#trycatchend-try).

:::

La syntaxe formelle de l'instruction `Try(expression)` est :

```4d

Try (expression) : any | Undefined

```

*expression* peut être n'importe quelle expression valide.

Si une erreur s'est produite pendant son exécution, elle est interceptée et aucune fenêtre d'erreur n'est affichée, qu'une [méthode de gestion des erreurs](#installer-une-methode-de-gestion-des-erreurs) ait été installée ou non avant l'appel à `Try()`. Si *expression* retourne une valeur, `Try()` retourne la dernière valeur évaluée, sinon elle retourne `Undefined`.

Vous pouvez traiter les erreurs en utilisant la commande [`Last errors`](../commands/last-errors.md). Si *expression* génère une erreur dans une pile d'appels `Try()`, le flux d'exécution s'arrête et retourne au dernier `Try()` exécuté (le premier trouvé en remontant dans la pile d'appels).

:::note

Si une [méthode de gestion des erreurs](#installer-une-methode-de-gestion-des-erreurs) est installée par *expression*, elle est appelée en cas d'erreur.

:::

### Exemples

1. Vous voulez afficher le contenu d'un fichier si le fichier peut être ouvert sans erreur, et si son contenu peut être lu. Vous pouvez écrire :

```4d
var $text : Text
var $file : 4D.File := File("/RESOURCES/myFile.txt")
var $fileHandle : 4D.FileHandle := Try($file.open())
If ($fileHandle # Null)
  $text:=Try($fileHandle.readText()) || "Error reading the file"
End if
```

2. Vous voulez gérer la division par zéro. Dans ce cas, vous voulez retourner 0 et générer une erreur:

```4d
function divide( $p1: real; $p2: real)-> $result: real
  if ($p2=0)
     $result:=0 //pour être clair (0 est la valeur par défaut pour les réels)
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

3. Vous voulez gérer à la fois les erreurs [prévisibles et non prévisibles](#erreur-ou-statut) :

```4d
var $e:=ds.Employee.new()
$e.name:="Smith"
$status:=Try($e.save()) //intercepter les erreurs prévisibles et imprévisibles
If ($status.success)
   ALERT( "Success")
Else
   ALERT( "Error: "+JSON Stringify($status.errors))
End if

```

## Try...Catch...End try

La structure `Try...Catch...End try` vous permet de tester un bloc de code dans son contexte d'exécution réel (y compris, en particulier, les valeurs des variables locales) et d'intercepter les erreurs qu'il retourne, de sorte que la boîte de dialogue d'erreur 4D ne soit pas affichée.

A la différence du mot-clé `Try(expression)` qui évalue une expression d'une seule ligne, la structure `Try...Catch...End try` vous permet d'évaluer n'importe quel bloc de code, du plus simple au plus complexe, sans nécessiter une méthode de gestion des erreurs. En outre, le bloc `Catch` peut être utilisé pour gérer l'erreur de manière personnalisée.

La syntaxe formelle de la structure `Try...Catch...End try` est la suivante :

```4d

Try 
	statement(s) // Code à évaluer
Catch
	statement(s) // Code à exécuter en cas d'erreur
End try

```

Le code placé entre les mots-clés `Try` et `Catch` est d'abord exécuté, puis le flux dépend des erreurs rencontrées lors de cette exécution.

- Si aucune erreur n'est levée, l'exécution du code se poursuit après le mot clé `End try` correspondant. Le code placé entre les mots-clés `Catch` et `End try` n'est pas exécuté.
- Si l'exécution du bloc de code génère une *erreur non différée*, le flux d'exécution s'arrête et exécute le bloc de code `Catch` correspondant.
- Si le bloc de code appelle une méthode qui lance une *erreur différée*, le flux d'exécution passe directement au bloc de code `Catch` correspondant.
- Si une erreur différée est directement lancée depuis le bloc `Try`, le flux d'exécution continue jusqu'à la fin du bloc `Try` et n'exécute pas le bloc `Catch` correspondant.

:::note

Si une erreur *différée* est générée en dehors du bloc `Try`, l'exécution du code se poursuit jusqu'à la fin de la méthode ou de la fonction.

:::

:::info

Pour plus d'informations sur les erreurs *différées* et *non différées*, veuillez vous référer à la description de la commande [`throw`](../commands-legacy/throw.md).

:::

Dans le bloc de code `Catch`, vous pouvez gérer la ou les erreur(s) en utilisant les commandes de gestion des erreurs standard. La fonction [`Last errors`](../commands/last-errors.md) contient la collection des dernières erreurs. Vous pouvez [déclarer une méthode de gestion des erreurs](#installer-une-methode-de-gestion-des-erreurs) dans ce bloc de code, auquel cas elle est appelée en cas d'erreur (sinon la boîte de dialogue d'erreur 4D est affichée).

:::note

Si une [méthode de gestion des erreurs](#installer-une-methode-de-gestion-des-erreurs) est installée dans le code placé entre les mots-clés `Try` et `Catch`, elle est appelée en cas d'erreur.

:::

### Exemple

La combinaison de transactions et de structures `Try...Catch...End try` permet d'écrire un code sécurisé pour les fonctionnalités critiques.

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
			//appel d'autres fonctions spéciiques pour valider invoiceline
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

## Codes d'erreur

Les exceptions qui interrompent l'exécution du code sont renvoyées par 4D mais peuvent avoir différentes origines telles que le système d'exploitation, un périphérique, le noyau 4D, un [`throw`](../commands-legacy/throw.md) dans votre code, etc. Une erreur est donc définie par trois éléments :

- une **signature du composant**, qui est l'origine de l'erreur (voir [`Last errors`](../commands/last-errors.md) pour avoir la liste des signatures)
- un **message**, qui explique pourquoi l'erreur s'est produite
- un **code**, qui est un numéro arbitraire renvoyé par le composant

La [boîte de dialogue d'erreur 4D](../Debugging/basics.md) affiche le code et le message à l'utilisateur.

Pour obtenir une description complète d'une erreur et surtout de son origine, vous devez appeler la commande [`Last errors`](../commands/last-errors.md). Lorsque vous interceptez et traitez des erreurs à l'aide d'une [méthode de traitement des erreurs](#installing-an-error-handling-method) dans vos applications finales, utilisez [`Last errors`](../commands/last-errors.md) et veillez à enregistrer toutes les propriétés de l'objet *error*, car les codes d'erreur dépendent des composants.
