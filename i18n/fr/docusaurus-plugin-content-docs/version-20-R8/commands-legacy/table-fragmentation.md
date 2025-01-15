---
id: table-fragmentation
title: Table fragmentation
slug: /commands/table-fragmentation
displayed_sidebar: docs
---

<!--REF #_command_.Table fragmentation.Syntax-->**Table fragmentation** ( *laTable* ) : Real<!-- END REF-->
<!--REF #_command_.Table fragmentation.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| laTable | Table | &#8594;  | Table de laquelle connaître le taux de fragmentation |
| Résultat | Real | &#8592; | Pourcentage de fragmentation |

<!-- END REF-->

#### Description 

<!--REF #_command_.Table fragmentation.Summary-->La commande **Table fragmentation** retourne le pourcentage de fragmentation logique des enregistrements de la table désignée par le paramètre *laTable*.<!-- END REF--> 

Le taux de fragmentation logique des enregistrements indique si les enregistrements sont stockés de manière ordonnée dans le fichier de données. Une fragmentation trop élevée peut ralentir sensiblement les tris et les recherches séquentiels sur la table. Un pourcentage de fragmentation de 0 correspond à une fragmentation nulle. Au-delà de 20 %, il peut être intéressant de procéder au compactage du fichier de données. 

#### Exemple 

Cette méthode de maintenance permet de demander le compactage du fichier de données en cas de fragmentation importante d’au moins une table de la base :

```4d
 ACompacter:=False
 For($i;1;Last table number)
       If(Is table number valid($i))
          If(Table fragmentation(Table($i)->)>20)
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

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1127 |
| Thread safe | &check; |


