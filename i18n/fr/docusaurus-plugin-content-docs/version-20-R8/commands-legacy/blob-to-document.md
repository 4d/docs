---
id: blob-to-document
title: BLOB TO DOCUMENT
slug: /commands/blob-to-document
displayed_sidebar: docs
---

<!--REF #_command_.BLOB TO DOCUMENT.Syntax-->**BLOB TO DOCUMENT** ( *document* ; *blob* )<!-- END REF-->
<!--REF #_command_.BLOB TO DOCUMENT.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| document | Text | &#8594;  | Nom du document |
| blob | Blob | &#8594;  | Nouveau contenu du document |

<!-- END REF-->

#### Description 

<!--REF #_command_.BLOB TO DOCUMENT.Summary-->**BLOB TO DOCUMENT** écrit le contenu de *document* en utilisant les données stockées dans *blob*.<!-- END REF-->   
Vous pouvez passer dans *document* le nom d’un document existant ou non. Si le *document* n’existe pas, la commande le crée. Si vous passez le nom d’un document existant, assurez-vous qu'il n'est pas déjà ouvert, sinon une erreur est générée. Si vous voulez que l'utilisateur choisisse le document, appelez les routines [Open document](open-document.md) ou [Create document](create-document.md) et utilisez la variable système Document (cf. exemple ci-dessous). 

#### Exemple 

Notre exemple est une base qui permet de stocker et de rechercher rapidement des documents. Dans un formulaire entrée, vous créez un bouton vous permettant de sauvegarder un document de votre choix qui contient des données provenant d'un champ de type BLOB. La méthode de ce bouton peut être la suivante :

```4d
 $vhRefDoc:=Open document("") // Sélectionner un document
 If(OK=1) // Si un document a été choisi
    CLOSE DOCUMENT($vhRefDoc) // Nous ne voulons pas qu'il reste ouvert
    BLOB TO DOCUMENT(Document;[VotreTable]VotreChampBLOB) // Ecrire le contenu du document
    If(OK=0)
  // Gérer l'erreur
    End if
 End if
```

#### Variables et ensembles système 

La variable système OK prend la valeur 1 si le document est correctement écrit. Sinon, elle prend la valeur 0 et une erreur est générée.

#### Gestion des erreurs 

* Si vous essayez de réécrire un document qui est déjà ouvert par un autre process ou une autre application, une des Erreurs du gestionnaire de fichiers du système sera générée.
* L'espace sur disque peut être insuffisant pour l'écriture du contenu du document.
* Une erreur d'Entrée/Sortie peut survenir si le document est verrouillé, s'il se trouve sur un volume verrouillé ou si un problème survient lors de l'écriture du document.

Dans tous les cas, vous pouvez gérer les erreurs en utilisant la commande [ON ERR CALL](on-err-call.md).

#### Voir aussi 

[Create document](create-document.md)  
[DOCUMENT TO BLOB](document-to-blob.md)  
[Open document](open-document.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 526 |
| Thread safe | &check; |
| Modifie les variables | OK, error |


