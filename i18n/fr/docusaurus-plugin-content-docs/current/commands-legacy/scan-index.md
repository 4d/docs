---
id: scan-index
title: SCAN INDEX
slug: /commands/scan-index
displayed_sidebar: docs
---

<!--REF #_command_.SCAN INDEX.Syntax-->**SCAN INDEX** ( *leChamp* ; *nombre* {; > ou <} )<!-- END REF-->
<!--REF #_command_.SCAN INDEX.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| leField | Field | &#8594;  | Champ indexé avec lequel "scanner" les enregistrements |
| nombre | Integer | &#8594;  | Nombre d'enregistrements à retourner |
| > ou < | Opérateur | &#8594;  | > à partir du début de l'index < à partir de la fin de l'index |

<!-- END REF-->

#### Description 

<!--REF #_command_.SCAN INDEX.Summary-->La commande **SCAN INDEX** retourne une sélection de *nombre* enregistrements de la table du champ *leChamp*.<!-- END REF--> Cette commande est extrêmement rapide car elle utilise l'index.  
Si vous passez *<*, **SCAN INDEX** retourne *nombre* enregistrements à partir de la fin de l'index (valeurs supérieures). Si vous passez *\>*, **SCAN INDEX** retourne *nombre* enregistrements à partir du début de l'index (valeurs inférieures). Si vous ne passez pas le dernier paramètre, la commande retourne *nombre* enregistrements à partir du début de l'index (équivaut à passer *\>*).

**Note :** La sélection obtenue n'est pas triée.   
  
**SCAN INDEX** fonctionne uniquement avec des champs indexés. Cette commande modifie la sélection courante de la table pour le process courant et charge le premier enregistrement de la sélection en tant qu'enregistrement courant.

Si vous spécifiez un nombre d'enregistrements supérieur au nombre d'enregistrements présents dans la table, **SCAN INDEX** retourne tous les enregistrements.

##### 

**Note :** Cette commande ne prend pas en charge les champs de type Objet.

#### Exemple 

L'exemple suivant envoie des lettres aux 50 plus mauvais clients puis aux 50 meilleurs clients : 

```4d
 SCAN INDEX([Clients]TotalDû;50;<) // Obtenir la liste des 50 plus mauvais clients
 ORDER BY([Clients]CodePostal;>) // Trier par code postal
 FORM SET OUTPUT([Clients];"Menace")
 PRINT SELECTION([Clients]) // Imprimer les lettres
 SCAN INDEX([Clients]TotalDû;50;>) // Obtenir la liste des 50 meilleurs clients
 ORDER BY([Clients]CodePostal;>) // Trier par code postal
 FORM SET OUTPUT([Clients];"Remerciement")
 PRINT SELECTION([Clients]) // Imprimer les lettres
```

#### Voir aussi 

[ORDER BY](order-by.md)  
[QUERY](query.md)  
[REDUCE SELECTION](reduce-selection.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 350 |
| Thread safe | &check; |
| Change l'enregistrement courant ||
| Change la sélection courante ||
| Interdite sur le serveur ||


