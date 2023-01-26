---
id: error-handling
title: Gestion des erreurs
---

Le traitement des erreurs consiste à anticiper les erreurs pouvant survenir dans votre application et à y répondre. 4D fournit un support complet pour la détection et la signalisation des erreurs lors de l'exécution, ainsi que pour l'analyse de leurs conditions.

La gestion des erreurs répond à deux besoins principaux :

- rechercher et corriger les éventuels bugs et erreurs dans votre code pendant la phase de développement,
- détecter et récupérer des erreurs inattendues dans les applications déployées; vous pouvez notamment remplacer les boîtes de dialogue d'erreur système (disque plein, fichier manquant, etc.) par votre propre interface.

:::tip Good practice

It is highly recommended to install a global error-handling method on 4D Server, for all code running on the server. When 4D Server is not running [headless](../Admin/cli.md) (i.e. launched with its [administration window](../ServerWindow/overview.md)), this method would avoid unexpected dialog boxes to be displayed on the server machine. In headless mode, errors are logged in the [4DDebugLog file](../Debugging/debugLogFiles.md#4ddebuglogtxt-standard) for further analysis.

:::


## Erreur ou statut

De nombreuses fonctions de classe 4D, telles que `entity.save()` ou `transporter.send()`, retournent un objet *status*. Cet objet permet de stocker les erreurs "prévisibles" dans le contexte d'exécution, telles qu'un mot de passe invalide, une entité verrouillée, etc., qui ne stoppe pas l'exécution du programme. Cette catégorie d'erreurs peut être gérée par du code habituel.

D'autres erreurs "imprévisibles" peuvent inclure une erreur en écriture sur le disque, une panne de réseau ou toute interruption inattendue. Cette catégorie d'erreurs génère des exceptions et doit être traitée par une méthode de gestion des erreurs.


## Installer une méthode de gestion des erreurs

In 4D, all errors can be caught and handled by specific project methods, named **error-handling** (or **error-catching**) methods.

Once installed, error handlers are automatically called in interpreted or compiled mode in case of error in the 4D application or one of its components. A different error handler can be called depending on the execution context (see below).

To *install* an error-handling project method, you just need to call the [`ON ERR CALL`](https://doc.4d.com/4dv19/help/command/en/page155.html) command with the project method name and (optionnally) scope as parameters. Par exemple :

```4d
ON ERR CALL("IO_Errors";ek local) //Installs a local error-handling method
```

To stop catching errors for an execution context and give back hand, call `ON ERR CALL` with an empty string:

```4d
ON ERR CALL("";ek local) //gives back control for the local process
```

The  [`Method called on error`](https://doc.4d.com/4dv19/help/command/en/page704.html) command allows you to know the name of the method installed by `ON ERR CALL` for the current process. Cela est particulièrement utile dans le contexte du code générique car il vous permet de modifier temporairement puis de restaurer la méthode de capture d'erreur :

```4d
 $methCurrent:=Method called on error(ek local)
 ON ERR CALL("NewMethod";ek local)
  //If the document cannot be opened, an error is generated
 $ref:=Open document("MyDocument")
  //Reinstallation of previous method
 ON ERR CALL($methCurrent;ek local)

```

### Portée et composants

An error-handling method can be set for different execution contexts:

- for the **current process**- a local error handler will be only called for errors that occurred in the current process of the current project,
- for the **whole application**- a global error handler will be called for all errors that occurred in the application execution context of the current project,
- from the **components**- this error handler is defined in a host project and will be called for all errors that occurred in the components when they were not already caught by a component handler.

Exemples :

```4d
ON ERR CALL("IO_Errors";ek local) //Installs a local error-handling method
ON ERR CALL("globalHandler";ek global) //Installs a global error-handling method
ON ERR CALL("componentHandler";ek errors from components) //Installs an error-handling method for components
```

You can install a global error handler that will serve as "fallback" and specific local error handlers for certain processes. A global error handler is also useful on the server to avoid error dialogs on the server when run with interface.

Vous pouvez définir une seule méthode d'erreur pour l'ensemble de l'application ou différentes méthodes par module d'application. However, only one method can be installed per execution context and per project.

When an error occurs, only one method is called, as described in the following diagram:

![error management](../assets/en/Concepts/error-schema.png)


### Gérer les erreurs dans une méthode

Within a custom error method, you have access to several pieces of information that will help you identifying the error:

- dedicated system variables:

  - `Error` (entier long): Code d'erreur
  - `Error method` (texte) : nom de la méthode ayant engendré l'erreur
  - `Error line` (entier long) : Numéro de ligne de la méthode ayant généré l'erreur
  - `Error formula` (texte) : formule du code 4D (texte brut) à l'origine de l'erreur.

:::info

4D automatically maintains a number of variables called **system variables**, meeting different needs. See the *4D Language Reference manual*.

:::

- the [`Last errors`](https://doc.4d.com/4dv19/help/command/en/page1799.html) command that returns a collection of the current stack of errors that occurred in the 4D application. You can also use the [`GET LAST ERROR STACK`](https://doc.4d.com/4dv19/help/command/en/page1015.html) command that returns the same information as arrays.
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
ON ERR CALL("emptyMethod") //emptyMethod exists but is empty
$doc:=Open document( "myFile.txt")
If (Error=-43)
    ALERT("File not found.")
End if
ON ERR CALL("")
End if
ON ERR CALL.("")
```


