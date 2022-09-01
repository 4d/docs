---
id: error-handling
title: Gestion des erreurs
---

Le traitement des erreurs consiste à anticiper les erreurs pouvant survenir dans votre application et à y répondre. 4D fournit un support complet pour la détection et la signalisation des erreurs lors de l'exécution, ainsi que pour l'analyse de leurs conditions.

La gestion des erreurs répond à deux besoins principaux :

- rechercher et corriger les éventuels bugs et erreurs dans votre code pendant la phase de développement,
- détecter et récupérer des erreurs inattendues dans les applications déployées; vous pouvez notamment remplacer les boîtes de dialogue d'erreur système (disque plein, fichier manquant, etc.) par votre propre interface.
> > It is highly recommended to install an error-handling method on 4D Server, for all code running on the server. Cette méthode éviterait d'afficher des boîtes de dialogue inattendues sur le serveur et pourrait consigner les erreurs dans un fichier consacré en vue d'analyses ultérieures.

## Installer une méthode de gestion des erreurs

Dans 4D, toutes les erreurs peuvent être capturées et traitées dans une méthode projet spécifique, la méthode de **gestion des erreurs** (ou méthode de **capture d'erreurs**).

Cette méthode projet est installée pour le process en cours et sera automatiquement appelée pour toute erreur survenant dans le process, en mode interprété ou compilé. Pour *installer* cette méthode projet, il vous suffit d’appeler la commande `APPELER SUR ERREUR` avec le nom de la méthode projet en paramètre.

```4d
APPELER SUR ERREUR("IO_ERRORS") //Installe la méthode de gestion des erreurs
```

Pour ne plus détecter d'erreurs et redonner le contrôle à 4D, appelez la méthode `ON ERR CALL` à l'aide d'une chaîne vide :
```4d
ON ERR CALL("") //redonne le contrôle à 4D
```

### Portée et composants

Vous pouvez définir une seule méthode d'erreur pour l'ensemble de l'application ou différentes méthodes par module d'application. Cependant, une seule méthode peut être installée par processus.

Une méthode de gestion des erreurs installée par la commande `APPELER SUR ERREUR` s'applique uniquement à la base de données en cours d'exécution. En cas d'erreur générée par un **composant**, la méthode `APPELER SUR ERREUR` de la base hôte n'est pas appelée, et inversement.

La commande `Method called on error` permet de connaître le nom de la méthode installée par `ON ERR CALL` pour le processus en cours. Cela est particulièrement utile dans le contexte des composants car il vous permet de modifier temporairement puis de restaurer la méthode de capture d'erreur de la base de données hôte :

```4d
 $methCurrent:=Method called on error
 ON ERR CALL("NewMethod")
  //Si le document ne peut pas être ouvert, une erreur est générée
 $ref:=Open document("MyDocument")
  //Rétablissement de la méthode précédente
 ON ERR CALL($methCurrent)

```

### Gérer les erreurs dans une méthode

Dans la méthode d'erreur personnalisée, vous pouvez accéder à plusieurs informations qui vous aideront à identifier l'erreur :

- 4D maintient automatiquement un certain nombre de variables appelées **variables système**, répondant à différents besoins (voir le *manuel de référence du Langage 4D*) :

  - `Error` (entier long): Code d'erreur
  - `Error method` (texte) : nom de la méthode ayant engendré l'erreur
  - `Error line` (entier long) : Numéro de ligne de la méthode ayant généré l'erreur
  - `Error formula` (texte) : formule du code 4D (texte brut) à l'origine de l'erreur.

- La commande `GET LAST ERROR STACK` qui retourne les informations sur la pile d'erreur courant de l'application 4D.
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
