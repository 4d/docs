---
id: load-set
title: LOAD SET
slug: /commands/load-set
displayed_sidebar: docs
---

<!--REF #_command_.LOAD SET.Syntax-->**LOAD SET** ( {*laTable* ;} *ensemble* ; *nomFichier* )<!-- END REF-->
<!--REF #_command_.LOAD SET.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| laTable | Table | &#8594;  | Table à laquelle appartient l'ensemble ou Table par défaut si ce paramètre est omis |
| ensemble | Text | &#8594;  | Nom de l'ensemble à créer en mémoire |
| nomFichier | Text | &#8594;  | Document disque contenant l'ensemble |

<!-- END REF-->

#### Description 

<!--REF #_command_.LOAD SET.Summary-->**LOAD SET** charge un ensemble depuis le fichier *nomFichier*, créé à l'aide de la commande [SAVE SET](save-set.md).<!-- END REF-->

L'ensemble stocké dans *nomFichier* doit s'appliquer à *laTable*. Si *ensemble* existait déjà en mémoire, il est réécrit.

Le paramètre *nomFichier* est le nom du fichier disque contenant l'ensemble. Il n'est pas nécessaire que ce fichier ait le même nom que l'ensemble. Si vous passez une chaîne vide dans *nomFichier*, une boîte de dialogue standard d'ouverture de fichiers s'affiche, permettant à l'utilisateur de choisir l'ensemble à charger.

**ATTENTION :** Rappelez-vous qu'un ensemble est l'image d'une sélection d'enregistrements au moment précis où l'ensemble est créé. Si les enregistrements représentés par l'ensemble sont modifiés, celui-ci devient obsolète. En conséquence, vous devez stocker et charger des ensembles avec des enregistrements dont le contenu varie peu. De multiples événements peuvent rendre un ensemble obsolète : modification ou suppression d'un enregistrement de l'ensemble, ou encore modification des critères ayant déterminé la création de l'ensemble.

#### Exemple 

L'exemple suivant utilise **LOAD SET** pour charger l'ensemble des locaux de l'entreprise Dupont SARL à Paris :

```4d
  // Charger l'ensemble en mémoire
 LOAD SET([Entreprises];"Paris Dupont SARL";"PaDupontEns")
 USE SET("Paris Dupont SARL") // Modifier la sélection courante avec l'ensemble
 CLEAR SET("Paris Dupont SARL") // Effacer l'ensemble de la mémoire
```

#### Variables et ensembles système 

Si l'utilisateur clique sur Annuler dans la boîte de dialogue d'ouverture de fichiers, ou si une erreur se produit pendant le chargement, la variable système OK prend la valeur 0\. Sinon, elle prend la valeur 1.

#### Voir aussi 

[SAVE SET](save-set.md)  