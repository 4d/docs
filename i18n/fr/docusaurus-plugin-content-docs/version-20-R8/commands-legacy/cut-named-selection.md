---
id: cut-named-selection
title: CUT NAMED SELECTION
slug: /commands/cut-named-selection
displayed_sidebar: docs
---

<!--REF #_command_.CUT NAMED SELECTION.Syntax-->**CUT NAMED SELECTION** ( {*laTable* ;} *nom* )<!-- END REF-->
<!--REF #_command_.CUT NAMED SELECTION.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| laTable | Table | &#8594;  | Table de la sélection ou Table par défaut si ce paramètre est omis |
| nom | Text | &#8594;  | Nom de la sélection temporaire à créer |

<!-- END REF-->

#### Description 

<!--REF #_command_.CUT NAMED SELECTION.Summary-->**CUT NAMED SELECTION** crée la sélection temporaire *nom* et y place la sélection courante de *laTable*.<!-- END REF--> A la différence de [COPY NAMED SELECTION](copy-named-selection.md), cette commande ne copie pas la sélection, mais la déplace.

Après l'exécution de cette commande, la sélection courante de *laTable* dans le process courant est vide. En conséquence, **CUT NAMED SELECTION** ne doit pas être utilisée lorsqu'un enregistrement est en cours de modification.

En termes d'utilisation de la mémoire, **CUT NAMED SELECTION** est plus économique que [COPY NAMED SELECTION](copy-named-selection.md). En effet, [COPY NAMED SELECTION](copy-named-selection.md) utilise 4 octets de mémoire pour chaque enregistrement de la sélection. Avec **CUT NAMED SELECTION**, seule la référence à la sélection est déplacée.

#### Exemple 

La méthode suivante vide la sélection courante de la table *\[Clients\]* :

```4d
 CUT NAMED SELECTION([Clients];"AEffacer")
 CLEAR NAMED SELECTION("AEffacer")
```

#### Voir aussi 

[CLEAR NAMED SELECTION](clear-named-selection.md)  
[COPY NAMED SELECTION](copy-named-selection.md)  
[USE NAMED SELECTION](use-named-selection.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 334 |
| Thread safe | &check; |
| Change la sélection courante ||


