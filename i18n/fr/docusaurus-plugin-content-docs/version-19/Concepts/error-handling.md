---
id: error-handling
title: Gestion des erreurs
---

Le traitement des erreurs consiste à anticiper les erreurs pouvant survenir dans votre application et à y répondre. 4D fournit un support complet pour la détection et la signalisation des erreurs lors de l'exécution, ainsi que pour l'analyse de leurs conditions.

La gestion des erreurs répond à deux besoins principaux :

- rechercher et corriger les éventuels bugs et erreurs dans votre code pendant la phase de développement,
- détecter et récupérer des erreurs inattendues dans les applications déployées; vous pouvez notamment remplacer les boîtes de dialogue d'erreur système (disque plein, fichier manquant, etc.) par votre propre interface.
> Il est fortement recommandé d'installer une méthode de gestion des erreurs sur 4D Server, pour tout le code exécuté sur le serveur. Cette méthode évitera d'afficher des boîtes de dialogue inattendues sur le serveur et pourra consigner les erreurs dans un fichier dédié en vue d'analyses ultérieures.


## Erreur ou statut

De nombreuses fonctions de classe 4D, telles que `entity.save()` ou `transporter.send()`, retournent un objet *status*. Cet objet permet de stocker les erreurs "prévisibles" dans le contexte d'exécution, telles qu'un mot de passe invalide, une entité verrouillée, etc., qui ne stoppe pas l'exécution du programme. Cette catégorie d'erreurs peut être gérée par du code habituel.

D'autres erreurs "imprévisibles" peuvent inclure une erreur en écriture sur le disque, une panne de réseau ou toute interruption inattendue. Cette catégorie d'erreurs génère des exceptions et doit être traitée par une méthode de gestion des erreurs.


## Installer une méthode de gestion des erreurs

Dans 4D, toutes les erreurs peuvent être capturées et traitées dans une méthode projet spécifique, la méthode de **gestion des erreurs** (ou méthode de **capture d'erreurs**).

Cette méthode projet est installée pour le process en cours et sera automatiquement appelée pour toute erreur survenant dans le process, en mode interprété ou compilé. Pour *installer* cette méthode projet, il vous suffit d’appeler la commande `ON ERR CALL` avec le nom de la méthode projet en paramètre. Par exemple :

```4d
ON ERR CALL("IO_ERRORS") //Installe la méthode de gestion des erreurs
```

Pour ne plus détecter d'erreurs et redonner le contrôle à 4D, appelez la méthode `ON ERR CALL` à l'aide d'une chaîne vide :
```4d
ON ERR CALL("") //redonne le contrôle à 4D
```

La commande `Method called on error` vous permet de connaître le nom de la méthode installée par `ON ERR CALL` pour le process courant. Cela est particulièrement utile dans le contexte du code générique car il vous permet de modifier temporairement puis de restaurer la méthode de capture d'erreur :

```4d
 $methCurrent:=Method called on error
 ON ERR CALL("NewMethod")
  //Si le document ne peut pas être ouvert, une erreur est générée
 $ref:=Open document("MyDocument")
  //Rétablissement de la méthode précédente
 ON ERR CALL($methCurrent)

```

### Portée et composants

Vous pouvez définir une seule méthode de gestion des erreurs pour l'ensemble de l'application ou différentes méthodes par module d'application. Cependant, une seule méthode peut être installée par processus.

Une méthode de gestion des erreurs installée par la commande `ON ERR CALL` s'applique uniquement à l'application en cours d'exécution. En cas d'erreur générée par un **composant**, la méthode `ON ERR CALL` de l'application hôte n'est pas appelée, et inversement.


### Gérer les erreurs dans une méthode

Dans la méthode d'erreur personnalisée, vous pouvez accéder à plusieurs informations qui vous aideront à identifier l'erreur :

- des variables système dédiées :

  - `Error` (entier long): Code d'erreur
  - `Error method` (texte) : nom de la méthode ayant engendré l'erreur
  - `Error line` (entier long) : Numéro de ligne de la méthode ayant généré l'erreur
  - `Error formula` (texte) : formule du code 4D (texte brut) à l'origine de l'erreur.

:::info

4D gère automatiquement un certain nombre de variables appelées**variables système**, répondant à différents besoins. :::</p> 

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

Si vous souhaitez essentiellement masquer la boite de dialogue d'erreur standard, vous pouvez installer une méthode de gestion d'erreurs vide. La variable système `Error` peut être testée dans n'importe quelle méthode, c'est-à-dire en dehors de la méthode de gestion d'erreurs :



```4d
ON ERR CALL("emptyMethod") //emptyMethod existe mais est vide
$doc:=Open document( "myFile.txt")
If (Error=-43)
    ALERT("File not found.")
End if
ON ERR CALL.("")
```


