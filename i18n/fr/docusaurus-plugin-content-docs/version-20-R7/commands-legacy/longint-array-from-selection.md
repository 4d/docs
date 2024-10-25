---
id: longint-array-from-selection
title: LONGINT ARRAY FROM SELECTION
slug: /commands/longint-array-from-selection
displayed_sidebar: docs
---

<!--REF #_command_.LONGINT ARRAY FROM SELECTION.Syntax-->**LONGINT ARRAY FROM SELECTION** ( *laTable* ; *tabEnrg* {; *tempo*} )<!-- END REF-->
<!--REF #_command_.LONGINT ARRAY FROM SELECTION.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| laTable | Table | &#8594;  | Table de la sélection courante |
| tabEnrg | Integer array | &#8592; | Tableau de numéros d’enregistrements |
| tempo | Text | &#8594;  | Nom de la sélection temporaire ou Sélection courante si ce paramètre est omis |

<!-- END REF-->

#### Description 

<!--REF #_command_.LONGINT ARRAY FROM SELECTION.Summary-->La commande **LONGINT ARRAY FROM SELECTION** remplit le tableau *tabEnrg* avec les numéros (absolus) des enregistrements faisant partie de la sélection temporaire *tempo*.<!-- END REF-->

Si vous ne passez pas le paramètre *tempo*, la commande utilise la sélection courante de la table *table*. 

**Note :** L’élément n° 0 du tableau *tabEnrg* est initialisé à -1.

#### Exemple 

Vous voulez récupérer les numéros des enregistrements de la sélection courante :

```4d
 ARRAY LONGINT($_tRecNum;0) //obligatoire pour le mode compilé
 LONGINT ARRAY FROM SELECTION([Clients];$_tRecNum)
```

#### Voir aussi 

[CREATE SELECTION FROM ARRAY](create-selection-from-array.md)  