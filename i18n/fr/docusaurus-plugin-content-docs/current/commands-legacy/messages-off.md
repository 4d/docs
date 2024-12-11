---
id: messages-off
title: MESSAGES OFF
slug: /commands/messages-off
displayed_sidebar: docs
---

<!--REF #_command_.MESSAGES OFF.Syntax-->**MESSAGES OFF**<!-- END REF-->
<!--REF #_command_.MESSAGES OFF.Params-->
| Ne requiert pas de paramètre |  |
| --- | --- |

<!-- END REF-->

#### Description 

<!--REF #_command_.MESSAGES OFF.Summary-->Les commandes **MESSAGES OFF** et [MESSAGES ON](messages-on.md) suppriment ou font apparaître les thermomètres de progression affichés par 4D lorsque le programme exécute des opérations de longue durée.<!-- END REF--> Par défaut, les messages sont affichés. 

Voici la liste des opérations qui peuvent provoquer l'affichage d'un thermomètre de progression : Application d'une formule, Génération d'un état rapide, Export de données, Import de données, Tri, Génération d'un graphe, Recherche, Recherche par formulaire, Recherche par formule.

Voici les commandes qui peuvent provoquer l'affichage d'un thermomètre de progression : 

[APPLY TO SELECTION](apply-to-selection.md)   
[QUERY](query.md)  
[QUERY SELECTION](query-selection.md)  
[QUERY BY EXAMPLE](query-by-example.md)  
[QUERY BY FORMULA](query-by-formula.md)  
[QUERY SELECTION BY FORMULA](query-selection-by-formula.md)  
[EXPORT DIF](export-dif.md)  
[EXPORT SYLK](export-sylk.md)  
[EXPORT TEXT](export-text.md)  
[BUILD APPLICATION](build-application.md)  
  
[IMPORT TEXT](import-text.md)  
[RELATE ONE SELECTION](relate-one-selection.md)  
[IMPORT DIF](import-dif.md)  
[IMPORT SYLK](import-sylk.md)  
[Max](max.md)  
[Min](min.md)  
[Average](average.md)   
[QR REPORT](qr-report.md)  
[REDUCE SELECTION](reduce-selection.md)  
[SCAN INDEX](scan-index.md)  
[RELATE MANY SELECTION](relate-many-selection.md)  
[Sum](sum.md)  
[ORDER BY](order-by.md)  
[ORDER BY FORMULA](order-by-formula.md)  
[DISTINCT VALUES](distinct-values.md) 

**Note 4D Server :** A compter de 4D Server v14 R3, les fenêtres de messages de progression ne sont plus affichées sur le serveur, ces opérations étant automatiquement listées dans la *Fenêtre d'administration de 4D Server* de la fenêtre d'administration. Si vous souhaitez forcer l'affichage de ces fenêtres de progression, vous devez appeler la commande [MESSAGES ON](messages-on.md) sur le serveur. 

#### Exemple 

L'exemple suivant supprime les thermomètres de progression avant d'effectuer un tri, puis les rétablit après l'opération :

```4d
 MESSAGES OFF
 ORDER BY([Adresses];[Adresses]CP;>;[Adresses]Nom2;>)
 MESSAGES ON
```

#### Voir aussi 

[MESSAGES ON](messages-on.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 175 |
| Thread safe | &check; |
| Interdite sur le serveur ||


