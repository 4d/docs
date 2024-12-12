---
id: save-set
title: SAVE SET
slug: /commands/save-set
displayed_sidebar: docs
---

<!--REF #_command_.SAVE SET.Syntax-->**SAVE SET** ( *ensemble* ; *nomFichier* )<!-- END REF-->
<!--REF #_command_.SAVE SET.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| ensemble | Text | &#8594;  | Nom de l'ensemble à stocker |
| nomFichier | Text | &#8594;  | Nom du fichier dans lequel stocker l'ensemble |

<!-- END REF-->

#### Description 

<!--REF #_command_.SAVE SET.Summary-->**SAVE SET** sauvegarde *ensemble* dans le fichier disque *document*.<!-- END REF-->

Il n'est pas nécessaire que *document* ait le même nom que l'ensemble. Si vous passez une chaîne vide dans *document*, une boîte de dialogue standard de sauvegarde de fichiers apparaît, permettant à l'utilisateur de saisir un nom de fichier. Vous pourrez utiliser la commande [LOAD SET](load-set.md) pour charger un ensemble stocké sur disque.

Si l'utilisateur clique sur le bouton Annuler dans la boîte de dialogue de sauvegarde de fichiers, ou si une erreur se produit lors de la sauvegarde, la variable système OK prend la valeur 0\. Sinon, elle prend la valeur 1.

La commande **SAVE SET** est souvent utilisée pour stocker sur disque les résultats d'une recherche particulièrement longue.

**ATTENTION :** Rappelez-vous qu'un ensemble est l'image d'une sélection d'enregistrements au moment précis où l'ensemble est créé. Si les enregistrements représentés par l'ensemble sont modifiés, celui-ci devient obsolète. En conséquence, vous devez créer et sauvegarder des ensembles représentant des enregistrements dont le contenu varie peu. De multiples événements peuvent rendre un ensemble obsolète : modification ou suppression d'un enregistrement de l'ensemble, ou encore modification des critères ayant déterminé la création de l'ensemble. Rappelez-vous également que les ensembles ne stockent pas les valeurs des champs. 

#### Exemple 

L'exemple suivant affiche la boîte de dialogue standard d'enregistrement de fichiers afin de permettre à l'utilisateur de saisir le nom du fichier contenant l'ensemble :

```4d
 SAVE SET("UnEnsemble";"")
```

#### Variables et ensembles système 

Si l'utilisateur clique sur le bouton Annuler dans la boîte de dialogue standard de sauvegarde de documents, ou si une erreur se produit pendant la sauvegarde, la variable système OK prend la valeur 0\. Sinon, elle prend la valeur 1.

#### Voir aussi 

[LOAD SET](load-set.md)  