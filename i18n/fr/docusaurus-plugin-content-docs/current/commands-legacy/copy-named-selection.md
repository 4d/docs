---
id: copy-named-selection
title: COPY NAMED SELECTION
slug: /commands/copy-named-selection
displayed_sidebar: docs
---

<!--REF #_command_.COPY NAMED SELECTION.Syntax-->**COPY NAMED SELECTION** ( {*laTable* ;} *nom* )<!-- END REF-->
<!--REF #_command_.COPY NAMED SELECTION.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| laTable | Table | &#8594;  | Table de laquelle il faut copier la sélection ou Table par défaut si ce paramètre est omis |
| nom | Text | &#8594;  | Nom de la sélection temporaire à créer |

<!-- END REF-->

#### Description 

<!--REF #_command_.COPY NAMED SELECTION.Summary-->**COPY NAMED SELECTION** copie la sélection courante de *laTable* dans une sélection temporaire *nom*.<!-- END REF--> La table par défaut du process courant est utilisée si le paramètre optionnel *laTable* n'est pas spécifié. La sélection temporaire *nom* contient une copie de la sélection. La sélection courante et l'enregistrement courant de *laTable* pour le process courant ne sont pas modifiés.

Une sélection temporaire ne contient pas les enregistrements, mais une liste triée des références aux enregistrements. Chaque référence à un enregistrement prend 4 octets en mémoire. Ceci signifie que lorsqu'une sélection est copiée à l'aide de la commande **COPY NAMED SELECTION**, la mémoire requise est 4 octets multipliés par le nombre d'enregistrements dans la sélection. Comme les sélections temporaires restent en mémoire, il vous faut assez de mémoire pour la sélection temporaire ainsi que la sélection courante de la table pour le process. 

**4D Server :** La sélection temporaire *nom* ainsi que la sélection courante sont logées dans la mémoire du poste serveur. En conséquence, assurez-vous que le serveur dispose de suffisamment de mémoire.

Utilisez la commande [CLEAR NAMED SELECTION](clear-named-selection.md) pour libérer la mémoire utilisée par *nom*.

#### Exemple 

L'exemple suivant permet de vérifier s'il y a des factures impayées dans la table \[Personnes\]. La sélection est triée puis sauvegardée. Nous cherchons toutes les factures qui n'ont pas été payées. Ensuite, nous réutilisons la sélection et effaçons la sélection temporaire en mémoire :

```4d
 ALL RECORDS([Personnes])
  //Permettre à l'utilisateur de trier la sélection
 ORDER BY([Personnes])
  // Stocker la sélection dans une sélection temporaire
 COPY NAMED SELECTION([Personnes];"TriéeUtilisateur")
  // Rechercher les factures impayées
 QUERY([Personnes];[Personnes]FactureDue=True)
  // Si un enregistrement a été trouvé
 If(Records in selection([Personnes])>0)
  // Informer l'utilisateur
    ALERT("Oui, quelques factures n'ont pas été réglées.")
 End if
  // Réutiliser la sélection temporaire triée
 USE NAMED SELECTION("TriéeUtilisateur")
  // Effacer la sélection de la mémoire
 CLEAR NAMED SELECTION("TriéeUtilisateur")
```

#### Voir aussi 

[CLEAR NAMED SELECTION](clear-named-selection.md)  
[CUT NAMED SELECTION](cut-named-selection.md)  
[USE NAMED SELECTION](use-named-selection.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 331 |
| Thread safe | &check; |
| Interdite sur le serveur ||


