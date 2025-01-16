---
id: last-query-path
title: Last query path
slug: /commands/last-query-path
displayed_sidebar: docs
---

<!--REF #_command_.Last query path.Syntax-->**Last query path** ( *formatDesc* ) : Text<!-- END REF-->
<!--REF #_command_.Last query path.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| formatDesc | Integer | &#8594;  | Format de description (Texte ou XML) |
| Résultat | Text | &#8592; | Description du chemin de la dernière recherche exécutée |

<!-- END REF-->

#### Description 

<!--REF #_command_.Last query path.Summary-->La commande **Last query path** retourne la description interne détaillée du chemin réel de la dernière recherche effectuée sur les données.<!-- END REF--> Pour plus d’informations sur les descriptions de recherches, reportez-vous à la documentation de la commande [DESCRIBE QUERY EXECUTION](describe-query-execution.md). 

Cette description est retournée au format Texte ou XML en fonction de la valeur passée dans le paramètre *formatDesc*. Vous pouvez passer une des constantes suivantes, placées dans le thème “*Recherches*” : 

| Constante                  | Type        | Valeur |
| -------------------------- | ----------- | ------ |
| Description in text format | Entier long | 0      |
| Description in XML format  | Entier long | 1      |

Cette commande retourne une valeur significative si la commande [DESCRIBE QUERY EXECUTION](describe-query-execution.md) a été exécutée au cours de la session. 

La description du chemin de la dernière recherche peut être comparée à la description du plan prévu de la dernière recherche (obtenue à l’aide de la commande [Last query plan](last-query-plan.md)) à des fins d’optimisations.

#### Voir aussi 

[DESCRIBE QUERY EXECUTION](describe-query-execution.md)  
[Last query plan](last-query-plan.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1045 |
| Thread safe | &check; |


