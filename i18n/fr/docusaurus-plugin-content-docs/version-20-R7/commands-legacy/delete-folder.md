---
id: delete-folder
title: DELETE FOLDER
slug: /commands/delete-folder
displayed_sidebar: docs
---

<!--REF #_command_.DELETE FOLDER.Syntax-->**DELETE FOLDER** ( *dossier* {; *optionSuppression*} )<!-- END REF-->
<!--REF #_command_.DELETE FOLDER.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| dossier | Text | &#8594;  | Nom ou chemin d’accès complet du dossier à supprimer |
| optionSuppression | Integer | &#8594;  | Option de suppression du dossier |

<!-- END REF-->

#### Description 

<!--REF #_command_.DELETE FOLDER.Summary-->La commande **DELETE FOLDER** supprime le dossier dont vous avez passé le nom ou le chemin d’accès complet dans *dossier*.<!-- END REF--> 

Par défaut pour des raisons de sécurité, si vous omettez le paramètre *optionSuppression*, **DELETE FOLDER** permet uniquement la suppression de dossiers vides. Si vous souhaitez que cette commande puisse supprimer des dossiers non vides, vous devez utiliser le paramètre *optionSuppression*. Vous pouvez passer dans ce paramètre l'une des constantes suivantes, placées dans le thème "*Documents système*" :

| Constante            | Type        | Valeur | Comment                                            |
| -------------------- | ----------- | ------ | -------------------------------------------------- |
| Delete only if empty | Entier long | 0      | Supprime le dossier uniquement s'il est vide       |
| Delete with contents | Entier long | 1      | Supprime le dossier ainsi que son éventuel contenu |

* Si vous passez Delete only if empty ou omettez le paramètre *optionSuppression* :  
   * Le dossier désigné par le paramètre *dossier* n'est supprimé que s'il est vide ; sinon, la commande ne fait rien et une erreur -47 (Fichier déjà ouvert, ou dossier non vide) est générée.  
   * Si le dossier désigné n'existe pas, l'erreur -120 (Tentative d'accès à un fichier avec un chemin d'accès spécifiant un répertoire inexistant) est générée.
* Si vous passez Delete with contents :  
   * Le dossier ainsi que tout son contenu sont supprimés.  
   **Attention :** Si le dossier est verrouillé ou en lecture seule, il sera néanmoins supprimé si l'utilisateur courant dispose des droits d’accès nécessaires.  
   * Si le dossier désigné ou un des fichiers qu'il contient ne peut pas être supprimé, la procédure de suppression est abandonnée dès que le premier élément inaccessible est atteint, et une erreur(\*) est retournée. Dans ce cas, le dossier ne sera que partiellement supprimé. Il est cependant possible d'utiliser la commande [Last errors](last-errors.md)  pour obtenir le nom et le chemin d’accès du fichier à l'origine de l'erreur.  
   * Si le dossier désigné n'existe pas, la commande ne fait rien et aucune erreur n'est générée.  
   (\*) sous Windows : -54 (Tentative d'écriture dans un fichier verrouillé)  
   sous OS X : -45 (Fichier verrouillé ou chemin d'accès invalide)

Vous pouvez intercepter ces erreurs à l’aide d’une méthode installée par la commande [ON ERR CALL](on-err-call.md) .

#### Voir aussi 

  
[DELETE DOCUMENT](delete-document.md)  