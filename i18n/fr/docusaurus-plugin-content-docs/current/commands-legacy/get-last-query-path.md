---
id: get-last-query-path
title: Get last query path
slug: /commands/get-last-query-path
displayed_sidebar: docs
---

<!--REF #_command_.Get last query path.Syntax-->**Get last query path** ( *formatDesc* ) -> Résultat<!-- END REF-->
<!--REF #_command_.Get last query path.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| formatDesc | Integer | &srarr; | Format de description (Texte ou XML) |
| Résultat | Text | &larr; | Description du chemin de la dernière recherche exécutée |

<!-- END REF-->

#### Description 

<!--REF #_command_.Get last query path.Summary-->La commande **Get last query path** retourne la description interne détaillée du chemin réel de la dernière recherche effectuée sur les données.<!-- END REF--> Pour plus d’informations sur les descriptions de recherches, reportez-vous à la documentation de la commande [DESCRIBE QUERY EXECUTION](describe-query-execution.md). 

Cette description est retournée au format Texte ou XML en fonction de la valeur passée dans le paramètre *formatDesc*. Vous pouvez passer une des constantes suivantes, placées dans le thème “*Recherches*” : 

| Constante                  | Type        | Valeur |
| -------------------------- | ----------- | ------ |
| Description in text format | Entier long | 0      |
| Description in XML format  | Entier long | 1      |

Cette commande retourne une valeur significative si la commande [DESCRIBE QUERY EXECUTION](describe-query-execution.md) a été exécutée au cours de la session. 

La description du chemin de la dernière recherche peut être comparée à la description du plan prévu de la dernière recherche (obtenue à l’aide de la commande [Get last query plan](get-last-query-plan.md)) à des fins d’optimisations.

#### Voir aussi 

[DESCRIBE QUERY EXECUTION](describe-query-execution.md)  
[Get last query plan](get-last-query-plan.md)  