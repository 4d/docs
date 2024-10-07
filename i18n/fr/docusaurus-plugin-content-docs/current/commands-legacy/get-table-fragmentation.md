---
id: get-table-fragmentation
title: Get table fragmentation
slug: /commands/get-table-fragmentation
displayed_sidebar: docs
---

<!--REF #_command_.Get table fragmentation.Syntax-->**Get table fragmentation** ( *laTable* ) -> Résultat<!-- END REF-->
<!--REF #_command_.Get table fragmentation.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| laTable | Table | &#x1F852; | Table de laquelle connaître le taux de fragmentation |
| Résultat | Réel | &#x1F850; | Pourcentage de fragmentation |

<!-- END REF-->

#### Description 

<!--REF #_command_.Get table fragmentation.Summary-->La commande **Get table fragmentation** retourne le pourcentage de fragmentation logique des enregistrements de la table désignée par le paramètre *laTable*.<!-- END REF--> 

Le taux de fragmentation logique des enregistrements indique si les enregistrements sont stockés de manière ordonnée dans le fichier de données. Une fragmentation trop élevée peut ralentir sensiblement les tris et les recherches séquentiels sur la table. Un pourcentage de fragmentation de 0 correspond à une fragmentation nulle. Au-delà de 20 %, il peut être intéressant de procéder au compactage du fichier de données. 

#### Exemple 

Cette méthode de maintenance permet de demander le compactage du fichier de données en cas de fragmentation importante d’au moins une table de la base :

```4d
 ACompacter:=False
 For($i;1;Get last table number)
       If(Is table number valid($i))
          If(Get table fragmentation(Table($i)->)>20)
             ACompacter:=True
          End if
       End if
 End for
 If(ACompacter)
        // Poser un marqueur de demande de compactage
 End if
```

#### Voir aussi 

[Compact data file](compact-data-file.md)  