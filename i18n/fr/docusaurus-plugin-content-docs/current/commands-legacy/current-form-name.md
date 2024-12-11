---
id: current-form-name
title: Current form name
slug: /commands/current-form-name
displayed_sidebar: docs
---

<!--REF #_command_.Current form name.Syntax-->**Current form name**  : Text<!-- END REF-->
<!--REF #_command_.Current form name.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| Résultat | Text | &#8592; | Nom du formulaire projet courant ou du formulaire table courant dans le process |

<!-- END REF-->

#### Description 

<!--REF #_command_.Current form name.Summary-->La commande **Current form name** retourne le nom du formulaire courant défini pour le process.<!-- END REF--> Le formulaire courant peut être un formulaire projet ou un formulaire table. 

Par défaut, si vous n’avez pas appelé la commande [FORM LOAD](../commands/form-load.md) dans le process courant, le formulaire courant est le formulaire en cours d’affichage ou d’impression. Si vous avez appelé la commande [FORM LOAD](../commands/form-load.md) dans le process, le formulaire courant reste celui défini par cette commande jusqu’à l’appel de [FORM UNLOAD](form-unload.md) (ou [CLOSE PRINTING JOB](close-printing-job.md)).

La commande retourne :

* le nom du formulaire s'il a été défini dans l'éditeur de formulaires de 4D, ou
* le nom du fichier sans extension si le formulaire a été créé à partir d'un fichier .json, ou
* la valeur de l'attribut "name" si le formulaire a été créé à partir d'un objet 4D, ou
* une chaîne vide s’il n’y a pas de formulaire courant défini pour le process.

#### Exemple 1 

Dans un formulaire de saisie, vous placez le code suivant dans un bouton :

```4d
 var $FormName : Text
 $fen:=Open form window([Adhérents];"Entrée";Plain form window)
 DIALOG([Adhérents];"Entrée")
 $FormName:=Current form name
     // $FormName = "Entrée"
 FORM LOAD([Adhérents];"Drag")
 $FormName:=Current form name
     // $FormName = "Drag"
     //...
```

#### Exemple 2 

Vous souhaitez obtenir le formulaire courant si c’est un formulaire projet :

```4d
 $PointerTable:=Current form table
 If(Nil($PointerTable)) //il s’agit d’un formulaire projet
       $FormName:=Current form name
       ... // traitement
 End if
```

#### Voir aussi 

[FORM LOAD](../commands/form-load.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 1298 |
| Thread safe | &check; |
| Interdite sur le serveur ||


