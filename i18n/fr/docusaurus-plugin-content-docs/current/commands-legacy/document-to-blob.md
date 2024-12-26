---
id: document-to-blob
title: DOCUMENT TO BLOB
slug: /commands/document-to-blob
displayed_sidebar: docs
---

<!--REF #_command_.DOCUMENT TO BLOB.Syntax-->**DOCUMENT TO BLOB** ( *document* ; *blob* )<!-- END REF-->
<!--REF #_command_.DOCUMENT TO BLOB.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| document | Text | &#8594;  | Nom du document |
| blob | Blob | &#8596; | Champ ou variable de type BLOB devant recevoir le document |
||| | Contenu du document |

<!-- END REF-->

#### Description 

<!--REF #_command_.DOCUMENT TO BLOB.Summary-->**DOCUMENT TO BLOB** charge le contenu de *document* dans *blob*.<!-- END REF--> Vous devez passer un nom de document valide, c'est-à-dire qui désigne un document existant qui n'est pas déjà ouvert, sinon une erreur sera générée. Si vous voulez que l'utilisateur choisisse le document, utilisez la routine [Open document](open-document.md) et la variable système Document (cf. l'exemple ci-dessous). 

#### Exemple 

Notre exemple est une base qui vous permet de stocker et chercher rapidement des documents. Dans un formulaire entrée, vous créez un bouton qui vous permet de charger un document de votre choix dans un champ de type BLOB. La méthode pour ce bouton peut être la suivante :

```4d
 $vhRefDoc:=Open document("") // Sélectionner un document
 If(OK=1) // Si un document a été choisi
    CLOSE DOCUMENT($vhRefDoc) // Nous voulons pas qu'il reste ouvert
    DOCUMENT TO BLOB(Document;[VotreTable]VotreChampBLOB) // Charger le document
    If(OK=0)
  // Gérer l'erreur
    End if
 End if
```

#### Variables et ensembles système 

La variable système OK prend la valeur 1 si le document est correctement lu. Sinon, elle prend la valeur 0 et une erreur est générée.

#### Gestion des erreurs 

* Si vous essayez de charger dans un BLOB un document qui n'existe pas ou qui est déjà ouvert par un(e) autre process ou application, une des Erreurs du gestionnaire de fichiers du système sera générée.
* Une erreur d'Entrée/Sortie peut survenir si le document est verrouillé, s'il se trouve sur un volume verrouillé ou si un problème survient pendant la lecture du document.
* S'il n'y a pas assez de mémoire pour charger le document, une erreur -108 est générée.

Dans tous les cas, vous pouvez gérer les erreurs en utilisant la commande [ON ERR CALL](on-err-call.md).

#### Voir aussi 

[BLOB TO DOCUMENT](blob-to-document.md)  
[Open document](open-document.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 525 |
| Thread safe | &check; |
| Modifie les variables | OK |


