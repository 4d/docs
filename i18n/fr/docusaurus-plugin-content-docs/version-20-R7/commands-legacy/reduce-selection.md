---
id: reduce-selection
title: REDUCE SELECTION
slug: /commands/reduce-selection
displayed_sidebar: docs
---

<!--REF #_command_.REDUCE SELECTION.Syntax-->**REDUCE SELECTION** ( {*laTable* ;} *nombre* )<!-- END REF-->
<!--REF #_command_.REDUCE SELECTION.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| laTable | Table | &#8594;  | Table de laquelle réduire la sélection ou Table par défaut si ce paramètre est omis |
| nombre | Integer | &#8594;  | Nombre d'enregistrements à conserver |

<!-- END REF-->

#### Description 

<!--REF #_command_.REDUCE SELECTION.Summary-->La commande **REDUCE SELECTION** crée une nouvelle sélection d'enregistrements pour *laTable*.<!-- END REF--> La commande réduit la sélection de *laTable* aux *nombre* premiers enregistrements. **REDUCE SELECTION** s'applique à la sélection courante de *laTable* pour le process courant. Le premier enregistrement de la nouvelle sélection courante devient l'enregistrement courant.

**Note :** Si l'instruction **REDUCE SELECTION**(laTable;0) est exécutée, il n'y a plus de sélection ni d'enregistrement courants dans la table. 

#### Exemple 

L'exemple suivant établit des statistiques pour une compétition mondiale parmi les revendeurs dans plus de 20 pays. Pour chaque pays, les trois meilleurs revendeurs qui ont vendu plus de 50 000 Euros de produits font partie des 100 meilleurs revendeurs dans le monde et sont recompensés. Avec peu de lignes de code, cette requête complexe peut être effectuée en utilisant des recherches indexées :

```4d
 CREATE EMPTY SET([Revendeurs];"Gagnants") // Créer un ensemble vide
 SCAN INDEX([Revendeurs]Montant;100;<) // Chercher à la fin de l'index
 CREATE SET([Revendeurs];"100 Meilleurs Revendeurs")
  // Placer les enregistrements sélectionnés dans un ensemble
 For($Pays;1;Records in table([Pays])) // pour chaque pays
  // Chercher les revendeurs dans ce pays
    QUERY([Revendeurs];[Revendeurs]Pays=NomPays;*) // ...qui ont vendu plus de 50000
    QUERY([Revendeurs];&;[Revendeurs]Montant vendu>=50000)
    CREATE SET([Revendeurs];"GagnantsRevendeurs") // Les placer dans un ensemble
  // Ils doivent être placés dans le groupe des 100 meilleurs revendeurs
    INTERSECTION("GagnantsRevendeurs";"100 Meilleurs Revendeurs";"GagnantsRevendeurs")
    USE SET("GagnantsRevendeurs") // Gagnants potentiels pour le pays
  // Trier les résultats en ordre décroissant
    ORDER BY([Revendeurs];[Revendeurs]Montant vendu;<)
    REDUCE SELECTION([Revendeurs];3) // Garder les trois meilleurs
    CREATE SET([Revendeurs];"GagnantsRevendeurs") // Les gagnants pour le pays
  // Les placer dans un ensemble des gagnants mondiaux
    UNION("GagnantsRevendeurs";"LesGagnants";"LesGagnants")
 End for
 CLEAR SET("100 Meilleurs Revendeurs") // Nous n'avons plus besoin de cet ensemble
 CLEAR SET("GagnantsRevendeurs") // Nous n'avons plus besoin de cet ensemble
 USE SET("LesGagnants") // Voici les gagnants
 CLEAR SET("LesGagnants") // Nous n'avons plus besoin de cet ensemble
 OUTPUT FORM([Revendeurs];"Lettre des gagnants") // Sélectionner la lettre
 PRINT SELECTION([Revendeurs]) // Imprimer les lettres
```

#### Voir aussi 

[ORDER BY](order-by.md)  
*Présentation des ensembles*  
[QUERY](query.md)  
[SCAN INDEX](scan-index.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 351 |
| Thread safe | &check; |
| Change l'enregistrement courant ||
| Change la sélection courante ||
| Interdite sur le serveur ||


