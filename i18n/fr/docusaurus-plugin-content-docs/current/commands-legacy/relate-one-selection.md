---
id: relate-one-selection
title: RELATE ONE SELECTION
slug: /commands/relate-one-selection
displayed_sidebar: docs
---

<!--REF #_command_.RELATE ONE SELECTION.Syntax-->**RELATE ONE SELECTION** ( *tableN* ; *table1* )<!-- END REF-->
<!--REF #_command_.RELATE ONE SELECTION.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| tableN | Table | &#8594;  | Nom de la table N (d'où part le lien) |
| table1 | Table | &#8594;  | Nom de la table 1 (où arrive le lien) |

<!-- END REF-->

#### Description 

<!--REF #_command_.RELATE ONE SELECTION.Summary-->La commande **RELATE ONE SELECTION** crée une nouvelle sélection d'enregistrements dans *table1* à partir de la sélection d'enregistrements de la *tableN* qui lui est liée et charge le premier enregistrement de la nouvelle sélection en tant qu'enregistrement courant.<!-- END REF--> 

Cette commande ne peut être utilisée que s'il existe un lien de N vers *1*. **RELATE ONE SELECTION** peut opérer au travers de plusieurs niveaux de liens. Il peut y avoir plusieurs tables liées entre la table N et la table *1*. Les liens peuvent être manuels ou automatiques.

**RELATE ONE SELECTION** utilise le chemin "le plus court" pour passer de la table de départ à la table d'arrivée. Si plusieurs chemins existants sont de taille équivalente, vous devez faire appel à la commande [SET FIELD RELATION](set-field-relation.md) si vous souhaitez contrôler le chemin emprunté. 

#### Exemple 

Nous souhaitons trouver tous les clients dont les factures arrivent à échéance aujourd'hui.   
L'exemple suivant propose une méthode pour créer une sélection dans la table *\[Clients\]* à partir d'une sélection d'enregistrements de la table *\[Factures\]* :

```4d
 CREATE EMPTY SET([Clients];"Paiement Du")
 QUERY([Factures]; [Factures]PaiementDu=Current date)
 While(Not(End selection([Factures])))
    RELATE ONE([Factures]ClientID)
    ADD TO SET([Clients];"Paiement Du")
    NEXT RECORD([Factures])
 End while
```

L'exemple suivant parvient au même résultat que le précédent :

```4d
 QUERY([Factures];[Factures]PaiementDu=Current date)
 RELATE ONE SELECTION([Factures];[Clients])
```

**Note :** Depuis la version 11, ce code peut également être écrit de la manière suivante sans perte de performances :  

```4d
 QUERY([Clients];[Factures]PaiementDu=Current date)
```

#### Voir aussi 

*Présentation des ensembles*  
[QUERY](query.md)  
[RELATE MANY SELECTION](relate-many-selection.md)  
[RELATE ONE](relate-one.md)  