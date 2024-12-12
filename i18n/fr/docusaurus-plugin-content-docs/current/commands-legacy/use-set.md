---
id: use-set
title: USE SET
slug: /commands/use-set
displayed_sidebar: docs
---

<!--REF #_command_.USE SET.Syntax-->**USE SET** ( *ensemble* )<!-- END REF-->
<!--REF #_command_.USE SET.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| ensemble | Text | &#8594;  | Nom de l'ensemble à utiliser |

<!-- END REF-->

#### Description 

<!--REF #_command_.USE SET.Summary-->**USE SET** crée, avec les enregistrements de *ensemble*, une nouvelle sélection courante pour la table à laquelle *ensemble* appartient.<!-- END REF-->

Au moment où vous créez un ensemble, la position de l'enregistrement courant est sauvegardée. **USE SET** récupère cette information et fait de l'enregistrement le nouvel enregistrement courant. Si vous supprimez cet enregistrement avant d'exécuter **USE SET**, 4D sélectionne comme enregistrement courant le premier enregistrement de l'ensemble. Les commandes du thème "Ensembles", [UNION](union.md), [INTERSECTION](intersection.md), [DIFFERENCE](difference.md) et [ADD TO SET](add-to-set.md)  réinitialisent l'enregistrement courant.   
Si vous avez créé un ensemble ne contenant pas de position d'enregistrement courant, **USE SET** désigne le premier enregistrement de l'ensemble comme enregistrement courant.

**ATTENTION :** Rappelez-vous qu'un ensemble est la représentation d'une sélection d'enregistrements à un instant donné (au moment de la création de l'ensemble). Si les enregistrements que l'ensemble représente sont modifiés, il se peut que celui-ci ne soit plus valide. En conséquence, un ensemble sauvegardé sur disque doit généralement représenter un groupe d'enregistrements qui ne change pas souvent. De multiples événements peuvent rendre un ensemble invalide, comme par exemple la suppression ou la modification d'un enregistrement de l'ensemble, ou encore la modification des critères de création de l'ensemble. 

#### Exemple 

L'exemple suivant utilise [LOAD SET](load-set.md) pour charger un ensemble des sites de la société Dubois à Paris. **USE SET** est ensuite appelée pour faire de l'ensemble la sélection courante :

```4d
  // Charger l'ensemble en mémoire
 LOAD SET([Entreprises];"DuboisParis";"ENSDuboisParis")
 USE SET("DuboisParis") // Modification de la sélection courante
 CLEAR SET("DuboisParis") // Effacement de l'ensemble de la mémoire
```

#### Voir aussi 

[CLEAR SET](clear-set.md)  
[LOAD SET](load-set.md)  