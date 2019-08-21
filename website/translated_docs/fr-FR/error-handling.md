---
id: error-handling
title: Gestion des erreurs
---

Le traitement des erreurs consiste à anticiper les erreurs pouvant survenir dans votre application et à y répondre. 4D fournit un support complet pour la détection et la signalisation des erreurs lors de l'exécution, ainsi que pour l'analyse de leurs conditions.

La gestion des erreurs répond à deux besoins principaux :

- rechercher et corriger les éventuels bugs et erreurs dans votre code pendant la phase de développement,
- détecter et récupérer des erreurs inattendues dans les applications déployées; vous pouvez notamment remplacer les boîtes de dialogue d'erreur système (disque plein, fichier manquant, etc.) par votre propre interface. 

> Il est fortement recommandé d'installer une méthode de gestion des erreurs sur 4D Server, pour tout le code exécuté sur le serveur. Cette méthode éviterait d'afficher des boîtes de dialogue inattendues sur le serveur et pourrait consigner les erreurs dans un fichier consacré en vue d'analyses ultérieures.

## Installer une méthode de gestion des erreurs

Dans 4D, toutes les erreurs peuvent être capturées et traitées dans une méthode projet spécifique, la méthode de **gestion des erreurs** (ou méthode de **capture d'erreurs**).

Cette méthode projet est installée pour le process en cours et sera automatiquement appelée pour toute erreur survenant dans le process, en mode interprété ou compilé. Pour *installer* cette méthode projet, il vous suffit d’appeler la commande `APPELER SUR ERREUR` avec le nom de la méthode projet en paramètre. Par exemple:

```code4d
APPELER SUR ERREUR("IO_ERRORS") //Installe la méthode de gestion des erreurs
```

To stop catching errors and give back hand to 4D, call `ON ERR CALL` with an empty string:

```code4d
ON ERR CALL("") //redonne le contrôle à 4D
```

### Portée et composants

Vous pouvez définir une seule méthode d'erreur pour l'ensemble de l'application ou différentes méthodes par module d'application. Cependant, une seule méthode peut être installée par processus.

Une méthode de gestion des erreurs installée par la commande `APPELER SUR ERREUR` s'applique uniquement à la base de données en cours d'exécution. En cas d'erreur générée par un **composant**, la méthode `APPELER SUR ERREUR` de la base hôte n'est pas appelée, et inversement.

The `Method called on error` command allows to know the name of the method installed by `ON ERR CALL` for the current process. It is particularly useful in the context of components because it enables you to temporarily change and then restore the host database error-catching method:

```code4d
 $methCurrent:=Method called on error
 ON ERR CALL("NewMethod")
  //Si le document ne peut pas être ouvert, une erreur est générée
 $ref:=Open document("MyDocument")
  //Répéter la méthode précédente
 ON ERR CALL($methCurrent)

```

### Handling errors within the method

Within the custom error method, you have access to several information that will help you identifying the error:

- dedicated system variables(*):
    
    - `Error` (longint): error code
    - `Error method` (text): name of the method that triggered the error
    - `Error line` (longint): line number in the method that triggered the error
    - `Error formula` (text): formula of the 4D code (raw text) which is at the origin of the error. 

(*) 4D automatically maintains a number of variables called **system variables**, meeting different needs. See the *4D Language Reference manual*.

- the `GET LAST ERROR STACK` command that returns information about the current stack of errors of the 4D application. 

#### Exemple

Here is a simple error-handling system:

```code4d
//installing the error handling merthod
 ON ERR CALL("errorMethod")
 //... executing code
 ON ERR CALL("") //giving control back to 4D
```

```code4d
// errorMethod project method
 If(Error#1006) //this is not a user interruption
    ALERT("The error "+String(Error)+" occurred. The code in question is: \""+Error formula+"\"")
 End if
```

### Using an empty error-handling method

If you mainly want the standard error dialog box to be hidden, you can install an empty error-handling method. The `Error` system variable can be tested in any method, i.e. outside of the error-handling method:

```code4d
ON ERR CALL("emptyMethod") //emptyMethod exists but is empty
$doc:=Open document( "myFile.txt")
If (Error=-43)
    ALERT("File not found.")
End if
ON ERR CALL("")
```