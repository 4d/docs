---
id: get-last-query-plan
title: Get last query plan
slug: /commands/get-last-query-plan
displayed_sidebar: docs
---

<!--REF #_command_.Get last query plan.Syntax-->**Get last query plan** ( *formatDesc* ) -> Résultat<!-- END REF-->
<!--REF #_command_.Get last query plan.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| formatDesc | Integer | &#x1F852; | Format de description (Texte ou XML) |
| Résultat | Text | &#x1F850; | Description du plan de la dernière recherche exécutée |

<!-- END REF-->

#### Description 

<!--REF #_command_.Get last query plan.Summary-->La commande **Get last query plan** retourne la description interne du plan d’exécution prévu pour la dernière recherche effectuée sur les données.<!-- END REF--> Pour plus d’informations sur les descriptions de recherches, reportez-vous à la commande [DESCRIBE QUERY EXECUTION](describe-query-execution.md). 

Cette description est retournée au format Texte ou XML en fonction de la valeur passée dans le paramètre *formatDesc*. Vous pouvez passer une des constantes suivantes, placées dans le thème “*Recherches*” : 

| Constante                  | Type        | Valeur |
| -------------------------- | ----------- | ------ |
| Description in text format | Entier long | 0      |
| Description in XML format  | Entier long | 1      |

Cette commande retourne une valeur significative si la commande [DESCRIBE QUERY EXECUTION](describe-query-execution.md) a été exécutée au cours de la session.   
La description du plan de la dernière recherche peut être comparée à la description du chemin réel de la dernière recherche (obtenue à l’aide de la commande [Get last query path](get-last-query-path.md)) à des fins d’optimisations.

#### Voir aussi 

[DESCRIBE QUERY EXECUTION](describe-query-execution.md)  
[Get last query path](get-last-query-path.md)  