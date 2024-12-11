---
id: use-named-selection
title: USE NAMED SELECTION
slug: /commands/use-named-selection
displayed_sidebar: docs
---

<!--REF #_command_.USE NAMED SELECTION.Syntax-->**USE NAMED SELECTION** ( *nom* )<!-- END REF-->
<!--REF #_command_.USE NAMED SELECTION.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| nom | Text | &#8594;  | Nom de la sélection temporaire à utiliser |

<!-- END REF-->

#### Description 

<!--REF #_command_.USE NAMED SELECTION.Summary-->**USE NAMED SELECTION** désigne la sélection temporaire *nom* comme sélection courante pour la table à laquelle elle appartient.<!-- END REF-->

Lorsque vous créez une sélection temporaire, l'enregistrement courant est aussi stocké par la sélection temporaire. **USE NAMED SELECTION** récupère la position de cet enregistrement et en fait l'enregistrement courant. L'enregistrement courant est alors chargé. S'il a été modifié après la création de la sélection temporaire *nom*, il doit être sauvegardé avant que la commande **USE NAMED SELECTION** soit appelée, afin de ne pas perdre les informations modifiées.

* Si *nom* a été créée par la commande [COPY NAMED SELECTION](copy-named-selection.md), la sélection temporaire est utilisée comme sélection courante de la table à laquelle elle appartient. La sélection temporaire *nom* existe en mémoire jusqu'à ce qu'elle soit effacée. Pour récupérer l'espace mémoire occupé par *nom*, appelez la commande [CLEAR NAMED SELECTION](clear-named-selection.md).
* Si *nom* a été créée par la commande [CUT NAMED SELECTION](cut-named-selection.md), elle est utilisée comme sélection courante de la table à laquelle elle appartient et *nom* n'existe plus en mémoire.

N'oubliez pas qu'une sélection temporaire est la représentation d'une sélection courante à un instant donné. Si les enregistrements que la sélection temporaire représente sont modifiés, celle-ci devient obsolète. En conséquence, une sélection temporaire doit représenter une sélection d'enregistrements dont le contenu est relativement stable.   
Différents événements peuvent rendre une sélection temporaire obsolète : la modification ou la suppression d'un enregistrement appartenant à la sélection temporaire ou la modification des critères de création de la sélection temporaire.

#### Voir aussi 

[CLEAR NAMED SELECTION](clear-named-selection.md)  
[COPY NAMED SELECTION](copy-named-selection.md)  
[CUT NAMED SELECTION](cut-named-selection.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 332 |
| Thread safe | &check; |
| Change l'enregistrement courant ||
| Change la sélection courante ||
| Interdite sur le serveur ||


