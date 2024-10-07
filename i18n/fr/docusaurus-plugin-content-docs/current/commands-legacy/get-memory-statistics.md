---
id: get-memory-statistics
title: GET MEMORY STATISTICS
slug: /commands/get-memory-statistics
displayed_sidebar: docs
---

<!--REF #_command_.GET MEMORY STATISTICS.Syntax-->**GET MEMORY STATISTICS** ( *typeInfo* ; *tabNoms* ; *tabValeurs* ; *tabNombre* )<!-- END REF-->
<!--REF #_command_.GET MEMORY STATISTICS.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| typeInfo | Integer | &srarr; | Sélecteur d’information à obtenir |
| tabNoms | Text array | &harr; | Libellés des informations |
| tabValeurs | Real array | &harr; | Valeurs des informations |
| tabNombre | Real array | &harr; | Nombre d’objets concernés (si disponible) |

<!-- END REF-->

#### Description 

<!--REF #_command_.GET MEMORY STATISTICS.Summary-->La commande **GET MEMORY STATISTICS** permet de récupérer des informations relatives à l’utilisation du cache de données par 4D.<!-- END REF--> Ces informations peuvent être utiles à l’analyse du fonctionnement de l’application. 

Le paramètre *typeInfo* indique le type d'informations que vous souhaitez obtenir. Dans les versions 4D actuelles, un seul type est pris en charge (*typeInfo* \=1)

A l’issue de l’exécution de la commande, les statistiques demandées sont fournies dans les tableaux *tabNoms*, *tabValeurs* et *tabNombre*. Ces informations sont également disponibles via l’Explorateur d’exécution : taille de mémoire physique, virtuelle, libre, occupée, mémoire pile (stack memory) et mémoire pile disponible (free stack memory). Pour plus d’informations sur l’interprétation avancée de ces données, veuillez contacter le service technique de 4D SAS.

#### Voir aussi 

[Cache info](cache-info.md)  