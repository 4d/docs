---
id: open-resource-file
title: Open resource file
slug: /commands/open-resource-file
displayed_sidebar: docs
---

<!--REF #_command_.Open resource file.Syntax-->**Open resource file** ( *resNomFichier* {; *typeFichier*} ) : Time<!-- END REF-->
<!--REF #_command_.Open resource file.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| resNomFichier | Text | &#8594;  | Nom ou chemin d'accès complet du fichier de ressources ou chaîne vide pour afficher la boîte de dialogue standard d'ouverture de fichiers |
| typeFichier | Text | &#8594;  | Type de fichier Mac OS (chaîne de 4 caractères), ou extension de fichier Windows (chaîne de 1 à 3 caractères), ou fichier de ressources ("res " / .RES) si omis |
| Résultat | Time | &#8592; | Numéro de référence du fichier de ressources |

<!-- END REF-->

#### Description 

<!--REF #_command_.Open resource file.Summary-->La commande **Open resource file** ouvre le fichier de ressources dont vous avez passé le nom ou le chemin d'accès complet dans le paramètre *resNomFichier*.<!-- END REF-->

Si vous passez un nom de fichier, celui-ci doit se trouver dans le même dossier/répertoire que le fichier de structure de la base. Pour ouvrir un fichier de ressources se trouvant dans un autre dossier, passez un chemin d'accès complet dans *resNomFichier*.

Si vous passez une chaîne vide dans *resNomFichier*, la boîte de dialogue standard d'ouverture de fichiers apparaît, permettant à l'utilisateur de sélectionner le fichier à ouvrir. Si l'utilisateur clique sur **Annuler** dans cette boîte de dialogue, aucun fichier de ressources n'est ouvert, **Open resource file** retourne une valeur nulle dans [RefDoc](# "Référence unique de document (valeur de type heure)") et la variable OK prend la valeur 0.

Si le fichier de ressources est correctement ouvert, **Open resource file** retourne son numéro de référence de fichier et met la variable OK à 1\. Si le fichier de ressources n'existe pas ou si le fichier de que vous tentez d'ouvrir n'est pas un fichier de ressources, une erreur est générée. 

* Sous Mac OS, si vous utilisez la boîte de dialogue standard d'ouverture de fichiers, tous les fichiers sont présentés par défaut. Pour ne faire apparaître que les fichiers d'un type particulier, spécifiez-le dans le paramètre optionnel *typeFichier*.
* Sous Windows, si vous utilisez la boîte de dialogue standard d'ouverture de fichiers, tous les fichiers sont présentés par défaut. Pour ne faire apparaître que les fichiers d'un type particulier, passez dans *typeFichier* une extension de fichier Windows de 1 à 3 caractères ou un type de fichier Macintosh associé à une extension Windows à l'aide de la commande *\_o\_MAP FILE TYPES*.

N'oubliez pas d'appeler finalement [CLOSE RESOURCE FILE](close-resource-file.md) pour le fichier de ressources. Notez cependant que 4D referme automatiquement tous les fichiers de ressources ouverts par l'intermédiaire de **Open resource file** lorsque vous quittez l'application ou ouvrez une autre base de données.

A la différence de la commande [Open document](open-document.md) qui ouvre par défaut un document avec un accès exclusif en lecture-écriture, **Open resource file** vous permet d'ouvrir un fichier de ressources déjà ouvert dans la session 4D. Par exemple, lorsque vous tentez d'ouvrir deux fois le même document avec [Open document](open-document.md), une erreur d'E/S vous est retournée lors de la seconde opération. En revanche, vous pouvez accéder à un fichier de ressources déjà ouvert lors de la session 4D : **Open resource file** retourne son numéro de référence. Même lorsque vous ouvrez plusieurs fois un fichier de ressources, il vous suffit d'appeler [CLOSE RESOURCE FILE](close-resource-file.md) une seule fois pour refermer ce fichier. Notez que ce fonctionnement n'est valable que lorsque le fichier de ressources est ouvert à l'intérieur de la session 4D. Si vous tentez d'ouvrir un fichier de ressources déjà ouvert par une autre application, une erreur d'E/S vous sera retournée.

**ATTENTION :**

* Il est interdit d'accéder aux fichiers de ressources des applications 4D et des bases fusionnées avec 4D Desktop.
* Bien que techniquement possible, l'accès au fichier de ressources de la structure de la base est fortement déconseillé car ce fonctionnement devient caduc lorsque la base est compilée et fusionnée avec 4D Desktop.  
Si toutefois vous accédez au fichier de ressources de la structure et souhaitez ajouter, supprimer ou modifier des ressources par programmation, pensez à tester l'environnement dans lequel la base s'exécute. Avec 4D Server, cela posera certainement d'épineux problèmes. Si, par exemple, vous modifiez une ressource sur le poste serveur (via une méthode base ou une procédure stockée), vous allez en définitive perturber le système d'administration de 4D Server chargé de distribuer de manière transparente les ressources aux postes clients. Notez qu'avec 4D Client vous n'accédez pas directement au fichier de structure : il est situé sur le poste serveur.
* Pour toutes ces raisons, si vous exploitez des ressources, vous devez les stocker dans vos propres fichiers.
* Lorsque vous travaillez avec vos propres ressources, n'utilisez pas de numéros de ressources négatifs, ils sont réservés au Système d'exploitation. N'utilisez pas non plus de numéros situés entre 0 et 14 999, cet intervalle est réservé à 4D. Pour vos propres ressources, utilisez les numéros situés entre 15 000 et 32 767\. Rappelez-vous que dès qu'un fichier de ressources est ouvert, il devient le premier maillon de la chaîne des fichiers de ressources, et c'est dans ce fichier que les ressources seront recherchées en premier lieu. En conséquence, si vous stockez dans ce fichier des ressources dont les numéros appartiennent aux intervalles réservés au Système ou à 4D, ces ressources seront utilisées non seulement par les commandes telles que [GET RESOURCE](get-resource.md) mais également par les routines internes de l'application 4D elle-même. Si vous n'êtes pas absolument certain de ce que vous faites, n'utilisez pas les intervalles réservés, cela peut conduire à des erreurs système.
* Un fichier de ressources est très structuré et ne peut contenir plus 2 700 ressources. Si vous travaillez avec des fichiers comportant un grand nombre de ressources, il est conseillé de tester ce nombre avant d'ajouter de nouvelles ressources à un fichier (reportez-vous à l'exemple Nombre de ressources dans la description de la commande [RESOURCE TYPE LIST](resource-type-list.md) ).

Une fois que vous avez ouvert un fichier de ressources, vous pouvez analyser son contenu à l'aide des commandes [RESOURCE TYPE LIST](resource-type-list.md) et [RESOURCE LIST](resource-list.md).

#### Exemple 1 

Dans l'exemple suivant, nous cherchons à ouvrir sous Windows le fichier de ressources "MesPrefs.res" situé dans le dossier de la base :

```4d
 $vhResFile:=Open resource file("MesPrefs";"res ")
```

Sous Mac OS, l'exemple recherchera le fichier “MesPrefs”.

#### Exemple 2 

Cet exemple tente d'ouvrir sous Windows le fichier de ressources "MesPrefs.rsr" situé dans le dossier de la base :

```4d
 $vhResFile:=Open resource file("MesPrefs";"rsr")
```

Sous Mac OS, l'exemple recherchera le fichier “MesPrefs”.

#### Exemple 3 

L'exemple suivant fait apparaître la boîte de dialogue standard d'ouverture de fichiers, dans laquelle tous les types de documents sont affichés :

```4d
 $vhResFile:=Open resource file("")
```

#### Exemple 4 

L'exemple suivant fait apparaître la boîte de dialogue standard d'ouverture de fichiers, dans laquelle seuls les documents créés à l'aide de la fonction  et utilisant le type par défaut sont affichés : 

```4d
 $vhResFile:=Open resource file("";"res ")
 If(OK=1)
    ALERT("Vous venez d'ouvrir "+Document+”.")
    CLOSE RESOURCE FILE($vhResFile)
 End if
```

#### Variables et ensembles système 

Si le fichier de ressources est correctement ouvert, la variable système OK prend la valeur 1\. Si le fichier de ressources n'a pas pu être ouvert ou si l'utilisateur a cliqué sur le bouton Annuler dans la boîte de dialogue standard d'ouverture de fichiers, la variable OK prend la valeur 0 (zéro).

Si le fichier de ressources est correctement ouvert par l'intermédiaire de la boîte de dialogue standard d'ouverture de fichiers, la variable système Document contient le chemin d'accès au fichier.

#### Gestion des erreurs 

Si le fichier de ressources n'a pas pu être ouvert à la suite d'un problème de ressource ou d'E/S, une erreur est générée. Vous pouvez intercepter cette erreur à l'aide d'une méthode de gestion d'erreurs installée par la commande [ON ERR CALL](on-err-call.md).

#### Voir aussi 

[CLOSE RESOURCE FILE](close-resource-file.md)  
*Ressources*  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 497 |
| Thread safe | &cross; |
| Modifie les variables | OK, Document, error |


